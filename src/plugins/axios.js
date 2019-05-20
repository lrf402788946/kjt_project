import Vue from 'vue';
import newAxios from '@/util/axios';

const Plugin = {
  install(vue, options) {
    // 3. 注入组件
    vue.mixin({
      created() {
        if (this.$store && !this.$store.$axios) {
          this.$store.$axios = this.$axios;
        }
      },
    });
    // 4. 添加实例方法
    vue.prototype.$axios = newAxios;
  },
};

Vue.use(Plugin, { baseUrl: process.env.VUE_APP_AXIOS_BASE_URL });