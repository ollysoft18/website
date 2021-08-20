<template>
  <div class="flex justify-between items-start py-8 md:py-0">
    <ul class="md:py-12 sidelist px-2 md:px-8 md:mt-12">
      <li class="text-sm" @click="selected = 'whistle'">
        <a href="#whistle" :class="[selected == 'whistle' ? selectedClass : 'text-sm']">
          Quality Policy Statement 
        </a>
      </li>
    </ul>
    <div class="details w-full md:py-12 md:mt-12">
      <p style="color: #062648" class="text-lg font-bold" id="whistle">Quality Policy Statement </p>
      <ul>
        <li class="mt-8" id="sites">
          <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact is at the forefront of delivering innovative electronic and mobile payment services to meet customers’ requirements atall times. Leveraging on our award winning switching platform, we ensure our deliverables are secure, cost effective and compliant with globally recognized standards. We maintain effective relationship with all our customers, sustaining their satisfaction by continually improving our processes to meet their changing needs.
          </p>
        </li>
      </ul>
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
  max-width: 10%
}
@media only screen and (min-width: 1024px){
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
}

</style>