<template>
  <div>
    <Header />
    <div class="container">
      <Add @addComment="addComment"></Add>
      <List :comments="comments" @delectItem="delectItem"></List>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Add from "@/components/add.vue";
import List from "@/components/list.vue";

export default {
  name: "App",
  data() {
    return {
      name: "",
      comments: [
        {
          name: "xxx",
          content: "React不错!"
        },
        {
          name: "yyy",
          content: "React有点难!"
        }
      ]
    };
  },
  components: {
    Header,
    Add,
    List
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment)
    },
    delectItem(index){
      this.comments.splice(index,1);
      console.log(index)
    }
  }
};
</script>

<style>
</style>
