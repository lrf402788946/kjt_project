<template lang="html">
  <div id="menus">
    <div class="oneleft">
      <ul>
        <li>
          <a href="#"><img :src="img.keji" style="vertical-align: middle;" /> 商务分类</a>
        </li>
        <!-- <li><a href="#schoolListPage?code=gxys">高校院所</a></li> -->
        <li><router-link to="/schoolListPage?code=GXYS">高校院所</router-link></li>
        <li><router-link to="/kyysListPage?code=KYYS">科研院所</router-link></li>
        <li><router-link to="/kjqyListPage?code=KJQY">科技企业</router-link></li>
        <li><router-link to="/jgttListPage?code=JGTT">机构团体</router-link></li>
        <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=YJKF">研发服务</a></li>
        <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=JSCG">技术成果</a></li>
        <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=CXCP">创新产品</a></li>
        <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=ZXFW">咨询服务</a></li>
        <li><a href="${contextPath}/Talent/toTech">创新人才</a></li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menus',
  components: {},
  data() {
    return {
      img: {
        keji: require('@a/img/keji.jpg'),
      },
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped>
/* a{
  text-decoration: 'none';
} */
</style>
