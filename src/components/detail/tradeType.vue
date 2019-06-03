<template lang="html">
  <div id="tradeType">
    <div class="rightInput" style="margin-left: 30px;margin-top: 30px;">
      <div class="inputTxt">
        交易方式
      </div>
      <div>
        <el-radio-group v-model="type" @change="changeDisabled()">
          <el-radio-button :label="0">转让</el-radio-button>
          <el-radio-button :label="1">公用</el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeType',
  props: {
    tradeType: { default: 0 },
  },
  components: {},
  data() {
    return {
      type: '',
    };
  },
  watch: {
    tradeType: {
      handler(val) {
        this.type = val ? val : 0;
      },
    },
  },
  computed: {},
  methods: {
    toChangeTradeType() {
      this.$emit('toChange', this.type);
    },
    changeDisabled() {
      this.type = this.tradeType ? this.tradeType : 0;
    },
  },
};
</script>

<style lang="css" scoped>
button{
margin-top:0
}
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
.selt{
	width: 300px;
	height:40px;
	line-height: 40px;
	float: left;
}
.seltOne{
	width: 80px;
	height:40px;
	line-height: 40px;
	font-size: 18px;
	text-align: center;
	color: #fff;
	float: left;
	margin-right: 10px;
	background: #215299;
	cursor:pointer;
}
</style>
