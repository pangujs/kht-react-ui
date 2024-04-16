import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import BusinessDetailDrawer, { businessTypeTextMap } from '../business-detail-drawer';
// 各种业务详情组件
export default function BusinessDetailText(props) {
  var _props$text = props.text,
    text = _props$text === void 0 ? '[详情]' : _props$text,
    _props$businessType = props.businessType,
    businessType = _props$businessType === void 0 ? 'proprietor' : _props$businessType,
    residentId = props.residentId,
    businessId = props.businessId;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var openDetail = function openDetail(e) {
    e.stopPropagation();
    setOpen(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    onClick: openDetail
  }, text), /*#__PURE__*/React.createElement(BusinessDetailDrawer, {
    open: open,
    title: "".concat(businessTypeTextMap[businessType], "\u8BE6\u60C5"),
    onClose: function onClose() {
      return setOpen(false);
    },
    businessType: businessType,
    residentId: residentId,
    businessId: businessId
  }));
}