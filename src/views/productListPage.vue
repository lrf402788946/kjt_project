<template lang="html">
  <div id="productPage">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus></menus>
        <div class="list">
          <div class="sou">
            <form class="sout" action="${contextPath}/Supermarket/search?type=ALL" method="post">
              <select name="type">
                <option value="ZCP">全部产品</option>
                <option value="YJKF">研发服务</option>
                <option value="JSCG">技术成果</option>
                <option value="CXCP">创新产品</option>
                <option value="ZXFW">咨询服务</option>
              </select>
            </form>
            <form class="soub" action="${contextPath}/Supermarket/search?type=ZGX" method="post">
              <input type="text" name="name" style="width:355px;" placeholder="请输入名称" />
              <button><img :src="img.search" /><span>搜索</span></button>
            </form>
          </div>
          <div style="background:#fff; min-height:1070px;padding-bottom: 5%;">
            <div class="listtitle" style="border:none;">
              <h2>产品展示</h2>
            </div>
            <div style=" min-height:932px;">
              <div class="cps">
                <div class="cp" v-for="(item, index) in 16" :key="index">
                  <a href="${contextPath}/Supermarket/toSupplydemandDetailsPage?id=${product.id!''}">
                    <img src="${contextPath}/imageFile/getImage?imagePath=${product.image1!''}" />
                  </a>
                  <div class="wordInfo">
                    <span
                      style="height: 25px; line-height: 35px; width:200px; padding:0 10px 0 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                      >aaaaaaa</span
                    >
                    <div
                      style="height:20px; color:#63636d; line-height:20px; width:80px; text-align:right; float:right; padding-right:6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                    >
                      金属不知
                    </div>
                    <div
                      style="height:20px; color:red; line-height:20px; width:120px;float:left; padding-left:6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                    >
                      ￥500元/个
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <b-pagination
              style="padding-left: 30%;padding-top: 3%;"
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
  name: 'productPage',
  metaInfo: {
    title: '科技超时-产品列表',
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
  methods: {},
};
</script>

<style lang="css" scoped>
.wordInfo{
    width: 220px;
    background-color: #f3f3f3;
    height: 55px;
}
.wordInfo span:first-child {
    color: #63636d;
    padding: 10px;
}
.wordInfo span {
    font-size: 14px;
    display: inline-block;
}
.cp{
    height: 223px;
    width: 220px;
    float: left;
    margin: 0 10px 10px 0;
}
.cp img {
    height: 168px;
    width: 220px;
    display: block;
}
.cp a {
    height: 168px;
    width: 220px;
    display: block;
}
.cps {
    margin: 20px 10px;
}
</style>
