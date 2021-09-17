import Vue from 'vue'
import App from './App.vue'
import DayCheckIn from './components/index.js'
Vue.config.productionTip = false
Vue.use(DayCheckIn)

new Vue({
  render: h => h(App),
}).$mount('#app')
