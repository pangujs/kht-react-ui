import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Button } from 'antd';
import SelectRoleTreeDrawer from '../index';
export default function Demo() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState('business'),
    _useState4 = _slicedToArray(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isReviewMode = _useState6[0],
    setIsReviewMode = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var changeType = function changeType() {
    setType(type == 'organization' ? 'business' : 'organization');
  };
  var _useState9 = useState([{
      id: 'projectmanager',
      name: '项目经理',
      code: 'projectmanager',
      key: 'projectmanager'
    }]),
    _useState10 = _slicedToArray(_useState9, 2),
    initData = _useState10[0],
    setInitData = _useState10[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: changeType
  }, type), /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: function onClick() {
      setIsReviewMode(false);
      setOpen(true);
    }
  }, value || '请选择角色'), /*#__PURE__*/React.createElement("div", null, initData.map(function (item) {
    return item.name;
  }).join('，'))), /*#__PURE__*/React.createElement(SelectRoleTreeDrawer, {
    open: open,
    onClose: function onClose() {
      setOpen(false);
    },
    type: type,
    onSubmit: function onSubmit(keys, rows) {
      setInitData(rows);
      setOpen(false);
    },
    initData: initData
  }));
}