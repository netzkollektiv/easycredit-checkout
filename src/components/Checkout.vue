<template>
  <div class="ec-checkout" v-if="isActive">
    <div class="ec-payment-plan" v-if="getPaymentPlan">
      <strong>Ihre Auswahl:</strong>
      <ul class="ec-checkout__instalments payment-plan">
        <li class="is-selected">
          <label>
            <span>{{ getPaymentPlan.anzahlRaten }} Raten</span>
            <span>à {{ getPaymentPlan.betragRate|formatCurrency }}</span>
          </label>
        </li>
      </ul>
      <p class="ec-checkout__small-print">
        <small>Die Raten im Detail:
          {{ getPaymentPlan.anzahlRaten - 1 }} x {{ getPaymentPlan.betragRate|formatCurrency }}, 1 x {{ getPaymentPlan.betragLetzteRate|formatCurrency }}
        </small>
      </p>
    </div>

    <div class="ec-checkout-wrapper" v-if="!getPaymentPlan">
      <div
        class="ec-checkout__alert"
        v-if="alert"
        v-html="alert"
      >
      </div>

      <div
        class="ec-checkout__body"
        :class="bodyClasses"
        v-if="!alert"
      >
        <instalments :instalments="instalments" v-model="selectedInstalment" />

        <ul class="ec-checkout__totals">
          <li>
            <span>Zinsen</span>
            <span>{{ totals.interest|formatCurrency }}</span>
          </li>
          <li class="total">
            <span>Gesamtbetrag</span>
            <span>{{ totals.total|formatCurrency }}</span>
          </li>
        </ul>

        <div class="ec-checkout__actions form-submit">
          <button
            type="button"
            v-on:click.stop="toggleModal"
            class="btn btn-primary"
          >{{ button }}</button>
        </div>

        <p class="ec-checkout__small-print">
          <small v-html="example" />
        </p>
      </div>

      <div
        class="ec-checkout__modal"
        :class="modalClasses"
      >
        <div
          @click="toggleModal"
          class="close"
        ></div>
        <h3 class="heading">{{ modal.heading }}</h3>
        <div class="title" v-if="askForPrefix">
          <p><strong>{{ modal.prefix.msg }}</strong></p>
          <div class="form-radio badges">
            <span  v-for="(label, key) in modal.prefix.options" v-bind:key="key">
              <input class="form-check-input"
                  type="radio"
                  name="easycredit-prefix"
                  :id="'modalPrefix' + key"
                  v-on:change.stop=""
                  v-model="modal.prefix.value"
                  v-bind:value="key"
                  />
              <label class="form-check-label" :for="'modalPrefix' + key">
                {{ label }}
              </label>
            </span>
          </div>
        </div>
        <div class="privacy">
          <p><strong>{{ modal.agreement.msg }}</strong></p>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="easycredit-agreement" id="modalAgreement" value="1" v-model="modal.agreement.checked" v-on:change.stop="">
            <label class="form-check-label" for="modalAgreement">
              <small>{{ modal.agreement.label }}</small>
            </label>
          </div>
        </div>
        <div class="form-submit">
          <button class="btn btn-primary" type="button" @click="onSubmit" :disabled="submitDisabled">{{ modal.button.label }}</button>
        </div>
      </div>
      <div
        @click="toggleModal"
        class="ec-checkout__modal-backdrop"
        :class="modalClasses"
      ></div>
    </div>
  </div>
</template>

<script>
import Instalments from './Instalments.vue'
import fetchJsonp from 'fetch-jsonp'

