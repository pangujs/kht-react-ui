import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import { Popover } from 'antd';
import { changeMobileTxt } from '../../../utils';
function MobileText(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    nativeProps = props.nativeProps,
    _props$hideMobile = props.hideMobile,
    hideMobile = _props$hideMobile === void 0 ? true : _props$hideMobile,
    _props$tips = props.tips,
    tips = _props$tips === void 0 ? '个手机号' : _props$tips,
    _props$max = props.max,
    max = _props$max === void 0 ? 1 : _props$max;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMobile = _useState2[0],
    setShowMobile = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  var valueArr = useRef([]);
  var showMobileClick = function showMobileClick(e) {
    e.stopPropagation();
    setList(valueArr.current.map(function (tel) {
      return !showMobile ? tel : changeMobileTxt(tel);
    }));
    setShowMobile(!showMobile);
  };
  function RenderInTable(text, hasTip) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        minWidth: 120
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 95,
        display: 'inline-block',
        verticalAlign: 'middle'
      }
    }, text), /*#__PURE__*/React.createElement(React.Fragment, null, hasTip && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle'
      }
    }, "\u7B49".concat(list.length).concat(tips))), /*#__PURE__*/React.createElement(React.Fragment, null, hideMobile && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#1890ff',
        cursor: 'pointer',
        verticalAlign: 'middle'
      },
      onClick: showMobileClick
    }, showMobile ? '隐藏' : '查看')));
  }
  useEffect(function () {
    if (!value) {
      setList([]);
      return;
    }
    var strArr = typeof value === 'string' ? value.split(',') : value;
    // 如果columns里面直接丢render的第一个参数，因为传进去来的是 '-' 所以要额外处理下
    valueArr.current = strArr.filter(function (val) {
      return val && val !== '-';
    });
    setList(valueArr.current.map(function (tel) {
      return changeMobileTxt(tel);
    }));
  }, [value]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, list.length > max ? /*#__PURE__*/React.createElement(Popover, _objectSpread({
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 350,
        maxHeight: 150,
        overflowY: 'auto'
      }
    }, list.join(','))
  }, nativeProps), RenderInTable(list[0], true)) : /*#__PURE__*/React.createElement(React.Fragment, null, list.length ? /*#__PURE__*/React.createElement(React.Fragment, null, RenderInTable(list[0], false)) : /*#__PURE__*/React.createElement("span", null, "-")));
}
MobileText.width = 250;
export default MobileText;