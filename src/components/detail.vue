<template>
  <div>
  <h1>商品详情</h1>
      <br>
    <form>
      <input v-model="sysattr.attrId" hidden>
    </form>
    <template slot-scope="sysroute">
      <router-link :to="{name:'detail',params:{routeId:sysroute.row.routeId}}"><img :src="sysroute.row.routePic" width="100" height="100" class="routePic"/></router-link>
    </template>
    <div id="pic"><el-image :src="sysroute.routePic" style="width: 640px;height: 480px"></el-image></div>
    <form>
      <input v-model="sysroute.routeId" hidden>
      <el-input  v-model="sysroute.routeName" size="large" style="width: 450px">
        <template slot="prepend" >线路名称</template>
      </el-input><br><br>
      <el-input  v-model="sysroute.routeArea" size="large" style="width: 450px">
        <template slot="prepend" >地址</template>
      </el-input><br><br>
      <el-input  v-model="sysroute.info1" size="large" style="width: 450px">
        <template slot="prepend" >卖点1</template>
      </el-input><br><br>
      <el-input  v-model="sysroute.info2" size="large" style="width: 450px">
        <template slot="prepend" >卖点2</template>
      </el-input><br><br>
      <el-input  v-model="sysroute.routePrice" size="large" style="width: 450px">
        <template slot="prepend" >套餐价格</template>
      </el-input><br><br>
      <el-input  v-model="sysroute.routeNum" size="large" style="width: 450px">
        <template slot="prepend" >拼团人数</template>
      </el-input><br><br>
      <el-input  v-model="sysroute.routeDay" size="large" style="width: 450px">
        <template slot="prepend" >游玩时长</template>
      </el-input><br><br>
      <el-input  v-model="sysroute.routeTime" size="large" style="width: 450px">
        <template slot="prepend" >出发时间</template>
      </el-input><br><br>

      <br>
      <div id="bt"><el-button type="success" round @click="">加入购物车</el-button></div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        sysroute:[],
        sysattr:{
          attrId:''
        }
      }
    },
    mounted () {
      var url="api/route/selectByattrId"
      var ids=this.$route.params.attrId
      var u="api/route/selectById"
      var id=this.$route.params.routeId
      axios.post(url,{attrId:ids}).then(res=>{
        if(res.data!=null){
          this.sysroute=res.data
        }
      }),
        axios.post(u,{routeId:id}).then(res=>{
          if(res.data!=null){
            this.sysroute=res.data
          }
        })
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  #pic {
    margin-left: auto;
    float: left;
  }
  #bt {
    margin-left: 600px;

  }
</style>
