<template>
  <div>
    <h1>有关{{$route.params.routeName}}的线路</h1>
    <el-container v-for="(sysroute,index) in sysroute" :key="sysroute" style="float: left">
      <el-aside width="500px" style="border: groove;height: 300px">
        <div style="width: 492px;height: 296px">
          <router-link :to="{name:'detail',params:{routeId:sysroute.routeId}}"><img :src="sysroute.routePic" width="492px" height="296px" /></router-link>
        </div>
      </el-aside>
      <el-container style="border: groove;height: 300px;width: 800px">
        <el-header><h3>{{sysroute.routeName}}</h3></el-header>
        <el-main>{{sysroute.info1}}
        </el-main>
        <el-footer>
          <router-link :to="{name:'detail',params:{routeId:sysroute.routeId}}"><el-button class="success">了解详情</el-button></router-link>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
          name:'',
        sysroute:{
          routeName:''
        },
      }
    },
    mounted () {
      var url="api/route//findByRouteNameLike"
      var ids=this.$route.params.routeName
      axios.post(url,{routeName:ids}).then(res=>{

        if(res.data!=null){
            console.log(res.data)
          this.sysroute=res.data

        }
      })
    },
    methods: {

    }
  }
</script>
