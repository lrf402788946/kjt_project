<template lang="html">
  <div id="productDetails">
    <div class="wrapper">
      <headers></headers>
      <div class="main">
        <menus>
          <div class="riginfo">
            <div class="simils" style="margin-top: 20px; margin-left:20px; width:200px;">
              <p><span></span>相似产品<span></span></p>
            </div>
            <div class="similpro">
              <dl class="dlR">
                <!-- <%if(isSupplydemand!'' == 1){%> -->
                <a v-if="i === 1" href="${contextPath}/Supermarket/toSupplydemandDetailsPage?id=${productxs.id!''}">
                  <dt><img :src="img.default" /></dt>
                  <dd>
                    <div class="ddName">${productxs.name!''}</div>
                    <div class="ddPrice">
                      <div class="priceL">${productxs.price!''}</div>
                      <div class="priceR">机械</div>
                    </div>
                  </dd>
                </a>
                <a v-if="i === 2" href="${contextPath}/Supermarket/toProductDetailsPage?id=${productxs.id!''}">
                  <dt><img :src="img.default" /></dt>
                  <dd>
                    <div class="ddName">${productxs.name!''}</div>
                    <div class="ddPrice">
                      <div class="priceL">${productxs.price!''}</div>
                      <div class="priceR">机械</div>
                    </div>
                  </dd>
                </a>
              </dl>
              <p v-if="i === 3">没找到相似产品</p>
            </div>
          </div>
        </menus>
        <div class="list">
          <div v-if="listTitle === 1" class="listtitle">
            <span>供需详情</span>
          </div>
          <div v-else class="listtitle"><span>产品详情</span></div>
          <div class="pros" style="height: auto;">
            <div class="leftimg" style="margin: 30px; height: auto;">
              <div id="preview">
                <!--包含图片插件,之后做-->
                <div class="jqzoom" id="spec-n1">
                  <!-- <%if(product.image1!'' != ""){%> -->
                  <img
                    style="width: 350px; height: 350px;"
                    src="${contextPath}/imageFile/getImage?imagePath=${product.image1!''}"
                    jqimg="${contextPath}/imageFile/getImage?imagePath=${product.image1!''}"
                  />
                </div>
              </div>
            </div>
            <div class="midinfo" style="height: auto; margin-bottom: 30px;">
              <div class="proname">
                <p>${product.name!''}</p>
                <div class="lb">
                  <span><b>类别</b>：XXXX</span><span>上架时间：2019-01-01</span>
                  <div class="clear"></div>
                </div>
                <div class="price">
                  <p>收费标准：<span>￥500元/个</span></p>
                </div>
                <div class="morepro">
                  <p class="lb">
                    <span>所属企业：${store.name!''}</span>
                    <span
                      >认证状态：
                      <!-- <%if(store.state=="1"){%> -->
                      <font style="color:#00c71c;">已认证</font>
                      未认证
                    </span>
                  </p>
                  <div class="clear"></div>
                  <p>${product.introduction!''}</p>
                  <!-- <p>
                    南京明睿CSI-II型锻造炉前铁水分析仪，非专业人员经简单培训即可操作。成分测定完毕，用户可以根据产品要求的碳、硅、锰含量修改目标值重新计算合金的调整加入量，使调整后的铁水成分更能满足产品要求。测定孕育后灰铸铁铁水抗拉强度和硬度，结果精度更高。
                  </p>
                  <p>
                    用于炉前快速测定灰铸铁和球墨铸铁铁水的碳当量（CE）、碳含量（C%）、硅含量（Si%）、锰含量（Mn%）；预测普通灰铸铁的抗拉强度等。非专业人员经简单培训即可操作；设有多条检测线（即材质或产品名称，用户可根据本公司的实际情况任意添加），针对不同牌号的铁水以及各厂的实际情况选择恰当的检测线，可使检测结果更准确。
                  </p> -->
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="chanQUan" style="height:180px; z-index:9999;">
            <div class="chanQUanL">知识产权</div>
            <div class="chanQUanR" style="height:180px; z-index:9999; position: relative;">
              <!-- <%if(product.zscq!'' != ""){%> 此处图片有点击放大效果-->
              <img
                id="img1"
                style="width:112px;height:150px;z-index:9999; position: absolute; left: 0; top: 0;"
                src="${contextPath}/imageFile/getImage?imagePath=${product.zscq!''}"
              />
            </div>
          </div>
          <div style="clear:both;"></div>
          <div class="rightInput" style="height: 197px;margin-left: 30px;">
            <div class="inputTxt">
              产品参数
            </div>
            <div class="write">
              <input class="writeInpt writeBg" value="参数名称" />
              <input class="writeInpt writeBg" value="参数内容" style="border-right: none;" />
              <span v-for="i in 10" :key="i">
                <input class="writeInpt" name="argsName" value="name" />
                <input class="writeInpt" name="argsMemo" value="memo" style="border-right: none;" />
              </span>
            </div>
          </div>
          <div style="clear:both;"></div>
          <div class="rightInput" style="margin-left: 30px;margin-top: 30px;">
            <div class="inputTxt">
              交易方式
            </div>
            <div class="selt">
              <div class="seltOne">
                转让
              </div>
              <div class="seltOne">
                公用
              </div>
            </div>
          </div>
          <div class="botDashed"></div>
          <div class="listtitle3">
            <div v-if="list3 === 1" class="logoin" style="margin-top:108px;">
              <h2 onclick="logoin()">
                登录后查看信息
                <div class="jiao"></div>
              </h2>
              <!-- <input type="button" class="rt" onclick="logoin()" value="登录后查看信息"> -->
            </div>
            <!-- <%}else if(type == 2){%> -->
            <div v-if="list3 === 2" class="logoin" style="margin-top:108px;">
              <h2 onclick="shenqing1()">
                发起交易申请
                <div class="jiao"></div>
              </h2>
              <!-- <input type="button" class="rt" onclick="shenqing1()" value="发起交易申请"> -->
            </div>
            <!-- <%}else if(type == 3){%> -->
            <div v-if="list3 === 3" class="logoin" style="margin-top:108px;">
              <h2 onclick="">交易申请审核中..</h2>
              <!-- <input type="button" class="rt" onclick="" value="交易申请审核中.."> -->
            </div>
            <!-- <%}else if(type == 4){%> -->
            <div v-if="list3 === 4" class="tel">
              <div class="phone">
                <p class="ming">联系电话：</p>
                <p class="hao">${store.contact!''}</p>
              </div>
              <div class="phone">
                <p class="ming dizhi">联系地址：</p>
                <p class="hao">${store.addr!''}</p>
              </div>
            </div>
            <!-- <%}else if(type == 5){%> -->
            <div v-if="list3 === 5" class="logoin" style="margin-top:108px;">
              <h2 onclick="shenqing2()">交易申请未通过</h2>
              <!-- <input type="button" class="rt" onclick="shenqing2()" value="交易申请未通过"> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from '@/components/headers.vue';
import menus from '@/components/menus.vue';
export default {
  name: 'productDetails',
  components: {
    menus,
    headers,
  },
  data() {
    return {
      img: {
        default: require('@a/img/logo.gif'),
      },
      i: 2,
      listTitle: 1,
      list3: 1,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.riginfo{
  font-size: 14px;
}
.riginfo{
	float: left;
	width: 240px;
	height: 750px;
	color: #555;
	background: #fff;
}
.simils span{
	width: 60px;
	height: 1px;
	display:block;
	background-color: #c2c2c2;
}
.simils span:nth-child(1){
	float: left;
	margin:30px 12px 10px 0;
}
.simils span:nth-child(2){
	float: right;
	margin:30px 0 10px 8px;
}
.similpro dl a:nth-child(n+3) {display:none; }
.similpro dl a{
	margin-bottom:20px;
}
.similpro{
	width: 220px;
    margin: 20px 0 20px 10px;
	color: #a3a3a3;
}
.ddName{
	width: 220px;
	height: 30px;
	line-height:30px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color:#60636d;
	text-indent: 10px;
}
.ddPrice{
	width: 200px;
	height: 30px;
	padding-left:10px;
}
.priceL{
	float:left;
	color:#ff0000;
}
.priceR{
	float:right;
	color:#215299;
}
.listtitle{
  margin-left:0px;
}
.listtitle span{
	width: 135px;
	height: 60px;
	background-color: #22529a;
	color: #fff;
	text-align: center;
	line-height: 60px;
	font-size: 17px;
	display: block;
}
.list {
    width: 950px;
    background-color: #fff;
    margin-top: 10px;
    float: left;
    margin-bottom: 10px;
    height: 90%;
}
.pros{
	height:485px;
}
.leftimg{
	width: 350px;
	height: 437px;
	margin:30px 30px 0 30px;
	float: left;
}
.midinfo{
	width: 520px;
	height: 438px;
	float: left;
	margin-top: 30px;
	color: #555;
	font-size: 16px;
}
.lb{
	width: 520px;
	margin-bottom: 20px;
	height: 20px;
}
.lb span:nth-child(1){
	float: left;
}
.lb span:nth-child(2){
	float: right;
}
.price{
	height: 58px;
	width: 520px;
	background-color: #f2f2f2;
	line-height: 58px;
	padding-left: 20px;
	margin-bottom: 20px;
}
.price span{
	font-size: 28px;
	color: #fe0000;
}
.chanQUan{
	width: 900px;
	height: 662px;
	border-top:1px dashed #ccc;
	margin-left:30px;
}
.chanQUanL{
	float:left;
	width:86px;
	height:100px;
	line-height:100px;
	font-size:16px;
	color:#888888;
}
.chanQUanR{
	margin-top:30px;
	float:left;
	width:451px;
	height:601px;
	cursor: pointer;
}
.chanQUanR img {
	width:451px;
	height:601px;
	cursor: pointer;
}
.write{
	width:439px;
	height: auto;
	float: left;
	border: 1px solid #ccc;
	font-size: 18px;
}
.writeBg{
	background: #f3f3f3 !important;
}
.writeInpt{
	width: 218px;
	height:39px;
	line-height: 40px;
	float: left;
	border: none;
	border-right: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	text-align: center;
	font-size: 18px;
}
.rightInput{
	height: 40px;
	margin-bottom: 30px;
}
.inputTxt{
	width: 86px;
	height: 40px;
	line-height: 40px;
	float: left;
	font-size: 18px;
	color: #888888;
}
.selt{
	width: 300px;
	height:40px;
	line-height: 40px;
	float: left;

}
.seltOne{
	width: 80px;
	height:40px;
	line-height: 40px;
	font-size: 18px;
	text-align: center;
	color: #fff;
	float: left;
	margin-right: 10px;
	background: #215299;
	cursor:pointer;
}
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
