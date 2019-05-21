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
                <form class="loginn" id="login" action="${contextPath}/productUser/login" method="post" style="height:auto;">
                  <input type="hidden" name="kjcsType" value="0" />
                  <div class="name" style="width:500px;">
                    <div class="nameTwo">用户名称</div>
                    <input name="userName" placeholder="用户名称" type="text" class="rt" id="login_user" onkeyup="nameEnter(event);" />
                  </div>
                  <div class="name" style="width:500px;">
                    <div class="nameTwo">用户名称</div>
                    <input type="password" name="userPwd" placeholder="登录密码" class="rt" id="login_psw" onkeyup="pwdEnter(event);" />
                  </div>
                  <div style="position: absolute;">
                    <button type="button" class="btn1" value="立即登录" @click="login()">登&nbsp;&nbsp;&nbsp;录</button>
                  </div>
                  <!-- <button type="button" class="btn1" >取消登录</button> -->
                </form>
              </div>
              <!--注册页-->
              <div class="smallB" v-else>
                <form class="zhuce" action="${contextPath}/productUser/register" id="toRegister" role="form" method="post" style="height:auto; width:500px;">
                  <input type="hidden" name="kjcsType" value="0" />
                  <div class="name1" style="width:210px;">
                    <div style="float: left;">个人</div>
                    <input
                      style="float: left; margin:0 10px 0 8px;"
                      placeholder="用户名称"
                      id="isQy1"
                      name="isQy"
                      type="radio"
                      value="0"
                      class="qyRadio"
                      checked
                    />
                    <div style="float: left; padding-left: 40px;">企业</div>
                    <input style="float: left; margin:0 10px 0 8px;" placeholder="用户名称" id="isQy2" name="isQy" type="radio" value="1" class="qyRadio" />
                  </div>
                  <div class="name1" style="width:500px;">
                    <div class="nameTwo">用户名称</div>
                    <input style="float:left;" placeholder="用户名称" id="name" name="name" type="text" class="rt1" />
                  </div>
                  <div class="name1" style="width:500px;">
                    <div class="nameTwo">登录名称</div>
                    <input placeholder="登录名称" id="loginName" name="loginName" type="text" class="rt1" />
                  </div>
                  <div class="name1" style="width:500px;">
                    <div class="nameTwo">设置密码</div>
                    <input placeholder="设置密码" id="loginPwd" name="loginPwd" type="password" class="rt1" />
                  </div>
                  <div class="name1" style="width:500px;">
                    <div class="nameTwo">确认密码</div>
                    <input placeholder="确认密码" id="loginPwd2" name="loginPwd2" type="password" class="rt1" />
                  </div>
                  <div class="name1" style="width:500px;">
                    <div class="nameTwo">身份证号</div>
                    <input placeholder="身份证号" id="cardnumber" name="cardnumber" type="text" class="rt1" />
                  </div>
                  <div class="name1" style="width:500px;">
                    <div class="nameTwo">联系电话</div>
                    <input placeholder="联系电话" id="phone" name="phone" type="text" class="rt1" />
                  </div>
                  <div class="name1" style="width:500px;">
                    <div class="nameTwo">地址</div>
                    <input placeholder="地址" id="addr" name="addr" type="text" class="rt1" />
                  </div>
                  <div class="name1" style="width:500px;">
                    <div class="nameTwo">电子邮箱</div>
                    <input placeholder="电子邮箱" id="email" name="email" type="text" class="rt1" />
                  </div>
                  <div class="name1" style="width:500px;">
                    <div class="nameTwo">办公电话</div>
                    <input placeholder="办公电话" id="bgdh" name="bgdh" type="text" class="rt1" />
                  </div>
                  <div class="name1 grDiv" style="width:500px;">
                    <div class="nameTwo">个人简介</div>
                    <input placeholder="个人简介" id="grjj" name="grjj" type="text" class="rt1" />
                  </div>
                  <div class="name1 grDiv" style="width:500px;">
                    <div class="nameTwo">专业领域</div>
                    <input placeholder="专业领域" id="zyly" name="zyly" type="text" class="rt1" />
                  </div>

                  <div class="name1 grDiv" style="height:100px;">
                    <div id="fileDiv1"></div>

                    <div style=" width:500px; height:100px;">
                      <div style="float:left; color:#666; margin-right: 10px;">身份证正面</div>
                      <div style="float:left;margin-right: 10px;" id="demo1"></div>

                      <img src="/WebPages_170421/img/addBg.png" style="width:100px;float:left; height:100px; border:none;cursor: pointer;" id="test1" />
                    </div>
                  </div>

                  <div class="name1 grDiv" style="height:100px;">
                    <div id="fileDiv2"></div>
                    <div style=" width:500px; height:100px;">
                      <div style="float:left; color:#666; margin-right: 10px;">身份证背面</div>
                      <div style="float:left;margin-right: 10px;" id="demo2"></div>

                      <img src="/WebPages_170421/img/addBg.png" style="width:100px;float:left; height:100px; cursor: pointer; border:none;" id="test2" />
                    </div>
                  </div>

                  <div class="name1 qyDiv" style="width:500px;">
                    <div class="nameTwo">机构类型</div>
                    <input placeholder="机构类型" id="jglx" name="jglx" type="text" class="rt1" />
                  </div>
                  <div class="name1 qyDiv" style="width:500px;">
                    <div class="nameTwo">机构名称</div>
                    <input placeholder="机构名称 " id="jgmc" name="jgmc" type="text" class="rt1" />
                  </div>
                  <div class="name1 qyDiv" style="width:500px;">
                    <div class="nameTwo">机构代码</div>
                    <input placeholder="组织机构代码 " id="jgdm" name="jgdm" type="text" class="rt1" />
                  </div>
                  <div class="name1 qyDiv" style="width:500px;">
                    <div class="nameTwo">机构性质</div>
                    <input placeholder="机构性质" id="jgxz" name="jgxz" type="text" class="rt1" />
                  </div>
                  <div class="name1 qyDiv" style="height:100px;">
                    <div id="fileDiv3"></div>

                    <div style=" width:500px; height:100px;">
                      <div style="float:left; color:#666; margin-right: 10px;">机构代码证</div>
                      <div style="float:left;margin-right: 10px;" id="demo3"></div>

                      <img src="/WebPages_170421/img/addBg.png" style="width:100px;float:left; cursor: pointer; height:100px; border:none;" id="test3" />
                    </div>
                  </div>
                  <div style="position: absolute;">
                    <button type="submit" class="btn11" onclick="return verify()">注&nbsp;&nbsp;&nbsp;册</button>
                  </div>
                </form>
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
export default {
  name: 'login',
  props: {
    msg: String,
  },
  components: {
    headers,
    footers,
  },
  data() {
    return {
      isLogin: this.$route.query.type === '0',
    };
  },
  methods: {
    login() {
      let data1 = { data: "{login_id:'1',password:'111111'}" };
      this.$http({
        method: 'post',
        url: 'http://10.16.11.186:80/home/user/login',
        headers: {
          'Content-type': 'application/json',
        },
        //data: JSON.stringify(data1)
        data: '',
      });
    },
  },
};
</script>

