<template lang="html">
  <div id="property">
    <div class="chanQUan" style="height:180px;">
      <div class="chanQUanL">{{ title }}</div>
      <div class="chanQUanR" style="height:180px;position: relative;">
        <!-- <%if(product.zscq!'' != ""){%> 此处图片有点击放大效果-->
        <img id="img1" @click="dialogImg()" style="width:112px;height:150px;position: absolute; left: 0; top: 0;" :src="img" />
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: 'property',
  components: {},
  props: {
    img: { type: String, default: '' },
    title: { type: String, default: '知识产权' },
  },
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: '',
    };
  },
  computed: {},
  methods: {
    dialogImg(im) {
      this.$set(this, `dialogImageUrl`, this.img);
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="css" scoped>
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
</style>
