<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="text-center loader mx-auto">
            <font-awesome-icon icon="times" class="float-right text-3xl text-white relative times cursor-pointer mr-4" @click="$emit('closeModal')"/>
            <iframe  src="https://www.youtube.com/embed/4BUzfynQdgU?autoplay=1">
            </iframe> 
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
  width: 100%;
}
.times{
  top: -50px
}
iframe{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 450px;
}
</style>