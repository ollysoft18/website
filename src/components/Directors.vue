<template>
   <section class="mt-12 px-2 lg:mt-20">
      <p class="text-center text-2xl lg:text-3xl font-bold" style="color: #062648">Our board of directors</p>
      <div class="mt-12 pl-3">
        <ul class="flex figlist gap-10 lg:gap-0">
          <li>
            <figure>
              <div>
                <img src="../assets/img/about/Intersection 21.png" alt="" class="figimg">
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mr Wole Abegunde</p>
                <p class="text-blue-500 font-light text-sm">Chairman</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <img src="../assets/img/about/Intersection 20.png" alt="" class="figimg">
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mr Niyi Toluwalope</p>
                <p class="text-blue-500 font-light text-sm">Managing Director/CEO</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <img src="../assets/img/about/Intersection 22.png" alt="" class="figimg">
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mr Hakeem Adeniji-Adele</p>
                <p class="text-blue-500 font-light text-sm">Deputy MD/Executive Director</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <img src="../assets/img/about/Intersection 23.png" alt="" class="figimg">
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mr Anthony Egbuna</p>
                <p class="text-blue-500 font-light text-sm">Non-Executive Director</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <img src="../assets/img/about/Intersection 24.png" alt="" class="figimg">
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mr Victor Etuokwu</p>
                <p class="text-blue-500 font-light text-sm">Non-Executive Director</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <img src="../assets/img/about/Intersection 25.png" alt="" class="figimg">
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mrs Olayimika Phillips</p>
                <p class="text-blue-500 font-light text-sm">Non-Executive Director</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <img src="../assets/img/about/Intersection 26.png" alt="" class="figimg">
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mr Afolabi Oladele</p>
                <p class="text-blue-500 font-light text-sm">Non-Executive Director</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <img src="../assets/img/about/Intersection 27.png" alt="" class="figimg">
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mr JudeDavid Mbamalu</p>
                <p class="text-blue-500 font-light text-sm">Non-Executive Director</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <div>
                  <img src="../assets/img/about/Intersection 28.png" alt="" class="figimg">
                </div>
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mr Paul Obanua</p>
                <p class="text-blue-500 font-light text-sm">Non-Executive Director</p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <img src="../assets/img/about/Intersection 29.png" alt="" class="figimg">
              </div>
              <figcaption class="text-center">
                <p class="font-bold text-gray-500 text-sm">Mr Yinka Oluwatimilehin</p>
                <p class="text-blue-500 font-light text-sm">Non-Executive Director</p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.figimg{
  width: 150px;
  margin-left: auto;
  margin-right: auto;

}
figure div{
  border: 1px solid #062648;
  background-color: #fff;
  border-radius: 50%;
  padding: 7px;
  text-align: center;
}
figcaption{
  margin-top: 10px;
}
.figlist, .figlist2{
  flex-wrap: wrap;
  
}
.figlist li, .figlist2 li{
  max-width: 43%;
}
@media only screen and (min-width: 1024px){
.figlist, .figlist2{
    padding-left: 80px;
    padding-right: 40px;
  }
 .figlist{
    margin-left: 30px
  }
  .figlist li{
    width: 13%;
    margin: 20px 30px 
  }
}
</style>