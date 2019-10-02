<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="100px" :model="user">
      <el-form-item label="用户名">
        <el-input v-model="user.username" ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" ></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="user.phone" ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email" ></el-input>
      </el-form-item>
    </el-form>
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
            alert(res.data)
          if(res.data==1){
            this.$router.push("/")
          }else {
            alert("用户名已存在")
          }
        })
      }
    }
  }
</script>
