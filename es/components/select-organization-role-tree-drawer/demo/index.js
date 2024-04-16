import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import SelectOrganizationRoleTreeDrawer from '../index';
import { useModalVisible } from '../../../hooks';
import { Button } from 'antd';
export default (function () {
  var _useModalVisible = useModalVisible(),
    visible = _useModalVisible.visible,
    changeStatus = _useModalVisible.changeStatus;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultCheckedItems = _useState4[0],
    setDefaultCheckedItems = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    typeValue = _useState6[0],
    setTypeValue = _useState6[1];
  var _useState7 = useState(undefined),
    _useState8 = _slicedToArray(_useState7, 2),
    paramsType = _useState8[0],
    setParamsType = _useState8[1];
  var cancel = function cancel() {
    changeStatus(!visible);
  };
  /** 确认按钮的回调 */
  var ok = function ok(selectNode) {
    console.log('已选取的数据', selectNode);
    setValue(selectNode.map(function (item) {
      return item.title;
    }).join(','));
    setDefaultCheckedItems(selectNode);
  };
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    customRootNode = _useState10[0],
    setCustomRootNode = _useState10[1];
  var handleChange = function handleChange(val) {
    setTypeValue(val);
    setParamsType({
      type: val
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: function onClick() {
      changeStatus(true);
    }
  }, "\u9009\u62E9\u7EC4\u7EC7\u89D2\u8272"), value, /*#__PURE__*/React.createElement(SelectOrganizationRoleTreeDrawer, {
    open: visible,
    cancel: cancel,
    ok: ok,
    destroyOnClose: false,
    defaultCheckedItems: defaultCheckedItems,
    multiple: true,
    selectable: false,
    disableChild: true,
    isPageLoad: true,
    paramsType: paramsType
  }));
});