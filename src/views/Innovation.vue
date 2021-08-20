<template>
  <div>
    <RequestModal v-if="showRequestModal" v-on:closeModal="showRequestModal = false"/>
    <div class="bgrdimg">
      <Nav />
      <div class="relative stars">
        <img src="../assets/img/about/Group 280.svg" alt="">
      </div>
      <div class="px-6 lg:px-16 pb-24 mainbox lg:flex lg:justify-between">
        <div class="lg:w-full lg:mr-3">
          <h1 class="mt-4 text-white font-bold text-2xl lg:text-4xl lg:font-extrabold">What's your big idea</h1>
          <p class="mt-6 text-white font-light lg:text-lg">Share your ideas with us to enable us serve you better</p>
        </div>
        <div class="hidden lg:block lg:w-full lg:ml-3 grpdiv relative">
          <img src="../assets/img/innovate/atom-shape.svg" alt="" class="grpimg grpimg1">
          <img src="../assets/img/innovate/technology.svg" alt="" class="grpimg grpimg2">
          <img src="../assets/img/innovate/data-management.svg" alt="" class="grpimg grpimg3">
          <img src="../assets/img/innovate/project-management.svg" alt="" class="grpimg grpimg4">
          <img src="../assets/img/innovate/tech.svg" alt="" class="grpimg grpimg5">
        </div>
      </div>
    </div>
    <section class="bg-white px-6 lg:px-16 relative overflow-x-hidden">
      <img src="../assets/img/innovate/Path 517.svg" alt="" class="hidden lg:inline-block absolute -top-12 -left-52">
      <img src="../assets/img/innovate/Path 520.svg" alt="" class="hidden lg:inline-block absolute top-36 -left-24">
      <img src="../assets/img/innovate/Path 518.svg" alt="" class="hidden lg:inline-block absolute top-96 -left-32">
      <img src="../assets/img/innovate/Path 743.svg" alt="" class="hidden lg:inline-block absolute bottom-96 -left-32">
      <img src="../assets/img/innovate/Path 744.svg" alt="" class="hidden lg:inline-block absolute bottom-40 -left-32">
      <img src="../assets/img/innovate/Path 520.svg" alt="" class="hidden lg:inline-block absolute top-36 -right-24">
      <img src="../assets/img/innovate/Path 518.svg" alt="" class="hidden lg:inline-block absolute top-96 -right-32">
      <img src="../assets/img/innovate/Path 743.svg" alt="" class="hidden lg:inline-block absolute bottom-96 -right-32">
      <img src="../assets/img/innovate/Path 744.svg" alt="" class="hidden lg:inline-block absolute bottom-40 -right-32">
      <form @submit.prevent="validateForm" class="lg:w-3/5 lg:mx-auto shadow-lg mt-6 lg:mt-12">          
        <div class="px-4 py-3 lg:px-16 py-12">
          <p class="text-xl font-bold" style="color:#062648">Let's get to know you</p>
          <hr class="mt-4">
          <div class="mt-8 lg:flex ">
            <div class="border-b border-solid border-blue-500 w-full lg:mr-4">
              <label class="text-blue-500 text-sm">First name <span class="text-red-500">*</span></label>
              <input type="text" class="block mt-4 bg-gray-100 px-4 py-2 w-full outline-none" required>
            </div>
            <div class="border-b border-solid border-blue-500 mt-4 lg:mt-0 w-full lg:ml-4">
              <label class="text-blue-500 text-sm">Last name <span class="text-red-500">*</span></label>
              <input type="text" class="block mt-4 bg-gray-100 px-4 py-2 w-full outline-none" required>
            </div>
          </div>
          <div class="border-b border-solid border-blue-500 mt-4 lg:mt-8">
            <label class="text-blue-500 text-sm">Email<span class="text-red-500">*</span></label>
            <input type="email" class="block mt-4 bg-gray-100 px-4 py-2 w-full outline-none" placeholder="example@gmail.com" required>
          </div>
          <div class="mt-8 lg:mt-12">
            <label class="border-b border-solid border-blue-500 block text-xl font-bold pb-2" style="color:#062648">Is your idea a...</label>
            <div class="mt-4">
              <input type="radio" value="1" v-model="picked">
              <label class="ml-3 text-sm text-gray-500" :class="[picked == '1' ? 'text-blue-500': '']">New Suggestion</label>
            </div>
            <div class="mt-4">
              <input type="radio" value="2" v-model="picked">
              <label class="ml-3 text-sm text-gray-500" :class="[picked == '2' ? 'text-blue-500': '']">An improvement to an existing solution</label>
            </div>
            <div class="mt-4">
              <input type="radio" value="3" v-model="picked">
              <label class="ml-3 text-sm text-gray-500" :class="[picked == '3' ? 'text-blue-500': '']">A request to bring back a product</label>
            </div>
            <div class="mt-4">
              <input type="radio" value="4" v-model="picked">
              <label class="ml-3 text-sm text-gray-500" :class="[picked == '4' ? 'text-blue-500': '']"> Others..</label>
            </div>
          </div>
          <div class="border-b border-solid border-blue-500 mt-8 lg:mt-12">
            <label class="border-b border-solid border-blue-500 block text-xl font-bold pb-2" style="color:#062648">Select idea category</label>
            <label class="text-blue-500 text-sm mt-8 block">Idea category</label>
            <select class="block mt-4 bg-gray-100 px-2 py-2 w-full outline-none text-gray-500" required>
              <option disabled selected class="text-gray-500">Select</option>
              <option value="" class="bg-white">Individuals</option>
              <option value="" class="bg-white">Business</option>
            </select>
          </div>
          <div class="border-b border-solid border-blue-500 mt-8 lg:mt-12">
            <label class="border-b border-solid border-blue-500 block text-xl font-bold pb-2" style="color:#062648">Tell us more about this idea</label>
            <label class="text-blue-500 text-sm mt-8 block">Description</label>
            <textarea cols="30" rows="10" class="block mt-4 bg-gray-100 py-2 w-full outline-none" required>
            </textarea>
          </div>
          <div class="mt-8 lg:mt-12 flex items-start">
            <input type="checkbox" >
            <div class="ml-4">
              <p class="text-blue-500 text-sm ">By checking this box I agree to the following</p>
              <p class="text-gray-500 text-sm ">My idea does not infringe on someone else's intellectual property</p>
              <p class="text-gray-500 text-sm ">I will disclose if I have any relevant patents in the idea selection section</p>
            </div>
          </div>
          <button class="mt-8 lg:mt-12 block w-full text-white px-6 py-3 rounded" style="background-color:#062648"
          @click="$emit('closeModal')"
          >
          Submit</button>
        </div>
      </form>
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
    Nav, RequestModal, 
    Footer
  },
  data(){
    return {
      showRequestModal: false,
      picked: ''
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

.bgrdimg{
  background-image: url('../assets/img/apply/Intersection 17 (1).svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.grpimg{
  display: none
}
@media only screen and (min-width: 1024px){
  .mainbox{
    margin-top: -100px;
    padding-bottom: 100px
  }
  .grpdiv{
    top: -80px;
  }
  .grpimg{
    display: inline-block;
    position: absolute;
    width: 80px;
  }
  .grpimg1{
    right: 50px;
    top: 0;
    left:0; 
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
  }
  .grpimg2{
    bottom: -150px;
    left: 0
  }
  .grpimg4{
    bottom: -150px;
    right: 0
  }
  .grpimg5{
    top: 0;
    right: 0
  }
}
</style>