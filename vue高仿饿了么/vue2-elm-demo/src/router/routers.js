import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
const orderDetail = r => require.ensure([], () => r(require('../page/order/children/orderDetail')), 'orderDetail')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress')
const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment')
const userValidation = r => require.ensure([], () => r(require('../page/confirmOrder/children/userValidation')), 'userValidation')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
const setusername = r => require.ensure([], () => r(require('../page/profile/children/children/setusername')), 'setusername')
const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')), 'add')
const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')), 'addDetail')
const balance = r => require.ensure([], () => r(require('../page/balance/balance')), 'balance')
const benefit = r => require.ensure([], () => r(require('../page/benefit/benefit')), 'benefit')
const hbHistory = r => require.ensure([], () => r(require('../page/benefit/children/hbHistory')), 'hbHistory')
const exchange = r => require.ensure([], () => r(require('../page/benefit/children/exchange')), 'exchange')
const commend = r => require.ensure([], () => r(require('../page/benefit/children/commend')), 'commend')
const points = r => require.ensure([], () => r(require('../page/points/points')), 'points')
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [
    //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        },
         //所有商铺列表页
         {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
          //个人信息页
        {
            path: '/profile',
            component: profile,
            children: [{
                path: 'info', //个人信息详情页
                component: info,
                children: [{
                    path: 'setusername',
                    component: setusername,
                },
                {
                    path: 'address',
                    component: address,     //编辑地址
                    children:[{
                        path:'add',
                        component:add,
                        children:[{
                            path:'addDetail',
                            component:addDetail
                        }]
                    }]
                }
            ]
            }]
        },
          //搜索页
          {
            path: '/search/:geohash',
            component: search
        },
         //特色商铺列表页
         {
            path: '/food',
            component: food
        },
        //商铺详情页
        {
            path: '/shop',
            component: shop,
            // children: [{
            //     path: 'foodDetail', //食品详情页
            //     component: foodDetail,
            // }, {
            //     path: 'shopDetail', //商铺详情页
            //     component: shopDetail,
            //     children: [{
            //         path: 'shopSafe', //商铺安全认证页
            //         component: shopSafe,
            //     }, ]
            // }]
        },
         //确认订单页
         {
            path: '/confirmOrder',
            component: confirmOrder,
            children: [
                    {
                    path: 'remark', //订单备注
                    component: remark,
                }, 
                {
                    path: 'invoice', //发票抬头
                    component: invoice,
                }, {
                    path: 'payment', //付款页面
                    component: payment,
                }, {
                    path: 'userValidation', //用户验证
                    component: userValidation,
                }, 
                {
                    path: 'chooseAddress', //选择地址
                    component: chooseAddress,
                    children: [{
                        path: 'addAddress', //添加地址
                        component: addAddress,
                        children: [{
                            path: 'searchAddress', //搜索地址
                            component: searchAddress,
                        }]
                    }, ]
                },
            ]
        },
         //余额
         {
            path: 'balance',
            component: balance,
           
        },
          //我的优惠页
          {
            path: 'benefit',
            component: benefit,
            children: [
                //     {
                //     path: 'coupon', //代金券说明
                //     component: coupon,
                // }, {
                //     path: 'hbDescription', //红包说明
                //     component: hbDescription,
                // }, {
                //     path: 'hbHistory', //历史红包
                //     component: hbHistory,
                // }, {
                //     path: 'exchange', //兑换红包
                //     component: exchange,
                // }, {
                //     path: 'commend', //推荐有奖
                //     component: commend,
                // },
                {
                    path: 'hbHistory', //历史红包
                    component: hbHistory,
                },
                {
                        path: 'exchange', //兑换红包
                        component: exchange,
                },
                {
                        path: 'commend', //推荐有奖
                        component: commend,
                    }
            ]
        },
         //登录页
         {
            path: '/login',
            component: login
        },
         //修改密码页
         {
            path: '/forget',
            component: forget
        },
        //订单列表页
        {
            path: '/order',
            component: order,
            children: [{
                path: 'orderDetail', //订单详情页
                component: orderDetail,
            }, ]
        },
         //我的积分页
         {
            path: 'points',
            component: points,
            // children: [{
            //     path: 'detail', //积分说明
            //     component: pointsDetail,
            // }, ]
        },
    ]
}]
