<template>
  <div>
    <h3>{{ msg }}</h3>

    <form>
      <input v-model="sysattr.attrId" hidden>
      <el-input placeholder="请输入景点名称" v-model="sysattr.attrName" size="large" style="width: 450px">
        <template slot="prepend" >景点名称</template>
      </el-input><br><br>
      <el-input placeholder="请输入景点图片" v-model="sysattr.attrPic" size="large" style="width: 450px">
        <template slot="prepend" >景点图片</template>
      </el-input><br><br>
      <el-input placeholder="请输入景点地址" v-model="sysattr.attrAddress" size="large" style="width: 450px">
        <template slot="prepend" >景点地址</template>
      </el-input><br><br>
      <el-input placeholder="请输入景点卖点点" v-model="sysattr.attrInfo" size="large" style="width: 450px">
        <template slot="prepend" >景点卖点</template>
      </el-input><br><br>
      <el-input placeholder="请输入景点价格" v-model="sysattr.attrPrice" size="large" style="width: 450px">
        <template slot="prepend" >景点价格</template>
      </el-input><br>
      <br>
      <el-button type="success" round @click="update()">确认修改</el-button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        msg: '景点修改页面',
        sysattr:{
          attrId:'',
          attrName:'',
          attrPic:'',
          attrAddress:'',
          attrInfo:'',
          attrPrice:''
        }
      }
    },
    mounted () {
      var url="api/attr/selectById"
      var ids=this.$route.params.attrId
      axios.post(url,{attrId:ids}).then(res=>{
        if(res.data!=null){
          this.sysattr=res.data
        }
      })
    },
    methods: {
      update:function () {
        this.$confirm('此操作将修改该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url="api/attr/update"
          axios.post(url,this.sysattr).then(res=> {
            if (res.data != null) {
              this.$router.push("/show")
            }
          })
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
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
</style>
