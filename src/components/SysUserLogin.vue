<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="100px" :model="user">
      <el-form-item label="用户名">
        <el-input v-model="user.username" style="width:500px"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" style="width:500px"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="info" plain @click="login()">登陆</el-button>
    <el-button type="info" plain @click="regist()">注册</el-button>
  </div>

</template>
<script>
  import axios from 'axios'
  export default{

    data(){
      return{
        labelPosition: 'right',
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
      regist:function () {
        this.$router.push('/SysUserRegist')

      }
    }
  }
</script>
