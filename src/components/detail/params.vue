<template lang="html">
  <div id="params">
    <div class="rightInput" style="height: 197px;margin-left: 30px;">
      <div class="inputTxt">
        产品参数
      </div>
      <div class="write">
        <input class="writeInpt writeBg" value="参数名称" />
        <input class="writeInpt writeBg" value="参数内容" style="border-right: none;" />
        <span v-for="i in 15" :key="i">
          <input class="writeInpt" name="argsName" value="name" />
          <input class="writeInpt" name="argsMemo" value="memo" style="border-right: none;" />
        </span>
      </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: 'params',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.rightInput{
	height: 40px;
	margin-bottom: 30px;
}
.inputTxt{
	width: 86px;
	height: 40px;
	line-height: 40px;
	float: left;
	font-size: 18px;
	color: #888888;
}
.write{
	width:439px;
	height: auto;
	float: left;
	border: 1px solid #ccc;
	font-size: 18px;
}
.writeBg{
	background: #f3f3f3 !important;
}
.writeInpt{
	width: 218px;
	height:39px;
	line-height: 40px;
	float: left;
	border: none;
	border-right: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	text-align: center;
	font-size: 18px;
}
</style>
