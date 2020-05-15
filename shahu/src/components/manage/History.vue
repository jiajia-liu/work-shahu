<template>
  <div class="history">
    <div class="chart">
      <div id="main">
        
      </div>
      <h3>鸟类出现频率</h3>
      <input type="date" v-model="date" @change="pagechange()">
    </div>
    <!-- 表格展现数据 -->
    <div class="data-table" v-if="hasData">
      <div class="table-bird">
        <ul>
          <li>时间</li>
          <li>苍鹭</li>
          <li>绿头鸭</li>
          <li>鸳鸯</li>
          <li>总数（只）</li>
        </ul>
        <ul v-for="(item,i) of dataList" :key="i">
          <li>{{item.time}}</li>
          <li>{{item.aCount}}</li>
          <li>{{item.bCount}}</li>
          <li>{{item.cCount}}</li>
          <li>{{item.aCount+item.bCount+item.cCount}}</li>
        </ul>
      </div>
      <div class="page">
        <v-pagination :total="total" :current-page="current" @pagechange="pagechange"></v-pagination>
      </div>
    </div>
    <div v-else class="data-table">
      <h2>当天无数据</h2>
    </div>
  </div>
</template>
<script>
import pagination from '@/components/manage/pagenation.vue'
import {getData} from '@/api/axiosApi.js'
import qs from 'qs'

export default {
  data(){
    return{
      date:'',
      hasData:true,
      ////////以下为分页数据///////////
      total: 8, // 记录总条数
      display: 8, // 每页显示条数
      current: 1, // 当前的页数     
      ///////////////////////////////////
      allList:[],
      dataList:[],
      timeList:['1'],//折线图横轴时间
      bird1:['1'],
      bird2:['1'],
      bird3:['1'],
      birdsName:[],//所有种类的鸟名称
    }
  },
  components: {
    'v-pagination': pagination
  },
  methods:{
    //绘制折线图
    paintEcharts(){
      var myChart = echarts.init(document.getElementById('main'));
      var option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['绿头鸭','鸳鸯','大天鹅']
        },
        xAxis: {
            type: 'category',
            name:'时间',
            boundaryGap: false,
            data: this.timeList
            //['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19']
        },
        yAxis: {
            name:'数量（只）',
            type: 'value'
        },
        series: [
            {
                name:'绿头鸭',
                type:'line',
                stack: '总量1',
                data:this.bird1
                //[320, 332, 301, 334, 390, 330, 320,455,666,433,211,456,654,321,345,543,333,444,666]
            },
            {
                name:'鸳鸯',
                type:'line',
                stack: '总量2',
                data:this.bird2
                //[120, 220, 150, 111, 222, 300, 260,333,555,321,111,321,555,122,111,444,222,222,333]
            },
            {
                name:'大天鹅',
                type:'line',
                stack: '总量3',
                data:this.bird3
                //[20, 20, 15, 122, 122, 200, 160,133,155,121,112,121,255,22,155,144,122,122,133]
            }
        ]
      }
      myChart.setOption(option);
    },
    //获取当前日期
    getTodayDate(){
      var obj=new Date();
      var month=obj.getMonth();
      console.log(month);
      if(month+1<=9){
        month='0'+(month+1);
      }else{
        month=month+1
      }
      var day=obj.getDate();
      if(day+1<10){
        day='0'+day;
      }
      var dateString=obj.getFullYear()+'-'+month+'-'+day;
      this.date=dateString;
      console.log(this.date)
    },
    //以下为分页数据//////////
    pagechange: function(currentPage) {
      console.log(currentPage,sessionStorage.caremaIndex);
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据
      let cameraIndex;
      //sessionStorage.caremaIndex编号为0,1,2,3   
      //对应的摄像头编号为1,2,3,4
      if(sessionStorage.caremaIndex=='1'){
        cameraIndex=2;
      }else if(sessionStorage.caremaIndex=='2'){
        cameraIndex=3;
      }else if(sessionStorage.caremaIndex=='3'){
        cameraIndex=4;
      }else{
        cameraIndex=1;
      }
      let postKey={date:this.date,cameraNum:cameraIndex};   
      ////////////post请求
      getData(postKey).then(res=>{ 
        if(JSON.stringify(res.data) == "{}"){
            console.log('无数据');
            this.timeList=[];
            this.bird1=[];
            this.bird2=[];
            this.bird3=[];
            this.hasData=false;
            this.paintEcharts();
        }else{
            this.hasData=true;
            console.log(res.data);
            let timeList=[],bird1=[],bird2=[],bird3=[],list=[];
            /////////////////////////////

            /////////////////////////////
            for(var i in res.data) {
              console.log(i.slice(11,19));
              timeList.push(i.slice(11,19));
              bird1.push(res.data[i][0].birdQuantity);
              bird2.push(res.data[i][1].birdQuantity);
              bird3.push(res.data[i][2].birdQuantity);
              console.log(i,":",res.data[i][0].birdQuantity,res.data[i][1].birdQuantity,res.data[i][2].birdQuantity);
            }
            for(let i=0;i<timeList.length;i++){
              list.push({time:timeList[i],aCount:bird1[i],bCount:bird2[i],cCount:bird3[i]})
            }
            this.timeList=timeList;
            this.bird1=bird1;            
            this.bird2=bird2;
            this.bird3=bird3;
            this.allList=list;
            console.log(this.allList)
            this.total=list.length;        
            //获取每一页的数据
            if(currentPage==undefined){
              currentPage=1;
            }
            var start = (currentPage - 1) * 8;
            var end = currentPage * 8;
            this.dataList = this.allList.slice(start, end);
            this.paintEcharts();
        }
        
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  mounted(){
    // this.pagechange();
    // this.paintEcharts();
  },
  created(){
    this.getTodayDate();
    this.pagechange();
  },
  updated(){
    //console.log(this.date);
    // console.log(typeof(this.date))
  }
}
</script>
<style>
.history{
  width:100%;
  height:93%;
  padding:1rem;
  box-sizing: border-box;
}
.chart{
  width:100%;
  height:45%;
  position: relative;
  background:#eaeaea;
  box-shadow: 0px 5px 5px #ccc;
}
#main{
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 0.5rem;
}
.chart h3{
  position: absolute;
  top:2%;
  left:1%;
}
.chart input{
  position: absolute;
  top:2%;
  right:1%;
}
.data-table{
  width:100%;
  height:52%;
  background:#eaeaea;
  margin-top:1.5rem;
  box-shadow: 0px 5px 5px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div.table-bird{
  width:100%;
  height:85%;
  
}
.table-bird ul{
  display: flex;

  border-bottom:1px solid #bbb;
  width:100%;
  height:10%;
}
.table-bird ul:first-child{
  height:20%;
  font-weight: 600;
}
.table-bird li{
  width:20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page{
  width:100%;
  height:15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>