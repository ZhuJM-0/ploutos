<script>0
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {Nav},
  data() {
    return {
      activeIndex: 0,
      pics: [
          require('../assets/homePic/1.png'),
          require('../assets/homePic/2.png'),
          require('../assets/homePic/3.png'),
          require('../assets/homePic/4.png'),
      ],
      emojis:[
        require('../assets/homePic/6.jpeg'),
        require('../assets/homePic/6.jpeg'),
        require('../assets/homePic/6.jpeg'),
        require('../assets/homePic/6.jpeg'),
        require('../assets/homePic/6.jpeg'),
      ],
      currentDate: new Date().toLocaleDateString()
    }
  },
  methods: {
    handleCarouselChange(index) {
      this.activeIndex = index;
      console.log(this.activeIndex)
    },

  }
}
</script>

<template>
<div>
  <el-container>
    <el-header height="500px">
      <div class="header-contain">
        <Nav></Nav>
        <div class="block">
          <el-carousel height="400px" arrow="never" v-model="activeIndex" @change="handleCarouselChange">
            <el-carousel-item v-for="(item,index) in pics" :key="index" class="item">
              <h1 class="item-text" :class="{ 'is-active': index === activeIndex }">第{{index}}张图片</h1>
              <img  :src="item" alt="" class="item-image" :class="{ 'is-active': index === activeIndex }"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-header>
    <el-main>
      <div class="recommend-container">
        <div class="recommend-head">
          <h2>推荐藏品</h2>
          <a href="www.baidu.com">
            进入市场
          </a>
        </div>
        <el-row :gutter="20" type="flex" justify="center" class="row">
          <el-col :span="4" v-for="(emoji,index) in emojis">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="emoji" class="image" alt="">
              <div style="padding: 14px;">
                <span>脸红表情</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20" type="flex" justify="center" class="row">
          <el-col :span="4" v-for="(emoji,index) in emojis">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="emoji" class="image" alt="">
              <div style="padding: 14px;">
                <span>脸红表情</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="hot-container">
        <div class="hot-head">
          <h2>热门藏品</h2>
          <a href="www.baidu.com">
            进入市场
          </a>
        </div>
        <el-row :gutter="20" type="flex" justify="center" class="row">
          <el-col :span="4" v-for="(emoji,index) in emojis">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="emoji" class="image" alt="">
              <div style="padding: 14px;">
                <span>脸红表情</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20" type="flex" justify="center" class="row">
          <el-col :span="4" v-for="(emoji,index) in emojis">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="emoji" class="image" alt="">
              <div style="padding: 14px;">
                <span>脸红表情</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</div>
</template>

<style scoped>
.el-header, .el-footer{
  text-align: center;
  background-color: rgb(38,41,48);
  border-radius: 5px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 如果需要垂直居中 */
  .recommend-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: auto;
    background-color: #fff;
    margin-bottom: 10vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
    gap: 2vh;
    .recommend-head{
      width: 85%;
      height: 4vh;
      border-bottom: #BF9E4B 1px solid;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      h2{
        position: relative;
        float: left;
        width: 130px;
        height: 4vh;
        line-height: 4vh;
        color: #fff;
        font-size: 18px;
        border-radius: 2px 2px 0 0;
        background: #BF9E4B;
        background-image: linear-gradient(270deg, rgba(206, 170, 52, .8) 0, rgba(189, 149, 42, .8) 36%, rgba(160, 113, 24, .8) 100%);
      }
      a{
        position: relative;
        float: right;
        text-decoration: none;
        color: #929394;
        float: right;
        font-size: 13px;
      }
      a:hover{
        color:#eea20e;
      }
      a:after {
        content: '>'; /* 这是箭头的内容，你可以改为任意符号或图片 */
        color: #eea20e; /* 箭头颜色 */
        font-size: 10px; /* 箭头大小 */
        margin-left: 8px; /* 箭头和文字的间隔 */
        position: absolute;
        transform: translateY(3px);
        transition: all 0.3s ease; /* 鼠标悬停时的过渡效果 */
      }

      a:hover:after {
        margin-left: 15px; /* 当鼠标悬停时，箭头向右移动 */
      }
    }

  }
  .hot-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: auto;
    background-color: #fff;
    margin-bottom: 10vh;
    gap: 2vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
    .hot-head{
      width: 85%;
      height: 4vh;
      border-bottom: #4B7FBF 1px solid;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      h2{
        width: 130px;
        height: 4vh;
        color: #fff;
        font-size: 18px;
        line-height: 4vh;
        text-align: center;
        border-radius: 2px 2px 0 0;
        background: #4B7FBF; /* Base blue color */
        background-image: linear-gradient(270deg, rgba(52, 152, 219, 0.8) 0%, rgba(42, 128, 189, 0.8) 36%, rgba(24, 97, 160, 0.8) 100%);
      }
      a{
        text-decoration: none;
        color: #929394;
        float: right;
        font-size: 13px;
      }
      a:hover{
        color:#4B7FBF;
      }
      a:after {
        content: '>'; /* 这是箭头的内容，你可以改为任意符号或图片 */
        color: #4B7FBF; /* 箭头颜色 */
        font-size: 10px; /* 箭头大小 */
        margin-left: 8px; /* 箭头和文字的间隔 */
        position: absolute;
        transform: translateY(3px);
        transition: all 0.3s ease; /* 鼠标悬停时的过渡效果 */
      }

      a:hover:after {
        margin-left: 15px; /* 当鼠标悬停时，箭头向右移动 */
      }
    }
  }

  .image{
    width:100%;
    height:auto;
    object-fit: contain;
  }
}


.block{
  height: 80%;
}


.item{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; /* 子元素在交叉轴上居中对齐 */
  text-align: center; /* 文本居中对齐 */
  height: 100%;
  width: 100%;
  .item-text{
    color: #fff;
    transition: all 1.0s ease; /* 根据需要调整 */
    opacity: 0; /* 默认不可见 */
    transform: translate(-200px,-50px);
  }

  .item-text.is-active {
    opacity: 1;
    transform: translate(-100px,-50px);
  }
  .item-image{
    width: 50%;
    height: auto;
    object-fit: contain;
    transition: all 1.0s ease; /* 根据需要调整 */
    opacity: 0; /* 默认不可见 */
    transform: translateX(320px);

  }
  .item-image.is-active{
    opacity: 1;
    transform: translateX(220px);
  }
}










</style>

<style>
.el-carousel__indicators {

  transform: translate(-580px,0) !important;
}

.el-carousel__item.is-animating {
  transition: none !important;
}

.el-menu{
  border: none !important;
}

.el-card:hover{
  border-color: yellow !important;
}

.el-card{

}


</style>