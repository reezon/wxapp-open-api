'use strict'

const util = require('./util')
const postJSON = util.postJSON
const fixedEncodeURIComponent = util.fixedEncodeURIComponent

/**
 * 为授权的小程序帐号上传小程序代码
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} templateId
 * @param {Object} extJson
 * @param {String} userVersion
 * @param {String} userDesc
 */
exports.commitCode = async function (templateId, extJson, userVersion, userDesc) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'commit?access_token=' + token.accessToken
  const data = {
    template_id: templateId,
    ext_json: extJson,
    user_version: userVersion,
    user_desc: userDesc
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取体验小程序的体验二维码
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} path
 */
exports.getTestQrCode = async function (path) {
  const token = await this.ensureAccessToken()
  let url = this.wxappPrefix + 'get_qrcode?access_token=' + token.accessToken

  if (path) {
    url += '&' + fixedEncodeURIComponent(path)
  }

  return this.request(url)
}

/**
 * 获取授权小程序帐号的可选类目
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * 返回参数说明：
 * category_list 可填选的类目列表
 * first_class 一级类目名称
 * second_class 二级类目名称
 * third_class 三级类目名称
 * first_id 一级类目的ID编号
 * second_id 二级类目的ID编号
 * third_id 三级类目的ID编号
 */
exports.getCategory = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'get_category?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 获取小程序的第三方提交代码的页面配置
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.getPage = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'get_page?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 将第三方提交的代码包提交审核
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {Object[]} itemList
 */
exports.submitAudit = async function (itemList) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'submit_audit?access_token=' + token.accessToken
  const data = {
    item_list: itemList
  }

  return this.request(url, postJSON(data))
}

/**
 * 查询某个指定版本的审核状态
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} auditId
 */
exports.getAuditStatus = async function (auditId) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'get_auditstatus?access_token=' + token.accessToken
  const data = {
    auditid: auditId
  }

  return this.request(url, postJSON(data))
}

/**
 * 查询最新一次提交的审核状态
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * 返回结果
 * status 审核状态，其中0为审核成功，1为审核失败，2为审核中
 * reason 当status=1，审核被拒绝时，返回的拒绝原因
 */
exports.getLastAuditStatus = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'get_latest_auditstatus?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 发布已通过审核的小程序
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.releaseCode = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'release?access_token=' + token.accessToken
  const data = {}

  return this.request(url, postJSON(data))
}

/**
 * 修改访问状态
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {Boolean} visible
 */
exports.changeVisitStatus = async function (visible) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'change_visitstatus?access_token=' + token.accessToken
  const data = {
    action: visible ? 'open' : 'close'
  }

  return this.request(url, postJSON(data))
}

/**
 * 小程序版本回退
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.revertCodeRelease = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'revertcoderelease?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 小程序审核撤回
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.undoCodeAudit = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'undocodeaudit?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 查询当前设置的最低基础库版本及各版本用户占比
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.getWeappSupportVersion = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxopenPrefix + 'getweappsupportversion?access_token=' + token.accessToken
  const data = {}

  return this.request(url, postJSON(data))
}

/**
 * 设置最低基础库版本
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} version
 */
exports.setWeappSupportVersion = async function (version) {
  const token = await this.ensureAccessToken()
  const url = this.wxopenPrefix + 'setweappsupportversion?access_token=' + token.accessToken
  const data = {
    version: version
  }

  return this.request(url, postJSON(data))
}

/**
 * 小程序分阶段发布
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} grayPercentage
 */
exports.grayReleaseCode = async function (grayPercentage) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'grayrelease?access_token=' + token.accessToken
  const data = {
    gray_percentage: grayPercentage
  }

  return this.request(url, postJSON(data))
}

/**
 * 取消分阶段发布
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.revertGrayRelease = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'revertgrayrelease?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 查询当前分阶段发布详情
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.getGrayReleasePlan = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getgrayreleaseplan?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 查询服务商的当月提审限额和加急次数（Quota）
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/query_quota.html>
 */
exports.queryQuota = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'queryquota?access_token=' + token.accessToken

  return this.request(url)
}
/**
 * 加急审核申请
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/speedup_audit.html>
 */
exports.speedUpAudit = async function (auditId) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'speedupaudit?access_token=' + token.accessToken
  const data = {
    auditid: auditId
  }

  return this.request(url, postJSON(data))
}
