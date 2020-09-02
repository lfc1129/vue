<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{count}}</strong> item left
    </span>
    <ul class="filters">
      <li>
        <a href="#/" :class="{'selected':type=='All'}" @click="typeFun('All')">All</a>
      </li>
      <li>
        <a href="#/active" :class="{'selected':type=='Active'}" @click="typeFun('Active')">Active</a>
      </li>
      <li>
        <a
          href="#/completed"
          :class="{'selected':type=='Completed'}"
          @click="typeFun('Completed')"
        >Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearAll">Clear completed</button>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["type"]),
    ...mapGetters(["count"])
  },
  methods: {
    typeFun(typeName) {
      this.$store.commit("tab", typeName);
    },
    clearAll() {
      this.$store.commit("clearAllList");
    }
  }
};
</script>

<style>
.footer {
  height: 50px;
}
</style>