<template>
  <div>
    <el-page-header @back="goBack" content="登录页面">
    </el-page-header>
  <div style="height: 400px;width: 300px;padding-left: 550px">
    <h1>{{msg}}</h1>
    <el-form :model="tbUser" ref="tbUser">
      <el-form-item label="用户名" prop="userName">
        <el-input type="userName" v-model="tbUser.loginName"  placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="tbUser.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('tbUser')">登陆</el-button>
        <el-button type="success" @click="resetForm('tbUser')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
        var validateUserName = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          } else {
            callback();
          }
        };
        var validatePassword = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            callback();
          }
        };
          return{
              msg:'用户登录',
              tbUser:{
                  loginName:'',
                  password:""
              },
          }
      },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            axios.post("/api/userLogin",this.tbUser).then(res=>{
              if(res.data.code==1){
                this.$router.push('/')
              }
//                alert("登录成功")
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goBack() {
        this.$router.push("/");
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
