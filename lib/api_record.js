'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取小程序违规处罚记录
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/records/getillegalrecords.html
 */
exports.getIllegalRecords = async function (start_time, end_time){
    let token = await this.ensureAccessToken()
    let url = this.wxappPrefix + 'getillegalrecords?access_token=' + token.accessToken
    let data = {
    }

    if (start_time) {
        data.start_time = start_time
    }

    if (end_time) {
        data.end_time = end_time
    }

    return this.request(url, postJSON(data))
  }

/**
 * 获取小程序申诉记录
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/records/getappealrecords.html
 */
exports.getAppealRecords = async function (illegal_record_id){
    let token = await this.ensureAccessToken()
    let url = this.wxappPrefix + 'getappealrecords?access_token=' + token.accessToken
    let data = {
        illegal_record_id
    }

    return this.request(url, postJSON(data))
  }