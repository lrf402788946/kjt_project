<template>
  <div id="index">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <div class="partone">
          <menus></menus>
          <div class="oneright" style="margin-top: 11px;">
            <searchTab @toSearch="search" :type="''"></searchTab>
            <div class="more">
              <div class="tabs">
                <ul class="title" id="title">
                  <li class="active" alt="ZJS">
                    <a href="#" @click="changeTabs(0)" :ref="`tabsTitle0`">技术供求</a>
                    <span></span>
                  </li>
                  <li alt="ZCP">
                    <a href="#" @click="changeTabs(1)" :ref="`tabsTitle1`">产品供求</a>
                    <span></span>
                  </li>
                  <li alt="ZFW">
                    <a href="#" @click="changeTabs(2)" :ref="`tabsTitle2`">服务供求</a>
                    <span></span>
                  </li>
                  <li alt="ZRC">
                    <a href="${contextPath}/Talent/toTech" @click="changeTabs(3)">人才供求</a>
                  </li>
                </ul>
                <div style="float:left; height:60px; line-height:60px;">
                  <a id="zBtn" style="float:left; height:60px; line-height:60px;" @click="toMoreList('tabs')">
                    <span class="spand"></span>
                    <span class="spand"></span>
                    <span class="spand"></span>
                  </a>
                </div>
                <div class="content" id="content">
                  <div class="contentlist" v-if="tabs === 0">
                    <div class="js">
                      <ul>
                        <li
                          v-for="(product, index) in productList"
                          :key="index"
                          @click="$router.push({ path: '/detailPage', query: { id: product.id, code: `JSCG`, type: `product` } })"
                        >
                          <p style="margin-top:20px;">{{ product.name }}</p>
                          <p>
                            应用方向:{{ product.yyfx }}
                            <span>应用领域:{{ product.yyly }}</span>
                          </p>
                          <p>价格：￥{{ product.price }}元/{{ product.priceunit }}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="contentlist" v-if="tabs === 1">
                    <div
                      class="pro"
                      v-for="(product, index) in productList"
                      :key="index"
                      @click="$router.push({ path: '/detailPage', query: { id: product.id, code: `CXCP`, type: `product` } })"
                    >
                      <img :src="product.image1 === null ? img.defalut : product.image1" />
                      <div class="proinfo">
                        <p>{{ product.name }}</p>
                        <div
                          style="float: left; color: red; max-width: 120px; overflow: hidden; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-left: 6px;"
                        >
                          ￥{{ product.price }}元/{{ product.priceunit }}
                        </div>
                        <div style="float:right; padding-right:6px;">{{ product.create_time }}</div>
                      </div>
                    </div>
                  </div>

                  <div class="contentlist" v-if="tabs === 2">
                    <ul class="fw">
                      <li
                        v-for="(product, index) in productList"
                        :key="index"
                        @click="$router.push({ path: '/detailPage', query: { id: product.id, code: `ZXFW`, type: `product` } })"
                      >
                        <span>{{ product.name }}</span>
                        <span>服务范围:{{ product.fwfw }}</span>
                        <span>￥{{ product.price }}元/{{ product.priceunit }}</span>
                        <span>{{ product.createDate }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="contentlist" v-if="tabs === 3">正在跳转请稍后...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parttwo">
          <h2>
            最新发布
            <a @click="toPublish()">
              <span>我要发布</span>
            </a>
          </h2>
          <div class="fb">
            <div
              class="falist"
              v-for="(item, index) in newProductList"
              :key="index"
              @click="
                $router.push({
                  path: '/detailPage',
                  query: { id: item.id, code: item.totaltype === 0 ? `CXCP` : item.totaltype === 1 ? 'JSCG' : 'ZXFW', type: `product` },
                })
              "
            >
              <div class="falift">
                <img :src="item.image1 === null ? img.default : item.image1" />
              </div>
              <div class="faright">
                <div class="frtop">
                  <div style="float:left;">{{ item.name }}</div>
                  <div style="float:right; margin-right:10px;">{{ item.gxtype === 0 ? '需' : '供' }}</div>
                </div>
                <div class="frtoptwo">
                  <div class="two1">产品类型: {{ item.totaltype === 0 ? '产品' : item.totaltype === 1 ? '技术' : '服务' }}</div>
                  <div class="two2">
                    认证状态：已认证
                  </div>
                </div>
                <div class="frtoptwo">
                  <div class="two1">类别:{{ item.type_name }}</div>
                  <div class="two2">上架时间：{{ item.create_time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="partthree">
          <h2>
            交易展示
            <a @click="toMoreList('trade')">
              <div style="width:3px; height:3px;"></div>
              <div style="width:3px; height:3px;"></div>
              <div style="width:3px; height:3px;"></div>
            </a>
          </h2>
          <ul>
            <li>
              <span style=" height:28px; line-height:28px; ">营销单位</span><span style=" height:28px; line-height:28px; ">采购单位</span
              ><span style=" height:28px; line-height:28px; ">产品交易</span><span style=" height:28px; line-height:28px; ">交易状态</span>
            </li>
            <li v-for="(item, index) in tradeList" :key="index">
              <span class="span1 w220" style="width:200px; height:28px; line-height:28px; margin-left:53px; margin-right:53px;">
                {{ item.market_name }}
              </span>

              <span class="span1 w250" style="width:200px; height:28px; line-height:28px;  margin-left:33px; margin-right:53px;">
                {{ item.gm_name }}
              </span>

              <span class="span1 w200" style="width:170px; height:28px; line-height:28px;  margin-left:53px; margin-right:53px;">
                {{ item.product_name }}
              </span>

              <span class="span2" style=" height:28px; line-height:28px; ">
                {{ item.status === 0 ? '交易已发起' : item.status === 2 ? '交易成功' : '交易失败' }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <footers></footers>
    </div>
  </div>
</template>

<script>
import headers from '@/components/headers.vue';
import menus from '@/components/menus.vue';
import footers from '@/components/footers.vue';
import searchTab from '@/components/searchTab.vue';
import { mapActions, mapState } from 'vuex';
import _ from 'lodash';
export default {
  name: 'index',
  components: {
    menus,
    headers,
    footers,
    searchTab,
  },
  data() {
    return {
      img: {
        search: require('@/assets/img/search.jpg'),
        d1: require('@/assets/img/d1.gif'),
        defalut: require('@/assets/img/nophoto.png'),
      },
      productList: [],
      newProductList: [],
      productTypeSelectList: [],
      tradeList: [],
      tabs: 0,
      limit: 8,
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo,
    }),
  },
  async created() {
    await this.changeTabs(0);
    await this.getTradeList();
    await this.getNewProductList();
  },
  methods: {
    ...mapActions(['getProductList', 'getTransactionList']),
    async changeTabs(index) {
      this.tabs = index;
      let { returnDataList } = await this.getProductList({ skip: 0, limit: 8, totaltype: `${index}` });
      returnDataList = this.$listImg(returnDataList, this.$domain);
      this.$set(this, `productList`, returnDataList);
      document.querySelectorAll('.title > li').forEach((item, itemIndex) => {
        index === itemIndex ? (item.classList = ['active']) : (item.classList = []);
      });
    },
    async getTradeList() {
      let { returnDataList } = await this.getTransactionList({ skip: 0, limit: 4 });
      this.$set(this, `tradeList`, returnDataList);
    },
    async getNewProductList() {
      let { returnDataList } = await this.getProductList({ skip: 0, limit: 6 });
      returnDataList = this.$listImg(returnDataList, this.$domain);
      this.$set(this, `newProductList`, returnDataList);
    },
    toMoreList(type) {
      if (type === 'tabs') {
        let code = this.tabs === 0 ? 'JSCG' : this.tabs === 1 ? 'CXCP' : 'ZXFW';
        let page = this.tabs === 0 ? 'jscgListPage' : this.tabs === 1 ? 'productListPage' : 'fwMoreList';
        this.$router.push({ path: `/${page}`, query: { code: `${code}` } });
      } else if (type === 'trade') {
        this.$router.push({ path: '/tradeMoreList' });
      }
    },
    toPublish() {
      if (Object.keys(this.userInfo).length > 0) {
        this.$router.push({ path: '/publishInfoIndex' });
      } else {
        this.$router.push({ path: '/login', query: { type: `0` } });
      }
    },
    /**
     * 模糊查询
     */
    search(item) {
      this.$router.push({ path: '/searchPage', query: { info: item.condition2 } });
    },
  },
};
</script>

<style lang="css" scoped>
.partone {
    height: auto;
    margin: 10px 0;
}
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
.main {
  width: 1200px;
  margin: 10px auto;
  height: 1300px;
}
a {
  text-decoration: none !important;
}
.oneright {
  float: right;
  height: 600px;
  width: 950px;
}
.sou {
  height: 60px;
  margin-bottom: 10px;
}
.sout,
.soub {
  float: left;
  height: 60px;
  width: 470px;
  background-color: #fff;
}
.sout input,
.soub input {
  height: 40px;
  width: 358px;
  margin: 10px;
  border: none;
  background-color: #f3f3f3;
  text-indent: 8px;
  padding: 0px;
}
.sout {
  margin-right: 10px;
}
.searchBtn {
  margin-top: 10px;
}
.more {
  height: 530px;
  background-color: #fff;
}
.title {
  width: 885px;
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  font-weight: bold;
  padding-left: 20px;
  float: left;
}
.title li {
  float: left;
  margin-right: 10px;
  width: 110px;
}
.title a {
  display: block;
  padding-right: 10px;
  color: #7c808c;
}
.title span {
  display: inline-block;
  height: 4px;
  width: 4px;
  float: right;
  text-align: center;
  background-color: #2b324e;
  margin: -30px 6px 0 2px;
}
.active a {
  color: #22529a;
}
.spand {
  display: inline-block;
  height: 3px;
  width: 3px;
  text-align: center;
  background-color: #2b324e;
  margin: 25px 2px 0 2px;
}
.content {
  margin: 0 20px;
}
.content a {
  color: #6d6d77;
}
.contentlist span {
}
.js li {
  height: 108px;
  width: 452px;
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: #f3f3f3;
  float: left;
}
.js li:nth-child(even) {
  margin-right: 0px;
}
.js p {
  padding-left: 20px;
  height: 24px;
  width: 410px;
  margin-bottom: 0px;
}
/* .js p:nth-child(1){
	margin-top: 20px;
} */
.js p span {
  float: right;
}
.js p:nth-child(3) {
  color: #e91311;
}
.tabs ul {
  margin-bottom: 0;
}
.parttwo {
  height: 392px;
  background-color: #ffffff;
  margin: 10px 0;
  width: 100%;
  float: left;
}
.parttwo h2 {
  font-size: 23px;
  color: #22529a;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 0;
}
.parttwo h2 span:nth-child(1) {
  font-size: 14px;
  color: #22529a;
  padding-right: 20px;
}
.parttwo a {
  float: right;
  height: 60px;
  line-height: 60px;
}
.parttwo h2 span:nth-child(2),
.parttwo h2 span:nth-child(3),
.parttwo h2 span:nth-child(4) {
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: #22529a;
  margin: 2px 2px 3px 2px;
}
.parttwo h2 div {
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: #22529a;
  margin: 2px 2px 3px 2px;
}
.fb {
  height: 331px;
  margin-left: 20px;
}
.fb a {
  width: 101px;
  height: 97px;
  display: block;
  float: left;
}
.fb a:nth-child(5) {
  margin-right: 0px;
}
.fb img {
  display: block;
  width: 101px;
  height: 97px;
}
.falist {
  width: 575px;
  height: 97px;
  float: left;
  background: #f3f3f3;
  margin-right: 10px;
  margin-bottom: 10px;
}
.falift {
  width: 121px;
  height: 97px;
  float: left;
}
.falift img {
  width: 101px;
  height: 97px;
}
.faright {
  width: 454px;
  height: 97px;
  float: left;
}
.frtop {
  height: 43px;
  line-height: 43px;
  width: 434px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #60636d;
  font-size: 14px;
}
.frtoptwo {
  height: 25px;
  width: 454px;
  color: #60636d;
  font-size: 14px;
}
.frtoptwo .two1 {
  height: 25px;
  width: 245px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #60636d;
  font-size: 14px;
  float: left;
  margin-right: 32px;
}
.frtoptwo .two2 {
  height: 25px;
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #60636d;
  font-size: 14px;
  float: left;
}
.partthree {
  height: 232px;
  background-color: #fff;
  float: left;
  width: 100%;
}
.partthree h2 {
  font-size: 23px;
  color: #22529a;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  padding-right: 20px;
}
.partthree h2 a {
  float: right;
  height: 60px;
  line-height: 60px;
}
.partthree h2 div {
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: #22529a;
  margin: 2px 2px 3px 2px;
}
.partthree ul {
  width: 1160px;
  margin-left: 20px;
  text-align: center;
}
.partthree li {
  height: 28px;
}
.partthree li:nth-child(Odd) {
  background-color: #f3f3f3;
}
.partthree li:nth-child(1) {
  color: #22529a;
}
.partthree li span {
  float: left;
  display: block;
  width: 290px;
  max-width: 290px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #60636d;
}

.fb a:nth-child(n + 6) {
  display: none;
}
.fb .falist:nth-child(n + 7) {
  display: none;
}
.contentlist .pro:nth-child(n + 9),
.js li:nth-child(n + 9),
.fw li:nth-child(n + 9),
.rc li:nth-child(n + 9) {
  display: none;
}
.pro{
	float: left;
	margin-right: 5px;
	margin-bottom: 10px;
	height: 223px;
}
.pro img{
	display: block;
	width: 220px;
	height: 168px;
}
.proinfo{
	height: 55px;
	background-color: #f3f3f3;
	color: #556572;
	text-align: left;
	font-size: 14px;
	line-height: 26px;
	width: 220px;
}
.proinfo p{
  padding:0 10px;
  margin-top: 0;
  margin-bottom: 0;
}
.proinfo p:nth-child(1){
	max-width:220px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.proinfo p:nth-child(2){
	color: #fe0002;
}
.proinfo p span{
	color: #21539a;
	float: right;
}
.fw{
	width: 910px;
	line-height: 55px;
	padding-top:60px;
}
.fw li{
	height: 55px;
	padding: 0 20px;
}
.fw li:nth-child(Odd){
	background-color: #f3f3f3;
}
.fw li span{
	display: block;
	float: left;
}
.fw li span:nth-child(1){
	width: 360px;
	max-width:360px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.fw li span:nth-child(2){
	width: 220px;
}
.fw li span:nth-child(3){
	width: 190px;
}
.contentlist .pro:nth-child(4),.contentlist .pro:nth-child(8){
	margin-right: 0px;
}
</style>
