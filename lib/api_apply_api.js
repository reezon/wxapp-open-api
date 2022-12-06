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

  /**
 * 获取订单页 path 信息
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/basic-info-management/getOrderPathInfo.html
 */
exports.getOrderPathInfo = async function (info_type){
    let token = await this.ensureAccessToken()
    let url = this.wxappPrefix + 'security/getorderpathinfo?access_token=' + token.accessToken
    let data = {
        info_type
    }
    
    return this.request(url, postJSON(data))
  }

  /**
 * 申请设置订单页 path 信息
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/basic-info-management/applySetOrderPathInfo.html
 */
exports.applySetOrderPathInfo = async function (path, img_list, video, test_account, test_pwd, test_remark, appid_list){
    const componentAccessToken = await this.ensureComponentToken()

    let url = this.wxappPrefix + 'security/applysetorderpathinfo?component_access_token=' + componentAccessToken.componentAccessToken

    let data = {
        batch_req: {
            path,
            appid_list
        }
    }

    if (img_list) {
        data.batch_req.img_list = img_list
    }

    if (video) {
        data.batch_req.video = video
    }

    if (test_account) {
        data.batch_req.test_account = test_account
    }

    if (test_pwd) {
        data.batch_req.test_pwd = test_pwd
    }

    if (test_remark) {
        data.batch_req.test_remark = test_remark
    }

    return this.request(url, postJSON(data))
  }