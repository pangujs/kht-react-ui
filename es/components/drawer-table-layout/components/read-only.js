import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import Main from './main';
//查看组件
function ReadOnly(props, ref) {
  var initTableOptions = props.initTableOptions;
  var tableNode = initTableOptions.tableNode;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Main, _objectSpread(_objectSpread({
    key: "init",
    type: "init"
  }, props), {}, {
    drawerProps: props.drawerProps,
    footer: null,
    drawerChildren: null,
    selectAllNode: null,
    ref: ref
  }), tableNode));
}
export default /*#__PURE__*/React.forwardRef(ReadOnly);