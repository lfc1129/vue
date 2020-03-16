<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <List></List>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import List from "@/components/list.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer
  },
};
</script>

<style>
</style>
