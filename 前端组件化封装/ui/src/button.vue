<template>
  <div id="app">
    <div class="row">
      <one-button plain>按钮</one-button>
      <one-button plain type="primary">primary按钮</one-button>
      <one-button plain type="success">success按钮</one-button>
      <one-button plain type="info">info按钮</one-button>
      <one-button plain type="danger">danger按钮</one-button>
      <one-button plain type="warning">warning按钮</one-button>
    </div>
    <br>
    <div class="row">
      <one-button icon="bluetoothon" @click="getInfo" disabled></one-button>
      <one-button type="primary" icon="camera">照相机</one-button>
      <one-button type="success" icon="course"></one-button>
      <one-button type="info" icon="bluetooth_link"></one-button>
      <one-button type="danger" icon="addto"></one-button>
      <one-button type="warning" icon="audio"></one-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    getInfo() {
      console.log("获取信息！！"); //获取信息！！
    }
  }
};
</script>

<style>
</style>
