<template>
  <div class="wrapper">
    <headers></headers>
    <div class="main" style=" height:1364px !important;">
      <menus></menus>
    </div>
    <div id="bg" style="background:#fff;">
      <div class="insert">
        <el-form :model="input">
          <el-row type="flex">
            <el-form-item>
              <el-col :span="8">名称</el-col><el-col :span="12"><el-input v-model="input.name"></el-input> </el-col>
            </el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="7">总分类</el-col><el-col :span="12"><el-input v-model="input.totaltype"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">类型</el-col><el-col :span="12"><el-input v-model="input.product_type"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">简介</el-col><el-col :span="12"><el-input v-model="input.introduction"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">单价</el-col><el-col :span="12"><el-input v-model="input.price"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">单位</el-col><el-col :span="12"><el-input v-model="input.priceunit"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">图1</el-col><el-col :span="12"><el-input v-model="input.image1"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">图2</el-col><el-col :span="8"></el-col><el-col :span="12"><el-input v-model="input.image2"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">图3</el-col><el-col :span="12"><el-input v-model="input.image3"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">图4</el-col><el-col :span="12"><el-input v-model="input.image4"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">图5</el-col><el-col :span="12"><el-input v-model="input.image5"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">状态</el-col><el-col :span="12"><el-input v-model="input.state"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">是否删除</el-col><el-col :span="12"><el-input v-model="input.is_del"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">交易方式</el-col><el-col :span="12"><el-input v-model="input.jyfs"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">研发阶段</el-col><el-col :span="12"><el-input v-model="input.yfjd"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">研发方向</el-col><el-col :span="12"><el-input v-model="input.yffx"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">应用方向</el-col><el-col :span="12"><el-input v-model="input.yyfx"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">应用领域</el-col><el-col :span="12"><el-input v-model="input.yyly"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">市场前景</el-col><el-col :span="12"><el-input v-model="input.scqj"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">电子合同</el-col><el-col :span="12"><el-input v-model="input.dzht"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">供需类型</el-col><el-col :span="12"><el-input v-model="input.gxtype"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">服务范围</el-col><el-col :span="12"><el-input v-model="input.fwfw"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">描述</el-col><el-col :span="12"><el-input v-model="input.description"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-row type="flex">
            <el-form-item
              ><el-col :span="8">知识产权</el-col><el-col :span="12"><el-input v-model="input.zscq"></el-input></el-col
            ></el-form-item>
          </el-row>
          <el-form-item>
            <el-col><el-button @click="submit()">submit</el-button></el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import headers from '@/components/headers.vue';
import menus from '@/components/menus2.vue';
export default {
  components: {
    menus,
    headers,
  },
  data() {
    return {
      input: {},
    };
  },
  methods: {
    submit() {
      console.log(this.input);
    },
  },
};
</script>

<style scoped>
.el-row div {
  margin-bottom: 10px;
  font-size: 24px;
}
</style>
