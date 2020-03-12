<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length==0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item,index) in comments" :key="item.id">
        <div class="handle">
          <a href="javascript:;" @click="delect(index)">删除</a>
        </div>
        <p class="user">
          <span>{{item.name}}</span>
          <span>说:</span>
        </p>
        <p class="centence">{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["comments"],
  methods: {
    delect(index){
      this.$emit("delectItem",index)
    }
  }
};
</script>

<style>
</style>