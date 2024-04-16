import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import KhtBusinessAssetsDrawerTree from '../../business-assets-drawer-tree';
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
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    customRootNode = _useState6[0],
    setCustomRootNode = _useState6[1];
  var setRoot = function setRoot(val) {
    setCustomRootNode([val == 1 ? {
      parentId: 'c53b120f5624444abe14363d5407b3e6',
      id: '7dd762c4aa274a84af3953f23c6ec942',
      key: '7dd762c4aa274a84af3953f23c6ec942',
      title: '催费项目',
      code: 'XMC100283Kpi10014',
      departmentCode: null,
      name: '催费项目',
      sourceTableType: 'community',
      treeCode: '10001016',
      fullName: '深圳市腾客投资合伙企业(有限合伙)/催费项目',
      communityId: '7dd762c4aa274a84af3953f23c6ec942',
      organizationId: null,
      unity: '',
      isAllot: null,
      isExistChild: null,
      isVisible: null,
      communityFullName: null
    } : {
      parentId: 'c53b120f5624444abe14363d5407b3e6',
      id: '55588de70ffa43a897bc92607b73438c',
      key: '55588de70ffa43a897bc92607b73438c',
      title: '0217项目',
      code: 'XMC100283Kpi10048',
      departmentCode: null,
      name: '0217项目',
      sourceTableType: 'community',
      treeCode: '10001027',
      fullName: '深圳市腾客投资合伙企业(有限合伙)/0217项目',
      communityId: '55588de70ffa43a897bc92607b73438c',
      organizationId: null,
      unity: '',
      isAllot: null,
      isExistChild: null,
      isVisible: null,
      communityFullName: null
    }]);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: changeStatus
  }, value || '请选择资产'), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setRoot(1);
    }
  }, "\u8BBE\u7F6E\u6839\u8282\u70B9"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setRoot(2);
    }
  }, "\u8BBE\u7F6E\u6839\u8282\u70B92"), /*#__PURE__*/React.createElement(KhtBusinessAssetsDrawerTree, {
    open: visible,
    cancel: cancel,
    ok: ok,
    destroyOnClose: false,
    defaultCheckedItems: defaultCheckedItems,
    showTooltip: true,
    // canSelect="house"
    customRootNode: customRootNode,
    multiple: true,
    selectable: false,
    disableChild: true
  }));
});