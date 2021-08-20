<template>
  <div class="flex justify-between items-start py-8 md:py-0">
    <ul class="md:py-12 sidelist px-2 md:px-8 md:mt-12">
      <li class="text-sm" @click="selected = 'whistle'">
        <a href="#whistle" :class="[selected == 'whistle' ? selectedClass : 'text-sm']">
          Whistle Blowing
        </a>
      </li>
    </ul>
    <div class="details w-full md:py-12 md:mt-12">
      <p style="color: #062648" class="text-lg font-bold" id="whistle">Whistle Blowing</p>
      <ul>
        <li class="mt-8" id="sites">
          <p class=" mt-6 text-gray-400 text-sm leading-7">Have you experienced or observed any unethical or unprofessional conduct on the part of any of our staff or stakeholder? At eTranzact, we are committed to high standards of compliance and ethics. And all such reports will be addressed appropriately. <br> <br> 
            Your confidentiality wishes shall be fully respected. KPMG Ethics line will send the information provided in a format that protects your confidentiality & identity.
          </p>
        </li>
      </ul>
      <button class="mt-8 bg-blue-500 text-white px-6 py-3 text-sm">Get form</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      selected: 'whistle',
      selectedClass: 'text-blue-900 font-bold',
    }
  }
}
</script>

<style scoped>
ul.sidelist{
  min-width: 25%
}
ul.sidelist li {
  color: #062648;
}
.details{
  max-height: 450px;
  overflow-y: auto;
}
.details::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}
.details::-webkit-scrollbar
{
  width: 0px;
	background-color: #F5F5F5;
}

</style>