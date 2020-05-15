<template>
  <div class="manage">
    <div class="m-container">
      <!-- 侧边栏 -->
      <div class="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-img">
            <img src="img/logo.png">
          </div>
        </div>
        <div class="sidebar-systems">
          <ul>
            <li v-for="(item,i) in systemList" :key="i"  @click="ChangeSelected($event,i)">
              <a href="javascript:;">              
                <span>{{item.title}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右侧内容部分 -->
      <div class="content-eara">
        <!-- 实时数据or历史记录 -->
        <div class="nav-bar">
          <div class="bar-sec-nav">
            <ul>
              <li  :class="{active: this.$store.state.active1}"  v-on:click="isAct1()">
                <router-link to="/manage">实时数据</router-link>
              </li>
              <li  :class="{active: this.$store.state.active2}"  v-on:click="isAct2()">
                <router-link to="/manage/history">历史记录</router-link>
              </li>
            </ul>
          </div>
          <div class="bar-back" @click="backToHome">
            <svg class="icon" style="width: 1.5em; height: 1.5em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3081"><path d="M209.92 988.16c-15.36 0-30.72-15.36-30.72-30.72s15.36-30.72 30.72-30.72h471.04c153.6 0 281.6-128 281.6-281.6s-128-281.6-281.6-281.6H102.4l220.16 220.16c5.12 5.12 10.24 10.24 10.24 20.48 0 5.12-5.12 15.36-10.24 20.48-5.12 5.12-10.24 10.24-20.48 10.24-5.12 0-15.36-5.12-20.48-10.24L10.24 353.28c-5.12-5.12-10.24-10.24-10.24-20.48 0-5.12 5.12-15.36 10.24-20.48L281.6 40.96c5.12-5.12 10.24-10.24 20.48-10.24 5.12 0 15.36 5.12 20.48 10.24 0 10.24 5.12 15.36 5.12 25.6 0 5.12-5.12 15.36-10.24 20.48L97.28 307.2h583.68a343.04 343.04 0 0 1 0 686.08H209.92z" fill="#606266" p-id="3082"></path></svg>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      systemList:[
        {title:"鸟类监测点1"},
        {title:"鸟类监测点2"},
        {title:"鸟类监测点3"},
        {title:"鸟类监测点4"},
      ]
    }
  },
  methods:{
    backToHome(){
      this.$router.push({path:'/home'})
    },
    ChangeSelected(e,i){
      sessionStorage.caremaIndex=i;
      var allSystems=document.querySelectorAll(".sidebar-systems ul li");
      for(let i=0;i<allSystems.length;i++){
        allSystems[i].classList.remove('selected');
      }
      var li=e.currentTarget;
      li.classList.add("selected");
      location.reload();
    },
    isSelected(){
      var url=window.location.href;
      var allSystems=document.querySelectorAll(".sidebar-systems ul li");
      if(sessionStorage.caremaIndex==1){
        allSystems[1].classList.add('selected');
       }
      else if(sessionStorage.caremaIndex==2){
         allSystems[2].classList.add('selected');
       }else if(sessionStorage.caremaIndex==3){
         allSystems[3].classList.add('selected');
       }
      else{
        allSystems[0].classList.add('selected');
      }
    },
    isAct1(){
      this.$store.commit('increment1')
    },
    isAct2(){
      this.$store.commit('increment2')
    }
  },
  mounted(){
    this.isSelected();
    var url=window.location.href;
    if(url.indexOf('history')!=-1){
      this.$store.commit('increment2')
    }else{
      this.$store.commit('increment1')
    }
  },
  created(){
    //console.log(sessionStorage.isLogin);
    ////20200515注释
    if(sessionStorage.isLogin!='true'){
      alert('请登录');
      this.$router.push({path:'/'});
    }
  }
}
</script>

<style>
  .manage{
    width:100%;
    height:100%;
  }
  .m-container{
    height:100%;
    display: flex;
  }
  .m-container .sidebar{
    width:16%;
    height:100%;
    background:#eaeaea;
  }
  .m-container .content-eara{
    width:84%;
    height:100%;
  }
  .sidebar-img{
    text-align: center;
    margin-top: 4rem;
  }
  .sidebar-img img{
    margin:20px auto;
  }
  .sidebar-systems{
    height:50%;
  }
  .sidebar-systems ul{
    height:100%;
    margin-top:5rem;
  }
  .sidebar-systems ul li{
    list-style: none;
    height:12%; 
  }
  .sidebar-systems ul li a{
    width:100%;
    height:100%;
    color:#000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.25rem;
  }
  .sidebar-systems ul li img{
    margin-right:1em;
    margin-left: 2em;
  }
  .sidebar-systems li.selected{
    background:#fff;
  }
  /* .sidebar-systems li.selected a{
    color:#fff; 
  }*/
/*以下为内容部分导航栏样式*/
.nav-bar{
  width:100%;
  height:7%;
  background:#fff;
  display: flex;
  box-shadow: 0px 5px 5px #ccc;  
}

.bar-sec-nav{
  width:95%;
  height:100%;
}
.bar-sec-nav ul{
  width:100%;
  height:100%;
  display: flex;
  align-content: center;
}
.bar-sec-nav ul li{
  width:12%;
  height:100%;
}
.bar-sec-nav ul li.active a{
  color:#000;
  font-weight: 600;
}
.bar-sec-nav ul a{
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#a7a7a7;
  font-size:1.25em;
  letter-spacing: 1px;
}
.bar-back{
  width:5%;
  display: flex;
  justify-content: center;
  align-items: center;
}


/*内容部分内容区域样式*/
.system-content{
  height:88%;
  padding:1.5rem;
}
</style>

