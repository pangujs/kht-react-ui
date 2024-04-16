import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Button } from 'antd';
import React, { useState } from 'react';
import KhtBusinessTagsModalTree from '../../business-tags-modal-tree';
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultCheckedItems = _useState6[0],
    setDefaultCheckedItems = _useState6[1];
  /** 确认事件 配置可使用人 的弹层 */
  var deptOk = function deptOk(selectNode) {
    setVisible(!visible);
    setValue(selectNode.map(function (item) {
      return item.title;
    }).join(','));
    setDefaultCheckedItems(selectNode);
  };
  /** 关闭 配置可使用人 的弹层 */
  var deptCancel = function deptCancel() {
    setVisible(!visible);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: function onClick() {
      return setVisible(!visible);
    }
  }, value || '请选择标签'), /*#__PURE__*/React.createElement(KhtBusinessTagsModalTree, {
    open: visible,
    defaultCheckedItems: defaultCheckedItems,
    cancel: deptCancel,
    ok: deptOk
  }));
});