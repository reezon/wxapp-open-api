'use strict'

const util = require('./util')
const formstream = require('formstream')
const fs = require('co-fs')
const path = require('path')
const postJSON = util.postJSON

/**
 * 检查一段文本是否含有违法违规内容
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/dev/api/msgSecCheck.html>
 * @param {String} content
 */
exports.msgSecCheck = async function (content) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'msg_sec_check?access_token=' + token.accessToken
  const data = {
    content: content
  }

  return this.request(url, postJSON(data))
}

/**
 * 校验一张图片是否含有违法违规内容
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/dev/api/imgSecCheck.html>
 * @param {String} filepath
 */
exports.imgSecCheck = async function (filepath) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'img_sec_check?access_token=' + token.accessToken
  const stat = await fs.stat(filepath)
  const form = formstream()
  form.file('media', filepath, path.basename(filepath), stat.size)
  let opts = {
    method: 'POST',
    timeout: 60000, // 60秒超时
    headers: form.headers(),
    data: form
  }
  opts.headers.Accept = 'application/json'

  return this.request(url, opts)
}
