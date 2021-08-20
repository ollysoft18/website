<template>
  <div>
    <RequestModal v-if="showRequestModal" v-on:closeModal="showRequestModal = false"/>
    <section class="bgrdimg pb-12 lg:pb-24">
      <Nav />
      <div class="px-6 lg:px-16 mt-12 text-white lg:mt-24">
        <p class="text-blue-500 font-light text-base lg:text-xl">For Business</p>
        <p class="lg:w-2/5 text-3xl mt-4 lg:text-4xl font-bold lg:leading-10">We have numerous products suited for your day to day online activities</p>
        <p class="mt-8 lg:w-2/5 text-lg ">eTranzact offers a variety of products and services that cater for different needs. Whether it be an enterprise or a customer centric solution, we ensure quality, stability and security across our platforms.</p>
      </div>
      <div class="grid-container px-6 lg:px-16 mt-12 py-8">
        <div id="box1" class="box relative">
          <div class="hidden lg:block bg-indigo-900 absolute" style="left: 0px; width: 45%; height: 200px;">
            <img src="../assets/img/products/SwitchIt.svg" alt="" class="mt-16 mx-auto" style="width:50%;">
          </div>
          <div class="px-4 py-4 lg:relative lg:py-0 ">
            <div class="pt-4 mt-6 lg:mt-0 lg:w-3/5 lg:px-20 lg:absolute lg:right-4 lg:top-8">
              <p class="text-white font-bold text-lg">Switch<span class="font-normal">it</span></p>
              <p class=" text-white mt-2 font-light text-sm lg:text-base">Validates, processes, and authorizes transaction more securely</p>
              <div class="icon-cont lg:hidden">
                <font-awesome-icon icon="arrow-right" class="inline-block"/>
              </div>
            </div>
          </div>
          <div class="icon-cont hidden lg:block lg:absolute " style="bottom: 10px; right: 10px">
            <font-awesome-icon icon="arrow-right" class="inline-block"/>
          </div>
        </div>
        <div id="box2" class="box relative">
          <div class="px-4 py-4 lg:py-0 relative">
            <div class="hidden lg:block lg:mt-0 top-0 left-0 absolute">
              <img src="../assets/img/products/coppay.png" alt="" class="" style="height: 300px">
            </div>
            <div class="pt-4 lg:mt-4 lg:absolute lg:right-8 lg:top-8">
              <p class="text-white text-lg font-bold">CoporatePay</p>
              <p class=" text-white mt-2 text-sm lg:text-base">An online real-time platform for bulk payments</p>
              <div class="icon-cont lg:hidden">
                <font-awesome-icon icon="arrow-right" class="inline-block"/>
              </div>
            </div>
          </div>
          <div class="icon-cont hidden lg:block lg:absolute " style="bottom: 10px; right: 10px">
            <font-awesome-icon icon="arrow-right" class="inline-block"/>
          </div>
        </div>
        <div id="box3" class="box relative">
          <div class="absolute hidden lg:block" style="top:100px">
            <img src="../assets/img/products/cloud.svg" alt="" class="mx-auto" style="width: 70%">
          </div>
          <div class="absolute hidden lg:block" style="bottom: 0; left: 0;">
            <img src="../assets/img/products/ebconlaptop.png" alt="" class="" style="height: 200px">
          </div>
          <div class="px-4 py-4 lg:py-0 lg:text-center">
            <div class="pt-4 mt-6 lg:mt-6">
              <img src="../assets/img/products/Group 484.svg" alt="" class="logoimg2">
              <p class="text-white mt-2 text-sm lg:text-base">An all-inclusive payment gateway for direct payment with bank accounts</p>
              <div class="icon-cont lg:hidden">
                <font-awesome-icon icon="arrow-right" class="inline-block"/>
              </div>
            </div>
          </div>
          <div class="icon-cont hidden lg:block lg:absolute " style="bottom: 10px; right: 10px">
            <font-awesome-icon icon="arrow-right" class="inline-block"/>
          </div>
        </div>
        <div id="box4" class="box relative">
          <div class="hidden payout lg:block absolute " style="left:20px; bottom:0; height: 200px; width: 40%">
          </div>
          <div class="px-4 py-4 lg:relative lg:py-0 lg:pl-0">
            <div class="pt-4 mt-6 lg:mt-12 lg:w-1/3 lg:absolute lg:right-8 lg:top-0">
              <p class="text-white font-bold text-lg">Payoutlet</p>
              <p class=" text-white mt-2 text-sm lg:text-base">Collection platform across eTranzact’s member banks’ branches.</p>
              <div class="icon-cont lg:hidden">
                <font-awesome-icon icon="arrow-right" class="inline-block"/>
              </div>
            </div>
          </div>
          <div class="icon-cont hidden lg:block lg:absolute " style="bottom: 10px; right: 10px">
            <font-awesome-icon icon="arrow-right" class="inline-block"/>
          </div>
        </div>
        <div id="box5" class="box relative">
          <div class="px-4 py-4 lg:py-0 relative">
            <div class="hidden lg:block lg:mt-0 top-8 left-0 absolute">
              <img src="../assets/img/products/transphone.png" alt="" class="" style="max-height: 150px">
            </div>
            <div class="pt-4 lg:mt-4">
              <img src="../assets/img/products/PocketMoni.svg" alt="" class="logoimg1">
              <p class=" text-blue-900 mt-2 text-sm lg:text-base">Nigeria's favorite wallet and payment platform</p>
              <div class="icon-cont lg:hidden">
                <font-awesome-icon icon="arrow-right" class="inline-block"/>
              </div>
            </div>
          </div>
          <div class="icon-cont hidden lg:block lg:absolute " style="bottom: 10px; right: 10px">
            <font-awesome-icon icon="arrow-right" class="inline-block"/>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white py-10 px-6 lg:px-16">
      <div class="lg:flex lg:justify-between lg:items-center">
        <div class="text-center lg:text-left lg:w-full lg:mr-6">
          <p class="text-blue-500">Try eTranzact today</p>
          <p class="mt-4 text-2xl lg:text-3xl font-bold" style="color: #1b2837">Industry leaders in payment service solutions and transaction switching, worldwide.</p>
        </div>
        <div class="mt-8 bg-white pl-4 border border-solid border-blue-500 border-r-0 rounded flex justify-between items-center lg:w-full lg:ml-6">
          <input type="text" class="w-full mr-3 bg-white outline-none" placeholder="Type in your email address">
          <button class="py-2 lg:py-3 ml-3 px-3 lg:px-6 bg-blue-500 text-white rounded border-0">Subscribe</button>
        </div>
      </div>
    </section>
    <Footer v-on:showRequest="showRequestModal = true"/>
  </div>
