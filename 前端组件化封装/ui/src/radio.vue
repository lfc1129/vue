<template>
  <div>
    <one-radio v-model="gender" label="0">男</one-radio>
    <one-radio v-model="gender" label="1">女</one-radio>
    <br>
    <one-radio v-model="gender" label="0"></one-radio>
    <one-radio v-model="gender" label="1"></one-radio>
  </div>
</template>

<script>
export default {
    data () {
        return {
            gender:'1'
        }
    }
};
</script>

<style>
</style>