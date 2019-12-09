// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 在入口的main.js引入Button
import {Button} from 'mint-ui'
import './mock/mockServer.js'

import './filters'

import VueLazyload from 'vue-lazyload'
// 将一张loading图片加载进来
import loading from './common/imgs/loading.gif'

Vue.use(VueLazyload, { // 内部自定义一个指令lazy
	loading
})

// 注册全局组件
Vue.component(Button.name, Button)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
