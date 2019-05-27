<template lang="html">
  <div id="productDetails">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus>
          <div class="riginfo">
            <div class="simils" style="margin-top: 20px; margin-left:20px; width:200px;">
              <p><span></span>相似产品<span></span></p>
            </div>
            <div class="similpro">
              <dl class="dlR">
                <!-- <%if(isSupplydemand!'' == 1){%> -->
                <a v-if="i === 1" href="${contextPath}/Supermarket/toSupplydemandDetailsPage?id=${productxs.id!''}">
                  <dt><img :src="img.default" /></dt>
                  <dd>
                    <div class="ddName">${productxs.name!''}</div>
                    <div class="ddPrice">
                      <div class="priceL">${productxs.price!''}</div>
                      <div class="priceR">机械</div>
                    </div>
                  </dd>
                </a>
                <a v-if="i === 2" href="${contextPath}/Supermarket/toProductDetailsPage?id=${productxs.id!''}">
                  <dt><img :src="img.default" /></dt>
                  <dd>
                    <div class="ddName">${productxs.name!''}</div>
                    <div class="ddPrice">
                      <div class="priceL">${productxs.price!''}</div>
                      <div class="priceR">机械</div>
                    </div>
                  </dd>
                </a>
              </dl>
              <p v-if="i === 3">没找到相似产品</p>
            </div>
          </div>
        </menus>
        <div class="list">
          <detailTitle :code="code"></detailTitle>
          <!-- <productDetail></productDetail>
          <property :img="img.default"></property>
          <params></params>
          <tradeType @toChange="changeTradeType"></tradeType>
          <tradeBtn :type="5"></tradeBtn> -->
        </div>
      </div>
      <div style="clear:both;"></div>
      <footers></footers>
    </div>
  </div>
</template>

<script>
import headers from '@/components/headers.vue';
import menus from '@/components/menus.vue';
import footers from '@/components/footers.vue';
import detailTitle from '@/components/detail/detailTitle.vue';
import productDetail from '@/components/detail/productDetail.vue';
import property from '@/components/detail/property.vue';
import params from '@/components/detail/params.vue';
import tradeType from '@/components/detail/tradeType.vue';
import tradeBtn from '@/components/detail/tradeBtn.vue';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'productDetails',
  components: {
    menus,
    headers,
    footers,
    detailTitle,
    productDetail,
    property,
    params,
    tradeType,
    tradeBtn,
  },
  data() {
    return {
      img: {
        default: require('@a/img/logo.gif'),
      },
      infoId: this.$route.query.id || '',
      code: this.$route.query.code || '',
      info: {},
      tradeType: '',
      i: 2,
      listTitle: 1,
      list3: 4,
    };
  },
  computed: {},
  async created() {
    await this.searchDetail();
  },
  methods: {
    ...mapActions(['getListDetail']),
    async searchDetail() {
      let { returnDataList, returnData } = await this.getListDetail({ id: this.infoId });
      this.$set(this, `info`, returnData);
    },
    changeTradeType(type) {
      this.tradeType = type;
      console.log(this.tradeType);
    },
  },
};
</script>

<style lang="css" scoped>
.riginfo{
  font-size: 14px;
}
.riginfo{
	float: left;
	width: 240px;
	color: #555;
	background: #fff;
}
.simils span{
	width: 60px;
	height: 1px;
	display:block;
	background-color: #c2c2c2;
}
.simils span:nth-child(1){
	float: left;
	margin:30px 12px 10px 0;
}
.simils span:nth-child(2){
	float: right;
	margin:30px 0 10px 8px;
}
.similpro dl a:nth-child(n+3) {display:none; }
.similpro dl a{
	margin-bottom:20px;
}
.similpro{
	width: 220px;
    margin: 20px 0 20px 10px;
	color: #a3a3a3;
}
.ddName{
	width: 220px;
	height: 30px;
	line-height:30px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color:#60636d;
	text-indent: 10px;
}
.ddPrice{
	width: 200px;
	height: 30px;
	padding-left:10px;
}
.priceL{
	float:left;
	color:#ff0000;
}
.priceR{
	float:right;
	color:#215299;
}
.list {
    width: 950px;
    background-color: #fff;
    margin-top: 10px;
    float: left;
    margin-bottom: 10px;
    height: 98.5%;
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
