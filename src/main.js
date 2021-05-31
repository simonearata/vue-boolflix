import Vue from 'vue'
import App from './App.vue'
import FlagIcon from 'vue-flag-icon'
import '@fortawesome/fontawesome-free/css/all.css' 
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.use(FlagIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')

