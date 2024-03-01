<script>
export default {

  name:"User",
  activeIndex:"1",
  data(){
    return{}
  },
  methods:{
    handleSelect(index, indexPath) {
      if(this.activeIndex!==index){
        this.activeIndex = index
        if(index === '1') {
          this.$router.push('/UserInfo')
        } else if(index === '2') {
          this.$router.push('/UserCollection')
        }
      }
    },
  },
  mounted(){
    this.$router.push('/UserInfo')
  }
}
</script>

<template>
<el-container>
  <el-aside>
    <div class="userInfo">
      <div class="logo"></div>
      <el-avatar icon="el-icon-user-solid" :size="50"></el-avatar>
    </div>
    <el-menu
        default-active="1"
        style="height: 90%"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
      <el-menu-item index="1">
        <i class="el-icon-info"></i>
        <span slot="title">个人资料</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-star-off"></i>
        <span slot="title">我的藏品</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-main>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </el-main>
</el-container>
</template>

<style scoped>
.el-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  .el-aside{
    background-color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .userInfo{
      height: 10%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .logo{
        width: 200px;
        height: 150%;
        background: url("../assets/svgs/logo.svg") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .el-main{
    background-color: #f2f2f2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 80%;
    }
  }
}
</style>