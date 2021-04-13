<template>
  <div id="app">
    <CheckoutLabel/>
    <Checkout/>
  </div>
</template>

<script>
import CheckoutLabel from './components/CheckoutLabel.vue'
import Checkout from './components/Checkout.vue'

export default {
  name: 'app',
  components: {
    CheckoutLabel,
    Checkout
  }
}
</script>

<style lang="scss">
#app {
}
</style>
