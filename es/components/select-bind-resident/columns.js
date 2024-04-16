import React from 'react';
import BusinessAccountPopover from '../check-popover';
export var identityMap = {
  family: '家属',
  proprietor: '业主',
  tenant: '租户',
  tenant_family: '租户家属',
  tenantFamily: '租户家属'
};
export var carIdentityMap = {
  family: '家属',
  proprietor: '车位业主',
  tenant: '租户',
  tenant_family: '租户家属',
  tenantFamily: '租户家属'
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
export var bindSourceMap = {
  0: '客户中台手动添加',
  1: '企微手动添加',
  2: '其他手动添加',
  3: '手动导入',
  4: '星河接口获取',
  5: '极致接口获取'
};
export var columns = [{
  title: '住户',
  dataIndex: 'name',
  key: 'name',
  ellipsis: true,
  hideInSearch: true,
  width: 150,
  render: function render(_, record) {
    return /*#__PURE__*/React.createElement(BusinessAccountPopover, {
      name: record.name,
      id: record.residentHouseId,
      type: record.type,
      trigger: "hover",
      zIndex: 2002,
      placement: "bottomLeft",
      getPopupContainer: function getPopupContainer() {
        return document.querySelector('#root');
      }
    });
  }
}, {
  title: '绑定资产',
  dataIndex: 'fullName',
  key: 'fullName',
  ellipsis: true,
  hideInSearch: true
}, {
  title: '身份',
  dataIndex: 'type',
  key: 'type',
  hideInSearch: true,
  width: 100,
  render: function render(_, record) {
    return identityMap[record.type];
  }
}, {
  title: '绑定时间',
  dataIndex: 'bindDate',
  key: 'bindDate',
  hideInSearch: true,
  render: function render(value, records) {
    var _records$bindDate, _records$bindDate2;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_records$bindDate = records.bindDate) === null || _records$bindDate === void 0 ? void 0 : _records$bindDate.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_records$bindDate2 = records.bindDate) === null || _records$bindDate2 === void 0 ? void 0 : _records$bindDate2.slice(10, 16)));
  }
}, {
  title: '来源',
  dataIndex: 'bindSource',
  key: 'bindSource',
  ellipsis: true,
  render: function render(_, record) {
    return bindSourceMap[record.bindSource];
  }
}];