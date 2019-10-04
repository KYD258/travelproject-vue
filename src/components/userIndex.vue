<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/userLogin'}">登录</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/SysUserLogin'}">管理员登录</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/userResgister'}">注册</el-breadcrumb-item>
      <el-breadcrumb-item>注销</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              message:'首页'
          }
      }

  }
</script>
