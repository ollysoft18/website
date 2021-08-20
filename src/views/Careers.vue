<template>
  <div>
    <RequestModal v-if="showRequestModal" v-on:closeModal="showRequestModal = false"/>
    <PhotoModal v-if="showPhotoModal" v-on:closeModal="showPhotoModal = false" />
    <div class="bgrdimg">
      <Nav />
      <div class="relative stars">
        <img src="../assets/img/about/Group 280.svg" alt="">
      </div>
      <div class="px-6 lg:px-16 pb-24 aboutbox">
        <p class="text-blue-500 font-light lg:text-lg">Job offers</p>
        <h1 class="mt-4 text-white font-bold text-2xl lg:w-1/3 lg:text-4xl lg:font-extrabold">We seek the creative minds that work in our vision</h1>
        <p class="mt-6 text-white font-light lg:w-1/2 lg:text-lg">If you have what it takes to be a part of this awesome vision, see below available job opportunities in your category of work.</p>
      </div>
    </div>
    <section class="bg-white py-8 px-6 lg:px-16">
      <div class="lg:flex lg:items-start lg:justify-between">
        <div class="w-full relative">
          <div class="personimg1 personimg"></div>
          <div class="personimg2 personimg"></div>
          <p class="mt-10 text-blue-500 cursor-pointer" @click="showPhotoModal = true">See fun Moments 
            <font-awesome-icon  icon="arrow-right" class="ml-3 text-blue-500" />
          </p>
          <div class="hidden lg:block mt-6 personimg personimg5"></div>
        </div>
        <div>
          <div class="hidden lg:flex lg:justify-between \">
            <div class="personimg3 personimg"></div>
            <div class="personimg4 personimg"></div>
          </div>
          <div class="w-full mt-16 lg:mt-8 lg:mr-16">
            <p class="text-blue-500 text-2xl font-bold lg:w-1/2">Career opportunities at eTranzact</p>
            <p class="text-gray-500 mt-4 font-light lg:w-4/5">Our people are intentionally passionate about changing the face of payments. We work in an exciting, fast-paced, high energy environment. Join us if you are ready to disrupt and do meaningful work that matters and test times!</p>
            <div class="mt-6 flex lg:items-center">
              <p class="text-blue-500 text-sm">We Work
                <font-awesome-icon icon="circle"  class="text-blue-500 ml-3 text-xs"/>
              </p>
              <p class="text-blue-500  ml-4 text-sm">We Play
                <font-awesome-icon icon="circle"  class="text-blue-500 ml-3 text-xs"/>
              </p>
              <p class="text-blue-500  ml-4 text-sm">We Inspire
                <font-awesome-icon icon="circle"  class="text-blue-500 ml-3 text-xs"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white px-6 lg:px-16 coolbox pb-8 lg:pb-12">
      <p class="mt-6 text-blue-500 font-light text-lg inline-block lg:mt-20">Cool things about us</p>
      <div class="mt-8">
        <ul class="lg:flex lg:flex-wrap lg:gap-20 coollist">
          <li class="mt-6">
            <div class="flex items-center">
              <p class="font-bold text-lg mr-3" style="color: #686a6b">Career Growth</p>
              <img src="../assets/img/about/plant.svg" alt="" class="listimg">
            </div>
            <p class="mt-2 text-gray-500 font-light">We don’t believe in one-side relationships. Together, we team up to enhance your skills and talents for success here and beyond.</p>
          </li>
          <li class="mt-6">
            <div class="flex items-center">
              <p class="font-bold text-lg mr-3" style="color: #686a6b">How we work</p>
              <img src="../assets/img/about/Path 529.svg" alt="" class="listimg">
            </div>
            <p class="mt-2 text-gray-500 font-light">Enthusiastic about changing the game of payments. We thrive on bright ideas and entrepreneurial spirit.</p>
          </li>
          <li class="mt-6">
            <div class="flex items-center">
              <p class="font-bold text-lg mr-3" style="color: #686a6b">Collaboration</p>
              <img src="../assets/img/about/Path 532.svg" alt="" class="listimg">
            </div>
            <p class="mt-2 text-gray-500 font-light">We deliberately connect and build trusted relationships to deliver exceptional talents and solutions.</p>
          </li>
          <li class="mt-6">
            <div class="flex items-center">
              <p class="font-bold text-lg mr-3" style="color: #686a6b">Great work Environment</p>
              <img src="../assets/img/about/Path 533.svg" alt="" class="listimg">
            </div>
            <p class="mt-2 text-gray-500 font-light">We offer you flexible work structure in ways that maximise your delivery and give you time to also improve other aspects of your life. You will have health insurance, paid leave days, free weekends, observed holidays and paternity/maternity programs.</p>
          </li>
          <li class="mt-6">
            <div class="flex items-center">
              <p class="font-bold text-lg mr-3" style="color: #686a6b">Lots of fun</p>
              <img src="../assets/img/about/Path 536.svg" alt="" class="listimg">
            </div>
            <p class="mt-2 text-gray-500 font-light">There is never a dull moment with us! Having fun is not optional. We play just as much as we work</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="openingsbox px-6 lg:px-16 py-12">
      <p class="text-center text-xl font-bold lg:text-4xl" style="color: #062648">Job Openings</p>
      <p class="text-center mt-4 lg:w-3/5 lg:mx-auto" style="color: #062648">We’re always looking out for new talent. If you don’t see a role that’s relevant to you at this time, we would still love to hear from you! Please send your name, bio, and a short summary of the type of role you’ll be interested to 
      <span style="color: rgba(59, 130, 246, 1);">hello@eTranzact.com</span> 
      </p>
      <div style="background-color: #062648" class="mt-8 py-6 px-4 lg:px-20 lg:py-12 lg:w-3/4 lg:mx-auto rounded">
        <p class="text-white font-bold">Frontend developer (VueJS)</p>        
        <div class="mt-2 lg:flex lg:justify-between">
            <ul class="flex">
              <li class="mr-4">
                <p class=" text-white text-xs md:text-base font-light">
                  <font-awesome-icon icon="briefcase" class="text-white text-xs mr-2" />
                  Fulltime
                </p>
              </li>
              <li class="mr-4">
                <p class="text-white text-xs md:text-base font-light">
                  <font-awesome-icon icon="map-marker" class="text-white text-xs mr-2" />
                  Remote
                </p>
              </li>
              <li>
                <p class="text-white text-xs md:text-base font-light">
                  <font-awesome-icon icon="calendar" class="text-white text-xs mr-2" />
                  Deadline 11 Aug 2021
                </p>
              </li>
            </ul>
            <div class="mt-4 lg:mt-0">
              <router-link to="/apply" class="bg-blue-500 text-white py-2 px-8 text-sm rounded">View Details</router-link>
            </div>
        </div>
      </div>
      <div style="background-color: #062648" class="mt-8 py-6 px-4 lg:px-20 lg:py-12 lg:w-3/4 lg:mx-auto rounded">
        <p class="text-white font-bold">Backend developer (Laravel)</p>        
        <div class="mt-2 lg:flex lg:justify-between">
            <ul class="flex">
              <li class="mr-4">
                <p class=" text-white text-xs md:text-base font-light">
                  <font-awesome-icon icon="briefcase" class="text-white text-xs mr-2" />
                  Fulltime
                </p>
              </li>
              <li class="mr-4">
                <p class="text-white text-xs md:text-base font-light">
                  <font-awesome-icon icon="map-marker" class="text-white text-xs mr-2" />
                  Remote
                </p>
              </li>
              <li>
                <p class="text-white text-xs md:text-base font-light">
                  <font-awesome-icon icon="calendar" class="text-white text-xs mr-2" />
                  Deadline 11 Aug 2021
                </p>
              </li>
            </ul>
            <div class="mt-4 lg:mt-0">
              <router-link to="/apply" class="bg-blue-500 text-white py-2 px-8 text-sm rounded">View Details</router-link>
            </div>
        </div>
      </div>
      <div style="background-color: #062648" class="mt-8 py-6 px-4 lg:px-20 lg:py-12 lg:w-3/4 lg:mx-auto rounded">
        <p class="text-white font-bold">Backend developer (Solidity)</p>        
        <div class="mt-2 lg:flex lg:justify-between">
            <ul class="flex">
              <li class="mr-4">
                <p class=" text-white text-xs md:text-base font-light">
                  <font-awesome-icon icon="briefcase" class="text-white text-xs mr-2" />
                  Fulltime
                </p>
              </li>
              <li class="mr-4">
                <p class="text-white text-xs md:text-base font-light">
                  <font-awesome-icon icon="map-marker" class="text-white text-xs mr-2" />
                  Remote
                </p>
              </li>
              <li>
                <p class="text-white text-xs md:text-base font-light">
                  <font-awesome-icon icon="calendar" class="text-white text-xs mr-2" />
                  Deadline 11 Aug 2021
                </p>
              </li>
            </ul>
            <div class="mt-4 lg:mt-0">
              <router-link to="/apply" class="bg-blue-500 text-white py-2 px-8 text-sm rounded">View Details</router-link>
            </div>
        </div>
      </div>
    </section>
    <section style="background-color: #e8f2f9; width: 100%; height: 50px"></section>
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
import PhotoModal from "@/components/PhotoModal"
import RequestModal from "@/components/RequestModal"
export default {
  components:{
    Nav, 
    Footer,
    PhotoModal,
    RequestModal
  },
  data(){
    return {
      showPhotoModal: false,
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
.listimg{
  width: 35px
}
.personimg{
  background-size: cover;
}
div.personimg1{
  background-image: url('../assets/img/about/Screenshot 2021-07-05 at 4.07.48 PM copy 4.png');
  height: 200px;
  width: 300px;
}
div.personimg2{
  background-image: url('../assets/img/about/Screenshot 2021-07-05 at 4.07.48 PM copy 2.png');
  height: 150px;
  width: 150px;
  position: absolute;
  left: 180px;
  top: 80px
}
div.personimg3{
  background-image: url('../assets/img/career/Intersection 45.png');
  height: 200px;
  width: 180px
}
div.personimg4{
  height: 200px;
  width: 350px;
  background-image: url('../assets/img/career/pexels-kampus-production-5940708.png');
}
div.personimg5{
  height: 200px;
  width: 330px;
  background-image:url('../assets/img/about/Intersection 18.png')
}
.openingsbox{
  background-color: #E8F2F9;
}
@media only screen and (min-width: 1024px){
  .coollist li{
    max-width: 27%;
  }
  div.aboutbox{
    margin-top: -150px
  }
}
</style>
