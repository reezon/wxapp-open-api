const API = require('./lib/api_common')
// 授权
API.mixin(require('./lib/api_auth'))
// 代码模板
API.mixin(require('./lib/api_code_template'))
// 代码
API.mixin(require('./lib/api_code'))
// 域名
API.mixin(require('./lib/api_domain'))
// 多媒体
API.mixin(require('./lib/api_media'))
// 客服消息
API.mixin(require('./lib/api_message'))
// 附近的位置
API.mixin(require('./lib/api_nearby'))
// 开放平台
API.mixin(require('./lib/api_open'))
// 二维码规则
API.mixin(require('./lib/api_qrcode_jump'))
// 插件
API.mixin(require('./lib/api_plugin'))
// 二维码
API.mixin(require('./lib/api_qrcode'))
// 基本设置
API.mixin(require('./lib/api_settings'))
// 模板消息
API.mixin(require('./lib/api_template'))
// 体验者
API.mixin(require('./lib/api_tester'))
// 用户
API.mixin(require('./lib/api_user'))
// 账号
API.mixin(require('./lib/api_account'))
// 快速创建小程序
API.mixin(require('./lib/api_fast_register_weapp'))
// 内容安全
API.mixin(require('./lib/api_sec_check'))
// 搜索widget
API.mixin(require('./lib/api_mall'))

module.exports = API
