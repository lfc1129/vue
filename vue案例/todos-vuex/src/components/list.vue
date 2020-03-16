<template>
 <ul class="todo-main">
        <li v-for="(item,index) in list" :key="item.id" @mouseenter="isShow(index)" @mouseleave="isHide()"  :class="{addBackground:index == num}">
          <label>
            <input type="checkbox"  v-model="item.complete"/>
            <span>{{item.title}}</span>
          </label>
          <button class="btn btn-danger"  v-show="index==num" @click="delect(index)">删除</button>
        </li>
      </ul>
</template>

<script>
import {mapState} from  'vuex'
import storageUtils from '@/utils/storageUtils'
export default {
  data() {
    return {};
  },
  methods: {
    
    delect(index){
      this.$store.dispatch('delectItem', index)
    },
    isShow(index){
       this.$store.state.num = index;
    },
    isHide(){
      this.$store.state.num = null;
    },
  },
  computed:{
    ...mapState(["list","num"])
  },
  watch:{
      list: {
        deep: true, // 深度监视
        handler: storageUtils.saveTodos,
      }
  }
};
</script>

<style>
.addBackground{
  background: #ccc;
}
</style>