</template>

<script>
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RequestModal from "@/components/RequestModal"
export default {
  components:{
    Nav, RequestModal, 
    Footer
  },
  data(){
    return {
      showRequestModal: false
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
  .l-modal::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  .l-modal::-webkit-scrollbar{
    width: 0px;
    background-color: #F5F5F5;
  }
  /* Modal Styling */

section.bgrdimg{
  background-image: url('../assets/img/apply/Intersection 17 (1).svg');
  background-size: cover;
  background-repeat: no-repeat;

}
.logoimg1{
  width: 120px;
}
.logoimg2{
  width: 150px
}
.box{
  margin-top: 20px;
}
#box1{
  background-color: #3D60AD
}
#box2{
  background-color: #062648;
}
#box3{
  background-color: #2484C6;
}
#box4{
  background-color:#3D4BA0;
}
#box5{
  background-color: #D1ECFF;
}

div.icon-cont{
  margin-top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  align-content: center;
  align-items: center;
  background-color: #E8F2F9;
  opacity: 0.8
}
@supports (backdrop-filter: blur(5px)){
  .icon-cont{
    backdrop-filter: blur(5px);
  }
}
@media only screen and (min-width: 1024px){
  .box{
    margin-top: 0;
    transition: 1s;
    cursor: pointer;
  }
  .box:hover{
    transform: translateY(-50px);
  }
  div.grid-container{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 200px 300px 200px;
    grid-gap: 20px;
  }
  #box1{
    grid-column: 1/8;
    grid-row: 1/1
    /* grid-area: a */
  }
  #box2{
    grid-column: 1/8;
    grid-row: 2/2;
    /* grid-area: b */
  }
  #box3{
    grid-column: 8/12;
    grid-row: 1/3;
    /* grid-area: c */
  }
  #box4{
    grid-column: 4/12;
    grid-row: 3/3;
    /* grid-area: d; */
  }
  #box5{
    grid-column: 1/4;
    grid-row: 3/3;
    /* grid-area: e */
  }
  .logoimg2{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .payout{
    background-image: url('../assets/img/products/payoutpr.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>