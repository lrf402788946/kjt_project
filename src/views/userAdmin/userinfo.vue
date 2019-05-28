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
                        基本信息
                    </div>
                </div>
                <div class="rightContent">
                    <el-form>
                        <el-row>
                            <span>用户名称：{{userinfo.name}}</span>
                        </el-row>
                        <el-row>
                            <span>身份证号：{{userinfo.cardnumber}}</span>
                        </el-row>
                        <el-row>
                            <span>电话号码：{{userinfo.phone}}</span>
                        </el-row>
                        <el-row>
                            <span>邮箱地址：{{userinfo.email}}</span>
                        </el-row>
                        <el-row>
                            <span>联系地址：{{userinfo.addr}}</span>
                        </el-row>
                        <el-row v-if="isShow">
                            <span>身份证照：<img v-if="userinfo.cardfile_a" :src="userinfo.cardfile_a" class="avatar">
                            <img v-if="userinfo.cardfile_b" :src="userinfo.cardfile_b" class="avatar"></span>
                        </el-row>
                        <el-row v-else>
                            <span>组织机构：<img v-if="userinfo.img_qy" :src="userinfo.img_qy" class="avatar"></span>
                        </el-row>
                        <el-row v-if="isShow">
                            <span>个人简介：{{userinfo.grjj}}</span>
                        </el-row>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
    <div></div>
    <footers></footers>
  </div>
</template>
<script>
import headers from '@/components/headers.vue';
import menus from '@/components/menus2.vue';
import footers from '@/components/footers.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    menus,
    headers,
    footers,
  },
  data() {
    return {
      userinfo: {},
      token: '',
    };
  },
  created(){
    this.getUserinfo();
  },
  methods: {
    ...mapActions(['userinfo']),
    async getUserinfo(){
      let { returnData } = await this.login({ token: this.token });
      this.$set(this,"userinfo",returnData);
    },
  },
};
</script>

<style lang="css" scoped>
  @import '../../assets/style/style.css';
</style>
