<template>
  <div class="msite">
    <headerTop :title="address.name">
      <router-link class="header_search" to="/search" slot="search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="login" :to="userInfo._id ? '/userinfo':'/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else>
            <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </headerTop>
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <!--首页导航轮播-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categorys.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
                <a
                  href="javascript:"
                  class="link_to_food"
                  v-for="(category, index) in categorys"
                  :key="index"
                >
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url" />
                  </div>
                  <span>{{category.title}}</span>
                </a>
              </div>
            </div>
            <!-- 轮播图页码 -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="back" v-else />
        </nav>
        <!--首页附近商家列表-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import headerTop from "@/components/header/header";
import ShopList from "@/components/ShopList/ShopList.vue";
import { mapState ,mapActions} from "vuex";
export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com"
    };
  },
  components: {
    headerTop,
     ShopList
  },
  computed: {
    ...mapState(["address", "categorys","userInfo"]),
    ...mapActions(["getCategorys","getShops"]),
    categorysArr() {
      const { categorys } = this;
      const arr = [];
      let min = [];
      categorys.map(c => {
        if (min.length == 8) {
          min = [];
        }
        if (min.length == 0) {
          arr.push(min);
        }
        min.push(c);
      });
      return arr;
    }
  },
  mounted() {
   
    // this.$store.dispatch("getCategorys");
    //  this.$store.dispatch("getShops");
  },
  watch: {
    categorys(value) {
      // 界面更新就立即创建Swiper对象
      this.$nextTick(() => {
        // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
        // 创建一个Swiper实例对象, 来实现轮播
        new Swiper(".swiper-container", {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });

        new BScroll('.miste-content-wrapper', {
          click: true
        })
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import '../../common/mixins/mixins.less';
.msite {
   width: 100%;
  .miste-content-wrapper {
    position: fixed;
    top: 45px;
    bottom: 46px;
    width: 100%;
    .msite_nav {
      .bottom-border-1px(#e4e4e4);
      margin-top: 15px;
      height: 200px;
      background: #fff;

      .swiper-container {
        width: 100%;
        height: 100%;

        .swiper-wrapper {
          width: 100%;
          height: 100%;

          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;

            .link_to_food {
              width: 25%;

              .food_container {
                display: block;
                width: 100%;
                text-align: center;
                padding-bottom: 10px;
                font-size: 0;

                img {
                  display: inline-block;
                  width: 50px;
                  height: 50px;
                }
              }

              span {
                display: block;
                width: 100%;
                text-align: center;
                font-size: 13px;
                color: #666;
              }
            }
          }
        }

        .swiper-pagination {
          > span.swiper-pagination-bullet-active {
            background: #02a774;
          }
        }
      }
    }
    .msite_shop_list {
      .top-border-1px(#e4e4e4);
      margin-top: 10px;
      background: #fff;

      .shop_header {
        padding: 10px 10px 0;

        .shop_icon {
          margin-left: 5px;
          color: #999;
        }

        .shop_header_title {
          color: #999;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
