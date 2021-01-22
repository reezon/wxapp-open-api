'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取小程序违规处罚记录
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/records/getillegalrecords.html>
 * @param {Number} startTime
 * @param {Number} endTime
 */
exports.getIllegalRecords = async function (startTime, endTime) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getillegalrecords?access_token=' + token.accessToken
  let data = {
    start_time: startTime,
    end_time: endTime
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取小程序申诉记录
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/records/getappealrecords.html>
 * @param {String} illegalRecordId
 */
exports.getAppealRecords = async function (illegalRecordId) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getappealrecords?access_token=' + token.accessToken
  let data = {
    illegal_record_id: illegalRecordId
  }

  return this.request(url, postJSON(data))
}