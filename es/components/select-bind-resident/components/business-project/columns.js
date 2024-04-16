import React from 'react';
import { Popover } from 'antd';
import "./index.css";
//项目
export var columns = [{
  title: '项目',
  dataIndex: 'name',
  ellipsis: true
}, {
  title: '所属机构',
  dataIndex: 'organizationName',
  render: function render(value, result) {
    return /*#__PURE__*/React.createElement(Popover, {
      placement: "bottomLeft",
      overlayClassName: "current-dept-name-popover",
      zIndex: 1200,
      getPopupContainer: function getPopupContainer() {
        return document.querySelector('#root');
      },
      content: (result === null || result === void 0 ? void 0 : result.organizationFullName) || value
    }, /*#__PURE__*/React.createElement("span", {
      className: "dept-tooltip-style"
    }, value));
  }
}, {
  title: '管理部门',
  dataIndex: 'departmentName',
  render: function render(value, result) {
    return /*#__PURE__*/React.createElement(Popover, {
      placement: "bottomLeft",
      overlayClassName: "current-dept-name-popover",
      zIndex: 1200,
      getPopupContainer: function getPopupContainer() {
        return document.querySelector('#root');
      },
      content: (result === null || result === void 0 ? void 0 : result.departmentFullName) || value
    }, /*#__PURE__*/React.createElement("span", {
      className: "dept-tooltip-style"
    }, value));
  }
}, {
  title: '所属地区',
  dataIndex: 'name',
  ellipsis: true,
  render: function render(_, result) {
    return /*#__PURE__*/React.createElement(Popover, {
      placement: "bottomLeft",
      overlayClassName: "current-dept-name-popover",
      zIndex: 1200,
      getPopupContainer: function getPopupContainer() {
        return document.querySelector('#root');
      },
      content: /*#__PURE__*/React.createElement("span", null, (result === null || result === void 0 ? void 0 : result.province) || '', (result === null || result === void 0 ? void 0 : result.city) ? '/' + (result === null || result === void 0 ? void 0 : result.city) : '', (result === null || result === void 0 ? void 0 : result.district) ? '/' + (result === null || result === void 0 ? void 0 : result.district) : '')
    }, /*#__PURE__*/React.createElement("span", {
      className: "dept-tooltip-style"
    }, /*#__PURE__*/React.createElement("span", null, (result === null || result === void 0 ? void 0 : result.province) || '', (result === null || result === void 0 ? void 0 : result.city) ? '/' + (result === null || result === void 0 ? void 0 : result.city) : '', (result === null || result === void 0 ? void 0 : result.district) ? '/' + (result === null || result === void 0 ? void 0 : result.district) : '')));
  }
}];