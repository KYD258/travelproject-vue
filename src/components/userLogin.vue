<template>
  <div>
    <h1>{{msg}}</h1>
    <el-form :model="user" status-icon :rules="rules" ref="user" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input type="userName" v-model="user.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('user')">登陆</el-button>
        <el-button @click="resetForm('user')">重置</el-button>
      </el-form-item>
    </el-form>
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
              msg:'用户登录页面',
              user:{
                  userName:'',
                  password:""
              },
            rules:{
              userName: [{ validator: validateUserName, trigger: 'blur' }],
              password: [{ validator: validatePassword, trigger: 'blur' }]
            }
          }
      },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
            axios.post("/api/userLogin",this.user).then(res=>{
                alert("登录成功")
              this.$router.push("/")
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
