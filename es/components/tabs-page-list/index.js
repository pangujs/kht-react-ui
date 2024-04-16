import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import "./index.css";
import { Tabs } from 'antd';
import BackBtn from '../back-btn';
export default function TabsPageList(props) {
  var tabsPrpos = props.tabsPrpos,
    children = props.children,
    back = props.back,
    _props$hasBack = props.hasBack,
    hasBack = _props$hasBack === void 0 ? false : _props$hasBack,
    _props$backParams = props.backParams,
    backParams = _props$backParams === void 0 ? {} : _props$backParams;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "kht-tabs-page-list"
  }, hasBack ? /*#__PURE__*/React.createElement(BackBtn, _objectSpread({}, backParams)) : back, /*#__PURE__*/React.createElement(Tabs, _objectSpread({}, tabsPrpos)), /*#__PURE__*/React.createElement("div", {
    className: "kht-tabs-page-content"
  }, children)));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};