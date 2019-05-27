<template lang="html">
  <div id="kyysListPage">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus></menus>
        <div class="list">
          <searchTab @toSearch="search" :type="code"></searchTab>
          <div style="background:#fff; min-height:1070px;padding-bottom: 5%;">
            <div class="listtitle">
              <h2>科技企业</h2>
            </div>
            <div class="wai">
              <div
                style="min-height:200px;"
                v-for="(item, index) in list"
                :key="index"
                @click="$router.push({ path: '/detailPage', query: { id: item.id, code: code } })"
              >
                <div class="qys">
                  <div class="qyright">
                    <div class="qytopOne">
                      <div class="qytop">{{ item.name }}</div>
                      <div class="adrs">
                        <i class="el-icon-s-promotion"></i>
                        <span>定位</span>
                      </div>
                    </div>
                    <div class="qycenter">
                      <div class="qycenOne">
                        地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：<span>{{ item.addr }}</span>
                      </div>
                    </div>
                    <div class="qycenter">
                      <div class="qycenOne">
                        <div style=" float:left;">企业介绍：</div>
                        <span class="jianjie">{{ item.introduction }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 此处为判断 -->
              </div>
              <p v-if="!(list.length > 0)" style="text-align: center; height: 600px; margin: 33px 0 0 0;">无相关数据</p>
            </div>
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
import searchTab from '@/components/searchTab.vue';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'kyysListPage',
  metaInfo: {
    title: '科技超时-科技企业',
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
      skip: 0,
      limit: 5,
      code: this.$route.query.code || '',
      searchType: '',
      searchInfo: { select: '', text: '' },
    };
  },
  async created() {
    await this.search();
  },
  methods: {
    ...mapActions(['getMenuList']),
    async search(item) {
      if (typeof item === 'object') {
        //条件查询
        this.searchInfo = item;
        this.currentPage = 1;
      } else {
        this.currentPage = item ? item : 1;
      }
      let skip = (this.currentPage - 1) * this.limit;
      let { returnDataList, totalRow } = await this.getMenuList({ skip: skip, limit: this.limit, code: this.code });
      this.$set(this, `list`, returnDataList);
      this.$set(this, `totalRow`, totalRow);
    },
  },
};
</script>

<style lang="css" scoped>
.adrs{
  text-align: right;
}
.qytop {
    width: 80%;
    height: 66px;
    line-height: 66px;
    font-size: 20px;
    color: #215299;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
