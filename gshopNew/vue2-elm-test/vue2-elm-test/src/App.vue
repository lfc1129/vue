<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
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
};
</script>

<style>
</style>
