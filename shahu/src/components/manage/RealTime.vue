<template>
  <div class="realtime">
    <div class="realtime-data">
      <h4 class="bird-statistic">鸟类统计</h4>
      <h4 class="to-bird-detail" @click="toDetails">
        查看鸟类详情
        <svg class="icon" style="width: 1.0908203125em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1117 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3818"><path d="M970.28276331 465.43862766L553.28060931 55.61135266a45.816565 45.816565 0 0 0-63.815133 0 43.897313 43.897313 0 0 0 0 62.822031l388.079471 381.239346-388.079471 381.373246a43.741094 43.741094 0 0 0 0 62.68813 45.649188 45.649188 0 0 0 63.815133 0l417.035629-409.693374c9.719003-9.462359 13.590983-22.015607 12.82105-34.368002a43.294757 43.294757 0 0 0-12.854525-34.234102M656.15029031 499.67272966a43.038113 43.038113 0 0 0-12.653674-34.211785L226.50562131 55.61135266a46.017417 46.017417 0 0 0-63.993667 0 44.053531 44.053531 0 0 0 0 62.822031l388.391907 381.239346L162.51195431 881.04597566a43.863837 43.863837 0 0 0 0 62.68813 45.861199 45.861199 0 0 0 63.993667 0l417.024471-409.693374a43.328232 43.328232 0 0 0 12.620198-34.368002" p-id="3819"></path></svg>
      </h4>
      <div class="bird-table">
        <div class="bird-table-item">
          <p>总数</p>
          <p>{{total}}</p>
        </div>
        <div class="bird-table-item" v-for="(item,i) in allBirdList" :key="i">
          <p>{{item.name}}</p>
          <p>{{item.num}}</p>
        </div>
      </div>
      <!-- 报表按钮 -->
      <div class="details-icon" @click="toReport">
        <svg class="icon" style="width: 1.75em; height: 1.75em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4343"><path d="M273.423 396.155l178.482-127.931c7.694-5.515 18.384-3.869 24.063 3.703l100.47 133.96c10.254 13.672 29.649 16.443 43.321 6.189l162.979-122.234c9.426-7.069 11.336-20.441 4.267-29.867-7.07-9.426-20.441-11.336-29.867-4.267L618.062 360.016c-8.021 6.016-19.4 4.39-25.416-3.631l-104.15-138.867c-6.524-8.699-18.771-10.655-27.68-4.422L251.472 359.568c-10.103 6.062-13.379 19.166-7.317 29.269 6.061 10.104 19.166 13.379 29.268 7.318zM954.182 69.818H69.818c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h69.818V665.76c0 30.759 24.935 55.694 55.694 55.694h633.339c30.759 0 55.694-24.935 55.694-55.694V116.364h69.818c12.853 0 23.273-10.42 23.273-23.273 0.001-12.853-10.419-23.273-23.272-23.273zM837.818 665.76c0 5.045-4.104 9.149-9.149 9.149H195.331c-5.045 0-9.149-4.104-9.149-9.149V116.364h651.637V665.76zM302.545 535.273h325.818c12.853 0 23.273-10.42 23.273-23.273s-10.419-23.273-23.273-23.273H302.545c-12.853 0-23.273 10.42-23.273 23.273 0.001 12.853 10.42 23.273 23.273 23.273zM721.455 581.818h-418.91c-12.853 0-23.273 10.419-23.273 23.273 0 12.853 10.42 23.273 23.273 23.273h418.909c12.853 0 23.273-10.42 23.273-23.273s-10.419-23.273-23.272-23.273zM169.48 917.422c-7.864 7.864-8.793 20.555-1.651 29.08 8.158 9.738 22.696 10.216 31.48 1.431l226.478-226.479h-60.339L169.48 917.422zM645.908 721.455h-60.339l226.478 226.479a21.266 21.266 0 0 0 15.085 6.249 21.282 21.282 0 0 0 16.082-7.315c7.44-8.502 6.669-21.437-1.32-29.426L645.908 721.455z" p-id="4344"></path></svg>
      </div>
    </div>
    <div class="realtime-video">
      <img :src="imgPath">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      ws:null,
      imgPath:'',
      wsList:[null,null,null,null],
      socketList:[{ws:'ws://192.168.10.112:8124',capIndex:1},{ws:'ws://192.168.10.112:8124',capIndex:2},{ws:'ws://192.168.10.110:8124',capIndex:3},{ws:'ws://192.168.10.110:8124',capIndex:4}],
      notZero:[],//数量不为0的鸟
      allBirdList:[],//画面中出现的鸟的种类和数量
      total:0,//鸟类总数
    }
  },
  methods:{
    toDetails(){
      if(this.total==0){
        //$('.details-icon icon1').css('fill','#aaa');
        alert('当前画面未出现鸟类！');
      }else{
        this.$router.push({path:'/details'});
      }
      
    },
    toReport(){
      this.$router.push({path:'/report'});
    },
    setWebSocket(){
      //console.log(sessionStorage.caremaIndex);
      let cNum=sessionStorage.caremaIndex;//摄像头2的sessionStorage是1
      if(cNum==undefined){
        cNum=1;
      }

      this.wsList[cNum] = new WebSocket(this.socketList[cNum]['ws'])
      this.wsList[cNum].onopen = () => {
        // Web Socket 已连接上，使用 send() 方法发送数据
        for(let i=0;i<this.wsList.length;i++){
          if(i==cNum){
            continue;
          }else{
            if(this.wsList[i]!=null){
              this.wsList[i].close();
            }
          }
        }
        console.log('客户端WebSocket已启动');
        this.wsList[cNum].send("JS has connected!");
      };
      this.wsList[cNum].onmessage = e => {
        //console.log(sessionStorage.caremaIndex,JSON.parse(e.data));
        if(JSON.parse(e.data).capIndex==this.socketList[cNum]['capIndex']){
          let birdArray=JSON.parse(e.data);
          //console.log(birdArray);
          this.imgPath='data:image/jpeg;base64,'+JSON.parse(e.data).image;
          this.allBirdList=birdArray.birdsDict;
          //console.log(this.allBirdList);
          //统计数量不为0的鸟
          this.notZero=[];
          this.total=0;
          for(let i=0;i<this.allBirdList.length;i++){
            if(this.allBirdList[i].num!=0){
              //this.notZero=this.notZero+this.allBirdList[i].name;
              this.notZero.push(this.allBirdList[i].name);
            }
            this.total=this.total+this.allBirdList[i].num;
          }
          
          sessionStorage.notZeroBird=this.notZero.toString();
          console.log(this.notZero,sessionStorage.notZeroBird);
         
        }
      };
      this.wsList[cNum].onerror = function(error) {
          console.log('error :' + error.name + error.number);
      };
      //  
    
    }
  },
  created(){
    ///////////////////////////////////
    for(let i=0;i<this.wsList.length;i++){
      if(this.wsList[i]!=null){
        this.wsList[i].close();
      }
    }
    this.setWebSocket();

  },
  beforeDestroy() {
    for(let i=0;i<this.wsList.length;i++){
      if(this.wsList[i]!=null){
        this.wsList[i].close();
      }
    }
  }
}
</script>
<style>
.realtime{
  width:100%;
  height:93%;
  padding:1rem;
  box-sizing: border-box;
}
.realtime-data{
  width:100%;
  height:25%;
  padding:3rem 6rem;
  position:relative;
  background:#eee;
}
.details-icon{
  position:absolute;
  top:1rem;
  /* bottom:0;
  margin:auto; */
  right:6rem;
  display: flex;
  align-items: center;
}
.realtime-data .bird-table{
  display: flex;
  height: 100%;
}
.realtime-data .bird-table .bird-table-item{
  width: 15%;
  height: 100%;
}
.realtime-data .bird-table .bird-table-item p{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border:1px solid #eaeaea;
  font-size:1.25rem;
  width: 100%;
  height: 50%;
}
/******************************

/******************************/
h4.bird-statistic{
  position:absolute;
  top:1rem;
  left:6rem;
  font-size:1.2rem;
  font-weight:500;
}
h4.to-bird-detail{
  position:absolute;
  bottom:1rem;
  right:6rem;
  cursor: pointer;
}
.realtime-video{
  width:100%;
  height:75%;
  padding:1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.realtime-video img{
  height:90%;
}
</style>