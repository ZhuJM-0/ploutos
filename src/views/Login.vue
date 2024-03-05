<script>
export default {
  name: "Login",
  data() {
    return {
      account: '',
      password: '',
      createAccount: '',
      createPassword: '',
      confirmPassword: '',
      Ui: 'login'
    }
  },
  methods: {
    async validateLogInput(){
      const tip = document.querySelector('.logTip');
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.account || !this.password) {
        tip.innerText='邮箱或密码不能为空';
        tip.style.display = 'block';
      } else if (!emailRegex.test(this.account)) {
        tip.innerText='请输入有效的邮箱地址';
        tip.style.display = 'block';
      } else if (this.account.length > 32 || this.password.length > 32) {
        tip.innerText='邮箱和密码不能超过32位字符长';
        tip.style.display = 'block';
      } else {
        await this.login();
      }
    },
    async login(){
      this.$http.post('/clients/login',{
        "account":this.account,
        "password":this.password
      }).then((ans)=>{
        console.log(ans.data)
        if(ans.data.code===1){
          this.$router.push('/home')
        }else{
          const tip = document.querySelector('.logTip');
          tip.innerText='邮箱或密码错误';
          tip.style.display = 'block';
        }
      })
    },

    // login() {
    //   this.$router.push('/home')
    // },

    async validateCreateInput(){
      const tip = document.querySelector('.createTip');
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.createAccount || !this.createPassword || !this.confirmPassword) {
        tip.innerText='邮箱或密码不能为空';
        tip.style.display = 'block';
      } else if (!emailRegex.test(this.createAccount)) {
        tip.innerText='请输入有效的邮箱地址';
        tip.style.display = 'block';
      } else if (this.createAccount.length > 32 || this.createPassword.length > 32) {
        tip.innerText='邮箱和密码不能超过32位字符长';
        tip.style.display = 'block';
      } else if(this.createPassword !== this.confirmPassword){
        tip.innerText='两次输入的密码不一致';
        tip.style.display = 'block';
      } else {
        await this.register();
      }
    },

    async register(){
      this.$http.post('/clients/register',{
        "account":this.createAccount,
        "password":this.createPassword,
      }).then((ans)=>{
        console.log(ans.data)
        if(ans.data.code===1){
          this.openDialog();
        }else{
          const tip = document.querySelector('.createTip');
          tip.innerText='该邮箱已被注册';
          tip.style.display = 'block';
        }
      })
    },

    openDialog() {
      this.$alert('注册成功', '提示', {
        confirmButtonText: '去登录',
        callback: action => {
          this.switchUi()
        }
      });
    },



    inputFocus() {
      const tip = document.querySelector('.logTip');
      tip.style.display = 'none';
    },

    createInputFocus() {
      const tip = document.querySelector('.createTip');
      tip.style.display = 'none';
    },

    switchUi() {
      const logBox = document.querySelector('.logBox');
      const createBox = document.querySelector('.createBox');
      console.log("switchUi")
      if (this.Ui === 'login') {
        this.Ui = 'create'
        setTimeout(() => {
          logBox.style.display = 'none';
        }, 300);
        logBox.classList.add('hide');
        createBox.style.display = 'block';
        createBox.classList.remove('hide');
      } else if (this.Ui === 'create') {
        this.Ui = 'login'
        setTimeout(() => {
          createBox.style.display = 'none';
        }, 300);
        createBox.classList.add('hide');
        logBox.style.display = 'block';
        logBox.classList.remove('hide');
      }
    },
  }
}
</script>

<template>
<div class="container">
  <div class="bg">
    <div class="logo-container">
      <h1 class="logo">Ploutos</h1>
      <span class="logoText">美丽，藏在数字中</span>
    </div>
    <div class="logBox">
      <h1>登录</h1>
      <div class="text">
        <span class="newUser">新用户?</span><span class="create" @click="switchUi">注册账户</span>
      </div>
      <form action="">
        <span class="email">邮箱</span>
        <input class="email-input" type="email" v-model="account" @focus="inputFocus">
        <span class="password">密码</span>
        <input class="password-input" type="password" v-model="password" @focus="inputFocus">
        <input type="submit" class="btn" @click.prevent="validateLogInput" value="登录">
        <label class="logTip">账户或密码错误</label>
      </form>
    </div>
    <div class="createBox hide">
      <h1>注册</h1>
      <div class="text">
        <span class="haveAccount">已有账户?</span><span class="goLogin" @click="switchUi">去登录</span>
      </div>
      <form action="">
        <span class="email">邮箱</span>
        <input class="email-input" type="email" v-model="createAccount" @focus="createInputFocus">
        <span class="password">密码</span>
        <input class="password-input" type="password" v-model="createPassword" @focus="createInputFocus">
        <span class="confirm">确认密码</span>
        <input class="confirm-input" type="password" v-model="confirmPassword" @focus="createInputFocus">
        <input type="submit" class="btn" @click.prevent="validateCreateInput" value="注册">
        <label class="createTip">账户或密码错误</label>
      </form>

    </div>
  </div>
