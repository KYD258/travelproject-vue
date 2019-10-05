<template>
  <div>
    <h1>后台订单管理修改页面</h1>
    <el-form  :model="order" style="width: 400px;margin-left:470px">
      <el-form-item label="用户名：">
        <el-input v-model="order.tbUser.loginName"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱：">
        <el-input v-model="order.tbUser.email"></el-input>
      </el-form-item>
      <el-form-item label="变更后的线路编号：">
        <el-input v-model="order.sysRoute.routeId"></el-input>
      </el-form-item>
      <input v-model="order.tbUser.userId" type="hidden"/>
      <el-button type="primary" round @click="orderDelete(order.orderId)">取消订单</el-button>
      <el-button type="primary" @click="orderUpdate()" style="margin-left: 20px">修改订单</el-button>
    </el-form>
  </div>
</template>

<script>
  import axios  from 'axios'
  export default {
    name: 'save',
    data () {
      return {
        order:{
            orderId:'',
          tbUser:{
            userId:'',
            loginName:'',
            email:''
          },
          sysRoute:{
            routeId:''
          }
        }
      }
    },
    mounted:function () {
      var orderId=this.$route.params.orderId;
      axios.post("api/sos/selectOrder",{orderId:orderId}).then(res=>{
        if (res.data!=null){
          this.order=res.data;
        }

      })

    },
    methods: {
      orderDelete:function (orderId){
        var url='api/sos/deleteOrder'
        axios.post(url,{orderId:orderId}).then(res=>{
          if (res.data!=null){
            alert('已取消此订单')
            this.$router.push({path:'/SysUserOrder'})
          }else{
            alert('取消订单失败')
          }
        })

      },
      orderUpdate:function () {
          var id1=this.order.orderId;
          var id2=this.order. tbUser.userId;
          var id3=this.order.sysRoute.routeId;

        axios.post("api/sos/orderUpdate",{orderId:id1,userId:id2,routeId:id3}).then(res=>{
          if (res.data!=null){
            alert('修改订单成功')
            this.$router.push({path:'/SysUserOrder'})
          }else{
            alert('修改订单失败')
          }
        })
      }

    }

  }
</script>
