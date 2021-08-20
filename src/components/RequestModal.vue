<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto">
            <form @submit.prevent="validateForm" >
              <font-awesome-icon icon="times-circle" class="mt-4 mr-4 cursor-pointer text-white text-xl float-right" @click="$emit('closeModal')"/>
              <p class="text-xl text-white font-bold text-center py-6" style="background-color:#062648">Request a call back</p>
              <div class="px-4 py-3 lg:px-16 py-12">
                <div class="border-b border-solid border-blue-500 ">
                  <label class="text-blue-500 text-sm">Name<span class="text-red-500">*</span></label>
                  <input type="text" class="block mt-4 bg-gray-100 px-4 py-2 w-full outline-none" required>
                </div>
                <div class="border-b border-solid border-blue-500 mt-4 lg:mt-8">
                  <label class="text-blue-500 text-sm">Email<span class="text-red-500">*</span></label>
                  <input type="email" class="block mt-4 bg-gray-100 px-4 py-2 w-full outline-none" required>
                </div>
                <div class="border-b border-solid border-blue-500 mt-4 lg:mt-8">
                  <label class="text-blue-500 text-sm">Country</label>
                  <select class="block mt-4 bg-gray-100 px-2 py-2 w-full outline-none" required>
                    <option disabled>Select country</option>
                    <option value="" class="bg-white">Nigeria</option>
                    <option value="" class="bg-white ">Ghana</option>
                    <option value="" class="bg-white">South Africa</option>
                  </select>
                </div>
                <div class="border-b border-solid border-blue-500 mt-4 lg:mt-8">
                  <label class="text-blue-500 text-sm">Reason for contact</label>
                  <select class="block mt-4 bg-gray-100 px-2 py-2 w-full outline-none" required>
                    <option disabled>Select category</option>
                    <option value="" class="bg-white">Enquiries</option>
                    <option value="" class="bg-white">Complaints</option>
                  </select>
                </div>
                <button class="mt-8 lg:mt-12 block w-full text-white px-6 py-3 rounded" style="background-color:#062648"
                @click="$emit('closeModal')"
                >
                Submit</button>
              </div>
            </form>
          </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader{
  position: relative;
  top: 20px;
  width: 80%;
}
.times{
  top: -50px
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 40%
  }
}
</style>