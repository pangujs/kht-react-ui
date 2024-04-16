import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef } from 'react';
import { KhtDrawerSearchProTable } from '../../../index';
import Search from './classify-search';
import { getGroupClassifyList } from '../api';
import { debounce } from 'lodash';
export default function SelectGroupClassify(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? '选择群分类' : _props$title,
    _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'radio' : _props$selectType,
    _props$width = props.width,
    width = _props$width === void 0 ? 480 : _props$width,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    defaultRowKeys = props.defaultRowKeys,
    onClose = props.onClose,
    onOk = props.onOk,
    companyCode = props.companyCode;
  var selectGroupClassifyRef = useRef();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    searchData = _useState4[0],
    setSearchData = _useState4[1];
  var columns = [{
    title: '群分类',
    dataIndex: 'name',
    ellipsis: true,
    hideInSearch: true
  }];
  //过滤条件
  var onSearch = debounce(function (data) {
    var _selectGroupClassifyR, _selectGroupClassifyR2;
    setSearchData(data);
    (_selectGroupClassifyR = selectGroupClassifyRef.current) === null || _selectGroupClassifyR === void 0 ? void 0 : _selectGroupClassifyR.setInitTableCurrentPage(1); //重置分页
    (_selectGroupClassifyR2 = selectGroupClassifyRef.current) === null || _selectGroupClassifyR2 === void 0 ? void 0 : _selectGroupClassifyR2.initTableReload();
  }, 500);
  var requestTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, searchName, bodyParams, res, _ref2, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            searchName = searchData.searchName;
            console.log('mmmm', searchData);
            bodyParams = {
              search: searchName,
              companyCode: companyCode,
              pageSize: pageSize,
              currentPage: currentPage
            };
            _context.next = 6;
            return getGroupClassifyList(bodyParams);
          case 6:
            res = _context.sent;
            _ref2 = res || {}, dataList = _ref2.dataList, totalCount = _ref2.totalCount;
            setTotal(totalCount || 0);
            return _context.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTableData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var _requestSelectedTable = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
      var _selectGroupClassifyR3;
      var pageSize, currentPage, list, bodyParams, res, _ref4, dataList;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            list = selectGroupClassifyRef === null || selectGroupClassifyRef === void 0 ? void 0 : (_selectGroupClassifyR3 = selectGroupClassifyRef.current) === null || _selectGroupClassifyR3 === void 0 ? void 0 : _selectGroupClassifyR3.initSelectedRowKeys;
            bodyParams = {
              idList: list,
              companyCode: companyCode,
              pageSize: pageSize,
              currentPage: currentPage
            };
            _context2.next = 5;
            return getGroupClassifyList(bodyParams);
          case 5:
            res = _context2.sent;
            _ref4 = res || {}, dataList = _ref4.dataList;
            return _context2.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function requestSelectedTable(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  // 全选
  var onAllSelectedChange = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(checked) {
      var _selectGroupClassifyR4, searchName, bodyParams, res, _ref6, dataList, _selectGroupClassifyR5;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!checked) {
              _context3.next = 10;
              break;
            }
            searchName = searchData.searchName;
            bodyParams = {
              search: searchName,
              companyCode: companyCode,
              page: {
                pageSize: 10000,
                currentPage: 1
              }
            };
            _context3.next = 5;
            return getGroupClassifyList(bodyParams);
          case 5:
            res = _context3.sent;
            _ref6 = res || {}, dataList = _ref6.dataList;
            (_selectGroupClassifyR4 = selectGroupClassifyRef.current) === null || _selectGroupClassifyR4 === void 0 ? void 0 : _selectGroupClassifyR4.setInitSelectedRowKeys((dataList || []).map(function (c) {
              return c.id;
            }) || []);
            _context3.next = 11;
            break;
          case 10:
            (_selectGroupClassifyR5 = selectGroupClassifyRef.current) === null || _selectGroupClassifyR5 === void 0 ? void 0 : _selectGroupClassifyR5.setInitSelectedRowKeys([]);
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onAllSelectedChange(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  //提交
  var handleOk = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
      var bodyParams, res, _ref8, dataList, selectedRowData;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            bodyParams = {
              companyCode: companyCode,
              pageSize: 10000,
              currentPage: 1
            };
            _context4.next = 3;
            return getGroupClassifyList(bodyParams);
          case 3:
            res = _context4.sent;
            _ref8 = res || {}, dataList = _ref8.dataList;
            selectedRowData = dataList.filter(function (item) {
              return data.includes(item.id);
            });
            onOk && onOk(data, selectedRowData);
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleOk(_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    open: open,
    title: title,
    onClose: onClose,
    onSubmit: handleOk,
    width: width,
    rowKey: rowKey,
    selectType: selectType,
    selectedRowKeys: defaultRowKeys,
    ref: selectGroupClassifyRef,
    columns: columns,
    total: total,
    requestTable: function () {
      var _requestTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(params) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return requestTableData(params);
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function requestTable(_x5) {
        return _requestTable.apply(this, arguments);
      }
      return requestTable;
    }(),
    searchName: "searchName",
    radioSelectName: "groupName",
    selectDrawerTableTitle: "\u5DF2\u9009\u62E9\u7FA4\u5206\u7C7B",
    requestSelectedTable: function () {
      var _requestSelectedTable2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(params) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _requestSelectedTable(params);
            case 2:
              return _context6.abrupt("return", _context6.sent);
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function requestSelectedTable(_x6) {
        return _requestSelectedTable2.apply(this, arguments);
      }
      return requestSelectedTable;
    }(),
    searchInputState: false,
    searchForm: /*#__PURE__*/React.createElement(Search, {
      tableLayoutContainerRef: selectGroupClassifyRef,
      type: "input"
    }),
    onSearch: onSearch,
    onAllSelectedChange: onAllSelectedChange
  }));
}