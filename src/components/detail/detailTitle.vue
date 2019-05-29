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
    <div v-if="code === `YFFW`" class="listtitle">
      <span>研发服务</span>
    </div>
    <div v-if="code === `JSCG`" class="listtitle">
      <span>技术成果</span>
    </div>
    <div v-if="code === `CXCP`" class="listtitle">
      <span>创新产品</span>
    </div>
    <div v-if="code === `ZXFW`" class="listtitle">
      <span>咨询服务</span>
    </div>
    <div v-if="code === `JBXX`" class="listtitle">
      <span>基本信息</span>
    </div>
    <div v-if="code === `publisInfoIndex`" class="oneright">
      <div class="rightTop">
        <div class="rightTopL" @click="change(0)">我的需求</div>
        <div class="rightTopR" @click="change(1)">我的供给</div>
      </div>
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
    return {
      notChoose: { float: `left`, background: `white`, color: `#888888`, 'border-bottom': `1px dashed #ccc` },
      choose: { float: `left`, background: `#22529a`, color: `#fff` },
    };
  },
  computed: {},
  methods: {
    change(pos) {
      let titleSpan = document.querySelectorAll('.rightTop > div');
      titleSpan.forEach((item, index) => {
        index === pos ? (item.classList = ['rightTopL']) : (item.classList = ['rightTopR']);
      });
      this.$emit('typeChange', pos);
    },
  },
};
</script>

<style lang="css" scoped>
.oneright{
	float: right;
	background: #fff;
}
.rightTop{
	height: 60px;
	width: 950px;
	line-height: 60px;
	border-bottom: 1px solid #215299;
}
.rightTopL{
	width: 130px;
	height: 60px;
	background: #215299 ;
	float: left;
	color: #fff;
	font-size: 18px;
	text-align: center;
	font-family:  "微软雅黑", Tahoma, Arial, Helvetica, STHeiti;
  cursor:pointer;
}
.rightTopR{
	width: 130px;
	height: 60px;
	background: #fff;
	float: left;
	color: #888;
	font-size: 18px;
	text-align: center;
	font-family:  "微软雅黑", Tahoma, Arial, Helvetica, STHeiti;
  cursor:pointer;
  border-bottom: 1px solid #215299;
}
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
