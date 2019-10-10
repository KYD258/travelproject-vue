
<template>
  <div>
    <el-page-header @back="goBack" content="登录页面">
    </el-page-header>
    <div style="height: 400px;width: 300px;padding-left: 550px">
      <h1>{{msg}}</h1>
      <el-form :model="user">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="user.username"  placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()">登陆</el-button>
          <el-button type="success" @click="regist()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{

    data(){
      return{
          msg:'管理员登录',
        user:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      login:function () {
        var url = "api/sysuserlogin";
        axios.post(url,this.user).then(res=>{
          if(res.data==1){
            this.$router.push("/sysAdmin")
          }else {
            alert("用户名或密码错误")
          }
        })
      },
      goBack() {
        this.$router.push("/");
      },
      regist:function () {
        this.$router.push('/SysUserRegist')

      }
    }
  }
</script>
