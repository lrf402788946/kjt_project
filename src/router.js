import Vue from 'vue';
import Router from 'vue-router';
import schoolListPage from './views/schoolListPage.vue';
import supermarketPages from './views/supermarketPages.vue';
import detailPage from './views/detailPage.vue';
import productListPage from './views/productListPage.vue';
import login from './views/login.vue';
import test from './views/test.vue';
import kjqyListPage from './views/kjqyListPage.vue';
import product from './views/userAdmin/product.vue';

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
      path: '/product',
      name: 'product',
      component: product,
    },
  ],
});
