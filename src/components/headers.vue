<template lang="html">
  <div id="headers">
    <div class="topbar">
      <div class="some">
        <div class="date" id="days">{{ tim() }}</div>
        <div class="sign">
          <el-link style="float:left;" href="https://element.eleme.io" target="_blank">默认链接</el-link>
          <!-- <a style="float:left;" href="${contextPath}/productUser/toindex?typeCode=0&kjcsType=0">注册</a> -->
          <div style="float:left; color:#fff; margin-left:10px;">|</div>
          <a style="float:left;" href="${contextPath}/productUser/toindex?typeCode=1&kjcsType=0">登录</a>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="head">
        <div class="logo">
          <img :src="logo" />
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
export default {
  name: 'headers',
  components: {},
  data() {
    return {
      logo: require('@/assets/img/logo.png'),
    };
  },
  computed: {},
  methods: {
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
