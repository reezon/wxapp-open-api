'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 绑定微信用户为小程序体验者
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140588_nVUgx&token=&lang=zh_CN>
 * @param {String} wechatId
 */
exports.bindTester = async function (wechatId) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'bind_tester?access_token=' + token.accessToken
  const data = {
    wechatid: wechatId
  }

  return this.request(url, postJSON(data))
}

/**
 * 解除绑定小程序的体验者
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140588_nVUgx&token=&lang=zh_CN>
 * @param {String} wechatId
 */
exports.unbindTester = async function (wechatId) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'unbind_tester?access_token=' + token.accessToken
  const data = {
    wechatid: wechatId
  }

  return this.request(url, postJSON(data))
}
