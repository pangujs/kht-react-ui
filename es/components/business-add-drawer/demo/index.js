import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Space } from 'antd';
import React, { useState } from 'react';
import BusinessAddDrawer from '..';
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState('property_company'),
    _useState4 = _slicedToArray(_useState3, 2),
    businessType = _useState4[0],
    setBusinessType = _useState4[1];
  var onOkCb = function onOkCb() {
    console.log('onOkCb');
  };
  var _onClick = function onClick(val) {
    setBusinessType(val);
    setOpen(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return _onClick('property_company');
    }
  }, "\u65B0\u589E\u7269\u4E1A\u516C\u53F8"), /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return _onClick('proprietor');
    }
  }, "\u65B0\u589E\u4E1A\u4E3B"), /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return _onClick('family');
    }
  }, "\u65B0\u589E\u5BB6\u5C5E"), /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return _onClick('tenant');
    }
  }, "\u65B0\u589E\u79DF\u6237"), /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return _onClick('tenant_family');
    }
  }, "\u65B0\u589E\u79DF\u6237\u5BB6\u5C5E")), /*#__PURE__*/React.createElement(BusinessAddDrawer, {
    open: open,
    onOpenChange: setOpen,
    onOkCb: onOkCb,
    businessType: businessType,
    handleType: "add",
    houseInfo: {
      fullName: '花溪镇/1期/53号楼/1单元/1楼/0',
      id: '08e194d5a7484049bd9ea67559a97093',
      communityId: 'd77a2deffab74962a9b3a65e964b94b0'
    }
  }));
});