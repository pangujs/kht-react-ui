import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useMemo } from 'react';
import KhtDrawerSearchProTable from '../../drawer-search-pro-table';
import BaseSelectForm from '../../base-select-form';
import { ProjectScreenDrawer } from './project-screen-drawer';
var FormItem = KhtDrawerSearchProTable.FormItem,
  SelectForm = KhtDrawerSearchProTable.SelectForm;
export default function Search(props) {
  var tableLayoutContainerRef = props.tableLayoutContainerRef,
    _props$type = props.type,
    type = _props$type === void 0 ? 'init' : _props$type,
    _props$showResidentTy = props.showResidentType,
    showResidentType = _props$showResidentTy === void 0 ? true : _props$showResidentTy,
    _props$showBusinessTy = props.showBusinessType,
    showBusinessType = _props$showBusinessTy === void 0 ? true : _props$showBusinessTy,
    activeTabKey = props.activeTabKey;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    residentTypeValue = _useState2[0],
    setResidentTypeValue = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    projectOpen = _useState4[0],
    setProjectOpen = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectProject = _useState6[0],
    setSelectProject = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    projectOption = _useState8[0],
    setProjectOption = _useState8[1];
  var _useState9 = useState(''),
    _useState10 = _slicedToArray(_useState9, 2),
    businessTypeValue = _useState10[0],
    setBusinessTypeValue = _useState10[1];
  var houseTypeOptions = [{
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
  }];
  var carTypeOptions = [{
    label: '全部身份',
    value: ''
  }, {
    label: '车位业主',
    value: 'proprietor'
  }];
  var businessTypeOption = [{
    label: '个人',
    value: '1'
  }, {
    label: '企业',
    value: '2'
  }];
  var showModalTree = function showModalTree() {
    setProjectOpen(true);
  };
  var onProjectOk = function onProjectOk(selectedData, selectedRows) {
    var _tableLayoutContainer;
    console.log('%c Line:48 🍢 selectedRows', 'color:#b03734', selectedData);
    console.log('%c Line:44 🥃 onSubmit-------data', 'color:#ffdd4d', selectedRows);
    var communityId = selectedData.communityId,
      communityData = selectedData.communityData,
      assetData = selectedData.assetData;
    (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setInitTableFieldsValue({
      projectId: communityId || undefined,
      assetData: assetData || []
    });
    setSelectProject(selectedRows);
    setProjectOpen(false);
    if (communityData === null || communityData === void 0 ? void 0 : communityData.id) {
      var title = [{
        value: communityData.id,
        label: communityData.name
      }];
      setProjectOption(title);
    } else {
      setProjectOption([]);
    }
  };
  useEffect(function () {
    var _tableLayoutContainer2;
    setResidentTypeValue('');
    setBusinessTypeValue('');
    (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setInitTableFieldsValue({
      projectId: undefined,
      assetData: []
    });
  }, [activeTabKey]);
  var residentTypeOptions = useMemo(function () {
    return activeTabKey === '1' ? houseTypeOptions : carTypeOptions;
  }, [activeTabKey]);
  //资产类型 house表示住宅 carPlace表示车位
  var assetType = useMemo(function () {
    return activeTabKey === '1' ? 'house' : 'carPlace';
  }, [activeTabKey]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem, {
    name: "projectId"
  }, /*#__PURE__*/React.createElement(SelectForm, {
    placeholder: "\u9879\u76EE",
    onClick: showModalTree,
    open: false,
    options: projectOption
  })), showResidentType && /*#__PURE__*/React.createElement(FormItem, {
    name: "residentType"
  }, /*#__PURE__*/React.createElement(BaseSelectForm, {
    allowClear: true,
    showSearch: false,
    isMultiple: false,
    placeholder: "\u4F4F\u6237\u8EAB\u4EFD",
    value: residentTypeValue,
    options: residentTypeOptions,
    onChange: function onChange(value) {
      console.log('cccc', value);
      setResidentTypeValue(value);
      if (type === 'init') {
        var _tableLayoutContainer3;
        (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.setInitTableFieldsValue({
          residentType: value
        });
      }
    }
  })), showBusinessType && /*#__PURE__*/React.createElement(FormItem, {
    name: "businessType"
  }, /*#__PURE__*/React.createElement(BaseSelectForm, {
    allowClear: true,
    showSearch: false,
    isMultiple: false,
    placeholder: "\u4E1A\u52A1\u7C7B\u578B",
    value: businessTypeValue,
    options: businessTypeOption,
    onChange: function onChange(value) {
      console.log('cccc', value);
      setBusinessTypeValue(value);
      if (type === 'init') {
        var _tableLayoutContainer4;
        (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.setInitTableFieldsValue({
          businessType: value
        });
      }
    }
  })), /*#__PURE__*/React.createElement(FormItem, {
    name: "assetData"
  }), /*#__PURE__*/React.createElement(ProjectScreenDrawer, {
    open: projectOpen,
    assetType: assetType,
    onClose: function onClose() {
      return setProjectOpen(false);
    },
    onOk: onProjectOk
  }));
}