import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "./base.css"

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

import axios from 'axios'
Vue.prototype.$axios = axios   

// import '@/common/css/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
