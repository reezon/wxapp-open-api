'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取草稿箱内的所有临时代码草稿
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1506504150_nMMh6&token=&lang=zh_CN>
 * 返回参数
 * draft_list
 */
exports.getCodeTemplateDraftList = async function () {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.wxappPrefix + 'gettemplatedraftlist?access_token=' + componentAccessToken.componentAccessToken

  return this.request(url)
}

/**
 * 获取代码模版库中的所有小程序代码模版
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1506504150_nMMh6&token=&lang=zh_CN>
 */
exports.getCodeTemplateList = async function () {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.wxappPrefix + 'gettemplatelist?access_token=' + componentAccessToken.componentAccessToken

  return this.request(url)
}

/**
 * 将草稿箱的草稿选为小程序代码模版
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1506504150_nMMh6&token=&lang=zh_CN>
 * @param {String} draftId
 */
exports.addCodeTemplate = async function (draftId) {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.wxappPrefix + 'addtotemplate?access_token=' + componentAccessToken.componentAccessToken
  const data = {
    draft_id: draftId
  }
  return this.request(url, postJSON(data))
}

/**
 * 删除指定小程序代码模版
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1506504150_nMMh6&token=&lang=zh_CN>
 * @param {String} templateId
 */
exports.deconsteCodeTemplate = async function (templateId) {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.wxappPrefix + 'deconstetemplate?access_token=' + componentAccessToken.componentAccessToken
  const data = {
    template_id: templateId
  }
  return this.request(url, postJSON(data))
}
