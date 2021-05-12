<template>
  <li>
    <input 
      :id="'easycreditInstallment' + instalment.zahlungsplan.anzahlRaten" 
      v-model="selectedInstalment" 
      type="radio" 
      name="easycredit-duration" 
      :value="instalment.zahlungsplan.anzahlRaten"
      @change.stop=""
    >
    <label :for="'easycreditInstallment' + instalment.zahlungsplan.anzahlRaten">
      <span>{{ instalment.zahlungsplan.anzahlRaten }} Monate</span> <span>{{ instalment.zahlungsplan.betragRate|formatCurrency }} / Monat</span>
    </label>
  </li>
</template>

<script>
export default {
  name: 'Instalment',
  props: {
    instalment: Object,
    value: Number
  },
  computed: {
      selectedInstalment: {
          get() {return this.value},
          set(instalment) { this.$emit('input', instalment) }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
