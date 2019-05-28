<template lang="html">
  <div id="userIndex">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus></menus>
        <div class="list" style="background:#ffffff">
          <div style="text-align:center;" v-if="userInfo.is_qy !== 0">
            <el-row style="margin-top:40px;" class="top">
              <el-col :span="6">
                <img width="200px" height="200px" :src="userInfo.img_patch === null ? img.default : userInfo.img_patch" />
              </el-col>
              <el-col :span="6">姓名</el-col>
              <el-col :span="12">{{ userInfo.name }}</el-col>
              <el-col :span="6">身份证号</el-col>
              <el-col :span="12">{{ userInfo.cardnumber }}</el-col>
              <el-col :span="6">住址</el-col>
              <el-col :span="12">{{ userInfo.addr }}</el-col>
              <el-col :span="6">电话</el-col>
              <el-col :span="12">{{ userInfo.phone }}</el-col>
              <el-col :span="6">电子邮箱</el-col>
              <el-col :span="12">{{ userInfo.email }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">专业领域:</el-col>
              <el-col :span="6">{{ userInfo.zyly || 'none' }}</el-col>
              <el-col :span="6">办公电话:</el-col>
              <el-col :span="6">{{ userInfo.bgdh || 'none' }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">身份证:</el-col>
              <el-col :span="9"><img width="200px" height="200px" :src="userInfo.cardfile_a === null ? img.default : userInfo.cardfile_a"/></el-col>
              <el-col :span="9"><img width="200px" height="200px" :src="userInfo.cardfile_b === null ? img.default : userInfo.cardfile_b"/></el-col>
            </el-row>
          </div>
          <div style="text-align:center;" v-else>
            <el-row style="margin-top:40px;" class="top">
              <el-col :span="6">
                <img width="200px" height="200px" :src="userInfo.img_patch === null ? img.default : userInfo.img_patch" />
              </el-col>
              <el-col :span="6">姓名</el-col>
              <el-col :span="12">{{ userInfo.name }}</el-col>
              <el-col :span="6">身份证号</el-col>
              <el-col :span="12">{{ userInfo.cardnumber }}</el-col>
              <el-col :span="6">住址</el-col>
              <el-col :span="12">{{ userInfo.addr }}</el-col>
              <el-col :span="6">电话</el-col>
              <el-col :span="12">{{ userInfo.phone }}</el-col>
              <el-col :span="6">电子邮箱</el-col>
              <el-col :span="12">{{ userInfo.email }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">所属行业:</el-col>
              <el-col :span="6">{{ userInfo.sshy || 'none' }}</el-col>
              <el-col :span="6">办公电话:</el-col>
              <el-col :span="6">{{ userInfo.bgdh || 'none' }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">机构类型:</el-col>
              <el-col :span="6">{{ userInfo.jglx || 'none' }}</el-col>
              <el-col :span="6">机构名称:</el-col>
              <el-col :span="6">{{ userInfo.zyly || 'none' }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">机构代码:</el-col>
              <el-col :span="6">{{ userInfo.jgdm || 'none' }}</el-col>
              <el-col :span="6">机构性质:</el-col>
              <el-col :span="6">{{ userInfo.jgxz || 'none' }}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">机构类型:</el-col>
              <el-col :span="6">{{ userInfo.jglx || 'none' }}</el-col>
              <el-col :span="6">机构名称:</el-col>
              <el-col :span="6">{{ userInfo.zyly || 'none' }}</el-col>
            </el-row>
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
import { mapActions, mapState } from 'vuex';
export default {
  name: 'userIndex',
  components: {
    headers,
    menus,
    footers,
  },
  data() {
    return {
      img: {
        default: require('@a/img/logo.gif'),
      },
      form: {
        test: 'test',
      },
      userInfo: {},
    };
  },
  computed: {
    ...mapState({
      userInfoVuex: state => state.login.userInfo,
    }),
  },
  created() {
    this.$set(this, `userInfo`, this.userInfoVuex);
  },
  methods: {},
  filters: {
    hideCardNum(cardnumber) {
      // let test = '123456789012345678';
      let len = cardnumber.length - 5 - 6;
      let xing = '';
      for (let i = 0; i < len; i++) {
        xing += '*';
      }
      let result = cardnumber.substring(0, 5) + xing + cardnumber.substring(cardnumber.length - 6);
      return result;
    },
  },
};
</script>

<style lang="css" scoped>
.el-row{
  margin-bottom: 20px;
}
.top > .el-col {
  margin-bottom: 20px;
}
</style>
