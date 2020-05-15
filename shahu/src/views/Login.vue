<template>
  <div class="login">
<div class="content1">
  	<h1 class="chong-qing">沙湖鸟类识别系统</h1>
    <div class="login-box">
      <div class="form">
        <div class="form-group">
          <span>用户名</span>
          <div class="input-icon-frame">
          	<i class="input-icon user"></i>
          	<input type="text"  name="uName" autocomplete="off" v-model="userName"/>
          </div>
        </div>
        <div class="form-group">
          <span>密码</span>
          <div class="input-icon-frame">
          	<i class="input-icon password"></i>
          	<input type="password"  name="uPassword"  v-model="psw"/>
          </div>
          
        </div>
        <div class="login-btn-box">
          <button class="login-btn" @click="login">登陆</button>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>Copyright © 2019 Powered By <a href="http://www.quelingfei.com" target="_blank">雀凌飞信息技术有限公司</a></span>
    </div>
  </div>
  </div>
</template>
<script>
import {isLogin} from '@/api/axiosApi.js'

export default {
  data(){
    return{
       userName:'',
       psw:''
    }
  },
  methods:{
    login(){
      //20200515取消注释
      // if(this.userName=='root'&&this.psw=='root'){
      //   this.$router.push({path:'/home'})
      // }else{
      //   alert('用户名或密码错误！')
      // }
      
////////////////////////////////////////////////
//20200515注释
      let postKey={uName:this.userName,uPassword:this.psw};
      isLogin(postKey).then(res=>{
        if(res.data==true){
          sessionStorage.isLogin=true;
          this.$router.push({path:'/home'})
        }else{
          alert('用户名或密码错误！')
        }
      })
////////////////////////////////////////////////

    }
  },
  created(){
    ///////////////////////
    //20200515注释
    sessionStorage.isLogin=false;
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL);
    });
    ////////////////
  }
}
</script>
<style>
.content1 {
  width: 100%;
  height: calc(100vh);
  min-width:1300px;
  min-height:969px;
  background: url(../../public/img/bg3.png) no-repeat;
  background-size: 100% 100%;  
  display: flex;
  justify-content: center;
  position:relative;
}
.content1>h1.chong-qing{
	  padding-top: 50px;
    font-size: 48px;
    letter-spacing: 5px;
    color:#fff;
}
.login-box {
  width: 41%;
  height: 450px;
  border-radius: 15px;
  background: rgba(255,255,255,.2);
  box-shadow: 0px 0px 40px rgba(255,255,255,.3);
  position:absolute;
  top:190px;
}
.form {
  display: flex;
  flex-direction: column;
}
.form-group {
  display:flex;
  justify-content:center;
  align-items:baseline;
}
.input-icon-frame{
	position:relative;	
}
.input-icon-frame .input-icon{
	position:absolute;
	left:10px;;
	top:82px;
  	width:30px;
  	height:30px;
}
.input-icon-frame .input-icon.user{
	background:url(../../public/img/login-user-unused.png) no-repeat;
	background-size: 100% 100%;
	
}
.input-icon-frame .input-icon.password{
	background:url(../../public/img/login-password-unused.png) no-repeat;
	background-size: 100% 100%;
	
}
.form-group span {
  width: 100px;
  display: inline-block;
  font-size: 30px;
  margin-right: 18px;
  color: #888;
}
.login-btn-box {
  text-align: center;
}
.login-btn {
  width: 100px;
  height: 50px;
}
.form input[type="text"],
.form input[type="password"] {
  margin-top: 75px;
  width: 320px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius:10px;
  color: #000;
  font-size: 24px;
  font-weight: 200;
  padding-left: 60px;
  /* padding-top: 12px; */
  box-sizing: border-box;
}
.form .login-btn {
  margin-top: 100px;
  width: 70%;
  height: 54px;
  font-size: 34px;
  font-weight: 200;
  border-radius: 30px;
  color: #999;
  border: 1px solid rgba(255,255,255,.3);
  background: linear-gradient(45deg, #0d46ec, #0e38af);
}

	.copyright {
	  width: 100%;
	  position: fixed;
	  bottom: 2px;
	  color: #fff;
	  font-size: 14px;
	  text-align: center;
	}
	.copyright span a {
	  color: skyblue;
	  text-decoration: none;
	}
	.copyright span a:hover {
	  text-decoration: skyblue;
	}
	.copyright span a:focus {
	  color: skyblue;
	}
</style>