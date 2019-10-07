<template>
  <div>
    <h3>{{ msg }}</h3>

    <form>
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
      <el-button type="success" round @click="add()">新增景点</el-button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    //name: 'Main',
    data () {
      return {
        msg: '景点新增页面',
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
    methods: {
      add:function () {
        var url="api/attr/save"
        axios.post(url,this.sysattr).then(res=>{
          if(res.data!=null){
            this.$router.push("/show")
          }else{
            alert("添加失败！")
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
  a {
    color: #42b983;
  }
</style>
