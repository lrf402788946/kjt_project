import Vue from 'vue';
import Router from 'vue-router';
import schoolListPage from './views/schoolListPage.vue';
import supermarketPages from './views/supermarketPages.vue';
import detailPage from './views/detailPage.vue';
import productListPage from './views/productListPage.vue';
import login from './views/login.vue';
import test from './views/test.vue';
import kjqyListPage from './views/kjqyListPage.vue';
import yffwListPage from './views/yffwListPage.vue';
import transactionIndex from './views/userAdmin/transactionIndex.vue';
import userIndex from './views/userAdmin/userIndex.vue';
import publishInfoIndex from './views/userAdmin/publishInfoIndex.vue';
import addInformation from './views/userAdmin/addInformation.vue';
import addProduct from './views/userAdmin/addProduct.vue';
import productDetailIndex from './views/userAdmin/productDetailIndex.vue';
import fwMoreList from './views/fwMoreList.vue';
import tradeMoreList from './views/tradeMoreList.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: supermarketPages,
    },
    {
      path: '/schoolListPage',
      name: 'schoolListPage',
      component: schoolListPage,
    },
    {
      path: '/kyysListPage',
      name: 'kyysListPage',
      component: () => import('@/views/kyysListPage.vue'),
    },
    {
      path: '/jgttListPage',
      name: 'jgttListPage',
      component: () => import('@/views/jgttListPage.vue'),
    },
    {
      path: '/kjqyListPage',
      name: 'kjqyListPage',
      component: kjqyListPage,
    },
    {
      path: '/detailPage',
      name: 'detailPage',
      component: detailPage,
    },
    {
      path: '/productListPage',
      name: 'productListPage',
      component: productListPage,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/yffwListPage',
      name: 'yffwListPage',
      component: yffwListPage,
    },
    {
      path: '/zxfwListPage',
      name: 'zxfwListPage',
      component: () => import('@/views/zxfwListPage.vue'),
    },
    {
      path: '/jscgListPage',
      name: 'jscgListPage',
      component: () => import('@/views/jscgListPage.vue'),
    },
    {
      path: '/transactionIndex',
      name: 'transactionIndex',
      component: transactionIndex,
    },
    {
      path: '/userIndex',
      name: 'userIndex',
      component: userIndex,
    },
    {
      path: '/publishInfoIndex',
      name: 'publishInfoIndex',
      component: publishInfoIndex,
    },
    {
      path: '/addInformation',
      name: 'addInformation',
      component: addInformation,
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: addProduct,
    },
    {
      path: '/productDetailIndex',
      name: 'productDetailIndex',
      component: productDetailIndex,
    },
    {
      path: '/fwMoreList',
      name: 'fwMoreList',
      component: fwMoreList,
    },
    {
      path: '/tradeMoreList',
      name: 'tradeMoreList',
      component: tradeMoreList,
    },
  ],
});
