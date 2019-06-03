import Vue from 'vue';
import Vuex from 'vuex';
import * as login from './login';
import * as register from './register';
import * as menuList from './menuList';
import * as transaction from './transaction';
import * as indexPage from './indexPage';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: login,
    register: register,
    menuList: menuList,
    transaction: transaction,
    indexPage: indexPage,
  },
});
