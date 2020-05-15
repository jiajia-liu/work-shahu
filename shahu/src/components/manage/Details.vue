<template>
  <div class="details">
    <header>
        <img src="img/back2.png" class="back-two" @click="toRealtime">
        <img src="img/birdIdentification.png" class="bird-identification">
    </header>
    <div class="content">
    	<div class="cont">
    		<div class="card-box">
    			<div class="card-item">
    				<div class="card-box-inner">
    					<div class="item-inner">
	    					<div class="item-text">
	    						<h2>正式学名</h2>
	    						<p>Offcial scientific name</p>
	    					</div>
					    	<div class="item-text-hover">
					    		<div class="item-title">
					    			<h3 class="name-title">正式学名</h3>
					    			<span>Offcial scientific name</span>
					    		</div>
	    						<div  var="bird" v-for="(item,index) in birdsDetailsList" :key="index">
						        	<div class="hover-text">
						        		<img class="name-picture" :src="imageIP+item.bird_famale" >
						        		<h4 class="name-CN">中文名：{{item.bird_china}}</h4>
						        		<h4 class="name-EN">英文名：{{item.bird_english}}</h4>
						        	</div>
						    	</div>
					        </div>
	    				</div>
	    				<img src="img/cardShadow.png">
	    				<img src="img/arrow1.png" class="arrow" @click="clickArrow($event)">
    				</div>
    			</div>
    			<div class="card-item">
    				<div class="card-box-inner">
    					<div class="item-inner">
	    					<div class="item-text">
	    						<h2>科学分类</h2>
	    						<p>Scientific classification</p>
	    					</div>
					    	<div class="item-text-hover">
					    		<div class="item-title">
					    			<h3 class="name-title">科学分类</h3>
					    			<span>Scientific classification</span>
					    		</div>
	    						<div var="bird"  v-for="(bird,index) in birdsDetailsList" :key="index">
						        	<div class="hover-text">
						        		<h3>{{bird.bird_china}}</h3>
						        		<h4>{{bird.bird__classify}}</h4>
						        	</div>
						    	</div>
					        </div>
	    				</div>
	    				<img src="img/cardShadow.png">
	    				<img src="img/arrow2.png" class="arrow" @click="clickArrow($event)">
    				</div>
    			</div>
    			<div class="card-item">
    				<div class="card-box-inner">
    					<div class="item-inner">
	    					<div class="item-text">
	    						<h2>地理分布</h2>
	    						<p>Geographical distribution</p>
	    					</div>
					    	<div class="item-text-hover">
					    		<div class="item-title">
					    			<h3 class="name-title">地理分布</h3>
					    			<span>Geographical distribution</span>
					    		</div>
	    						<div  v-for="(bird,index) in birdsDetailsList" :key="index" var="bird">
						        	<div class="hover-text">
						        		<h3>{{bird.bird_china }}</h3>
						        		<h4>{{bird.bird_geographical }}</h4>
						        		<img class="item-picture" :src="imageIP+bird.bird_geographicalchina" >
						        	</div>
						    	</div>
					        </div>
	    				</div>
	    				<img src="img/cardShadow.png">
	    				<img src="img/arrow3.png" class="arrow" @click="clickArrow($event)">
    				</div>
    			</div>
    			<div class="card-item">
    				<div class="card-box-inner">
    					<div class="item-inner">
	    					<div class="item-text">
	    						<h2>保护级别</h2>
	    						<p>Protection level</p>
	    					</div>
					    	<div class="item-text-hover">
					    		<div class="item-title">
					    			<h3 class="name-title">保护级别</h3>
					    			<span>Protection level</span>
					    		</div>
	    						<div  v-for="(bird,index) in birdsDetailsList" :key="index" var="bird">
						        	<div class="hover-text">
						        		<h3>{{bird.bird_china }}</h3>
						        		<h4>{{bird.bird_protectionstatus }}</h4>
						        		<img class="item-picture" :src="imageIP+bird.bird_protectionlevel" >
						        	</div>
						    	</div>
					        </div>
	    				</div>
	    				<img src="img/cardShadow.png">
	    				<img src="img/arrow4.png" class="arrow" @click="clickArrow($event)">
    				</div>
    			</div>
    			<div class="card-item">
    				<div class="card-box-inner">
    					<div class="item-inner">
	    					<div class="item-text">
	    						<h2>生物文化</h2>
	    						<p>The culture</p>
	    					</div>
					    	<div class="item-text-hover">
					    		<div class="item-title">
					    			<h3 class="name-title">生物文化</h3>
					    			<span>The culture</span>
					    		</div>
	    						<div   v-for="(bird,index) in birdsDetailsList" :key="index" var="bird">
						        	<div class="hover-text">
						        		<h3>{{bird.bird_china }}</h3>
						        		<h4>{{bird.bird_habits}}</h4>
						        	</div>
						    	</div>
					        </div>
	    				</div>
	    				<img src="img/cardShadow.png">
	    				<img src="img/arrow5.png" class="arrow" @click="clickArrow($event)">
    				</div>
    			</div>
    			<div class="card-item">
    				<div class="card-box-inner">
    					<div class="item-inner">
	    					<div class="item-text">
	    						<h2>生长繁殖</h2>
	    						<p>Growth and reproduction</p>
	    					</div>
					    	<div class="item-text-hover">
					    		<div class="item-title">
					    			<h3 class="name-title">生长繁殖</h3>
					    			<span>Growth and reproduction</span>
					    		</div>
	    						<div   v-for="(bird,index) in birdsDetailsList" :key="index" var="bird">
						        	<div class="hover-text">
						        		<h3>{{bird.bird_china }}</h3>
						        		<h4>{{bird.bird_reproduction }}</h4>
						        	</div>
						    	</div>
					        </div>
	    				</div>
	    				<img src="img/cardShadow.png">
	    				<img src="img/arrow1.png" class="arrow" @click="clickArrow($event)">
    				</div>
    			</div>
    		</div>
    		<!-- <c:if test="${isVideo == true}"> -->
	    		<div class="to-report-box" @click="toReport">
	    			<img class="to-report" src="img/flow.png" />
	    		</div>
    		<!-- </c:if> -->
    	</div>
    </div>

  </div>
