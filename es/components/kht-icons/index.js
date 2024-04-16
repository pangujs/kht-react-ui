import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
export default function KhtIcons(props) {
  var IconFont = createFromIconfontCN({
    scriptUrl: ['//at.alicdn.com/t/c/font_3120259_g7ig51j8j3.js' // KHT后台 icon-javascript, icon-java, icon-shoppingcart (overrided)
    ]
  });

  return /*#__PURE__*/React.createElement(IconFont, _objectSpread({}, props));
}