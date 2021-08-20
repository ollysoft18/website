<template>
  <header class="px-4 pt-4 pb-2  border-b border-solid border-gray-500">
    <div class="flex justify-between items-center">
      <router-link to="/" class="lg:ml-12">
        <img src="../assets/img/eTranzact Logo.png" class="logoimg">
      </router-link>
      <ul class="hidden lg:flex justify-between items-center nav-list">
        <!-- @mouseover="showAbout = true" @mouseleave="showAbout = false" -->
        <!-- @click="showAbout = true" -->
        <li class="relative"   @mouseover="showAbout = true" @mouseleave="showAbout = false">
          <div class="mr-12">
            <p class="text-white text-sm cursor-pointer inline">About us</p>
            <font-awesome-icon icon="angle-down" class="inline ml-2 text-white"/>
          </div>
          <div v-if="showAbout" class="bg-white rounded absolute py-6 px-6 -left-20 top-8 showAbout" style="width: 400px">
            <ul>
              <li>
                <router-link to="/about" class="block text-sm" >
                  <div class="flex">
                    <div class="">
                      <img src="../assets/img/nav/file-2.svg" alt="" style="width: 30px">
                    </div>
                    <div class="w-4/5 ml-4 droptext d1">
                      <p  class="font-semibold" id="p1">Overview</p>
                      <p class="text-gray-500 text-xs">Our mission, Our vision, Our story & Awards and recognition</p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="mt-6">
                <router-link to="/about" class="block text-sm" >
                  <div class="flex">
                    <div class="">
                      <img src="../assets/img/nav/team-leader.svg" alt="" style="width: 30px">
                    </div>
                    <div class="w-4/5 ml-4 droptext d2">
                      <p class="font-semibold" id="p2">Leadership</p>
                      <p class="text-gray-500 text-xs">Board of directos and management team</p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="mt-6">
                <router-link to="/careers" class="block text-sm" >
                  <div class="flex">
                    <div class="">
                      <img src="../assets/img/nav/promote.svg" alt="" style="width: 30px">
                    </div>
                    <div class="w-4/5 ml-4 droptext d3">
                      <p  class="font-semibold" id="p3">Careers</p>
                      <p class="text-gray-500 text-xs">Fun moments and job openings</p>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="relative" @mouseover="showWhat = true" @mouseleave="showWhat = false" id="showWhat"> 
          <div class="mr-12">
            <p class="text-white text-sm cursor-pointer inline">Products</p>
            <font-awesome-icon icon="angle-down" class="inline ml-2 text-white"/>
          </div>
          <div  class="hidden bg-white rounded absolute py-4 px-8  -left-12 top-8 showWhat"  style="width: 400px">
            <ul>
              <li>
                <router-link to="/individual" class="block text-sm" >
                  <div class="flex">
                    <div class="">
                      <img src="../assets/img/nav/cycling-2.svg" alt="" style="width: 30px">
                    </div>
                    <div class="w-4/5 ml-4 droptext d4">
                      <p  class="font-semibold" id="p4">For indiviuals</p>
                      <p class="text-gray-500 text-xs">Consumer payment solutions</p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="mt-6">
                <router-link to="/business" class="block text-sm" >
                  <div class="flex">
                    <div class="">
                      <img src="../assets/img/nav/suitcase.svg" alt="" style="width: 30px">
                    </div>
                    <div class="w-4/5 ml-4 droptext d5">
                      <p class="font-semibold" id="p5">For business</p>
                      <p class="text-gray-500 text-xs">Enterprise payment solutions</p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="mt-6">
                <router-link to="/innovation" class="block text-sm" >
                  <div class="flex">
                    <div class="">
                      <img src="../assets/img/nav/project-management.svg" alt="" style="width: 30px">
                    </div>
                    <div class="w-4/5 ml-4 droptext d6">
                      <p  class="font-semibold" id="p6">Innovation hub</p>
                      <p class="text-gray-500 text-xs">Got great ideas, share with us</p>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="/news" class="mr-12 text-white text-sm">News & Insights</router-link>
        </li>
        <li>
          <router-link to="/contact" class="mr-20 text-white text-sm bg-yellow-600 px-3 py-1">Contact Us </router-link>
        </li>
      </ul>
      <div class="lg:hidden text-white"><font-awesome-icon icon="bars" @click="showNav = !showNav" /></div>
    </div>
    <ul class="mt-6 lg:hidden" v-if="showNav">
      <li>
          <router-link to="/about" class="mr-12 text-white text-sm">About us</router-link>
        </li>
        <li class="mt-4">
          <router-link to="/individual" class="mr-12 text-white text-sm ">For Individuals</router-link>
        </li>
        <li class="mt-4">
          <router-link to="/business" class="mr-12 text-white text-sm ">For Businesses</router-link>
        </li>
        <li class="mt-4">
          <router-link to="/news" class="mr-12 text-white text-sm">News & Insights</router-link>
        </li>
        <li class="mt-4">
          <router-link to="/contact" class="mr-20 text-white text-sm bg-yellow-600 px-3 py-1">Contact Us </router-link>
        </li>
    </ul>
  </header>
</template>

<script>
export default {
  data(){
    return {
      showNav: false,
      showAbout: false,
      showWhat: false
    }
  }
}
</script>

<style scoped>
.logoimg{
  width: 100px
}
.showAbout, .showWhat{
  z-index: 100000
}
@media only screen and (min-width: 1024px){
   .logoimg{
    width: 120px
  }
  .nav-list li{
    padding: 10px 0
  }
  .circle{
    height: 50px;
    width:50px;
    line-height: 50px;
    border-radius: 50%;
    background-color: rgba(191, 219, 254, 1);
    text-align: center;
    align-content: center;
    align-items: center;
  }
  .circle img{
    width: 30px;
    display: inline-block;
  }
  #showWhat:hover .showWhat{
    display: block;
  }
  div.droptext + p{
    color: #062648
  }
  #p1, #p2, #p3{
    color: #062648
  }

  .d1:hover #p1{
    color: rgba(29, 78, 216, 1);
  }
  .d2:hover #p2{
    color: rgba(29, 78, 216, 1);
  }
  .d3:hover #p3{
    color: rgba(29, 78, 216, 1);
  }
  .d4:hover #p4{
    color: rgba(29, 78, 216, 1);
  }
  .d5:hover #p5{
    color: rgba(29, 78, 216, 1);
  }
  .d6:hover #p6{
    color: rgba(29, 78, 216, 1);
  }
  
}
</style>