import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import KhtBusinessOrganizationDrawerTree from '../index';
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
    defaultCheckedItems = _useState4[0],
    setDefaultCheckedItems = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    typeValue = _useState6[0],
    setTypeValue = _useState6[1];
  var _useState7 = useState({}),
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
      parentId: 'c53b120f5624444abe14363d5407b3e6',
      id: '4bdc17fe00824867a5e919527e16d710',
      code: null,
      departmentCode: null,
      name: '0201测试机构',
      sourceTableType: 'organization',
      treeCode: '10001013',
      fullName: null,
      communityId: null,
      organizationId: null,
      unity: null,
      isAllot: 1,
      isExistChild: null,
      isVisible: null,
      communityFullName: null,
      title: '0201测试机构',
      key: '4bdc17fe00824867a5e919527e16d710',
      selectable: true,
      isLeaf: false,
      level: 0,
      treeParentKey: 'c53b120f5624444abe14363d5407b3e6'
    } : {
      parentId: 'c53b120f5624444abe14363d5407b3e6',
      id: 'c086102e84514418ad11e5ff79755db3',
      code: null,
      departmentCode: null,
      name: '中建事业部',
      sourceTableType: 'organization',
      treeCode: '10001011',
      fullName: null,
      communityId: null,
      organizationId: null,
      unity: null,
      isAllot: 1,
      isExistChild: null,
      isVisible: null,
      communityFullName: null,
      title: '中建事业部',
      key: 'c086102e84514418ad11e5ff79755db3',
      selectable: true,
      isLeaf: false,
      level: 0,
      treeParentKey: 'c53b120f5624444abe14363d5407b3e6'
    }]);
  };
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
  }, value || '请选择机构'), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setRoot(1);
    }
  }, "\u8BBE\u7F6E\u6839\u8282\u70B9"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setRoot(2);
    }
  }, "\u8BBE\u7F6E\u6839\u8282\u70B92"), /*#__PURE__*/React.createElement(KhtBusinessOrganizationDrawerTree, {
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
    paramsType: paramsType,
    backRootNode: function backRootNode(root) {
      return console.log(root);
    }
  }));
});