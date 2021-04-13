<template>
  <div class="ec-checkout-label">
    <strong>{{ title }}</strong><br />
    <small>{{ message }}</small>
  </div>
</template>

<script>
export default {
  name: 'CheckoutLabel',
  components: {
  },
  props: {
  },
  data () {
    return {
      title: 'ratenkauf by easyCredit',
      message: 'Ganz entspannt in Raten zahlen.',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
