<template>
  <div id="app">
    <div class="color_atlas_body clearfix">
      <colorAtlas :colorAtlas="colorAtlas"></colorAtlas>
      <colorRuler :colorAtlas="colorAtlas"></colorRuler>
    </div>
  </div>
</template>

<script>
import colorAtlas from "@/components/colorAtlas";
import colorRuler from "@/components/colorRuler";
export default {
  data() {
    return {
      colorAtlas: {
        rules: [
          { num: "50", color: "#810042" },
          { num: "40", color: "#F304ED" },
          { num: "15", color: "#0000FF" },
          { num: "7", color: "#61B8FF" },
          { num: "1.6", color: "#3DBA3D" },
          { num: "0.1", color: "#A6F28F" },
          { num: "0", color: "#fff" }
        ],
        numStyle: "callipers",
        alignStyle: "vertical",
        leftOrRight: "left",
        topOrBottom: "top",
        singleLength:37,
        singleWidth: 13,
      }
    };
  },
  components: {
    colorAtlas,
    colorRuler
  },
};
</script>

<style lang="scss">
.color_atlas_body {
  padding: 15px 14px;
  .color_atlas,
  .color_ruler {
    float: left;
  }
}
</style>
