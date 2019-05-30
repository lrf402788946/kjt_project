import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { Message } from 'element-ui';
import * as types from './mutation-types';

Vue.use(Vuex);

const api = {
  user: '/user/user_info',
  selfProductList: '/product/product_list', //gxtype=>0需;1供;state=>0待审核;2通过审核
  selfTransactionList: '/product/transaction_list', //gxtype,
  productTypeList: '/product/product_type',
  productSave: '/product/product_save',
  productEdit: '/product/product_edit',
  productDelete: '/product/product_delete',
  transaction_my_list: '/product/transaction_my_list',
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
    let { result, msg, returnData, returnDataList, totalRow } = checkRes(result);
    if (!result) {
      Message.error(msg);
      return { result: false };
    } else {
      console.log(data !== null);
      data !== undefined && data !== null ? Message.success(msg) : '';
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
};

export const state = () => ({});

export const mutations = {};

export const actions = {
  /**
   * 查询产品相关
   */
  async selfProductList({ commit }, data) {
    let { result, returnData, returnDataList } = await toRequest(api.selfProductList, { data: data }, this.$axios);
    return { returnDataList };
  },
  async selfTradeList({ commit }, data) {
    let { result, returnData, returnDataList } = await toRequest(api.selfTransactionList, { data: data }, this.$axios);
    return { returnDataList };
  },
  /**
   * 查询产品类型列表
   */
  async productTypeList({ commit }) {
    let { result, returnData, returnDataList } = await toRequest(api.productTypeList, null, this.$axios);
    return { returnDataList };
  },
  /**
   * 产品相关操作
   * @param data 数据
   * @param type 方法
   */
  async productOperation({ commit }, { data, type }) {
    if (type === `delete`) {
      await toRequest(api.productDelete, { data: data }, this.$axios);
    } else {
      await toRequest(_.get(api, type), { data: data }, this.$axios);
    }
  },

  async transaction({ commit }, data) {
    if (data !== undefined) {
      let { result, totalRow, returnDataList } = await toRequest(api.transaction_my_list, { data: data }, this.$axios);
      if (result) {
        return { returnDataList, totalRow };
      }
    }
    return { result: false };
  },
};
