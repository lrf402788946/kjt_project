<template lang="html">
  <div id="productDetails">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus>
          <!-- <div class="riginfo">
            <div class="simils" style="margin-top: 20px; margin-left:20px; width:200px;">
              <p><span></span>相似产品<span></span></p>
            </div>
            <div class="similpro">
              <dl class="dlR">
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
          </div> -->
        </menus>
        <div class="list" v-if="type === `product`">
          <!--产品详情-->
          <detailTitle :code="code"></detailTitle>
          <productDetail :info="info"></productDetail>
          <property :title="`产权证书`" :img="info.zscq && info.file_path === null ? img.default : info.zscq"></property>
          <params v-if="info.totaltype && (info.totaltype !== 2 && info.totaltype !== '2')" :list="paramsList"></params>
          <tradeType :tradeType="info.jyfs"></tradeType>
          <tradeBtn :info="info" @toBuy="toBuy"></tradeBtn>
        </div>
        <div class="list" v-else>
          <!--信息详情-->
          <detailTitle :code="code"></detailTitle>
          <infoDetail :code="code" :info="info"></infoDetail>
          <property :title="`相关证件`" :img="info.file_path === null ? img.default : info.file_path"></property>
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
import infoDetail from '@/components/detail/infoDetail.vue';
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
    infoDetail,
  },
  data() {
    return {
      img: {
        default: require('@a/img/logo.gif'),
      },
      infoId: this.$route.query.id || '',
      code: this.$route.query.code || '',
      type: this.$route.query.type || '',
      info: {},
      paramsList: {},
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
    ...mapActions(['getListDetail', 'getProductDetail', 'buyProduct']),
    async searchDetail() {
      if (this.type !== `product`) {
        let { returnDataList, returnData } = await this.getListDetail({ id: this.infoId });
        this.$set(this, `info`, returnData);
      } else {
        let { returnDataList, returnData } = await this.getProductDetail({ id: this.infoId });
        let { data } = this.$objectListImg(returnData, this.$domain, true);
        this.$set(this, `info`, data);
        this.$set(this, `paramsList`, returnDataList);
      }
    },
    changeTradeType(type) {
      this.tradeType = type;
    },
    async toBuy({ id, description }) {
      await this.buyProduct({ id: id, description: description });
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
    min-height: 1000px;
    width: 950px;
    background-color: #fff;
    margin-top: 10px;
    float: left;
    margin-bottom: 10px;
    height: 98.5%;
}
</style>
