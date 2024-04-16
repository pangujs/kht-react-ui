import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { KhtDrawerSearchProTable } from '../../../index';
import DrawerSelectDepartment from '../../select-department';
var FormItem = KhtDrawerSearchProTable.FormItem,
  SelectForm = KhtDrawerSearchProTable.SelectForm;
export default /*#__PURE__*/React.forwardRef(function Search(props, ref) {
  var tableLayoutContainerRef = props.tableLayoutContainerRef;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    departmentOptions = _useState2[0],
    setDepartmentOptions = _useState2[1]; //部门
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showDeptDrawer = _useState4[0],
    setShowDeptDrawer = _useState4[1]; //部门
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    deptList = _useState6[0],
    setDeptList = _useState6[1]; //已选部门
  //选择部门
  var selectDeptNode = function selectDeptNode(deptList) {
    setDeptList(deptList);
    setOrganizationValue(deptList, 'dept');
    setShowDeptDrawer(false);
  };
  //设置机构或部门表单值及回显
  var setOrganizationValue = function setOrganizationValue(orgList, type) {
    var _map;
    var value = typeof orgList !== 'undefined' ? JSON.stringify((_map = (orgList || []).map(function (c) {
      return c === null || c === void 0 ? void 0 : c.code;
    })) === null || _map === void 0 ? void 0 : _map.filter(function (c) {
      return typeof c !== 'undefined';
    })) : '[]';
    var label = (orgList || []).map(function (c) {
      return c.name;
    }).filter(function (c) {
      return typeof c !== 'undefined';
    }).join(',') || null;
    if (type === 'dept') {
      var _tableLayoutContainer;
      setDepartmentOptions(value === '[]' ? [] : [{
        label: label,
        value: value
      }]);
      (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setInitTableFieldsValue({
        departmentCodeList: value === '[]' ? null : value
      });
    }
    // tableLayoutContainerRef.current?.initTableReload()
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem, {
    name: "departmentCodeList"
  }, /*#__PURE__*/React.createElement(SelectForm, {
    allowClear: true,
    options: departmentOptions,
    placeholder: "\u90E8\u95E8",
    open: false,
    onClear: function onClear() {
      return setDeptList([]);
    },
    onClick: function onClick() {
      return setShowDeptDrawer(true);
    }
  })), /*#__PURE__*/React.createElement(DrawerSelectDepartment, {
    initData: deptList,
    onSubmit: function onSubmit(ids, nodes) {
      console.log(ids, nodes);
      selectDeptNode(nodes);
    },
    open: showDeptDrawer,
    onClose: function onClose() {
      setShowDeptDrawer(false);
    }
  }));
});