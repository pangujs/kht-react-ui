import React from 'react';
import KhtBusinessCollapsePanelAssets from './index';
import { Space } from 'antd';
export default function Demo() {
  var leftOnChange = function leftOnChange(info) {
    console.log('left 回调', info);
  };
  var rightOnChange = function rightOnChange(info) {
    console.log('right 回调', info);
  };
  return /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 500
    }
  }, /*#__PURE__*/React.createElement(KhtBusinessCollapsePanelAssets
  // leftCanSelect="community"
  , {
    // leftCanSelect="community"
    leftChange: leftOnChange,
    rightChange: rightOnChange,
    rightLoaderLevel: "house",
    newStyle: true
  })));
}