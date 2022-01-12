<template>
  <li>
    <input 
      :id="'easycreditInstallment' + instalment.term"
      v-model="selectedInstalment"
      type="radio"
      name="easycredit-duration"
      :value="instalment.term"
      @change.stop=""
    >
    <label :for="'easycreditInstallment' + instalment.term">
      <span>{{ instalment.term }} Monate</span> <span>{{ instalment.installment|formatCurrency }} / Monat</span>
    </label>
  </li>
</template>

<script>
export default {
  name: 'Instalment',
  filters: {
    formatCurrency (value) {
      return (value) ? String(Number(value).toFixed(2)).replace(new RegExp('\\.', 'g'), ',') + '  €' : '';
    }
  },
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
