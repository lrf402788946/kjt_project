<template lang="html">
  <div id="schoolListPage">
    <div class="wrapper">
      <menus></menus>
      <div class="main" style=" height:1364px !important;">
        <div class="oneleft">
          <ul>
            <li>
              <a href="#"><img src="${contextPath}/WebPages_170421/img/supermarket/keji.jpg" style="vertical-align: middle;" /> 商务分类</a>
            </li>
            <li><a href="${contextPath}/Supermarket/toEnterprisePage?storetype=GXYS">高校院所</a></li>
            <li><a href="">科研院所</a></li>
            <li><a href="${contextPath}/Supermarket/toEnterprisePage?storetype=QYJT">科技企业</a></li>
            <li><a href="${contextPath}/Supermarket/toEnterprisePage?storetype=JGTT">机构团体</a></li>
            <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=YJKF">研发服务</a></li>
            <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=JSCG">技术成果</a></li>
            <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=CXCP">创新产品</a></li>
            <li><a href="${contextPath}/Supermarket/toProductTypePage?producttype=ZXFW">咨询服务</a></li>
            <li><a href="${contextPath}/Talent/toTech">创新人才</a></li>
          </ul>
        </div>
        <div class="list">
          <div class="sou">
            <form class="sout" action="${contextPath}/Supermarket/search?type=ALL" method="post">
              <select name="type">
                <option value="">全部类型</option>
                <option value="">重本大学</option>
                <option value="">二级本科</option>
                <option value="">三级本科</option>
                <option value="">高等专科</option>
              </select>
            </form>
            <form class="soub" action="${contextPath}/Supermarket/search?type=ZGX" method="post">
              <input type="text" name="name" style="width:355px;" placeholder="请输入名称" />
              <button><img :src="img.search" /><span>搜索</span></button>
            </form>
          </div>
          <div style="background:#fff; height:60%;">
            <div class="listtitle">
              <h2>高校院所</h2>
            </div>
            <div class="wai">
              <div style="min-height:925px;">
                <div class="qys">
                  <div class="qyleft" v-for="i in 10" :key="i">
                    <div class="qyleft1">
                      <img :src="img.defalut_gif" />
                    </div>
                    <div class="qyleft2">
                      <div class="qytop">name</div>
                      <div class="qybot">高校网址：<span>www.jlu.edu.cn</span></div>
                      <div class="qybot">高校类别：<span>大学</span></div>
                      <div class="qybot">高校地址：<span>address</span></div>
                    </div>
                  </div>
                  <!-- </span> -->
                </div>
              </div>
              <!--差个分页-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menus from '@/components/menus.vue';
export default {
  name: 'schoolListPage',
  components: {
    menus,
  },
  data() {
    return {
      img: {
        search: require('@/assets/img/search.jpg'),
        defalut_gif: require('@/assets/img/logo.gif'),
      },
    };
  },
  computed: {},
  methods: {
    tim() {
      var date = new Date();
      var seperator1 = '-';
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = '0' + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
      }
      var mydate = new Date();
      var myddy = mydate.getDay();
      var weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      document.getElementById('days').innerHTML = year + seperator1 + month + seperator1 + strDate + '&nbsp;&nbsp;' + weekday[myddy];
    },
  },
};
</script>

<style lang="css">
.main {
    margin: 10px auto;
    width: 1200px;
    height: 1744px !important;
}
.page {
    height: 28px;
    margin-left: 380px;
    margin-top: 30px !important;
}
.qys:nth-child(5) {
    margin-bottom:0px !important;
}
</style>
