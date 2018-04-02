微信小程序第三方平台api for es6
===========

## 功能列表
- 数据分析
- 权限管理
- 代码模板管理
- 代码管理
- 域名设置
- 多媒体(图片)
- 客服消息
- 附近的位置
- 开放平台
- 小程序插件
- 跳转二维码
- 小程序二维码
- 基本设置
- 模板消息
- 体验者设置
- 获取用户信息


## Installation

```sh
$ npm install wxapp-open-api
```

## Usage
```js
const WxappApi = require('wxapp-open-api')
let wxappApi = new WxappApi(appId, appSecret, authorizerAppid, authorizerRefreshToken, ticket)
let preAuthCode = await wxappApi.createPreAuthCode()
```
