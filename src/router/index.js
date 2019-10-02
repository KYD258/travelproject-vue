import Vue from 'vue'
import Router from 'vue-router'
import SysUserRegist from '@/components/SysUserRegist'
import SysUserLogin from '@/components/SysUserLogin'
import show from '@/components/show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/SysUserRegist',
      name: 'SysUserRegist',
      component: SysUserRegist
    },
    {
      path: '/',
      name: 'SysUserLogin',
      component: SysUserLogin
    },
    {
      path: '/show',
      name: 'show',
      component: show
    }
  ]
})
