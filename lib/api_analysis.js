'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 概况趋势
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，end_date允许设置的最大值为昨日
 */
exports.dailySummaryTrend = async function (beginDate, endDate) {
  const token = await this.ensureAccessToken()
  const url = this.datacubePrefix + 'getweanalysisappiddailysummarytrend?access_token=' + token.accessToken
  const data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return this.request(url, postJSON(data))
}

/**
 * 日趋势
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，end_date允许设置的最大值为昨日
 */
exports.dailyVisitTrend = async function (beginDate, endDate) {
  const token = await this.ensureAccessToken()
  const url = this.datacubePrefix + 'getweanalysisappiddailyvisittrend?access_token=' + token.accessToken
  const data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return this.request(url, postJSON(data))
}

/**
 * 周趋势
 * @param {String} beginDate 开始日期，为周一日期
 * @param {String} endDate 结束日期，为周日日期，限定查询一周数据
 */
exports.weeklyVisitTrend = async function (beginDate, endDate) {
  const token = await this.ensureAccessToken()
  const url = this.datacubePrefix + 'getweanalysisappidweeklyvisittrend?access_token=' + token.accessToken
  const data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return this.request(url, postJSON(data))
}

/** * 访问分布
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.visitDistribution = async function (beginDate, endDate) {
  const token = await this.ensureAccessToken()
  const url = this.datacubePrefix + 'getweanalysisappidvisitdistribution?access_token=' + token.accessToken
  const data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return this.request(url, postJSON(data))
}

/** * 日留存
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.dailyRetainInfo = async function (beginDate, endDate) {
  const token = await this.ensureAccessToken()
  const url = this.datacubePrefix + 'getweanalysisappiddailyretaininfo?access_token=' + token.accessToken
  const data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return this.request(url, postJSON(data))
}

/**
 * 周留存
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.weeklyRetainInfo = async function (beginDate, endDate) {
  const token = await this.ensureAccessToken()
  const url = this.datacubePrefix + 'getweanalysisappidweeklyretaininfo?access_token=' + token.accessToken
  const data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return this.request(url, postJSON(data))
}

/** * 月留存
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.monthlyRetainInfo = async function (beginDate, endDate) {
  const token = await this.ensureAccessToken()
  const url = this.datacubePrefix + 'getweanalysisappidmonthlyretaininfo?access_token=' + token.accessToken
  const data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return this.request(url, postJSON(data))
}

/**
 * 访问页面
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.visitPage = async function (beginDate, endDate) {
  const token = await this.ensureAccessToken()
  const url = this.datacubePrefix + 'getweanalysisappidvisitpage?access_token=' + token.accessToken
  const data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return this.request(url, postJSON(data))
}

/**
 * 用户画像
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，开始日期与结束日期相差的天数限定为0/6/29，分别表示查询最近1/7/30天数据，endDate允许设置的最大值为昨日
 */
exports.userPortrait = async function (beginDate, endDate) {
  const token = await this.ensureAccessToken()
  const url = this.datacubePrefix + 'getweanalysisappiduserportrait?access_token=' + token.accessToken
  const data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return this.request(url, postJSON(data))
}
