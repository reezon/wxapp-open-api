'use strict'

const util = require('./util')
const postJSON = util.postJSON
const path = require('path')
const formstream = require('formstream')
const fs = require('co-fs')

/**
 * 配置小程序用户隐私保护指引
 * <https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/set_privacy_setting.html>
 */
exports.setPrivacySetting = async function (contact_email, contact_phone, contact_qq, contact_weixin, ext_file_media_id, notice_method, store_expire_timestamp, setting_list){
    const token = await this.ensureAccessToken()
    const url = this.prefix + 'component/setprivacysetting?access_token=' + token.accessToken
    let data = {
        owner_setting: {
            notice_method
        }
    }

    if (contact_email) {
        data.owner_setting.contact_email = contact_email
    }

    if (contact_phone) {
        data.owner_setting.contact_phone = contact_phone
    }

    if (contact_qq) {
        data.owner_setting.contact_qq = contact_qq
    }

    if (contact_weixin) {
        data.owner_setting.contact_weixin = contact_weixin
    }

    if (ext_file_media_id) {
        data.owner_setting.ext_file_media_id = ext_file_media_id
    }

    if (store_expire_timestamp) {
        data.owner_setting.store_expire_timestamp = store_expire_timestamp
    }

    data.setting_list = setting_list
  
    return this.request(url, postJSON(data))
}

/**
 * 查询小程序用户隐私保护指引
 * <https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/get_privacy_setting.html>
 */
exports.getPrivacySetting = async function (){
    const token = await this.ensureAccessToken()
    const url = this.prefix + 'component/getprivacysetting?access_token=' + token.accessToken
    const data = {}
  
    return this.request(url, postJSON(data))
}

/**
 * 上传小程序用户隐私保护指引
 * <https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/upload_privacy_exfile.html>
 */
exports.uploadPrivacyExtFile = async function (filepath){
    const token = await this.ensureAccessToken()
    const url = this.prefix + 'component/uploadprivacyextfile?access_token=' + token.accessToken
    const stat = await fs.stat(filepath)
    const form = formstream()
    form.file('file', filepath, path.basename(filepath), stat.size)
    let opts = {
        method: 'POST',
        headers: form.headers(),
        data: form
    }
    opts.headers.Accept = 'application/json'

    return this.request(url, opts)
}
