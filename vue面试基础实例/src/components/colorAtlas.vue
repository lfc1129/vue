<template>
  <div class="color_atlas">
    <div class="color_title">
      <span class="title_con">色谱设置</span>
    </div>
    <div class="color_set">
      <div class="num_style row">
        <span class="title inline">数值样式</span>
        <span class="radio_box">
          <input
            class="input_radio"
            name="numStyle"
            id="callipers"
            value="callipers"
            type="radio"
            v-model="colorAtlas.numStyle"
          />
          <label class="radio_label" for="callipers">卡尺式</label>
        </span>
        <span class="radio_box">
          <input
            class="input_radio"
            name="numStyle"
            id="centered"
            value="centered"
            type="radio"
            v-model="colorAtlas.numStyle"
          />
          <label class="radio_label" for="centered">居中式</label>
        </span>
      </div>
      <div class="line"></div>
      <div class="align_style row">
        <span class="title block">排列样式</span>
        <div class="row vertical">
          <span class="radio_box">
            <input
              class="input_radio"
              name="alignStyle"
              value="vertical"
              id="vertical"
              type="radio"
              v-model="colorAtlas.alignStyle"
            />
            <label class="radio_label" for="vertical">竖排</label>
          </span>
          <span class="leftOrRight value_position">
            数值在
            <span class="btn_box">
              <span class="input_to_btn">
                <input
                  class="input_radio"
                  name="leftOrRight"
                  id="left"
                  value="left"
                  type="radio"
                  v-model="colorAtlas.leftOrRight"
                />
                <label class="btn_label left" for="left">左</label>
              </span>
              <span class="input_to_btn">
                <input
                  class="input_radio"
                  name="leftOrRight"
                  id="right"
                  value="right"
                  type="radio"
                  v-model="colorAtlas.leftOrRight"
                />
                <label class="btn_label right" for="right">右</label>
              </span>
            </span>
          </span>
        </div>
        <div class="row horizontal">
          <span class="radio_box">
            <input
              v-model="colorAtlas.alignStyle"
              class="input_radio"
              name="alignStyle"
              value="horizontal"
              id="horizontal"
              type="radio"
            />
            <label class="radio_label" for="horizontal">横排</label>
          </span>
          <span class="topOrBottom value_position">
            数值在
            <span class="btn_box">
              <span class="input_to_btn">
                <input
                  class="input_radio"
                  name="topOrBottom"
                  id="top"
                  v-model="colorAtlas.topOrBottom"
                  value="top"
                  type="radio"
                />
                <label class="btn_label top" for="top">上</label>
              </span>
              <span class="input_to_btn">
                <input
                  class="input_radio"
                  name="topOrBottom"
                  id="bottom"
                  value="bottom"
                  v-model="colorAtlas.topOrBottom"
                  type="radio"
                />
                <label class="btn_label bottom" for="bottom">下</label>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div class="line"></div>
      <div class="single_style row">
        <span class="title block">单色块的长宽</span>
        <div class="row">
          <span class="single_length">
            长
            <input
              value="20px"
              id="singleLength"
              class="input length"
              v-model="colorAtlas.singleLength"
            />
          </span>
          <span class="single_width">
            宽
            <input
              value="20px"
              id="singleWidth"
              class="input width"
              v-model="colorAtlas.singleWidth"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["colorAtlas"]
};
</script>

<style lang="scss">
.color_atlas {
  width: 265px;
  height: 217px;
  background-color: #f8feff;
  box-shadow: 0px 6px 23px 1px rgba(0, 0, 0, 0.18);
  border-radius: 2px;
  overflow: hidden;
  .color_title {
    width: 265px;
    height: 32px;
    font-size: 14px;
    background-color: #e6f4f7;
    .title_con {
      position: relative;
      display: inline-block;
      padding-right: 8px;
      width: 68px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      color: #fff;
      background: url(../assets/title-bg.svg) no-repeat center;
      background-size: 100%;
    }
  }
  .color_set {
    .row {
      padding: 0 10px;

      .row {
        &.vertical {
          margin-top: -12px;
        }
        margin-top: -8px;
        .input {
          box-sizing: border-box;
          width: 37px;
          height: 20px;
          border: 1px solid #c2c0c0;
          text-align: center;
          color: #656565;
          margin-right: 9px;
          margin-left: -1px;
          font-size: 12px;
        }
      }
      .title {
        position: relative;
        padding: 0 16px 0 12px;
        &::before {
          position: absolute;
          left: 3px;
          top: 10px;
          content: "";
          width: 3px;
          height: 12px;
          background-color: #f89751;
        }
        &.inline {
          display: inline-block;
        }
        &.block {
          display: block;
        }
      }

      .radio_box {
        position: relative;
        input {
          position: absolute;
          visibility: hidden;
          visibility: visible\9;
          top: 50%;
          margin-top: -6px;
          &:checked::before {
            background: url(../assets/check.svg) no-repeat center;
            background-size: cover;
          }
          &::before {
            visibility: visible;
            display: inline-block;
            content: "";
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: url(../assets/no-check.svg) no-repeat center;
            background-size: cover;
          }
        }
        label {
          padding: 0 16px;
          cursor: pointer;
        }
      }
    }
    .line {
      display: block;
      margin: 0 10px;
      height: 1px;
      background: url(../assets/line.png) center;
    }
    .align_style {
      .btn_box {
        display: inline-block;
        border: 1px solid #38a7f0;
        border-radius: 1px;
        line-height: 14px;
        height: 14px;
        width: 39px;
        font-size: 0;
        input {
          display: none;
          &:checked + label {
            background-color: #38a7f0;
            border-right: 1px solid #38a7f0;
            color: #fff;
          }
        }
        .input_to_btn label {
          display: inline-block;
          content: "";
          width: 19px;
          height: 14px;
          font-size: 12px;
          text-align: center;
          background-color: #fff;
          cursor: pointer;
          user-select: none;
        }
      }
    }
  }
}
</style>