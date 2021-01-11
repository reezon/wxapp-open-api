'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 查询运单轨迹
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.getPath.html>
 * @param {String} orderId
 * @param {String} openid
 * @param {String} deliveryId
 * @param {String} waybillId
 */
exports.getExpressBusinessPath = async function (orderId, openid, deliveryId, waybillId) {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'path/get?access_token=' + token.accessToken
  let data = {
    order_id: orderId,
    openid: openid,
    delivery_id: deliveryId,
    waybill_id: waybillId
  }
  return this.request(url, postJSON(data))
}

/**
 * 取消运单
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.cancelOrder.html>
 * @param {String} orderId
 * @param {String} openid
 * @param {String} deliveryId
 * @param {String} waybillId
 */
exports.cancelExpressBusinessOrder = async function (orderId, openid, deliveryId, waybillId) {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'order/cancel?access_token=' + token.accessToken
  let data = {
    order_id: orderId,
    openid: openid,
    delivery_id: deliveryId,
    waybill_id: waybillId
  }
  return this.request(url, postJSON(data))
}

/**
 * 获取电子面单余额
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.getQuota.html>
 * @param {String} deliveryId
 * @param {String} bizId
 */
exports.cancelExpressBusinessOrder = async function (deliveryId, bizId) {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'quota/get?access_token=' + token.accessToken
  let data = {
    delivery_id: deliveryId,
    biz_id: bizId
  }
  return this.request(url, postJSON(data))
}

/**
 * 生成运单
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.addOrder.html>
 * @param {String} addSource
 * @param {String} wxAppid
 * @param {String} orderId
 * @param {String} openid
 * @param {String} deliveryId
 * @param {String} bizId
 * @param {String} customRemark
 * @param {String} tagid
 * @param {String} sender
 * @param {String} receiver
 * @param {String} cargo
 * @param {String} shop
 * @param {String} insured
 * @param {String} service
 * @param {String} expectTime
 */
exports.addExpressBusinessOrder = async function (addSource, wxAppid, orderId, openid, deliveryId, bizId, customRemark, tagid, sender, receiver, cargo, shop, insured, service, expectTime) {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'order/add?access_token=' + token.accessToken
  let data = {
    add_source: addSource,
    wx_appid: wxAppid,
    order_id: orderId,
    openid: openid,
    delivery_id: deliveryId,
    biz_id: bizId,
    custom_remark: customRemark,
    tagid: tagid,
    sender: sender,
    receiver: receiver,
    cargo: cargo,
    shop: shop,
    insured: insured,
    service: service,
    expect_time: expectTime
  }
  return this.request(url, postJSON(data))
}

/**
 * 获取运单数据
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.getOrder.html>
 * @param {String} orderId
 * @param {String} openid
 * @param {String} deliveryId
 * @param {String} waybillId
 */
exports.getExpressBusinessOrder = async function (orderId, openid, deliveryId, waybillId) {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'order/get?access_token=' + token.accessToken
  let data = {
    order_id: orderId,
    openid: openid,
    delivery_id: deliveryId,
    waybill_id: waybillId
  }
  return this.request(url, postJSON(data))
}

/**
 * 获取支持的快递公司列表
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.getAllDelivery.html>
 */
exports.getAllExpressBusinessDeliveries = async function () {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'delivery/getall?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 获取打印员
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.getPrinter.html>
 */
exports.getAllExpressBusinessPrinters = async function () {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'printer/getall?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 配置面单打印员
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.updatePrinter.html>
 * @param {String} openid
 * @param {String} updateType
 * @param {String} tagidList
 */
exports.updateExpressBusinessPrinter = async function (openid, updateType, tagidList) {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'printer/update?access_token=' + token.accessToken
  let data = {
    openid: openid,
    update_type: updateType,
    tagid_list: tagidList
  }
  return this.request(url, postJSON(data))
}

/**
 * 获取所有绑定的物流账号
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.getAllAccount.html>
 */
exports.getAllExpressBusinessAccounts = async function () {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'account/getall?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 绑定/解绑物流账号
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.bindAccount.html>
 * @param {String} type
 * @param {String} deliveryId
 * @param {String} bizId
 * @param {String} password
 * @param {String} remarkContent
 */
exports.updateExpressBusinessPrinter = async function (type, deliveryId, bizId, password, remarkContent) {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'account/bind?access_token=' + token.accessToken
  let data = {
    type: type,
    delivery_id: deliveryId,
    biz_id: bizId,
    password: password,
    remark_content: remarkContent
  }
  return this.request(url, postJSON(data))
}

/**
 * 模拟快递公司更新订单状态
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.testUpdateOrder.html>
 * @param {String} orderId
 * @param {String} openid
 * @param {String} deliveryId
 * @param {String} waybillId
 * @param {String} actionTime
 * @param {String} actionType
 * @param {String} actionMsg
 */
exports.testUpdateExpressBusinessOrder = async function (bizId, orderId, openid, deliveryId, waybillId, actionTime, actionType, actionMsg) {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'test_update_order?access_token=' + token.accessToken
  let data = {
    biz_id: bizId,
    order_id: orderId,
    openid: openid,
    delivery_id: deliveryId,
    waybill_id: waybillId,
    action_time: actionTime,
    action_type: actionType,
    action_msg: actionMsg
  }
  return this.request(url, postJSON(data))
}

/**
 * 批量获取运单数据
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.batchGetOrder.html>
 * @param {String} orderList
 */
exports.batchGetExpressBusinessOrders = async function (orderList) {
  const token = await this.ensureAccessToken()
  const url = this.expressBusinessPrefix + 'order/batchget?access_token=' + token.accessToken
  let data = {
    order_list: orderList
  }
  return this.request(url, postJSON(data))
}
