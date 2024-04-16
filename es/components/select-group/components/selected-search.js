import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useMemo } from 'react';
import DrawerSearchProTable from '../../drawer-search-pro-table';
import BaseSelectForm from '../../base-select-form';
import SelectGroupClassify from './select-group-classify';
import { KhtBusinessProject } from '../../../index';
var FormItem = DrawerSearchProTable.FormItem,
  SelectForm = DrawerSearchProTable.SelectForm;
export default function SelectedSearch(props) {
  var tableLayoutContainerRef = props.tableLayoutContainerRef,
    _props$type = props.type,
    type = _props$type === void 0 ? 'init' : _props$type,
    _props$showGroup = props.showGroup,
    showGroup = _props$showGroup === void 0 ? false : _props$showGroup,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$companyCode = props.companyCode,
    companyCode = _props$companyCode === void 0 ? '' : _props$companyCode;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    groupValue = _useState2[0],
    setGroupValue = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    projectOpen = _useState4[0],
    setProjectOpen = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    classifyOpen = _useState6[0],
    setClassifyOpen = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectProject = _useState8[0],
    setSelectProject = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    projectOption = _useState10[0],
    setProjectOption = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectClassify = _useState12[0],
    setSelectClassify = _useState12[1];
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    selectClassifyKey = _useState14[0],
    setSelectClassifyKey = _useState14[1];
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    classifyOption = _useState16[0],
    setClassifyOption = _useState16[1];
  var showModalTree = function showModalTree() {
    setProjectOpen(true);
  };
  var showClassifyData = function showClassifyData() {
    setClassifyOpen(true);
  };
  var handleClear = function handleClear() {
    var _tableLayoutContainer;
    (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setSelectTableFieldsValue({
      classifyId: []
    });
  };
  var handleClassifyOk = function handleClassifyOk(selectedRowKey, selectedRows) {
    var _tableLayoutContainer2;
    console.log('......', selectedRowKey, selectedRows);
    (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setSelectTableFieldsValue({
      classifyId: selectedRowKey
    });
    setSelectClassifyKey(selectedRowKey);
    setSelectClassify(selectedRows);
    setClassifyOpen(false);
    if (selectedRows.length) {
      var label = (selectedRows || []).map(function (c) {
        return c.name;
      }).filter(function (c) {
        return typeof c !== 'undefined';
      }).join(',') || null;
      var title = selectedRows.map(function (item) {
        return {
          value: item.id,
          label: label
        };
      });
      setClassifyOption(title);
    } else {
      setClassifyOption([]);
    }
  };
  var onProjectOk = function onProjectOk(selectedRowKeys, selectedRows) {
    var _tableLayoutContainer3;
    console.log('%c Line:48 🍢 selectedRows', 'color:#b03734', selectedRows);
    console.log('%c Line:44 🥃 onSubmit-------data', 'color:#ffdd4d', selectedRowKeys);
    (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.setSelectTableFieldsValue({
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
  var groupOptions = useMemo(function () {
    var initOptions = [{
      label: '全部',
      value: ''
    }, {
      label: '企微群',
      value: '1'
    }, {
      label: '微信群',
      value: '2'
    }];
    return (options === null || options === void 0 ? void 0 : options.length) ? options : initOptions;
  }, [options]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem, {
    name: "projectId"
  }, /*#__PURE__*/React.createElement(SelectForm, {
    allowClear: true,
    placeholder: "\u9879\u76EE",
    onClick: showModalTree,
    open: false,
    options: projectOption
  })), showGroup && /*#__PURE__*/React.createElement(FormItem, {
    name: "groupType"
  }, /*#__PURE__*/React.createElement(BaseSelectForm, {
    showSearch: false,
    isMultiple: false,
    value: groupValue,
    options: groupOptions,
    onChange: function onChange(value) {
      setGroupValue(value);
      if (type === 'init') {
        var _tableLayoutContainer4;
        (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.setSelectTableFieldsValue({
          groupType: value
        });
      }
    }
  })), /*#__PURE__*/React.createElement(FormItem, {
    name: "classifyId"
  }, /*#__PURE__*/React.createElement(SelectForm, {
    allowClear: true,
    placeholder: "\u7FA4\u5206\u7C7B",
    onClick: showClassifyData,
    open: false,
    options: classifyOption
  })), /*#__PURE__*/React.createElement(KhtBusinessProject, {
    selectType: "radio",
    isNoDefaultOrganization: true,
    companyCode: companyCode,
    useSystem: "customer",
    onClose: function onClose() {
      return setProjectOpen(false);
    },
    open: projectOpen,
    defaultRowKeys: selectProject,
    onSubmit: onProjectOk
  }), /*#__PURE__*/React.createElement(SelectGroupClassify, {
    open: classifyOpen,
    selectType: "checkbox",
    rowKey: "id",
    defaultRowKeys: selectClassifyKey,
    onClose: function onClose() {
      return setClassifyOpen(false);
    },
    onOk: handleClassifyOk
  }));
}