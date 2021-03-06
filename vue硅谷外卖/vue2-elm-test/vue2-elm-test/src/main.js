// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 在入口的main.js引入Button
import {Button} from 'mint-ui'
import './mock/mockServer.js'


Vue.config.productionTip = false

// 注册全局组件
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
