<template>
  <div>
    <h1>后台订单管理系统</h1>
    <el-table
      :data="order"
      stripe
      style="width: 100%">
      <el-table-column
        prop="orderId"
        label="订单编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tbUser.loginName"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tbUser.email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sysRoute.routeName"
        label="线路名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sysRoute.routeArea"
        label="线路所属区域"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sysRoute.info1"
        label="备注"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sysRoute.info2"
        label="补充"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sysRoute.routeTime"
        label="线路生成时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sysRoute.routePrice"
        label="价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sysRoute.routeNum"
        label="线路人数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sysRoute.routeDay"
        label="线路共计天数"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <el-row>
          <el-button type="primary" icon="el-icon-edit"  @click="orderUpdate(1)"></el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="this.params.size"
      :current-page="this.params.page"
      v-on:current-change="changePage(page)"
      :total="total">
    </el-pagination>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        order: [],
        total:100,
        params:{
            size:5,
            page:1
        }
      }
    },
    mounted(){
      this.query()
    },
    methods:{
        query:function () {
          axios.get("api/sos/selectAll/"+this.params.page+"/"+this.params.size).then(res=>{
              this.order=res.data.list;
              this.total=res.data.total;
          })
        },
      changePage:function (page) {
        this.params.page=page;
        this.query()
      },
      orderUpdate:function (orderId) {
            alert(orderId)
        this.$router.push({path:'/SysOrderUpdate/'+orderId})
      }
    }
  }
</script>
