<template lang="html">
  <div id="property">
    <div class="chanQUan" style="height:180px;">
      <div class="chanQUanL">知识产权</div>
      <div class="chanQUanR" style="height:180px;position: relative;">
        <!-- <%if(product.zscq!'' != ""){%> 此处图片有点击放大效果-->
        <img id="img1" @click="dialogImg(url)" style="width:112px;height:150px;position: absolute; left: 0; top: 0;" :src="img.default" />
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'property',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped></style>
