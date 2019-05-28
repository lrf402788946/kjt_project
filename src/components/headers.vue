<template lang="html">
  <div id="headers">
    <div class="topbar">
      <div class="some">
        <div class="date" id="days">{{ tim() }}</div>
        <div class="sign" v-if="userInfo.token && userInfo.token !== null">
          <router-link style="float:left;color:white;" to="/center">欢迎 {{ userInfo.name }}</router-link>
          <div style="float:left; color:#fff; margin-left:10px;">|</div>
          <router-link style="float:left;color:white;" to="/center">个人中心</router-link>
        </div>
        <div class="sign" v-else>
          <router-link style="float:left;color:white;" to="/login?type=1">注册</router-link>
          <div style="float:left; color:#fff; margin-left:10px;">|</div>
          <router-link style="float:left;color:white;" to="/login?type=0">登录</router-link>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="head">
        <div class="logo">
          <img :src="logo" @click="$router.push('/')" />
        </div>
        <!-- <div class="nav">
          <a href="${contextPath}/">首页</a>
          <a href="${contextPath}/GovernmentAffairs">科技政务</a>
          <a href="${contextPath}/Policy/findListByType?typeCode=ZHZDZC&pageNumber=1">科技政策</a>
          <a href="${contextPath}/Supermarket">科技超市</a>
          <a href="${contextPath}/Data/toindex">科技数据</a>
          <a href="${contextPath}/Service/toInnovativeServices">创新服务</a>
          <a href="${contextPath}/mapApply/getMap">创新资源</a>
          <a href="${contextPath}/Talent/toTech">创新人才</a>
          <a href="#this">创新联盟</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'headers',
  components: {},
  data() {
    return {
      logo: require('@/assets/img/logo.png'),
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo,
    }),
  },
  async created() {
    await this.login({});
  },
  methods: {
    ...mapActions(['login']),
    tim() {
      var date = new Date();
      var seperator1 = '-';
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = '0' + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
      }
      var mydate = new Date();
      var myddy = mydate.getDay();
      var weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      return `${year}${seperator1}${month}${seperator1}${strDate}          ${weekday[myddy]}`;
    },
  },
};
</script>

<style></style>
