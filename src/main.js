import Vue from 'vue'
import CheckoutLabel from './components/CheckoutLabel.vue'
import Checkout from './components/Checkout.vue'

// (optional) 'Custom elements polyfill'
import '@webreflection/custom-elements-no-builtin';
import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement)

import './assets/css/main.scss'

export const bus = new Vue()

Vue.config.productionTip = false

Vue.filter('formatCurrency', function (value) {
    return (value) ? String(value).replace(new RegExp('\\.', 'g'), ',') + '  €' : '';
})

Vue.customElement('easycredit-checkout-label', CheckoutLabel)
Vue.customElement('easycredit-checkout', Checkout)
