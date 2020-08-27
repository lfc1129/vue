<template>
  <div
    class="color_ruler"
    :class="[colorAtlas.numStyle=='callipers'?'callipers':'centered',colorAtlas.alignStyle=='vertical'?[[colorAtlas.leftOrRight=='left'?'left':'right'],'vertical']:[[colorAtlas.topOrBottom=='top'?'top':'bottom'],'horizontal']]"
  >
    <span class="ruler_unit">单位:mm</span>
    <ul
      class="clearfix ruler_box"
      :class="[colorAtlas.alignStyle=='vertical'?'vertical':'horizontal']"
      :style="{'min-width':colorAtlas.alignStyle=='vertical'?'auto':'273px'}"
    >
      <li
        class="ruler_num"
        v-for="(item,index) in colorAtlas.rules"
        :key="index"
        :style="{backgroundColor:item.color,'width':colorAtlas.alignStyle=='vertical'?colorAtlas.singleWidth+'px':colorAtlas.singleLength+'px','height':colorAtlas.alignStyle=='vertical'?colorAtlas.singleLength+'px':colorAtlas.singleWidth+'px'}"
      >
        <i class="num_text">{{item.num}}</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["colorAtlas"]
};
</script>

<style lang="scss">
.color_ruler {
  margin: 21px 64px;
  color: #000;
  min-height: 196px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  white-space: nowrap;
  .ruler_box {
    .ruler_num {
      border: 1px solid #000;
      position: relative;
      margin: auto;

      .num_text {
        display: block;
        line-height: 1em;
        position: absolute;
      }
    }
    &.horizontal {
      &:last-child {
        border-right: 1px solid #000;
      }
      .ruler_num {
        float: right;
        .num_text {
          width: 100%;
        }
      }
    }
  }
  &.callipers {
    &.vertical {
      .num_text {
        bottom: calc(-0.5em - 1px);
      }
    }
    &.horizontal {
      .num_text {
        text-align: center;
        right: 50%;
      }
    }
    &.top {
      .num_text {
        top: -17px;
      }
    }
    &.bottom {
      .num_text {
        bottom: -17px;
      }
    }
  }
  &.centered {
    &.horizontal {
      .num_text {
        text-align: center;
      }
    }
    &.vertical {
      .num_text {
        top: 50%;
        margin-top: -0.5em;
      }
    }
  }
  &.vertical {
    &.left {
      .num_text {
        text-align: right;
        right: calc(100% + 7px);
      }
    }
    &.right {
      .num_text {
        text-align: left;
        left: calc(100% + 5px);
      }
    }
    .ruler_num {
      border-top: none;
    }
  }
  &.horizontal {
    flex-direction: row-reverse;
    &.top {
      .num_text {
        top: -17px;
      }
    }
    &.bottom {
      .num_text {
        bottom: -17px;
      }
    }
    .ruler_unit {
      margin-left: 6px;
    }
    .ruler_num {
      border-right: none;
    }
  }
  .ruler_unit {
    line-height: 24px;
  }
}
</style>