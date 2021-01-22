'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 创建动态消息
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/updatable_message/updatableMessage.createActivityId.html>
 */
exports.createActivityId = async function () {
  const token = await this.ensureAccessToken()
  const url = this.prefix + 'message/wxopen/activityid/create?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 修改被分享的动态消息
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/updatable_message/updatableMessage.setUpdatableMsg.html>
 * @param {String} activityId
 * @param {Number} targetState
 * @param {Object} templateInfo
 */
exports.setUpdatableMsg = async function (activityId, targetState, templateInfo) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getappealrecords?access_token=' + token.accessToken
  let data = {
    activity_id: activityId,
    target_state: targetState,
    template_info: templateInfo
  }

  return this.request(url, postJSON(data))
}