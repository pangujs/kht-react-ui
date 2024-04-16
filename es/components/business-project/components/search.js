import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { KhtDrawerSearchProTable, SelectDepartment, SelectOrganization } from '../../../index';
import { getOrganization, getAdminOrganization } from '../api';
import CitySelect from './city-select';
var FormItem = KhtDrawerSearchProTable.FormItem,
  SelectForm = KhtDrawerSearchProTable.SelectForm;
export var TitleGround = function TitleGround(props) {
  var companyName = props.companyName,
    typeName = props.typeName;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\u4F01\u4E1A\uFF1A", companyName, "\uFF0C \u670D\u52A1\uFF1A", typeName));
};
export default /*#__PURE__*/React.forwardRef(function Search(props, ref) {
  var tableLayoutContainerRef = props.tableLayoutContainerRef,
    open = props.open,
    rowKey = props.rowKey,
    useSystem = props.useSystem,
    companyCode = props.companyCode,
    _props$isNoDefaultOrg = props.isNoDefaultOrganization,
    isNoDefaultOrganization = _props$isNoDefaultOrg === void 0 ? false : _props$isNoDefaultOrg;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    organizationOptions = _useState2[0],
    setOrganizationOptions = _useState2[1]; //项目
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    departmentOptions = _useState4[0],
    setDepartmentOptions = _useState4[1]; //部门
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showOrgDrawer = _useState6[0],
    setShowOrgDrawer = _useState6[1]; //机构
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showDeptDrawer = _useState8[0],
    setShowDeptDrawer = _useState8[1]; //部门
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    assetsList = _useState10[0],
    setAssetsList = _useState10[1]; //已选机构
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    assetsRoot = _useState12[0],
    setAssetsRoot = _useState12[1]; //已选机构
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    assetsDefaultCheckedItems = _useState14[0],
    setAssetsDefaultCheckedItems = _useState14[1]; //已选机构
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    deptList = _useState16[0],
    setDeptList = _useState16[1]; //已选部门
  //获取机构
  var getOrganizationList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _ref2;
      var obj, _yield, response, orgList;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            obj = {
              parentId: '0',
              sourceTableType: 'organization',
              type: ''
            };
            _context.next = 3;
            return useSystem === 'customer' ? getOrganization(obj) : getAdminOrganization(_objectSpread(_objectSpread({}, obj), {}, {
              companyCode: companyCode
            }));
          case 3:
            _yield = _context.sent;
            response = _yield.response;
            orgList = (_ref2 = response || []) === null || _ref2 === void 0 ? void 0 : _ref2.map(function (v) {
              return Object.assign(v, {
                key: v.treeCode
              });
            });
            setAssetsRoot(orgList);
            setOrganizationValue(orgList, 'assets', true);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getOrganizationList() {
      return _ref.apply(this, arguments);
    };
  }();
  //选择部门
  var selectDeptNode = function selectDeptNode(deptList) {
    setDeptList(deptList);
    setOrganizationValue(deptList, 'dept');
    setShowDeptDrawer(false);
  };
  //选择机构
  var selectOrgNode = function selectOrgNode(orgList) {
    setAssetsList(orgList || []);
    setShowOrgDrawer(false);
  };
  //设置机构或部门表单值及回显
  var setOrganizationValue = function setOrganizationValue(orgList, type, isNull) {
    var _map;
    var value = typeof orgList !== 'undefined' ? JSON.stringify((_map = (orgList || []).map(function (c) {
      if (type === 'assets') {
        return c[rowKey];
      } else {
        return c === null || c === void 0 ? void 0 : c.treeCode;
      }
    })) === null || _map === void 0 ? void 0 : _map.filter(function (c) {
      return typeof c !== 'undefined';
    })) : '[]';
    var label = (orgList || []).map(function (c) {
      return c.name;
    }).filter(function (c) {
      return typeof c !== 'undefined';
    }).join('，') || null;
    if (type === 'assets') {
      setOrganizationOptions(value === '[]' ? [] : [{
        label: label,
        value: value
      }]);
      if (props.type === 'selected') {
        var _tableLayoutContainer;
        (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setSelectTableFieldsValue({
          organizationIds: value === '[]' ? null : isNull && isNoDefaultOrganization ? null : value
        });
      } else {
        var _tableLayoutContainer2;
        (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setInitTableFieldsValue({
          organizationIds: value === '[]' ? null : isNull && isNoDefaultOrganization ? null : value
        });
      }
    } else {
      setDepartmentOptions(value === '[]' ? [] : [{
        label: label,
        value: value
      }]);
      if (props.type === 'selected') {
        var _tableLayoutContainer3;
        (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.setSelectTableFieldsValue({
          departmentTreeCodeList: value === '[]' ? null : value
        });
      } else {
        var _tableLayoutContainer4;
        (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.setInitTableFieldsValue({
          departmentTreeCodeList: value === '[]' ? null : value
        });
      }
    }
    if (props.type === 'selected') {
      var _tableLayoutContainer5;
      (_tableLayoutContainer5 = tableLayoutContainerRef.current) === null || _tableLayoutContainer5 === void 0 ? void 0 : _tableLayoutContainer5.selectedTableReload();
    } else {
      var _tableLayoutContainer6;
      (_tableLayoutContainer6 = tableLayoutContainerRef.current) === null || _tableLayoutContainer6 === void 0 ? void 0 : _tableLayoutContainer6.initTableReload();
    }
  };
  useEffect(function () {
    if (open) {
      //查询顶级机构
      getOrganizationList();
    } else {
      setAssetsRoot([]);
      setAssetsList([]);
    }
  }, [open]);
  useEffect(function () {
    //已选项目数据
    if (open) {
      var flag = assetsList.length > 0 && assetsList.some(function (c) {
        return c.parentId === '0';
      });
      var orgList = (assetsList || []).filter(function (c) {
        return c.parentId !== '0';
      });
      setAssetsDefaultCheckedItems(assetsList || []);
      setOrganizationValue(assetsList.length === 0 ? assetsRoot : flag ? [].concat(_toConsumableArray(assetsRoot), _toConsumableArray(orgList)) : orgList, 'assets');
    }
  }, [open, assetsList]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem, {
    name: "organizationIds"
  }, /*#__PURE__*/React.createElement(SelectForm, {
    options: organizationOptions,
    placeholder: "\u673A\u6784",
    open: false,
    onClick: function onClick() {
      return setShowOrgDrawer(true);
    }
  })), /*#__PURE__*/React.createElement(FormItem, {
    name: "departmentTreeCodeList"
  }, /*#__PURE__*/React.createElement(SelectForm, {
    allowClear: true,
    options: departmentOptions,
    placeholder: "\u7BA1\u7406\u90E8\u95E8",
    open: false,
    onClear: function onClear() {
      return setDeptList([]);
    },
    onClick: function onClick() {
      return setShowDeptDrawer(true);
    }
  })), /*#__PURE__*/React.createElement(FormItem, {
    name: "citySelectOptions"
  }, /*#__PURE__*/React.createElement(CitySelect, {
    placeholder: "\u5730\u533A",
    placement: "bottomRight"
  })), /*#__PURE__*/React.createElement(SelectDepartment, {
    title: "\u9009\u62E9\u7BA1\u7406\u90E8\u95E8",
    initData: deptList,
    onSubmit: function onSubmit(ids, nodes) {
      selectDeptNode(nodes);
    },
    open: showDeptDrawer,
    onClose: function onClose() {
      setShowDeptDrawer(false);
    }
  }), /*#__PURE__*/React.createElement(SelectOrganization, {
    open: showOrgDrawer,
    cancel: function cancel() {
      setShowOrgDrawer(false);
    },
    ok: selectOrgNode,
    destroyOnClose: false,
    defaultCheckedItems: assetsDefaultCheckedItems,
    multiple: true,
    selectable: false,
    disableChild: true,
    paramsType: useSystem === 'admin' && {
      companyCode: companyCode
    } || {},
    showTooltip: false
  }));
});