export default {
  name: 'Checkout',
  components: {
    Instalments
  },
  props: {
    isActive: { 
      type: Boolean, 
      default: true 
    },
    amount: Number,
    webshopId: String,
    alert: String,
    paymentPlan: {
      type: String,
      default: ''
    },
    askForPrefix: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      title: 'ratenkauf by easyCredit',
      message: 'Ganz entspannt in Raten zahlen.',
      example: null,
      button: 'Weiter zum Ratenkauf',
      instalments: [],
      selectedInstalment: null,
      totals: {
        interest: null,
        total: null
      },
      modal: {
        show: false,
        heading: 'Weiter zum Ratenkauf',
        prefix: {
          value: null,
          msg: 'Für ratenkauf by easyCredit bitte eine Anrede auswählen:',
          options: {
            "HERR": 'Herr',
            "FRAU": 'Frau'
          }
        },
        agreement: {
          msg: 'Bitte stimmen Sie der Datenübermittlung zu:',
          label: 'Ja, ich möchte per Ratenkauf zahlen. Ich habe zur Kenntnis genommen, dass Testshop2 Ratenkauf der TeamBank AG (Partner der Genossenschaftlichen FinanzGruppe Volksbanken Raiffeisenbanken), Beuthener Str. 25, 90471 Nürnberg zur Bonitätsprüfung personenbezogene Daten wie Anrede und Name, Geburtsdatum und -ort, Kontaktdaten (Adresse, Telefon, E-Mail) sowie Angaben zur aktuellen und zu früheren Bestellungen übermittelt und das Prüfungs-ergebnis zum Zweck des Ratenkaufabschlusses erhält.',
          checked: false
        },
        button: {
          label: 'Akzeptieren',
          isDisabled: false
        }
      }
    }
  },
  computed: {
    bodyClasses () {
      return {
        'faded': this.alert
      }
    },
    modalClasses () {
      return {
        'show': this.modal.show
      }
    },
    getPaymentPlan () {
      if (this.alert) {
        return false
      }

      try {
        if (this.paymentPlan) {
          return JSON.parse(this.paymentPlan)
        }
      } catch (e) {
        console.error(e);
      }

      return false
    },
    submitDisabled () {
      return this.modal.button.isDisabled || 
        !this.modal.agreement.checked ||
        !this.isPrefixValid()
    }
  },
  watch: {
    selectedInstalment(value) {
      var instalment = this.instalments.find((item)=> item.zahlungsplan.anzahlRaten == value)
      this.totals.interest = instalment.zinsen.anfallendeZinsen
      this.totals.total = instalment.gesamtsumme
    }
  },
  methods: {
    onSubmit (...args) {
      this.modal.button.isDisabled = true
      this.$emit('submit', ...args)
      this.modal.button.isDisabled = false
    },
    toggleModal () {
      this.modal.show = !this.modal.show
      this.modal.button.isDisabled = !this.modal.show;
    },
    isPrefixValid () {
      return !this.askForPrefix || Object.keys(this.modal.prefix.options)
        .indexOf(this.modal.prefix.value) >= 0
    },
    getInstalments () {
      return fetchJsonp('//ratenkauf.easycredit.de/ratenkauf-ws/rest/v2/modellrechnung/durchfuehren?webshopId=' + this.webshopId + '&finanzierungsbetrag=' + this.amount)
        .then((response) => {
          return response.json()
        }).then((json) => {
          this.instalments = json.ergebnis.reverse()
          this.example = json.repraesentativesBeispiel

        }).catch(() => {
          this.alert = 'Die Bestellsumme liegt außerhalb der zulässigen Beträge (200&nbsp;-&nbsp;10.000&nbsp;€).'
        })
    },
    getAgreement () {
      return fetchJsonp('//ratenkauf.easycredit.de/ratenkauf-ws/rest/v2/texte/zustimmung/' + this.webshopId)
        .then((response) => {
          return response.json()
        }).then((json) => {
          this.modal.agreement.label = json.zustimmungDatenuebertragungPaymentPage
        }).catch((e) => {
          console.log(e)
          this.alert = 'Es ist ein Fehler aufgetreten.'
        })
    }
  },
  filters: {
    formatCurrency (value) {
      return (value) ? value.replaceAll('.', ',') + '  €' : '';
    }
  },
  async mounted () {
    if (this.amount > 0 && !this.alert && !this.paymentPlan) {
      await this.getInstalments(this.amount)
      this.selectedInstalment = this.instalments.find(()=> true).zahlungsplan.anzahlRaten
      await this.getAgreement()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
