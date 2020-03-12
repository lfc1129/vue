<template>
  <div class="todo-footer">
    <label @click="selectAllFun">
      <input type="checkbox" v-model="selectAllBtn" />
    </label>
    <span>
      <span>已完成{{finishNum}}</span>
      / 全部{{ListLength}}
    </span>
    <button class="btn btn-danger" @click="clearAllSelect">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list"],
  computed: {
    ListLength() {
      return this.list.length > 0 ? this.list.length : 0;
    },
    finishNum() {
      return this.list.reduce(
        (preTotal, item) => preTotal + (item.complete ? 1 : 0),
        0
      );
    },
    selectAllBtn: {
      get: function() {
        return this.finishNum === this.ListLength;
      },
      set: function(newVal) {
        this.selectAllFun(newVal);
      }
    }
  },
  methods: {
    selectAllFun(val) {
      this.list.forEach(item => {
        item.complete = val;
      });
    },
    clearAllSelect() {
      this.$emit("clearAllSelect");
    }
  }
};
</script>

<style>
</style>