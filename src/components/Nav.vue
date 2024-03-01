<script>
import navIndex from "@/store/navIndex";
export default {
  name: "Nav",
  data() {
    return {}
  },
  methods:{
    handleSelect(index, indexPath) {
      if(navIndex.activeIndex!==index){
        navIndex.activeIndex = index
        if(index === '1') {
          this.$router.push('/home')
        } else if(index === '2') {
          this.$router.push('/Market')
        } else if(index === '3') {
          this.$router.push('/news')
        }
      }
    },
    getActiveIndex(){
      return navIndex.activeIndex
    },
    goToUser() {
      this.$router.push('/User')
    }
}
}
</script>

<template>
  <div class="nav">
    <div class="logo">

    </div>
    <div class="nav-left">
      <el-menu
          :default-active="getActiveIndex()"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#ffffff00"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">藏品市场</el-menu-item>
        <el-menu-item index="3">藏品资讯</el-menu-item>
      </el-menu>
    </div>
    <div class="nav-right">
      <el-button >登录/注册</el-button>
      <el-button @click="goToUser">个人中心</el-button>
    </div>
  </div>
</template>

<style scoped>
.nav{
  height: 60px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  .logo{
    width: 200px;
    height: 190%;
    background: url("../assets/svgs/logo.svg") no-repeat;
    background-size: 100% 100%;
    transform: translate(0,-24%);
  }
  .nav-left{
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .nav-right{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>