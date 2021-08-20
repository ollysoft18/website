<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto">
            <form @submit.prevent="validateForm" >
              <font-awesome-icon icon="times-circle" class="mt-4 mr-4 cursor-pointer text-red-500 text-xl float-right" @click="$emit('closeModal')"/>
              <div class="px-4 py-3 lg:px-16 py-12">
                <p class="text-xl font-bold" style="color:#062648">Contact details</p>
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
                  <label class="text-blue-500 text-sm">Category</label>
                  <select class="block mt-4 bg-gray-100 px-2 py-2 w-full outline-none" required>
                    <option disabled>Select category</option>
                    <option value="" class="bg-white">Individuals</option>
                    <option value="" class="bg-white">Business</option>
                  </select>
                </div>
                <div class="border-b border-solid border-blue-500 mt-4 lg:mt-8">
                  <label class="text-blue-500 text-sm">Description</label>
                  <textarea cols="30" rows="10" class="block mt-4 bg-gray-100 py-2 w-full outline-none" required>
                  </textarea>
                </div>
                <button class="mt-8 lg:mt-12 block w-full text-white px-6 py-3 rounded" style="background-color:#062648"
                @click="$emit('closeModal')"
                >
                Submit</button>
                <div class="mt-8 lg:mt-12 flex items-center">
                  <input type="checkbox" >
                  <p class="text-gray-500 text-sm ml-4">Click to get new updates and announcements that may be of interest to you.</p>
                </div>
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
  top: 100px;
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