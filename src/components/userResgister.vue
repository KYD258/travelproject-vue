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
      <el-button round :plain="true" :class="{disabled: !this.canClick}" @click="getCode()">{{content}}</el-button>
      <el-button type="primary" :plain="true" @click="register()" style="margin-left: 20px">注册</el-button>
    </el-form>
  </div>
</template>
<style>
  .disabled{
    background-color: #ddd;
    border-color: #ddd;
    color:#57a3f3;
    cursor: not-allowed;
  }
</style>
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
              code:'',
              content:'发送验证码',
              totalTime:60,
              canClick:true
          }
      },
    methods:{
      getCode:function () {
        if (!this.canClick) return  //改动的是这两行代码
        this.canClick = false
        this.content = this.totalTime + 's后重新发送'
        let clock = window.setInterval(() => {
          this.totalTime--
          this.content = this.totalTime + 's后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送验证码'
            this.totalTime = 60
            this.canClick = true  //这里重新开启
          }
        },1000)
        axios.get("/api/getCode/"+this.tbUser.email).then(res=>{
           if(res.data.code==1){
             this.$message({
               message: '邮件发送成功，请输入验证码!',
               type: 'success'
             })
           }
        })
      },
      register:function () {
        axios.post("/api/userRegister",{"tbUser":this.tbUser,"code":this.code}).then(res=>{
            if(res.data.code==1){
              this.$message({
                message: '注册成功',
                type: 'success'
              })
              this.$router.push('/userLogin')
            }else {
              this.$message.error('注册失败')
            }
        })
      }

    }
  }
</script>
