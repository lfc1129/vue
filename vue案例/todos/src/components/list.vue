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
export default {
  data() {
    return {
      num: null,
    };
  },
  props:["list"],
  methods: {
    delect(index){
      this.$emit("delectItem",index)
    },
    isShow(index){
       this.num = index;
    },
    isHide(){
      this.num = null;
    },
  },
};
</script>

<style>
.addBackground{
  background: #ccc;
}
</style>