<template lang="html">
  <div id="searchTab">
    <div class="sou">
      <form class="sout">
        <select name="type" v-model="selectSearch" v-if="type === 'GXYS'">
          <option v-for="(item, index) in GXYSlList" :key="index" :value="item.value">{{ item.text }}</option>
        </select>
        <select name="type" v-model="selectSearch" v-if="type === 'KYYS'">
          <option v-for="(item, index) in KYYSList" :key="index" :value="item.value">{{ item.text }}</option>
        </select>
        <select name="type" v-model="selectSearch" v-if="type === 'KJQY'">
          <option v-for="(item, index) in KJQYList" :key="index" :value="item.value">{{ item.text }}</option>
        </select>
        <select name="type" v-model="selectSearch" v-if="type === 'JGTT'">
          <option v-for="(item, index) in JGTTList" :key="index" :value="item.value">{{ item.text }}</option>
        </select>
      </form>
      <form class="soub">
        <input type="text" name="name" style="width:355px;" placeholder="请输入名称" v-model="textSearch" />
        <button type="button" style="margin-top: 10px;" @click="toSearch()"><img :src="img.search" /><span>搜索</span></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchTab',
  components: {},
  props: {
    type: { type: String, default: '' },
  },
  data() {
    return {
      img: {
        search: require('@/assets/img/search.jpg'),
        defalut_gif: require('@/assets/img/logo.gif'),
      },
      selectSearch: '0',
      textSearch: '',
      GXYSlList: [
        { value: 0, text: `全部类型` },
        { value: 1, text: `重本大学` },
        { value: 2, text: `二级本科` },
        { value: 3, text: `三级本科` },
        { value: 4, text: `高等专科` },
      ],
      KYYSList: [],
      KJQYList: [
        { value: 0, text: `全部企业` },
        { value: 1, text: `国有企业` },
        { value: 2, text: `集体所有制` },
        { value: 3, text: `私营企业` },
        { value: 4, text: `股份制企业` },
      ],
      JGTTList: [
        { value: `ZCP`, text: `全部产品` },
        { value: `YJKF`, text: `研发服务` },
        { value: `JSCG`, text: `技术成果` },
        { value: `CXCP`, text: `创新产品` },
        { value: `ZXFW`, text: `咨询服务` },
      ],
    };
  },
  computed: {},
  methods: {
    toSearch() {
      this.$emit('toSearch', { select: this.selectSearch, textSearch: this.textSearch });
    },
  },
};
</script>

<style lang="css" scoped>
button{
	background-color: #fff;
	border:none;
	height: 40px;
	padding:0px;
	margin-top: 10px;
	float: right;
	font-size: 16px;
	color: #215199;
	font-weight: bold;
}
button span{
	display: block;
	float: right;
	margin-right:16px;
	margin-top:10px;
}
</style>
