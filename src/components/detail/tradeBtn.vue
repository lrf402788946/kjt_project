<template lang="html">
  <div id="tradeBtn">
    <div class="listtitle3">
      <div v-if="userInfo.token && userInfo.token !== null" class="logoin">
        <h2 onclick="shenqing1()">
          发起交易申请
          <div class="jiao"></div>
        </h2>
        <h2 onclick="">交易申请审核中..</h2>

        <div class="phone">
          <p class="ming">联系电话：<span class="hao"> ${store.contact!''}</span></p>
          <p class="ming dizhi">联系地址：<span class="hao"> ${store.addr!''}</span></p>
        </div>

        <h2 onclick="shenqing2()">交易申请未通过</h2>
      </div>
      <div v-else class="logoin">
        <h2 onclick="logoin()">
          登录后查看信息
          <div class="jiao"></div>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'tradeBtn',
  components: {},
  props: {
    type: { type: Number, default: 0 },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo,
    }),
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.listtitle3{
	height: 140px;
	width: 900px;
	margin: 30px auto;
	/*border-bottom: 1px solid #f18115;*/
}
.listtitle3 h2{
	width: 170px;
	height: 50px;
	background-color: #f18115;
	color: #fff;
	text-align: center;
	line-height:50px;
	font-size: 17px;
	cursor:pointer;
}
.logoin{
	margin:30px 0 0 363px;
}
.jiao{
	float: right;
	margin: 15px 3px 0 0;
  height: 0px;
  width: 0px;
  border: 10px solid transparent;
  border-left-color:#fff;
}
</style>
