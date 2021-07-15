import './registerServiceWorker'
import Vue from 'vue'
import Vuex from 'vuex'
import VModal from 'vue-js-modal'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNestable from 'vue-nestable'
import './config/vee-validate'
// import { abilitiesPlugin } from '@casl/vue'
// import ability from './config/ability'
// Load config
// import '@/config';

// Load css
import '@/styles/index.scss'

// import plugin
import VueToastr from "vue-toastr";
// use plugin
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});
Vue.use(VueNestable);


import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)


Vue.use(Vuex)
Vue.use(VModal, { dynamic: true, injectModalsContainer: true, dialog: true })
Vue.config.productionTip = false
// Vue.use(abilitiesPlugin, ability)

Vue.prototype.$dataModals = []

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