</div>
</template>

<style scoped>

@keyframes tipAnimation {
  0%{
    transform: translateX(-10%);
  }
  50%{
    transform: translateX(10%);
  }
  100%{
    transform: translateX(0%);
  }
}

@keyframes switchAnimation {
  0%{
    transform: translate(20%,-50%);
    opacity: 0;
  }
  100%{
    transform: translate(4%, -50%);
    opacity: 1;
  }
}


.container{
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  .bg{
    width: 100%;
    height: 100%;
    background: url("../assets/bg.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .logo-container{
      position: absolute;
      top: 39%;
      left: 15%;
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo{

        font-size: 40px;
        color: #fff;
      }
      .logoText {
        font-size: 15px;
        color: #fff;
        transform: translateX(-9%);
      }
    }

    .logBox{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(4%,-50%);
      width: 28vw;
      height: 68vh;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
      animation: switchAnimation 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      h1{
        position: absolute;
        top: 8%;
        left: 12%;
      }
      .text{
        width: auto;
        height:20px;
        position: absolute;
        top: 18%;
        left: 12%;
        .newUser{
          font-size: 13px;
          color: #b6a2a2;
        }
        .create{
          font-size: 13px;
          color: #3370ff;
          cursor: pointer;
        }
        .create:hover{
          text-decoration: underline;
        }
      }
      .email{
        position: absolute;
        top: 30%;
        left: 12%;
        font-size: 12px;
        color: rgb(116,116,156);
      }
      .email-input{
        position: absolute;
        top: 35%;
        left: 12%;
        width: 80%;
        height: 30px;
        border: none;
        border-bottom: #3370ff 1px solid;
      }
      .password{
        position: absolute;
        top: 45%;
        left: 12%;
        font-size: 12px;
        color: rgb(116,116,156);
      }
      .password-input{
        position: absolute;
        top: 50%;
        left: 12%;
        width: 80%;
        height: 30px;
        border: none;
        border-bottom: #3370ff 1px solid;
      }
      input:focus{
        outline: none;
      }
      .btn{
        position: absolute;
        width: 74px;
        height: 30px;
        line-height: 30px;
        color: white;
        background: #3370ff;
        text-align: center;
        border-radius: 10px;
        font-weight: 300;
        right: 7%;
        top:58%;
      }
      .btn:hover {
        cursor: pointer;
        background: #0d66d0;
      }

      .logTip{
        position: absolute;
        display: none;
        color: #e01616;
        animation: tipAnimation 0.3s ease-in-out;
        left:12%;
        top:59%;
      }


    }



    .createBox{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(4%,-50%);
      width: 28vw;
      height: 68vh;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
      animation: switchAnimation 0.3s ease-in-out;
      display: none;
      transition: all 0.3s ease-in-out;
      h1{
        position: absolute;
        top: 8%;
        left: 12%;
      }
      .text{
        width: auto;
        height:20px;
        position: absolute;
        top: 18%;
        left: 12%;
        .haveAccount{
          font-size: 13px;
          color: #b6a2a2;
        }
        .goLogin{
          font-size: 13px;
          color: #3370ff;
          cursor: pointer;
        }
        .goLogin:hover{
          text-decoration: underline;
        }


      }

      .email{
        position: absolute;
        top: 30%;
        left: 12%;
        font-size: 12px;
        color: rgb(116,116,156);
      }
      .email-input{
        position: absolute;
        top: 35%;
        left: 12%;
        width: 80%;
        height: 30px;
        border: none;
        border-bottom: #3370ff 1px solid;
      }
      .password{
        position: absolute;
        top: 45%;
        left: 12%;
        font-size: 12px;
        color: rgb(116,116,156);
      }
      .password-input{
        position: absolute;
        top: 50%;
        left: 12%;
        width: 80%;
        height: 30px;
        border: none;
        border-bottom: #3370ff 1px solid;
      }
      .confirm{
        position: absolute;
        top: 60%;
        left: 12%;
        font-size: 12px;
        color: rgb(116,116,156);
      }
      .confirm-input{
        position: absolute;
        top: 65%;
        left: 12%;
        width: 80%;
        height: 30px;
        border: none;
        border-bottom: #3370ff 1px solid;
      }
      input:focus{
        outline: none;
      }
      .btn{
        position: absolute;
        width: 74px;
        height: 30px;
        line-height: 30px;
        color: white;
        background: #3370ff;
        text-align: center;
        border-radius: 10px;
        font-weight: 300;
        right: 7%;
        top:73%;
      }
      .btn:hover {
        cursor: pointer;
        background: #0d66d0;
      }

      .createTip{
        position: absolute;
        display: none;
        color: #e01616;
        animation: tipAnimation 0.3s ease-in-out;
        left:12%;
        top:74%;
      }
    }


    .hide{
      transform: translate(-12%, -50%);
      opacity: 0;
    }


  }
}
</style>