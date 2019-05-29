<template>
  <div class="wrapper">
    <headers></headers>
    <div class="main">
      <div class="partone">
        <div class="leftOne">
          <menus></menus>
        </div>
        <div class="oneright">
          <div class="rightTop">
            <div class="rightTopL">
              产品详情
            </div>
          </div>
          <div class="rightContent">
            <ul class="tit" id="tit">
              <li class="tit1">产品详情</li>
            </ul>
            <div class="logBox" id="logBox">
              <div class="smallB" style="display: block !important;">
                <productDetail :info="info"></productDetail>
              </div>
            </div>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import headers from '@/components/headers.vue';
import menus from '@/components/userMenus.vue';
import footers from '@/components/footers.vue';
import productDetail from '@/components/detail/productDetail.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    menus,
    headers,
    footers,
    productDetail,
  },
  data() {
    return {
      info: {},
      img: {
        noimg: require('@a/img/personal.png'),
      },
      infoId: this.$route.query.id || '',
    };
  },
  computed: {

  },
  async created() {
    await this.searchDetail();
  },
  methods: {
    ...mapActions(['selProductDetail']),
    async searchDetail() {
        let detailId = this.infoId + '';
        let { returnDataList, returnData } = await this.selProductDetail({ id: detailId });
        this.$set(this, 'info', returnData);
        this.$set(this, 'paramsList', returnDataList);
    },
  },
};
</script>

<style lang="css" scoped>
@import '../../assets/style/style.css';
</style>
