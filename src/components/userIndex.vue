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
      <el-menu-item index="2">旅游攻略</el-menu-item>
      <el-menu-item index="3">机票</el-menu-item>
      <el-menu-item index="4">订酒店</el-menu-item>
      <el-menu-item index="5">消息中心</el-menu-item>
      <el-menu-item index="6"><router-link to="/cart" >购物车</router-link></el-menu-item>
      <el-menu-item index="7">订单管理</el-menu-item>
      <el-menu-item index="8">
        <div>
          <el-input placeholder="请输入内容" style="width: 500px">
            <template slot="prepend" >查询景点</template>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-menu-item>
      <el-submenu index="9">
        <template slot="title">登陆</template>
        <el-menu-item index="9-1"><router-link to="/userLogin" >用户登录</router-link></el-menu-item>
        <el-menu-item index="9-2"><router-link to="/SysUserLogin" >管理员登录</router-link></el-menu-item>
      </el-submenu>
      <el-menu-item index="10"><router-link to="/userResgister" >注册</router-link></el-menu-item>
      <el-menu-item index="11">注销</el-menu-item>
    </el-menu>
    <br>
    <hr style="background-color:#2577e1;height:0.5px;width: 100%">
    <template>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="sysattr in sysattr" :key="sysattr">
         <img :src="sysattr.attrPic" style="width:751px;height:400px  ">
        </el-carousel-item>
      </el-carousel>
    </template>

    <el-container>
      <el-header>精选套餐</el-header>
      <el-container>
        <el-aside width="200px">用户评价</el-aside>
        <el-main>
          <el-table align="center"
                    :data="sysroute"
                    border
                    style="width: 100%">
            <el-table-column align="center"
                             prop="routeName"
                             label="名称"
                             width="150">
            </el-table-column>
            <el-table-column align="center"
                             label="图片"
                             width="180">
              <template slot-scope="sysroute">
                <img :src="sysroute.row.routePic" width="100" height="100" class="routePic"/>
              </template>
            </el-table-column>
            <el-table-column align="center"
                             prop="routeInfo1"
                             label="卖点">
            </el-table-column>
            <el-table-column align="center"
                             prop="routeInfo2"
                             label="卖点">
            </el-table-column>
            <el-table-column align="center"
                             prop="routeTime"
                             label="时间">
            </el-table-column>
            <el-table-column align="center"
                             prop="routePrice"
                             label="价格"
                             width="100">
            </el-table-column>
            <el-table-column align="center"
                             prop="routeNum"
                             label="人数"
                             width="100">
            </el-table-column>
            <el-table-column align="center"
                             prop="routeDay"
                             label="时间"
                             width="100">
            </el-table-column>
          </el-table>

          <el-pagination
            background
            layout="prev, next"
            :page-size="this.params.size"
            v-on:current-change="changePage1"
            :total="total" :current-page="this.params.page">
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>

    <el-container>
      <el-header>景点推荐</el-header>
      <el-container>
        <el-aside width="200px">用户评价</el-aside>
        <el-main>
          <el-table align="center"
                    :data="sysattr"
                    border
                    style="width: 100%">
            <el-table-column align="center"
                             prop="attrName"
                             label="名称"
                             width="150">
            </el-table-column>
            <el-table-column align="center"
                             label="图片"
                             width="180">
              <template slot-scope="sysattr">
                <img :src="sysattr.row.attrPic" width="100" height="100" class="attrPic"/>
              </template>
            </el-table-column>
            <el-table-column align="center"
                             prop="attrInfo"
                             label="卖点">
            </el-table-column>
          </el-table>

          <el-pagination
            background
            layout="prev,  next"
            :page-size="this.params.size"
            v-on:current-change="changePage"
            :total="total" :current-page="this.params.page">
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
            sysattr:[],
            sysroute:[],
            total: 0,
            params: {
              size: 4,
              page: 1
            }
          }
      },
    mounted(){
          this.query(),
            this.query1()
    },
    methods:{
      query:function () {
        var url ="api/attr/selectAll/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.sysattr=res.data.list;
          this.total=res.data.total;
        })
      },
      changePage:function (page) {
        this.params.page=page;
        this.query();
      },

      query1:function () {
        var url ="api/route/selectAll/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.sysroute=res.data.list;
          this.total=res.data.total;
        })
      },
      changePage1:function (page) {
        this.params.page=page;
        this.query1();
      }
    }
  }
</script>
<style>
  #a{
    white-space:nowrap;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  a{

    text-decoration: none;

  }
</style>

