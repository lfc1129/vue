<template>
  <one-form :model="model" label-width="80px">
    <one-form-item label="活动名称">
      <one-input placeholder="请输入内容" v-model="model.username"></one-input>
    </one-form-item>
    <one-form-item label="活动名称">
      <one-switch v-model="model.active"></one-switch>
    </one-form-item>
  </one-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        active: false
      }
    };
  }
};
</script>

<style>
</style>