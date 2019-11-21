import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mock from '@/mock/index'
import axios from 'axios'
import './plugins/element.js'

axios.defaults.baseURL = 'http://sancao.com:3000/';
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
