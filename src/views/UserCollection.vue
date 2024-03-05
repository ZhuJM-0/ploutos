<script>
import PCard from "@/components/pCard.vue";

export default {
  name: "UserCollection",
  components: {PCard},
  data() {
    return {
      count:0
    }
  },
  methods:{
  }
}
</script>

<template>
<div class="collection-container">

  <div class="collections">
    <div class="infinite-list">
      <PCard v-for="n in 16" imgSrc="../assets/homePic/6.jpeg" price="5瓶盖" pName="脸红表情" :own="true"></PCard>
    </div>
  </div>
  <div class="button-container">
    <el-button @click="goToCollection">
      进入展示厅
    </el-button>
  </div>
</div>
</template>

<style scoped>
.collection-container{
  width: 100%;
  height:95vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #fff;
  .button-container{
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .collections{
    width:100%;
    height: 90%;
    .infinite-list{
      width: 100%;
      height: 100%;
      overflow: auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
      align-items: center;
      justify-items: center;
      PCard{
      }
    }
  }
}
</style>