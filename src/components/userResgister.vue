<template>
  <div style="margin: auto;width: 650px;">
    <h1>{{msg}}</h1>
    <el-form :label-position="labelPosition" label-width="80px" :model="tbUser">
      <el-form-item label="用户名">
        <el-input v-model="tbUser.loginName"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="tbUser.realName"></el-input>
      </el-form-item>
      <el-form-item label="性别">
      <el-input v-model="tbUser.sex"></el-input>
    </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="tbUser.age"></el-input>
      </el-form-item>
      <el-form-item label="住址">
        <el-input v-model="tbUser.address"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="tbUser.password"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="tbUser.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="tbUser.email"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="code"></el-input>
      </el-form-item>
      <el-button round @click="getCode()">获取验证码</el-button>
      <el-button type="primary" @click="register()" style="margin-left: 20px">注册</el-button>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
      data(){
          return{
              msg:'用户注册页面',
              labelPosition:'right',
              tbUser:{
                  loginName:'',realName:'',sex:'',age:'',address:'',password:'',phone:'',
                  email:''
              },
              code:''
          }
      },
    methods:{
      getCode:function () {
        axios.get("/api/getCode/"+this.tbUser.email).then(res=>{
            alert(this.tbUser.email)
           if(res.data.code==1){
               alert("邮件发送成功，请输入验证码!");
           }
        })
      },
      register:function () {
        axios.post("/api/userRegister",{"tbUser":this.tbUser,"code":this.code}).then(res=>{
            alert(this.tbUser + this.code)
            if(res.data.code==1){
                alert("注册成功");
            }else {
                alert("失败")
            }
        })
      }

    }
  }
</script>
