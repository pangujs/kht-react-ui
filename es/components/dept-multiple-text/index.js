import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import CheckDeptDrawer from './check-dept-drawer';
import "./index.css";
import { Popover } from 'antd';
export default function DeptMultipleText(props) {
  var _value$;
  var _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    _props$serviceName = props.serviceName,
    serviceName = _props$serviceName === void 0 ? 'name' : _props$serviceName,
    _props$unit = props.unit,
    unit = _props$unit === void 0 ? '' : _props$unit,
    _props$isWrap = props.isWrap,
    isWrap = _props$isWrap === void 0 ? true : _props$isWrap,
    _props$valueUnit = props.valueUnit,
    valueUnit = _props$valueUnit === void 0 ? '' : _props$valueUnit;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    deptOpen = _useState2[0],
    setDeptOpen = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentValue = _useState4[0],
    setCurrentValue = _useState4[1];
  var str = '';
  if (value.length) {
    if (typeof serviceName === 'string') {
      str = value[0][serviceName];
    } else if (Object.prototype.toString.call(serviceName) === '[object Array]') {
      str = serviceName.map(function (item) {
        return value[0][item] || '';
      }).join('/') + valueUnit;
    }
  }
  var handleMore = function handleMore(value) {
    setDeptOpen(true);
    setCurrentValue(value);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, value.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "common-hover-style"
  }, /*#__PURE__*/React.createElement(Popover, {
    placement: "bottomLeft",
    overlayClassName: "current-dept-name-popover",
    zIndex: 1200,
    getPopupContainer: function getPopupContainer() {
      return document.querySelector('#root');
    },
    content: (_value$ = value[0]) === null || _value$ === void 0 ? void 0 : _value$.fullName
  }, /*#__PURE__*/React.createElement("span", {
    className: 'name-style',
    onClick: function onClick() {
      return handleMore(value);
    }
  }, typeof value[0] === 'string' ? value[0] : str)), value.length > 1 ? /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return handleMore(value);
    },
    className: "more-type",
    style: {
      display: isWrap ? 'block' : 'inline-block',
      paddingLeft: isWrap ? '0' : '10px'
    }
  }, "\u7B49", unit) : null) : '-', /*#__PURE__*/React.createElement(CheckDeptDrawer, {
    open: deptOpen,
    onClose: function onClose() {
      return setDeptOpen(false);
    },
    dataSource: currentValue || []
  }));
}