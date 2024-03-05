<script>

import http from "@/utils/request";
export default {
  name: "test",
  data() {
    return {}
  },
  methods: {

    async getData(){
      console.log('get data')
      this.$http.post('/clients/login',{
        "account":'123',
        "password":'12345'
      }).then((ans)=>{
        console.log(ans.data)
      })
    }
  },
}

</script>

<template>
<div class="test-container">
  <div class="left">

  </div>
  <div class="right">
<!--    <iframe id="ifr" src="http://122.51.94.192:83">-->

<!--    </iframe>-->
    <el-button @click="getData">
      测试按钮
    </el-button>
  </div>
</div>
</template>

<style scoped>
.test-container{
  width: 100%;
  height:100vh;
  display: flex;
  flex-direction: row;
  .left{
    width: 50%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .right{
    width: 50%;
    height: 100%;
    background-color: #b6a2a2;
    iframe{
      width: 100%;
      height: 100%;
    }
  }
}
</style>