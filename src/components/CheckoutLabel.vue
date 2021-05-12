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

<style lang="scss">
  @import "../assets/css/main.scss";
</style>
