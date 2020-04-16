'use strict'
const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取永久小程序码（圆形的）
 * 详情请见：<https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html>
 * @param {String} path
 * @param {String} width
 * @param {String} autoColor
 * @param {String} lineColor
 */
exports.getWxaQrcode = async function (path, width, autoColor, lineColor, isHyaline) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getwxacode?access_token=' + token.accessToken
  const data = {
    path: path,
    width: width,
    auto_color: autoColor,
    line_color: lineColor,
    is_hyaline: isHyaline || false
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取临时小程序码（圆形的）
 * 详情请见：<https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html>
 * @param {String} scene
 * @param {String} page
 * @param {String} width
 * @param {String} autoColor
 * @param {String} lineColor
 */
exports.getWxaQrcodeUnlimit = async function (scene, page, width, autoColor, lineColor, isHyaline) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getwxacodeunlimit?access_token=' + token.accessToken
  const data = {
    scene: scene,
    page: page,
    width: width,
    auto_color: autoColor,
    line_color: lineColor,
    is_hyaline: isHyaline || false
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取小程序二维码
 * 详情请见：<https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html>
 * @param {String} path
 * @param {String} width
 */
exports.createWxaQrcode = async function (path, width) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'createwxaqrcode?access_token=' + token.accessToken
  const data = {
    path: path,
    width: width
  }

  return this.request(url, postJSON(data))
}
