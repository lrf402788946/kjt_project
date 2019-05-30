<template>
  <div class="wrapper">
    <headers></headers>
    <div class="main">
      <menus></menus>
      <div class="list" style="background: #ffffff;min-height:900px;">
        <detailTitle code="addInfo"></detailTitle>
        <div class="insert">
          <el-row>
            <el-col :span="4"></el-col>
            <el-col :span="15">
              <el-form :model="input">
                <el-row>
                  <el-form-item>
                    <el-col :span="8">编号</el-col>
                    <el-col :span="16"><el-input v-model="input.code"></el-input> </el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">大类别</el-col>
                    <el-col :span="16"><el-input v-model="input.dtype"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">小类别</el-col>
                    <el-col :span="16"><el-input v-model="input.xtype"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">名称</el-col>
                    <el-col :span="16"><el-input v-model="input.name"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">拼音</el-col>
                    <el-col :span="16"><el-input v-model="input.pinyin"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">企业logo</el-col>
                    <el-col :span="16"><el-input v-model="input.logo"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">执照</el-col>
                    <el-col :span="16"><el-input v-model="input.license"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">证照图片</el-col><el-col :span="16"></el-col>
                    <el-col :span="12"><el-input v-model="input.file_path"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">操作日期</el-col>
                    <el-col :span="16"><el-input v-model="input.create_date"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">联系方式</el-col>
                    <el-col :span="16"><el-input v-model="input.contact"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">地址</el-col>
                    <el-col :span="16"><el-input v-model="input.addr"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">简介</el-col>
                    <el-col :span="16"><el-input v-model="input.introduction"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">是否显示</el-col>
                    <el-col :span="16"><el-input v-model="input.ishomepage"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">主页地址</el-col>
                    <el-col :span="16"><el-input v-model="input.homepage"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">经度</el-col>
                    <el-col :span="16"><el-input v-model="input.longitude"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">纬度</el-col>
                    <el-col :span="16"><el-input v-model="input.latitude"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">地图信息</el-col>
                    <el-col :span="16"><el-input v-model="input.map_info"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">状态</el-col>
                    <el-col :span="16"><el-input v-model="input.state"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">是否删除</el-col>
                    <el-col :span="16"><el-input v-model="input.is_del"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="8">排序</el-col>
                    <el-col :span="16"><el-input v-model="input.sort"></el-input></el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item>
                    <el-col :span="7"></el-col>
                    <el-col :span="4"><button class="subBtn">提&nbsp;&nbsp;&nbsp;&nbsp;交</button></el-col>
                    <el-col :span="5"></el-col>
                    <el-col :span="4"><button class="resetBtn">重&nbsp;&nbsp;&nbsp;&nbsp;置</button></el-col>
                  </el-form-item>
                </el-row>
              </el-form>
            </el-col>
            <el-col :span="5"></el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
    <footers></footers>
  </div>
</template>
<script>
import headers from '@/components/headers.vue';
import menus from '@/components/userMenus.vue';
import footers from '@/components/footers.vue';
import detailTitle from '@/components/detail/detailTitle.vue';
export default {
  components: {
    menus,
    headers,
    footers,
    detailTitle,
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

<style lang="css" scoped>
.el-row div {
  margin-bottom: 10px;
  font-size: 18px;
}
.insert {
  margin-top: 50px;
  text-align: center;
}
.subBtn{
  width: -webkit-fill-available;
  background: #409EFF;
  color: white;
}
.resetBtn{
  width: -webkit-fill-available;
  color: white;
  background:#909399;
}
</style>
