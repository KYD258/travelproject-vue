<template>
  <div>
    <el-header>
      <!--导航栏-->
      <el-row>
        <el-col :span="10">
          <div class="grid-content bg-purple" style="color: black;font-size: 14px;line-height: 30px">
            <el-dropdown>
          <span class="el-dropdown-link">
            <a class="el-icon-location">地址</a><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >北京</el-dropdown-item>
                <el-dropdown-item>上海</el-dropdown-item>
                <el-dropdown-item>广州</el-dropdown-item>
                <el-dropdown-item>深圳</el-dropdown-item>
                <el-dropdown-item>杭州</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <a>..</a>
            <router-link type="info" :to="{name:'userLogin'}" style="color:black"><a>{{msg}}</a></router-link>
            <a>..</a>
            <router-link type="info" :to="{name:'SysUserLogin'}" style="color:black"><a>管理员登录</a></router-link>
            <a>..</a>
            <router-link type="info" :to="{name:'userResgister'}" style="color:black"><a>免费注册</a></router-link>
            <a>..</a>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple-light" style="color: black;line-height: 30px;font-size: 14px">
            <router-link type="info" :to="{name:'userOrder'}" style="color: black"><a>我的订单</a></router-link>
            <el-dropdown style="margin-left: 10px">
          <span class="el-dropdown-link">
            <a>个人中心</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><router-link :to="{name:'userIndex'}">不要点我！</router-link></el-dropdown-item>
                <!--<el-dropdown-item>修改信息</el-dropdown-item>-->
                <!--<el-dropdown-item>3</el-dropdown-item>-->
                <!--<el-dropdown-item>4</el-dropdown-item>-->
                <!--<el-dropdown-item>5</el-dropdown-item>-->
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
    <div  style="background-color: whitesmoke">
      <br>
    <form>
      <input v-model="sysattr.attrId" hidden>
    </form>
    <el-row :span="11">
      <el-col class="b" :span="11"   v-model="sysroute" >
        <el-card :body-style="{ padding: '0px' }">
          <!--<el-image :src="sysroute.routePic" style="width: 640px;height: 480px"></el-image>-->
          <div class="block" style="height: 400px">
            <el-carousel indicator-position="outside" style="height: 380px">
              <el-carousel-item v-for="sysattr in sysattr" :key="sysattr" style="height: 380px">
                <img :src="sysattr.attrPic" style="width:690px;height:380px">
              </el-carousel-item>
            </el-carousel>
            <!--<el-carousel >-->
            <!--<el-carousel-item v-for="sysattr in sysattr" :key="sysattr">-->
            <!--<img :src="sysattr.attrPic" style="width:751px;height:400px  ">-->
            <!--</el-carousel-item>-->
            <!--</el-carousel>-->

            <v-text>{{sysroute.routeName}}</v-text>
          </div>

          <div style="padding: 14px;">
          </div>
        </el-card>
      </el-col>
      <form>
        <div class="e">
        <el-row  :gutter="10">
          <el-col :span="17">
            <el-card shadow="hover">
              线路名称 :   {{sysroute.routeName}}
            </el-card>
          </el-col>
          <el-col :span="17">
            <el-card shadow="hover">
              地址 :   {{sysroute.routeArea}}
            </el-card>
          </el-col>
          <el-col :span="17">
            <el-card shadow="hover">
              备注1 :   {{sysroute.info1}}
            </el-card>
          </el-col>
          <el-col :span="17">
            <el-card shadow="hover">
              备注2 :   {{sysroute.info2}}
            </el-card>
          </el-col>
          <el-col :span="17">
            <el-card shadow="hover">
              拼团人数 :   {{sysroute.routeNum}}
            </el-card>
          </el-col>
          <el-col :span="17">
            <el-card shadow="hover">
              游玩时长 :   {{sysroute.routeDay}}天
            </el-card>
          </el-col>
          <el-col :span="17">
            <el-card shadow="hover">
              游玩日期 :   {{sysroute.routeTime}}
            </el-card>
          </el-col>
        </el-row>
      <input v-model="sysroute.routeId" hidden>
      <!--<el-input  v-model="sysroute.routeName" size="large" style="width: 450px">-->
        <!--<template slot="prepend" >线路名称</template>-->
      <!--</el-input><br><br>-->
      <!--<el-input  v-model="sysroute.routeArea" size="large" style="width: 450px">-->
        <!--<template slot="prepend" >地址</template>-->
      <!--</el-input><br><br>-->
      <!--<el-input  v-model="sysroute.info1" size="large" style="width: 450px">-->
        <!--<template slot="prepend" >卖点1</template>-->
      <!--</el-input><br><br>-->
      <!--<el-input  v-model="sysroute.info2" size="large" style="width: 450px">-->
        <!--<template slot="prepend" >卖点2</template>-->
      <!--</el-input><br><br>-->
      <!--<el-input  v-model="sysroute.routePrice" size="large" style="width: 450px">-->
        <!--<template slot="prepend" >套餐价格</template>-->
      <!--</el-input><br><br>-->
      <!--<el-input  v-model="sysroute.routeNum" size="large" style="width: 450px">-->
        <!--<template slot="prepend" >拼团人数</template>-->
      <!--</el-input><br><br>-->
      <!--<el-input  v-model="sysroute.routeDay" size="large" style="width: 450px">-->
        <!--<template slot="prepend" >游玩时长</template>-->
      <!--</el-input><br><br>-->
      <!--<el-input  v-model="sysroute.routeTime" size="large" style="width: 450px">-->
        <!--<template slot="prepend" >出发时间</template>-->
      <!--</el-input><br><br>-->
          <br>
      <el-date-picker
        class="sd"
        @change="change"
        v-model="sysroute.routeTime"
        type="daterange"
        range-separator="~"
        :start-placeholder="this.startText"
        :end-placeholder="this.endText"
        :picker-options="pickerOptions1"
      ></el-date-picker>
          <br>
          <div id="bt"><el-button type="success" round @click="addcart(sysroute.routeId)">加入购物车</el-button>
            <el-button type="primary" round @click="pay()">支付</el-button>
          </div>
        </div>

      <br>
      </form>
    </el-row>
    <br>
    <template slot-scope="sysroute">
      <img :src="sysroute.row.routePic" width="100" height="100" class="routePic"/>
    </template>

    <form>
      <el-table align="center"
                :data="sysattr"
                style="width: 100%;
                font-size: 18px">
        <el-table-column align="center"
                         prop="attrName"
                         width="110">
        </el-table-column>
        <el-table-column align="center"
                        >
          <template slot-scope="sysattr">
            <img :src="sysattr.row.attrPic" width="500" height="300" class="attrPic"/>
          </template>
        </el-table-column>
        <el-table-column align="center"
                         prop="attrInfo"
                         width="800">
        </el-table-column>
      </el-table>

    </form>
    </div>
    <div style="padding-top: 20px"></div>
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
  export default {
    data () {
      return {
        sysroute:{
            routeName:'',
            routeArea:'',
            info1:'',
            info2:'',
            routePrice:'',
            routeNum:'',
            routeDay:'',
            routeTime:''

        },
        sysattr:[],
        pickerOptions1: {

          disabledDate(time) {
            /// 不可选天数的设置
            return time.getTime() <  new Date(new Date().toLocaleDateString()).getTime();  /// 今天之后不能选择
            //return time.getTime() < Date.now(); /// 今天之前不可选
            //return time.getTime()   < new Date(new Date().toLocaleDateString()).getTime()-24*60*60*1000;  ///  今天的前一天开始不能选择 （比如今天30号，只能选择到29号，30号后面的都不能选择）

          },
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date() ; //  结束的日期   new Date(new Date().toLocaleDateString()).getTime()-24*60*60*1000 （一直当今天的前一天）
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date() ;
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end =new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      }
    },
    mounted () {

      var url="api/route/selectByattrId"
      var ids=this.$route.params.attrId
      var u="api/route/selectById"
      var id=this.$route.params.routeId
      var ur="api/route/selectByrouteId"
        axios.post(u,{routeId:id}).then(res=>{
          if(res.data!=null){
            this.sysroute=res.data
          }
        })
        if(ids == undefined){
          axios.post(ur,{routeId:id}).then(res=>{
            if(res.data!=null){
              this.sysattr=res.data
            }
          })
        }else{
          axios.post(url,{attrId:ids}).then(res=>{
            if(res.data!=null){
              this.sysroute=res.data
              axios.post(ur,{routeId:this.sysroute.routeId}).then(r=>{
                if(r.data!=null){
                  this.sysattr=r.data
                }
              })
            }
          })
        }
    },
    methods: {
      addcart: function (routeId) {
        var url = "api/savecart"
        axios.post(url,{routeId:routeId}).then(res => {
            if (res.data==1){
          this.$router.push('/cart')
            }else {
                alert("对不起:请登录后操作")
              this.$router.push("/userLogin");
            }
        })
      }
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
  #pic {
    margin-left: auto;
    float: left;
  }
  #bt {
    margin-right: 185px;
    margin-top: 10px;
  }
  .b {
    margin-left: 50px;
  }
  .e {
    margin-left: 800px;
  }
  .sd{
    margin-right: 180px;
  }

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
    line-height: 160px;
    overflow: hidden;
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

