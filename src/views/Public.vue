<script>
export default {
  name: "Public",
  data() {
    return {}
  },
  methods:{
    goToHome(){
      this.$router.push('/home')
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="logo"></div>
    <h1 class="text">Ploutos——数字藏品智能交易平台</h1>
    <div class="btn" @click="goToHome">登录</div>
    <div class="video-box">
      <video class="video-background" preload="auto" loop playsinline autoplay src="https://lf3-cdn-tos.bytescm.com/obj/eden-cn/lmeh7pfuho/campus/campus_intro_20200522.mp4" tabindex="-1" muted="muted"></video>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container{
  width: 100%;
  height: 100vh;
  background-color: #C1CFF7;
  position: relative;
  .logo{
    position: absolute;
    z-index: 2;
    width: 200px;
    height: 200px;
    background: url("../assets/svgs/logo.svg") no-repeat;
    background-size: 100% 100%;
    transform: translate(40%,-24%);
  }

  .text{
    position: absolute;
    z-index: 2;
    top: 50%; /* 根据需要调整位置 */
    left: 50%;
    transform: translate(-50%, -250%); /* 使文本居中 */
    color: #FFFFFF; /* 提高文本可见性，根据背景调整颜色 */
  }

  .btn{
    position: absolute;
    width: 156px;
    height: 54px;
    line-height: 54px;
    color: #3370ff;
    background: white;
    text-align: center;
    border-radius: 100px;
    font-weight: 600;
    z-index: 2;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
  }

  .btn:hover {
    cursor: pointer;
  }

}

.video-box {
  position: relative;
  height: 100vh;
  background-color: #C1CFF7;
  /*进行视频裁剪*/
  overflow: hidden;
  z-index: 1;
}

.video-box .video-background {
  position: absolute;
  left: 50%;
  top: 50%;
  /*保证视频内容始终居中*/
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  /*保证视频充满屏幕*/
  object-fit: cover;
  min-height: 800px;
}

</style>