'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取小程序scheme码
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/url-scheme/urlscheme.generate.html>
 * @param {String} path
 * @param {String} query
 * @param {Boolean} isExpire
 * @param {Number} expireTime
 */
exports.generateScheme = async function (path, query, isExpire, expireTime) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'generatescheme?access_token=' + token.accessToken
  let data = {
    is_expire: isExpire
  }

  if (isExpire) {
    data.expire_time = expireTime
  }

  if (path) {
    data.jump_wxa = {
      path,
      query
    }
  }

  return this.request(url, postJSON(data))
}