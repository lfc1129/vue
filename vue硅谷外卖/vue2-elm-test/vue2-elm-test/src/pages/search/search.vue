<template>
  <div class="search">
    <headerTop title="搜索"></headerTop>
    <form class="search_form" @submit.prevent="search">
      <input
        type="search"
        name="search"
        placeholder="请输入商家名称"
        class="search_input"
        v-model="keyword"
      />
      <input type="submit" class="search_submit" />
    </form>
    <section class="list" v-if="!noSearchShops">
        <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import headerTop from "@/components/header/header";
export default {
  data() {
    return {
      keyword: "",
      noSearchShops: false
    };
  },
  components: {
    headerTop
  },
  computed: {
    ...mapState(["searchShops"])
  },
  methods: {
    search() {
      // 得到搜索关键字
      const keyword = this.keyword.trim();
      // 进行搜索
      if (keyword) {
        this.$store.dispatch("searchShops", keyword);
      }
    }
  },
  watch: {
    searchShops(value) {
      if (!value.length) {
        // 没有数据
        this.noSearchShops = true;
      } else {
        // 有数据
        this.noSearchShops = false;
      }
    }
  }
};
</script>

<style lang='less'>
@import "../../common/mixins/mixins.less";
.search {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .search_form {
    .clearFix();
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;
    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;
      &.search_input {
        float: left;
        width: 79%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
      }
      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid #02a774;
        font-size: 16px;
        color: #fff;
        background-color: #02a774;
      }
    }
  }
}
</style>