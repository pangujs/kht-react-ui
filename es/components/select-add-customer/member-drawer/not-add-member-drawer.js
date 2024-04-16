import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import KhtDrawerSearchProTable from '../../drawer-search-pro-table';
import { getEmployeeData } from '../api';
import Search from './components/search-for-not-add';
import MultipleText from '../../dept-multiple-text';
import AccountPopover from '../../check-popover';
export default (function (props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? true : _props$open,
    onClose = props.onClose;
  var tableLayoutContainerRef = useRef();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    searchData = _useState4[0],
    setSearchData = _useState4[1];
  var columns = [{
    title: '姓名',
    dataIndex: 'name',
    ellipsis: true,
    render: function render(_, record) {
      return /*#__PURE__*/React.createElement(AccountPopover, {
        name: record.name,
        id: record.id,
        type: "employee",
        trigger: "hover",
        placement: "bottomLeft",
        getPopupContainer: function getPopupContainer() {
          return document.getElementById('root') || document.body;
        },
        zIndex: 1000
      });
    }
  }, {
    title: '所属部门',
    dataIndex: 'organizationName',
    ellipsis: true,
    render: function render(value, record) {
      return /*#__PURE__*/React.createElement(MultipleText, {
        value: (record === null || record === void 0 ? void 0 : record.employeeDeptInfoList) || [],
        serviceName: "name",
        unit: "\u90E8\u95E8"
      });
    }
  }];
  var requestTable = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, _searchData$departmen, departmentTreeCodeList, searchName, requestData, res, _ref2, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            _searchData$departmen = searchData.departmentTreeCodeList, departmentTreeCodeList = _searchData$departmen === void 0 ? [] : _searchData$departmen, searchName = searchData.searchName;
            requestData = {
              departmentCodeList: typeof departmentTreeCodeList == 'string' ? JSON.parse(departmentTreeCodeList) : []
            };
            _context.next = 5;
            return getEmployeeData({
              currentPage: currentPage,
              pageSize: pageSize
            }, _objectSpread(_objectSpread({}, requestData), {}, {
              isAddEmployee: 0,
              searchInfo: searchName
            }));
          case 5:
            res = _context.sent;
            _ref2 = res || {}, dataList = _ref2.dataList, totalCount = _ref2.totalCount;
            setTotal(totalCount || 0);
            return _context.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTable(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (!open) {
      var _tableLayoutContainer;
      (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setInitTableFieldsValue({
        departmentTreeCodeList: []
      });
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    title: "\u672A\u6DFB\u52A0\u5BA2\u6237\u5458\u5DE5",
    open: open,
    onClose: onClose,
    width: 560,
    rowKey: "id",
    searchName: "searchName",
    ref: tableLayoutContainerRef,
    selectType: "readOnly",
    searchInputState: true,
    selectedRowKeys: [],
    total: total,
    columns: columns,
    requestTable: requestTable,
    searchForm: /*#__PURE__*/React.createElement(Search, {
      tableLayoutContainerRef: tableLayoutContainerRef,
      type: "init"
    }),
    onSearch: function onSearch(data) {
      var _tableLayoutContainer2, _tableLayoutContainer3;
      setSearchData(data);
      (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setInitTableCurrentPage(1); //重置分页
      (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.initTableReload();
    }
  });
});