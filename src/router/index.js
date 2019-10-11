import Vue from 'vue'
import Router from 'vue-router'
import SysUserRegist from '@/components/SysUserRegist'
import SysUserLogin from '@/components/SysUserLogin'
import userIndex from '@/components/userIndex'
import userLogin from '@/components/userLogin'
import userResgister from '@/components/userResgister'
import SysUserOrder from '@/components/SysUserOrder'
import update from '@/components/update'
import cart from '@/components/cart'
import detail from '@/components/detail'
import applyText from '@/components/applyText'
import tbUserUpdate from '@/components/tbUserUpdate'
import sysAdmin from '@/components/sysAdmin'
import findlike from '@/components/findlike'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/SysUserRegist',name: 'SysUserRegist',component: SysUserRegist },
    {path: '/SysUserLogin',name: 'SysUserLogin',component: SysUserLogin},
    {path:'/',name:'userIndex',component:userIndex},
    {path:'/userLogin',name:'userLogin',component:userLogin},
    {path:'/userResgister',name:'userResgister',component:userResgister},
    {path:'/SysUserOrder',name:'SysUserOrder',component:SysUserOrder},
    {path:'/update/:attrId',name:'update',component:update},
    {path:'/cart',name:'cart',component:cart},
    {path:'/detail',name:'detail',component:detail},
    {path:'/applyText',name:'applyText',component:applyText},
    {path:'/tbUserUpdate',name:'tbUserUpdate',component:tbUserUpdate},
    {path:'/sysAdmin',name:'sysAdmin',component:sysAdmin}
    {path:'/tbUserUpdate',name:'tbUserUpdate',component:tbUserUpdate},
    {path:'/findlike/:routeName',name:'findlike',component:findlike}
  ]
})
