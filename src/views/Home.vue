<template>
  <div class="home">
    <RequestModal v-if="showRequestModal" v-on:closeModal="showRequestModal = false"/>
    <VideoModal v-if="showVideoModal" v-on:closeModal="showVideoModal = false"/>
    <div class="bg-blue-600 blue-box">
      <Nav />
      <div class="mt-20 lg:mt-16 px-6 lg:px-0 py-4 relative">
        <img src="../assets/img/Icon ionic-ios-leaf-1.svg" alt="" class="hidden lg:block absolute " style="bottom: 50px; left: 60px">
        <img src="../assets/img/Icon ionic-ios-leaf.svg" alt="" class="hidden lg:block absolute  top-20" style="right: 50px">
        <h1 class="text-3xl lg:text-center font-extrabold lg:text-5xl lg:w-3/5 lg:mx-auto text-white gillbold">Nigeria's leading payment and switching Company</h1>
        <p class="mt-6 text-white text-lg lg:text-center lg:mt-6 lg:text-2xl ">Powering payments and collections for government and businesses</p>
        <div class="mt-6  lg:mx-auto lg:mt-16 xl:mt-20 lg:pl-12 learnbox">
          <div class="px-3 inline mr-3 py-3 bg-white rounded cursor-pointer" @click="showVideoModal = true">
            <a  class="font-semibold text-sm text-black ">
              <img src="../assets/img/Icon ionic-md-play-circle.svg" alt="" style="display: inline;" class="play mr-2">
              Watch intro video about us</a>
          </div>
          <div class="lg:inline mt-8 lg:mt-0 lg:ml-3">
            <a href="#whatwedo" class="px-4 py-3 text-sm text-white bg-blue-500 rounded">Learn More</a>
          </div>
        </div>
        <a href="#showAwards" class="mt-12 text-center text-white text-sm hidden lg:block lg:pt-6">
          <img src="../assets/img/home/Icon ionic-ios-arrow-round-forward.svg" alt="" class="arrowdown inline">
        </a>
        <p class="text-center text-white text-sm hidden pt-4 lg:block">Scroll down</p>
      </div>
    </div>
    <section class="bg-white px-6 pt-8 pb-12">
      <div class="lg:pl-6">
        <div class="mt-12 lg:mt-6 py-6 lg:pt-0 relative" id="showAwards">
          <div class="text-center">
            <p class="text-3xl blue font-bold lg:text-4xl firabold">We always win no matter what!</p>
            <p class="mt-6 lg:w-3/5 lg:mx-auto text-lg lg:text-xl">etranzact is the first award winning multi-application and multi-channel electronic transaction switching and payment processing platform</p>
          </div>
          <div class="">
            <img src="../assets/img/Path 478.svg" alt="" class="absolute swivvle">
            <img src="../assets/img/Icon metro-rocket.svg" alt="" class="absolute rocket">
          </div>
        </div>
        <div class="mt-14 lg:mt-0 lg:flex px-8 lg:items-center">
          <div class="hidden " >
            <img src="../assets/img/Icon ionic-ios-arrow-round-forward.svg" alt="" class="arrowleft" @click="showAwards = false">
          </div>
          <div id="horimenu" class="horizontalmenu lg:mx-auto" ref="horizontalmenu1">
            <div class="inline-block tile">
              <img src="../assets/img/Repeat Grid 1.svg" alt="" class="repeatgrid relative">
              <div class="bg-white py-12 rounded text-center w-3/4 mx-auto relative awardtile ">
                <img src="../assets/img/Image 50.png" alt="" class="awardimg mx-auto">
              </div>
              <p class="w-3/4 mx-auto mt-8 lg:text-center goth text-sm" style="color:  #949598;">Cashless Driver: Mobile Money Operator of the Year (2018) by CBN & NIBSS</p>
            </div>
            <div class="inline-block tile" id="tile2">
              <img src="../assets/img/Repeat Grid 1.svg" alt="" class="repeatgrid relative repeatgrid2">
              <div class="bg-white py-16 rounded text-center w-3/4 mx-auto relative awardtile awardtile2">
                <img src="../assets/img/Image 52.png" alt="" class="awardimg awardimg2 mx-auto">
              </div>
              <p class="w-3/4 mx-auto mt-8 lg:text-center goth text-sm" style="color:  #949598;">Gold Award from the Computer World Honors Awards, Silicon Valley, USA, 2003</p>
            </div>
            <div class="inline-block tile">
              <img src="../assets/img/Repeat Grid 1.svg" alt="" class="repeatgrid relative">
              <div class="bg-white py-12 rounded text-center w-4/5 mx-auto relative awardtile ">
                <img src="../assets/img/Image 52.png" alt="" class="awardimg mx-auto " id="awardimg3">
              </div>
              <p class="w-3/4 mx-auto mt-8 lg:text-center goth text-sm" style="color:  #949598;">Best Corporate Turnaround and Transformation Award (2019)</p>
            </div>
          </div>
          <!-- <div class="hidden lg:block">
            <img src="../assets/img/Icon ionic-ios-arrow-round-forward.svg" alt="" class="arrowright" >
          </div> -->
        </div>

      </div>
      <div class="mt-12 lg:mt-28  ">
        <!-- <div class="relative hidden lg:block">
          <img src="../assets/img/XMLID_1101_-1.svg"  class="absolute left-0 " style="left: -150px; top: -180px">
          <img src="../assets/img/XMLID_1101_.svg" alt="" class="absolute left-0" style="left: -180px; top: -180px">
        </div> -->
        <p class="blue text-center text-2xl font-extrabold capitalize lg:text-4xl lg:w-4/6 lg:mx-auto firabold" style="">We are a switch, a payment enabler, a complete multi-channel payment facilitator</p>
        <p class="mt-6 text-center text-base lg:w-4/6 lg:mx-auto text-gray-900 goth" style="color: #504C4D;">We empower you with smarter, simpler payments for your diverse lifestyle and businesses. Our secure, flexible solutions are thoughtfully designed by the best in the industry for guaranteed hassle free payment acceptance and processing.</p>
      </div>
    </section>
    <section class="skewsection relative" id="whatwedo">
      <div class="lg:flex lg:items-start lg:justify-between skewerdiv">
        <div class="w-full pt-10 pb-10 lg:pb-0 text-center px-2 relative blueskewbox" style="background-color: #2484C6;">
          <div class="blueskewcont">
            <p class="font-extrabold text-2xl  lg:text-4xl text-white firabold lg:w-3/4 lg:mx-auto">We serve individual Customers</p>
            <p class="mt-6 text-white font-light text-sm lg:text-lg goth lg:w-3/4 lg:mx-auto">Our consumer payment solution dears a better lifestyle for secure payment to anyone everywhere</p>
            <div class="mt-12 relative iconimgbox1 flex justify-between ">
              <img src="../assets/img/Group 241.svg" alt="" class="inline iconimg1 relative">
              <img src="../assets/img/Group 240.svg" alt="" class="inline iconimg2 relative">
              <img src="../assets/img/Group 242.svg" alt="" class="inline iconimg3 relative">
            </div>
            <ul class="lg:hidden" style=" margin-top: 20px">
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/individual" class="text-white text-lg underline">
                  Bankit
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/individual" class="text-white text-lg underline">
                  Pocketmoni
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/individual" class="text-white text-lg underline">
                  WebConnect
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/individual" class="text-white text-lg underline">
                  PayOutlet.net    
                </router-link>  
              </li>
            </ul>
            <div class="blimgbox hidden lg:block" >
              <div>
                <img src="../assets/img/home/pexels-jennifer-enujiugha-5157287_adobespark.png" alt="" class="relative block mx-auto personimg1">
                <!-- <img src="../assets/img/home/pexels-asa-dugger-1666073_adobespark.png" alt="" class="relative lg:hidden personimg1"> -->
                <!-- <a href="#" class="bg-white text-blue-500 px-4 py-1 lg:px-10 lg:py-2 rounded absolute mx-auto left-0 right-0 explorebtn1">Explore</a> -->
              </div>
            </div>
          </div>
          <div class="overlay1 hidden lg:block">
            <div class="mt-12 hidden relative iconimgbox1 lg:flex justify-between ">
              <img src="../assets/img/Group 241.svg" alt="" class="inline iconimg1 relative">
              <img src="../assets/img/Group 240.svg" alt="" class="inline iconimg2 relative">
              <img src="../assets/img/Group 242.svg" alt="" class="inline iconimg3 relative">
            </div>
            <ul class="absolute" style="top:50px; left: 0">
              <li class="text-white text-xl font-bold ">Our Products For Individuals</li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/individual" class="text-white text-lg">
                  Bankit
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/individual" class="text-white text-lg">
                  Pocketmoni
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/individual" class="text-white text-lg">
                  WebConnect
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/individual" class="text-white text-lg">
                  PayOutlet.net    
                </router-link>  
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full pt-10 pb-10 lg:pb-0 text-center px-2 relative  purpleskewbox" style="background-color: #4D2B77;">
          <div class="purpleskewcont">
            <p class="font-extrabold text-2xl  lg:text-4xl text-white firabold lg:w-3/4 lg:mx-auto">We serve corporate & institutions</p>
            <p class="mt-6 text-white font-light text-sm lg:text-lg goth lg:w-3/4 lg:mx-auto">Our enterprise payment solution caters to the uniqueness and complexities of your corporate operations. We have solved for ease to meet your financial services need</p>
            <div class="mt-12 relative iconimgbox2 flex justify-between ">
              <img src="../assets/img/Group 250.svg" alt="" class="inline iconimg4 relative">
              <img src="../assets/img/Group 249.svg" alt="" class="inline iconimg5 relative">
              <img src="../assets/img/Group 248.svg" alt="" class="inline iconimg6 relative">
            </div>
            <ul class="lg:hidden" style="margin-top: 30px">
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/business" class="text-white text-lg underline">
                  SwitchIt
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/business" class="text-white text-lg underline">
                  Pocketmoni
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/business" class="text-white text-lg underline">
                  WebConnect
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/business" class="text-white text-lg underline">
                  PayOutlet
                </router-link>
              </li>
              <li class="text-white mt-4 cursor-pointer">
                <router-link to="/business" class="text-white text-lg underline">
                  CorporatePay
                </router-link>
              </li>
            </ul>
            <img src="../assets/img/fortune-vieyra-QIMjYJSFoXM-unsplash_adobespark.png" alt="" class="relative hidden lg:block mx-auto personimg2">
            <!-- <a href="#" class="bg-white text-blue-500 px-4 py-1 lg:px-10 lg:py-2 rounded absolute mx-auto left-0 right-0 explorebtn2 ">Explore</a> -->
          </div>
          <div class="overlay2 hidden lg:block">
            <div class="mt-12 hidden lg:flex relative iconimgbox2 justify-between ">
              <img src="../assets/img/Group 250.svg" alt="" class="inline iconimg4 relative">
              <img src="../assets/img/Group 249.svg" alt="" class="inline iconimg5 relative">
              <img src="../assets/img/Group 248.svg" alt="" class="inline iconimg6 relative">
            </div>
            <ul class="absolute" style="top: 50px; left: 0">
              <li class="text-white text-xl font-bold ">Our Products For Businesses</li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/business" class="text-white text-lg">
                  SwitchIt
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/business" class="text-white text-lg">
                  Pocketmoni
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/business" class="text-white text-lg">
                  WebConnect
                </router-link>
              </li>
              <li class="text-white mt-4 text-lg cursor-pointer">
                <router-link to="/business" class="text-white text-lg">
                  PayOutlet
                </router-link>
              </li>
              <li class="text-white mt-4 cursor-pointer">
                <router-link to="/business" class="text-white text-lg">
                  CorporatePay
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="hidden mt-12 lg:w-4/5 lg:mx-auto gridcontainer">
      <div id="box1" class="gridbox relative px-3 pt-4" style="background-color: #082E55">
        <p class="text-white font-bold text-3xl mt-10">Our evolution over the years</p>
        <p class="mt-6 text-white font-light lg:mt-8">eTranzact history</p>
        <div class="mt-2 rounded">
          <router-link to="/about" class="inline-block text-sm text-blue-500 lg:text-base">Learn more</router-link>
        </div>
      </div>
      <div id="box2" class="gridbox relative" style="">
        <div class="gridlink">
          <div class="absolute bottom-4 left-4">
            <p class="text-white text-lg">News and Updates</p>
            <div class="mt-2">
              <router-link to="/news" class="text-base font-semibold text-blue-500">Learn more</router-link>
            </div>
          </div>
        </div>
      </div>
      <div id="box3" class="gridbox relative" >
        <div class="gridlink">
          <div class="absolute bottom-4 left-20">
            <p class="text-white text-lg">Career opportunities at eTranzact</p>
            <div class="mt-2">
              <router-link to="/careers" class="block text-base font-semibold text-blue-500">Explore more</router-link>
            </div>
          </div>
        </div>
      </div>
      <div id="box4" class="gridbox relative">
        <div class="gridlink">
          <div class="absolute bottom-8 left-4">
            <p class="text-white ">eTranzact and business</p>
            <div class="mt-2">
              <router-link to="/business" class="block text-sm text-blue-500">Learn more</router-link>
            </div>
          </div>
        </div>
      </div>
      <div id="box5" class="gridbox relative">
        <div class="gridlink">
          <div class="absolute bottom-8 left-4" style="">
            <p class="text-white ">eTranzact products for you</p>
            <div class="mt-2">
              <router-link to="/individual" class=" px-3 py-2 rounded font-bold text-blue-500">Learn more</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="px-2 bg-white pt-8 lg:pt-12 text-center relative scrollbox">
      <a href="#footer" class="text-center hidden lg:inline-block">
        <img src="../assets/img/Icon ionic-ios-arrow-round-forward.svg" alt="" class="arrowdown inline">
      </a>
      <div class="mt-6">
        <hr style="border-color:#062648" class="border-8">
        <hr style="border-color:#062648" class="border-4 mt-2">
        <hr style="border-color:#062648" class="border-2 mt-2">
        <div class="md:flex md:justify-between lg:justify-between lg:w-4/5 lg:mx-auto mt-10">
          <div class="relative md:mr-3 md:w-full provide">
            <img src="@/assets/img/home/Group 7.png" class="absolute pl1">
            <img src="@/assets/img/home/Group 6.png" class="absolute pr1">
            <img src="@/assets/img/home/Group 10.png" class="absolute pr2">
            <img src="@/assets/img/home/Group 5.png" class="absolute pmid">
            <img src="@/assets/img/home/Group 9.png" class="absolute pl2">
          </div>
          <div class="mt-4 md:mt-0 md:ml-3 text-left md:w-full px-6">
            <p class="blue text-2xl lg:text-4xl font-extrabold">We provide the most secured payment Service with key security certifications</p>
            <p class="mt-6 text-gray-500">Our secure, flexible solutions are thoughtfully designed by the best in the industry for guaranteed hassle free payment acceptance and processing.</p>
            <ul class="mt-6">
              <li>
                <font-awesome-icon icon="check-circle" class="mr-4 blue" />
                Two Factor Authentication
              </li>
              <li class="mt-4">
                <font-awesome-icon icon="check-circle" class="mr-4 blue" />
                NDPR Compliant
              </li>
              <li class="mt-4">
                <font-awesome-icon icon="check-circle" class="mr-4 blue" />
                Guaranteed Transaction Security
              </li>
              <li class="mt-4">
                <font-awesome-icon icon="check-circle" class="mr-4 blue" />
                Secure Cloud Option
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="mt-8 lg:mt-12 lg:ml-4 text-blue-500 text-left">Explore More</p>
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
    <section class="py-10 px-6 lg:px-12 lg:pt-20 lg:pb-24" style="background: transparent linear-gradient(123deg, #210237 0%, #082E55 100%)">
      <div class="lg:flex lg:justify-between lg:items-start lg:w-4/5 ">
        <div class="text-center lg:text-left lg:w-1/2 ">
          <p class="text-base text-white">Why eTranzact?</p>
          <p class="text-blue-500 mt-4 text-xl font-bold lg:text-2xl">The solid support for internet payment</p>
          <p class="text-gray-300 text-lg lg:text-xl mt-4">With us, businesses are guaranteed a trusted platform with 99.9% uptime, consumer insights and analytics that provide a data bank for them to make informed business decisions</p>
        </div>
        <div class="hidden lg:block">
          <img src="../assets/img/Image 53.png" alt="" id="earth" style="width: 300px">
        </div>
      </div>
      <div class="mt-20 lg:mt-20 lg:flex lg:justify-between lg:items-start">
        <div class="text-gray-300 lg:mr-3">
          <div class="border-solid border-blue-600 px-2 border-l">
            <p class="text-blue-600 text-sm font-bold inline mr-3">Trusted Network & Security</p>
            <img src="../assets/img/home/Icon metro-security.svg" alt="" class="inline" >
          </div>
          <p class="mt-4 text-sm px-2 font-light">ISO certified, and we operate with the highest security standards approved by the Central Bank of Nigeria.</p>
          <p class="mt-4 text-sm px-2 text-white font-semibold">We strive for consumer confidence with every transaction, and that is why we maintain the utmost payment, security and risk standards.</p>
        </div>
        <div class="text-gray-300 mt-8 lg:mt-0 lg:mr-3">
          <div class="border-solid border-blue-600 px-2 border-l">
            <p class="text-blue-600 text-sm font-bold inline mr-3">Customization</p>
            <img src="../assets/img/home/Icon material-iso.svg" alt="" class="inline">
          </div>
          <p class="mt-4 text-sm px-2 font-light">ISO certified, and we operate with the highest security standards approved by the Central Bank of Nigeria</p>
          <p class="mt-4 text-sm px-2 text-white font-semibold">Customize your user interface to create a personalized branded experience.</p>
        </div>
        <div class="text-gray-300 mt-8 lg:mt-0">
          <div class="border-solid border-blue-600 px-2 border-l">
            <p class="text-blue-600 text-sm font-bold inline mr-3">Optimal uptime</p>
            <img src="../assets/img/Icon ionic-ios-time.svg" alt="" class="inline">
          </div>
          <p class="mt-4 text-sm px-2 font-light">ISO certified, and we operate with the highest security standards approved by the Central Bank of Nigeria</p>
          <p class="mt-4 text-sm px-2 text-white font-semibold">Excellent service to partners on all platforms with 99.9% uptime.</p>
        </div>
        
      </div>
    </section>
    <section class="bg-white py-10 px-4 lg:px-12">
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
// @ is an alias to /src
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import VideoModal from "@/components/VideoModal"
import RequestModal from "@/components/RequestModal"

