<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/userOrder' }">我的订单</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/cart' }">购物车</el-breadcrumb-item>
      <!--点击头像注销-->
      <el-breadcrumb-item :to="{ path:'/userLogin' }">请重新登录</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin: auto;width: 550px;">
      <el-form :label-position="labelPosition" label-width="80px" :model="tbUser">
        <el-upload
          class="avatar-uploader"
          action="api/getPath"
          :show-file-list="false"
          :on-success="tbUserPath"
          :before-upload="beforeAvatarUpload">
          <img v-if="tbUser.pic" :src="tbUser.pic" class="avatar">
          <i v-else class="el-icon-plus
          avatar-uploader-icon"></i>
        </el-upload>
        <input v-model="tbUser.userId" hidden/>
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
        <el-form-item label="电话号码">
          <el-input v-model="tbUser.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="tbUser.email"></el-input>
        </el-form-item>
        <el-button type="primary" :plain="true" @click="tbUserUpdate()" style="margin-left: 20px">确认修改</el-button>
      </el-form>
    </div>
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
        tbUser:{userId:'',oginName:'',realName:'',sex:'',age:'',address:'',password:'',phone:'',
          email:'',pic:''},
      }
    },
    mounted(){
      axios.get('/api/getMsg').then(res=>{
        this.tbUser=res.data;
      })
    },
    methods:{
      tbUserUpdate:function () {
        this.$confirm('此操作将修改该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.post('/api/tbUserUpdate',this.tbUser).then(res=> {
            if (res.data.code==1) {
              this.$message({
                type: 'success',
                message: '修改成功!'
              });
            }
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
      },
      tbUserPath:function (res,file) {
        this.tbUser.pic=res;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
