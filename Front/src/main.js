import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Filtro para dar formato de numero
var numeral = require("numeral")
Vue.filter("formatNumber", (value) => numeral(value).format("0,0"))

// Filtro para dar formato de fecha
import Moment from 'moment'
Moment.locale('es')
Vue.filter('longDate',(value)=>Moment(value).format('LLLL'))

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
