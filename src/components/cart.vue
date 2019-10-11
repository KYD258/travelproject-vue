<template>
  <div>
    <div>
      <el-header>
        <!--导航栏-->
        <el-row>
            <div class="grid-content bg-purple-light" style="color: black;line-height: 30px;font-size: 14px">
              <router-link type="info" :to="{name:'userOrder'}" style="color: black"><a>我的订单</a></router-link>
              <el-dropdown style="margin-left: 10px">
          <span class="el-dropdown-link">
            <a>个人中心</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><router-link :to="{name:'userDetial'}">完善信息</router-link></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown>
          <span class="el-dropdown-link">
            <a>企业采购</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                  <el-dropdown-item>3</el-dropdown-item>
                  <el-dropdown-item>4</el-dropdown-item>
                  <el-dropdown-item>5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown>
          <span class="el-dropdown-link">
            <a>客户服务</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                  <el-dropdown-item>3</el-dropdown-item>
                  <el-dropdown-item>4</el-dropdown-item>
                  <el-dropdown-item>5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown>
          <span class="el-dropdown-link">
            <a>网站导航</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                  <el-dropdown-item>3</el-dropdown-item>
                  <el-dropdown-item>4</el-dropdown-item>
                  <el-dropdown-item>5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-row :gutter="10">
        <el-col :span="6">
          <!--log展示-->
          <div class="grid-content" style="float:left;width:205px;height: 70px;line-height: 70px;margin-top:10px; ">
            <el-image src="../static/timg2.jpg" style="height: 70px;width:140px;border-radius: 3px"></el-image>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content" style="height: 80px;width:100%;">
            <el-input ref="searchName" type="text" style="width: 80%;margin: auto;margin-top: 20px" placeholder="请输入内容"></el-input>
            <el-button type="danger" icon="el-icon-search" plain @click="search()">查询</el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content" style="height: 80px;line-height: 80px">
            <el-badge :value="count" :max="10" class="item">
              <el-tooltip content="点我" placement="bottom" effect="light">
                <el-button size="" plain style="width: 180px;height: 60px">
                  <i style="font-size: 16px; font-weight: bold;color:red"  class="el-icon-shopping-cart-full "></i>
                  <router-link :to="{name:'cart'}" style="font-size: 16px"><a>您心仪的线路</a></router-link>
                </el-button>
              </el-tooltip>
            </el-badge>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="padding-top: 20px"></div>
          <div style="padding-left: 120px;margin-bottom: 20px">
            <el-table
              :data="sysRoute"
              stripe
              style="width: 100%">
              <el-table-column
                prop="routeName"
                label="线路名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="routeArea"
                label="线路所属区域"
                width="180">
              </el-table-column>
              <el-table-column
                prop="routePrice"
                label="价格"
                width="180">
              </el-table-column>
              <el-table-column
                prop="routeNum"
                label="线路人数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="routeDay"
                label="线路共计天数"
                width="180">
              </el-table-column>
              <el-table-column
                label="操作"
                width="220">
                <template slot-scope="sysRoute">
                <el-row>
                  <el-button type="success" round  @click="pay(sysRoute.row.routeId,sysRoute.row.routeName,sysRoute.row.routePrice)">支付</el-button>
                  <el-button type="danger" round  @click="del(sysRoute.row.routeId)">删除</el-button>
                </el-row>
                </template>
              </el-table-column>
            </el-table>
          </div>
        <el-main>
          <div style="height: 60px;width: 1000px;float: right;margin-bottom: 20px">
            <div style="float: right;margin-right: 80px;height: 60px">
              <el-button type="success" style="width: 120px" @click="payAll()">全部支付</el-button>
            </div>
          </div>

        </el-main>

        <el-footer style="height: 120px;background-color: rgba(96, 225, 27, 0.1)">
          <!--bottom-->
          <el-row>
            <el-col :span="24"  class="bg-purple">
              <div style="height: 120px;line-height: 20px;font-size: 13px;text-align: center">
                <ul>
                  <li>
                    <a href="">© lv.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号</a>
                  </li><br>
                  <li>
                    <a href="">（京）旅平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 旅游公告</a>
                  </li><br>
                  <li>
                    <a href="">增值电信业务许可证  网络食品经营备案（京）【2018】WLSPJYBAHF-12   食品经营许可证</a>
                  </li><br>
                  <li>
                    <a href="">违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司，版权所有，盗版必究</a>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>

        </el-footer>
      </div>
</template>
<script>
  import axios from 'axios'
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  export default{
    components: {ElImage},
    data(){
      return {
          msg:'',
        count:'',
        sysOrder:[],
        sysRoute: [],
        checked: true
      }
    },
    mounted(){
      this.query()
        axios.get("api/countcart").then(res=>{
         // alert(res.data)
          this.count=res.data;
        })
    },
    methods:{
      query:function () {
        var url ="api/cartSelectAll"
        axios.get(url).then(res=>{
          this.sysRoute=res.data;
        })
        axios.get("api/getMsg").then(res=>{
            this.msg=res.data

        })

     },
      pay:function (routeId,routeName,routePrice) {
        alert(routePrice+""+routeName)
        axios.post("api/alipay/pay",{routeId:routeId,routeName:routeName,routePrice:routePrice}).then(res=>{
          this.$router.replace({
            path: '/applyText',
            query: {html: res.data}
          })
        })
      },
      payAll:function () {
        axios.post("api/alipay/payAll").then(res=>{
          this.$router.replace({
            path: '/applyText',
            query: {html: res.data}
          })
        })
      },
      del:function (routeId) {
        axios.post("api/alipay/del",{routeId:routeId}).then(res=>{
           // alert(res.data)
          this.query()
        })
      }

    }
  }
</script>
<style>
  #a{
    white-space:nowrap;
  }
  #h1{
    background-color: rgba(96, 225, 27, 0.1);
    color: #333;

    text-align: center;
    line-height: 30px;
  }

  .el-aside {
    background-color: rgba(210, 225, 219, 0);
    color: #333;
    text-align: center;
    line-height: 200px;
    overflow: hidden;
  }

  .el-main {
    background-color: rgba(233, 238, 243, 0);
    color: #333;
    text-align: center;
    line-height: 0px;
    overflow: hidden;
    line-height: inherit;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-carousel__item h3 {
    color: rgba(71, 86, 105, 0);
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: rgba(153, 169, 191, 0);
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: rgba(211, 220, 230, 0);
  }
  a{
    text-decoration: none;
  }
</style>

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
  a:link {
    color: #000000;
    text-decoration-line: none;
  }
  a:hover{
    color: red;
  }
</style>