export default {
  name: 'Home',
  components: {
    Nav, Footer, VideoModal, RequestModal
  },
  data(){
    return {
      showNav: false,
      showVideoModal: false,
      showRequestModal: false,
      showIndividual: false
    }
  },
  mounted(){
  },
  methods:{
    menu2scrollLeft(){
      this.$refs.horizontalmenu2.scrollLeft -= 80
    },
    menu2scrollRight(){
      this.$refs.horizontalmenu2.scrollLeft += 80
    },
    menu1scrollLeft(){
      this.$refs.horizontalmenu1.scrollLeft -= 80
    },
    menu1scrollRight(){
      this.$refs.horizontalmenu1.scrollLeft += 80
    }
  },

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
  .l-modal::-webkit-scrollbar{
    width: 0
  }
  .loading-modal{
    min-height: 350px; 
  }
  /* Modal Styling */

.goth{
  font-family: 'Gotham', sans-serif;
}
.firabold{
  font-family: 'Fira Bold', sans-serif
}
.gillbold{
  font-family: 'Gill Bold', sans-serif
}
.img-card{
  height: 80px;
  width: 80px
}
.blue{
  color: var(--bluetext)
}
.blue-box{
  background-image: url('../assets/img/Intersection\ 12.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
}

.video-link, .blurlink{
  background-color: rgba(255, 255, 255, .2)
}
@supports (backdrop-filter: blur(5px)){
  .video-link, .blurlink{
    backdrop-filter: blur(5px);
  }
}
.play{
  width: 20px
}
.swivvle{
  top: -50px;
  right: 20%;
  width: 50px
}
.rocket{
  top: -80px;
  right: 8%;
  width: 40px;
}
.awardimg {
  width: 65%;
  height: 120px;
}

.awardtile{
  box-shadow: 0px 0px 43px #00000029;
  z-index: 100;
}
.repeatgrid{
  width: 40px;
  left: 8%;
  top: 20px;
  z-index: 1;
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

.tile{
  flex: 0 0 auto;
  max-width: 280px;
}

.personimg1{
  top: 120px;
  
}
.explorebtn1, .explorebtn2{
  width: 150px;
  bottom: 30%
}

.overlay1, .overlay2 {
  opacity: 0
}
.iconimgbox1{
  top: -10px
}
.iconimg1, .iconimg3, .iconimg4, .iconimg6{
  width: 80px;
  top: 35px
}
.iconimg5{
  width: 45px
}
.iconimg2{
  width: 45px
}
div.provide{
  height: 250px
}
.provide img{
  width: 120px
}
.pr1{
  top: 0;
  right: 0;
  /* width: 180px */
}
.pl1{
  top: 0;
  left: 0;
  /* width: 180px; */
}
.pl2{
  bottom: 0;
  left: 0;
  /* width: 180px */
}
.pr2{
  bottom: 0;
  right: 0;
  /* width: 180px */
}
.pmid{
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  margin: auto;
  margin-right: auto;
  /* width: 180px; */
  z-index: 10;
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
#earth{
  animation-name: rotate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}
@keyframes rotate{
  0%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(360deg)
  }
}
/* .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
} */
@media only screen and (min-width: 768px){
  .personimg1{
    top: 120px;
  }
  div.provide{
    height: auto;
  }
  
}
@media only screen and (min-width: 1024px){
  /* #showAwards{
  -moz-transition: all 3s;
  -webkit-transition: all 3s;
    transition: all 3s;
  } */
  .scrollbox{
    margin-top: -100px
  }
  .swivvle{
    top: -10px;
    right: 20%;
    width: 50px
  }
  .rocket{
    top: -50px;
    right: 11%;
    width: 40px;
  }
  .awardimg2{
    height: 150px
  }
  .repeatgrid2{
    top: 0
  }
  #tile2{
    max-width: 350px;
  }
  .awardtile2{
    top: -20px
  }
  div.learnbox{
    width: 45%;
    text-align: center;
  }
 .personimg1{
  top: 0
}

  .skewerdiv:after{
    content: "";
    height: 320px;
    transform: skewY(3deg);
    background-color: #fff;
    position:absolute;
    width: 100%;
    left: 0;
    margin-top: 20px;
    bottom: -150px;
    /* border: 1px solid red; */
  }
  .overlay1, .overlay2 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
  }
  .purpleskewbox:hover .overlay2{
    opacity: 1;
    background-color: #4D2B77;
  }
  .blueskewbox:hover .overlay1{
    opacity: 1;
    background-color: #2484C6;
  }
  .overlay1 ul, .overlay2 ul {
    position: absolute;
    top: 70%;
    left: 50%;
    padding-top: 100px;
    -webkit-transform: translate(70%, 50%);
    -ms-transform: translate(70%, 50%);
    transform: translate(70%, 50%);
    text-align: center;
  }
  .overlay2 ul{
    padding-top: 80px;
  }
 .iconimgbox1, .iconimgbox2{
   top: 30px
 }
 .iconimg1, .iconimg3, .iconimg4, .iconimg6{
    width: 100px;
    top: 65px;

  }
  .iconimg1, .iconimg4{
    left: 100px
  }
  .iconimg3, .iconimg6{
    right: 100px
  }
  .iconimg5, .iconimg2{
    width: 50px
  }
  div.personimgbox{
    height: 600px
  }
  .personimg1{
    top: 85px
  }
  .personimg2{
    top: 0px;
    /* left: 100px */
  }
  .explorebtn1, .explorebtn2{
    width: 170px;
  }
 .explorebtn2{
   bottom: 33%
 }
 div.provide{
   height: auto
 }
  .scrollbox{
    margin-top: -100px
  }
  
  .gridcontainer{
    /* z-index: 100; */
    margin-top: -100px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 200px 200px 150px 150px;
    grid-gap: 0;
    grid-template-areas: 
      "a a a b b b b b b c c c"
      "a a a b b b b b b c c c"
      "e e e b b b b b b d d d"
      "e e e b b b b b b d d d";
  }
  #box1{
    grid-area: a
  }
  #box3{
    grid-area: b;
    background-image: url('../assets/img/home/woman 692 x 700.png');
  }
  
  #box4{
    grid-area: c;
    background-image: url('../assets/img/two men adjusted.png');
  }
  #box5{
    grid-area: d;
    background-image: url('../assets/img/430 women.png');
  }
  
  #box2{
    grid-area: e;
    background-image: url('../assets/img/single lady.png');
    /* background-size: 100% 100% */
    
  }
  .gridbox{
    background-repeat: no-repeat;
    background-size: 120% 100%;
     -moz-transition: all .5s;
    -webkit-transition: all .5s;
    transition: all .5s;
    opacity: 1
  }
  
  .gridbox:hover{
    background-size: 150% 120%;
    
    /* opacity: 0.3 */
  }
  .gridbox:hover .gridlink{
    opacity: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color:  rgba(0,0,0, 0.3);
    transition: .5s ease;
    
  }
  .gridcontainer:before{
    content: "";
    height: 78px;
    width: 100%;
    position: absolute;
    margin-top: -28px;
    left: 0;
    /* border: 1px solid blue; */
    background-color: #fff;
    transform: skewY(3deg);
    z-index: 1000

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
  .provide img{
    width: 180px
  }
  
}
</style>
