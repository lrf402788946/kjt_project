<template lang="html">
  <div id="menus">
    <div class="topbar">
      <div class="some">
        <div class="date" id="days"></div>
        <div class="sign">
          <a style="float:left;" href="${contextPath}/productUser/toindex?typeCode=0&kjcsType=0">注册</a>
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
        <div class="nav">
          <a href="${contextPath}/">首页</a>
          <a href="${contextPath}/GovernmentAffairs">科技政务</a>
          <a href="${contextPath}/Policy/findListByType?typeCode=ZHZDZC&pageNumber=1">科技政策</a>
          <a href="${contextPath}/Supermarket">科技超市</a>
          <a href="${contextPath}/Data/toindex">科技数据</a>
          <a href="${contextPath}/Service/toInnovativeServices">创新服务</a>
          <a href="${contextPath}/mapApply/getMap">创新资源</a>
          <a href="${contextPath}/Talent/toTech">创新人才</a>
          <a href="#this">创新联盟</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menus',
  components: {},
  data() {
    return {
      logo: require('@/assets/img/logo.png'),
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped></style>
