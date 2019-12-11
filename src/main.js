import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueCodeHighlight from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-tomorrow.css'

Vue.use(VueCodeHighlight) //registers the v-highlight directive

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
