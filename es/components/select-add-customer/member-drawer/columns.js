import React from 'react';
import MultipleText from '../../dept-multiple-text';
import AccountPopover from '../../check-popover';
//项目
export var columns = [{
  title: '姓名',
  dataIndex: 'name',
  ellipsis: true,
  render: function render(_, record) {
    return /*#__PURE__*/React.createElement(AccountPopover, {
      name: record.name,
      id: record.id,
      type: "employee",
      trigger: "hover",
      placement: "bottomLeft",
      getPopupContainer: function getPopupContainer() {
        return document.getElementById('root') || document.body;
      },
      zIndex: 1000
    });
  }
}, {
  title: '所属部门',
  dataIndex: 'organizationName',
  ellipsis: true,
  render: function render(value, record) {
    return /*#__PURE__*/React.createElement(MultipleText, {
      value: (record === null || record === void 0 ? void 0 : record.employeeDeptInfoList) || [],
      serviceName: "name",
      unit: "\u90E8\u95E8"
    });
  }
}];