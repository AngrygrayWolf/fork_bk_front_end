import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/scss/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template: '<App />'
// })