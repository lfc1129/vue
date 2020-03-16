<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAllBtn"/>
    </label>
    <span>
      <span>已完成{{finishNum}}</span>
      / 全部{{ListLength}}
    </span>
    <button class="btn btn-danger" @click="clearAllSelect">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data() {
    return {};
  },
  computed: {
     ...mapGetters(["ListLength","finishNum"]),
    selectAllBtn: {
      get: function() {
        return this.$store.getters.isAllSelect
      },
      set: function(newVal) {
        this.$store.dispatch("selectAllFun",newVal)
      }
    }
  },
  methods: {
    clearAllSelect() {
      this.$store.dispatch('clearAllSelect')
    }
  }
};
</script>

<style>
</style>