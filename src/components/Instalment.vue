<template>
  <li>
    <input 
      type="radio" 
      name="easycredit-duration" 
      :id="'easycreditInstallment' + instalment.zahlungsplan.anzahlRaten" 
      :value="instalment.zahlungsplan.anzahlRaten" 
      v-model="selectedInstalment"
    />
    <label :for="'easycreditInstallment' + instalment.zahlungsplan.anzahlRaten">
      <span>{{ instalment.zahlungsplan.anzahlRaten }} Monate</span> <span>{{ instalment.zahlungsplan.betragRate|formatCurrency }} € / Monat</span>
    </label>
  </li>
</template>

<script>
export default {
  name: 'Instalment',
  props: {
    instalment: Object,
    value: {
        type: Number
    }
  },
  computed: {
      selectedInstalment: {
          get() {return this.value},
          set(instalment) { this.$emit('input', instalment) }
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
