import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState } from 'react';
import KhtStackUp from './index';
import BusinessDeptUserTree from '@src/business-dept-user-tree';
import { Button } from 'antd';
export default (function () {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var stackUpRef = useRef(null);
  var onChange = function onChange(keys, info) {
    setList(info.selectedNodes);
  };
  var changeStatus = function changeStatus(type) {
    var _stackUpRef$current;
    (_stackUpRef$current = stackUpRef.current) === null || _stackUpRef$current === void 0 ? void 0 : _stackUpRef$current.setClosingStatus(type);
  };
  var RightChildren = function RightChildren() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, list === null || list === void 0 ? void 0 : list.map(function (item) {
      return /*#__PURE__*/React.createElement("div", null, item.title);
    }));
  };
  var onShrinks = function onShrinks(isClosing) {
    console.log(isClosing);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return changeStatus(true);
    }
  }, "\u6536\u8D77"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return changeStatus(false);
    }
  }, "\u5C55\u5F00")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 500
    }
  }, /*#__PURE__*/React.createElement(KhtStackUp, {
    baseChildren: /*#__PURE__*/React.createElement(BusinessDeptUserTree, {
      multiple: true,
      onChange: onChange
    }),
    stackUpRef: stackUpRef,
    rightChildren: /*#__PURE__*/React.createElement(RightChildren, null),
    onShrinks: onShrinks,
    isDefaultClose: true
  })));
});