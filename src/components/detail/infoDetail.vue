<template lang="html">
  <div id="infoDetail">
    <div class="pros" style="height: auto;">
      <div class="leftimg" style="margin: 30px; height: auto;">
        <div id="preview">
          <div class="jqzoom" id="spec-n1" @mouseover="hideZoom = false">
            <!-- <%if(product.image1!'' != ""){%> 图片这部分在视图中使用,否则会变成子组件与子组件之间数据交互,徒增难度 -->
            <vue-photo-zoom-pro
              :hide-zoom="hideZoom"
              style="width: 350px; height: 100%;"
              :scale="2"
              :url="info.logo === null ? img.default : info.logo"
              :out-show="true"
              ref="zoomPhoto"
            >
            </vue-photo-zoom-pro>
          </div>
        </div>
      </div>
      <div class="midinfo" style="height: auto; margin-bottom: 30px;">
        <div class="proname">
          <p>{{ info.name }}</p>
          <div class="lb">
            <span> <b>地址</b>：{{ info.addr }} </span>
            <div class="clear"></div>
          </div>
          <div class="lb">
            <span>
              <b>主页</b>：<a :href="info.homepage"> {{ info.homepage }}</a>
            </span>
            <div class="clear"></div>
          </div>
          <div class="morepro">
            <p class="lb">
              <span></span>
              <span
                >认证状态：
                <!-- <%if(store.state=="1"){%> -->
                <font v-if="info.state === '0'">未认证</font>
                <font v-if="info.state === '1'" style="color:#00c71c;">已认证</font>
                <font v-if="info.state === '2'" style="color:rgb(242, 19, 19)">已拒绝</font>
              </span>
            </p>
            <div class="clear"></div>
            <p>{{ info.introduction }}</p>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoDetail',
  components: {},
  props: {
    info: { type: Object, default: () => {} },
    code: { type: String, default: '' },
  },
  data() {
    return {
      hideZoom: true,
      img: {
        default: require('@a/img/logo.gif'),
      },
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.next{
  float:left;
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
</style>
