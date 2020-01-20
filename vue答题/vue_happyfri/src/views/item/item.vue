<template>
  <div>
    <itemcontainer father-component="item"/>
  </div>
</template>

<script>
import {mapMutations } from "vuex";
import itemcontainer from '@/components/itemcontainer.vue'

export default {
  name: 'item',
  components: {
    itemcontainer
  },
  methods:{
    ...mapMutations(["TIMER"]),
  },
  created() {
    // this.$store.commit('TIMER')
    this.TIMER();
  }
}
</script>
<style lang="less">
</style>