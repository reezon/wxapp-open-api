'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 设置小程序隐私设置（是否可被搜索）
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 * @param {String} status
 */
exports.changeSearchStatus = async function (status) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'changewxasearchstatus?access_token=' + token.accessToken
  const data = {
    status: status
  }

  return this.request(url, postJSON(data))
}

/**
 * 查询小程序当前隐私设置（是否可被搜索）
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 */
exports.getSearchStatus = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getwxasearchstatus?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 获取展示的公众号信息
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 */
exports.getShowWxaItem = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getshowwxaitem?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 设置展示的公众号
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 * @param {String} flag
 * @param {String} appid
 */
exports.updateShowWxaItem = async function (flag, appid) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'updateshowwxaitem?access_token=' + token.accessToken
  let data = {
    wxa_subscribe_biz_flag: flag
  }

  if (flag) {
    data.appid = appid
  }

  return this.request(url, postJSON(data))
}
/**
 * 获取可以用来设置的公众号列表
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 * @param {String} page
 * @param {String} num
 */
exports.getWxampLinkForShow = async function (page, num) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getwxamplinkforshow?access_token=' + token.accessToken
  const data = {
    page: page,
    num: num
  }

  return this.request(url, postJSON(data))
}
