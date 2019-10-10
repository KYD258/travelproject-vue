import Vue from 'vue'
import Router from 'vue-router'
import SysUserRegist from '@/components/SysUserRegist'
import SysUserLogin from '@/components/SysUserLogin'
import show from '@/components/show'
import userIndex from '@/components/userIndex'
import userLogin from '@/components/userLogin'
import userResgister from '@/components/userResgister'
import SysUserOrder from '@/components/SysUserOrder'
import SysOrderUpdate from '@/components/SysOrderUpdate'
import add from '@/components/add'
import update from '@/components/update'
import routeshow from '@/components/routeshow'
import cart from '@/components/cart'
import detail from '@/components/detail'
import applyText from '@/components/applyText'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/SysUserRegist',name: 'SysUserRegist',component: SysUserRegist },
    {path: '/SysUserLogin',name: 'SysUserLogin',component: SysUserLogin},
    {path: '/show',name: 'show',component: show},
    {path:'/',name:'userIndex',component:userIndex},
    {path:'/userLogin',name:'userLogin',component:userLogin},
    {path:'/userResgister',name:'userResgister',component:userResgister},
    {path:'/SysUserOrder',name:'SysUserOrder',component:SysUserOrder},
    {path:'/SysOrderUpdate/:orderId',name:'SysOrderUpdate',component:SysOrderUpdate},
    {path:'/add',name:'add',component:add},
    {path:'/update/:attrId',name:'update',component:update},
    {path:'/routeshow',name:'routeshow',component:routeshow},
    {path:'/cart',name:'cart',component:cart},
    {path:'/detail',name:'detail',component:detail},
    {path:'/applyText',name:'applyText',component:applyText}
  ]
})
