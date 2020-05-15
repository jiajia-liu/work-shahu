<template>
  <div  id="container" @click="allArea">
    <div>
      <div class="main-title"  @click="thisArea($event)">
        <h1>宁夏沙湖景区</h1>
        <svg @click="showExit" class="icon" style="width: 3em; height: 3em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1821"><path d="M608.188 557.902 434.715 557.902c-161.213 0-292.327 131.238-292.327 292.602l0 17.361c0 84.354 129.017 84.354 292.327 84.354l173.474 0c156.884 0 292.356 0 292.356-84.354l0-17.361C900.545 689.171 769.397 557.902 608.188 557.902L608.188 557.902zM512.785 535.569c127.658 0 231.524-104.015 231.524-231.894 0-127.873-103.866-231.895-231.524-231.895-127.654 0-231.53 104.044-231.53 231.9C281.255 431.526 385.131 535.569 512.785 535.569L512.785 535.569zM512.785 535.569" p-id="1822"></path></svg>
        <div class="user-options" v-show="displayExit">
          <h2><router-link to="/manage">管理中心</router-link></h2>
          <h2><router-link to="/">退出登录</router-link></h2>
        </div>
      </div>
      <!-- 天气 -->
      <div class="weather">
      <div class="same-day">
        <div class="same-day-top">
          <div class="weather">
            <h2>Weather</h2>
          </div>
          <div class="date">
            <img src="img/date.png" alt="">
            <p class="date-format"></p>
          </div>
        </div>
        <div class="same-day-middle">
          <div class="real-time-temperature"></div>
          <div class="region">
            <img class="region-icon" src="img/coordinate.png" alt="">
            <p class="region-name">银川沙湖</p>
          </div>
        </div>
        <div class="same-day-bottom">
          <div class="weather-low"></div>
          <div class="weather-high"></div>
          <div class="weather-type"></div>
        </div>
      </div>
      <div class="forecast">
        <table>
          <tr class="table-forecast-date"></tr>
          <tr class="table-forecast-icon"></tr>
          <tr class="table-forecast-type"></tr>
        </table>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{
      displayExit:false
    }
  },
  methods:{
    showExit(){
      this.displayExit=!this.displayExit;
    },
    //设置弹窗时。点击任何区域均可关闭
    allArea() {
      this.$set(this, 'displayExit', false)
      //全局区域内点击时isdisplay均为true
    },
    thisArea(event) {
      event.stopPropagation() //此区域不受上面方法的影响
    },
    paintMap(){
        var map = null
        //var geocoder = null
        //var info = null;
        var init=()=> {
          //定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
          map = new qq.maps.Map(document.getElementById("container"), {
            //通过mapTypeId来设置卫星地图样式
            mapTypeId:qq.maps.MapTypeId.SATELLITE,
            // 地图的中心地理坐标。
            center: new qq.maps.LatLng(38.341632,106.501405),// 38.808144,106.365170
            // zoomLevel:8,
            zoom:9,
            zoomControlOptions: {
                //设置缩放控件的位置
                position: qq.maps.ControlPosition.LEFT_BOTTOM
            },
            mapTypeControlOptions: {
                //设置控件位置
                position: qq.maps.ControlPosition.RIGHT_BOTTOM
            },
            panControlOptions: {
                //设置平移控件的位置
                position: qq.maps.ControlPosition.RIGHT_BOTTOM
            }
          });
          /////////点位1///////////沙湖渔场 38.463622,106.244620
          var position1=new qq.maps.LatLng(38.777305,106.417266);
          //
          var marker=new qq.maps.Marker({
            position:position1,
            map:map
          });
          var info=new qq.maps.InfoWindow({
            map:map
          });
          qq.maps.event.addListener(marker, 'click', function() {
            info.open(); 
            // info.setContent('<div style="text-align:center;white-space:nowrap;'+
            // 'margin:10px;"><iframe src="http://27.50.142.92:10800/play.html?channel=2&iframe=yes&aspect=460x310" width="100%" height="100%" allowfullscreen allow="autoplay" scrolling="no"></iframe></div>');
            info.setContent('<div style="text-align:center;width:100%;height:100%'+
            '"><iframe src="http://192.168.10.113:10800/play.html?channel=1&iframe=yes&aspect=460x310" width="100%" height="100%" allowfullscreen allow="autoplay" scrolling="no"></iframe></div>');
            info.setPosition(position1);   
          });

           /////////点位2///////////沙湖2 38.454493,106.211219
          var position2=new qq.maps.LatLng(38.763186,106.355854);
          //
          var marker2=new qq.maps.Marker({
            position:position2,
            map:map
          });
          var info=new qq.maps.InfoWindow({
            map:map
          });
          qq.maps.event.addListener(marker2, 'click', function() {
            info.open(); 
            // info.setContent('<div style="text-align:center;white-space:nowrap;'+
            // 'margin:10px;"><iframe src="http://27.50.142.92:10800/play.html?channel=2&iframe=yes&aspect=460x310" width="100%" height="100%" allowfullscreen allow="autoplay" scrolling="no"></iframe></div>');
            info.setContent('<div style="text-align:center;width:100%;height:100%'+
            '"><iframe src="http://192.168.10.113:10800/play.html?channel=2&iframe=yes&aspect=460x310" width="100%" height="100%" allowfullscreen allow="autoplay" scrolling="no"></iframe></div>');
            info.setPosition(position2);   
          });

          /////////点位3///////////阅海 38.323664,106.115968
          var position3=new qq.maps.LatLng(38.544121,106.204663);
          //
          var marker3=new qq.maps.Marker({
            position:position3,
            map:map
          });
          var info=new qq.maps.InfoWindow({
            map:map
          });
          qq.maps.event.addListener(marker3, 'click', function() {
            info.open(); 
            // info.setContent('<div style="text-align:center;white-space:nowrap;'+
            // 'margin:10px;"><iframe src="http://27.50.142.92:10800/play.html?channel=2&iframe=yes&aspect=460x310" width="100%" height="100%" allowfullscreen allow="autoplay" scrolling="no"></iframe></div>');
            info.setContent('<div style="text-align:center;width:100%;height:100%'+
            '"><iframe src="http://192.168.10.113:10800/play.html?channel=3&iframe=yes&aspect=460x310" width="100%" height="100%" allowfullscreen allow="autoplay" scrolling="no"></iframe></div>');
            info.setPosition(position3);   
          });

          /////////点位4///////////马家滩 37.462912,106.464690
          var position4=new qq.maps.LatLng(37.772411,106.795006);
          //
          var marker4=new qq.maps.Marker({
            position:position4,
            map:map
          });
          var info=new qq.maps.InfoWindow({
            map:map
          });
          qq.maps.event.addListener(marker4, 'click', function() {
            info.open(); 
            // info.setContent('<div style="text-align:center;white-space:nowrap;'+
            // 'margin:10px;"><iframe src="http://27.50.142.92:10800/play.html?channel=2&iframe=yes&aspect=460x310" width="100%" height="100%" allowfullscreen allow="autoplay" scrolling="no"></iframe></div>');
            info.setContent('<div style="text-align:center;width:100%;height:100%'+
            '"><iframe src="http://192.168.10.113:10800/play.html?channel=4&iframe=yes&aspect=460x310" width="100%" height="100%" allowfullscreen allow="autoplay" scrolling="no"></iframe></div>');
            info.setPosition(position4);   
          });


        }
        //调用初始化函数地图
        init();
    },
    getWeather(){
      /* 获取天气 */
    $.get("http://wthrcdn.etouch.cn/weather_mini?city=银川", function (data) {
      var info = data.data;
      var today = info.forecast[0];
      var timeTemperature = Math.round((parseInt(today.low.slice(3,-1)) + parseInt(today.high.slice(3,-1)))/2);
      $(".real-time-temperature").html(timeTemperature + "℃")
      $(".weather-low").html(today.low);
      $(".weather-high").html(today.high);
      $(".weather-type").html(today.type);
      var forecast = info.forecast;
      for (var i = 0; i < forecast.length; i++) {
        $(".table-forecast-date").append("<td>" + forecast[i].date + "</td>");
        $(".table-forecast-icon").append("<td>" + forecast[i].type + "</td>");
        $(".table-forecast-type").append("<td>" + forecast[i].type + "</td>");
      }
      $(".table-forecast-icon").find("td").each(function () {
        if($(this).html() == "晴") {
          $(this).html('<img src="img/sunny-day.png" alt="">');
        }else if($(this).html() == "多云") {
          $(this).html('<img src="img/partly-cloudy.png" alt="">');
        }else if($(this).html() == "阴") {
          $(this).html('<img src="img/cloudy-day.png" alt="">');
        }else if($(this).html() == "小雨") {
          $(this).html('<img src="img/light-rain.png" alt="">');
        }else if($(this).html() == "中雨") {
          $(this).html('<img src="img/rain.png" alt="">');
        }else if($(this).html() == "大雨") {
          $(this).html('<img src="img/heavy-rain.png" alt="">');
        }else if($(this).html() == "暴雨") {
          $(this).html('<img src="img/rainstorm.png" alt="">');
        }else if($(this).html() == "阵雨") {
          $(this).html('<img src="img/shower.png" alt="">');
        }else if($(this).html() == "雷阵雨") {
          $(this).html('<img src="img/thunder-shower.png" alt="">');
        }else if($(this).html() == "小雪") {
          $(this).html('<img src="img/light-snow.png" alt="">');
        }else if($(this).html() == "中雪") {
          $(this).html('<img src="img/medium-snow.png" alt="">');
        }else if($(this).html() == "大雪") {
          $(this).html('<img src="img/heavy-snow.png" alt="">');
        }else if($(this).html() == "雨夹雪") {
          $(this).html('<img src="img/sleet.png" alt="">');
        }
      });
    }, "json");
    }
  },
  mounted(){
    this.paintMap();
    this.getWeather();
  },
  created(){
    //console.log(sessionStorage.isLogin);
    /////////////////////////////////////////
    //20200515注释
    if(sessionStorage.isLogin!='true'){
      alert('请登录');
      this.$router.push({path:'/'});
    }
    ///////////////////////////////////
  }
}
</script>

