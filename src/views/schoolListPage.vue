<template lang="html">
  <div id="schoolListPage">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus></menus>
        <div class="list">
          <searchTab @toSearch="search" :type="searchInfo.code"></searchTab>
          <div style="background:#fff; height:60%;">
            <div class="listtitle">
              <h2>高校院所</h2>
            </div>
            <div class="wai" style="height:100%">
              <div>
                <div class="qys" v-if="list.length > 0">
                  <div
                    class="qyleft"
                    v-for="(item, index) in list"
                    :key="index"
                    @click="$router.push({ path: '/detailPage', query: { id: item.id, code: searchInfo.code } })"
                  >
                    <div class="qyleft1">
                      <img :src="img.defalut_gif" />
                    </div>
                    <div class="qyleft2">
                      <div class="qytop">{{ item.name }}</div>
                      <div class="qybot">
                        高校网址：<span>{{ item.homepage }}</span>
                      </div>
                      <div class="qybot">
                        高校地址：<span>{{ item.addr }}</span>
                      </div>
                      <div class="qybot">
                        联系方式:<span>{{ item.contact }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="clear:both;"></div>
              <p v-if="!(list.length > 0)" style="text-align: center; height: 600px; margin: 33px 0 0 0;">无相关数据</p>
              <b-pagination
                v-if="list.length > 0"
                style="padding-left: 30%;padding-top: 3%"
                v-model="currentPage"
                :total-rows="totalRow"
                :limit="searchInfo.limit"
                @change="search"
                first-text="首页"
                prev-text="<"
                next-text=">"
                last-text="末页"
              ></b-pagination>
            </div>
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
import searchTab from '@/components/searchTab.vue';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'schoolListPage',
  metaInfo: {
    title: '科技超时-高校院所',
  },
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
        defalut_gif: require('@/assets/img/logo.gif'),
      },
      list: [],
      currentPage: 1,
      totalRow: 0,
      searchInfo: {
        skip: 0,
        limit: 10,
        code: this.$route.query.code || '',
        name: '',
      },
    };
  },
  computed: {},
  async created() {
    await this.search();
  },
  methods: {
    ...mapActions(['getMenuList']),
    async search(item) {
      if (typeof item === 'object') {
        //条件查询
        this.searchInfo.name = item.condition2;
        this.currentPage = 1;
      } else {
        this.currentPage = item ? item : 1;
      }
      let skip = (this.currentPage - 1) * this.searchInfo.limit;
      let { returnDataList, totalRow } = await this.getMenuList(this.searchInfo);
      this.$set(this, `list`, returnDataList);
      this.$set(this, `totalRow`, totalRow);
    },
  },
};
</script>

<style lang="css" scoped>
.main {
    margin: 10px auto;
    width: 1200px;
}
.page {
    height: 28px;
    margin-left: 380px;
    margin-top: 30px !important;
}
.qys:nth-child(5) {
    margin-bottom:0px !important;
}
</style>
