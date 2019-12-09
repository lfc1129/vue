<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li
            class="menu-item"
            :class="{current:isActive==index}"
            v-for="(good, index) in goods"
            :key="index"
            @click="addActive(index)"
          >
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon" />
              {{good.name}}
            </span>
          </li>
          <li class="menu-item">
            <span class="text bottom-border-1px">
              <img
                class="icon"
                src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png"
              /> 优惠
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(food, index) in good.foods"
                :key="index"
                @click="showFood(food)"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
       <ShopCart />
    </div>
    <Food :food="food" ref="food" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BScroll from "better-scroll";
import CartControl from "@/components/CartControl/CartControl";
import Food from "@/components/Food/Food.vue";
import ShopCart from "@/components/ShopCart/ShopCart";
export default {
  data() {
    return {
      scrollY: 0, //当前索引
      tops: [], // 包含右侧所有分类小列表的 top 值
      food: {}, // 需要显示的food
      scrollTo: 0, //右侧 Y 轴滑动的坐标
      keys: true
    };
  },
  components: {
    CartControl,
    Food,
    ShopCart,
  },
  computed: {
    ...mapState(["goods"]),
    isActive() {
      const { scrollTo, tops } = this;

      const index = tops.findIndex((top, index) => {
        return scrollTo >= tops[index] && scrollTo < tops[index + 1];
      });
      // for(let i=0;i<tops.length;i++){
      //   // if(tops[i]<=scrollTo<=tops[i+1]){
      //   //   this.scrollY=i;
      //   // }
      //   return tops[i] <scrollTo && scrollTo< tops[i+1]
      // }

      //  console.log(indexs)
      return index;

      // 根据条件计算产生一个结果
      // const index = tops.findIndex((top, index) => {
      //   // console.log(top)
      // // scrollY>=当前top && scrollY<下一个top
      // return scrollTo >= top && scrollTo < tops[index + 1]
      // })
      // // 返回结果(也就是当前的scrollY值属于第几个li区间)
      // console.log(index)
      // return index
    }
  },
  mounted() {
    this.$store.dispatch("getShopGoods", () => {
      // 数据更新后执行
      this.$nextTick(() => {
        // 列表数据更新显示后执行
        this.init();
        this.initHeight();
      });
    });
  },
  methods: {
    addActive(currentIndex) {
      this.scrollY = currentIndex;
      const { tops } = this;
      this.foodsScroll.scrollTo(0, -tops[currentIndex], 300);
    },
    init() {
      new BScroll(".menu-wrapper", {
        click: true
      });
      this.foodsScroll = new BScroll(".foods-wrapper", {
        probeType: 3, // 因为惯性滑动不会触发
        click: true
      });
      // 给右侧列表绑定scroll监听
      this.foodsScroll.on("scroll", ({ x, y }) => {
        this.scrollTo = Math.abs(y);
      });
    },
    initHeight() {
      let ItemListObj = document.getElementsByClassName("food-list-hook");
      // const topMain = [];
      // let tops = 0;
      // let currentScrollY = ItemListObj[current].clientHeight;
      // for (let i = 0; i < current; i++) {
      //   tops += ItemListObj[i].clientHeight;
      //   topMain.push(tops);
      // }
      // // 3. 更新数据
      // this.topMain = topMain;
      //  console.log(tops);
      // this.foodsScroll.scrollTo(0, -tops, 300);
      const tops = [];
      let top = 0;
      tops.push(top);
      for (let i = 0; i < ItemListObj.length; i++) {
        top += ItemListObj[i].clientHeight;
        tops.push(top);
      }
      this.tops = tops;
    },
    showFood(food) {
       this.food= food
     this.$refs.food.toggleShow()
    }
  }
};
</script>

<style lang='less'>
@import "../../../common/mixins/mixins.less";
.goods {
  display: flex;
  position: absolute;
  top: 180px;
  bottom: 46px;
  width: 100%;
  background: #fff;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      padding: 0 12px;
      line-height: 14px;
      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        color: #02a774;
        font-weight: 700;
        .text {
          // .border-none();
        }
      }
      .icon {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
      }
      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        position: relative;
        border: none;
        font-size: 12px;
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: #93999f;
      background: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      position: relative;
      border: none;
      &:last-child {
        //  border-none()
        margin-bottom: 0;
      }
      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }
      .content {
        flex: 1;
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: #07111b;
        }
        .desc,
        .extra {
          line-height: 10px;
          font-size: 10px;
          color: #93999f;
        }
        .desc {
          line-height: 12px;
          margin-bottom: 8px;
        }
        .extra {
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>