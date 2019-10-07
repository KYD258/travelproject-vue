<template>
  <div>
    <h1>{{msg}}</h1>
    <el-button type="primary" round @click="toAdd()">新增景点</el-button>
    <br><br>
  <el-table align="center"
            :data="sysattr"
            border
            style="width: 100%">
    <el-table-column align="center"
                     prop="attrId"
                     label="编号"
                     width="100">
    </el-table-column>
    <el-table-column align="center"
                     prop="attrName"
                     label="名称"
                     width="150">
    </el-table-column>
    <el-table-column align="center"
                     label="图片"
                     width="180">
      <template slot-scope="sysattr">
        <img :src="sysattr.row.attrPic" width="100" height="100" class="attrPic"/>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      prop="attrAddress"
      label="地址"
      width="140"  >
    </el-table-column>
    <el-table-column align="center"
                     prop="attrInfo"
                     label="卖点">
    </el-table-column>
    <el-table-column align="center"
                     prop="attrPrice"
                     label="价格"
                     width="100">
    </el-table-column>
    <el-table-column align="center"
                     label="操作"
                     width="150">
      <template slot-scope="sysattr">
        <el-button type="danger" icon="el-icon-delete" circle @click="del(sysattr.row.attrId)"></el-button>
        <el-button type="warning" icon="el-icon-edit" circle @click="update(sysattr.row.attrId)"></el-button>
      </template>

    </el-table-column>
  </el-table>

  <el-pagination
    background
    layout="prev, pager, next"
    :page-size="this.params.size"
    v-on:current-change="changePage"
    :total="total" :current-page="this.params.page">
  </el-pagination>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  export default{
    components: {ElImage},
    data(){
      return {
        msg: '景点详情页面',
        sysattr: [],
        total: 0,
        params: {
          size: 5,
          page: 1
        }
      }
    },
    mounted(){
        this.query()
    },
    methods:{
      del:function(attrId) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url="api/attr/delete"
          axios.post(url,{attrId:attrId}).then(res=> {
            if (res.data!=null) {
              this.query()
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      query:function () {
        var url ="api/attr/selectAll/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.sysattr=res.data.list;
          this.total=res.data.total;
        })
      },
      changePage:function (page) {
        // alert(page)
        this.params.page=page;
        this.query();
      },
      toAdd:function () {
        this.$router.push({name:"add"})
      },
      update:function (attrId) {
        this.$router.push({path:"/update/"+attrId})
      }
    }
  }
</script>
