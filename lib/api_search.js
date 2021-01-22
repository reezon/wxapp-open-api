'use strict'

const util = require('./util')
const postJSON = util.postJSON

/**
 * 提交页面
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/search/search.submitPages.html>
 * @param {Array} pages
 */
exports.searchSubmitPages = async function (pages) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'search/wxaapi_submitpages?access_token=' + token.accessToken
  let data = {
    pages
  }

  return this.request(url, postJSON(data))
}

/**
 * 查看页面收录情况
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/search/search.siteSearch.html>
 * @param {String} keyword
 * @param {String} nextPageInfo
 */
exports.siteSearch = async function (keyword, nextPageInfo) {
  const token = await this.ensureAccessToken()
  const url = this.wxappPrefix + 'sitesearch?access_token=' + token.accessToken
  let data = {
    keyword: keyword,
    next_page_info: nextPageInfo
  }

  return this.request(url, postJSON(data))
}