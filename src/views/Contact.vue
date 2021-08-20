<template>
  <div>
    <RequestModal v-if="showRequestModal" v-on:closeModal="showRequestModal = false"/>
    <MessageModal v-if="showMessageModal" v-on:closeModal="showMessageModal = false" />
    <section class="bgrdimg">
      <Nav />
      <div class="relative stars">
        <img src="../assets/img/about/Group 280.svg" alt="">
        <img src="../assets/img/contact/Group 359.svg" alt="" class="svg hidden lg:inline-block svgleft" >
        <img src="../assets/img/contact/Group 360.svg" alt="" class="svg svgright hidden lg:inline-block">
      </div>
      
      <div class="px-4 pb-24 contactbox">
        <div class="w-3/4 lg:text-center lg:w-full">
          <h1 class="text-3xl font-bold text-white lg:text-4xl">What can we do for you today?</h1>
          <p class="mt-4 text-lg font-light text-blue-500">Get in touch and let us know how we can help</p>
        </div>
        <div class="rounded-md mt-8 bg-white px-4 py-2 lg:w-1/2 lg:px-8 lg:mx-auto flex justify-between items-center inputdiv">
          <input class="bg-white inline outline-none w-full" type="text" placeholder="have a question you would like to resolve">
          <font-awesome-icon icon="search" class="" />
        </div>
      </div>
    </section>
    <section class="bg-white px-6 lg:px-20 py-8 lg:pt-24">
      <p style="color: #062648" class="text-light">Frequently Asked Questions 
        <font-awesome-icon icon="question-circle" class="ml-4" />
      </p>
      <hr class="mt-6">
      <ul class="questionlist lg:flex lg:justify-between lg:gap-20 mt-12">
        <li style="color: #062648">
          <p class="font-bold text-lg">How to Implement eTranazact for my business?</p>
          <div class="mt-4">
            <p class="text-blue-500">Get Help</p>
          </div>
        </li>
        <li style="color: #062648" class="mt-8 lg:mt-0">
          <p class="font-bold text-lg">How do I accept payment for my personal use?</p>
          <div class="mt-4">
            <p class="text-blue-500">Get Help</p>
          </div>
        </li>
        <li style="color: #062648" class="mt-8 lg:mt-0">
          <p class="font-bold text-lg">How to setup my account and add my payment method?</p>
          <div class="mt-4">
            <p class="text-blue-500">Get Help</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="mt-12 bg-white contactbox px-6 lg:px-20 py-8">
      <p class="text-blue-500 text-2xl font-bold">Our offices & contact information</p>
      <ul class="mt-8 lg:mt-16 lg:flex lg:justify-between lg:gap-20 contactlist">
        <li>
          <div>
            <p class="text-lg font-bold" style="color: #062648">Nigeria</p>
            <p class="mt-8 text-blue-500">Address</p>
            <p class="mt-4 text-gray-600">5th Floor Fortune Towers, 27/29 Adeyemo Alakija Street, Victoria Island, Lagos Nigeria.</p>
          </div>
          <div class="mt-8">
            <p class=" text-blue-500">Telephone</p>
            <p class="mt-4 text-gray-600">+234017101060, +2340146289469, +2341012701163</p>
          </div>
          <div class="mt-8">
            <p class="text-blue-500">Fax</p>
            <p class="mt-4 text-gray-600">+234017101060</p>
          </div>
        </li>
        <li class="mt-16 lg:mt-0">
          <div>
            <p class="text-lg font-bold" style="color: #062648">South Africa</p>
            <p class="mt-8 text-blue-500">Address</p>
            <p class="mt-4 text-gray-600">Cradock Heights Building 21 Cradock Avenue, Rosebank, Johannesburg, South Africa.</p>
          </div>
          <div class="mt-8">
            <p class=" text-blue-500">Telephone</p>
            <p class="mt-4 text-gray-600">+27114474885</p>
          </div>
          <div class="mt-8">
            <p class="text-blue-500">Mail</p>
            <p class="mt-4 text-gray-600">Info-sa@eTranzact.com</p>
          </div>
        </li>
        <li class="mt-16 lg:mt-0">
          <div>
            <p class="text-lg font-bold" style="color: #062648">Ghana</p>
            <p class="mt-8 text-blue-500">Address</p>
            <p class="mt-4 text-gray-600">Heritage Tower, Near Cedi House, Ambassador Enclave, Off Liberia Road, Ridge, Accra, Ghana.</p>
          </div>
          <div class="mt-8">
            <p class=" text-blue-500">Telephone</p>
            <p class="mt-4 text-gray-600">+233244285147</p>
          </div>
          <div class="mt-8">
            <p class="text-blue-500">Mail</p>
            <p class="mt-4 text-gray-600">Info-sa@eTranzact.com</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="mt-12 px-6 lg:px-20 py-8">
      <ul class="lg:flex lg:justify-between lg:gap-20 complaintlist">
        <li class="">
          <p class="text-gray-600 font-bold">For complaints</p>
          <p class="mt-4 font-light text-gray-600">cic@eTranzact.com</p>
        </li>
        <li class="mt-12 lg:mt-0">
          <p class="text-gray-600 font-bold">Whatsapp line</p>
          <p class="mt-4 font-light text-gray-600">+2348188639818</p>
        </li>
        <li class="mt-12 lg:mt-0">
          <p class="mt-4 lg:mt-0 font-light text-gray-600">
            For all enquiries, contact us at info-<span class="text-blue-500">ng@etranzact.com</span> or <span class="text-blue-500">agentenquiries@eTranzact.com</span>
          </p>
          <p class="font-light text-gray-600">We’re open 24/7</p>
        </li>
        <li class="mt-12 lg:mt-0">
          <button class="text-white px-6 py-3 rounded-lg" style="background-color: #062648" @click="showMessageModal = true">Drop a message</button>
        </li>
      </ul>
    </section>
     <section class="bg-white py-10 px-6 lg:px-20 lg:mt-12">
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
import MessageModal from "@/components/MessageModal"
import RequestModal from "@/components/RequestModal"
import Footer from "@/components/Footer"
export default {
  components:{
    Nav,
    MessageModal,
    RequestModal,
    Footer
  },
  data(){
    return {
      showMessageModal : false,
      showRequestModal: false,
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
/* Modal Styling */

section.bgrdimg{
  background-image: url('../assets/img/contact/Intersection 17.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.stars{
  top: -20px;
  overflow-x: hidden;
}
.svg{
  width: 300px;
  position: absolute
}
.svgleft{
  bottom: 90px;
  left: -50px
}
.svgright{
  right: -50px;
  bottom: 0
}
div.contactbox{
  margin-top: -20px
}
.inputdiv input::placeholder{
  font-size: 0.8em;
  font-style: italic;
}
.questionlist li{
  max-width: 75%
}
@media only screen and (min-width: 1024px){
  div.contactbox{
    margin-top: -150px
  }
  .questionlist li,.contactlist li{
    max-width: 25%
  }
 .complaintlist li{
   max-width: 20%
 }
}
</style>