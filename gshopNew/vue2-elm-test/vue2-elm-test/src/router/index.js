import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = () => import('@/pages/home/home')
const search = () => import('@/pages/search/search')
const profile = () => import('@/pages/profile/profile')
const login = () => import('@/pages/login/login')

const shop = () => import('@/pages/shop/shop')
const ShopGoods = () => import('@/pages/shop/children/goods')
const ShopRatings = () => import('@/pages/shop/children/ratings')
const ShopInfo = () => import('@/pages/shop/children/info')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/shop',
      component: shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '/',
          redirect: '/shop/goods'
        },
      ],
      meta: {
        showFooter: false
      }
    },
  ]
})
