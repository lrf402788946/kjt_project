<template lang="html">
  <div id="login">
    <div class="wrapper">
      <headers></headers>
      <div class="contents">
        <div class="mainkjcs">
          <div class="loginboxkjcs">
            <ul class="titkjcs" id="tit">
              <li
                class="tit1kjcs"
                @click="isLogin = true"
                :style="isLogin ? 'color: #0165bb;border-bottom:2px solid #0165bb; ' : 'border-bottom:2px solid #cccccc; color:#ccc;'"
              >
                登 录
              </li>
              <li
                class="tit2kjcs"
                @click="isLogin = false"
                :style="isLogin ? 'border-bottom:2px solid #cccccc; color:#ccc; ' : 'color: #0165bb;border-bottom:2px solid #0165bb;'"
              >
                注 册
              </li>
            </ul>

            <div class="logBox" id="logBox">
              <!--登录页-->
              <div class="smallB" v-if="isLogin">
                <form class="loginn" id="login" style="height:auto;">
                  <input type="hidden" name="kjcsType" value="0" />
                  <div class="name" style="width:500px;">
                    <div class="nameTwo">用户名称</div>
                    <input placeholder="用户名称" v-model="form.login_id" class="rt" />
                  </div>
                  <div class="name" style="width:500px;">
                    <div class="nameTwo">用户名称</div>
                    <input type="password" placeholder="登录密码" class="rt" v-model="form.password" />
                  </div>
                  <div style="position: absolute;">
                    <button type="button" class="btn1" value="立即登录" @click="toLogin()">登&nbsp;&nbsp;&nbsp;录</button>
                  </div>
                  <!-- <button type="button" class="btn1" >取消登录</button> -->
                </form>
              </div>
              <!--注册页-->
              <div v-else>
                <el-form label-position="left" class="zhuce" style="height:auto; width:500px;">
                  <el-form :rules="rules" :model="registerForm" ref="base">
                    <el-row :gutter="19">
                      <el-radio v-model="registerForm.is_qy" label="0" @change="isShow = false" checked border>个人</el-radio>
                      <el-radio v-model="registerForm.is_qy" label="1" @change="isShow = true" border>企业</el-radio>
                    </el-row>
                    <el-row :gutter="19">
                      <el-form-item prop="name">
                        <el-col :span="5">用户名称</el-col>
                        <el-col :span="15"><el-input v-model="registerForm.name"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row :gutter="19">
                      <el-form-item prop="login_id">
                        <el-col :span="5">登录名称</el-col>
                        <el-col :span="15"><el-input v-model="registerForm.login_id"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row :gutter="19">
                      <el-form-item prop="password">
                        <el-col :span="5">设置密码</el-col>
                        <el-col :span="15"><el-input v-model="registerForm.password" show-password></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row :gutter="19">
                      <el-form-item prop="cardnumber">
                        <el-col :span="5">身份证号</el-col>
                        <el-col :span="15"><el-input v-model="registerForm.cardnumber"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row :gutter="19">
                      <el-form-item prop="phone">
                        <el-col :span="5">联系电话</el-col>
                        <el-col :span="15"><el-input v-model="registerForm.phone"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row :gutter="19">
                      <el-form-item prop="addr">
                        <el-col :span="5">地址</el-col>
                        <el-col :span="15"><el-input v-model="registerForm.addr"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row :gutter="19">
                      <el-form-item prop="email">
                        <el-col :span="5">电子邮箱</el-col>
                        <el-col :span="15"><el-input v-model="registerForm.email"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                    <el-row :gutter="19">
                      <el-form-item prop="bgdh">
                        <el-col :span="5">办公电话</el-col>
                        <el-col :span="15"><el-input v-model="registerForm.bgdh"></el-input></el-col>
                      </el-form-item>
                    </el-row>
                  </el-form>
                  <div v-if="isShow">
                    <el-form :model="registerForm" ref="corps" :rules="rulesCorp">
                      <el-row :gutter="19">
                        <el-form-item prop="jglx">
                          <el-col :span="5">机构类型</el-col>
                          <el-col :span="15"><el-input v-model="registerForm.jglx"></el-input></el-col>
                        </el-form-item>
                      </el-row>
                      <el-row :gutter="19">
                        <el-form-item prop="jgmc">
                          <el-col :span="5">机构名称</el-col>
                          <el-col :span="15"><el-input v-model="registerForm.jgmc"></el-input></el-col>
                        </el-form-item>
                      </el-row>
                      <el-row :gutter="19">
                        <el-form-item prop="jgdm">
                          <el-col :span="5">机构代码</el-col>
                          <el-col :span="15"><el-input v-model="registerForm.jgdm"></el-input></el-col>
                        </el-form-item>
                      </el-row>
                      <el-row :gutter="19">
                        <el-form-item prop="jgxz">
                          <el-col :span="5">机构性质</el-col>
                          <el-col :span="15"><el-input v-model="registerForm.jgxz"></el-input></el-col>
                        </el-form-item>
                      </el-row>
                      <el-row :gutter="19">
                        <el-col :span="5">机构代码证</el-col>
                        <el-col :span="15">
                          <el-upload
                            class="avatar-uploader"
                            action="/kjcs/home/common/upload/"
                            accept="image/jpeg,image/gif,image/png"
                            :show-file-list="false"
                            :on-success="imgQyHandleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                          >
                            <img v-if="imgsrc_qy" :src="imgsrc_qy" class="avatar" />
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                          </el-upload>
                        </el-col>
                      </el-row>
                    </el-form>
                  </div>
                  <div v-else>
                    <el-form :model="registerForm" ref="selfs" :rules="rulesSelf">
                      <el-row :gutter="19">
                        <el-form-item prop="grjj">
                          <el-col :span="5">个人简介</el-col>
                          <el-col :span="15"><el-input v-model="registerForm.grjj"></el-input></el-col>
                        </el-form-item>
                      </el-row>
                      <el-row :gutter="19">
                        <el-form-item prop="zyly">
                          <el-col :span="5">专业领域</el-col>
                          <el-col :span="15"><el-input v-model="registerForm.zyly"></el-input></el-col>
                        </el-form-item>
                      </el-row>

                      <el-row :gutter="19">
                        <el-col :span="5">身份证正面</el-col>
                        <el-col :span="15">
                          <el-upload
                            class="avatar-uploader"
                            action="/kjcs/home/common/upload/"
                            accept="image/jpeg,image/gif,image/png"
                            :show-file-list="false"
                            :on-success="
                              res => {
                                handleAvatarSuccess(res, 'cardZ');
                              }
                            "
                            :before-upload="beforeAvatarUpload"
                          >
                            <img v-if="imgsrc_a" :src="imgsrc_a" class="avatar" />
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                          </el-upload>
                        </el-col>
                      </el-row>

                      <el-row :gutter="19">
                        <el-col :span="5">身份证背面</el-col>
                        <el-col :span="15">
                          <el-upload
                            class="avatar-uploader"
                            action="/kjcs/home/common/upload/"
                            accept="image/jpeg,image/gif,image/png"
                            :show-file-list="false"
                            :on-success="
                              res => {
                                handleAvatarSuccess(res, 'cardZ');
                              }
                            "
                            :before-upload="beforeAvatarUpload"
                          >
                            <img v-if="imgsrc_b" :src="imgsrc_b" class="avatar" />
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                          </el-upload>
                        </el-col>
                      </el-row>
                    </el-form>
                  </div>
                  <el-row :gutter="19">
                    <el-col :span="19">
                      <button type="button" class="btn11" @click="toRegister('base')">注&nbsp;&nbsp;&nbsp;册</button>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footers></footers>
    </div>
  </div>
