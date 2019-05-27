import Vue from 'vue';
import Vuex from 'vuex';
import * as login from './login';
import * as register from './register';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: login,
    register: register,
  },
});
