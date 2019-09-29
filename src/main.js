import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import "@/assets/style.css"

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
