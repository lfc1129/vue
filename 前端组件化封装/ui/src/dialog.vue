<template>
  <div>
    <one-button plain @click="visible=true">按钮</one-button>
    <one-dialog title="温馨提示" width="80%" top="200px" :visible.sync="visible">
      <!-- 使用v-slot指定插槽进行编辑 -->
      <template v-slot:title>
        <h3 style="color:red">我是标题</h3>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <one-button @click="visible=false">取消</one-button>
        <one-button type="primary">确定</one-button>
      </template>
    </one-dialog>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>