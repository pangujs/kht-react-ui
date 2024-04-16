import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import KhtBusinessSelectGroup from '@src/business-select-group';
import { Button } from 'antd';
export default (function () {
  // {
  //   tableStatus:{
  //     isSelectAll: true,
  //     checkRowKeys:[],
  //     // checkRowKeys:['faf19a91ec07489eaea27a900f8cd19c', 'f4132257394946e088c6fd455900ae39', 'f2d2be961b45403f8e4316b0d16aadf6', 'eb0650270d0a443dafad94cd8fb8bff9', 'e45d78c09fd5434d920e959afe4eb02b', 'ddc5dcec1f314706888041049ab1d85f', 'dd51bd71f77a4627b731eed9d949f643', 'd14b3331edbf43dfb725c08047ed3027', 'cf633ce909354c6bb68fbd1cac68993e', 'c73dd8de49b64ce6a6961167f40a6009'],
  //     unCheckRowKeys:['bc06330d565b4492a57b399fe4e4de55', 'baadf6b5661f4f05b11149b85487359e', 'b9bdbc23762544759769a29d8a38f5cd', 'b621fa65499f4e609a0be9c7192de927', 'ac59d705618f42ab85edae7b64bdd8e7']
  //     // unCheckRowKeys:[]
  //   },
  //   searchParams:{
  //     searchInfo: '',
  //     treeCodeList: [],
  //     employeeCodeList: [],
  //     tagIdList: ['95d14e9e583f4e2b98211201ff88df39', '0aad9f22f69d4077a63debbfd4f22521', '94f2b17a605848c5803a5521463b2957', '7b23e2da16a748f4b94a65d598501365'],
  //     type: 'wechat',
  //     isHasDepartmentEmployeeQuery: 1,
  //   }
  // }
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalOpen = _useState2[0],
    setModalOpen = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectItems = _useState4[0],
    setSelectItems = _useState4[1];
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultCheckedItems = _useState6[0],
    setDefaultCheckedItems = _useState6[1];
  var changeSelectStatus = function changeSelectStatus() {
    setModalOpen(!modalOpen);
  };
  var ok = function ok(params) {
    var _params$tableStatus$c;
    console.log('返回已勾选客户ID及查询条件', params);
    setDefaultCheckedItems(params);
    var value = ((_params$tableStatus$c = params.tableStatus.checkRowRecords) === null || _params$tableStatus$c === void 0 ? void 0 : _params$tableStatus$c.map(function (item) {
      return item.name;
    }).filter(function (_, index) {
      return index < 2;
    }).join(',')) || '';
    setSelectItems(value + ' 等' + params.tableStatus.checkRowKeys.length + '个群');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: changeSelectStatus
  }, selectItems || '请选择群'), /*#__PURE__*/React.createElement(KhtBusinessSelectGroup, {
    defaultCheckedItems: defaultCheckedItems,
    modalProps: {
      open: modalOpen
    },
    ok: ok,
    cancel: function cancel() {
      return setModalOpen(false);
    }
  }));
});