<script setup>

</script>

<template>
  <div class="info-container">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <label>个人信息</label>
        <el-button style="float: right; padding: 3px 0" type="text">修改</el-button>
      </div>
      <div class="info">
        <div class="info-left">
          <div class="avatar">
            <img src="../assets/homePic/6.jpeg" alt="">
          </div>
          <el-button type="text">修改头像</el-button>
        </div>
        <div class="info-right">
          <div class="infos">
            <div class="row">
              <div class="col">
                <label>昵称:</label><input type="text" value="藏品家123">
              </div>
              <div class="col">
                <label>余额:</label><input type="text" value="122瓶盖" readonly>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>生日:</label><input type="date" value="2003-12-14">
              </div>
              <div class="col">
                <label>藏品数量:</label><input type="text" value="7">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>性别：</label>
                <div class="sex-container">
                  <input type="radio" id="male" name="gender" value="male" checked>
                  <label for="male">男</label>
                  <input type="radio" id="female" name="gender" value="female">
                  <label for="female">女</label>
                </div>
              </div>
              <div class="col">

              </div>

            </div>
            <div class="row">
              <div class="col">
                <label>地址:</label><input type="text"  value="中国">
              </div>
              <div class="col">

              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>邮箱:</label><input type="email" value="1954691462@qq.com">
              </div>
              <div class="col"></div>
            </div>

          </div>
        </div>
      </div>
    </el-card>

  </div>
</template>

<style scoped>
.info-container {
  width: 100%;
  height: 70vh;



  .info {
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .info-left {
      height: 100%;
      width: 25%;
      border-right: #d5d5d5 2px solid;
      display: flex;
      flex-direction: column;

      .avatar {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 50%;
          height: auto;
        }

      }
    }

    .info-right {
      height: 100%;
      width: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .infos{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .row {
          width: 100%;
          height: 10%;
          display: flex;
          flex-direction: row;
          align-items: center;
          .col{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;

            label{
              text-align: left;
              margin-left:15%;
              font-size: 14px;
              margin-right: 15px;
              color: grey;
            }

            input{
              border: none;
              border-bottom: #929394 1px solid;
              font-size: 16px;
              width: 60%;
              height: 100%;
            }

            .sex-container{
              width: 20%;
              display: flex;
              flex-direction: row;
              align-items: center;
            }
          }


        }
      }
    }
  }
}
</style>

<style>
.el-card:hover{
  border-color: white !important;
}
</style>