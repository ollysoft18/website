<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="text-center loader mx-auto">
            <section class="bg-white">
              <font-awesome-icon icon="times-circle" class="mt-4 mr-4 cursor-pointer text-red-500 text-xl float-right" @click="$emit('closeModal')"/>
              <div class="lg:py-12 py-6 lg:flex px-8 lg:justify-between lg:items-center bg-white" >
                <div class="hidden lg:block">
                  <img src="../assets/img/Icon ionic-ios-arrow-round-forward.svg" alt="" class="arrowleft" @click="scrollLeft">
                </div>
                <div class="horizontalmenu w-full" ref="horizontalmenu">
                  <div id="box1" class="" ></div>
                  <div id="box2" class="" ></div>
                  <div id="box3" class="" ></div>
                  <div id="box4" class="" ></div>
                  <div id="box5" class="" ></div>
                </div>
                <div class="hidden lg:block">
                  <img src="../assets/img/Icon ionic-ios-arrow-round-forward.svg" alt="" class="arrowright" @click="scrollRight">
                </div>
              </div>
            </section>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    scrollLeft(){
      this.$refs.horizontalmenu.scrollLeft -= 80
    },
    scrollRight(){
      this.$refs.horizontalmenu.scrollLeft += 80
    }
  }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 50px;
  width: 90%;
}

.horizontalmenu{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  
}
.horizontalmenu::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

.horizontalmenu::-webkit-scrollbar
{
  height: 0px;
	background-color: #F5F5F5;
}
.horizontalmenu div{
  width: 500px;
  height: 450px;
  background-size: 100% 100%;
  flex: 0 0 auto;
  margin-left: 20px;
  margin-right: 20px;
}
#box1{
  background-image: url('../assets/img/about/Screenshot 2021-07-05 at 4.07.48 PM copy 4.png');  
}
#box2{
  background-image: url('../assets/img/about/Screenshot 2021-07-05 at 4.07.48 PM copy 2.png');
}
#box3{
  background-image: url('../assets/img/about/Screenshot 2021-07-05 at 4.07.48 PM copy 3.png');
  width: 600px;
}
#box4{
  background-image: url('../assets/img/about/Intersection 18.png')
}
#box5{
  background-image: url('../assets/img/about/Intersection 19.png');
  width: 800px;
}
.arrowleft{
  cursor: pointer;
  transform: rotateZ(180deg);
  margin-right: 20px
}
.arrowright{
  cursor: pointer;
  margin-left: 20px
}
</style>