import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import "./index.css";
import _find from 'lodash/find';
export default function CollapsePanel(props) {
  var children = props.children || [];
  var left = _find(children, {
    key: 'left'
  });
  var right = _find(children, {
    key: 'right'
  });
  if (Object.prototype.toString.call(children) === '[object Object]') {
    left = props.children;
  }
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapse = _useState2[0],
    setIsCollapse = _useState2[1];
  /** 切换展开状态 */
  var collapseChange = function collapseChange() {
    setIsCollapse(!isCollapse);
  };
  useEffect(function () {
    if (props.collapsePanelRef) {
      props.collapsePanelRef.current = {
        changeCollapseState: function changeCollapseState(visible) {
          setIsCollapse(visible);
        }
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-collapse-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "collapse-panel-left"
  }, left), right ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "collapse-panel-right ".concat(!isCollapse ? 'collapse' : '')
  }, right), /*#__PURE__*/React.createElement("div", {
    className: "collapse-box",
    onClick: collapseChange
  }, isCollapse ? /*#__PURE__*/React.createElement(DoubleLeftOutlined, null) : /*#__PURE__*/React.createElement(DoubleRightOutlined, null))) : null);
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var CollapsePanelAction = function CollapsePanelAction(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};