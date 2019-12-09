<template>
  <div class="star" :class="'star-'+starSize">
    <span class="star-item" v-for="(item,index) in num" :key='index' :class="item"></span>

  </div>
</template>

<script>
  // 类名常量
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'
export default {
  data() {
    return {
        type:''
    };
  },
  props: {
    starNum: Number,
    starSize: Number
  },
  computed:{
      num(){
           const {starNum} = this;
           let arr=[];
           const Num= Math.floor(starNum);
           for(let i=0;i<Num;i++){
               arr.push(CLASS_ON)
           }
           if((starNum*10 - Num*10)>5){
              arr.push(CLASS_HALF)
           }else{
              arr.push(CLASS_OFF)  
           }
           return arr;
      }
  }
};
</script>

<style lang='less'>
@import "../../common/mixins/mixins.less";
.star {
  float: left;
  font-size: 0;
  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image("./images/star48_on");
      }
      &.half {
        .bg-image("./images/star48_half");
      }
      &.off {
        .bg-image("./images/star48_off");
      }
    }
  }
  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image("./images/star48_on");
      }
      &.half {
        .bg-image("./images/star48_half");
      }
      &.off {
        .bg-image("./images/star48_off");
      }
    }
  }
  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image("./images/star48_on");
      }
      &.half {
        .bg-image("./images/star48_half");
      }
      &.off {
        .bg-image("./images/star48_off");
      }
    }
  }
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
}
</style>