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
                            <span>用户名称：{{userInfo.name}}</span>
                        </el-row>
                        <el-row>
                            <span>身份证号：{{userInfo.cardnumber}}</span>
                        </el-row>
                        <el-row>
                            <span>电话号码：{{userInfo.phone}}</span>
                        </el-row>
                        <el-row>
                            <span>邮箱地址：{{userInfo.email}}</span>
                        </el-row>
                        <el-row>
                            <span>联系地址：{{userInfo.addr}}</span>
                        </el-row>
                        <el-row v-if="isShow">
                            <span>身份证照：<img v-if="userInfo.cardfile_a" :src="userInfo.cardfile_a" class="avatar">
                            <img v-if="userInfo.cardfile_b" :src="userInfo.cardfile_b" class="avatar"></span>
                        </el-row>
                        <el-row v-else>
                            <span>组织机构：<img v-if="userInfo.img_qy" :src="userInfo.img_qy" class="avatar"></span>
                        </el-row>
                        <el-row v-if="isShow">
                            <span>个人简介：{{userInfo.grjj}}</span>
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
import { mapActions,mapState } from 'vuex';
export default {
  components: {
    menus,
    headers,
    footers,
  },
  data() {
    return {
      token: '',
      isShow: true,
    };
  },
  computed:{
    ...mapState({
      userInfo: state => state.login.userInfo,
    }),
  },
  created(){
    console.log(this.userInfo.token);
  }
  
};
</script>

<style lang="css" scoped>
  @import '../../assets/style/style.css';
</style>
