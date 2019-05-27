import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { Message } from 'element-ui';
import * as types from './mutation-types';

Vue.use(Vuex);

const api = {
  /**
   * query:{
   *  skip,
   *  limit,
   *  code=gxys/kyys/kjqy/jgtt
   * }
   */
  menuList: '/enterprise/enterprise_list',
  /**
   * query: id
   */
  listInfo: '/enterprise/enterprise_info',
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
    if (data !== undefined && data !== null) {
      result = await axios.post(uri, data);
    } else {
      result = await axios.get(uri);
    }
    let { result, msg, returnData, returnDataList, totalRow } = checkRes(result);
    if (!result) {
      Message.error(msg);
      return { result: false };
    } else {
      console.log(data !== undefined && data !== null);
      if (data !== undefined && data !== null) {
        Message.success(msg);
      }
      //
      if (!(Object.keys(returnData).length > 0) && !(returnDataList.length > 0)) console.warn(`${uri}--无数据`);
      return { result: result, returnData: returnData, returnDataList: returnDataList, totalRow };
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
      return {
        result: true,
        msg: result.msg,
        returnData: _.get(result, 'data', {}),
        returnDataList: _.get(result, 'dataList', []),
        totalRow: _.get(result, 'totalRow', 0),
      };
    } else {
      return { result: false, msg: result.msg };
    }
  } catch (error) {
    Message.error(error);
    console.log(error);
  }
};

export const state = () => ({});

export const mutations = {};

export const actions = {
  /**
   * 菜单选项(前4个)=>请求列表
   * @param code 请求列表类型
   */
  async getMenuList({ commit }, { skip, limit, code }) {
    let { returnDataList, totalRow } = await toRequest(`${api.menuList}?skip=${skip}&limit=${limit}&code=${code}`, null, this.$axios);
    return { returnDataList, totalRow };
  },
  /**
   * 查询列表项的详情
   * @param id
   */
  async getListDetail({ commit }, { id }) {
    let { returnData, returnDataList } = await toRequest(`${api.listInfo}?id=${id}`, null, this.$axios);
    return { returnDataList, returnData };
  },
};
