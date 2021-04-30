import Vue from 'vue'
import CheckoutLabel from './components/CheckoutLabel.vue'
import Checkout from './components/Checkout.vue'

// (optional) 'Custom elements polyfill'
import 'document-register-element/build/document-register-element'
import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement)

import './assets/css/main.scss'

export const bus = new Vue()

Vue.config.productionTip = false

Vue.customElement('easycredit-checkout-label', CheckoutLabel)
Vue.customElement('easycredit-checkout', Checkout, {
    shadow: true,
    beforeCreateVueInstance(root) {
      const rootNode = root.el.getRootNode();
  
      if (rootNode instanceof ShadowRoot) {
        root.shadowRoot = rootNode;
      } else {
        root.shadowRoot = document.head;
      }
      return root;
    },
  })