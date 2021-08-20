<template>
  <div>
    <section class="bgrdimg">
      <Nav />
      <div class="mt-8 md:mt-24 md:flex justify-between items-center px-8 py-8 md:py-0 md:w-3/4 md:mx-auto">
        <p class="text-white cursor-pointer mb-4 md:mb-0" 
          :class="[selected == 'terms' ? selectedClass : 'text-sm']"
          @click="selected = 'terms'"
        >Terms of use</p>
        <p class="text-white cursor-pointer mb-4 md:mb-0" 
          :class="[selected == 'policy' ? selectedClass : 'text-sm']"
          @click="selected = 'policy'"
        >Privacy Policy</p>
        <p class="text-white cursor-pointer mb-4 md:mb-0" 
          :class="[selected == 'code' ? selectedClass : 'text-sm']"
          @click="selected = 'code'"
        >Code of Practice</p>
        <p class="text-white cursor-pointer mb-4 md:mb-0" 
          :class="[selected == 'whistle' ? selectedClass : 'text-sm']"
          @click="selected = 'whistle'"
        >Whistle Blowing</p>
        <p class="text-white cursor-pointer mb-4 md:mb-0" 
          :class="[selected == 'quality' ? selectedClass : 'text-sm']"
          @click="selected = 'quality'"
        >Quality Policy Statement</p>
      </div>
    </section>
    <section class="md:px-12 pb-24" style="background-color: #e8f2f9">
      <Policy v-if="selected == 'policy'" />
      <Terms v-if="selected == 'terms'" />
      <Code v-if="selected == 'code'" />
      <Whistle v-if="selected == 'whistle'" />
      <QualityPolicy v-if="selected == 'quality'" />
    </section>
    <section class="bg-white py-4 hidden lg:block">
      <div class=" flex justify-between items-center py-8 w-3/4 mx-auto">
        <p class="deepblue cursor-pointer" 
          :class="[selected == 'terms' ? selectedClass : 'text-sm']"
          @click="selected = 'terms'"
        >Terms of use</p>
        <p class="deepblue cursor-pointer" 
          :class="[selected == 'policy' ? selectedClass : 'text-sm']"
          @click="selected = 'policy'"
        >Privacy Policy</p>
        <p class="deepblue cursor-pointer" 
          :class="[selected == 'code' ? selectedClass : 'text-sm']"
          @click="selected = 'code'"
        >Code of Practice</p>
        <p class="deepblue cursor-pointer" 
          :class="[selected == 'whistle' ? selectedClass : 'text-sm']"
          @click="selected = 'whistle'"
        >Whistle Blowing</p>
        <p class="deepblue cursor-pointer" 
          :class="[selected == 'quality' ? selectedClass : 'text-sm']"
          @click="selected = 'quality'"
        >Quality Policy Statement</p>
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
    <Footer />
  </div>
</template>
<script>
import Nav from "@/components/Nav"
import Policy from "@/components/PrivacyPolicy"
import Terms from "@/components/TermsOfUse"
import Code from "@/components/CodeOfPractice"
import Whistle from "@/components/WhistleBlowing"
import QualityPolicy from "@/components/QualityPolicy"
import Footer from "@/components/Footer"
export default {
  components:{
    Nav,
    Footer,
    Policy,
    Terms,
    Code,
    Whistle,
    QualityPolicy
  },
  data(){
    return {
      selectedClass: 'text-xl md:text-3xl font-bold',
      selected: 'terms'
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

section.bgrdimg{
  /* background-image: url('../assets/img/about/Group 280.svg');
  background-size: cover;
  background-repeat: no-repeat; */
  background-color: #02182F;
}
.deepblue{
  color: #02182F
}

</style>
