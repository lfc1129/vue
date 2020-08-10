<template>
  <div>
    <one-checkbox-group v-model="checkList">
        <one-checkbox label="复选框 A"></one-checkbox>
        <one-checkbox label="复选框 B"></one-checkbox>
    </one-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
       checkList: ['复选框 A','复选框 B']
    };
  }
}
</script>

<style>

</style>