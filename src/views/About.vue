<template>
  <div>
    <RequestModal v-if="showRequestModal" v-on:closeModal="showRequestModal = false"/>
    <div class="bgrdimg">
      <Nav />
      <div class="relative stars">
        <img src="../assets/img/about/Group 280.svg" alt="">
      </div>
      <div class="mt-20 px-6 lg:px-16 lg:mt-20 aboutbox ">
        <div class="md:flex justify-between relative items-center pt-8 lg:w-3/5 toplinks">
        <p class="text-white cursor-pointer w-full pb-4 mb-4 md:mb-0" 
            :class="[selected == 'story' ? selectedClass : 'text-sm border-gray-500 border-b border-solid']"
            @click="selected = 'story'"
          ><a href="#awards">
            Our Story
          </a>
          </p>
          <p class="text-white cursor-pointer w-full pb-4 mb-4 md:mb-0" 
            :class="[selected == 'directors' ? selectedClass : 'text-sm border-gray-500 border-b border-solid']"
            @click="selected = 'directors'"
          >
          <a href="#directors">
            Board of directors
          </a>
          </p>
          <p class="text-white cursor-pointer w-full pb-4 mb-4 md:mb-0" 
            :class="[selected == 'management' ? selectedClass : 'text-sm border-gray-500 border-b border-solid']"
            @click="selected = 'management'"
          >
          <a href="#management">
          Management Team
          </a>
          </p>
          <router-link to="/careers" class="text-white block text-sm border-gray-500 border-b border-solid w-full pb-4">
          Careers
          </router-link>
        </div>
        <p class="mt-8 text-blue-500 font-light lg:text-lg">About us</p>
        <h1 class="mt-4 text-white font-bold text-2xl lg:w-1/3 lg:text-4xl lg:font-extrabold">All the lorem tools you need to grow search traffic & revenue</h1>
        <p class="mt-6 text-white font-light lg:w-1/2 lg:text-lg">We empower you with smarter, simpler payments for your diverse lifestyle and businesses. Our secure, flexible solutions are thoughtfully designed by the best in the industry for guaranteed hassle free payment acceptance and processing.</p>
      </div>
      <div class="mt-20 px-6 lg:px-16">
        <p class="font-light text-white lg:text-lg">Our impact</p>
        <div class="mt-6 pb-24 impactlist flex flex-wrap gap-10">
            <div class="">
              <p class="text-lg font-bold text-white">600+</p>
              <p class="text-xs lg:text-sm text-white pr-3 border-r border-solid border-white">Clients/Partners</p>
            </div>
            <div class="">
              <p class="text-lg font-bold text-white">340M</p>
              <p class="text-xs lg:text-sm text-white pr-3 border-r border-solid border-white">Transaction volume</p>
          </div>
          <div class="">
            <p class="text-lg font-bold text-white">99.9%</p>
            <p class="text-xs lg:text-sm text-white pr-3 border-r border-solid border-white">Availability/Uptime</p>
          </div>
          <div class="">
            <p class="text-lg font-bold text-white">1.2secs</p>
            <p class="text-xs lg:text-sm text-white pr-3 border-r border-solid border-white">Average Processing Speed</p>
          </div>
          <div class="">
            <p class="text-lg font-bold text-white">17yrs</p>
            <p class="text-xs lg:text-sm text-white pr-3 border-r border-solid border-white">In Business</p>
          </div>
        </div>
      </div>
    </div>
    <section class="mt-10 py-8 bg-white px-6 whitebox lg:px-16 ">
      <div class="lg:flex lg:py-8 lg:justify-between lg:w-4/5">
        <div class="lg:w-2/5">
          <p class="font-bold text-lg lg:text-2xl" style="color: #062648">Our mission</p>
          <p class="mt-4 text-gray-500 font-light lg:text-lg">To provide secured, convenient and effective means to make and receive payments.</p>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-2/5">
          <p class="font-bold text-lg lg:text-2xl" style="color: #062648">Our vision</p>
          <p class="mt-4 text-gray-500 font-light lg:text-lg">To be the leading payment technology provider for individuals and organisations</p>
        </div>
      </div>
    </section>
    <section id="awards" class="storybox text-white text-center px-6 pt-6 pb-8 lg:pb-20" >
      <p class="font-bold text-2xl lg:text-4xl font-extrabold">Our Story</p>
      <div class="lg:w-1/2 lg:mx-auto">
        <p class="mt-6 text-sm font-light lg:text-lg">eTranzact has to today evolved into a brand with global reach, extending its innovate services to include products which cut across virtually all aspects of the e-payment space; ATM, Internet, POS and Mobile. eTranzact is the simpler, safer and easier way to complete transactions online and offline.</p>
        <hr class="mt-8 w-1/2 mx-auto border-blue-500">
        <p class="mt-6 text-sm font-light lg:text-lg">The company was founded in 2003 and currently has operations in South Africa, Ghana, Zimbabwe, Kenya, Cote d’voire and The United Kingdom.</p>
      </div>
    </section>
    <section class="careerbox"></section>
    <Awards  v-if="selected == 'story'" />
    <Directors id="directors" v-if="selected == 'directors'" />
    <Management id="management" v-if="selected == 'management'"/>
    <Footer v-on:showRequest="showRequestModal = true"/>
  </div>
