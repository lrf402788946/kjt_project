import Vue from 'vue';
import _ from 'lodash';
import { Message } from 'element-ui';

const vm = new Vue({});
const Plugin = {
  install(Vue, options) {
    // 4. 添加实例方法
    Vue.prototype.$listImg = (list, domain) => {
      console.log(this.$domain);
      return list.map(item => {
        for (let [k, v] of Object.entries(item)) {
          if (typeof v === 'string') {
            console.log(v.includes('.jpg'));
            if (v.includes('.jpg')) item[k] = `${domain}${v}`;
          }
        }
        return item;
      });
    };
  },
};

Vue.use(Plugin);
