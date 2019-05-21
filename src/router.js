import Vue from 'vue';
import Router from 'vue-router';
import schoolListPage from './views/schoolListPage.vue';
import supermarketPages from './views/supermarketPages.vue';
import productDetails from './views/productDetails.vue';
import productListPage from './views/productListPage.vue';
import login from './views/login.vue';
import test from './views/test.vue';
import businessConglomerateListPage from './views/businessConglomerateListPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'schoolListPage',
      component: schoolListPage,
    },
    {
      path: '/supermarketPages',
      name: 'supermarketPages',
      component: supermarketPages,
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: productDetails,
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
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/businessConglomerateListPage',
      name: 'businessConglomerateListPage',
      component: businessConglomerateListPage,
    },
  ],
});
