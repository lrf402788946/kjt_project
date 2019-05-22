import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { Message } from 'element-ui';

Vue.use(Vuex);

const api = {
  login: '/user/login',
};

/**
 * 是否输出结果
 */
const result_is_log = true;

/**
 * 发送请求
 * @param uri 接口地址
 * @param data 数据(以此变量判断,若有值就是走post方法;若没有值或不传,则默认为undefined,走get方法)
 */
const toRequest = async (uri, data = undefined, axios) => {
  try {
    if (data !== undefined) {
      result = await axios.post(uri, data);
    } else {
      result = await axios.get(uri);
    }
    let { result, msg, returnData, returnDataList } = checkRes(result);
    if (!result) {
      Message.error(msg);
      return { result: false };
    } else {
      Message.success('操作成功');
      if (!(Object.keys(returnData).length > 0) && !(returnDataList.length > 0)) console.warn(`${uri}--无数据`);
      return { result: result, returnData: returnData, returnDataList: returnDataList };
    }
  } catch (error) {
    console.error(`${uri}:${error}`);
  }
};

/**
 * 处理结果
 * @param result 请求结果(从axios拦截器返回的结果,无需其他处理)
 */
const checkRes = result => {
  try {
    if (result_is_log) {
      console.log(`result:`);
      console.log(result);
      console.log(`returnData:`);
      console.log(_.get(result, 'data', {}));
      console.log(`dataList:`);
      console.log(_.get(result, 'dataList', []));
    }
    if (result.rescode === 0 || result.rescode === '0') {
      return { result: true, msg: result.msg, returnData: _.get(result, 'data', {}), returnDataList: _.get(result, 'dataList', []) };
    } else {
      return { result: false, msg: result.msg };
    }
  } catch (error) {
    Message.error(error);
    console.log(error);
  }
};

//管理变量的位置
//"只能"通过mutations中的方法来改变stae中的值,这是使用原则
export const state = () => ({});

//更改管理的变量的值的 方法 集合
//这里的方法主要是为了改变state中变量的值
//外部也可以调用,例如使用辅助函数(map)或直接调用等方式,不过不推荐那么使用(换句话说就是别那么用)
export const mutations = {};

//用来处理一些 异步 请求 的方法集合,可以调用mutations中的方法
//方法的列表参数只能有2个,可以用解构函数来写
//{state, commit},{a,b,c,d...}
//state是vuex管理的变量=>在action方法中可以直接 "使用" state中的变量,如:state.name,但是不能修改,修改需要 "调用" mutations中的方法去改变state中的变量
//commit是调用mutations的方法=>commit('方法名','数据');
//在actions中,state和commit可以不使用,但是最少要写一个站位,否则第二个参数将会变成上述这些
//{a,b,c,d...}=>解构函数方式的参数列表,传过来的key要一致就可以使用,如果没有传,默认值是undefined
export const actions = {
  /**
   * 登录方法
   * @param login_id 用户名
   * @param password 密码
   */
  async login({ commit }, { login_id, password }) {
    let { result, returnData, returnDataList } = await toRequest(api.login, { data: { login_id: login_id, password: password } }, this.$axios);
  },
};
