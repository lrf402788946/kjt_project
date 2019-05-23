import Vue from 'vue';
import Vuex from 'vuex';
import * as login from './login';
import * as menu from './menu';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: login,
    menu: menu,
  },
});
