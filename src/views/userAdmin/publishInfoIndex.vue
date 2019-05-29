<template lang="html">
  <div id="publishInfoIndex">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus></menus>
        <div class="list" style="background: #ffffff;min-height:900px;">
          <detailTitle @typeChange="changeType" code="publisInfoIndex"></detailTitle>
          <div class="rightContent">
            <ul class="tit" id="tit">
              <li class="tit1" @click="changeInfo(0)">审核中信息</li>
              <li class="tit2" @click="changeInfo(1)">已经审核信息</li>
              <li class="tit2" @click="changeInfo(2)">交易成功信息</li>
              <li class="tit3"><a href="${contextPath}/product/toeditNew?pageNumber=${pageNumber!1}&gxtype=0">信息发布</a></li>
            </ul>
            <p v-if="!(list.length > 0)" style="text-align: center; height: 600px; margin: 33px 0 0 0;">无相关数据</p>
            <b-pagination
              v-if="list.length > 0"
              style="padding-left: 30%;padding-top: 3%"
              v-model="currentPage"
              :total-rows="totalRow"
              :limit="searchForm.limit"
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
import menus from '@/components/userMenus.vue';
import footers from '@/components/footers.vue';
import detailTitle from '@/components/detail/detailTitle.vue';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'publishInfoIndex',
  components: {
    headers,
    menus,
    footers,
    detailTitle,
  },
  data() {
    return {
      list: [],
      searchForm: {
        limit: 10,
        gxtype: 0,
        state: 0, //信息审核与否,前两个标签使用的
      },
      currentPage: 1,
      totalRow: 0,
      tabs: 0,
    };
  },
  computed: {},
  async created() {
    await this.search();
  },
  methods: {
    //此页面有2个接口:1)查询审核信息的产品;2)查询交易成功的接口
    //1)审核信息的产品接口,根据审核状态查询出不同结果=>已审核的信息在第一个标签页中显示,审核中的信息在第二个标签页显示;需要参数gxtype,state
    //2)第三个标签页是查看交易信息的=>需要参数gxtype
    //参数变量说明:通过上面(detailTitle组件)选择需求和供给=>gxtype
    //通过'已审核信息'和'审核中信息'两个标签页,改变的是state
    ...mapActions(['selfProductList', 'selfTradeList']),
    changeType(pos) {
      this.searchForm.gxtype = pos;
    },
    changeInfo(index) {
      this.tabs = index;
      if (index !== 2) {
        index === 1 ? (this.searchForm.state = 2) : (this.searchForm.state = index);
      }
      let titleSpan = document.querySelectorAll('.tit > li');
      titleSpan.forEach((item, itemIndex) => {
        item.classList.value === `tit3` ? '' : itemIndex === index ? (item.classList = ['tit1']) : (item.classList = ['tit2']);
      });
    },
    async search(item) {
      let result;
      this.currentPage = item ? item : 1;
      this.searchForm.skip = (this.currentPage - 1) * this.searchForm.limit;
      if (this.tabs !== 2) {
        result = await this.selfProductList(this.searchForm);
      } else {
        let newData = JSON.parse(JSON.stringify(this.searchForm));
        delete newData.state;
        result = await this.selfTradeList(newData);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.rightContent{
  margin-left: 30px;
  margin-top: 60px;
}
.tit {
	width: 890px;
	height: 30px;
  border-bottom: 1px solid #ccc;
  margin-top: 10%;
}
.tit1 {
	float: left;
	width: 100px;
	color:#215299;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 16px;
	margin-right: 30px;
	border-bottom: 2px solid #215299;
	cursor:pointer;
}
.tit2 {
	float: left;
	width: 100px;
	height: 30px;
	margin-right: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 16px;
	color:#ccc;
	cursor:pointer;
}
.tit3 {
	float: right;
	color:#215299;
	height: 30px;
	line-height: 30px;
	cursor:pointer;
	font-size: 16px;

}
.tit3 a {
	color:#215299;
	height: 30px;
	line-height: 30px;
}
</style>
