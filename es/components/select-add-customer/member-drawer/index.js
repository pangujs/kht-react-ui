import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState, useEffect } from 'react';
import { columns } from './columns';
import KhtDrawerSearchProTable from '../../drawer-search-pro-table';
import { getEmployeeData, getAllEmployeeData } from '../api';
import Search from './components/search';
import SelectedSearch from './components/selected-search';
import NotAddMemberDrawer from './not-add-member-drawer';
//多选部门+搜索name的成员接口
//根据选中id查已选成员的接口
export default function KhtBusinessProject(props) {
  var _props$selectedTitle = props.selectedTitle,
    selectedTitle = _props$selectedTitle === void 0 ? '已选成员' : _props$selectedTitle,
    _props$title = props.title,
    title = _props$title === void 0 ? '选择客户添加人' : _props$title,
    open = props.open,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    _props$useSystem = props.useSystem,
    useSystem = _props$useSystem === void 0 ? 'customer' : _props$useSystem,
    _props$defaultRowKeys = props.defaultRowKeys,
    defaultRowKeys = _props$defaultRowKeys === void 0 ? [] : _props$defaultRowKeys,
    companyCode = props.companyCode,
    _onClose = props.onClose,
    _onSubmit = props.onSubmit,
    initData = props.initData,
    hasNoAdd = props.hasNoAdd;
  var tableLayoutContainerRef = useRef();
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    searchData = _useState2[0],
    setSearchData = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedSearchData = _useState4[0],
    setSelectedSearchData = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    total = _useState6[0],
    setTotal = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    notAddOpen = _useState8[0],
    setNotAddOpen = _useState8[1];
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedTotal = _useState10[0],
    setSelectedTotal = _useState10[1];
  //成员列表
  var _requestTable = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, _searchData$departmen, departmentTreeCodeList, searchInfo, requestData, res, _ref2, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            _searchData$departmen = searchData.departmentTreeCodeList, departmentTreeCodeList = _searchData$departmen === void 0 ? [] : _searchData$departmen, searchInfo = searchData.name;
            requestData = {
              departmentCodeList: typeof departmentTreeCodeList == 'string' ? JSON.parse(departmentTreeCodeList) : []
            };
            _context.next = 5;
            return getEmployeeData({
              currentPage: currentPage,
              pageSize: pageSize
            }, _objectSpread(_objectSpread({}, requestData), {}, {
              isAddEmployee: hasNoAdd ? 1 : undefined,
              searchInfo: searchInfo
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
  //第二层表格组件已选组件的请求(按idList条件去查询)
  var _requestSelectedTable = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
      var _tableLayoutContainer;
      var currentPage, pageSize, _selectedSearchData$d, departmentTreeCodeList, name, requestData, res, _ref5, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = _ref3.current, pageSize = _ref3.pageSize;
            _selectedSearchData$d = selectedSearchData.departmentTreeCodeList, departmentTreeCodeList = _selectedSearchData$d === void 0 ? [] : _selectedSearchData$d, name = selectedSearchData.name;
            requestData = {
              departmentCodeList: typeof departmentTreeCodeList == 'string' ? JSON.parse(departmentTreeCodeList) : []
            };
            _context2.next = 5;
            return getEmployeeData({
              currentPage: currentPage,
              pageSize: pageSize
            }, _objectSpread(_objectSpread({}, requestData), {}, {
              employeeIdList: (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.initSelectedRowKeys,
              searchInfo: name
            }));
          case 5:
            res = _context2.sent;
            _ref5 = res || {}, dataList = _ref5.dataList, totalCount = _ref5.totalCount;
            setSelectedTotal(totalCount || 0);
            return _context2.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function requestSelectedTable(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  //全选 接口通过isList查询返回全部的已经选的数据列表
  var onAllSelectedChange = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(checked) {
      var _tableLayoutContainer2, _searchData$departmen2, departmentTreeCodeList, name, requestData, response, _tableLayoutContainer3;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!checked) {
              _context3.next = 10;
              break;
            }
            _searchData$departmen2 = searchData.departmentTreeCodeList, departmentTreeCodeList = _searchData$departmen2 === void 0 ? [] : _searchData$departmen2, name = searchData.name;
            departmentTreeCodeList = Array.isArray(departmentTreeCodeList) ? departmentTreeCodeList : JSON === null || JSON === void 0 ? void 0 : JSON.parse(departmentTreeCodeList);
            requestData = {
              departmentCodeList: departmentTreeCodeList || [],
              searchInfo: name,
              isAddEmployee: hasNoAdd ? 1 : undefined
            };
            _context3.next = 6;
            return getAllEmployeeData({
              currentPage: 1,
              pageSize: 10000
            }, _objectSpread({}, requestData));
          case 6:
            response = _context3.sent;
            //全选获取所有id的接口
            (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setInitSelectedRowKeys((response || []).map(function (c) {
              return c.id;
            }) || []);
            _context3.next = 11;
            break;
          case 10:
            (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.setInitSelectedRowKeys([]);
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onAllSelectedChange(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();
  //移除的回调
  var onRemoveSelected = function onRemoveSelected(type, data) {
    //一般情况下都用不上，备用日后交互需要
    console.log('%c Line:128 🍫 onRemoveSelected=======type', 'color:#3f7cff', type, data);
  };
  useEffect(function () {
    if (open) {
      var _tableLayoutContainer4;
      (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.setInitSelectedRowKeys((initData || []).map(function (c) {
        return c.id;
      }) || []);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    title: title,
    open: open,
    onClose: function onClose() {
      var _tableLayoutContainer5;
      (_tableLayoutContainer5 = tableLayoutContainerRef.current) === null || _tableLayoutContainer5 === void 0 ? void 0 : _tableLayoutContainer5.setInitTableFieldsValue({
        departmentTreeCodeList: [],
        name: ''
      });
      _onClose();
    },
    width: 560,
    rowKey: rowKey,
    manualRequest: false,
    ref: tableLayoutContainerRef,
    selectType: "checkbox",
    selectedRowKeys: defaultRowKeys,
    selectDrawerTableTitle: selectedTitle,
    columns: columns,
    selectedTotal: selectedTotal,
    onCloseSelectTable: function onCloseSelectTable() {
      var _tableLayoutContainer6;
      (_tableLayoutContainer6 = tableLayoutContainerRef.current) === null || _tableLayoutContainer6 === void 0 ? void 0 : _tableLayoutContainer6.setSelectTableFieldsValue({
        departmentTreeCodeList: [],
        name: ''
      });
    },
    searchForm: /*#__PURE__*/React.createElement(Search, {
      changeNotAddOpen: function changeNotAddOpen() {
        setNotAddOpen(true);
      },
      type: "init",
      rowKey: rowKey,
      open: open,
      useSystem: useSystem,
      companyCode: companyCode,
      tableLayoutContainerRef: tableLayoutContainerRef,
      hasNoAdd: hasNoAdd
    }),
    selectTableSearchForm: /*#__PURE__*/React.createElement(SelectedSearch, {
      type: "init",
      open: open,
      useSystem: useSystem,
      companyCode: companyCode,
      tableLayoutContainerRef: tableLayoutContainerRef
    }),
    total: total,
    requestTable: function () {
      var _requestTable2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _requestTable(data);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function requestTable(_x4) {
        return _requestTable2.apply(this, arguments);
      }
      return requestTable;
    }(),
    requestSelectedTable: function () {
      var _requestSelectedTable2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _requestSelectedTable(data);
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function requestSelectedTable(_x5) {
        return _requestSelectedTable2.apply(this, arguments);
      }
      return requestSelectedTable;
    }(),
    onAllSelectedChange: onAllSelectedChange,
    onSearch: function onSearch(data) {
      var _tableLayoutContainer7, _tableLayoutContainer8;
      setSearchData(data);
      //条件变了分页都需要重置
      (_tableLayoutContainer7 = tableLayoutContainerRef.current) === null || _tableLayoutContainer7 === void 0 ? void 0 : _tableLayoutContainer7.setInitTableCurrentPage(1); //重置分页
      (_tableLayoutContainer8 = tableLayoutContainerRef.current) === null || _tableLayoutContainer8 === void 0 ? void 0 : _tableLayoutContainer8.initTableReload();
    },
    onSelectTableSearch: function onSelectTableSearch(data) {
      var _tableLayoutContainer9, _tableLayoutContainer10;
      setSelectedSearchData(data);
      //条件变了分页都需要重置
      (_tableLayoutContainer9 = tableLayoutContainerRef.current) === null || _tableLayoutContainer9 === void 0 ? void 0 : _tableLayoutContainer9.setSelectedTableCurrentPage(1); //重置分页
      (_tableLayoutContainer10 = tableLayoutContainerRef.current) === null || _tableLayoutContainer10 === void 0 ? void 0 : _tableLayoutContainer10.selectedTableReload();
    },
    onSubmit: function () {
      var _onSubmit2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
        var _tableLayoutContainer11, _tableLayoutContainer12, _tableLayoutContainer13;
        var res;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return getEmployeeData({
                currentPage: 1,
                pageSize: 10000
              }, {
                employeeIdList: (_tableLayoutContainer11 = tableLayoutContainerRef.current) === null || _tableLayoutContainer11 === void 0 ? void 0 : _tableLayoutContainer11.initSelectedRowKeys
              });
            case 2:
              res = _context6.sent;
              (_tableLayoutContainer12 = tableLayoutContainerRef.current) === null || _tableLayoutContainer12 === void 0 ? void 0 : _tableLayoutContainer12.setInitTableFieldsValue({
                departmentTreeCodeList: [],
                name: ''
              });
              _onSubmit && _onSubmit((_tableLayoutContainer13 = tableLayoutContainerRef.current) === null || _tableLayoutContainer13 === void 0 ? void 0 : _tableLayoutContainer13.initSelectedRowKeys, res.dataList);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function onSubmit(_x6) {
        return _onSubmit2.apply(this, arguments);
      }
      return onSubmit;
    }(),
    onRemoveSelected: onRemoveSelected
  }), /*#__PURE__*/React.createElement(NotAddMemberDrawer, {
    open: notAddOpen,
    onClose: function onClose() {
      setNotAddOpen(false);
    }
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};