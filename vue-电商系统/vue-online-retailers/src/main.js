import Vue from 'vue'

import router from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import VueCookie from 'vue-cookie'
// import env from './env'

axios.defaults.baseURL = '/api';
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000; 
Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie);

// mock开关
const mock = false;
if(mock){
  require('./mock/api');
}

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    console.log(path)
    if (path != '#/index'){
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  }else{
    Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
});
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
