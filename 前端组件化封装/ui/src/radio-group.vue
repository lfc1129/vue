<template>
  <div>
    <one-radio-group  v-model="gender">
      <one-radio label="0"></one-radio>
      <one-radio label="1"></one-radio>
    </one-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: "1"
    };
  }
};
</script>

<style>
</style>