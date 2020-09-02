<template>
  <div id="app">
    <div class="todoapp">
      <todoHeader></todoHeader>
      <todoList></todoList>
      <todoFooter></todoFooter>
    </div>
  </div>
</template>

<script>
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

import todoHeader from "@/components/todoHeader";
import todoList from "@/components/todoList";
import todoFooter from "@/components/todoFooter";

export default {
  data() {
    return {
    };
  },
  methods:{
   
  },
  components: {
    todoHeader,
    todoList,
    todoFooter
  }
};
</script>

<style lang="scss">
</style>
