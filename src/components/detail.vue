<template>
  <div style="background-color: whitesmoke">
    <h1></h1>
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
      <router-link :to="{name:'detail',params:{routeId:sysroute.row.routeId}}"><img :src="sysroute.row.routePic" width="100" height="100" class="routePic"/></router-link>
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
            <router-link :to="{name:'detail',params:{attrId:sysattr.row.attrId}}"><img :src="sysattr.row.attrPic" width="500" height="300" class="attrPic"/></router-link>
          </template>
        </el-table-column>
        <el-table-column align="center"
                         prop="attrInfo"
                         width="800">
        </el-table-column>
      </el-table>

    </form>
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
      axios.post(url,{attrId:ids}).then(res=>{
        if(res.data!=null){
          this.sysroute=res.data
          axios.post(ur,{routeId:this.sysroute.routeId}).then(r=>{
            if(r.data!=null){
              this.sysattr=r.data
            }
          })
        }
      }),
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
        }
    },
    methods: {
      addcart: function (routeId) {
        var url = "api/savecart"
        axios.post(url,{routeId:routeId}).then(res => {
          this.$router.push('/cart')
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
  a {
    color: #42b983;
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
</style>

