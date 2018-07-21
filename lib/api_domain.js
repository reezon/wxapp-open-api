'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 设置小程序服务器域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} requestdomain
 * @param {Object[]} wsrequestdomain
 * @param {Object[]} uploaddomain
 * @param {Object[]} downloaddomain
 */
exports.addDomain = async function (requestdomain, wsrequestdomain, uploaddomain, downloaddomain) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'modify_domain?access_token=' + token.accessToken
  const data = {
    action: 'add',
    requestdomain: requestdomain,
    wsrequestdomain: wsrequestdomain,
    uploaddomain: uploaddomain,
    downloaddomain: downloaddomain
  }

  return this.request(url, postJSON(data))
}

/**
 * 设置小程序服务器域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} requestdomain
 * @param {Object[]} wsrequestdomain
 * @param {Object[]} uploaddomain
 * @param {Object[]} downloaddomain
 */
exports.modifyDomain = async function (requestdomain, wsrequestdomain, uploaddomain, downloaddomain) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'modify_domain?access_token=' + token.accessToken
  const data = {
    action: 'set',
    requestdomain: requestdomain,
    wsrequestdomain: wsrequestdomain,
    uploaddomain: uploaddomain,
    downloaddomain: downloaddomain
  }

  return this.request(url, postJSON(data))
}

/**
 * 删除小程序服务器域名(old)
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} requestdomain
 * @param {Object[]} wsrequestdomain
 * @param {Object[]} uploaddomain
 * @param {Object[]} downloaddomain
 */
exports.deconsteDomain = async function (requestdomain, wsrequestdomain, uploaddomain, downloaddomain) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'modify_domain?access_token=' + token.accessToken
  const data = {
    action: 'deconste',
    requestdomain: requestdomain,
    wsrequestdomain: wsrequestdomain,
    uploaddomain: uploaddomain,
    downloaddomain: downloaddomain
  }

  return this.request(url, postJSON(data))
}

/**
 * 删除小程序服务器域名(new)
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} requestdomain
 * @param {Object[]} wsrequestdomain
 * @param {Object[]} uploaddomain
 * @param {Object[]} downloaddomain
 */
exports.deleteDomain = async function (requestdomain, wsrequestdomain, uploaddomain, downloaddomain) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'modify_domain?access_token=' + token.accessToken
  const data = {
    action: 'delete',
    requestdomain: requestdomain,
    wsrequestdomain: wsrequestdomain,
    uploaddomain: uploaddomain,
    downloaddomain: downloaddomain
  }

  return this.request(url, postJSON(data))
}

exports.getDomain = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'modify_domain?access_token=' + token.accessToken
  const data = {
    action: 'get'
  }

  return this.request(url, postJSON(data))
}

/**
 * 设置小程序业务域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} webviewdomain
 */
exports.addWebviewDomain = async function (webviewdomain) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'setwebviewdomain?access_token=' + token.accessToken
  const data = {
    action: 'add',
    webviewdomain: webviewdomain
  }

  return this.request(url, postJSON(data))
}

/**
 * 修改小程序业务域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} webviewdomain
 */
exports.modifyWebviewDomain = async function (webviewdomain) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'setwebviewdomain?access_token=' + token.accessToken
  const data = {
    action: 'set',
    webviewdomain: webviewdomain
  }

  return this.request(url, postJSON(data))
}

/**
 * 删除小程序业务域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {String} webviewdomain
 */
exports.deconsteWebviewDomain = async function (webviewdomain) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'setwebviewdomain?access_token=' + token.accessToken
  const data = {
    action: 'deconste',
    webviewdomain: webviewdomain
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取小程序业务域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 */
exports.getWebviewDomain = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'setwebviewdomain?access_token=' + token.accessToken
  const data = {
    action: 'get'
  }

  return this.request(url, postJSON(data))
}
