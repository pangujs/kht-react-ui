import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Button } from 'antd';
import SelectPredictTag from '../index';
export default function Demo() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setOpen(true);
    }
  }, "\u67E5\u770B\u9884\u6D4B\u6807\u7B7E")), /*#__PURE__*/React.createElement(SelectPredictTag, {
    open: open,
    title: "\u9884\u6D4B\u6807\u7B7E",
    selectTag: "",
    selectLevel: [],
    onClose: function onClose() {
      setOpen(false);
    },
    onSubmit: function onSubmit() {}
  }));
}