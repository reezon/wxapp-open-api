'use strict'
const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取永久小程序码（圆形的）
 * 详情请见：<https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html>
 * @param {*} path
 * @param {*} width
 * @param {*} autoColor
 * @param {*} lineColor
 */
exports.getWxaQrcode = async function (path, width, autoColor, lineColor) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getwxacode?access_token=' + token.accessToken
  const data = {
    path: path,
    width: width,
    auto_color: autoColor,
    line_color: lineColor
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取临时小程序码（圆形的）
 * 详情请见：<https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html>
 * @param {*} scene
 * @param {*} page
 * @param {*} width
 * @param {*} autoColor
 * @param {*} lineColor
 */
exports.getWxaQrcodeUnlimit = async function (scene, page, width, autoColor, lineColor) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'getwxacodeunlimit?access_token=' + token.accessToken
  const data = {
    scene: scene,
    page: page,
    width: width,
    auto_color: autoColor,
    line_color: lineColor
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取小程序二维码
 * 详情请见：<https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html>
 * @param {*} path
 * @param {*} width
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
