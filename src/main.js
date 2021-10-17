import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setHeaderToken } from './util/auth'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
axios.defaults.baseURL = 'http://localhost:8000/api/'
Vue.config.productionTip = false

const token = localStorage.getItem('token');

if (token) { 
  setHeaderToken(token) 
} 
store.dispatch('get_user', token)
.then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}).catch((error) => {
  console.error(error);
})
// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
