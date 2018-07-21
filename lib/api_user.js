const crypto = require('crypto')

class WXBizDataCrypt {
  constructor (appId, sessionKey) {
    this.appId = appId
    this.sessionKey = sessionKey
  }

  decryptData (encryptedData, iv) {
    // base64 decode
    const sessionKey = Buffer.from(this.sessionKey, 'base64')
    encryptedData = Buffer.from(encryptedData, 'base64')
    iv = Buffer.from(iv, 'base64')

    let decoded = ''
    try {
      // 解密
      const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv)
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true)
      decoded = decipher.update(encryptedData, 'binary', 'utf8')
      decoded += decipher.final('utf8')

      decoded = JSON.parse(decoded)
    } catch (err) {
      throw new Error('Illegal Buffer')
    }

    if (decoded.watermark.appid !== this.appId) {
      throw new Error('Illegal Buffer')
    }

    return decoded
  }
}

/**
 * code 换取 session_key
 * @param {String} code
 */
exports.jscode2session = async function (code) {
  const componentToken = await this.ensureComponentToken()
  const url = `https://api.weixin.qq.com/sns/component/jscode2session?appid=${
    this.appid
  }&js_code=${code}&grant_type=authorization_code&component_appid=${
    this.componentAppid
  }&component_access_token=${componentToken.componentAccessToken}`
  return this.request(url)
}

/**
 * 获取用户信息
 * @param {String} encryptedData
 * @param {String} iv
 * @param {String} code
 */
exports.getUserInfo = async function (encryptedData, iv, code) {
  const session = await this.jscode2session(code)
  const sessionKey = session.session_key

  const pc = WXBizDataCrypt(this.appid, sessionKey)
  return pc.decryptData(encryptedData, iv)
}
