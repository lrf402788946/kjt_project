<template lang="html">
  <div id="menus">
    <div class="oneleft">
      <ul>
        <li>
          <a href="#"><img :src="img.keji" style="vertical-align: middle;" /> 信息分类</a>
        </li>
        <li><router-link to="/schoolListPage?code=GXYS">高校院所</router-link></li>
        <li><router-link to="/kyysListPage?code=KYYS">科研院所</router-link></li>
        <li><router-link to="/kjqyListPage?code=KJQY">科技企业</router-link></li>
        <li><router-link to="/jgttListPage?code=JGTT">机构团体</router-link></li>
        <li><router-link to="/yffwListPage?code=YFFW">研发服务</router-link></li>
        <li><router-link to="/jscgListPage?code=JSCG">技术成果</router-link></li>
        <li><router-link to="/productListPage?code=CXCP">创新产品</router-link></li>
        <li><router-link to="/zxfwListPage?code=ZXFW">咨询服务</router-link></li>
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
