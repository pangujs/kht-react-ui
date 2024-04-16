import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import KhtBusinessSelectTagDrawer from '../index';
import { useModalVisible } from '@hooks';
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
    selectedTags = _useState4[0],
    setSelectedTags = _useState4[1];
  var cancel = function cancel() {
    changeStatus(!visible);
  };
  /** 确认按钮的回调 */
  var ok = function ok(selectNode) {
    console.log('已选取的数据', selectNode);
    setValue(selectNode.map(function (item) {
      return item.name;
    }).join(','));
    changeStatus(false);
    setSelectedTags(selectNode);
  };
  var clearData = function clearData() {
    setValue('');
    setSelectedTags([]);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: changeStatus
  }, value || '请选择标签'), /*#__PURE__*/React.createElement(Button, {
    type: "link",
    onClick: clearData
  }, "\u6E05\u7A7A\u6570\u636E"), /*#__PURE__*/React.createElement(KhtBusinessSelectTagDrawer, {
    open: visible,
    onClose: cancel,
    cancel: cancel,
    ok: ok,
    destroyOnClose: false,
    multiple: true,
    defaultSelectedTags: selectedTags
  }));
});