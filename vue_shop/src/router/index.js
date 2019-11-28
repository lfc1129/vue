import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/Home'
import Welcome from '@/components/Welcome.vue'
import users from '@/components/user/Users.vue'
import Rights from '@/components/power/Rights.vue'
import Roles from '@/components/power/Roles.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      redirect:'/login',
      path: '',
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home,
      redirect:'/Welcome',
      children:[
        {
          path: '/Welcome',
          component: Welcome
        },
        {
          path: '/users',
          component: users
        },
        {
          path: '/rights',
          component: Rights
        },
        {
          path: '/roles',
          component: Roles
        },
      ]
    },
   
   
  ]
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
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
