<template>
  <div class="report" id="report">
    <div id="top"></div>
    <div class="cont">
      <h1 class="report-title">沙湖鸟类多样性品种分析</h1>
      <h3 class="report-subtitle">简介</h3>
      <p class="report-shahu">宁夏石嘴山市沙湖旅游景区，位于宁夏回族自治区石嘴山市平罗县境内，是以自然景观为主体，沙、水、苇、鸟、山五大景源有机结合构成的国家AAAAA级旅游景区，被誉为“世间少有”的文化旅游胜地。
        宁夏沙湖生态旅游区是一处融合江南水乡之灵秀与塞北大漠之雄浑为一体的“丝路驿站”上的旅游明珠。主要景点有沙湖国际沙雕园、鸟岛（百鸟乐园）、湖东湿地（鸟类观测站）、新门区广场、沙湖题字石等多余处景观组成 。
        2000年被中央精神文明办公室、国家建设部、国家旅游局确定为“全国文明旅游风景区”，2018中国黄河旅游大会上被评为“中国黄河50景”，2018年度《中国国家旅游》最佳生态旅游目的地。</p>
      <h3 class="report-subtitle">
        鸟类多样性数据统计
        <input type="month" v-model="date" class="month-input" @change="getReportFun()">
        <select  id="reportCaremaNum" v-model="camera" @change="getReportFun()">
          <option value="1">监测点位1</option>
          <option value="2">监测点位2</option>
          <option value="3">监测点位3</option>
          <option value="4">监测点位4</option>
        </select>
      </h3>
      <div v-show="hasData">
        <div class="report-table">
          <ul>
            <li>日期</li>
            <li v-for="(item,index) in birdsList" :key="index">{{item}}</li>
            <li>合计</li>
          </ul>
          <ul v-for="(item,index) in tableList" :key="index">
            <li>{{item.time}}</li>
            <li>{{item.aCount}}</li>
            <li>{{item.bCount}}</li>
            <li>{{item.cCount}}</li>
            <li>{{item.aCount+item.bCount+item.cCount}}</li>
          </ul>
        </div>
        <div class="report-chart" id="reportChart" >

        </div>
      </div>
      <div v-show="!hasData" class="no-data"><h3>当月无数据!</h3></div>
      <div class="report-summary">
        <h3 class="report-subtitle">总结</h3>
        <p v-if="hasData">
          在宁夏沙湖国家旅游景区，于{{summaryList.time}}共监测到珍稀鸟类{{summaryList.birdsPopulation}}种，分别为{{summaryList.name}}，
          平均每天检测到绿头鸭{{summaryBirdsCount['绿头鸭']}}只，鸳鸯{{summaryBirdsCount['鸳鸯']}}只，大天鹅{{summaryBirdsCount['大天鹅']}}只，
          珍稀鸟类活动比较丰富，湿地生态多样性表现良好。
        </p>
        <p v-else>
          在宁夏沙湖国家旅游景区，于{{summaryList.time}}共监测到珍稀鸟类0种。
        </p>
      </div>
      <div class="report-btn">
        <button @click="toBack" class="go-back">返回</button>
        <button @click="toPrint" class="print">
          <!-- <a href="#top">打印</a>    -->
          打印
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {getReport,getReportBird} from '@/api/axiosApi.js'

