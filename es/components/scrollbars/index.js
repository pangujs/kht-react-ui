import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
var Scrollbar = function Scrollbar(props) {
  var scrollBars = function scrollBars(e) {
    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - ((props === null || props === void 0 ? void 0 : props.bottom) || 0)) {
      // 滚动条 触底
      props.touchBottom && props.touchBottom();
    }
    if (e.target.scrollTop === 0) {
      // 滚动条 触顶
      props.touchTop && props.touchTop();
    }
  };
  return /*#__PURE__*/React.createElement(Scrollbars, _objectSpread({
    autoHide: true,
    onScroll: scrollBars
  }, props.fieldProps), props.children);
};
export default Scrollbar;