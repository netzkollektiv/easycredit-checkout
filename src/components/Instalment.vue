<template>
  <li>
    <input 
      type="radio" 
      name="easycredit-duration" 
      :id="'easycreditInstallment' + instalment.zahlungsplan.anzahlRaten" 
      :value="instalment.zahlungsplan.anzahlRaten" 
      v-on:change.stop="toggleInstalment"
      v-on:click.stop=""
    />
    <label :for="'easycreditInstallment' + instalment.zahlungsplan.anzahlRaten">
      <span>{{ instalment.zahlungsplan.anzahlRaten }} Monate</span> <span>{{ instalment.zahlungsplan.betragRate|formatCurrency }} € / Monat</span>
    </label>
  </li>
</template>

<script>
import {bus} from '../main.js'

export default {
  name: 'Instalment',
  props: ['index', 'instalment'],
  methods: {
    toggleInstalment: function () {
      bus.$emit('instalmentToggled', this.index);
    }
  },
  filters: {
    formatCurrency (value) {
      return (value) ? value.replace('.', ',') : '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
