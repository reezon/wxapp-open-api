'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 获取帐号基本信息
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>

 */
exports.getAccountBasicInfo = async function () {
  const token = await this.ensureAccessToken()
  const url = this.prefix + 'account/getaccountbasicinfo?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 小程序名称设置及改名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>
 * @param {String} nickName 昵称
 * @param {String} idCard 身份证照片–临时素材mediaid
 * @param {String} license 组织机构代码证或营业执照–临时素材mediaid
 * @param {String} namingOtherStuff1 其他证明材料---临时素材 mediaid
 * @param {String} namingOtherStuff2 其他证明材料---临时素材 mediaid
 * @param {String} namingOtherStuff3 其他证明材料---临时素材 mediaid
 * @param {String} namingOtherStuff4 其他证明材料---临时素材 mediaid
 * @param {String} namingOtherStuff5 其他证明材料---临时素材 mediaid
 */
exports.setNickName = async function (nickName, idCard, license, namingOtherStuff1, namingOtherStuff2, namingOtherStuff3, namingOtherStuff4, namingOtherStuff5) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'setnickname?access_token=' + token.accessToken
  const data = {
    nick_name: nickName,
    id_card: idCard,
    license: license,
    naming_other_stuff_1: namingOtherStuff1,
    naming_other_stuff_2: namingOtherStuff2,
    naming_other_stuff_3: namingOtherStuff3,
    naming_other_stuff_4: namingOtherStuff4,
    naming_other_stuff_5: namingOtherStuff5
  }

  return this.request(url, postJSON(data))
}

/**
 * 小程序改名审核状态查询
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>
 * @param {String} auditId
 */
exports.queryNickName = async function (auditId) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'api_wxa_querynickname?access_token=' + token.accessToken
  const data = {
    audit_id: auditId
  }

  return this.request(url, postJSON(data))
}

/**
 * 微信认证名称检测
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>
 * @param {String} nick_name
 */
exports.checkWxVerifyNickName = async function (nickName) {
  const token = await this.ensureAccessToken()
  const url = this.prefix + 'wxverify/checkwxverifynickname?access_token=' + token.accessToken
  const data = {
    nick_name: nickName
  }

  return this.request(url, postJSON(data))
}

/**
 * 修改头像
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>
 * @param {String} headImgMediaId 头像素材media_id
 * @param {Decimal} x1 裁剪框左上角x坐标（取值范围：[0, 1]）
 * @param {Decimal} y1 裁剪框左上角y坐标（取值范围：[0, 1]）
 * @param {Decimal} x2 裁剪框右下角x坐标（取值范围：[0, 1]）
 * @param {Decimal} y2 裁剪框右下角y坐标（取值范围：[0, 1]）
 */
exports.modifyHeadImage = async function (headImgMediaId, x1, y1, x2, y2) {
  const token = await this.ensureAccessToken()
  const url = this.prefix + 'account/modifyheadimage?access_token=' + token.accessToken
  const data = {
    head_img_media_id: headImgMediaId,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  }

  return this.request(url, postJSON(data))
}

/**
 * 修改功能介绍
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>
 * @param {String} signature 功能介绍（简介）
 */
exports.modifySignature = async function (signature) {
  const token = await this.ensureAccessToken()
  const url = this.prefix + 'account/modifysignature?access_token=' + token.accessToken
  const data = {
    signature: signature
  }

  return this.request(url, postJSON(data))
}

/**
 * 管理员换绑
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>
 * @param {String} taskId 换绑管理员任务序列号(公众平台最终点击提交回跳到第三方平台时携带)
 */
exports.componentRebindAdmin = async function (taskId) {
  const token = await this.ensureAccessToken()
  const url = this.prefix + 'account/componentrebindadmin?access_token=' + token.accessToken
  const data = {
    taskid: taskId
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取账号可以设置的所有类目
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>

 */
exports.getAllCategories = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxopenPrefix + 'getallcategories?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 添加类目
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>
 * @param {Number} first 一级类目ID
 * @param {Number} second 二级类目ID
 * @param {String} key 资质名称
 * @param {String} value 资质图片media_id
 */
exports.addCategory = async function (first, second, key, value) {
  const token = await this.ensureAccessToken()
  const url = this.wxopenPrefix + 'addcategory?access_token=' + token.accessToken
  const data = {
    categories: [{
      first: first,
      second: second,
      certicates: [{
        key: key,
        value: value
      }]
    }]
  }

  return this.request(url, postJSON(data))
}

/**
 * 删除类目
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>
 * @param {Number} first 一级类目ID
 * @param {Number} second 二级类目ID
 */
exports.deleteCategory = async function (first, second) {
  const token = await this.ensureAccessToken()
  const url = this.wxopenPrefix + 'deletecategory?access_token=' + token.accessToken
  const data = {
    first: first,
    second: second
  }

  return this.request(url, postJSON(data))
}

/**
 * 获取账号已经设置的所有类目
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>

 */
exports.getCodeCategory = async function () {
  const token = await this.ensureAccessToken()
  const url = this.wxopenPrefix + 'getcategory?access_token=' + token.accessToken

  return this.request(url)
}

/**
 * 修改类目
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21528465979XX32V&token=&lang=zh_CN>
 * @param {Number} first 一级类目ID
 * @param {Number} second 二级类目ID
 * @param {String} key 资质名称
 * @param {String} value 资质图片media_id
 */
exports.modifyCategory = async function (first, second, key, value) {
  const token = await this.ensureAccessToken()
  const url = this.wxopenPrefix + 'modifycategory?access_token=' + token.accessToken
  const data = {
    first: first,
    second: second,
    certicates: [{
      key: key,
      value: value
    }]
  }

  return this.request(url, postJSON(data))
}
