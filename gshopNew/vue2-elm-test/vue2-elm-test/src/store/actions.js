
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_SEARCH_SHOPS, RECEIVE_USERINFO, RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_GOODS, INCREMENT_FOOD_COUNT, DECREMENT_FOOD_COUNT, CLEAR_CART } from './mutation-types'
import { reqAddress, reqCategorys, reqShops, reqSearchShop, reqUserInfo, reqShopInfo, reqShopRatings, reqShopGoods } from '../api'
export default {
    async getAddress({ commit, state }) {
        const geohash = state.latitude + ',' + state.longitude;
        const result = await reqAddress(geohash)
        commit(RECEIVE_ADDRESS, { address: result.data })
    },
    async getCategorys({ commit }) {
        const result = await reqCategorys();
        commit(RECEIVE_CATEGORYS, { categorys: result.data })
    },
    // 异步获取商家列表
    async getShops({ commit, state }) {
        // 对象的解构赋值
        const { latitude, longitude } = state
        // 注意参数的顺序
        const result = await reqShops({ latitude, longitude })
        commit(RECEIVE_SHOPS, { shops: result.data })
    },
    async searchShops({ commit, state }, keyword) {
        const geohash = state.latitude + ',' + state.longitude;
        const result = await reqSearchShop(geohash, keyword)
        if (result.code === 0) {
            const searchShops = result.data
            commit(RECEIVE_SEARCH_SHOPS, { searchShops })
        }
    },
    //异步获取用户信息
    async getUserInfo({ commit }) {
        const result = await reqUserInfo();
        if (result.code === 0) {
            commit(RECEIVE_USERINFO, { userInfo: result.data })
        }

    },
    recordUser({ commit }, userInfo) {
        commit(RECEIVE_USERINFO, { userInfo })
    },


    // 异步获取商家信息
    async getShopInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data

            info.score = 3.5
            commit(RECEIVE_INFO, { info })
           
        }
    },
   // 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      // 数据更新了, 通知一下组件
    }
  },
    // 异步获取商家商品列表
    async getShopGoods({ commit }, cb) {
        const result = await reqShopGoods()

        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, { goods })
          
        }
    },



    updateFoodCount({ commit }, { isAdd, food }) {
        if (isAdd) {
            commit(INCREMENT_FOOD_COUNT, { food })
        } else {
            commit(DECREMENT_FOOD_COUNT, { food })
        }
    },

    clearCart({ commit }) {
        commit(CLEAR_CART)
    }
}