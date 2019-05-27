<template lang="html">
  <div id="detailTitle">
    <div v-if="code === `GXYS`" class="listtitle">
      <span>高校详情</span>
    </div>
    <div v-if="code === `KYYS`" class="listtitle">
      <span>院所详情</span>
    </div>
    <div v-if="code === `KJQY`" class="listtitle">
      <span>企业详情</span>
    </div>
    <div v-if="code === `JGTT`" class="listtitle">
      <span>机构详情</span>
    </div>
    <div v-if="code === ``" class="listtitle">
      <span>详&nbsp;&nbsp;情</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailTitle',
  components: {},
  props: {
    code: { type: String, default: '' },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.listtitle{
  margin-left:0px;
}
.listtitle span{
	width: 135px;
	height: 60px;
	background-color: #22529a;
	color: #fff;
	text-align: center;
	line-height: 60px;
	font-size: 17px;
	display: block;
}
</style>
