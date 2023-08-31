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
// 订阅消息
API.mixin(require('./lib/api_new_template'))
// 扫码关注组件
API.mixin(require('./lib/api_subscribe_biz'))
// 物流助手
API.mixin(require('./lib/api_express_business'))
// 获取小程序scheme码
API.mixin(require('./lib/api_scheme'))
// 小程序搜索
API.mixin(require('./lib/api_search'))
// 违规和申诉管理
API.mixin(require('./lib/api_records'))
// 动态消息
API.mixin(require('./lib/api_updatable_message'))
// 快速创建试用小程序
API.mixin(require('./lib/api_fast_register_beta_weapp'))
// 运维中心
API.mixin(require('./lib/api_operation'))
// 小程序用户隐私保护指引
API.mixin(require('./lib/api_privacy'))
// 违规和申诉管理
API.mixin(require('./lib/api_record'))
// 申请隐私接口
API.mixin(require('./lib/api_apply_api'))
// 服务市场接口
API.mixin(require('./lib/api_charge'))
// ICP备案接口
API.mixin(require('./lib/api_icp'))

module.exports = API