</template>
<script>
import {birdsInfo} from '@/api/axiosApi.js'

export default {
  data(){
	  return{
		  birdsDetailsList:[],
		  imageIP:'http://192.168.10.113:8080',
	  }
  },
  methods:{
    toRealtime(){
      this.$router.push({path:'/manage'});
    },
    toReport(){
      this.$router.push({path:'/report'});
	},
	clickArrow(e){
		var that = $(e.target);
		$(that).parent().parent().siblings().animate({"width":"210px","background":"none"},200,"linear",function(){
			$(that).parent().parent().siblings().find(".arrow").css("display","block");
			$(this).find(".item-text").css("display","block");
			$(this).find(".item-text-hover").css("display","none");
			$(that).parent().parent().animate({"width":"630px","background":"rgba(255,255,255,.2)"},200,"linear",function(){});
			$(that).siblings().find(".item-text").css("display","none");
			$(that).siblings().find(".item-text-hover").css("display","block");
			$(that).css("display","none");
		})
	},
	getBirdsInfo(){
		//sessionStorage.notZeroBird='绿头鸭,鸳鸯';
		console.log(sessionStorage.notZeroBird);
		let birds={checkNames:sessionStorage.notZeroBird};
		birdsInfo(birds).then(res=>{
			this.birdsDetailsList=res.data;
			console.log(this.birdsDetailsList);
		})
	}
  },
  created(){
	this.getBirdsInfo();
  }
}
</script>
<style lang="less">
.details{
  width:100%;
  height:100%;
  background:url('../../../public/img/bg.jpg') no-repeat;
  background-size: 100% 100%;
}
header {
    width: 100%;
    height: 85px;
    color: #fff;
    //background-color: rgb(255, 255, 255, 0);
    font-size: 20px;
    display: flex!important;
    justify-content: center;
}
header img {
    width: 100%;
}
.content {
    width: 100%;
    height: 85%;
}
  .back-two {
    position: absolute;
    left: 69px;
    top: 16px;
    height: 33px;
    width: 100px;
    cursor: pointer;
    z-index: 1;
}
.bird-identification,
.small-aquatic {
    width: 180px;
    height: 52px;
    position: absolute;
    right: 70px;
    top: 20px;
}
.cont {
    width: 100%;
    height: 100%;
    padding: 0 120px;
    box-sizing: border-box;
}
.card-box {
	width: 100%;
    height: 640px;
    margin-top: 40px;
    display: flex;
    box-sizing: border-box;
}
.card-box-inner {
    height: 600px;
}
.card-item {
    color: #fff;
    width: 210px;
    height: 640px;
    padding: 40px 0 70px 0;
    position: relative;
    box-sizing: border-box;
}
.card-item img {      /* 406 */
	position: absolute;
    right: -101px;
    top: 90px;
    /* transition: all 0.4s linear; */
}
.card-item img.item-picture {
	width: 180px;
    margin-bottom: 40px;
    position: static;
}
.card-item img.name-picture {
	width: 150px;
    margin-bottom: 10px!important;
    position: static;
}
.card-item .arrow {
	top: 260px;
    z-index: 2;
    cursor: pointer;
    /* transition: all 0.4s linear; */
}
.card-item:nth-child(1) .arrow,
.card-item:nth-child(6) .arrow {    /* 630 */
	right: -73px;
}
.card-item:nth-child(2) .arrow,
.card-item:nth-child(4) .arrow {
	right: -68px;
}
.card-item:nth-child(3) .arrow,
.card-item:nth-child(5) .arrow {
	right: -70px;
}
.item-inner {
    width: 100%;
    height: 600px;
    position: relative;
    background: rgba(255,255,255,.2);   /* 630 */
}
.item-inner h2 {
    /* transform: rotate(-90deg);
    transform-origin: left top; */
    position: absolute;
    /* top: 540px; */
    /* top: 422px; */
    bottom: 9%;
    left: 52%;
    width: 30px;
    letter-spacing: 6px;
    line-height: 30px;
}
.item-inner p {
    transform: rotate(90deg);
    transform-origin: left top;
    position: absolute;
    /* top: 22px; */
    bottom: -4%;
    text-align: end;
    left: 80%;
    width: 520px;
    height: 600px;
    font-size: 22px;
    letter-spacing: 2px;
}
.item-inner .item-text-hover {
	padding: 60px 30px 30px 100px;
	display: none;
	width: 100%;
	height: 600px;
    overflow: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
}
/* 修改浏览器默认滚动条样式 */
.item-inner .item-text-hover::-webkit-scrollbar {
	width: 4px;
	height: 4px;
}
.item-inner .item-text-hover::-webkit-scrollbar-thumb {
	border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(255,255,255,.5);
}
.item-inner .item-text-hover::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(255,255,255,.4);
}
.item-text-hover .item-title {
    margin-bottom: 30px;
}
.item-text-hover .item-title h3 {
    font-size: 26px;
    margin-bottom: 4px;
    letter-spacing: 6px;
}
.item-text-hover .item-title span {
    font-size: 22px;
    letter-spacing: 2px;
}
.item-text-hover .hover-text h4,
.item-text-hover .hover-text img {
	margin-bottom: 40px;
}
.item-text-hover .hover-text .name-CN {
    margin-bottom: 10px;
}
.item-text-hover .hover-text .name-EN {
    margin-bottom: 40px;
}

h4 {
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 24px;
}

.to-report-box {
    margin-top: 100px;
    display: flex;
    justify-content: center;
}
.to-report {
    transform: rotate(90deg);
    cursor: pointer;
}



@media screen and (max-width: 1600px) {
    .card-box {
    	height: 490px;
    }
    .item-inner {
    	height: 490px;
    }
    .item-inner .item-text-hover {
    	height: 490px;
    }
    .item-inner h2 {
    	bottom: 12%;
    }
    .card-box-inner img:nth-last-child(2) {
    	width: 245px;
    	right: -76px;
    }
    .card-item .arrow {
    	top: 210px;
    }
}
@media screen and (max-width: 1440px) {
    .card-box {
    	margin-top: 0;
    }
    .card-box {
    	height: 430px;
    }
    .item-inner {
    	height: 430px;
    }
    .item-inner .item-text-hover {
    	height: 430px;
    }
    .item-inner h2 {
    	bottom: 14%;
    }
    .item-inner p {
    	left: 83%;
    }
    .card-box-inner img:nth-last-child(2) {
    	width: 210px;
    	right: -65px;
    }
    .card-item .arrow {
    	top: 170px;
    }
}
</style>