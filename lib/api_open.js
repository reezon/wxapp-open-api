'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 创建开放平台帐号并绑定小程序
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1498704199_1bcax&token=&lang=zh_CN>
 * @param {String} appId
 */
exports.createOpenAccount = async function (appId) {
  const token = await this.ensureAccessToken()
  const url = this.openPrefix + 'create?access_token=' + token.accessToken
  const data = {
    appid: appId
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取小程序所绑定的开放平台帐号
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1498704199_1bcax&token=&lang=zh_CN>
 * @param {String} appId
 */
exports.getOpenAccount = async function (appId) {
  const token = await this.ensureAccessToken()
  const url = this.openPrefix + 'get?access_token=' + token.accessToken
  const data = {
    appid: appId
  }

  return this.request(url, postJSON(data))
}

/**
 * 将小程序绑定到开放平台帐号下
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1498704199_1bcax&token=&lang=zh_CN>
 * @param {String} appId
 * @param {String} openAppId
 */
exports.bindOpenAccount = async function (appId, openAppId) {
  const token = await this.ensureAccessToken()
  const url = this.openPrefix + 'bind?access_token=' + token.accessToken
  const data = {
    appid: appId,
    open_appid: openAppId
  }

  return this.request(url, postJSON(data))
}

/**
 * 将小程序从开放平台帐号下解绑
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1498704199_1bcax&token=&lang=zh_CN>
 * @param {String} appId
 * @param {String} openAppId
 */
exports.unbindOpenAccount = async function (appId, openAppId) {
  const token = await this.ensureAccessToken()
  const url = this.openPrefix + 'unbind?access_token=' + token.accessToken
  const data = {
    appid: appId,
    open_appid: openAppId
  }

  return this.request(url, postJSON(data))
}
