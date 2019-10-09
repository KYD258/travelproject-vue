<template>
  <div>
    <div id="a">
      <img width="200px" height="100px" src="http://pxyx6d1pg.bkt.clouddn.com/222.jpg"/>
      <span style="height:100px;width:200px;font-size: 40px; line-height:100px;text-align: center">千峰旅游</span>
    </div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#2577e1"
      text-color="#fff"
      active-text-color="black">
      <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="2">机票</el-menu-item>
      <el-menu-item index="3">订酒店</el-menu-item>
      <el-menu-item index="4">消息中心</el-menu-item>
      <el-menu-item index="5"><router-link to="/cart" >购物车</router-link></el-menu-item>
      <el-menu-item index="6">订单管理</el-menu-item>
      <el-menu-item index="7">
        <div>
          <el-input placeholder="请输入内容" style="width: 500px">
            <template slot="prepend" >查询景点</template>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-menu-item>
      <el-submenu index="8">
        <template slot="title">登陆</template>
        <el-menu-item index="8-1"><router-link to="/userLogin" >用户登录</router-link></el-menu-item>
        <el-menu-item index="8-2"><router-link to="/SysUserLogin" >管理员登录</router-link></el-menu-item>
      </el-submenu>
      <el-menu-item index="9"><router-link to="/userResgister" >注册</router-link></el-menu-item>
      <el-menu-item index="10">注销</el-menu-item>
    </el-menu>

    <hr>



    <el-table align="center"
              :data="sysRoute"
              border
              style="width: 100%">
      <el-table-column label="全选"  width="100" style="color:red"  :render-header="renderHeader">
      <template slot-scope="sysRoute">
      <el-checkbox  v-model="sysRoute.row.checked"></el-checkbox>
      </template>
      </el-table-column>
      <el-table-column align="center"
                       prop="routeName"
                       label="名称"
                       width="150">
      </el-table-column>

      <el-table-column
        align="center"
        prop="routeArea"
        label="地点"
        width="140"  >
      </el-table-column>
      <el-table-column
        align="center"
        prop="routeTime"
        label="时间"
        width="140"  >
      </el-table-column>

      <el-table-column align="center"
                       prop="routePrice"
                       label="价格"
                       width="100">
      </el-table-column>



      <el-table-column
        align="center"
        prop="routeNum"
        label="拼团人数"
        width="150"  >
        <!--<el-button type="primary" size="mini"icon="el-icon-arrow-left" >☜</el-button>-->
        <!--<el-button type="primary" size="mini">☛<i class="el-icon-arrow-right el-icon&#45;&#45;right"></i></el-button>-->
      </el-table-column>
      <el-table-column
        align="center"
        prop="routeDay"
        label="天数"
        width="100"  >
      </el-table-column>
      <el-table-column align="center"
                       label="操作"
                       width="300">
        <template slot-scope="sysRoute">
          <!--<el-button type="danger" round  @click="del(sysRoute.row.routeId)">删除</el-button>-->
          <!--<el-button type="warning" icon="el-icon-edit" circle @click="update(route.row.routeId)"></el-button>-->
          <el-button type="success" round  @click="pay()">支付</el-button>
        </template>

      </el-table-column>

      <div>



      </div>
    </el-table>

  </div>

</template>
<script>
  import axios from 'axios'
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  export default{
    components: {ElImage},
    data(){
      return {
        sysOrder:[],
        sysRoute: []
//        total: 0,
//        params: {
//          size: 5,
//          page: 1

      }
    },
    mounted(){
      this.query()
    },
    methods:{
//      del:function(routeId) {
//        var url="api/sos/findByUserId"
//        axios.post(url,{routeId:routeId}).then(res=> {
//          if (res.data!=null) {
//            alert(res.data)
//            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
//              confirmButtonText: '确定',
//              cancelButtonText: '取消',
//              type: 'warning'
//            }).then(() => {
//              var url1="api/sos/deleteOrder"
//              var orderId=res.data
//              alert(orderId)
//              axios.post(url1,{orderId:orderId}).then(res1=> {
//                  alert(res1.data)
//                if (res1.data!=null) {
//                  this.query()
//                }
//              })
//              this.$message({
//                type: 'success',
//                message: '删除成功!'
//              });
//            }).catch(() => {
//              this.$message({
//                type: 'info',
//                message: '已取消删除'
//              });
//            });
//          }
//        })
//
//      },
      query:function () {
        var url ="api/sos/cartSelectAll"
        axios.get(url).then(res=>{
            //alert(res.data)
         // console.log(res.data)
          this.sysRoute=res.data;
        })

     },
      pay:function () {
        alert("支付成功")
      }

    }
  }
</script>


