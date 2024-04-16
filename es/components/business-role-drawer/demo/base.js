import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import BusinessRoleDrawer from '../index';
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
  var _useState3 = useState('business'),
    _useState4 = _slicedToArray(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1];
  var _useState5 = useState([{
      id: 'ef38b907e9df461a9c7dbff268e3142d',
      name: '总机构-唐李星',
      sequence: 1680079675874,
      roleType: 'business',
      manageName: '机构',
      manageType: 'organization',
      createAccountId: '68c997d428f540eca0bbf6fe3b3a4301',
      createAccountName: null,
      createDate: '2023-03-29 16:47:56',
      isDelete: 1,
      roleClassificationId: 'organization',
      roleClassificationName: '机构管理',
      key: 'ef38b907e9df461a9c7dbff268e3142d',
      title: '总机构-唐李星',
      icon: {
        key: null,
        ref: null,
        props: {
          type: 'icon-kehu',
          style: {
            fontSize: 15,
            color: '#4fa1fb'
          }
        },
        _owner: null,
        _store: {}
      },
      isLeaf: true,
      treeParentKey: 'organization'
    }, {
      id: 'bb3c23d751914b9e9176f9db5ccee7e3',
      name: '相平机构测试',
      sequence: 1672371531134,
      roleType: 'business',
      manageName: '机构',
      manageType: 'organization',
      createAccountId: 'c65c0001c6ac4f14a25d4402257d5b8e',
      createAccountName: null,
      createDate: '2022-12-30 11:38:51',
      isDelete: 1,
      roleClassificationId: 'organization',
      roleClassificationName: '机构管理',
      key: 'bb3c23d751914b9e9176f9db5ccee7e3',
      title: '相平机构测试',
      icon: {
        key: null,
        ref: null,
        props: {
          type: 'icon-kehu',
          style: {
            fontSize: 15,
            color: '#4fa1fb'
          }
        },
        _owner: null,
        _store: {}
      },
      isLeaf: true,
      treeParentKey: 'organization'
    }]),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultCheckedItems = _useState6[0],
    setDefaultCheckedItems = _useState6[1];
  var _useState7 = useState([{
      id: 'organization',
      name: '机构管理',
      roleType: 'business',
      manageType: 'organization',
      sequence: 1667809813013,
      title: '机构管理',
      key: 'organization',
      children: [{
        id: 'efeb1386649d43db8a79276e0f09d7d8',
        name: '机构管家',
        sequence: 1669344451686,
        roleType: 'business',
        manageName: '机构',
        manageType: 'organization',
        createAccountId: '456c2aceda4f4740899e068d8fa3019e',
        createAccountName: null,
        createDate: '2022-11-25 10:47:32',
        isDelete: 1,
        roleClassificationId: 'organization',
        roleClassificationName: '机构管理',
        key: 'efeb1386649d43db8a79276e0f09d7d8',
        title: '机构管家',
        isLeaf: true,
        treeParentKey: 'organization'
      }, {
        id: '693408e51c6e47e39c952c895e1c9272',
        name: '和苑机构-陈学良',
        sequence: 1669688184687,
        roleType: 'business',
        manageName: '机构',
        manageType: 'organization',
        createAccountId: '1a51f44289f94dce8a0eb530c0be38e3',
        createAccountName: null,
        createDate: '2022-11-29 10:16:25',
        isDelete: 1,
        roleClassificationId: 'organization',
        roleClassificationName: '机构管理',
        key: '693408e51c6e47e39c952c895e1c9272',
        title: '和苑机构-陈学良',
        isLeaf: true,
        treeParentKey: 'organization'
      }, {
        id: 'bb3c23d751914b9e9176f9db5ccee7e3',
        name: '相平机构测试',
        sequence: 1672371531134,
        roleType: 'business',
        manageName: '机构',
        manageType: 'organization',
        createAccountId: 'c65c0001c6ac4f14a25d4402257d5b8e',
        createAccountName: null,
        createDate: '2022-12-30 11:38:51',
        isDelete: 1,
        roleClassificationId: 'organization',
        roleClassificationName: '机构管理',
        key: 'bb3c23d751914b9e9176f9db5ccee7e3',
        title: '相平机构测试',
        isLeaf: true,
        treeParentKey: 'organization'
      }, {
        id: '16a8848645324c7fb3a24f4a7f29e539',
        name: '客户管理',
        sequence: 1675928077589,
        roleType: 'business',
        manageName: '机构',
        manageType: 'organization',
        createAccountId: '56a16eca68d74cf5ba1779ccff89831b',
        createAccountName: null,
        createDate: '2023-02-09 15:34:38',
        isDelete: 1,
        roleClassificationId: 'organization',
        roleClassificationName: '机构管理',
        key: '16a8848645324c7fb3a24f4a7f29e539',
        title: '客户管理',
        isLeaf: true,
        treeParentKey: 'organization'
      }, {
        id: 'ef38b907e9df461a9c7dbff268e3142d',
        name: '总机构-唐李星',
        sequence: 1680079675874,
        roleType: 'business',
        manageName: '机构',
        manageType: 'organization',
        createAccountId: '68c997d428f540eca0bbf6fe3b3a4301',
        createAccountName: null,
        createDate: '2023-03-29 16:47:56',
        isDelete: 1,
        roleClassificationId: 'organization',
        roleClassificationName: '机构管理',
        key: 'ef38b907e9df461a9c7dbff268e3142d',
        title: '总机构-唐李星',
        isLeaf: true,
        treeParentKey: 'organization'
      }],
      isLeaf: false,
      treeParentKey: ''
    }]),
    _useState8 = _slicedToArray(_useState7, 2),
    reviewData = _useState8[0],
    setReviewData = _useState8[1];
  var _useState9 = useState({}),
    _useState10 = _slicedToArray(_useState9, 2),
    paramsType = _useState10[0],
    setParamsType = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isReviewMode = _useState12[0],
    setIsReviewMode = _useState12[1];
  var cancel = function cancel() {
    changeStatus(!visible);
  };
  /** 确认按钮的回调 */
  var ok = function ok(selectNode) {
    console.log('已选取的数据', selectNode);
    setValue(selectNode.filter(function (item) {
      return !item.isClassify;
    }).map(function (item) {
      return item.title;
    }).join(','));
    setDefaultCheckedItems(selectNode.filter(function (item) {
      return !item.isClassify;
    }));
  };
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    customRootNode = _useState14[0],
    setCustomRootNode = _useState14[1];
  var changeType = function changeType() {
    setType(type == 'organization' ? 'business' : 'organization');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: changeType
  }, type), /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: function onClick() {
      setIsReviewMode(false);
      changeStatus(true);
    }
  }, value || '请选择角色'), /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: function onClick() {
      setIsReviewMode(true);
      changeStatus(true);
    }
  }, "\u67E5\u770B\u89D2\u8272"), /*#__PURE__*/React.createElement(BusinessRoleDrawer, {
    open: visible,
    cancel: cancel,
    ok: ok,
    destroyOnClose: false,
    defaultCheckedItems: defaultCheckedItems,
    customRootNode: customRootNode,
    multiple: true,
    selectable: false,
    disableChild: false,
    paramsType: paramsType,
    roleType: type,
    title: type === 'business' ? '选择组织角色' : '选择机构角色',
    isReviewMode: isReviewMode,
    reviewData: reviewData
  }));
});