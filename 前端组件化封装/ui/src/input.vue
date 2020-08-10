<template>
  <div>
    <!-- <input :value="username" @input="username=$event.target.value"/>
    相当于
    <input v-model="username"/> -->
    <one-input placeholder="请输入密码" type="password" name="name" v-model="username"></one-input>
    <one-input placeholder="请输入密码" type="password" name="name" v-model="username" clearable></one-input>
    <one-input placeholder="请输入密码" type="password" name="name" v-model="username" showPassword></one-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  }
};
</script>

<style>
</style>