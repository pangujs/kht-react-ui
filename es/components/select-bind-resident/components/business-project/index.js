import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState } from 'react';
import { KhtDrawerSearchProTable } from '../../../../index';
import { columns } from './columns';
import { getProjectTableDataNew, getAdminProjectTableData } from './api';
import Search from './components/search';
export default function KhtBusinessProjectNew(props) {
  var customerId = props.customerId,
    _props$bindStatus = props.bindStatus,
    bindStatus = _props$bindStatus === void 0 ? 1 : _props$bindStatus,
    _props$title = props.title,
    title = _props$title === void 0 ? '选择项目' : _props$title,
    open = props.open,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'radio' : _props$selectType,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    _props$useSystem = props.useSystem,
    useSystem = _props$useSystem === void 0 ? 'customer' : _props$useSystem,
    _props$defaultRowKeys = props.defaultRowKeys,
    defaultRowKeys = _props$defaultRowKeys === void 0 ? [] : _props$defaultRowKeys,
    companyCode = props.companyCode,
    _props$isNoDefaultOrg = props.isNoDefaultOrganization,
    isNoDefaultOrganization = _props$isNoDefaultOrg === void 0 ? true : _props$isNoDefaultOrg,
    onClose = props.onClose,
    _onSubmit = props.onSubmit;
  var tableLayoutContainerRef = useRef();
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    searchData = _useState2[0],
    setSearchData = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    total = _useState4[0],
    setTotal = _useState4[1];
  //项目列表
  var _requestTable = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, organizationIds, departmentTreeCodeList, name, citySelectOptions, _ref2, _ref3, province, city, district, requestData, res, _ref4, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            organizationIds = searchData.organizationIds, departmentTreeCodeList = searchData.departmentTreeCodeList, name = searchData.name, citySelectOptions = searchData.citySelectOptions;
            _ref2 = citySelectOptions || [], _ref3 = _slicedToArray(_ref2, 3), province = _ref3[0], city = _ref3[1], district = _ref3[2];
            requestData = {
              customerId: customerId || '71c14ea021c843dfa10e0dc26064a4fc',
              bindStatus: bindStatus,
              province: province,
              city: city,
              district: district,
              name: name,
              organizationIds: organizationIds ? JSON.parse(organizationIds) : [],
              departmentTreeCodeList: departmentTreeCodeList ? JSON.parse(departmentTreeCodeList) : []
            };
            console.log('%c Line:44 🍞 requestData', 'color:#f5ce50', requestData);
            _context.next = 7;
            return (requestData === null || requestData === void 0 ? void 0 : requestData.organizationIds.length) > 0 || isNoDefaultOrganization ? useSystem === 'customer' ? getProjectTableDataNew({
              currentPage: currentPage,
              pageSize: pageSize
            }, requestData) : getAdminProjectTableData({
              currentPage: currentPage,
              pageSize: pageSize,
              companyCode: companyCode
            }, requestData) : {
              totalCount: 0,
              dataList: []
            };
          case 7:
            res = _context.sent;
            _ref4 = res.response || {}, dataList = _ref4.dataList, totalCount = _ref4.totalCount;
            setTotal(totalCount || 0);
            return _context.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTable(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    title: title,
    open: open,
    onClose: onClose,
    width: 700,
    rowKey: rowKey,
    manualRequest: true,
    ref: tableLayoutContainerRef,
    selectType: selectType,
    selectedRowKeys: defaultRowKeys,
    columns: columns,
    searchForm: /*#__PURE__*/React.createElement(Search, {
      type: "init",
      rowKey: rowKey,
      open: open,
      useSystem: useSystem,
      companyCode: companyCode,
      tableLayoutContainerRef: tableLayoutContainerRef
    }),
    total: total,
    requestTable: function () {
      var _requestTable2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _requestTable(data);
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function requestTable(_x2) {
        return _requestTable2.apply(this, arguments);
      }
      return requestTable;
    }(),
    onSearch: function onSearch(data) {
      var _tableLayoutContainer, _tableLayoutContainer2;
      setSearchData(data);
      //条件变了分页都需要重置
      (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setInitTableCurrentPage(1); //重置分页
      (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.initTableReload();
    },
    onSubmit: function onSubmit(data) {
      var _tableLayoutContainer3;
      _onSubmit && _onSubmit(data, (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.initTableSelectedRows);
    }
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};