<template lang="html">
  <div id="tradeMoreList">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus></menus>
        <div class="list">
          <div style="background:#fff;padding-bottom: 5%;">
            <div class="listtitle">
              <h2>交易展示</h2>
            </div>
            <div>
              <div>
                <el-table :data="list" stripe style="width: 100%" border>
                  <el-table-column prop="market_name" label="营销单位" width="340"> </el-table-column>
                  <el-table-column prop="gm_name" label="采购单位" width="225"> </el-table-column>
                  <el-table-column prop="product_name" label="产品交易" width="200"> </el-table-column>
                  <el-table-column prop="create_date" label="交易状态" width="180"> </el-table-column>
                </el-table>
              </div>
            </div>
            <p v-if="!(list.length > 0)" style="text-align: center; height: 600px; margin: 33px 0 0 0;">无相关数据</p>
            <b-pagination
              v-if="list.length > 0"
              style="padding-left: 30%;padding-top: 3%"
              v-model="currentPage"
              :total-rows="totalRow"
              :limit="limit"
              @change="search"
              first-text="首页"
              prev-text="<"
              next-text=">"
              last-text="末页"
            ></b-pagination>
          </div>
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
import { mapActions, mapState } from 'vuex';
export default {
  name: 'tradeMoreList',
  metaInfo: {
    title: '科技超时-更多服务',
  },
  components: {
    menus,
    headers,
    footers,
  },
  data() {
    return {
      img: {
        search: require('@/assets/img/search.jpg'),
        defalut_gif: require('@/assets/img/logo.gif'),
      },
      list: [],
      currentPage: 1,
      totalRow: 20,
      skip: 0,
      limit: 16,
      code: this.$route.query.code || '',
      searchType: '',
      searchInfo: { select: '', text: '' },
    };
  },
  computed: {},
  async created() {
    await this.search();
  },
  methods: {
    ...mapActions(['getTransactionList']),
    async search(item) {
      if (typeof item === 'object') {
        //条件查询
        this.searchInfo = item;
        this.currentPage = 1;
      } else {
        this.currentPage = item ? item : 1;
      }
      let skip = (this.currentPage - 1) * this.limit;
      let { returnDataList, totalRow } = await this.getTransactionList({ skip: 0, limit: this.limit });
      this.$set(this, `list`, returnDataList);
      this.$set(this, `totalRow`, totalRow);
    },
  },
};
</script>

<style lang="css" scoped>
.wordInfo{
    width: 220px;
    background-color: #f3f3f3;
    height: 55px;
}
.wordInfo span:first-child {
    color: #63636d;
    padding: 10px;
}
.wordInfo span {
    font-size: 14px;
    display: inline-block;
}
.cp{
    height: 223px;
    width: 220px;
    float: left;
    margin: 0 10px 10px 0;
}
.cp img {
    height: 168px;
    width: 220px;
    display: block;
}
.cp a {
    height: 168px;
    width: 220px;
    display: block;
}
.cps {
    margin: 20px 10px;
}
</style>