export default {
  data(){
    return {
      date:'',//请求时的时间参数
      camera:1,//请求时的摄像头蚕食
      tableList:[],//循环生成表格的列表
      hasData:true,//是否有数据，控制是否显示表格和折线图
      timeList:[],
      bird1:[],
      bird2:[],
      bird3:[],
      summaryList:{time:'2019年9月',birdsPopulation:3,name:'绿头鸭，鸳鸯，大天鹅'},
      summaryBirdsCount:{'绿头鸭':6,'鸳鸯':8,'大天鹅':7},
      chartList:[
        {
          time:"2019-10-18",
          value:[
            {name:'绿头鸭',count:3},
            {name:'大天鹅',count:5},
            {name:'鸳鸯',count:3}
          ]
        },
        {
          time:"2019-10-19",
          value:[
            {name:'绿头鸭',count:3},
            {name:'大天鹅',count:5},
            {name:'鸳鸯',count:3}
          ]
        },
      ],//报表数据
      birdsList:['绿头鸭','大天鹅','鸳鸯'],//当月出现的所有鸟的种类
    }
  },
  methods:{
    toBack(){
      history.go(-1); 
    },
    //打印报表
    toPrint(){
      /* 隐藏返回和打印按钮 */
       $(".print").hide();
       $(".go-back").hide();
      // /* ----------- */
      // var pdf = new jsPDF('p','pt','a4');
      //   pdf.internal.scaleFactor = 2.3;  //可以调整缩放比例
      //   $('.report').css("background","#fff");
      //   var options = {
      //   	//background: '#FFFFFF',
      //     pagesplit: true //分页
      //     //pagesplit: false//不分页
      //   };
      //  	pdf.addHTML($('.report').get(0),0,0,options,function() {
      //     pdf.save($('.report-title').text()+'.pdf');
      //     /* 显示返回和打印按钮 */
	    //     $(".print").show();
			//     $(".go-back").show();
			
      //   });
      ////////////////////////
      
      this.print();
      
    },
    print() {

      /////////////////////////////
      document.getElementById("report").style.background = "#fff";
      html2canvas(
                document.getElementById("report"),
                {
                    dpi: 172,//导出pdf清晰度
                    onrendered: function (canvas) {
                        var contentWidth = canvas.width;
                        var contentHeight = canvas.height;

                        //一页pdf显示html页面生成的canvas高度;
                        var pageHeight = contentWidth / 592.28 * 841.89;
                        //未生成pdf的html页面高度
                        var leftHeight = contentHeight;
                        //pdf页面偏移
                        var position = 0;
                        //html页面生成的canvas在pdf中图片的宽高（a4纸的尺寸[595.28,841.89]）
                        var imgWidth = 595.28;
                        var imgHeight = 592.28 / contentWidth * contentHeight;

                        var pageData = canvas.toDataURL('image/jpeg', 1.0);
                        var pdf = new jsPDF('', 'pt', 'a4');

                        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                        //当内容未超过pdf一页显示的范围，无需分页
                        if (leftHeight < pageHeight) {
                            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                        } else {
                            while (leftHeight > 0) {
                                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                                leftHeight -= pageHeight;
                                position -= 841.89;
                                //避免添加空白页
                                if (leftHeight > 0) {
                                    pdf.addPage();
                                }
                            }
                        }
                        pdf.save('content.pdf');
                    },
                    //背景设为白色（默认为黑色）
                    background: "#fff"  
                })

      /////////////////////////////
    },
    //绘制折线图
    paintReportChart(){
      //console.log('我运行到这里了');

      var myChart = echarts.init(document.getElementById('reportChart'));
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
    //获得当前时间所属年月
    getMonthNow(){
      let obj=new Date();
      let month=obj.getMonth();
      if(month+1<=9){
        month='0'+(month+1);
      }else{
        month=month+1
      }
      let monthNow=obj.getFullYear()+'-'+month;
      this.summaryList.time=obj.getFullYear()+'年'+month+'月';
      this.date=monthNow;
      //console.log(this.date);
    },
    //向接口请求数据
    getReportFun(){  
      this.summaryList.time=this.date.slice(0,4)+'年'+this.date.slice(5,7)+'月';   
      let postkey={ cameraNum:this.camera,date:this.date};
      getReport(postkey).then(res=>{
        if(JSON.stringify(res.data) == "{}"){
          console.log('无数据');
          this.hasData=false;
            
        }else{
          // console.log(res.data);
          // this.chartList=res.data;
          //////////////////////////////
          this.hasData=true;
          //console.log(res.data);
          let allDataList=[],timeList=[],bird1=[],bird2=[],bird3=[];
          for(var i in res.data) {
            //console.log(i);
            timeList.push(i);
            bird1.push(Math.round((res.data[i]['绿头鸭'])/(res.data[i]['number'])));
            bird2.push(Math.round((res.data[i]['鸳鸯'])/(res.data[i]['number'])));
            bird3.push(Math.round((res.data[i]['大天鹅'])/(res.data[i]['number'])));
            //console.log(i,":",Math.round((res.data[i]['鸟1'])/(res.data[i]['number'])),Math.round((res.data[i]['鸟2'])/(res.data[i]['number'])));
          }
          for(let i=0;i<timeList.length;i++){
            allDataList.push({time:timeList[i],aCount:bird1[i],bCount:bird2[i],cCount:bird3[i]})
          }
          this.timeList=timeList;
          this.bird1=bird1;
          this.bird2=bird2;
          this.bird3=bird3;
          this.tableList=allDataList;
          let bird1All=0,bird2All=0,bird3All=0;
          for(let i=0;i<bird1.length;i++){
            bird1All=bird1All+bird1[i];
          }
          for(let i=0;i<bird2.length;i++){
            bird2All=bird2All+bird2[i];
          }
          for(let i=0;i<bird3.length;i++){
            bird3All=bird3All+bird3[i];
          }
          //console.log(bird1All,bird2All,bird3All);
          this.summaryBirdsCount['绿头鸭']=bird1All/bird1.length;
          this.summaryBirdsCount['鸳鸯']=bird2All/bird2.length;
          this.summaryBirdsCount['大天鹅']=bird3All/bird3.length;
          //console.log(this.timeList,this.bird1,this.bird2,this.bird3);
          this.paintReportChart();
          //////////////////////////////////

        }
      })
    },
    //获取当月出现的鸟的种类
    getReportBirdFun(){
      let data={ cameraNum:this.camera,date:this.date};
      getReportBird(data).then(res=>{
        this.birdsList=res.data;
        console.log(this.birdsList);
      })
    }
  },
  created(){
    this.getMonthNow();
    this.getReportFun();
    //this.getReportBirdFun();
  },
  mounted(){
    this.paintReportChart();
  },
  updated(){
    //console.log(this.date,this.camera);
    //this.getReportFun();
  }
}
</script>
<style>
#app .report{
  padding:0 3rem;
  /* overflow:auto; */
}
.report-title{
  font-weight:400;
  text-align: center;
  margin:2rem auto;
}
.report-subtitle{
  margin:2rem 0;
  font-size:1.5rem;
  font-weight:500;
}
.report-shahu{
  text-indent: 2em;
  line-height: 2rem;
  font-size:1.25rem;
}
.report-summary{
  border:1px solid #ccc;
  padding:0 1rem;
}
.report-btn{
  padding:2rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.report-btn button{
  width:80px;
  height:40px;
  font-size:1rem;
}
.report-btn button a{
  display:flex;
  width:100%;
  height:100%;
  justify-content: center;
  align-items: center
}
#reportChart{
  width:100%;
  height:600px;
  padding:2rem 0;
}
.month-input,#reportCaremaNum{
  width:150px;
  height:2rem;
  line-height: 2rem;
  margin:0 2rem;
}
#reportCaremaNum{
  width:150px;
}
/*表格样式*/
.no-data{
  padding:2rem 0;
}
.no-data h3{
  text-align: center;
  font-size:1.5rem;
  font-weight:500;
}
.report-table{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:2rem 0;
}
.report-table ul{
  width:90%;
  display:flex;
}
.report-table ul li{
  width:20%;
  height:3rem;
  font-size:1.25rem;
  display:flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
}
.report-summary p{
  text-indent: 2em;
  font-size:1.25rem;
  line-height: 2rem;
  padding-bottom:2rem;
}
</style>
