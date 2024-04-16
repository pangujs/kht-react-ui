import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { changeMobileTxt } from '../../../../utils';
import { Space } from 'antd';
import React, { useState } from 'react';
import { KhtIcons } from '../../../..';
export default function MobileText(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMobile = _useState2[0],
    setShowMobile = _useState2[1];
  var showMobileClick = function showMobileClick(e) {
    e.stopPropagation();
    setShowMobile(!showMobile);
  };
  return /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("span", null, showMobile ? value : changeMobileTxt(value)), /*#__PURE__*/React.createElement("span", {
    onClick: showMobileClick
  }, showMobile ? /*#__PURE__*/React.createElement(KhtIcons, {
    style: {
      color: '#999'
    },
    type: "icon-xianshi"
  }) : /*#__PURE__*/React.createElement(KhtIcons, {
    type: "icon-yincang",
    style: {
      color: '#999'
    }
  })));
}