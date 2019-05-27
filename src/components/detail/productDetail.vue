<template lang="html">
  <div id="productDetail">
    <div class="pros" style="height: auto;">
      <div class="leftimg" style="margin: 30px; height: auto;">
        <div id="preview">
          <div class="jqzoom" id="spec-n1" @mouseover="hideZoom = false">
            <!-- <%if(product.image1!'' != ""){%> 图片这部分在视图中使用,否则会变成子组件与子组件之间数据交互,徒增难度 -->
            <vue-photo-zoom-pro :hide-zoom="hideZoom" style="width: 350px; height: 100%;" :scale="2" :url="zoomPhoto" :out-show="true" ref="zoomPhoto">
            </vue-photo-zoom-pro>
          </div>
          <picScroll :picList="urls" @changePic="changePic"></picScroll>
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
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import picScroll from '@/components/detail/picScroll.vue';
export default {
  name: 'productDetail',
  components: {
    picScroll,
  },
  data() {
    return {
      hideZoom: true,
      urls: [
        { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558417130414&di=461b92870c4b1f6724c2bc0366fd4134&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F68%2F59%2F71X58PICNjx_1024.jpg',
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1393987749,3422146058&fm=26&gp=0.jpg',
        },
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558417529592&di=1de4aec402d70be5ca02479aa713a234&imgtype=0&src=http%3A%2F%2Fpic40.nipic.com%2F20140412%2F18428321_144447597175_2.jpg',
        },
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558417529592&di=22b695e3c2a4af301fd62978e093f090&imgtype=0&src=http%3A%2F%2Fpic37.nipic.com%2F20140113%2F8800276_184927469000_2.png',
        },
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558417529592&di=b4aff6eed8be58d25830e4dbeedde5a0&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110628%2F1369025_192645024000_2.jpg',
        },
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558417529592&di=61c65294ae76cdc2985f979a7ea9d4cf&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fsjbbs%2F7692%2Fa7691515_s.jpg',
        },
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558417529591&di=c6f8a87fdcb3202965198c163def08c6&imgtype=0&src=http%3A%2F%2Fpic53.nipic.com%2Ffile%2F20141115%2F9448607_175255450000_2.jpg',
        },
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558417529591&di=55198cd43f8de5b3e3ff893d39bb8912&imgtype=0&src=http%3A%2F%2Fpic35.nipic.com%2F20131115%2F13972544_160943053001_2.jpg',
        },
      ],
    };
  },
  computed: {
    zoomPhoto: {
      get() {
        return this.urls[0].url;
      },
      set(newValue) {
        this.$refs.zoomPhoto.url = this.urls[newValue].url;
      },
    },
  },
  methods: {
    changePic(index) {
      this.zoomPhoto = index;
    },
  },
};
</script>

<style lang="css" scoped>
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
</style>
