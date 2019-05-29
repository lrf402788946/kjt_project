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
              我的订购
            </div>
          </div>
          <div class="rightContent">
            <ul class="tit" id="tit">
              <li class="tit1">我的订购</li>
            </ul>
            <div class="logBox" id="logBox">
              <div class="smallB" style="display: block !important;">
                <div style="min-height: 595px;">
                  <div class="fbList" v-for="(item, index) in dataList" :key="index">
                    <div class="fbListTop">
                      <div class="fbListTopL" style="width: 735px !important;">
                        信息号:<span>{{ item.id }}</span>
                      </div>
                      <div class="fbListTopR">
                        {{ item.create_date }}
                      </div>
                    </div>
                    <div class="fbListCenter">
                      <div class="fbListCenterL">
                        <img v-if="item.image1" :src="item.image1" />
                        <img v-else :src="img.noimg" />
                      </div>
                      <div class="fbListCenterC">
                        <div class="listName">
                          {{ item.product_name }}
                        </div>
                        <div class="listName h49">
                          类别：
                          <span v-if="item.totaltype === 0">技术</span>
                          <span v-else-if="item.totaltype === 1">产品</span>
                          <span v-else-if="item.totaltype === 2">技术</span>
                        </div>
                        <div class="listMoney">￥{{ item.price }}元/{{ item.priceunit }}</div>
                      </div>
                      <div class="fbListCenterTwo">
                        <div class="faTop">
                          交易说明：
                        </div>
                        <div class="faTxt">
                          {{ item.description }}
                        </div>
                      </div>
                      <ul class="fbListCenterR">
                        <li>
                          <span v-if="item.status === 0">交易申请</span>
                          <span v-else-if="item.status === 1">交易审核</span>
                          <span v-else-if="item.status === 2">交易成功</span>
                          <span v-else-if="item.status === 2">交易取消</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p v-if="!(dataList.length > 0)" style="text-align: center; height: 600px; margin: 33px 0 0 0;">无相关数据</p>
                </div>
                <b-pagination
                  v-if="dataList.length > 0"
                  style="padding-left: 300px;padding-top: 3%"
                  v-model="currentPage"
                  :total-rows="totalRow"
                  :limit="limit"
                  @change="transactionList"
                  first-text="首"
                  prev-text="<"
                  next-text=">"
                  last-text="末"
                >
                </b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
    <footers></footers>
  </div>
</template>
<script>
import headers from '@/components/headers.vue';
import menus from '@/components/userMenus.vue';
import footers from '@/components/footers.vue';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    menus,
    headers,
    footers,
  },
  data() {
    return {
      dataList: {},
      currentPage: '1',
      totalRow: 20,
      skip: '0',
      limit: '3',
      noimg: require('@a/img/personal.png'),
      img: {
        noimg: require('@a/img/personal.png'),
      },
      pageForm: {},
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo,
    }),
  },
  async created() {
    await this.transactionList();
  },
  methods: {
    ...mapActions(['transaction']),
    async transactionList(item) {
      
      let skip = (this.currentPage - 1) * this.limit;
      this.pageForm.skip = skip + '';
      this.pageForm.limit = this.limit + '';
      let { returnDataList, totalRow } = await this.transaction(this.pageForm);
      this.$set(this, 'dataList', returnDataList);
      this.$set(this, 'totalRow', totalRow);
    },
  },
};
</script>

<style lang="css" scoped>
@import '../../assets/style/style.css';
</style>
