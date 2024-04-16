export var identityMap = {
  family: '家属',
  proprietor: '业主',
  tenant: '租户',
  tenant_family: '租户家属'
};
export var customerStatusMap = {
  '0': '正常',
  '1': '已流失'
};
export var bindingState = {
  '1': '已绑定',
  '2': '已解绑'
};
export var bindResidentState = {
  '0': '未绑定',
  '1': '已绑定'
};
export var demandMap = {
  '1': '30%以下',
  '2': '30%-50%',
  '3': '51%-70%',
  '4': '71%-90%',
  '5': '91%-100%'
};
export var customerTypeMap = {
  wechat: '微信',
  wxwork: '企业微信'
};
export var materialTypeMap = {
  4: '图片',
  5: '视频',
  7: '图文',
  6: '链接',
  8: '小程序',
  3: '文件'
};
export var followTypeMap = {
  visit: '拜访',
  weCom: '企微联系',
  phone: '电话联系',
  online_meet: '线上会议',
  others: '其他跟进'
};
// 住宅 词典
export var houseTypeList = [{
  label: '全部',
  value: ''
}, {
  label: '住宅',
  value: 'residence'
}, {
  label: '商铺',
  value: 'shop'
}, {
  label: '公寓',
  value: 'apartment'
}, {
  label: '别墅',
  value: 'villa'
}, {
  label: '洋房',
  value: 'foreignStyle'
}, {
  label: '写字楼',
  value: 'officeBuilding'
}, {
  label: '其他',
  value: 'other'
}];
// 业主 词典
export var owerTypeList = [{
  label: '业主',
  value: 'proprietor'
}, {
  label: '家属',
  value: 'family'
}, {
  label: '租户',
  value: 'tenant'
}];
// 绑定 词典
export var bindStateList = [{
  label: '已绑定',
  value: '1'
}, {
  label: '已解绑',
  value: '2'
}];
// 标签类型
export var tagTypeList = [{
  label: '企微标签',
  value: '1'
}, {
  label: '需求标签',
  value: '2'
}];
// 标签使用状态
export var tagStateList = [{
  label: '使用中',
  value: 0
}, {
  label: '已取消',
  value: 1
}];
export var userSourceMap = {
  wxworkCustomer: '企微客户',
  wechatCustomer: '微信客户',
  wechatApplet: '微信小程序',
  wechatOfficialAccount: '微信公众号'
};
// 客户来源字典
export var customerSourceMap = {
  0: '未知来源',
  1: '扫描二维码',
  2: '搜索手机号',
  3: '名片分享',
  4: '群聊',
  5: '手机通讯录',
  6: '微信联系人',
  8: '安装第三方应用时自动添加的客服人员',
  9: '搜索邮箱',
  10: '视频号添加',
  11: '通过日程参与人添加',
  12: '通过会议参与人添加',
  13: '添加微信好友对应的企业微信',
  14: '通过智慧硬件专属客服添加',
  201: '内部成员共享',
  202: '管理员/负责人分配'
};
export var relationOption = [{
  value: 'spouse',
  label: '配偶'
}, {
  value: 'children',
  label: '子女'
}, {
  value: 'parent',
  label: '父母'
}, {
  value: 'brotherSister',
  label: '兄弟姐妹'
}, {
  value: 'relative',
  label: '亲戚'
}, {
  value: 'grandparent',
  label: '祖父母'
}, {
  value: 'other',
  label: '其他'
}];
export var ownershipTypeOptions = [{
  label: '私有',
  value: 2
}, {
  label: '共有',
  value: 1
}];
export var businessTypeOptions = [{
  label: '个人',
  value: '1'
}, {
  label: '企业',
  value: '2'
}];