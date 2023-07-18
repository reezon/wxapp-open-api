'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 查询购买资源包的用量情况
 */
exports.getUsageDetail = async function (spuId, offset, limit) {
  const token = await this.ensureAccessToken()
  let url = this.wxappChargePrefix + 'usage/get?access_token=' + token.accessToken + '&spuId=' + spuId + '&offset=' + offset + '&limit=' + limit

  return this.request(url)
}

/**
 * 获取小程序某个付费能力的最近用量数据
 */
exports.getRecentAverageUsage = async function (spuId) {
  const token = await this.ensureAccessToken()
  let url = this.wxappChargePrefix + 'usage/get_recent_average?access_token=' + token.accessToken + '&spuId=' + spuId

  return this.request(url)
}