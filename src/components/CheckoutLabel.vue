<template>
  <div class="ec-checkout-label-container">
    <div class="ec-checkout-label">
      <strong>{{ title }}</strong><br>
      <small>{{ message }}</small>
    </div>
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
<style lang="scss">
  @import "../assets/css/main.scss";
</style>
