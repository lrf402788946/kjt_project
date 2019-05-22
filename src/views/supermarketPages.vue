<template>
  <div id="index">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <!-- wrapper contents head 开始 -->
        <div class="partone">
          <menus></menus>
          <div class="oneright" style="margin-top: 11px;">
            <div class="sou">
              <form class="sout" action="${contextPath}/Supermarket/search?type=ALL" method="post">
                <input type="text" name="name" placeholder="输入产品关键字" />
                <button class="searchBtn">
                  <img :src="img.search" />
                  <span>产品</span>
                </button>
              </form>
              <form class="soub" action="${contextPath}/Supermarket/search?type=ZGX" method="post">
                <input type="text" name="name" placeholder="输入供需关键字" />
                <button class="searchBtn">
                  <img :src="img.search" />
                  <span>供求</span>
                </button>
              </form>
            </div>
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
                  <a id="zBtn" style="float:left; height:60px; line-height:60px;" href="${contextPath}/Supermarket/search?type=ZJS&totaltype=0">
                    <span class="spand"></span>
                    <span class="spand"></span>
                    <span class="spand"></span>
                  </a>
                </div>
                <div class="content" id="content">
                  <div class="contentlist" v-if="tabs === 0">
                    <div class="js">
                      <ul>
                        <li v-for="product in productlist01" :key="product.id">
                          <a href="${contextPath}/Supermarket/toProductDetailsPage?id=${product.id}">
                            <p style="margin-top:20px;">{{ product.name }}</p>
                            <p>
                              技术类型：{{ product.producttypeName }}
                              <span>日期：{{ product.createDate }}</span>
                            </p>
                            <p>价格：￥{{ product.price }}元/{{ product.priceunit }}</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="contentlist" v-if="tabs === 1">
                    <div class="pro" v-for="product in productlist01" :key="product.id">
                      <a href="${contextPath}/Supermarket/toProductDetailsPage?id=${product.id}">
                        <img v-if="product.image1 != ''" src="${contextPath}/imageFile/getImage?imagePath=${product.image1!''}" />

                        <img v-else :src="img.d1" />

                        <div class="proinfo">
                          <p>{{ product.name }}</p>
                          <div
                            style="float: left; color: red; max-width: 120px; overflow: hidden; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-left: 6px;"
                          >
                            ￥{{ product.price }}元/{{ product.priceunit }}
                          </div>
                          <div style="float:right; padding-right:6px;">{{ product.producttypeName }}</div>

                          <!-- <p class="p4">${product.createDate!''}</p> -->
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="contentlist" v-if="tabs === 2">
                    <ul class="fw">
                      <li v-for="product in productlist01" :key="product.id">
                        <a href="${contextPath}/Supermarket/toProductDetailsPage?id=${product.id}">
                          <span>{{ product.name }}</span>
                          <span>服务类型：{{ product.producttypeName }}</span>
                          <span>￥{{ product.price }}元/{{ product.priceunit }}</span>
                          <span>{{ product.createDate }}</span>
                        </a>
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
            <a href="${contextPath}/Supermarket/search?type=ZGX">
              <div></div>
              <div></div>
              <div></div>
            </a>
            <a href="${contextPath}/productUser/toindex?typeCode=1&kjcsType=0" target="_blank">
              <span>我要发布</span>
            </a>
          </h2>
          <div class="fb">
            <div class="falist" v-for="(item, index) in 6" :key="index">
              <div class="falift">
                <a href="${contextPath}/Supermarket/toSupplydemandDetailsPage?id=${supply.id!''}">
                  <!-- <%if(supply.image1!'' != ''){%> -->
                  <img :src="img.default" />
                </a>
              </div>
              <div class="faright">
                <div class="frtop">
                  <div style="float:left;">${supply.name!''}</div>
                  <div style="float:right; margin-right:10px;">供</div>
                </div>
                <div class="frtoptwo">
                  <div class="two1">
                    所属企业：硅藻土企业
                  </div>
                  <div class="two2">
                    认证状态：已认证
                  </div>
                </div>
                <div class="frtoptwo">
                  <div class="two1">
                    类别：${supply.supplytype!''}
                  </div>
                  <div class="two2">
                    上架时间：${supply.createDate!''}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="partthree">
          <h2>
            交易展示
            <a href="${contextPath}/Supermarket/transactionlist">
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
            <li v-for="(item, index) in 10" :key="index">
              <span class="span1 w220" style="width:200px; height:28px; line-height:28px; margin-left:53px; margin-right:53px;">
                <!-- <%if(transaction.userAllianceName1!'' != ""){%>  -->
                <!-- <%}else if(transaction.userEnterpriseName1!'' != ""){%> -->
                <!-- <%}else{%>  -->
                test
              </span>

              <span class="span1 w250" style="width:200px; height:28px; line-height:28px;  margin-left:33px; margin-right:53px;">
                <!-- <%if(transaction.userAllianceName!'' != ""){%>  -->
                <!-- <%}else if(transaction.userEnterpriseName!'' != ""){%> -->
                <!-- <%}else{%>  -->
                test
              </span>

              <span class="span1 w200" style="width:170px; height:28px; line-height:28px;  margin-left:53px; margin-right:53px;">
                <!-- <%if(transaction.productId!'' != ""){%> 
                <%}else if(transaction.supplydemandId!'' != ""){%> -->
                test
              </span>

              <span class="span2" style=" height:28px; line-height:28px; ">
                <!-- <%if(transaction.transactionStatus!'' == 0){%>  未开始 -->
                <!-- <%}else if(transaction.transactionStatus!'' == 1){%> 交易中  -->
                <!-- <%}else if(transaction.transactionStatus!'' == 2){%>  交易成功 -->
                <!-- <%}else{%>  -->
                交易失败
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
import _ from 'lodash';
export default {
  name: 'index',
  components: {
    menus,
    headers,
    footers,
  },
  data() {
    return {
      img: {
        search: require('@/assets/img/search.jpg'),
        d1: require('@/assets/img/d1.gif'),
        defalut_gif: require('@/assets/img/logo.gif'),
      },
      tabs: 0,
      productlist01: [
        { name: 'name1', producttypeName: 'proName1', price: 100, priceunit: '个', createDate: '2019-01-01' },
        { name: 'name2', producttypeName: 'proName2', price: 200, priceunit: '个', createDate: '2019-01-02' },
        { name: 'name3', producttypeName: 'proName3', price: 300, priceunit: '个', createDate: '2019-01-03' },
        { name: 'name4', producttypeName: 'proName4', price: 400, priceunit: '个', createDate: '2019-01-04' },
        { name: 'name5', producttypeName: 'proName5', price: 500, priceunit: '个', createDate: '2019-01-05' },
        { name: 'name6', producttypeName: 'proName6', price: 600, priceunit: '个', createDate: '2019-01-06' },
        { name: 'name7', producttypeName: 'proName7', price: 700, priceunit: '个', createDate: '2019-01-07' },
        { name: 'name8', producttypeName: 'proName8', price: 800, priceunit: '个', createDate: '2019-01-08' },
      ],
    };
  },
  methods: {
    changeTabs(index) {
      this.tabs = index;
      document.querySelectorAll('.title > li').forEach((item, itemIndex) => {
        index === itemIndex ? (item.classList = ['active']) : (item.classList = []);
      });
    },
  },
};
</script>

<style lang="css" scoped>
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
