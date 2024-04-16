import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Button } from 'antd';
import SelectAddBindResidence from '../index';
export default function Demo() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState('radio'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectType = _useState4[0],
    setSelectType = _useState4[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setOpen(true);
      setSelectType('radio');
    }
  }, "\u6DFB\u52A0\u7ED1\u5B9A\u4F4F\u6237")), /*#__PURE__*/React.createElement(SelectAddBindResidence, {
    selectType: selectType,
    onClose: function onClose() {
      return setOpen(false);
    },
    open: open
  }));
}