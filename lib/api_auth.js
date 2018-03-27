'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取pre_auth_code
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 */
exports.createPreAuthCode = async function () {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.prefix + 'component/api_create_preauthcode?component_access_token=' + componentAccessToken.componentAccessToken
  const data = {
    component_appid: this.component_appid
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取授权方的授权信息
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 * @param {String} queryAuthCodes
 */
exports.queryAuth = async function (queryAuthCode) {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.prefix + 'component/api_query_auth?component_access_token=' + componentAccessToken.componentAccessToken
  const data = {
    component_appid: this.component_appid,
    authorization_code: queryAuthCode
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取授权方的帐号基本信息
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 */
exports.getAuthorizerInfo = async function () {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.prefix + 'component/api_get_authorizer_info?component_access_token=' + componentAccessToken.componentAccessToken
  const data = {
    component_appid: this.component_appid,
    authorizer_appid: this.appid
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取授权方的选项设置信息
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 * @param {String} optionName
 */
exports.getAuthorizerOption = async function (optionName) {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.prefix + 'component/api_get_authorizer_option?component_access_token=' + componentAccessToken.componentAccessToken
  const data = {
    component_appid: this.component_appid,
    authorizer_appid: this.appid,
    option_name: optionName
  }

  return this.request(url, postJSON(data))
}

/**
 * 设置授权方的选项信息
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 * @param {String} optionName
 * @param {String} optionValue
 */
exports.setAuthorizerOption = async function (optionName, optionValue) {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.prefix + 'component/api_get_authorizer_option?component_access_token=' + componentAccessToken.componentAccessToken
  const data = {
    component_appid: this.component_appid,
    authorizer_appid: this.appid,
    option_name: optionName,
    option_value: optionValue
  }

  return this.request(url, postJSON(data))
}
