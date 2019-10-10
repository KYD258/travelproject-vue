
<template>
  <div>
    <el-page-header @back="goBack" content="注册页面">
    </el-page-header>
  <div style="margin: auto;width: 550px;">
    <h1>{{msg}}</h1>
    <el-form :label-position="labelPosition" label-width="80px" :model="user">
      <el-form-item label="用户名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="user.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-button type="primary" :plain="true" @click="regist()" style="margin-left: 20px">注册</el-button>
    </el-form>
  </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{

    data(){
      return{
          msg:'管理人员注册',
        labelPosition: 'right',
        user:{
          username:'',
          email:'',
          phone:'',
          password:''
        }
      }
    },
    methods:{
      regist:function () {
        var url = "/api/sysuserRegist";
        axios.post(url,this.user).then(res=>{
          if(res.data==1){
            this.$router.push("/SysUserLogin")
          }else {
            alert("用户名已存在")
          }
        })
      },
      goBack() {
        this.$router.push("/SysUserLogin");
      },
    }
  }
</script>
