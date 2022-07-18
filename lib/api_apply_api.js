'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取接口列表
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/apply_api/get_privacy_interface.html
 */
exports.getPrivacyInterface = async function (){
    let token = await this.ensureAccessToken()
    let url = this.wxappPrefix + 'security/get_privacy_interface?access_token=' + token.accessToken
  
    return this.request(url)
  }

/**
 * 获取隐私接口检测结果
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/code-management/getCodePrivacyInfo.html
 */
exports.getCodePrivacyInfo = async function (){
    let token = await this.ensureAccessToken()
    let url = this.wxappPrefix + 'security/get_code_privacy_info?access_token=' + token.accessToken
  
    return this.request(url)
  }

  /**
 * 申请接口
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/apply_api/apply_privacy_interface.html
 */
exports.applyPrivacyInterface = async function (api_name, content, url_list, pic_list, video_list){
    let token = await this.ensureAccessToken()
    let url = this.wxappPrefix + 'security/apply_privacy_interface?access_token=' + token.accessToken
    let data = {
        api_name, 
        content
    }

    if (url_list) {
        data.url_list = url_list
    }

    if (pic_list) {
        data.pic_list = pic_list
    }

    if (video_list) {
        data.video_list = video_list
    }

    return this.request(url, postJSON(data))
  }