<template lang="html">
  <div id="tradeType">
    <div class="rightInput" style="margin-left: 30px;margin-top: 30px;">
      <div class="inputTxt">
        交易方式
      </div>
      <div class="">
        <el-radio-group v-model="type" @change="toChangeTradeType()">
          <el-radio-button label="0">转让</el-radio-button>
          <el-radio-button label="1">公用</el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeType',
  components: {},
  data() {
    return {
      type: '',
    };
  },
  computed: {},
  methods: {
    toChangeTradeType() {
      this.$emit('toChange', this.type);
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
