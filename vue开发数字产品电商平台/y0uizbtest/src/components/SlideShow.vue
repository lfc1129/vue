<template>
	<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
		 <div class="slide-img">
	      <a>
	        <transition name="slide-trans">
	          <img v-if="isShow" :src="slides[nowIndex].src">
	        </transition>
	        <transition name="slide-trans-old">
	          <img v-if="!isShow" :src="slides[nowIndex].src">
	        </transition>
	      </a>
	    </div>
	    <h2>{{ slides[nowIndex].title }}</h2>
	    <ul class="slide-pages">
	      <li @click="goto(prevIndex)">&lt;</li>
	      <li v-for="(item, index) in slides"  @click="goto(index)">
	        <a>{{ index + 1 }}</a>
	      </li>
	      <li @click="goto(nextIndex)">&gt;</li>
	    </ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				nowIndex:0,
				isShow: true
			}
		},
		props:{
			slides:{
				type:Array,
				default:[]
			},
			inv:{
				type:Number,
				default:1000
			},
		},
		methods:{
			goto(CurIndex){
				this.isShow=false
				setTimeout(()=>{
					this.isShow=true
					this.nowIndex=CurIndex
				},10)
			},
			runInv(){
				this.invId =setInterval(()=>{
					this.isShow=true
					this.goto(this.nextIndex)
				},this.inv)
			},
			clearInv(){
				clearInterval(this.invId)
			}
		},
		computed:{
			prevIndex(){
				let leng = this.slides.length
				if(this.nowIndex === 0){
					return leng-1
				}else{
					return this.nowIndex-1
				}
			},
			nextIndex(){
				let leng = this.slides.length
				if(this.nowIndex === leng-1){
					return 0
				}else{
					return this.nowIndex+1
				}
			}
		},
		mounted(){
			this.runInv()
		}
	}
</script>
<style>
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}	
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>