<style scoped>
.nav a:nth-child(3) {
  /* background-color: #215299; */
  border-left: 0;
}

.mainkjcs {
  margin: 10px auto;
  width: 1200px;
  height: auto;
  padding-bottom: 40px;
  background: #fff;
}

.nameTwo {
  float: left;
  color: #666;
  width: 80px;
  text-align: left;
  margin-right: 10px;
}

.loginboxkjcs {
  padding: 60px 0 0 405px;
  color: #cccccc;
}

.tit {
  width: 300px;
  height: 45px;
}
.titkjcs {
  width: 390px;
  height: 45px;
}

#demo3 img {
  width: 100px;
  height: 100px;
}
#demo1 img {
  width: 100px;
  height: 100px;
}
#demo2 img {
  width: 100px;
  height: 100px;
}
.tit1kjcs {
  float: left;
  width: 195px;
  height: 43px;
  line-height: 43px;
  text-align: center;
  font-size: 22px;
  border-bottom: 2px solid #ccc;
}

.tit1kjcs:hover,
.tit2kjcs:hover {
  color: #0165bb;
  cursor: pointer;
}

.tit2kjcs {
  float: left;
  width: 195px;
  height: 43px;
  line-height: 43px;
  text-align: center;
  font-size: 22px;
  border-bottom: 2px solid #ccc;
}

.logBox {
  width: 300px;
}

.logBox .smallB {
  width: 300px;
  padding-bottom: 100px;
}
.loginn {
  width: 300px;
  height: 341px;
  padding-top: 20px;
}
.loginn .name {
  margin-bottom: 10px;
  width: 300px;
  font-size: 16px;
  height: 37px;
  line-height: 37px;
}
.loginn .name .lt {
  width: 91px;
  font-family: 'Microsoft Yahei', '΢���ź�', Tahoma, Arial, Helvetica, STHeiti;
  margin-bottom: 0;
  height: 32px;
  line-height: 32px;
  float: left;
}
.loginn .name .rt {
  padding-left: 8px;
  width: 290px;
  height: 33px;
  line-height: 33px;
  border: 1px solid #cccccc;
  border-radius: 0px;
  float: left;
}
.loginn .btn1 {
  width: 400px;
  margin-top: 60px;
  height: 46px;
  display: block;
  line-height: 46px;
  font-family: 'Microsoft Yahei';
  font-size: 18px;
  background: #0165bb;
  border: none;
  border-radius: 0px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
}
.zhuce {
  width: 300px;
  height: 392px;
  background: #ffffff;

  margin-top: 20px;
}
.zhuce .name1 {
  margin-bottom: 10px;
  width: 300px;
  font-size: 16px;
  height: 34px;
  line-height: 34px;
}

.zhuce .name1 .rt1 {
  padding-left: 8px;
  width: 290px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #cccccc;
  border-radius: 0px;
  float: left;
}
.zhuce .btn11 {
  width: 400px;
  margin-top: 20px;
  height: 46px;
  display: block;
  line-height: 46px;
  font-family: 'Microsoft Yahei';
  font-size: 18px;
  background: #0165bb;
  border: none;
  border-radius: 0px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
}
input[type='radio'] + label::before {
  content: '\a0'; /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
  width: 80px;
  height: 34px;
}
/*改变radio 样式*/
input[type='radio'] {
  width: 20px;
  height: 34px;
  cursor: pointer;
  position: absolute;
  /*  clip: rect(0, 0, 0, 0); */
}
input[type='radio']:checked + label::before {
  background-color: #eb4b3d;
  background-clip: content-box;
}
</style>
