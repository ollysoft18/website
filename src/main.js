import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
// import vWow from 'v-wow'
import VueWow from 'vue-wow' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faArrowLeft, faTimes, faSearch, faCheckCircle, faQuestionCircle, faDownload, faTimesCircle, faMapMarker, faBriefcase, faPlayCircle, faAngleDown, faCircle, faArrowRight, faCalendar} from '@fortawesome/free-solid-svg-icons'
// import {  faCheckCircleO} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faArrowLeft, faTimes, faSearch, faCheckCircle, faQuestionCircle,faDownload, faTimesCircle,faBriefcase,faMapMarker, faPlayCircle, faAngleDown, faCircle, faArrowRight, faCalendar)
// Vue.use(vWow);
Vue.use(VueWow)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
