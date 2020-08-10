<template>
  <one-switch v-model="active" active-color="#ff4949"
     inactive-color="#13ce66" name="username"></one-switch>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  }
};
</script>

