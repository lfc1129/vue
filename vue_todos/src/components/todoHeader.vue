<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="inputValue" />
    <a-button type="primary" class="primary" @click="add()">添加</a-button>
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      inputValue:''
    };
  },
  methods: {
    add() {
      if (this.inputValue) {
        // this.$store.dispatch("addList", {
        //   bool: false,
        //   skill: this.inputValue
        // });
        this.$store.commit("addListValue",{
          bool: false,
          skill: this.inputValue
        })
      }
    }
  },
  // watch:{
  //     inputValue: {
  //       deep: true, // 深度监视
  //       handler(newVal, oldName) {
  //         // this.$store.commit("updateList",newVal);
  //         console.log(newVal, oldName)
  //       },
  //     }
  // }
};
</script>

<style>
.primary {
  position: absolute !important;
  right: 0;
  top: 0;
  height: 65px !important;
}
</style>