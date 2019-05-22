<template lang="html">
  <div id="schoolListPage">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus></menus>
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
              <b-pagination
                style="padding-left: 30%;padding-top: 3%"
                v-model="currentPage"
                :total-rows="200"
                :limit="5"
                :per-page="5"
                @change="toSearch"
                first-text="首页"
                prev-text="<"
                next-text=">"
                last-text="末页"
              ></b-pagination>
            </div>
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
import menus from '@/components/menus.vue';
import footers from '@/components/footers.vue';
export default {
  name: 'schoolListPage',
  metaInfo: {
    title: '科技超时-高校院所',
  },
  components: {
    menus,
    headers,
    footers,
  },
  data() {
    return {
      img: {
        search: require('@/assets/img/search.jpg'),
        defalut_gif: require('@/assets/img/logo.gif'),
      },
      currentPage: 1,
      totalRow: 20,
      skip: 0,
    };
  },
  computed: {},
  methods: {
    toSearch(item) {
      console.log('in function:');
      console.log(item);
    },
  },
};
</script>

<style lang="css" scoped>
.main {
    margin: 10px auto;
    width: 1200px;
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
