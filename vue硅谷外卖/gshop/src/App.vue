<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
// 先在App.vue中引入封装的接口函数

import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'
export default {
  components: { 
   FooterGuide 
  },
  async mounted () {
    // 通过this.$store.dispatch 方法触发调用Action
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  }
}
</script>

<style>
</style>
