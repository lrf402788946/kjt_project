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
              <li class="tit2" @click="changeInfo(3)">交易中信息</li>
              <li class="tit3"><router-link to="/addProduct">信息发布</router-link></li>
              <div style="float:left;">
                <el-table :data="list" stripe style="width: 100%">
                  <el-table-column width="200">
                    <template slot-scope="scope">
                      <img :src="scope.row.image1" style="width:200px;height:200px;" />
                    </template>
                  </el-table-column>
                  <el-table-column width="600">
                    <template slot-scope="scope">
                      <el-row style="text-align:center;">
                        <el-col :span="24">
                          {{ scope.row.name }}
                        </el-col>
                        <el-col :span="6">
                          信息号:
                        </el-col>
                        <el-col :span="18">
                          {{ scope.row.id }}
                        </el-col>
                        <el-col :span="6">
                          产品分类:
                        </el-col>
                        <el-col :span="18">
                          {{ scope.row.totaltype === 0 ? '产品' : scope.row.totaltype === 1 ? '技术' : '服务' }}
                        </el-col>
                        <el-col :span="6">
                          产品类型:
                        </el-col>
                        <el-col :span="18">
                          {{ { data: productTypeSelectList, searchItem: `code`, value: scope.row.product_type, label: `name` } | getName }}
                        </el-col>
                        <el-col :span="6">
                          价格:
                        </el-col>
                        <el-col :span="18"> {{ scope.row.price ? scope.row.price : `0` }}元/{{ scope.row.priceunit }} </el-col>
                        <el-col :span="6">
                          交易方式:
                        </el-col>
                        <el-col :span="18">
                          {{ scope.row.jyfs | jyfs }}
                        </el-col>
                        <el-col :span="6">
                          联系人:
                        </el-col>
                        <el-col :span="18">
                          {{ scope.row.contact_user ? scope.row.contact_user : `&nbsp;` }}
                        </el-col>
                        <el-col :span="6">
                          联系电话:
                        </el-col>
                        <el-col :span="18">
                          {{ scope.row.contact_tel ? scope.row.contact_tel : `&nbsp;` }}
                        </el-col>
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
                          <el-button v-if="tabs === 0" type="primary" icon="el-icon-edit" @click="toDetail(scope.row)" circle></el-button>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="24">
                          <el-button v-if="tabs === 0" type="danger" icon="el-icon-delete" circle @click="toDelete(scope.row.id)"></el-button>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="24">
                          <el-button v-if="tabs === 1 || tabs === 2" type="primary" icon="el-icon-document" circle @click="toDetail(scope.row)"></el-button>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="24">
                          <el-button v-if="tabs === 3" type="primary" icon="el-icon-document" circle @click="toDetail(scope.row)"></el-button>
                        </el-col>
                      </el-row>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </ul>
            <b-pagination
              v-if="list.length > 0"
              style="padding-left: 30%;padding-top: 3%;float:left;"
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
    <el-dialog title="交易信息" center :visible.sync="dialog" :close-on-click-modal="false">
      <el-row style="text-align:center;font-size:16px;">
        <el-col :span="6">产品名称:</el-col>
        <el-col :span="18">{{ tradeInfo.name }}</el-col>
        <el-col :span="6">信息号:</el-col>
        <el-col :span="18">{{ tradeInfo.id }}</el-col>
        <el-col :span="6">产品分类:</el-col>
        <el-col :span="18">{{ tradeInfo.totaltype === 0 ? '产品' : tradeInfo.totaltype === 1 ? '技术' : '服务' }}</el-col>
        <el-col :span="6">
          产品类型:
        </el-col>
        <el-col :span="18">
          {{ { data: productTypeSelectList, searchItem: `code`, value: tradeInfo.product_type, label: `name` } | getName }}
        </el-col>
        <el-col :span="6">
          价格:
        </el-col>
        <el-col :span="18"> {{ tradeInfo.price ? tradeInfo.price : `0` }}元/{{ tradeInfo.priceunit }} </el-col>
        <el-col :span="6">
          交易方式:
        </el-col>
        <el-col :span="18">
          {{ tradeInfo.jyfs | jyfs }}
        </el-col>
      </el-row>
      <el-table :data="subForm" stripe style="width: 100%">
        <el-table-column prop="gm_name" label="交易人" width="180"> </el-table-column>
        <el-table-column prop="description" label="交易说明" width="180"> </el-table-column>
        <el-table-column prop="create_date" label="交易时间" width="180"> </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog title="交易审核" center :visible.sync="tradeDialog" :close-on-click-modal="false">
      <el-row>
        <el-col :span="6">交易申请人:</el-col>
        <el-col :span="18">{{ tradeInfo.gm_name }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="6">交易申请说明:</el-col>
        <el-col :span="18">{{ tradeInfo.description }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="6">商品名称:</el-col>
        <el-col :span="18">{{ tradeInfo.name }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          价格:
        </el-col>
        <el-col :span="18"> {{ tradeInfo.price ? tradeInfo.price : `0` }}元/{{ tradeInfo.priceunit }} </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">交易结果:</el-col>
        <el-col :span="18">
          <el-radio v-model="allowedForm.status" label="2" border><font style="color: #36e236;font-weight: 600;">同意</font></el-radio>
          <el-radio v-model="allowedForm.status" label="3" border><font style="color: rgb(244, 12, 12);font-weight: 600;">拒绝</font></el-radio>
        </el-col>
        <el-col :span="6">结果回复:</el-col>
        <el-col :span="18">
          <el-input type="textarea" placeholder="请填写回复" v-model="allowedForm.describe" :autosize="{ minRows: 5 }"></el-input>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-row>
          <el-col :span="12">
            <el-button type="primary" style="width: 200px;font-size: larger;" @click="toAllowed()">审&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;核</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="info" style="width: 200px;font-size: larger;" @click="() => (tradeDialog = false)">
              返&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
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
      img: {
        noimg: require('@a/img/nophoto.png'),
      },
      list: [],
      tradeInfo: {},
      subForm: [],
      allowedForm: {},
      searchForm: {
        limit: '10',
        gxtype: '0',
        state: 0, //信息审核与否,前两个标签使用的
      },
      currentPage: 1,
      totalRow: 0,
      tabs: 0,
      productTypeSelectList: [],
      dialog: false,
      tradeDialog: false,
    };
  },
  computed: {},
  async created() {
    let { returnDataList } = await this.productTypeList();
    this.$set(this, `productTypeSelectList`, returnDataList);
    await this.search();
  },
  methods: {
    //此页面有2个接口:1)查询审核信息的产品;2)查询交易成功的接口
    //1)审核信息的产品接口,根据审核状态查询出不同结果=>已审核的信息在第一个标签页中显示,审核中的信息在第二个标签页显示;需要参数gxtype,state
    //2)第三个标签页是查看交易信息的=>需要参数gxtype
    //参数变量说明:通过上面(detailTitle组件)选择需求和供给=>gxtype
    //通过'已审核信息'和'审核中信息'两个标签页,改变的是state
    ...mapActions(['selfProductList', 'selfTradeSuccessList', 'productOperation', 'productTypeList', 'tradelist', 'tradeOperation']),
    async changeType(pos) {
      this.searchForm.gxtype = pos;
      await this.search();
    },
    async changeInfo(index) {
      this.tabs = index;
      if (index !== 2) {
        index === 1 ? (this.searchForm.state = 2) : (this.searchForm.state = index);
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
      if (this.tabs === 0 || this.tabs === 1) {
        let { returnDataList } = await this.selfProductList(this.searchForm);
        this.$set(this, `list`, returnDataList ? (returnDataList = this.$listImg(returnDataList, this.$domain)) : []);
      } else if (this.tabs === 2) {
        let newData = JSON.parse(JSON.stringify(this.searchForm));
        delete newData.state;
        let { returnDataList } = await this.selfTradeSuccessList(newData);
        this.$set(this, `list`, returnDataList ? (returnDataList = this.$listImg(returnDataList, this.$domain)) : []);
      } else if (this.tabs === 3) {
        let newData = JSON.parse(JSON.stringify(this.searchForm));
        delete newData.state;
        let { returnDataList } = await this.tradelist(newData);
        this.$set(this, `list`, returnDataList ? (returnDataList = this.$listImg(returnDataList, this.$domain)) : []);
      }
    },
    async toDelete(id) {
      await this.productOperation({ data: id, type: 'delete' });
      this.search();
    },
    async toDetail(item) {
      if (this.tabs === 0) {
        this.$router.push(`/addProduct?id=${item.id}&state=${item.state}`);
      } else if (this.tabs === 1) {
        this.$router.push({ path: '/productDetailIndex', query: { id: item.id } });
      } else if (this.tabs === 2) {
        this.dialog = true;
        this.$set(this, `tradeInfo`, item);
        let { returnDataList } = await this.tradeOperation({ data: { id: item.id }, type: 'productTradeList' });
        this.$set(this, `subForm`, returnDataList);
      } else if (this.tabs === 3) {
        this.tradeDialog = true;
        let { returnData, returnDataList } = await this.tradeOperation({ data: { id: item.id }, type: 'tradeInfo' });
        this.$set(this, `tradeInfo`, returnData);
        this.$set(this.allowedForm, `id`, `${returnData.id}`);
      }
    },
    async toAllowed() {
      await this.tradeOperation({ data: this.allowedForm, type: 'tradeReview' });
      this.tradeDialog = false;
      this.search();
    },
  },
  filters: {
    jyfs(data) {
      let result = '';
      switch (data) {
        case '0':
          result = '公用';
          break;
        case '1':
          result = '转让';
          break;
        case '2':
          result = '竞拍';
          break;

        default:
          result = '公用';
          break;
      }
      return result;
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
