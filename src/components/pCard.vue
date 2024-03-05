<script>
export default {
  name: "pCard",
  // props: ['imgSrc','price','pName','own'],
  props:{
    imgSrc: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    pName: {
      type: String,
      default: ''
    },
    own: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pSrc:''
    }
  },
  methods:{
    goCardInfo(){
      console.log('goCardInfo')
      this.$router.push('/CardInfo')
    }
  },
  mounted() {

  },
}

</script>

<template>
  <div class="card-container" @click="goCardInfo">
    <div class="card">
      <img :src="require('../assets'+imgSrc.replace('../assets',''))" class="image" alt="">
      <div class="bottom">
      <span class="name">{{pName}}</span>
      <span v-show="!own" class="price">{{price}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container{
  width:25vh;
  height: 25vh;
  .card{
    width: 25vh;
    height: 25vh;
    box-shadow: #929394 0 0 7px;
    transition: all 0.2s ease-in;
    .image{
      width:auto;
      height:80%;
      object-fit: contain;
      border-bottom: #929394 1px solid;
    }
    .bottom{
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content:start;
      align-items: center;
      .name{
        position: relative;
        left: -25%;
        font-size: 1.8vh;
      }
      .price{
        position: relative;
        left: -32%;
        color: #ef7a44;
        font-size: 1.2vh;
        font-weight: 1000;
      }
    }
  }

  .card:hover{
    box-shadow: #929394 0 0 15px;
    width:26vh;
    height: 26vh;
    cursor: pointer;
  }
}
</style>