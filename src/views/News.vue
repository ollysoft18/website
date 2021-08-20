<template>
  <div>
    <RequestModal v-if="showRequestModal" v-on:closeModal="showRequestModal = false"/>
    <div class="bgrdimg">
      <Nav />
      <div class="relative stars">
        <img src="../assets/img/about/Group 280.svg" alt="">
      </div>
      <div class="aboutbox px-6 pb-8 lg:px-16">
        <p class="mt-8 text-blue-500 font-light lg:text-lg">News & Insights</p>
        <h1 class="mt-4 text-white font-bold text-2xl lg:w-1/3 lg:text-4xl lg:font-extrabold">Get the latest information on Etranzact</h1>
        <p class="mt-6 text-white font-light lg:w-1/2 lg:text-lg">eTranzact offers a variety of products and services that cater for different needs. Whether it be an enterprise or a customer centric solution, we ensure quality, stability and security across our platforms.</p>
      </div>
    </div>
  <section class="bg-white px-6 py-8 lg:px-16 lg:pb-24 lg:relative">
    <div>
      <p class="text-blue-500 text-2xl font-bold">Annual Reports</p>
      <p class="mt-4 text-gray-500 lg:w-2/5">The financial statements have been prepared in accordance with International Financial Reporting Standards (IFRS).</p>
    </div>
    <p class="font-extrabold text-gray-500 text-sm mt-4 lg:mt-8" >Download reports</p>
    <ul class="mt-4 lg:flex lg:w-2/5 lg:flex-wrap lg:gap-10 lg:items-center">
      <li class="cursor-pointer">
        <p class="inline text-sm text-gray-500">Year 2017</p>
        <font-awesome-icon icon="download" class="inline ml-3 dpblue" />
      </li>
      <li class="cursor-pointer mt-2 lg:mt-0">
        <p class="inline text-sm text-gray-500">Year 2018</p>
        <font-awesome-icon icon="download" class="inline ml-3 dpblue" />
      </li>
      <li class="cursor-pointer mt-2 lg:mt-0">
        <p class="inline text-sm text-gray-500">Year 2019</p>
        <font-awesome-icon icon="download" class="inline ml-3 dpblue" />
      </li>
      <li class="cursor-pointer mt-2 lg:mt-0">
        <p class="inline text-sm text-gray-500">Year 2020</p>
        <font-awesome-icon icon="download" class="inline ml-3 dpblue" />
      </li>
      <li class="cursor-pointer mt-2 lg:mt-0">
        <p class="inline text-sm text-gray-500">Year 2021</p>
        <font-awesome-icon icon="download" class="inline ml-3 dpblue" />
      </li>
      <li class="cursor-pointer mt-2 lg:mt-0">
        <p class="inline text-sm text-gray-500">Public notice</p>
        <font-awesome-icon icon="download" class="inline ml-3 dpblue" />
      </li>
    </ul>
    <div class="hidden lg:block imgcircle">
      <img src="../assets/img/news/Intersection 47.png" alt="">
    </div>
  </section>
  <section class="px-6 py-8 lg:px-16 lg:py-24 lg:relative highbox" style="background: #062648">
    <div>
      <p class="text-white text-2xl font-semibold">Financial Highlights</p>
      <p class="text-white mt-4 lg:w-2/5">We believe our partners and customers have a right to understand how their data is managed and protected. Report transparency is a key guiding principle in our mission to provide secure and efficient payment services driven by data analytics and consumer insights.</p>
      <div class="mt-6 rounded py-2 px-2 highlights lg:py-4 lg:px-6 lg:rounded-tr-none lg:rounded-br-none" style="background: #E8F2F9"> 
        <ul class="flex justify-between lg:gap-20">
          <li class="">
            <p class="dpblue text-sm font-light lg:font-bold">Turnover</p>
            <p class="mt-2 text-blue-500 text-xl lg:font-bold">N10.405 Bn</p>
          </li>
          <li class="lg:ml-3">
            <p class="dpblue text-sm font-light lg:font-bold">Gross Profit</p>
            <p class="mt-2 text-blue-500 text-xl lg:font-bold">N2.904 Bn</p>
          </li>
          <li class="lg:ml-3">
            <p class="dpblue text-sm font-light lg:font-bold">Profit Before Tax</p>
            <p class="mt-2 text-blue-500 text-xl lg:font-bold">N0.865 Bn</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="lg:py-12 py-6 lg:flex px-8 lg:justify-between lg:items-center" style="background-color: #E8F2F9;">
    <div class="hidden lg:block">
      <img src="../assets/img/Icon ionic-ios-arrow-round-forward.svg" alt="" class="arrowleft" @click="menu2scrollLeft">
    </div>
    <div class="horizontalmenu w-full" ref="horizontalmenu2">
      <div class="bg-white rounded-md shadow inline-block hrmenuitem">
        <div id="box6" class="rounded-t-md hrbox" >
          <a href="http://www.youtube.com" target="blank" class="relative playicon">
            <font-awesome-icon icon="play-circle" class="text-5xl text-white"/>
          </a>
        </div>
        <div class="py-3 px-6">
          <p class="text-xs text-gray-500">10,000 small businesses</p>
          <p class="mt-3 text-sm font-semibold text-gray-600">Get your business moving with our incorporated solution</p>
        </div>
      </div>
      <div class="bg-white rounded-md shadow inline-block hrmenuitem">
        <div id="box7" class="rounded-t-md hrbox" ></div>
        <div class="py-3 px-6">
          <p class="text-xs text-gray-500">10,000 small businesses</p>
          <p class="mt-3 text-sm font-semibold text-gray-600">Get your business moving with our incorporated solution</p>
        </div>
      </div>
      <div class="bg-white rounded-md shadow inline-block hrmenuitem">
        <div id="box8" class="rounded-t-md hrbox" ></div>
        <div class="py-3 px-6">
          <p class="text-xs text-gray-500">10,000 small businesses</p>
          <p class="mt-3 text-sm font-semibold text-gray-600">Get your business moving with our incorporated solution</p>
        </div>
      </div>
      <div class="bg-white rounded-md shadow inline-block hrmenuitem">
        <div id="box9" class="rounded-t-md hrbox" ></div>
        <div class="py-3 px-6">
          <p class="text-xs text-gray-500">10,000 small businesses</p>
          <p class="mt-3 text-sm font-semibold text-gray-600">Get your business moving with our incorporated solution</p>
        </div>
      </div>
      <div class="bg-white rounded-md shadow inline-block hrmenuitem">
        <div id="box10" class="rounded-t-md hrbox" ></div>
        <div class="py-3 px-6">
          <p class="text-xs text-gray-500">10,000 small businesses</p>
          <p class="mt-3 text-sm font-semibold text-gray-600">Get your business moving with our incorporated solution</p>
        </div>
      </div>
      <div class="bg-white rounded-md shadow inline-block hrmenuitem">
        <div id="box11" class="rounded-t-md hrbox" ></div>
        <div class="py-3 px-6">
          <p class="text-xs text-gray-500">10,000 small businesses</p>
          <p class="mt-3 text-sm font-semibold text-gray-600">Get your business moving with our incorporated solution</p>
        </div>
      </div>
    </div>
    <div class="hidden lg:block">
      <img src="../assets/img/Icon ionic-ios-arrow-round-forward.svg" alt="" class="arrowright" @click="menu2scrollRight">
    </div>
  </section>
  <Footer v-on:showRequest="showRequestModal = true" />
