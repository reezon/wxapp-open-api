'use strict'
const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取用户反馈列表
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/operation/operation.getFeedback.html>
 * @param {Number} type
 * @param {Number} page
 * @param {Number} num
 */
exports.getFeedbackList = async function (type, page, num) {
  const token = await this.ensureAccessToken()
  const url = this.wxaapiPrefix + 'feedback/list?access_token=' + token.accessToken
  const data = {
    type,
    page,
    num
  }

  return this.request(url, postJSON(data))
}

/**
 * 查询错误信息
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/operation/operation.getJsErrSearch.html>
 * @param {String} errmsgKeyword
 * @param {Number} type
 * @param {String} clientVersion
 * @param {Number} startTime
 * @param {Number} endTime
 * @param {Number} start
 * @param {Number} limit
 */
exports.getJsErrSearch = async function (errmsgKeyword, type, clientVersion, startTime, endTime, start, limit) {
  const token = await this.ensureAccessToken()
  const url = this.wxaapiPrefix + 'log/jserr_search?access_token=' + token.accessToken
  const data = {
    errmsg_keyword: errmsgKeyword,
    type: type,
    client_version: clientVersion,
    start_time: startTime,
    end_time: endTime,
    start: start,
    limit: limit
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取性能监控信息
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/operation/operation.getPerformance.html>
 * @param {Number} costTimeType
 * @param {Number} defaultStartTIme
 * @param {Number} defaultEndTime
 * @param {String} device
 * @param {String} isDownloadCode
 * @param {String} scene
 * @param {String} networktype
 */
exports.getPerformance = async function (costTimeType, defaultStartTIme, defaultEndTime, device, isDownloadCode, scene, networktype) {
  const token = await this.ensureAccessToken()
  const url = this.wxaapiPrefix + 'log/get_performance?access_token=' + token.accessToken
  const data = {
    cost_time_type: costTimeType,
    default_start_time: defaultStartTIme,
    default_end_time: defaultEndTime,
    device: device,
    is_download_code: isDownloadCode,
    scene: scene,
    networktype: networktype
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取访问来源
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/operation/operation.getSceneList.html>
 */
exports.getSceneList = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxaapiPrefix + 'log/get_scene?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 查询实时日志
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/operation/operation.realtimelogSearch.html>
 * @param {Number} date
 * @param {Number} begintime
 * @param {Number} endtime
 */
exports.getPerformance = async function (date, begintime, endtime, start, limit, traceId, url, id, filterMsg, level) {
  const token = await this.ensureAccessToken()
  const requestUrl = this.wxaapiPrefix + 'log/userlog_search?access_token=' + token.accessToken
  let data = {
    date: date,
    begintime: begintime,
    endtime: endtime
  }

  if (start !== undefined) {
    data.start = start
  }

  if (limit !== undefined) {
    data.limit = limit
  }

  if (traceId) {
    data.traceId = traceId
  }

  if (url) {
    data.url = url
  }

  if (id) {
    data.id = id
  }

  if (filterMsg) {
    data.filterMsg = filterMsg
  }

  if (level) {
    data.level = level
  }

  return this.request(requestUrl, postJSON(data))
}

/**
 * 获取客户端版本
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/operation/operation.getVersionList.html>
 */
exports.getSceneList = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxaapiPrefix + 'log/get_client_version?access_token=' + token.accessToken

  return this.request(url)
}
