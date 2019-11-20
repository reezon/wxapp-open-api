'use strict'

const path = require('path')
const formstream = require('formstream')
const fs = require('co-fs')

/**
* 获取临时素材
* 详情请见：<http://mp.weixin.qq.com/wiki/11/07b6b76a6b6e8848e855a435d5e34a5f.html>
* Examples:
* ```
* api.getMedia('media_id');
* ```
* - `result`, 调用正常时得到的文件Buffer对象
* - `res`, HTTP响应对象
* @param {String} mediaId 媒体文件的ID
 */
exports.getMedia = async function (mediaId) {
  const token = await this.ensureAccessToken()
  let url = this.mediaPrefix + 'get?access_token=' + token.accessToken

  url += '&media_id=' + mediaId

  return this.request(url)
}

/**
* 上传图文消息内的图片获取URL
* 详情请见：<https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html>
* Examples:
* ```
* api.uploadImage('filepath');
* ```
* Result:
* ```
* {"url":  "http://mmbiz.qpic.cn/mmbiz/gLO17UPS6FS2xsypf378iaNhWacZ1G1UplZYWEYfwvuU6Ont96b1roYsCNFwaRrSaKTPCUdBK9DgEHicsKwWCBRQ/0"}
* ```
* @param {String} filepath 图片文件路径
 */
exports.uploadImage = async function (filepath) {
  const token = await this.ensureAccessToken()
  const url = this.mediaPrefix + 'upload?access_token=' + token.accessToken + '&type=image'
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

/**
* 上传多媒体获取URL
* @param {String} filepath 文件路径
* @param {String} mediatype 多媒体类型
 */
exports.uploadMedia = async function (filepath, mediatype) {
  const token = await this.ensureAccessToken()
  const url = this.mediaPrefix + 'upload?access_token=' + token.accessToken + '&type=' + mediatype
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
