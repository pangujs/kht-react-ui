import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import SelectTagCategory from '../index';
import { useModalVisible } from '../../../hooks';
import { Button, Select } from 'antd';
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
  var setRoot = function setRoot(val) {
    setCustomRootNode([val == 1 ? {
      id: '02c0907c00a347c199270167d2d913e5',
      parentId: '0',
      name: '地球1',
      title: '地球1',
      key: '02c0907c00a347c199270167d2d913e5',
      existLowerLevelNode: true
    } : {
      id: '1587e6ba0e8b4432b5bd6631a008d955',
      parentId: '0',
      name: '促销活动',
      title: '促销活动',
      key: '1587e6ba0e8b4432b5bd6631a008d955',
      existLowerLevelNode: true
    }]);
  };
  var handleChange = function handleChange(val) {
    setTypeValue(val);
    setParamsType({
      type: val
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
    style: {
      width: 120
    },
    onChange: handleChange,
    value: typeValue,
    options: [{
      value: '',
      label: '全部来源'
    }, {
      value: '1',
      label: '企微标签'
    }, {
      value: '2',
      label: '大数据标签'
    }, {
      value: '3',
      label: '舆情标签'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: function onClick() {
      setDefaultCheckedItems([{
        id: '02c0907c00a347c199270167d2d913e5',
        key: '02c0907c00a347c199270167d2d913e5',
        title: '地球1',
        parentId: '0',
        name: '地球1',
        existLowerLevelNode: true
      }]);
      changeStatus(true);
    }
  }, value || '请选择标签分类'), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setRoot(1);
    }
  }, "\u8BBE\u7F6E\u6839\u8282\u70B9"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setRoot(2);
    }
  }, "\u8BBE\u7F6E\u6839\u8282\u70B92"), /*#__PURE__*/React.createElement(SelectTagCategory, {
    open: visible,
    cancel: cancel,
    ok: ok,
    destroyOnClose: false,
    defaultCheckedItems: defaultCheckedItems,
    customRootNode: customRootNode,
    multiple: true,
    selectable: false,
    disableChild: true,
    isPageLoad: true,
    paramsType: paramsType
  }));
});