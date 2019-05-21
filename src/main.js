import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/axios';
import '@/plugins/element';
import '@/plugins/meta';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VuePhotoZoomPro from 'vue-photo-zoom-pro';
import VueSuperSlide from 'vue-superslide';

Vue.use(VueSuperSlide);
Vue.use(VuePhotoZoomPro);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
