<template>
  <div>
    <!--景点-->
    <el-button @click="attrDrawer = true" type="primary" style="margin-left: 16px;">
      景点管理
    </el-button>
    <el-drawer title="" :visible.sync="attrDrawer" size="20%">
      <div>
        <el-button @click="addAttr = true">添加景点</el-button>
        <el-drawer title="" :append-to-body="true" :visible.sync="addAttr" size="50%">
          <!--图片上传-->
          <!--<label for="upfile" class="pTitleRight" @click="attrUploadfile">-->
            <!--<span>点我上传图片</span>-->
            <!--<div class="el-icon-upload"></div>-->
            <!--<input ref="filElem" type="file" accept="image/*" id="upfile" name="upfile" style="display: none;" @change="attrUploadPic">-->
          <!--</label>-->
          <el-upload class="upload-demo" action="/api/attr/getPath" :on-success="attrPath" list-type="picture">
            <el-button size="small" type="primary">点击上传图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <!--添加-->
          <form>
            <el-input placeholder="请输入景点名称" v-model="sysAttr.attrName" size="large" style="width: 450px">
              <template slot="prepend" >景点名称</template>
            </el-input><br><br>
            <el-input placeholder="请输入景点地址" v-model="sysAttr.attrAddress" size="large" style="width: 450px">
              <template slot="prepend" >景点地址</template>
            </el-input><br><br>
            <el-input placeholder="请输入景点卖点点" v-model="sysAttr.attrInfo" size="large" style="width: 450px">
              <template slot="prepend" >景点卖点</template>
            </el-input><br><br>
            <el-input placeholder="请输入景点价格" v-model="sysAttr.attrPrice" size="large" style="width: 450px">
              <template slot="prepend" >景点价格</template>
            </el-input><br>
            <br>
            <el-button type="success" round @click="attrAdd()">新增景点</el-button>
          </form>
        </el-drawer>
        <!--查询景点-->
        <div>
          <el-button @click="selectAttr = true">查询景点</el-button>
          <el-drawer title="" :append-to-body="true" :visible.sync="selectAttr" size="90%">
            <el-table align="center" :data="sysattr" border style="width: 100%">
              <el-table-column align="center" prop="attrId" label="编号" width="100"></el-table-column>
              <el-table-column align="center" prop="attrName" label="名称" width="150"></el-table-column>
              <el-table-column align="center" label="图片" width="180"><template slot-scope="sysattr">
                  <img :src="sysattr.row.attrPic" width="100" height="100" class="attrPic"/>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="attrAddress" label="地址" width="140"  ></el-table-column>
              <el-table-column align="center" prop="attrInfo" label="卖点" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column align="center" prop="attrPrice" label="价格" width="100"></el-table-column>
              <el-table-column align="center" label="操作" width="150"><template slot-scope="sysattr">
                  <el-button type="danger" icon="el-icon-delete" circle @click="attrDel(sysattr.row.attrId)"></el-button>
                  <el-button type="warning" icon="el-icon-edit" circle @click="attrUpdate(sysattr.row.attrId)"></el-button>
                </template>
              </el-table-column>
            </el-table>
            <!--景点分页-->
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="this.attrParams.size"
              v-on:current-change="attrChangePage"
              :total="attrTotal" :current-page="this.attrParams.page">
            </el-pagination>
          </el-drawer>
        </div>
      </div>
    </el-drawer>
    <!--线路-->
    <el-button @click="routeDrawer = true" type="primary" style="margin-left: 16px;">
      线路管理
    </el-button>
    <el-drawer title="" :visible.sync="routeDrawer" size="20%">
      <div>
        <el-button @click="addRoute = true">添加线路</el-button>
        <el-drawer title="" :append-to-body="true" :visible.sync="addRoute" size="50%">
          <!--<label for="upfile2" class="pTitleRight" @click="routeUploadfile">-->
            <!--<span>点我上传图片</span>-->
            <!--<input ref="filElem" type="file" accept="image/*" id="upfile2" name="upfile2" style="display: none;" @change="routeUploadPic">-->
          <!--</label>-->
          <el-upload class="upload-demo" action="/api/route/getPath" :on-success="routePath" list-type="picture">
            <el-button size="small" type="primary">点击上传图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <form>
            <el-input placeholder="请输入线路名称" v-model="sysRoute.routeName" size="large" style="width: 450px">
              <template slot="prepend" >线路名称</template>
            </el-input><br>
            <el-input placeholder="请输入线路地址" v-model="sysRoute.routeArea" size="large" style="width: 450px">
              <template slot="prepend" >线路地址</template>
            </el-input><br>
            <el-input placeholder="请输入线路卖点1" v-model="sysRoute.info1" size="large" style="width: 450px">
              <template slot="prepend" >线路卖点</template>
            </el-input><br>
            <el-input placeholder="请输入线路卖点2" v-model="sysRoute.info2" size="large" style="width: 450px">
              <template slot="prepend" >线路卖点</template>
            </el-input><br>
            <el-input placeholder="请输入线路价格" v-model="sysRoute.routePrice" size="large" style="width: 450px">
              <template slot="prepend" >线路价格</template>
            </el-input><br>
            <el-input placeholder="拼团人数" v-model="sysRoute.routeNum" size="large" style="width: 450px">
              <template slot="prepend" >拼团人数</template>
            </el-input><br>
            <el-input placeholder="线路天数" v-model="sysRoute.routeDay" size="large" style="width: 450px">
              <template slot="prepend" >线路天数</template>
            </el-input><br>
            <br>
            <el-button type="success" round @click="routeAdd()">新增线路</el-button>
          </form>
        </el-drawer>
      </div>
      <div>
        <el-button @click="selectRoute = true">查询线路</el-button>
        <el-drawer
          title=""
          :append-to-body="true"
          :visible.sync="selectRoute"
          size="95%">
          <el-table align="center" :data="sysroute" border style="width: 100%">
            <el-table-column align="center" prop="routeId" label="编号" width="100"></el-table-column>
            <el-table-column align="center" prop="routeName" label="线路名称" width="150"></el-table-column>
            <el-table-column align="center" label="图片" width="180"><template slot-scope="sysroute">
                <img :src="sysroute.row.routePic" width="100" height="100" class="routePic"/>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="routeArea" label="地址" width="140"  ></el-table-column>
            <el-table-column align="center" prop="info1" label="卖点1"></el-table-column>
            <el-table-column align="center" prop="info2" label="卖点2"></el-table-column>
            <el-table-column align="center" prop="routeTime" label="卖点"></el-table-column>
            <el-table-column align="center" prop="routePrice" label="套餐价格" width="100"></el-table-column>
            <el-table-column align="center" prop="routeNum" label="拼团人数" width="100"></el-table-column>
            <el-table-column align="center" prop="routeDay" label="游玩时长" width="100"></el-table-column>
            <el-table-column align="center" label="操作" width="150">
              <template slot-scope="sysroute">
                <el-button type="danger" icon="el-icon-delete" circle @click="routeDel(sysroute.row.routeId)"></el-button>
                <el-button type="warning" icon="el-icon-edit" circle @click=""></el-button>
              </template>
            </el-table-column>
          </el-table>
          <!--线路分页-->
          <el-pagination background layout="prev, pager, next" :page-size="this.routeParams.size"
            v-on:current-change="routeChangePage"
            :total="routeTotal" :current-page="this.routeParams.page">
          </el-pagination>
        </el-drawer>
      </div>
    </el-drawer>
    <!--订单-->
    <el-button @click="sysOder = true" type="primary" style="margin-left: 16px;">
      订单管理
    </el-button>
    <el-drawer title="" :visible.sync="sysOder" size="20%">
      <div>
        <el-button @click="selectOder = true">查看订单</el-button>
        <el-drawer title="" :append-to-body="true" :visible.sync="selectOder" size="95%">
          <el-table :data="order" stripe style="width: 100%">
            <el-table-column prop="orderId" label="订单编号" width="100"></el-table-column>
            <el-table-column prop="tbUser.loginName" label="用户名" width="100"></el-table-column>
            <el-table-column prop="tbUser.email" label="邮箱" width="200  "></el-table-column>
            <el-table-column prop="sysRoute.routeName" label="线路名" width="200"></el-table-column>
            <el-table-column prop="sysRoute.routeArea" label="线路所属区域" width="120"></el-table-column>
            <el-table-column prop="sysRoute.info1" label="备注" width="100"></el-table-column>
            <el-table-column prop="sysRoute.info2" label="补充" width="100"></el-table-column>
            <el-table-column prop="sysRoute.routeTime" label="线路生成时间" width="200"></el-table-column>
            <el-table-column prop="sysRoute.routePrice" label="价格" width="100"></el-table-column>
            <el-table-column prop="sysRoute.routeNum" label="线路人数" width="100"></el-table-column>
            <el-table-column prop="sysRoute.routeDay" label="线路共计天数" width="120"></el-table-column>
            <el-table-column label="操作" width="120">
              <el-row>
                <!--<el-button type="primary" round @click="orderDelete(order.orderId)">取消订单</el-button>-->
              </el-row>
            </el-table-column>
          </el-table>
          <!--订单分页-->
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="this.orderParams.size"
            :current-page="this.orderParams.page"
            v-on:current-change="orderChangePage(page)"
            :total="orderTotal">
          </el-pagination>
        </el-drawer>
      </div>
    </el-drawer>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElDivider from "../../node_modules/element-ui/packages/divider/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
      ElButton,
      ElDivider},
    data() {
      return {
        attrDrawer:false,
        addAttr:false,
        selectAttr:false,
        routeDrawer:false,
        addRoute:false,
        selectRoute:false,
        sysOder:false,
        selectOder:false,

        sysAttr:{attrId:'',attrName:'',attrPic:'',attrAddress:'',attrInfo:'',attrPrice:''},
        attrfile:'',
        sysattr: [],
        attrTotal: 0,
        attrParams: {size: 3,page: 1},

        sysRoute:{routeId:'',routeName:'',routeArea:'',info1:'',info2:'',routeTime:'',routePrice:'',routeNum:'',routeDay:'',routePic:''},
        routefile:'',
        sysroute:[],
        routeTotal: 0,
        routeParams: {size: 3,page: 1},

        order: [],
        orderTotal:100,
        orderParams:{size:5,page:1},
  //        order:{orderId:'',
  //          tbUser:{userId:'',loginName:'',email:''},
  //          sysRoute:{routeId:''}
  //        },
      };
    },
    mounted(){
      this.attrQuery();
      this.routeQuery();
      this.orderQuery();
    },
    methods: {
//        景点
//      attrUploadfile:function () {},
//      attrUploadPic:function (event) {
//        alert("...")
//        this.attrfile=event.target.files[0];
//        alert(this.attrfile);
//        let formData = new FormData();
//        formData.append("file",this.attrfile)
//        axios.post("/api/attr/getPath",formData).then(res=>{
//          if(res.data!=null){
//            this.sysattr.attrPic=res.data;
//          }else {
//            alert("上传失败")
//          }
//        })
//      },
      attrPath:function (response,file,fileList) {
        this.sysAttr.attrPic=response;
        alert(this.sysAttr.attrPic);
      },
      attrAdd:function () {
        console.log(this.sysAttr)
        var url="api/attr/save"
        axios.post(url,this.sysAttr).then(res=>{

          if(res.data!=null){
//            this.$router.push("/show")
//            alert("添加成功")
            this.$message({
              message: '添加成功',
              type: 'success'
            })
          }else{
            alert("添加失败！")
          }
        })
      },

      attrChangePage:function (page) {
        // alert(page)
        this.attrParams.page=page;
        this.attrQuery();
      },
      attrQuery:function () {
        var url ="api/attr/selectAll/"+this.attrParams.page+"/"+this.attrParams.size
        axios.get(url).then(res=>{
          this.sysattr=res.data.list;
          this.attrTotal=res.data.total;
        })
      },
      attrDel:function(attrId) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url="api/attr/delete"
          axios.post(url,{attrId:attrId}).then(res=> {
            if (res.data!=null) {
              this.attrQuery()
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      attrUpdate:function (attrId) {
        this.$router.push({path:"/update/"+attrId})
      },
      //线路
//      routeUploadfile:function () {},
//      routeUploadPic:function (event) {
//        alert("...")
//        this.routefile=event.target.files[0];
//        alert(this.routefile);
//        let formData = new FormData();
//        formData.append("file",this.routefile)
//        axios.post("/api/route/getPath",formData).then(res=>{
//          if(res.data!=null){
//              alert(res.data)
//            this.sysRoute.routePic=res.data;
//          }else {
//            alert("上传失败")
//          }
//        })
//      },
      routePath:function (response,file,fileList) {
        this.sysRoute.routePic=response;
        alert(this.sysRoute.routePic);
      },
      routeAdd:function () {
        console.log(this.sysRoute)
        var url="api/route/save"
        axios.post(url,this.sysRoute).then(res=>{
          if(res.data!=null){
            this.routeQuery();
            this.$message({
              message: '添加成功',
              type: 'success'
            })
          }else{
            alert("添加失败！")
          }
        })
      },
      routeQuery:function () {
        var url ="api/route/selectAll/"+this.routeParams.page+"/"+this.routeParams.size
        axios.get(url).then(res=>{
          this.sysroute=res.data.list;
          this.routeTotal=res.data.total;
        })
      },
      routeChangePage:function (page) {
        // alert(page)
        this.routeParams.page=page;
        this.routeQuery();
      },
      routeDel:function(attrId) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url="api/route/delete"
          axios.post(url,{routeId:attrId}).then(res=> {
            if (res.data!=null) {
              this.routeQuery();
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //订单
      orderQuery:function () {
        axios.get("api/sos/selectAll/"+this.routeParams.page+"/"+this.routeParams.size).then(res=>{
          this.order=res.data.list;
          this.orderTotal=res.data.total;
        })
      },
      orderChangePage:function (page) {
        this.routeParams.page=page;
        this.orderQuery()
      },
//      orderDelete:function (orderId){
//        var url='api/sos/deleteOrder'
//        axios.post(url,{orderId:orderId}).then(res=>{
//          if (res.data!=null){
//            alert('已取消此订单')
//            this.orderQuery();
//          }else{
//            alert('取消订单失败')
//          }
//        })
//
//      },

    }
  };
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
</style>

