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
export var residentColumns = [{
  title: '住户',
  dataIndex: 'name',
  ellipsis: true,
  hideInSearch: true,
  render: function render(_, record) {
    return /*#__PURE__*/React.createElement(BusinessAccountPopover, {
      name: record.name,
      id: record.id,
      type: record.type,
      trigger: "hover",
      placement: "bottomRight",
      zIndex: 2002
    });
  }
}, {
  title: '绑定资产',
  dataIndex: 'fullName',
  ellipsis: true,
  hideInSearch: true
}, {
  title: '身份',
  dataIndex: 'type',
  ellipsis: true,
  hideInSearch: true,
  width: 100,
  render: function render(_, record) {
    return identityMap[record.type];
  }
}];
export var carColumns = [{
  title: '住户',
  dataIndex: 'name',
  ellipsis: true,
  hideInSearch: true,
  render: function render(_, record) {
    return /*#__PURE__*/React.createElement(BusinessAccountPopover, {
      name: record.name,
      id: record.residentHouseId,
      type: record.residentType,
      trigger: "hover",
      placement: "bottomRight",
      zIndex: 2002
    });
  }
}, {
  title: '绑定资产',
  dataIndex: 'carPlaceFullName',
  ellipsis: true,
  hideInSearch: true
}, {
  title: '身份',
  dataIndex: 'residentType',
  ellipsis: true,
  hideInSearch: true,
  width: 100,
  render: function render(_, record) {
    return carIdentityMap[record.residentType];
  }
}];