<style>
#container>div{
  position:absolute;
  width:100%;
  height:10%;
  z-index: 10;
}
.main-title{
  position:relative;
  height:100%;
  background:rgba(34,61,90,0.6);
}
.main-title h1{
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  letter-spacing: 3px;
  font-size:2.5rem;
  font-weight:400;
}
.main-title svg{
  position:absolute;
  top:0px;
  bottom:0;
  margin:auto;
  right:0px;
}
.main-title .user-options{
  position:absolute;
  bottom:-100px;
  right:0px;
  background:rgba(34,61,90,0.6);
  width:10%;
  height:100px;
}
.main-title .user-options h2{
  height:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.main-title .user-options h2:hover{
  background:rgba(34,61,90,0.7);
}
.main-title .user-options h2:hover a{
  color:#fff;
}
.main-title .user-options h2 a{
  color:#ccc;
}
#container{
  width:100%;
  height:100%;
}
/* 天气预报样式 */
.same-day-top,
.same-day-middle,
.same-day-bottom {
  display: flex;
  justify-content: space-between;
}
.weather {
  width: 25%;
  color: #fff;
  top: 10%;
  left: 3%;
}
.weather h2 {
  font-size: 34px;
}
.same-day-top {
  margin-bottom: 8px;
}
.same-day-top .date {
  text-align: right;
}
.same-day-top .date p {
  margin-top: 20px;
}
.real-time-temperature {
  font-size: 80px;
  color: #08fcf8;
}
.region {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.region-icon {
  width: 15px;
  margin: 10px auto;
}
.same-day-bottom {
  margin: 26px 0px 16px;
}
.forecast table{
	width:100%;
}
.forecast table td {
  padding-right: 10px;
  padding-top: 14px;
  text-align: center;
}
.forecast table td img {
	width: 50px;
}
.table-forecast-date,
.table-forecast-type {
  color: #08fcf8;
}
</style>