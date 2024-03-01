<script setup>

</script>

<template>
  <div class="info-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <el-row :gutter="100">
        <el-col :span="12">
          昵称：XXX
        </el-col>
        <el-col :span="12">
          邮箱：XXX
        </el-col>
        <el-col :span="12">
          藏品数量：5
        </el-col>
        <el-col :span="12">
          注册时间：2021-10-10
        </el-col>
      </el-row>
    </el-card>

  </div>
</template>

<style scoped>
.info-container{
  width: 100%;
  height:60vh;
}
</style>