<template>
  <div>
    <RequestModal v-if="showRequestModal" v-on:closeModal="showRequestModal = false"/>
    <section class="bgrdimg pb-12 lg:pb-24">
      <Nav />
      <div class="mt-12 lg:mt-24 cont mx-auto">
        <div class="text-white text-center py-6" style="background:  #2484C6">
          <p class="text-white">Job Description</p>
          <p class="text-white text-xl lg:text-3xl mt-2 font-bold">Frontend Developer (VueJS)</p>
          <hr class="mt-6 w-3/4 mx-auto border-gray-300">
          <div class="inline-block mt-6 w-3/4 mx-auto lg:w-1/2 flex justify-between">
            <p class="inline-block"><span class="font-semibold">Posted: </span><span class=" font-light">11th March, 2021</span></p>
            <p class="inline-block"><span class="font-semibold">Deadline: </span><span class=" font-light">11th August, 2021</span></p>
          </div>
          <a href="#" class="inline-block mt-12 py-3 px-6 text-sm" style="background: #062648">
            Apply for job
          </a>
        </div>
        <div class="bg-white relative">
          <div class="py-12 px-12 lg:flex border-b border-solid border-gray-300">
            <div class="w-full mr-6 ">
              <img src="../assets/img/eTranzact Logo.png" class="logoimg">
              <p class="mt-4 text-blue-500 lg:w-3/4">Industry leaders in payment service solutions and transaction switching, worldwide.</p>
            </div>
            <div class="w-full ml-6 mt-12 lg:mt-0 ">
              <ul class="flex justify-between">
                <li>
                  <div class="flex flex-col justify-between py-4">
                    <p class="text-gray-500">Job Type</p>
                    <img src="../assets/img/apply/working-at-home.svg" alt="" class="icon mt-4">
                    <p class="text-lg mt-4 text-blue-500">Full Time</p>
                  </div>
                </li>
                <li class="">
                  <div class="flex flex-col justify-between py-4">
                    <p class="text-gray-500">Location</p>
                    <img src="../assets/img/apply/Icon material-location-on.svg" alt="" class="icon mt-4">
                    <p class="text-lg mt-4 text-blue-500">Lagos</p>
                  </div>
                </li>
                <li class="">
                  <div class="flex flex-col justify-between py-4">
                    <p class="text-gray-500">Specialization </p>
                    <img src="../assets/img/apply/diploma.svg" alt="" class="icon mt-4">
                    <p class="text-lg mt-4 text-blue-500">Software</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="pt-6 pb-8 lg:pb-16 px-8 lg:px-16 border-b border-solid border-gray-300">
              <p class="text-blue-500 text-xl font-bold">
                Job Summary  
              </p>
              <p class="mt-8 text-gray-500 leading-6">We are looking for an experienced Front-end Developer who will use his/her programming skills to bring the client side of our applications to life. Your duties will include translating our company and customer needs into a functional and appealing digital environment, ensuring great user experience.</p>
            </div>
            <div class="pt-6 pb-8 lg:pb-16 px-8 lg:px-16 border-b border-solid border-gray-300">
              <p class="text-blue-500 text-xl font-bold">
                Job Description  
              </p>
              <p class="mt-8 text-base text-gray-500 leading-6 flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>Use markup languages like HTML to create user-friendly webpages</span>
                
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>Optimize applications for maximum speed</span>
                
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Design mobile and desktopb-based features
                </span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>Collaborate with back-end developers and web designers to improve the usability of our products</span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center ">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span class="">Work with product managers to get feedback from and build solutions for users and customers</span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Ensure high-quaility graphic standards and brands
                </span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Collaborate with back-end developers with coding and trouble-shooting
                </span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Mantain and improve websites
                </span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Stay up-to-date with emerging technologies
                </span>
              </p>
            </div>
            <div class="pt-6 pb-8 lg:pb-16 px-8 lg:px-16">
              <p class="text-blue-500 text-xl font-bold">
                Experience  
              </p>
              <p class="mt-8 text-base text-gray-500 leading-6">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Proven work experience as a Frontend developer
                </span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Hands-on experience with markup languages
                </span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Experience with PHP-Laravel, JAvaScript-jQuery-VueJS,and CSS-Bootstrap
                </span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Familiarity with browser testing and debugging
                </span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>In-depth understanding of the entire web development process (design, development, and deployment)</span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>
                  Understanding of layout aesthetics
                </span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>Familiarity with software like content management systems</span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>An ability to perform well in a fast-paced environment</span>
              </p>
              <p class="mt-4 text-gray-500 leading-6 text-base flex items-center">
                <font-awesome-icon icon="circle" class="text-xs mr-4" style="color:#D5EEFF" />
                <span>Excellent analytical and multitasking skills</span>
              </p>
            </div>
            <div class="pt-6 pb-12 lg:pb-16 px-8 lg:px-16">
             <a href="#" class="py-3 px-6 text-sm text-white float-right" style="background: #062648">
                Apply for job
             </a>
             <router-link to="/careers" class="text-sm text-blue-500 float-left" style="text-decoration: underline">
                Go back
             </router-link>
            </div>
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
    Nav, RequestModal, Footer
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
.logoimg{
  width: 100px
}
div.cont{
  width: 90%;
}
.icon{
  width: 50px;
  height: 50px
}
@media only screen and (min-width: 1024px){
  div.cont{
  width: 60%;
}
}
</style>