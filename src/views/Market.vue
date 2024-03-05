<script>
import Nav from "@/components/Nav.vue";
import PCard from "@/components/pCard.vue";
export default {
  name: "Market",
  components: {PCard, Nav},
  data() {
    return {
      value: '虚拟手办',
      searchText: '',
      curPage: 1,
      total: 29,
      curType: '虚拟手办',
      types: [{
        value: '虚拟手办',
        label: '虚拟手办'
      }, {
        value: '表情包',
        label: '表情包'
      }, {
        value: '头像',
        label: '头像'
      }],
      emojis:[
        "../assets/marketPic/2.jpeg",
        "../assets/marketPic/3.jpeg",
        "../assets/marketPic/6.jpeg",
      ]
    }
  },
  methods:{
    handleCurPageChange(curPage){
      this.curPage=curPage
      console.log(this.curPage)
    },
    calCurPageItemCount(){
      let totalPage= Math.ceil(this.total/12)
      if(this.curPage<totalPage){
        return 12
      }else{
        if(this.total%12===0) {
          return 12
        }
        return this.total%12
      }
    },
    handleFilterChange(value){
      this.value=value
      console.log(this.value)
    },
    getPicUrL(){
      if(this.value==='虚拟手办'){
        return this.emojis[0]
      }else if(this.value==='表情包'){
        return this.emojis[1]
      }else if(this.value==='头像') {
        return this.emojis[2]
      }

    }
  }
}

</script>

<template>
<el-container>
  <el-header>
    <Nav></Nav>
  </el-header>
  <el-main>
    <div class="filter">
      <el-select v-model="value" @change="handleFilterChange">
        <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="search">
        <el-input v-model="searchText" placeholder="请输入搜索内容" prefix-icon="el-icon-search"  style="width: 200px"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>

    <div class="item-container">
      <div class="item-bg">
        <div class="items">

          <PCard v-for="n in calCurPageItemCount()" :imgSrc="getPicUrL()" price="5瓶盖" pName="脸红表情"></PCard>

        </div>
      </div>

      <el-pagination
          background
          layout="prev, pager, next"
          :page-size="12"
          :total="total"
          @current-change="handleCurPageChange"
      >
      </el-pagination>
    </div>
  </el-main>
</el-container>
</template>

<style scoped>
.el-header{
  text-align: center;
  background-color: rgb(38,41,48);
  border-radius: 5px;
}
.el-main{
  display: flex;
  flex-direction: column;
  gap: 20px;
  .filter{
    background-color: grey;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    .el-select{

    }
    .search{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

  }

  .item-container{
    height: 100vh;
    background-color: #e7dbdb;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .item-bg{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90vh;
      width: 75%;
      background-color: #fff;
      .items{
        display: grid;
        grid-template-rows: repeat(3, 1fr); /* 定义有三行 */
        grid-template-columns: repeat(4, 1fr);
        justify-content: space-between; /* 确保卡片之间的间距均匀 */
        height: 90vh;
        width: 90%;
        background-color: #fff;
        align-items: center;
        pCard{

        }
      }
    }
  }
}
</style>