import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Manage from './views/Manage.vue'

import History from './components/manage/History.vue'
import RealTime from './components/manage/RealTime.vue'
import Details from './components/manage/Details.vue'
import Report from './components/manage/Report.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {//登录页面
      path: '/',
      name: 'login',
      component: Login
    },
    {//超融合页面
      path: '/home',
      name: 'home',
      component: Home
    },
    {//管理页面
      path:'/manage',
      component:Manage,
      children:[
        {
          path:'/',
          component:RealTime
        },
        {
          path:'history',
          component:History
        }
      ]
    },
    {//鸟类详情页面
      path:'/details',
      component:Details
    },
    {
      path:'/report',
      component:Report
    }
  ]
})
