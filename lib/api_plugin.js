'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 申请使用插件接口
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21521637082Sqi4M&token=&lang=zh_CN>
 * @param {String} pluginAppid
 */
exports.applyPlugin = async function (pluginAppid) {
  var token = await this.ensureAccessToken()
  var url = this.wxappPrefix + 'plugin?access_token=' + token.accessToken
  var data = {
    action: 'apply',
    plugin_appid: pluginAppid
  }
  return this.request(url, postJSON(data))
}

/**
 * 查询已添加的插件
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21521637082Sqi4M&token=&lang=zh_CN>
 */
exports.listPlugin = async function () {
  var token = await this.ensureAccessToken()
  var url = this.wxappPrefix + 'plugin?access_token=' + token.accessToken
  var data = {
    action: 'list'
  }
  return this.request(url, postJSON(data))
}

/**
 * 删除已添加的插件
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21521637082Sqi4M&token=&lang=zh_CN>
 * @param {String} pluginAppid
 */
exports.unbindPlugin = async function (pluginAppid) {
  var token = await this.ensureAccessToken()
  var url = this.wxappPrefix + 'plugin?access_token=' + token.accessToken
  var data = {
    action: 'unbind',
    plugin_appid: pluginAppid
  }
  return this.request(url, postJSON(data))
}
