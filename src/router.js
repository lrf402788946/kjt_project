import Vue from 'vue';
import Router from 'vue-router';
import schoolListPage from './views/schoolListPage.vue';
import supermarketPages from './views/supermarketPages.vue';
import productDetails from './views/productDetails.vue';

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
  ],
});
