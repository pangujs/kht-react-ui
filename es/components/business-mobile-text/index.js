import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Popover, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { changeMobileTxt } from '../../utils';
import KhtIcons from '../kht-icons';
export default function MobileText(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$valueName = props.valueName,
    valueName = _props$valueName === void 0 ? '' : _props$valueName,
    _props$tips = props.tips,
    tips = _props$tips === void 0 ? '个手机号' : _props$tips,
    getPopupContainer = props.getPopupContainer;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMobile = _useState2[0],
    setShowMobile = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    firstVal = _useState6[0],
    setFirstVal = _useState6[1];
  var showMobileClick = function showMobileClick(e) {
    e.stopPropagation();
    setShowMobile(!showMobile);
  };
  useEffect(function () {
    if (!value) return;
    if (Object.prototype.toString.call(value) === '[object Array]') {
      // 数组
      setList(_toConsumableArray(value));
      if (Object.prototype.toString.call(value[0]) === '[object Object]') {
        setFirstVal(value[0][valueName]);
      } else {
        setFirstVal(value[0]);
      }
    } else {
      setList([value]);
      setFirstVal(value);
    }
  }, [value]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, list.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("span", null, showMobile ? firstVal : changeMobileTxt(firstVal)), /*#__PURE__*/React.createElement("span", {
    onClick: showMobileClick,
    style: {
      cursor: 'pointer'
    }
  }, showMobile ? /*#__PURE__*/React.createElement(KhtIcons, {
    type: "icon-xianshi"
  }) : /*#__PURE__*/React.createElement(KhtIcons, {
    type: "icon-yincang"
  }))), list.length > 1 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Popover, {
    getPopupContainer: getPopupContainer ? getPopupContainer : function (node) {
      return node || document.body;
    },
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 350,
        maxHeight: 150,
        overflowY: 'auto',
        wordWrap: 'break-word'
      }
    }, list.map(function (val) {
      var str = Object.prototype.toString.call(val) === '[object Object]' ? val[valueName] : val;
      return showMobile ? str : changeMobileTxt(str);
    }).join(','))
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#1890ff',
      cursor: 'pointer'
    }
  }, "\u7B49", list.length, tips))) : null) : '-');
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};