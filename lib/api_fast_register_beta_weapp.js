'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 创建试用小程序
 * <https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Register_Mini_Programs/beta_mp/fastregister.html>
 * @param {String} name
 * @param {String} openid
 */
exports.fastRegisterBetaWeapp = async function (name, openid) {
  const componentAccessToken = await this.ensureComponentToken()
  const url = this.prefix + 'component/fastregisterbetaweapp?action=create&access_token=' + componentAccessToken.componentAccessToken
  const data = {
    name,
    openid
  }

  return this.request(url, postJSON(data))
}

/**
 * 修改试用小程序名称
 * <https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Register_Mini_Programs/beta_mp/fastmodify.html>
 * @param {String} name
 */
exports.setBetaWeappNickname = async function (name) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'setbetaweappnickname?access_token=' + token.accessToken
  const data = {
    name
  }

  return this.request(url, postJSON(data))
}

/**
 * 试用小程序快速认证
 * <https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Register_Mini_Programs/beta_mp/fastverify.html>
 * @param {String} enterpriseName
 * @param {String} code
 * @param {Number} codeType
 * @param {String} legalPersonalWechat
 * @param {String} legalPersonalName
 * @param {String} legalPersonaIdcard
 * @param {String} componentPhone
 */
exports.verifyBetaWeapp = async function (enterpriseName, code, codeType, legalPersonalWechat, legalPersonalName, legalPersonaIdcard, componentPhone) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'verifybetaweapp?access_token=' + token.accessToken
  const data = {
    verify_info: {
      enterprise_name: enterpriseName,
      code: code,
      code_type: codeType,
      legal_persona_wechat: legalPersonalWechat,
      legal_persona_name: legalPersonalName,
      legal_persona_idcard: legalPersonaIdcard,
      component_phone: componentPhone
    }
  }

  return this.request(url, postJSON(data))
}