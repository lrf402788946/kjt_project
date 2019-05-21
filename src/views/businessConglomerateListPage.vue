<template lang="html">
  <div id="businessConglomerateListPage">
    <div class="wrapper">
      <headers></headers>
      <div class="main" style=" height:1364px !important;">
        <menus></menus>
        <div class="list">
          <div class="sou">
            <form class="sout" action="${contextPath}/Supermarket/search?type=ALL" method="post">
              <select name="type">
                <option value="全部企业">全部企业</option>
                <option value="国有企业">国有企业</option>
                <option value="集体所有制">集体所有制</option>
                <option value="私营企业">私营企业</option>
                <option value="股份制企业">股份制企业</option>
              </select>
            </form>
            <form class="soub" action="${contextPath}/Supermarket/search?type=ZGX" method="post">
              <input type="text" name="name" style="width:355px;" placeholder="请输入名称" />
              <button><img src="${contextPath}/WebPages_170421/img/homepage/search.jpg" /><span>搜索</span></button>
            </form>
          </div>

          <div style="background:#fff; min-height:1070px;padding-bottom: 5%;">
            <div class="listtitle">
              <h2>科技企业</h2>
            </div>
            <div class="wai">
              <div style="min-height:200px;" v-for="i in 5" :key="i">
                <div class="qys">
                  <div class="qyright">
                    <div class="qytopOne">
                      <div class="qytop">公司名</div>
                      <div class="adrs">
                        <img src="${contextPath}/WebPages_170421/img/dingwei.gif" />
                        <span>定位</span>
                      </div>
                    </div>
                    <div class="qycenter">
                      <div class="qycenOne">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：<span>商店地址</span></div>
                    </div>
                    <div class="qycenter">
                      <div class="qycenOne">
                        <div style=" float:left;">企业简介：</div>
                        <span class="jianjie">企业介绍</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 此处为判断 -->
                <!-- <p style="width: 1118px; padding-left:20px;  height: 600px; margin: 33px 0 0 0;">无相关企业</p> -->
              </div>
            </div>
            <b-pagination
              id="fanye"
              style="padding-left: 30%;padding-top: 20px;"
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
      <footers></footers>
    </div>
  </div>
</template>

<script>
import headers from '@/components/headers.vue';
import menus from '@/components/menus.vue';
import footers from '@/components/footers.vue';
export default {
  name: 'businessConglomerateListPage',
  components: {
    menus,
    headers,
    footers,
  },
};
</script>