</template>

<script>
import headers from '@/components/headers.vue';
import footers from '@/components/footers.vue';
import { mapActions } from 'vuex';
export default {
  name: 'login',
  components: {
    headers,
    footers,
  },
  data() {
    return {
      form: {},
      registerForm: { is_qy: '0' },
      isLogin: this.$route.query.type === '0',
      isShow: false,
      imgsrc_a: '',
      imgsrc_b: '',
      imgsrc_qy: '',
      rules: {
        name: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
        login_id: [{ required: true, message: '请输入登录名称', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        cardnumber: [{ required: true, message: '请输入身份证号', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
        addr: [{ required: true, message: '请输入地址', trigger: 'blur' }],
        email: [{ required: true, message: '请输入电子邮箱', trigger: 'blur' }],
        bgdh: [{ required: true, message: '请输入办公电话', trigger: 'blur' }],
      },
      rulesCorp: {
        jglx: [{ required: true, message: '请输入机构类型', trigger: 'blur' }],
        jgmc: [{ required: true, message: '请输入机构名称', trigger: 'blur' }],
        jgdm: [{ required: true, message: '请输入机构代码', trigger: 'blur' }],
        jgxz: [{ required: true, message: '请输入机构性质', trigger: 'blur' }],
      },
      rulesSelf: {
        zyly: [{ required: true, message: '请输入专业领域', trigger: 'blur' }],
      },
    };
  },
  created() {},
  methods: {
    // 登录方法
    ...mapActions(['login']),
    async toLogin() {
      if (this.form.login_id && this.form.login_id !== '' && (this.form.password && this.form.password !== '')) {
        let { result } = await this.login({ login_id: this.form.login_id, password: this.form.password });
        if (result) {
          this.$router.push({ path: '/' });
        }
      }
    },
    // 注册方法
    ...mapActions(['register']),
    toRegister(formName) {
      console.log(formName);
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          if (formName === 'base') {
            console.log('in function:if');
            this.toRegister(`${this.registerForm.is_qy}` === '0' ? 'selfs' : 'corps');
          } else {
            console.log('in function:else =>thisRegister');
            this.thisRegister();
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async thisRegister() {
      let { result } = await this.register({ data: this.registerForm });
      if (result) {
        console.log('注册成功');
        //this.$router.push({ path: '/login' });
        this.registerForm = { is_qy: '0' };
        this.$set(this, 'isLogin', true);
      }
    },
    // 上传前处理
    async beforeAvatarUpload(file) {
      const isIMAGE = file.type === 'image/jpeg' || 'image/gif' || 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isIMAGE) {
        this.$message.error('上传文件只能是图片格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }

      return isIMAGE && isLt2M;
    },
    // 操作成功后处理
    async handleAvatarSuccess(res, file) {
      console.log(res.msg);
      this.registerForm.cardfile_a = res.msg;
      this.imgsrc_a = URL.createObjectURL(file.raw);
    },
    // 操作成功后处理
    async cardHandleAvatarSuccess(res, file) {
      this.registerForm.cardfile_b = res.msg;
      this.imgsrc_b = URL.createObjectURL(file.raw);
    },

    async imgQyHandleAvatarSuccess(res, file) {
      this.registerForm.img_qy = res.msg;
      this.imgsrc_qy = URL.createObjectURL(file.raw);
    },
  },
};
</script>

<style lang="css" scoped>
@import '../assets/style/login.css';
</style>
<style lang="less" scoped>
.el-icon-plus {
  line-height: 6rem;
}
.el-form-item {
  .el-col {
    font-size: 1rem;
  }
}
</style>
