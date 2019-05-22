<template lang="html">
  <div id="menus">
    <div class="oneleft">
      <ul>
        <li>
          <a href="#"><img :src="img.keji" style="vertical-align: middle;" />待定etc</a>
        </li>
        <li><a href="${contextPath}/Supermarket/toEnterprisePage?storetype=GXYS">待定etc</a></li>
        <li><a href="">待定etc</a></li>
        <li><a href="${contextPath}/Supermarket/toEnterprisePage?storetype=QYJT">待定etc</a></li>
        <li><a href="${contextPath}/Supermarket/toEnterprisePage?storetype=JGTT">待定etc</a></li>
        <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=YJKF">待定etc</a></li>
        <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=JSCG">待定etc</a></li>
        <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=CXCP">待定etc</a></li>
        <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=ZXFW">待定etc</a></li>
        <!-- <li><a href="${contextPath}/Talent/toTech">待定etc</a></li> -->
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

<style lang="css" scoped></style>
