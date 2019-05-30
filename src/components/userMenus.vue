<template lang="html">
  <div id="menus">
    <div class="oneleft">
      <ul>
        <li style="color: white;"><img :src="img.keji" style="vertical-align: middle;" />个人中心</li>
        <li><router-link to="/userIndex">基本信息</router-link></li>
        <li><router-link to="/userIndex">消息管理</router-link></li>
        <li><router-link to="/publishInfoIndex">我的发布</router-link></li>
        <li><router-link to="/transactionIndex">我的订购</router-link></li>
        <li style="color: #0056b3;" @click="toLogout()">注销账号</li>
      </ul>
      <div style="background:white;">
        <ul>
          <li><img :src="img.diaocha" /></li>
          <li style="height:90px;background:white;padding-top: 5px;border-bottom:0;">
            <img :src="img.cha" ref="imgs" />
          </li>
          <p class="wenZi">您是否愿意继续关注本平台</p>
          <div class="frm">
            <el-switch style="display: block" v-model="is_yy" active-color="#ff4949" inactive-color="#13ce66" active-text="不愿意" inactive-text="愿意">
            </el-switch>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'menus',
  components: {},
  data() {
    return {
      img: {
        keji: require('@a/img/personal.png'),
        cha: require('@a/img/cha.png'),
        diaocha: require('@a/img/diaocha.gif'),
      },
      is_yy: true,
    };
  },
  computed: {},
  methods: {
    ...mapActions(['logout']),
    async toLogout() {
      await this.logout();
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style lang="css" scoped></style>
