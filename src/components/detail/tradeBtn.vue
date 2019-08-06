<template lang="html">
  <div id="tradeBtn">
    <div class="listtitle3">
      <div v-if="userInfo.token && userInfo.token !== null" class="logoin">
        <h2 @click="dialog = true">
          发起交易申请
          <div class="jiao"></div>
        </h2>
      </div>
      <div v-else class="logoin">
        <h2 @click="$router.push({ path: '/login?type=0' })">
          登录后查看信息
          <div class="jiao"></div>
        </h2>
      </div>
    </div>

    <el-dialog title="确认交易" :visible.sync="dialog" center>
      <div style="text-align:center;font-size: 16px;">
        <el-row>
          <el-col :span="6">名称:</el-col>
          <el-col :span="18">{{ info.name }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="6">交易方式:</el-col>
          <el-col :span="18">{{ info.jyfs === 0 ? '转让' : '公用' }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="6">收费标准:</el-col>
          <el-col :span="18">￥{{ info.price }}元/{{ info.priceunit }}</el-col>
        </el-row>
        <el-col :span="24">&nbsp;</el-col>
        <el-row>
          <el-col :span="6">交易说明:</el-col>
          <el-col :span="18"><el-input type="textarea" placeholder="请输入交易说明" v-model="description" :autosize="{ minRows: 5 }"></el-input></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-row style="margin-top:30px;">
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="3" style="color:#fff;background:#909399;line-height: 40px;"><div @click="dialog = false">返回</div></el-col>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="3" style="color:#fff;background:#409EFF;line-height: 40px;"><div @click="toSubmit()">交易申请</div></el-col>
            <el-col :span="5">&nbsp;</el-col>
          </el-row>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'tradeBtn',
  props: {
    info: { default: () => {} },
  },
  components: {},
  data() {
    return {
      dialog: false,
      description: '',
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo,
    }),
  },
  methods: {
    toSubmit() {
      this.$emit('toBuy', { id: this.info.id, description: this.description });
      this.dialog = false;
    },
  },
};
</script>

<style lang="css" scoped>
.listtitle3{
	height: 140px;
	width: 900px;
	margin: 30px auto;
	/*border-bottom: 1px solid #f18115;*/
}
.listtitle3 h2{
	width: 170px;
	height: 50px;
	background-color: #f18115;
	color: #fff;
	text-align: center;
	line-height:50px;
	font-size: 17px;
	cursor:pointer;
}
.logoin{
	margin:30px 0 0 363px;
}
.jiao{
	float: right;
	margin: 15px 3px 0 0;
  height: 0px;
  width: 0px;
  border: 10px solid transparent;
  border-left-color:#fff;
}
</style>
