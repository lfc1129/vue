<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="selectAllBtn"
      @click="allSelectFun()"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="(site,index) in tabList" :key="index">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="site.bool" />
          <label>{{ site.skill }}</label>
          <button class="destroy" @click="delect(index)"></button>
        </div>
        <input class="edit" value="Rule the web" />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getList");
    },
    delect(index) {
      this.$store.commit("removeItem", index);
    },
    allSelectFun(newName){
      this.$store.commit("allSelect",newName);
    }
  },
  computed: {
    ...mapState(["info"]),
    ...mapGetters(["tabList","activeTab"]),
    selectAllBtn: {
      get:function(){
        return this.activeTab.length==this.info.length
      },
      set:function(newVal){
        this.allSelectFun(newVal)
      }
    }
  },
 
};
</script>

<style lang="scss">
</style>