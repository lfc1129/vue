import Vue from "vue";
import Notice from './notice.vue'

// 创建构造器
const NoticeConstructor = Vue.extend(Notice)

export default function notice(options){
  console.log(options)
  // 创建 instance 实例
  const instance= new NoticeConstructor({
      data:options
  });
   // 挂载。
  instance.$mount();
  document.body.appendChild(instance.$el)
  return instance;
}