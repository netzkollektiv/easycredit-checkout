<template>
  <div class="ec-checkout">
    <div class="form-radio">
      <input class="form-radio-input" type="radio" name="paymentMethod" id="paymentMethod" value="" checked>
      <label class="form-radio-label" for="paymentMethod">
          {{ title }}<br>
          <small>{{ message }}</small>
      </label>
    </div>

    <div
      class="ec-checkout__alert"
      v-if="alert.code"
      v-html="alert.msg"
    >
    </div>

    <div
      class="ec-checkout__body"
      :class="bodyClasses"
      v-if="alert.code !== 'total'"
    >
      <ul class="ec-checkout__instalments base">
        <instalment
          v-for="(item, index) in listBase"
          v-bind:index="index"
          v-bind:instalment="item"
          v-bind:key="item.months"
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
          v-bind:key="item.months"
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
          <span>{{ totals.interest }} €</span>
        </li>
        <li class="total">
          <span>Gesamtbetrag</span>
          <span>{{ totals.total }} €</span>
        </li>
      </ul>

      <div class="ec-checkout__actions form-submit">
        <a
          @click="toggleModal"
          class="btn btn-primary"
        >{{ button }}</a>
      </div>

      <p class="ec-checkout__small-print">
        <small>
          {{ smallprint }}
        </small>
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
      <form>
        <div class="title">
          <p><strong>{{ modal.title.msg }}</strong></p>
          <div class="form-radio badges">
            <input class="form-check-input" type="radio" name="modalTitle" id="modalTitleMr" value="">
            <label class="form-check-label" for="modalTitleMr">
              {{ modal.title.mr }}
            </label>
            <input class="form-check-input" type="radio" name="modalTitle" id="modalTitleMs" value="">
            <label class="form-check-label" for="modalTitleMs">
              {{ modal.title.ms }}
            </label>
          </div>
        </div>
        <div class="privacy">
          <p><strong>{{ modal.terms.msg }}</strong></p>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="modalTerms" id="modalTerms" value="" checked>
            <label class="form-check-label" for="modalTerms">
              <small>{{ modal.terms.label }}</small>
            </label>
          </div>
        </div>
        <div class="form-submit">
          <a class="btn btn-primary">{{ modal.button }}</a>
        </div>
      </form>
    </div>
    <div
      @click="toggleModal"
      class="ec-checkout__modal-backdrop"
      :class="modalClasses"
    ></div>

    <div class="ec-checkout__sandbox">
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
    </div>
  </div>
</template>

<script>
import Instalment from './Instalment.vue'
import {bus} from '../main.js'

export default {
  name: 'Checkout',
  components: {
    Instalment
  },
  data () {
    return {
      title: 'ratenkauf by easyCredit',
      message: 'Der einfachste Ratenkauf Deutschlands',
      smallprint: 'Sollzinssatz p.a. fest für die gesamte Laufzeit 8,64 %; effektiver Jahreszins 8,99 %',
      button: 'Weiter zum Ratenkauf',
      alert: {
        code: null,
        msg: null,
        text: {
          b2c: 'ratenkauf by easyCredit ist nur für Privatpersonen verfügbar.',
          address: 'Für ratenkauf by easyCredit müssen die Versand- und die Rechnungs&shy;adresse identisch sein. <a href="">Jetzt anpassen</a>',
          total: 'Die Bestellsumme liegt außerhalb der zulässigen Beträge (200&nbsp;-&nbsp;10.000&nbsp;€).'
        }
      },
      instalments: [
        { months: 60, instalment: '83,00', interest: '929,81', total: '4.928,81' },
        { months: 54, instalment: '90,00', interest: '837,64', total: '4.836,64' },
        { months: 48, instalment: '99,00', interest: '743,41', total: '4.742,41' },
        { months: 42, instalment: '111,00', interest: '647,08', total: '4.646,08' },
        { months: 36, instalment: '127,00', interest: '552,43', total: '4.551,43' },
        { months: 33, instalment: '137,00', interest: '506,45', total: '4.505,45' },
        { months: 30, instalment: '149,00', interest: '460,68', total: '4.459,68' },
        { months: 27, instalment: '164,00', interest: '414,26', total: '4.413,26' },
        { months: 24, instalment: '183,00', interest: '367,77', total: '4.366,77' },
        { months: 21, instalment: '206,00', interest: '324,08', total: '4.323,08' },
        { months: 18, instalment: '238,00', interest: '278,69', total: '4.277,69' },
        { months: 15, instalment: '283,00', interest: '233,58', total: '4.232,58' },
        { months: 12, instalment: '350,00', interest: '189,14', total: '4.188,14' },
        { months: 9, instalment: '461,00', interest: '145,20', total: '4.144,20' },
        { months: 6, instalment: '684,00', interest: '101,31', total: '4.100,31' }
      ],
      list: {
        rows: 5,
        selected: null,
        collapsed: true,
        collapsing: false,
        button: 'Weitere Raten anzeigen +'
      },
      totals: {
        interest: null,
        total: null
      },
      modal: {
        show: false,
        heading: 'Weiter zum Ratenkauf',
        title: {
          msg: 'Für ratenkauf by easyCredit bitte eine Anrede auswählen:',
          mr: 'Herr',
          ms: 'Frau'
        },
        terms: {
          msg: 'Bitte stimmen Sie der Datenübermittlung zu:',
          label: 'Ja, ich möchte per Ratenkauf zahlen. Ich habe zur Kenntnis genommen, dass Testshop2 Ratenkauf der TeamBank AG (Partner der Genossenschaftlichen FinanzGruppe Volksbanken Raiffeisenbanken), Beuthener Str. 25, 90471 Nürnberg zur Bonitätsprüfung personenbezogene Daten wie Anrede und Name, Geburtsdatum und -ort, Kontaktdaten (Adresse, Telefon, E-Mail) sowie Angaben zur aktuellen und zu früheren Bestellungen übermittelt und das Prüfungs-ergebnis zum Zweck des Ratenkaufabschlusses erhält.',
        },
        button: 'Akzeptieren'
      }
    }
  },
  methods: {
    toggleList: function () {
      this.list.collapsing = !this.list.collapsing;
      setTimeout(() => this.list.collapsing = !this.list.collapsing, 350);
      setTimeout(() => this.list.collapsed = !this.list.collapsed, 350);
      this.list.button = !this.list.collapsed ? 'Weitere Raten anzeigen +' : 'Weniger Raten anzeigen -';

      if ( this.list.selected >= this.list.rows ) {
        bus.$emit('instalmentToggleReset');
      }
    },
    setAlert: function (code) {
      this.alert.code = code;
      this.alert.msg = this.alert.text[code];
    },
    clearAlert: function () {
      this.alert.code = null;
      this.alert.msg = null;
    },
    toggleModal: function () {
      this.modal.show = !this.modal.show;
    }
  },
  computed: {
    bodyClasses: function () {
      return {
        'faded': this.alert.code
      };
    },
    listBase: function () {
      return this.instalments.slice(0, this.list.rows)
    },
    listExtended: function () {
      return this.instalments.slice(this.list.rows)
    },
    listClasses: function () {
      return {
        'collapsing': this.list.collapsing,
        'collapsed': this.list.collapsed
      };
    },
    modalClasses: function () {
      return {
        'show': this.modal.show
      };
    }
  },
  mounted () {
    this.totals.interest = this.instalments[0].interest;
    this.totals.total = this.instalments[0].total;

    bus.$on('instalmentToggled', (data) => {
      this.list.selected = data;
      this.totals.interest = this.instalments[data].interest;
      this.totals.total = this.instalments[data].total;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
