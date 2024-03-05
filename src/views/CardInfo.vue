<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "CardInfo",
  components: {Nav},
  data() {
    return {}
  },
  methods:{

  },
  mounted(){
  }
}
</script>

<template>
<div class="info-container">
  <el-header>
    <Nav></Nav>
  </el-header>
  <div class="main-container">
    <div class="left">
      <h2>藏品名称</h2>
      <iframe src="http://122.51.94.192:83"></iframe>
    </div>
    <div class="right">
      <div class="description-container">
        <h2>藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述藏品描述</h2>

      </div>

      <div class="price-button">
        <h3>价格：5瓶盖</h3>
        <el-button type="primary">购买</el-button>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped>
.info-container{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .el-header{
    width: 100%;
    height: 5%;
    background-color: rgb(38,41,48);
  }
  .main-container{
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: row;

    .left{
      width:66%;
      height: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      h2{
        position: relative;
        align-self: flex-start;
        left: 20px;
      }
      iframe{
        width: 100%;
        height: 90%;

      }

    }
    .right{
      width: 34%;
      height: 100%;
      background-color: #e7e7e7;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .description-container{
        width: 80%;
        height: 60%;
        h2{
          text-indent: 2em;
          text-align: left;
        }
      }

      .price-button{
        width: 80%;
        height: 20%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        h3{
          font-size: 20px;
          color: #ef7a44;
        }
      }
    }
  }
}
</style>