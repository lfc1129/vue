// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
// import App from './App'
import OneUI from '../packages'
import App from './button'
// import App from './dialog'
// import App from './input'
// import App from './switch'
// import App from './radio'
// import App from './radio-group'
// import App from './checkbox'
// import App from './checkbox-group'
// import App from './form'


// 第一步：导入组件
// import OneButton from './components/button.vue'
// import OneDialog from './components/dialog.vue'
// import OneInput from './components/input.vue'
// import OneSwitch from './components/switch.vue'
// import OneRadio from './components/radio.vue'
// import OneRadioGroup from './components/radio-group.vue'
// import Onecheckbox from './components/checkbox.vue'
// import OnecheckboxGroup from './components/checkbox-group.vue'
// import OneForm from './components/form.vue'
// import OneFormItem from './components/form-item.vue'

// 第二步：注册组件,设置(组件名，组件)
// Vue.component(OneButton.name, OneButton)
// Vue.component(OneDialog.name, OneDialog)
// Vue.component(OneInput.name, OneInput)
// Vue.component(OneSwitch.name, OneSwitch)
// Vue.component(OneRadio.name, OneRadio)
// Vue.component(OneRadioGroup.name, OneRadioGroup)
// Vue.component(Onecheckbox.name, Onecheckbox)
// Vue.component(OnecheckboxGroup.name, OnecheckboxGroup)
// Vue.component(OneForm.name, OneForm)
// Vue.component(OneFormItem.name, OneFormItem)


// import './assets/fonts/iconfont.css'
Vue.use(OneUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
