<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
 font-family: 'Fira Sans', sans-serif;
  // scroll-behavior: smooth;
}
:root{
  --bluetext: #2484C6;
  
}
@font-face {
  font-family: "Gotham";
  src: local("Gotham"),
   url(./fonts/Gotham-Font/GothamBook.ttf) format("truetype");
}
@font-face {
  font-family: "Fira Bold";
  src: local("Fira Bold"),
   url(./fonts/fira-sans-cufonfonts/FiraSans-ExtraBold.ttf) format("truetype");
}
@font-face {
  font-family: "Gill Bold";
  src: local("Gill Bold"),
   url(./fonts/GillSans/GillSans-Heavy.otf) format("opentype");
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.l-modal::-webkit-scrollbar{
    width: 0
  }
</style>
