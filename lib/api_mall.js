'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 导入订单
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/introduction/widget/order/orderlist/#%E5%AF%BC%E5%85%A5%E8%AE%A2%E5%8D%95>
 * @param {int} isHistory 0 or 1. 如果订单中的物品为首次导入，订单中的物品信息会该物品的初始化信息；如果为历史订单，请求URL的is_history参数值为1
 * @param {array} orderList 单次请求订单数量不可超过10单
 */
exports.addOrder = async function (isHistory, orderList) {
  const token = await this.ensureAccessToken()
  const url = this.mallPrefix + 'importorder?action=add-order&is_history=' + isHistory + '&access_token=' + token.accessToken
  const data = {
    order_list: orderList
  }

  return this.request(url, postJSON(data))
}

/**
 * 更新订单信息
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/introduction/widget/order/orderlist/#%E6%9B%B4%E6%96%B0%E8%AE%A2%E5%8D%95%E4%BF%A1%E6%81%AF>
 * @param {int} user_open_id 0 or 1. 如果订单中的物品为首次导入，订单中的物品信息会该物品的初始化信息；如果为历史订单，请求URL的is_history参数值为1
 * @param {array} orderList 单次请求订单数量不可超过10单
 */
exports.updateOrder = async function (isHistory, orderList) {
  const token = await this.ensureAccessToken()
  const url = this.mallPrefix + 'importorder?action=update-order&is_history=' + isHistory + '&access_token=' + token.accessToken
  const data = {
    order_list: orderList
  }

  return this.request(url, postJSON(data))
}

/**
 * 删除订单
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/introduction/widget/order/orderlist/#%E6%9B%B4%E6%96%B0%E8%AE%A2%E5%8D%95%E4%BF%A1%E6%81%AF>
 * @param {string} userOpenId 用户微信openid
 * @param {string} orderId 订单号
 */
exports.deleteOrder = async function (userOpenId, orderId) {
  const token = await this.ensureAccessToken()
  const url = this.mallPrefix + 'deleteorder?aaccess_token=' + token.accessToken
  const data = {
    user_open_id: userOpenId,
    order_id: orderId
  }

  return this.request(url, postJSON(data))
}

/**
 * 导入收藏
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/introduction/widget/order/cartlist/#%E5%AF%BC%E5%85%A5%E6%94%B6%E8%97%8F>
 * @param {string} userOpenId 用户微信openid
 * @param {array} skuProductList 单次请求物品数量不可超过10个
 */
exports.addShoppingList = async function (userOpenId, skuProductList) {
  const token = await this.ensureAccessToken()
  const url = this.mallPrefix + 'addshoppinglist?aaccess_token=' + token.accessToken
  const data = {
    user_open_id: userOpenId,
    sku_product_list: skuProductList
  }

  return this.request(url, postJSON(data))
}

/**
 * 删除收藏
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/introduction/widget/order/cartlist/#%E5%88%A0%E9%99%A4%E6%94%B6%E8%97%8F>
 * @param {string} userOpenId 用户微信openid
 * @param {array} skuProductList 单次请求物品数量不可超过100个
 */
exports.deleteShoppingList = async function (userOpenId, skuProductList) {
  const token = await this.ensureAccessToken()
  const url = this.mallPrefix + 'deleteshoppinglist?aaccess_token=' + token.accessToken
  const data = {
    user_open_id: userOpenId,
    sku_product_list: skuProductList
  }

  return this.request(url, postJSON(data))
}

/**
 * 删除用户的所有收藏
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/introduction/widget/order/cartlist/#%E5%88%A0%E9%99%A4%E7%94%A8%E6%88%B7%E7%9A%84%E6%89%80%E6%9C%89%E6%94%B6%E8%97%8F>
 * @param {string} userOpenId 用户微信openid
 */
exports.deleteBizAllShoppingList = async function (userOpenId, skuProductList) {
  const token = await this.ensureAccessToken()
  const url = this.mallPrefix + 'deletebizallshoppinglist?aaccess_token=' + token.accessToken
  const data = {
    user_open_id: userOpenId,
    sku_product_list: skuProductList
  }

  return this.request(url, postJSON(data))
}

/**
 * 更新物品信息
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/introduction/widget/order/goods/#%E6%9B%B4%E6%96%B0%E7%89%A9%E5%93%81%E4%BF%A1%E6%81%AF>
 * @param {array} productList 单次请求物品数量不可超过10个
 */
exports.importProduct = async function (productList) {
  const token = await this.ensureAccessToken()
  const url = this.mallPrefix + 'importproduct?aaccess_token=' + token.accessToken
  const data = {
    product_list: productList
  }

  return this.request(url, postJSON(data))
}

/**
 * 查询物品信息
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/introduction/widget/order/goods/#%E6%9F%A5%E8%AF%A2%E7%89%A9%E5%93%81%E4%BF%A1%E6%81%AF>
 * @param {array} keyList 单次请求物品数量不可超过100个
 */
exports.queryProduct = async function (keyList) {
  const token = await this.ensureAccessToken()
  const url = this.mallPrefix + 'queryproduct?type=batchquery&aaccess_token=' + token.accessToken
  const data = {
    key_list: keyList
  }

  return this.request(url, postJSON(data))
}

/**
 * 小程序的物品是否可被搜索
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/introduction/widget/order/goods/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E7%89%A9%E5%93%81%E6%98%AF%E5%90%A6%E5%8F%AF%E8%A2%AB%E6%90%9C%E7%B4%A2>
 * @param {array} canBeSearch 是否打开物品搜索，默认为true(即打开)
 */
exports.setBizCanBeSearch = async function (canBeSearch) {
  const token = await this.ensureAccessToken()
  const url = this.mallPrefix + 'brandmanage?action=set_biz_can_be_search&aaccess_token=' + token.accessToken
  const data = {
    can_be_search: canBeSearch
  }

  return this.request(url, postJSON(data))
}