</template>

<script>
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Awards from "@/components/Awards"
import Directors from "@/components/Directors"
import Management from "@/components/Management"
import RequestModal from "@/components/RequestModal"
export default {
  components:{
    Nav, Footer, Directors, Management, Awards, RequestModal
  },
  data(){
    return {
      showRequestModal : false,
      selected: 'story',
      selectedClass: 'font-bold text-sm text-blue-500 border-b border-blue-500 border-solid',
    }
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

div.bgrdimg{
  background-image: url('../assets/img/about/Intersection 17.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.stars{
  top: -20px
}
div.aboutbox{
  margin-top: 0px
}
.toplinks{
  z-index:100
}
.impactlist div{
  max-width: 49%
}
section.whitebox:after{
  content: "";
  width: 100%;
  position: absolute;
  left: 0;
  height: 80px;
  margin-top: 40px;
  /* border: 1px solid red */
  transform: skewY(-3deg);
  background-color: #062648
}
section.storybox{
  margin-top: 60px;
  background-color: #062648
}
.listimg{
  width: 35px
}
div.gridcontainer{
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 
    "a a a b b b b b b b b b "
    "d d d d d d d c c c c c"
    "e e e e e e e e e e e e";
}
.gridcontainer div{
  background-size: cover;
  background-repeat: no-repeat;
}
#box1{
  grid-area: a;
  background-image: url('../assets/img/about/Screenshot 2021-07-05 at 4.07.48 PM copy 2.png');
}
#box2{
  grid-area: b;
  background-image: url('../assets/img/about/Screenshot 2021-07-05 at 4.07.48 PM copy 3.png');
}
#box3{
  grid-area: c;
  background-image: url('../assets/img/about/Screenshot 2021-07-05 at 4.07.48 PM copy 4.png')
}
#box4{
  grid-area: d;
  background-image: url('../assets/img/about/Intersection 18.png')
}
#box5{
  grid-area: e;
  background-image: url('../assets/img/about/Intersection 19.png')
}
@media only screen and (min-width: 1024px){
  div.aboutbox{
  margin-top: -200px
}
  section.whitebox:after{
    height: 75px;
    margin-top: 60px;
    /* border: 1px solid red; */
    
  }
  section.storybox{
    margin-top: 66px;
    padding-top: 20px;
    position: absolute;
    z-index: 1000;
  }
  
  .careerbox{
    margin-top: 550px
  }
  .coollist li{
    max-width: 27%;
  }
  div.gridcontainer{
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 300px 300px;
    grid-template-areas: 
      "a a a b b b b b b c c c "
      "d d d d e e e e e e e e"
  }
  .figlist, .figlist2{
    padding-left: 80px;
    padding-right: 40px;
  }
  .figlist2 li{
    max-width: 15%;
  }

}
@media only screen and (min-width: 1280px){
  .careerbox{
    margin-top: 520px
  }
}
</style>
