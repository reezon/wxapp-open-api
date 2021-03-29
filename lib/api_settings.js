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
