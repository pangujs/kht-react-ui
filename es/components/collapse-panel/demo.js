import { Button, Space } from 'antd';
import React, { useRef } from 'react';
import KhtCollapsePanel from './index';
export default (function () {
  var collapsePanelRef = useRef(null);
  /** 通过 Ref 去操作展开状态 */
  var changeStatus = function changeStatus(type) {
    var _collapsePanelRef$cur;
    (_collapsePanelRef$cur = collapsePanelRef.current) === null || _collapsePanelRef$cur === void 0 ? void 0 : _collapsePanelRef$cur.changeCollapseState(type);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return changeStatus(false);
    }
  }, "\u6536\u8D77"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return changeStatus(true);
    }
  }, "\u5C55\u5F00")), /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 500
    }
  }, /*#__PURE__*/React.createElement(KhtCollapsePanel, {
    collapsePanelRef: collapsePanelRef
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%'
    },
    key: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%'
    },
    key: "right"
  }))), /*#__PURE__*/React.createElement("div", null, "\u53F3\u4FA7")));
});