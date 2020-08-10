<template>
  <div class="one-form-item">
    <label :style="labelStyle" class="one-form-item_label">{{label}}</label>
    <div class="one-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "oneFormItem",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  inject: ["Form"],
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      };
    }
  }
};
</script>

 provide () {
    return {
      Form: this
    }
  },