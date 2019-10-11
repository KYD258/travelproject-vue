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
            <router-link type="info" v-if="msg=='登录'" :to="{name:'userLogin'}" style="color:black">{{msg}}</router-link>
            <router-link type="info" v-else :to="{name:'tbUserUpdate'}" style="color:black"> <el-avatar :src="msg"></el-avatar></router-link>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple-light" style="color: black;line-height: 30px;font-size: 14px">
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
    <el-row :gutter="10">
      <el-col :span="6">
        <!--log展示-->
      <div class="grid-content" style="float:left;width:205px;height: 70px;line-height: 70px;margin-top:10px; ">
        <el-image src="../static/timg2.jpg" style="height: 70px;width:140px;border-radius: 3px"></el-image>
      </div>
    </el-col>
      <el-col :span="12">
        <div class="grid-content" style="height: 80px;width:100%;">
          <el-input ref="searchName" v-model="name" type="text" style="width: 80%;margin: auto;margin-top: 20px" placeholder="请输入内容"></el-input>
          <el-button type="danger" icon="el-icon-search" plain @click="search(name)">查询</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content" style="height: 80px;line-height: 80px">
          <el-badge :value="count" :max="10" class="item" @click="countcart()">
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
    <!--轮播图-->
    <div style="padding-top: 20px"></div>
      <div class="block">
        <el-carousel :interval="4000" type="card" height="500px">
          <el-carousel-item v-for="sysattr in sysattr" :key="sysattr">
            <router-link :to="{name:'detail',params:{attrId:sysattr.attrId}}"><img :src="sysattr.attrPic" style="width:900px;height:450px  "></router-link>
          </el-carousel-item>
        </el-carousel>

      </div>

      <div style="padding-top: 20px"></div>
        <!--热门线路推荐-->
        <div>
          <el-container>
            <el-header id="h1"><h1>热门线路推荐</h1></el-header>
            <div style="padding-top: 20px"></div>
              <el-container v-for="(sysroute,index) in sysroute" :key="sysroute" style="float: left">
                <el-aside width="500px" style="border: groove;height: 300px">
                  <div style="width: 492px;height: 296px">
                    <router-link :to="{name:'detail',params:{routeId:sysroute.routeId}}"><img :src="sysroute.routePic" width="492px" height="296px" /></router-link>

                  </div>
                </el-aside>
                <el-container style="border: groove;height: 300px">
                  <el-header><h3>{{sysroute.routeName}}</h3></el-header>
                  <el-main>{{sysroute.info1}}
                  </el-main>
                  <el-footer>
                    <router-link :to="{name:'detail',params:{routeId:sysroute.routeId}}"><el-button class="success">了解详情</el-button></router-link>
                  </el-footer>
                </el-container>
              </el-container>
          </el-container>
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
      <!--</el-container>-->
    <!--</el-container>-->

  </div>

</template>
<script>
  import axios from 'axios'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  export default{
    components: {
      ElInput,
      ElButton},
    data(){
      return{
        msg:'',
        count:'',
        sysattr:[],
        sysroute:[],
        total: 0,
        name:'',
        params: {
          size: 20,
          page: 1
        }
      }
    },
    mounted(){
      this.query();
        this.find();
      axios.get("api/getMsg").then(res=>{
        if(res.data==''){
          this.msg='登录'
        }else {
          this.msg=res.data.pic;
        }

      }),
        axios.get("api/countcart").then(res=>{
          //alert(res.data)
          this.count=res.data;
        })
    },
    methods:{
      countcart:function () {
        axios.get("api/countcart").then(res=>{
          //alert(res.data)
          if (res.data!=0){
            this.count=res.data;
          }else {
            this.$router.push("/userLogin");
          }
        })
      },
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

      find:function () {
        var url ="api/route/selectAll/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.sysroute=res.data.list;
        })
      },
      search:function (name) {
        var routeName=this.name
        this.$router.push({path:"/findlike/"+routeName})
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

