<template lang="html">
  <div id="supermarketPages">
    <div class="wrapper">
      <div class="main">
        <div class="partone">
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
          <div class="oneright">
            <div class="sou">
              <form class="sout" action="${contextPath}/Supermarket/search?type=ALL" method="post">
                <input type="text" name="name" placeholder="输入产品关键字" />
                <button><img src="${contextPath}/WebPages_170421/img/homepage/search.jpg" /><span>产品</span></button>
              </form>
              <form class="soub" action="${contextPath}/Supermarket/search?type=ZGX" method="post">
                <input type="text" name="name" placeholder="输入供需关键字" />
                <button><img src="${contextPath}/WebPages_170421/img/homepage/search.jpg" /><span>供求</span></button>
              </form>
            </div>
          </div>
          <div class="more">
            <div class="tab">
              <ul class="title" id="title">
                <li class="active" alt="ZJS"><a href="#">技术供求</a><span></span></li>
                <li alt="ZCP"><a href="#">产品供求</a><span></span></li>
                <li alt="ZFW"><a href="#">服务供求</a><span></span></li>
                <li alt="ZRC"><a href="${contextPath}/Talent/toTech">人才供求</a></li>
              </ul>
              <div style="float:left; height:60px; line-height:60px;">
                <a id="zBtn" style="float:left; height:60px; line-height:60px;" href="${contextPath}/Supermarket/search?type=ZJS&totaltype=0"
                  ><span class="spand"></span><span class="spand"></span><span class="spand"></span
                ></a>
              </div>
              <div class="content" id="content">
                <div class="contentlist">
                  <div class="js">
                    <ul>
                      <li v-for="i in 8" :key="i">
                        <a href="${contextPath}/Supermarket/toProductDetailsPage?id=${product.id}">
                          <p>此处循环产品名</p>
                          <p>技术类型：此处循环技术类型<span>日期：此处循环日期</span></p>
                          <p>价格：￥(此处循环价格)元/$(此处循环商品质量单位)</p>
                        </a>
                      </li>
                      <!--  <li class="chak" ><a href="${contextPath}/Supermarket/search?type=ZJS&totaltype=1">查看更多> </a></li> -->
                    </ul>
                  </div>
                </div>
                <div class="contentlist">
                  <div class="pro">
                    <a href="${contextPath}/Supermarket/toProductDetailsPage?id=${product.id}">
                      <img src="${contextPath}/imageFile/getImage?imagePath=${product.image1!''}" />
                      <img src="${contextPath}/WebPages_170421/img/supermarket/d1.gif" />
                      <div class="proinfo">
                        <p>此处产品名</p>
                        <div
                          style="float: left; color: red; max-width: 120px; overflow: hidden; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-left: 6px;"
                        >
                          a
                        </div>
                        <div style="float:right; padding-right:6px;">
                          a
                        </div>
                        <!-- <p class="p4">${product.createDate!''}</p> -->
                      </div>
                    </a>
                  </div>
                  <!-- <li class="chak" ><a href="${contextPath}/Supermarket/search?type=ZCP&totaltype=0">查看更多> </a></li> -->
                </div>

                <div class="contentlist">
                  <ul class="fw">
                    <li>
                      <a href="${contextPath}/Supermarket/toProductDetailsPage?id=${product.id}">
                        <span>aaaa</span>
                        <span>服务类型：aaaaaa</span>
                        <span>￥aaaaaa</span><span>aaaaa</span>
                      </a>
                    </li>
                    <!-- <li class="chak" ><a href="${contextPath}/Supermarket/search?type=ZFW&totaltype=2">查看更多> </a></li> -->
                  </ul>
                </div>
                <div class="contentlist">
                  正在跳转请稍后...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parttwo">
          <h2>
            最新发布
            <a href="${contextPath}/Supermarket/search?type=ZGX">
              <div></div>
              <div></div>
              <div></div
            ></a>
            <a href="${contextPath}/productUser/toindex?typeCode=1&kjcsType=0" target="_blank">
              <span>我要发布</span>
            </a>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
