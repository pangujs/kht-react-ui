import React from 'react';
import { Tooltip } from 'antd';
import BusinessAccountPopover from '../check-popover';
export var columns = [{
  title: '群名称',
  dataIndex: 'name',
  ellipsis: true,
  hideInSearch: true,
  render: function render(val, record) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BusinessAccountPopover, {
      name: record === null || record === void 0 ? void 0 : record.name,
      id: record.id,
      type: 'group',
      trigger: "hover"
    }));
  }
}, {
  title: '群分类',
  dataIndex: 'classifyName',
  ellipsis: true,
  hideInSearch: true
}, {
  title: '所属项目',
  dataIndex: 'communityName',
  ellipsis: true,
  hideInSearch: true,
  render: function render(val, record) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
      getPopupContainer: function getPopupContainer() {
        return document.querySelector('#root');
      },
      placement: "top",
      color: "#fff",
      overlayInnerStyle: {
        color: '#000'
      },
      title: record.communityName
    }, /*#__PURE__*/React.createElement("span", null, record.communityName)));
  }
}];