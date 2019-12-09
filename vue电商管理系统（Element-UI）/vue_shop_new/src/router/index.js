import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('@/components/Login')
const home = () => import('@/components/Home')
const welcome = () => import('@/components/Welcome.vue')
const users = () => import('@/components/user/Users.vue')
const rights = () => import('@/components/power/Rights.vue')
const roles = () => import('@/components/power/Roles.vue')
const cate = () => import('@/components/goods/Cate.vue')
const params = () => import('@/components/goods/Params.vue')
const goodsList = () => import('@/components/goods/List.vue')
const goodsAdd = () => import('@/components/goods/Add.vue')
const order = () => import('@/components/order/Order.vue')
const reports = () => import('@/components/reports/Reports.vue')

Vue.use(VueRouter)

const routes = [
  {
    redirect: '/login',
    path: ''
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    component: home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: welcome
      },
      {
        path: '/users',
        component: users,
        meta: ['用户管理', '用户列表']
      },
      {
        path: '/rights',
        component: rights,
        meta: ['权限管理', '权限列表']
      },
      {
        path: '/roles',
        component: roles,
        meta: ['权限管理', '角色列表']
      },
      {
        path: '/categories',
        component: cate,
        meta: ['商品管理', '商品分类']
      },
      {
        path: '/params',
        component: params,
        meta: ['商品管理', '参数列表']
      },
      {
        path: '/goods',
        component: goodsList,
        meta: ['商品管理', '商品列表']
      },
      {
        path: '/goods/add',
        component: goodsAdd,
        meta: ['商品管理', '添加商品']
      },
      {
        path: '/orders',
        component: order,
        meta: ['订单管理', '订单列表']
      },
      {
        path: '/reports',
        component: reports,
        meta: ['数据统计', '数据报表']
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 为路由对象，添加 beforeEach 导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  // 从 sessionStorage 中获取到 保存的 token 值
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token，强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

// 解决两次访问相同路由地址报错
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default router
