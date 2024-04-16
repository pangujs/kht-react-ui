import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useImperativeHandle, useEffect, useMemo } from 'react';
import { Button } from 'antd';
import BaseSelectForm from '../../base-select-form';
//import KhtBusinessProject from '../../business-project';
import KhtBusinessProjectNew from './business-project';
import KhtDrawerSearchProTable from '../../drawer-search-pro-table';
import AddBindResidence from '../../select-add-bind-residence';
import { Local } from '../../../utils/storage';
var FormItem = KhtDrawerSearchProTable.FormItem,
  SelectForm = KhtDrawerSearchProTable.SelectForm;
function Search(props, ref) {
  var tableLayoutContainerRef = props.tableLayoutContainerRef,
    _props$type = props.type,
    type = _props$type === void 0 ? 'init' : _props$type,
    _props$showResidentTy = props.showResidentType,
    showResidentType = _props$showResidentTy === void 0 ? true : _props$showResidentTy,
    _props$showHouseType = props.showHouseType,
    showHouseType = _props$showHouseType === void 0 ? true : _props$showHouseType,
    _props$showAdd = props.showAdd,
    showAdd = _props$showAdd === void 0 ? true : _props$showAdd,
    onAdd = props.onAdd,
    customerId = props.customerId,
    _props$bindStatus = props.bindStatus,
    bindStatus = _props$bindStatus === void 0 ? 1 : _props$bindStatus;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    residentTypeValue = _useState2[0],
    setResidentTypeValue = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    addBindOpen = _useState4[0],
    setAddBindOpen = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    projectOpen = _useState6[0],
    setProjectOpen = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectProject = _useState8[0],
    setSelectProject = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    projectOption = _useState10[0],
    setProjectOption = _useState10[1];
  var _useState11 = useState('residence'),
    _useState12 = _slicedToArray(_useState11, 2),
    houseTypeValue = _useState12[0],
    setHouseTypeValue = _useState12[1];
  var companyCode = Local.get('crop-id');
  var residentTypeOptions = [{
    label: '全部身份',
    value: ''
  }, {
    label: '业主',
    value: 'proprietor'
  }, {
    label: '家属',
    value: 'family'
  }, {
    label: '租户',
    value: 'tenant'
  }, {
    label: '租户家属',
    value: 'tenantFamily'
  }
  //{ label: '车位业主', value: 'proprietor_car' },
  ];

  var residentTypeOptions1 = [{
    label: '全部身份',
    value: ''
  }, {
    label: '车位业主',
    value: 'proprietor_car'
  }];
  var houseTypeOptions = [
  // { label: '全部', value: '' },
  {
    label: '住宅',
    value: 'residence'
  }, {
    label: '车位',
    value: 'carPlace'
  }
  //{ label: '商铺', value: 'shop' },
  ];

  var showModalTree = function showModalTree() {
    setProjectOpen(true);
  };
  var showAddBind = function showAddBind() {
    setAddBindOpen(true);
  };
  var onProjectOk = function onProjectOk(selectedRowKeys, selectedRows) {
    var _tableLayoutContainer;
    console.log('%c Line:48 🍢 selectedRows', 'color:#b03734', selectedRows);
    console.log('%c Line:44 🥃 onSubmit-------data', 'color:#ffdd4d', selectedRowKeys);
    (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setInitTableFieldsValue({
      projectId: selectedRowKeys
    });
    setSelectProject(selectedRows);
    setProjectOpen(false);
    if (selectedRows.length) {
      var title = selectedRows.map(function (item) {
        return {
          value: item.id,
          label: item.name
        };
      });
      setProjectOption(title);
    } else {
      setProjectOption([]);
    }
  };
  //绑定
  var handleAdd = function handleAdd(selectedRowKey, selectedRow, type) {
    onAdd && onAdd(selectedRowKey, selectedRow, type);
  };
  useImperativeHandle(ref, function () {
    return {
      resetAddBindStatus: function resetAddBindStatus() {
        setAddBindOpen(false);
      }
    };
  });
  useEffect(function () {
    var _tableLayoutContainer2;
    //默认住宅
    (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setInitTableFieldsValue({
      communityType: 'residence'
    });
  }, []);
  //资产身份
  var lastResidentTypeOptions = useMemo(function () {
    return houseTypeValue == 'carPlace' ? residentTypeOptions1 : residentTypeOptions;
  }, [houseTypeValue]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, showAdd && /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: showAddBind
  }, "\u6DFB\u52A0\u7ED1\u5B9A\u4F4F\u6237"), /*#__PURE__*/React.createElement(FormItem, {
    name: "projectId"
  }, /*#__PURE__*/React.createElement(SelectForm, {
    placeholder: "\u9879\u76EE",
    allowClear: true,
    onClick: showModalTree,
    open: false,
    options: projectOption
  })), showHouseType && /*#__PURE__*/React.createElement(FormItem, {
    name: "communityType"
  }, /*#__PURE__*/React.createElement(BaseSelectForm, {
    showSearch: false,
    isMultiple: false,
    placeholder: "\u8D44\u4EA7\u7C7B\u578B",
    value: houseTypeValue,
    options: houseTypeOptions,
    onChange: function onChange(value) {
      setHouseTypeValue(value);
      if (type === 'init') {
        var _tableLayoutContainer3;
        (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.setInitTableFieldsValue({
          communityType: value
        });
      }
    }
  })), showResidentType && /*#__PURE__*/React.createElement(FormItem, {
    name: "residentType"
  }, /*#__PURE__*/React.createElement(BaseSelectForm, {
    allowClear: true,
    showSearch: false,
    isMultiple: false,
    placeholder: "\u8EAB\u4EFD",
    value: residentTypeValue,
    options: lastResidentTypeOptions,
    onChange: function onChange(value) {
      setResidentTypeValue(value);
      if (type === 'init') {
        var _tableLayoutContainer4;
        (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.setInitTableFieldsValue({
          residentType: value
        });
      }
    }
  })), /*#__PURE__*/React.createElement(KhtBusinessProjectNew, {
    customerId: customerId,
    bindStatus: bindStatus,
    selectType: "radio",
    companyCode: companyCode,
    useSystem: "customer",
    onClose: function onClose() {
      return setProjectOpen(false);
    },
    open: projectOpen,
    defaultRowKeys: selectProject,
    onSubmit: onProjectOk
  }), /*#__PURE__*/React.createElement(AddBindResidence, {
    open: addBindOpen,
    selectType: "radio",
    onClose: function onClose() {
      setAddBindOpen(false);
    },
    onOk: handleAdd
  }));
}
export default /*#__PURE__*/React.forwardRef(Search);