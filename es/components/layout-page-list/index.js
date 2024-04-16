import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import "./index.css";
import BackBtn from '../back-btn';
export default function LayoutPageList(props) {
  var _props$hasLeftBorder = props.hasLeftBorder,
    hasLeftBorder = _props$hasLeftBorder === void 0 ? true : _props$hasLeftBorder,
    _props$wrapClassName = props.wrapClassName,
    wrapClassName = _props$wrapClassName === void 0 ? '' : _props$wrapClassName,
    wrapStyle = props.wrapStyle,
    _props$isDefault = props.isDefault,
    isDefault = _props$isDefault === void 0 ? false : _props$isDefault,
    leftStyle = props.leftStyle,
    back = props.back,
    _props$hasBack = props.hasBack,
    hasBack = _props$hasBack === void 0 ? false : _props$hasBack,
    _props$backParams = props.backParams,
    backParams = _props$backParams === void 0 ? {} : _props$backParams;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "kht-layout-page-list ".concat(wrapClassName),
    style: wrapStyle
  }, hasBack ? /*#__PURE__*/React.createElement(BackBtn, _objectSpread({}, backParams)) : back, /*#__PURE__*/React.createElement("div", {
    className: "kht-layout-page-list-content ".concat(isDefault ? 'default' : '')
  }, props.leftChildren ? /*#__PURE__*/React.createElement("div", {
    className: "kht-layout-page-list-left ".concat(hasLeftBorder ? 'border' : ''),
    style: leftStyle
  }, props.leftChildren) : null, /*#__PURE__*/React.createElement("div", {
    className: "kht-layout-page-list-right"
  }, props.rightChildren))));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};