</div>
</template>

<script>
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RequestModal from "@/components/RequestModal"
export default {
 components:{
    Nav, 
    Footer, 
    RequestModal
  },
  data(){
    return {
      showRequestModal : false,
    }
  },
  methods: {
     menu2scrollLeft(){
      this.$refs.horizontalmenu2.scrollLeft -= 80
    },
    menu2scrollRight(){
      this.$refs.horizontalmenu2.scrollLeft += 80
    },
  }
}
</script>

<style scoped>
/* Modal Styling */
  .l-modal{
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0, 0.3);
  }
  .loading-modal{
    min-height: 350px; 
  }
  .l-modal::-webkit-scrollbar{
    width: 0px;
    background-color: #F5F5F5;
  }
  /* Modal Styling */
.dpblue{
  color: #062648
}
div.bgrdimg{
  background-image: url('../assets/img/about/Intersection 17.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.stars{
  top: -20px
}
.horizontalmenu{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  
}

.horizontalmenu::-webkit-scrollbar
{
  height: 0px;
	background-color: #F5F5F5;
}
.hrmenuitem{
  max-width: 230px;
  flex: 0 0 auto;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  max-height: 260px
}
.hrbox{
  background-size: 100% 100%;
  -moz-transition: all .5s;
  -webkit-transition: all .5s;
  transition: all .5s;
}
.hrbox:hover{
  background-size: 120% 120%;
}
.playicon{
  top: 47%;
  left: 41%
}
#box6{
  background-image: url('../assets/img/Rectangle\ 177-1.png');
  height: 150px;
  background-repeat: no-repeat
}
#box7{
  background-image: url('../assets/img/Rectangle\ 176.png');
  height: 150px;
  background-repeat: no-repeat
}
#box8{
  background-image: url('../assets/img/Rectangle\ 177.png');
  height: 150px;
  background-repeat: no-repeat
}
#box9{
  background-image: url('../assets/img/Rectangle\ 175.png');
  height: 150px;
  background-repeat: no-repeat
}
#box10{
  background-image: url('../assets/img/Rectangle\ 177-1.png');
  height: 150px;
  background-repeat: no-repeat
}
#box11{
  background-image: url('../assets/img/Rectangle\ 176.png');
  height: 150px;
  background-repeat: no-repeat
}

@media only screen and (min-width: 1024px){
  div.aboutbox{
    margin-top: -200px
  }
  .arrowleft{
    cursor: pointer;
    transform: rotateZ(180deg);
    margin-right: 20px 
  }
  .arrowright{
    cursor: pointer;
    margin-left: 20px
  }
  .arrowdown{
    cursor: pointer;
    transform: rotateZ(90deg);
  }
  .imgcircle{
    width: 300px;
    height: 300px;
    text-align: center;
    align-content: center;
    align-items: center;
    line-height: 300px;
    border-radius: 50%;
    padding: 20px;
    background-color: #e8f2f9;
    position: absolute;
    right: 80px;
    top: 5%
  }
  .imgcircle img{
    position: relative;
    top: 30px;
    right: 30px
  }
  div.highlights{
    position: absolute;
    right: 0;
    top: 100px;
    
  }
  div.highlights ul{
    justify-content: space-evenly;
  }
  
}
</style>