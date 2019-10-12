<template>
  <div class="note" :style="note">
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户登录" name="second">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>登录</el-breadcrumb-item>
          <el-breadcrumb-item>用户登录</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="height: 300px;width: 300px;margin: auto;margin-top: 100px;">
          <el-form :model="tbUser" ref="tbUser">
            <el-form-item label="" prop="userName">
              <el-input type="userName" v-model="tbUser.loginName"  placeholder="请输入用户名"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="tbUser.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <br>
            <el-form-item>
              <el-button @click="submitForm('tbUser')" style="width: 300px;background-color: rgba(167,192,99,0.46)" round>登陆</el-button>
              <div style="width: 120px;padding-left: 200px">
                <el-link :underline="false" @click="tbRegist()"><span style="font-size: 10px;color: #bebed3">没有账号？请先注册</span></el-link>
              </div>

              <!--<el-button type="success" @click="resetForm('tbUser')">重置</el-button>-->
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="管理员登录" name="third">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>登录</el-breadcrumb-item>
          <el-breadcrumb-item>管理员登录</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="height: 300px;width: 300px;margin: auto;margin-top: 100px">
          <el-form :model="sysUser">
            <el-form-item label="" prop="username">
              <el-input type="text" v-model="sysUser.username"  placeholder="请输入用户名"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="sysUser.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <br>
            <el-form-item>
              <el-button  @click="sysLogin()" style="width: 300px;background-color: rgba(167,192,99,0.46)" round >登陆</el-button>
              <!--<el-button  @click="regist()"><span style="font-size: 10px">没有账号？请先注册</span></el-button>-->
              <div style="width: 120px;padding-left: 200px">
                <el-link :underline="false" @click="regist()"><span style="font-size: 10px;color: #bebed3">没有账号？请先注册</span></el-link>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
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
            note:{
              backgroundSize:'100% 100%'
            },
              activeName:'second',
              msg:'用户登录',
              tbUser:{loginName:'',password:''},
              sysUser:{username:'',password:''},
          }
      },
    mounted(){
//          this.backgroundImage=""

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
      sysLogin:function () {
        var url = "api/sysuserlogin";
        axios.post(url,this.tbUser).then(res=>{
          if(res.data==1){
            this.$router.push("/sysAdmin")
          }else {
            alert("用户名或密码错误")
          }
        })
      },
      regist:function () {
        this.$router.push('/SysUserRegist')
      },
      tbRegist:function () {
        this.$router.push('/userResgister')
      },
      sysLogin:function () {
        var url = "api/sysuserlogin";
        axios.post(url,this.sysUser).then(res=>{
          if(res.data==1){
            this.$router.push("/sysAdmin")
          }else {
            alert("用户名或密码错误")
          }
        })
      },
//      resetForm(formName) {
//        this.$refs[formName].resetFields();
//      }
    }
  }
</script>
<style scoped>
  .note{
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    overflow-y: auto;
    background-color: rgba(240, 248, 255, 0.33);
  }
</style>
