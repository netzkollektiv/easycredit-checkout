<template>
  <div class="ec-checkout" v-if="isActive">
    <div class="ec-payment-plan" v-if="getPaymentPlan">
      <strong>Ihre Auswahl</strong><br />
      {{ getPaymentPlan }}
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
        <ul class="ec-checkout__instalments base">
          <instalment
            v-for="(item, index) in listBase"
            v-bind:index="index"
            v-bind:instalment="item"
            v-bind:key="item.anzahlRaten"
          />
        </ul>
        <ul
          class="ec-checkout__instalments extended"
          :class="listClasses"
        >
          <instalment
            v-for="(item, index) in listExtended"
            v-bind:index="list.rows + index"
            v-bind:instalment="item"
            v-bind:key="item.anzahlRaten"
          />
        </ul>
        <ul class="ec-checkout__instalments actions">
          <li
            @click="toggleList"
            class="more"
            :class="listClasses"
          >
            {{ list.button }}
          </li>
        </ul>

        <ul class="ec-checkout__totals">
          <li>
            <span>Zinsen</span>
            <span>{{ totals.interest|formatCurrency }} €</span>
          </li>
          <li class="total">
            <span>Gesamtbetrag</span>
            <span>{{ totals.total|formatCurrency }} €</span>
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
                  v-on:change.stop="prevent"
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
            <input class="form-check-input" type="checkbox" name="easycredit-agreement" id="modalAgreement" value="1" v-model="modal.agreement.checked" v-on:change.stop="prevent">
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

    <!-- div class="ec-checkout__sandbox">
      <strong>Ansicht wählen:</strong>
      <a
        @click="clearAlert"
      >Standard</a>
      <a
        @click="setAlert('b2c')"
      >Geschäftskunde</a>
      <a
        @click="setAlert('address')"
      >abweichende Adressen</a>
      <a
        @click="setAlert('total')"
      >Bestellsumme unzulässig</a>
    </div -->
  </div>
</template>

<script>
import Instalment from './Instalment.vue'
import {bus} from '../main.js'
import fetchJsonp from 'fetch-jsonp'

export default {
  name: 'Checkout',
  components: {
    Instalment
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
      list: {
        rows: 5,
        selected: null,
        collapsed: false,
        button: 'Weitere Raten anzeigen +'
      },
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
    listBase () {
      return this.instalments.slice(0, this.list.rows)
    },
    listExtended () {
      return this.instalments.slice(this.list.rows)
    },
    listClasses () {
      return {
        'collapsed': this.list.collapsed
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
  methods: {
    onSubmit (...args) {
      this.modal.button.isDisabled = true
      this.$emit('submit', ...args)
      this.modal.button.isDisabled = false
    },
    toggleList () {
      this.list.collapsed = !this.list.collapsed
      this.list.button = !this.list.collapsed ? 'Weitere Raten anzeigen +' : 'Weniger Raten anzeigen -'

      if ( this.list.selected >= this.list.rows ) {
        bus.$emit('instalmentToggleReset')
      }
    },
    toggleModal () {
      this.modal.show = !this.modal.show
      this.modal.button.isDisabled = !this.modal.show;
    },
    prevent () {
      return null
    },
    isPrefixValid () {
      return !this.askForPrefix || Object.keys(this.modal.prefix.options)
        .indexOf(this.modal.prefix.value) >= 0
    },
    getInstalments () {
      fetchJsonp('//ratenkauf.easycredit.de/ratenkauf-ws/rest/v2/modellrechnung/durchfuehren?webshopId=' + this.webshopId + '&finanzierungsbetrag=' + this.amount)
        .then((response) => {
          return response.json()
        }).then((json) => {
          this.instalments = json.ergebnis.reverse()
          this.example = json.repraesentativesBeispiel

          if (this.instalments.length > 0) {
            this.totals.interest = this.instalments[0].zinsen.anfallendeZinsen
            this.totals.total = this.instalments[0].gesamtsumme
          }
        }).catch(() => {
          this.alert = 'Die Bestellsumme liegt außerhalb der zulässigen Beträge (200&nbsp;-&nbsp;10.000&nbsp;€).'
        })
    },
    getAgreement () {
      fetchJsonp('//ratenkauf.easycredit.de/ratenkauf-ws/rest/v2/texte/zustimmung/' + this.webshopId)
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
      return (value) ? value.replace('.', ',') : '';
    }
  },
  async mounted () {
    bus.$on('instalmentToggled', (data) => {
      if (this.instalments.length == 0) {
        return;
      }
      this.list.selected = data
      this.totals.interest = this.instalments[data].zinsen.anfallendeZinsen
      this.totals.total = this.instalments[data].gesamtsumme
    })

    if (!this.alert) {
      await this.getInstalments(this.amount)
      await this.getAgreement()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
