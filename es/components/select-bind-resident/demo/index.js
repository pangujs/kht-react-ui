import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Button } from 'antd';
import SelectBindResident from '../index';
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
  }, "\u7ED1\u5B9A\u4F4F\u6237")), /*#__PURE__*/React.createElement(SelectBindResident, {
    customerId: "",
    onClose: function onClose() {
      return setOpen(false);
    },
    open: open
  }));
}