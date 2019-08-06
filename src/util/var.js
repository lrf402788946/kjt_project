import Vue from 'vue';

const domain = process.env.VUE_APP_AXIOS_BASE_URL;

Vue.prototype.$domain = domain;
