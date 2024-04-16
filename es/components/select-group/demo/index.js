import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Button } from 'antd';
import SelectGroup from '../index';
export default function Demo() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState('radio'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectType = _useState4[0],
    setSelectType = _useState4[1];
  var onSubmit = function onSubmit(keys, rows) {
    setOpen(false);
    console.log(keys, rows);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setOpen(true);
      setSelectType('checkbox');
    }
  }, "\u9009\u62E9\u7FA4")), /*#__PURE__*/React.createElement(SelectGroup, {
    selectType: selectType,
    onClose: function onClose() {
      return setOpen(false);
    },
    open: open,
    onSubmit: onSubmit,
    groupType: "1",
    groupStatus: "0"
  }));
}