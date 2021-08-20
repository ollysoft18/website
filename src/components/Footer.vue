<template>
   <footer class="px-4 pt-8 lg:px-12" id="footer">
     <div class="mt-8">
       <svg xmlns="http://www.w3.org/2000/svg" width="1465.508" height="98.121" viewBox="0 0 1465.508 98.121"><defs></defs><path class="a" d="M0-27.925s36.5-90.924,400.839-70.97S1198.96-28.255,1465-4.709" transform="translate(0.464 102.332)"/></svg>
     </div>
      <div class="mt-12 lg:flex lg:justify-between items-start">
        <div class="lg:w-3/12 px-8 lg:px-0 lg:mr-6">
          <img src="../assets/img/eTranzact Logo.png" class="logoimg">
          <p class="text-blue-500 mt-4 font-light">Industry leaders in payment service solutions and transaction switching, worldwide.</p>
          <div class="mt-6  flex items-center w-3/4">
            <a href="https://www.google.com" class="">
              <img src="../assets/img/Icon awesome-facebook.svg" alt="" class="inline mr-4" style="width: 20px">
            </a>
            <a href="https://www.google.com" class="">
              <img src="../assets/img/Icon awesome-linkedin-in.svg" alt="" class="inline mr-4" style="width: 20px">
            </a>
            <a href="https://www.google.com" class="">
              <img src="../assets/img/Icon awesome-twitter.svg" alt="" class="inline mr-4" style="width: 20px">
            </a>
            <a href="https://www.google.com" class="">
              <img src="../assets/img/Icon feather-instagram.svg" alt="" class="inline mr-4" style="width: 20px">
            </a>
          </div>
          <div class="mt-6">
            <p @click="$emit('showRequest')" class="cursor-pointer inline px-6 py-2 rounded text-blue-500 border border-solid border-blue-500">
              Request a call back
            </p>
          </div>
        </div>
        <div class="lg:flex items-start lg:w-full lg:ml-6">
          <div class="mt-12 flex justify-between items-start px-8 lg:px-0 lg:mt-0 w-full">
            <ul class="lg:w-full">
              <li class="text-blue-500 font-bold text-lg">Products</li>
              <li class="mt-4 ">
                <router-link to="/indivdual" class="text-blue-500 font-light text-sm">Bankit</router-link>
              </li>
              <li class="mt-2 ">
                <router-link to="/indivdual" class="text-blue-500 font-light text-sm">Pocketmoni</router-link>
              </li>
              <li class="mt-2 ">
                <router-link to="/business" class="text-blue-500 font-light text-sm">Corporatepay</router-link>
              </li>
              <li class="mt-2 ">
                <router-link to="/business" class="text-blue-500 font-light text-sm">Webconnect</router-link>
              </li>
              <li class="mt-2 ">
                <router-link to="/business" class="text-blue-500 font-light text-sm">Switchit</router-link>
              </li>
              <li class="mt-2 ">
                <router-link to="/business" class="text-blue-500 font-light text-sm">Payoutlet</router-link>
              </li>
              <li class="mt-2 ">
                <router-link to="/individual" class="text-blue-500 font-light text-sm">Payoutlet.Net</router-link>
              </li>
            </ul>
            <ul class="lg:w-full">
              <li class="text-blue-500 font-bold text-lg">Company</li>
              <li class="mt-4 ">
                <router-link to="/about" class="text-blue-500 font-light text-sm">About</router-link>
              </li>
              <li class="mt-2 ">
                <router-link to="/careers" class="text-blue-500 font-light text-sm">Careers</router-link>
              </li>
              <li class="mt-2 ">
                <router-link to="/terms" class="text-blue-500 font-light text-sm">Code Of Practice</router-link>
              </li>
              <li class="mt-2 ">
                <router-link to="/terms" class="text-blue-500 font-light text-sm">Whistle Blowing</router-link>
              </li>
            </ul>
          </div>
          <div class="mt-12 flex justify-between items-start px-8 lg:px-0 lg:mt-0 w-full">
            <ul class="lg:w-full">
              <li class="text-blue-500 font-bold text-lg">News</li>
              <li class="mt-4 ">
                <a href="https://www.google.com" class="text-blue-500 font-light text-sm">Investor relation</a>
              </li>
              <li class="mt-4 ">
                <a href="https://www.google.com" class="text-blue-500 font-bold text-lg">Language</a>
              </li>
              <li class="mt-2 ">
                <a href="https://www.google.com" class="text-blue-500 font-light text-sm">English</a>
              </li>
              <li class="mt-2 ">
                <a href="https://www.google.com" class="text-blue-500 font-light text-sm">Francais</a>
              </li>
            </ul>
            <ul class="lg:w-full">
              <li class="text-blue-500 font-bold text-lg">Contact</li>
              <li class="mt-4 text-blue-500 font-light text-sm">
                4th & 5th Floor, Fortune Towers
              </li>
              <li class="mt-2 text-blue-500 font-light text-sm">
                27/29 Adeyemo Alakija Street,
              </li>
              <li class="mt-2 text-blue-500 font-light text-sm">
                Victoria Island, Lagos, Nigeria.
              </li>
              <li class="mt-2 text-blue-500 font-light text-sm">
                234-01-710016
              </li>
              <li class="mt-2 text-blue-500 font-light text-sm">
                234-803-456710016
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="mt-12 border-gray-300">
      <p class="text-xs mt-10 text-gray-500 text-center">If you suspect you have been a victim of fraud or you notice any suspicious transactions or payments on your wallets, account statement or alerts, please report by calling any of the following numbers: </p>
      <p class="text-xs mt-4 text-gray-500 text-center">Call: 01-7101060 , 01-2701162, 08133887646 and 090710359462 - 24/7 (public holidays inclusive). Email: frauddesk@etranzact.com</p>
      <hr class="mt-12 border-gray-300">
      <div class="mt-4 py-4 flex justify-between items-center">
        <p class="text-blue-500 text-xs">Copyright © eTranzact 2021. All rights reserved</p>
        <div>
          <a href="https://www.google.com" class="text-blue-500 text-xs inline mr-3">Terms of Use</a>
          <a href="https://www.google.com" class="text-blue-500 text-xs inline ml-3">Privacy Policy</a>
        </div>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style >
ul{
  min-width: 40%
}
svg{
  fill:none;stroke:#2484c6;
  width: 100%;
}
.logoimg{
  width: 100px;
}

@media only screen and (min-width: 1024px){
   .logoimg{
    width: 120px
  }
}

</style>