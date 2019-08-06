<template lang="html">
  <div id="productInfoReview">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus></menus>
        <div class="list" style="background: #ffffff;min-height:900px;">
          <detailTitle @typeChange="changeType" code="publisInfoIndex"></detailTitle>
          <div class="rightContent">
            <ul class="tit" id="tit">
              <li class="tit1" @click="changeInfo(0)">待审核信息</li>
              <li class="tit2" @click="changeInfo(1)">已审核信息</li>
              <div style="float:left;">
                <el-table :data="list" stripe style="width: 100%">
                  <el-table-column width="200">
                    <template slot-scope="scope">
                      <img :src="scope.row.image1" style="width:200px;height:200px;" />
                    </template>
                  </el-table-column>
                  <el-table-column width="600">
                    <template slot-scope="scope">
                      <el-row>
                        <el-col :span="24">
                          {{ scope.row.name }}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="6">
                          信息号:
                        </el-col>
                        <el-col :span="17">
                          {{ scope.row.id }}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="6">
                          产品分类:
                        </el-col>
                        <el-col :span="17">
                          {{ scope.row.totaltype === 0 ? '产品' : scope.row.totaltype === 1 ? '技术' : '服务' }}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="6">
                          产品分类:
                        </el-col>
                        <el-col :span="17">
                          {{ scope.row.totaltype === 0 ? '产品' : scope.row.totaltype === 1 ? '技术' : '服务' }}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="6">
                          产品类型:
                        </el-col>
                        <el-col :span="17">
                          {{ { data: productTypeSelectList, searchItem: `code`, value: scope.row.product_type, label: `name` } | getName }}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="6">
                          价格:
                        </el-col>
                        <el-col :span="17"> {{ scope.row.price ? scope.row.price : `0` }}元/{{ scope.row.priceunit }} </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="6">
                          交易方式:
                        </el-col>
                        <el-col :span="17">
                          {{ scope.row.jyfs }}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="6">
                          联系人:
                        </el-col>
                        <el-col :span="17">
                          {{ scope.row.contact_user ? scope.row.contact_user : `&nbsp;` }}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="6">
                          联系电话:
                        </el-col>
                        <el-col :span="18">
                          {{ scope.row.contact_tel ? scope.row.contact_tel : `&nbsp;` }}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="6">
                          发布时间:
                        </el-col>
                        <el-col :span="18">
                          {{ scope.row.create_time }}
                        </el-col>
                      </el-row>
                    </template>
                  </el-table-column>
                  <el-table-column>
                    <template slot-scope="scope">
                      <el-row>
                        <el-col :span="24">
                          <el-button
                            v-if="searchForm.state === '0'"
                            type="primary"
                            icon="el-icon-edit"
                            @click="$router.push(`/productReview?id=${scope.row.id}&state=${scope.row.state}`)"
                            circle
                          ></el-button>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="24">
                          <el-button type="danger" icon="el-icon-delete" circle @click="toDelete(scope.row.id)"></el-button>
                        </el-col>
                      </el-row>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </ul>

            <el-pagination
              style="padding-left: 30%;padding-top: 3%;float:left;"
              background
              @current-change="search"
              :current-page.sync="currentPage"
              :page-size="searchForm.limit"
              :pager-count="5"
              layout="total,prev,pager,next"
              :total="totalRow"
            >
            </el-pagination>
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
  name: 'productInfoReview',
  components: {
    headers,
    menus,
    footers,
    detailTitle,
  },
  data() {
    return {
      img: {
        noimg: require('@a/img/nophoto.png'),
      },
      list: [],
      searchForm: {
        limit: '10',
        gxtype: '0',
        state: '0', //信息审核与否,前两个标签使用的
      },
      currentPage: 1,
      totalRow: 0,
      tabs: 0,
      productTypeSelectList: [],
      deleteInput: {},
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
    ...mapActions(['selProductReviewList', 'productOperation']),
    async changeType(pos) {
      this.searchForm.gxtype = pos + '';
      await this.search();
    },
    async changeInfo(index) {
      this.tabs = index;
      if (index !== 2) {
        index === 1 ? (this.searchForm.state = '2') : (this.searchForm.state = index + '');
      }
      let titleSpan = document.querySelectorAll('.tit > li');
      titleSpan.forEach((item, itemIndex) => {
        item.classList.value === `tit3` ? '' : itemIndex === index ? (item.classList = ['tit1']) : (item.classList = ['tit2']);
      });
      await this.search();
    },
    async search(item) {
      this.currentPage = item ? item : 1;
      this.searchForm.skip = `${(this.currentPage - 1) * this.searchForm.limit}`;
      let { returnDataList, totalRow } = await this.selProductReviewList(this.searchForm);
      this.$set(this, `list`, returnDataList ? (returnDataList = this.$listImg(returnDataList, this.$domain)) : []);
      this.$set(this, 'totalRow', totalRow);
    },
    async toDelete(id) {
      this.deleteInput.id = id;
      await this.productOperation({ data: this.deleteInput, type: 'delete' });
    },
  },
};
</script>

<style lang="css" scoped>
.oneright {
  height: 0
}
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
