import Vue from 'vue'
import CheckoutLabel from './components/CheckoutLabel.vue'
import Checkout from './components/Checkout.vue'

Vue.filter('formatCurrency', function (value) {
    return (value) ? String(value).replace(new RegExp('\\.', 'g'), ',') + '  €' : '';
})

Vue.customElement('easycredit-checkout-label', CheckoutLabel)
Vue.customElement('easycredit-checkout', Checkout)
