import Vue from 'vue'
import Router from 'vue-router'
import SysUserRegist from '@/components/SysUserRegist'
import SysUserLogin from '@/components/SysUserLogin'
import show from '@/components/show'
import userIndex from '@/components/userIndex'
import userLogin from '@/components/userLogin'
import userResgister from '@/components/userResgister'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/SysUserRegist',name: 'SysUserRegist',component: SysUserRegist },
    {path: '/SysUserLogin',name: 'SysUserLogin',component: SysUserLogin},
    {path: '/show',name: 'show',component: show},
    {path:'/',name:'userIndex',component:userIndex},
    {path:'/userLogin',name:'userLogin',component:userLogin},
    {path:'/userResgister',name:'userResgister',component:userResgister}
  ]
})
