<template lang="html">
  <div id="addProduct">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus></menus>
        <div class="list" style="background: #ffffff;min-height:900px;">
          <detailTitle code="reviewInfo"></detailTitle>
          <div class="insert">
            <el-row>
              <el-col :span="11">
                <el-form :model="input">
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">名称</el-col>
                      <el-col :span="16"><el-input v-model="input.name"></el-input> </el-col>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">总分类</el-col>
                      <el-col :span="16">
                        <el-select v-model="input.totaltype" placeholder="请选择分类">
                          <el-option :label="`产品`" :value="`0`"></el-option>
                          <el-option :label="`技术`" :value="`1`"></el-option>
                          <el-option :label="`服务`" :value="`2`"></el-option>
                        </el-select>
                      </el-col>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">类型</el-col>
                      <el-col :span="16">
                        <el-select v-model="input.product_type" placeholder="请选择类型">
                          <el-option v-for="(item, index) in productTypeSelectList" :key="index" :label="item.name" :value="item.code"></el-option>
                        </el-select>
                      </el-col>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">单价</el-col>
                      <el-col :span="14"><el-input v-model="input.price" type="number"></el-input></el-col>
                      <el-col :span="1"></el-col>
                      <el-col :span="1">元</el-col>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">单位</el-col>
                      <el-col :span="16"><el-input v-model="input.priceunit"></el-input></el-col>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">联系人</el-col>
                      <el-col :span="16"><el-input v-model="input.contact_user"></el-input></el-col>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">联系电话</el-col>
                      <el-col :span="16"><el-input v-model="input.contact_tel"></el-input></el-col>
                    </el-form-item>
                  </el-row>

                  <el-row>
                    <el-form-item>
                      <el-col :span="8">交易方式</el-col>
                      <el-col :span="16">
                        <el-radio v-model="input.jyfs" label="公用"></el-radio>
                        <el-radio v-model="input.jyfs" label="转让"></el-radio>
                        <el-radio v-model="input.jyfs" label="竞拍"></el-radio>
                      </el-col>
                    </el-form-item>
                  </el-row>

                  <el-row>
                    <el-form-item>
                      <el-col :span="8">简介</el-col>
                      <el-col :span="16">
                        <el-input type="textarea" placeholder="请填写描述" v-model="input.introduction" :autosize="{ minRows: 5 }"></el-input>
                      </el-col>
                    </el-form-item>
                  </el-row>
                  <!-- <el-row>
                    <el-form-item>
                      <el-col :span="8">状态</el-col>
                      <el-col :span="16"><el-input v-model="input.state"></el-input></el-col>
                    </el-form-item>
                  </el-row> -->
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">电子合同</el-col>
                      <el-col :span="16">
                        <el-upload class="upload-demo" action="/kjcs/home/common/upload/" multiple :on-success="fileUpload" :limit="3">
                          <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                      </el-col>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">供需类型</el-col>
                      <el-col :span="16">
                        <el-radio v-model="input.gxtype" border label="0">需求</el-radio>
                        <el-radio v-model="input.gxtype" border label="1">供给</el-radio>
                      </el-col>
                    </el-form-item>
                  </el-row>

                  <el-row>
                    <el-form-item>
                      <el-col :span="8">描述</el-col>
                      <el-col :span="16">
                        <el-input type="textarea" placeholder="请填写描述" v-model="input.description" :autosize="{ minRows: 5 }"></el-input>
                      </el-col>
                    </el-form-item>
                  </el-row>
                  <el-row>
                    <el-form-item>
                      <el-col :span="8">审核说明</el-col>
                      <el-col :span="16">
                        <el-input type="textarea" placeholder="请填写审核说明" v-model="input.description1" :autosize="{ minRows: 5 }"></el-input>
                      </el-col>
                    </el-form-item>
                  </el-row>

                  <el-row>
                    <el-form-item>
                      <el-col :span="8">知识产权</el-col>
                      <el-col :span="16">
                        <el-upload
                          class="avatar-uploader"
                          action="/kjcs/home/common/upload/"
                          accept="image/jpeg,image/gif,image/png"
                          :show-file-list="false"
                          :on-success="
                            (res, file) => {
                              return cardHandleAvatarSuccess(res, file, 0);
                            }
                          "
                        >
                          <img v-if="input.zscq" :src="imgs.zscq" class="avatar" />
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                      </el-col>
                    </el-form-item>
                  </el-row>
                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form :model="input">
                  <div v-if="input.totaltype === '0'">
                    <el-row class="param_list">
                      <el-col :span="10">参数名称</el-col>
                      <el-col :span="12">参数内容</el-col>
                      <el-col :span="2">
                        <el-button type="primary" icon="el-icon-edit" circle @click="() => this.subForm.push({})"></el-button>
                      </el-col>
                    </el-row>
                    <el-row class="param_list" v-for="(item, index) in subForm" :key="index">
                      <el-col :span="10"><el-input v-model="item.name"></el-input></el-col>
                      <el-col :span="1"></el-col>
                      <el-col :span="10"><el-input v-model="item.memo"></el-input> </el-col>
                      <el-col :span="3">
                        <el-button type="danger" icon="el-icon-delete" circle @click="cleanLine(index)"></el-button>
                      </el-col>
                    </el-row>
                  </div>

                  <div v-if="input.totaltype === '1'">
                    <el-row>
                      <el-form-item>
                        <el-col :span="8">应用方向</el-col>
                        <el-col :span="16"><el-input v-model="input.yyfx"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row>
                      <el-form-item>
                        <el-col :span="8">应用领域</el-col>
                        <el-col :span="16"><el-input v-model="input.yyly"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row>
                      <el-form-item>
                        <el-col :span="8">市场前景</el-col>
                        <el-col :span="16"><el-input v-model="input.scqj"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row>
                      <el-form-item>
                        <el-col :span="8">研发阶段</el-col>
                        <el-col :span="16"><el-input v-model="input.yfjd"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row class="param_list">
                      <el-col :span="10">参数名称</el-col>
                      <el-col :span="12">参数内容</el-col>
                      <el-col :span="2">
                        <el-button type="primary" icon="el-icon-edit" circle @click="() => this.subForm.push({})"></el-button>
                      </el-col>
                    </el-row>
                    <el-row class="param_list" v-for="(item, index) in subForm" :key="index">
                      <el-col :span="10"><el-input v-model="item.name"></el-input></el-col>
                      <el-col :span="1"></el-col>
                      <el-col :span="10"><el-input v-model="item.memo"></el-input> </el-col>
                      <el-col :span="3">
                        <el-button type="danger" icon="el-icon-delete" circle @click="cleanLine(index)"></el-button>
                      </el-col>
                    </el-row>
                  </div>

                  <div v-if="input.totaltype === '2'">
                    <el-row>
                      <el-form-item>
                        <el-col :span="8">应用领域</el-col>
                        <el-col :span="16"><el-input v-model="input.yyly"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row>
                      <el-form-item>
                        <el-col :span="8">服务范围</el-col>
                        <el-col :span="16"><el-input v-model="input.fwfw"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                  </div>
                </el-form>
              </el-col>
            </el-row>
            <!--图片-->
            <el-row>
              <el-alert title="最多可以上传5张图片" type="warning" effect="light" :closable="false" show-icon center> </el-alert>
              <el-col :span="4">图1</el-col>
              <el-col :span="7">
                <el-upload
                  class="avatar-uploader"
                  action="/kjcs/home/common/upload/"
                  accept="image/jpeg,image/gif,image/png"
                  :show-file-list="false"
                  :on-success="
                    (res, file) => {
                      return cardHandleAvatarSuccess(res, file, 1);
                    }
                  "
                >
                  <img v-if="input.image1" :src="imgs.image1" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
              <el-col :span="4" v-if="input.image1">图2</el-col>
              <el-col :span="7" v-if="input.image1">
                <el-upload
                  class="avatar-uploader"
                  action="/kjcs/home/common/upload/"
                  accept="image/jpeg,image/gif,image/png"
                  :show-file-list="false"
                  :on-success="
                    (res, file) => {
                      return cardHandleAvatarSuccess(res, file, 2);
                    }
                  "
                >
                  <img v-if="input.image2" :src="imgs.image2" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
              <el-col :span="4" v-if="input.image2">图3</el-col>
              <el-col :span="7" v-if="input.image2">
                <el-upload
                  class="avatar-uploader"
                  action="/kjcs/home/common/upload/"
                  accept="image/jpeg,image/gif,image/png"
                  :show-file-list="false"
                  :on-success="
                    (res, file) => {
                      return cardHandleAvatarSuccess(res, file, 3);
                    }
                  "
                >
                  <img v-if="input.image3" :src="imgs.image3" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
              <el-col :span="4" v-if="input.image3">图4</el-col>
              <el-col :span="7" v-if="input.image3">
                <el-upload
                  class="avatar-uploader"
                  action="/kjcs/home/common/upload/"
                  accept="image/jpeg,image/gif,image/png"
                  :show-file-list="false"
                  :on-success="
                    (res, file) => {
                      return cardHandleAvatarSuccess(res, file, 4);
                    }
                  "
                >
                  <img v-if="input.image4" :src="imgs.image4" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
              <el-col :span="4" v-if="input.image4">图5</el-col>
              <el-col :span="7" v-if="input.image4">
                <el-upload
                  class="avatar-uploader"
                  :multiple="true"
                  action="/kjcs/home/common/upload/"
                  accept="image/jpeg,image/gif,image/png"
                  :show-file-list="false"
                  :on-success="
                    (res, file) => {
                      return cardHandleAvatarSuccess(res, file, 5);
                    }
                  "
                >
                  <img v-if="input.image5" :src="imgs.image5" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="6"></el-col>
              <el-col :span="4"><el-button type="primary" @click="submit()">通&nbsp;&nbsp;&nbsp;&nbsp;过</el-button></el-col>
              <el-col :span="5"></el-col>
              <el-col :span="4"><el-button type="info" @click="cancle()">拒&nbsp;&nbsp;&nbsp;&nbsp;绝</el-button></el-col>
            </el-row>
          </div>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
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
  components: {
    menus,
    headers,
    footers,
    detailTitle,
  },
  data() {
    return {
      input: {},
      imgs: {},
      dialogImageUrl: '',
      dialogVisible: false,
      productTypeSelectList: [],
      subForm: [],
      idInfo: this.$route.query.id || '', //管理是新添还是查看/修改
      stateInfo: this.$route.query.stateInfo === 0, //管理是否允许编辑
    };
  },
  async created() {
    let { returnDataList } = await this.productTypeList();
    this.$set(this, `productTypeSelectList`, returnDataList);
    await this.searchDetail();
  },
  methods: {
    ...mapActions(['productTypeList', 'productReview', 'selProductDetail']),
    // 操作成功后处理
    async cardHandleAvatarSuccess(res, file, index) {
      if (index !== 0) {
        this.$set(this.input, `image${index}`, `${res.msg}`);
        this.$set(this.imgs, `image${index}`, `${this.$domain}${res.msg}`);
      } else {
        this.$set(this.input, `zscq`, `${res.msg}`);
        this.$set(this.imgs, `zscq`, `${this.$domain}${res.msg}`);
      }
    },
    async searchDetail() {
      let detailId = this.idInfo + '';
      let { returnDataList, returnData } = await this.selProductDetail({ id: detailId });
      this.$set(this, 'input', returnData);
      this.$set(this, 'subForm', returnDataList);
    },
    fileUpload(res, file) {
      this.$set(this.input, `dzht`, `${res.msg}`);
    },
    cleanLine(index) {
      this.subForm.splice(index, 1);
    },
    async cancle() {
      this.input.state = '3';
      //let newData = JSON.parse(JSON.stringify(this.input));
      let newData = this.input;
      await this.productReview(newData);
    },
    async submit() {
      this.input.state = '2';
      //let newData = JSON.parse(JSON.stringify(this.input));
      let newData = this.input;
      await this.productReview(newData);
    },
  },
};
</script>

<style lang="css" scoped>
.param_list{
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 20px;
  margin-bottom: 0px !important;
}
i{
  line-height: 100px;
}
.el-row div {
  margin-bottom: 10px;
  font-size: 18px;
}
.insert {
  margin-top: 50px;
  text-align: center;
}
.subBtn{
  width: -webkit-fill-available;
  background: #409EFF;
  color: white;
}
.resetBtn{
  width: -webkit-fill-available;
  color: white;
  background:#909399;
}
</style>
