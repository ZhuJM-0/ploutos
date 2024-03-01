<script>
export default {
  name: "UserCollection",
  data() {
    return {}
  },
  methods:{
    goToCollection(){
      window.open('http://122.51.94.192:80','_blank')
    }
  }
}
</script>

<template>
<div class="collection-container">
  <el-button @click="goToCollection">
    进入展示厅
  </el-button>
</div>
</template>

<style scoped>

</style>