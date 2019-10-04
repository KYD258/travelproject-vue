import Vue from 'vue'
import Router from 'vue-router'
import userIndex from '@/components/userIndex'
import userLogin from '@/components/userLogin'
import userResgister from '@/components/userResgister'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', name:'userIndex', component:userIndex},
    {path:'/userLogin', name:'userLogin', component:userLogin},
    {path:'/userResgister', name:'userResgister', component:userResgister}
  ]
})
