import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import { KhtDrawerSearchProTable } from '../../index';
import { getGroupList } from './api';
import { columns } from './columns';
import Search from './components/search';
import SelectedSearch from './components/selected-search';
export default function SelectGroup(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? '选择群' : _props$title,
    _props$open = props.open,
    open = _props$open === void 0 ? true : _props$open,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'checkbox' : _props$selectType,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    defaultRowKeys = props.defaultRowKeys,
    _props$ownerObj = props.ownerObj,
    ownerObj = _props$ownerObj === void 0 ? {} : _props$ownerObj,
    _props$showTitle = props.showTitle,
    showTitle = _props$showTitle === void 0 ? false : _props$showTitle,
    groupStatus = props.groupStatus,
    _props$groupOption = props.groupOption,
    groupOption = _props$groupOption === void 0 ? [] : _props$groupOption,
    companyCode = props.companyCode,
    onClose = props.onClose,
    onSubmit = props.onSubmit;
  var selectGroupRef = useRef();
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    searchData = _useState2[0],
    setSearchData = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    selectSearchData = _useState4[0],
    setSelectSearchData = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    total = _useState6[0],
    setTotal = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTotal = _useState8[0],
    setSelectedTotal = _useState8[1];
  // 第一层列表
  var requestTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, _ref2, _ref2$projectId, projectId, _ref2$classifyId, classifyId, name, groupType, communityId, bodyParams, res, _ref3, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            _ref2 = searchData || {}, _ref2$projectId = _ref2.projectId, projectId = _ref2$projectId === void 0 ? [] : _ref2$projectId, _ref2$classifyId = _ref2.classifyId, classifyId = _ref2$classifyId === void 0 ? [] : _ref2$classifyId, name = _ref2.name, groupType = _ref2.groupType;
            communityId = projectId.join();
            bodyParams = {
              ownerCode: ownerObj === null || ownerObj === void 0 ? void 0 : ownerObj.code,
              communityId: communityId,
              groupType: props.groupType || groupType,
              classifyIdList: classifyId,
              name: name,
              companyCode: companyCode,
              groupStatus: groupStatus,
              page: {
                pageSize: pageSize,
                currentPage: currentPage
              }
            };
            _context.next = 6;
            return getGroupList(bodyParams);
          case 6:
            res = _context.sent;
            _ref3 = res || {}, dataList = _ref3.dataList, totalCount = _ref3.totalCount;
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
  // 第二层已选列表
  var _requestSelectedTable = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
      var _selectGroupRef$curre;
      var currentPage, pageSize, _ref5, _ref5$projectId, projectId, _ref5$classifyId, classifyId, name, groupType, idList, communityId, bodyParams, res, _ref6, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = params.current, pageSize = params.pageSize;
            _ref5 = selectSearchData || {}, _ref5$projectId = _ref5.projectId, projectId = _ref5$projectId === void 0 ? [] : _ref5$projectId, _ref5$classifyId = _ref5.classifyId, classifyId = _ref5$classifyId === void 0 ? [] : _ref5$classifyId, name = _ref5.name, groupType = _ref5.groupType;
            idList = (_selectGroupRef$curre = selectGroupRef.current) === null || _selectGroupRef$curre === void 0 ? void 0 : _selectGroupRef$curre.initSelectedRowKeys;
            communityId = projectId.join();
            bodyParams = {
              idList: idList,
              ownerCode: ownerObj === null || ownerObj === void 0 ? void 0 : ownerObj.code,
              name: name,
              companyCode: companyCode,
              communityId: communityId,
              groupType: props.groupType || groupType,
              classifyIdList: classifyId,
              groupStatus: groupStatus,
              page: {
                pageSize: pageSize,
                currentPage: currentPage
              }
            };
            _context2.next = 7;
            return getGroupList(bodyParams);
          case 7:
            res = _context2.sent;
            _ref6 = res || {}, dataList = _ref6.dataList, totalCount = _ref6.totalCount;
            setSelectedTotal(totalCount || 0);
            return _context2.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function requestSelectedTable(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  // 全选
  var onAllSelectedChange = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(checked) {
      var _selectGroupRef$curre2, _ref8, _ref8$projectId, projectId, _ref8$classifyId, classifyId, name, groupType, communityId, bodyParams, res, _ref9, dataList, _selectGroupRef$curre3;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!checked) {
              _context3.next = 11;
              break;
            }
            _ref8 = searchData || {}, _ref8$projectId = _ref8.projectId, projectId = _ref8$projectId === void 0 ? [] : _ref8$projectId, _ref8$classifyId = _ref8.classifyId, classifyId = _ref8$classifyId === void 0 ? [] : _ref8$classifyId, name = _ref8.name, groupType = _ref8.groupType;
            communityId = projectId.join();
            bodyParams = {
              communityId: communityId,
              ownerCode: ownerObj === null || ownerObj === void 0 ? void 0 : ownerObj.code,
              groupType: props.groupType || groupType,
              classifyIdList: classifyId,
              name: name,
              companyCode: companyCode,
              groupStatus: groupStatus,
              page: {
                pageSize: 100000,
                currentPage: 1,
                isBigData: true
              }
            };
            _context3.next = 6;
            return getGroupList(bodyParams);
          case 6:
            res = _context3.sent;
            _ref9 = res || {}, dataList = _ref9.dataList;
            (_selectGroupRef$curre2 = selectGroupRef.current) === null || _selectGroupRef$curre2 === void 0 ? void 0 : _selectGroupRef$curre2.setInitSelectedRowKeys((dataList || []).map(function (c) {
              return c.id;
            }) || []);
            _context3.next = 12;
            break;
          case 11:
            (_selectGroupRef$curre3 = selectGroupRef.current) === null || _selectGroupRef$curre3 === void 0 ? void 0 : _selectGroupRef$curre3.setInitSelectedRowKeys([]);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onAllSelectedChange(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleSubmit = function handleSubmit(data) {
    var _selectGroupRef$curre5, _selectGroupRef$curre6;
    if (selectType === 'radio') {
      var _selectGroupRef$curre4;
      onSubmit && onSubmit(data, (_selectGroupRef$curre4 = selectGroupRef.current) === null || _selectGroupRef$curre4 === void 0 ? void 0 : _selectGroupRef$curre4.initTableSelectedRows);
    } else if (selectType === 'checkbox' && ((_selectGroupRef$curre5 = selectGroupRef.current) === null || _selectGroupRef$curre5 === void 0 ? void 0 : _selectGroupRef$curre5.initSelectedRowKeys.length)) {
      _requestSelectedTable({
        current: 1,
        pageSize: 10000
      }).then(function (_ref10) {
        var data = _ref10.data;
        return data;
      }).then(function (selectedRows) {
        onSubmit && onSubmit(data, selectedRows);
      });
    } else if (selectType === 'checkbox' && !((_selectGroupRef$curre6 = selectGroupRef.current) === null || _selectGroupRef$curre6 === void 0 ? void 0 : _selectGroupRef$curre6.initSelectedRowKeys.length)) {
      onSubmit && onSubmit(data, []);
    }
  };
  var onCloseSelectTable = function onCloseSelectTable() {
    var _selectGroupRef$curre7;
    //关闭已选组件制空
    (_selectGroupRef$curre7 = selectGroupRef.current) === null || _selectGroupRef$curre7 === void 0 ? void 0 : _selectGroupRef$curre7.setSelectTableFieldsValue({});
  };
  useEffect(function () {
    if (!open) {
      setSearchData([]);
      setSelectSearchData([]);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    open: open,
    title: title,
    onClose: onClose,
    width: 700,
    rowKey: rowKey,
    selectType: selectType,
    selectedRowKeys: defaultRowKeys,
    ref: selectGroupRef,
    columns: columns,
    total: total,
    selectedTotal: selectedTotal,
    requestTable: function () {
      var _requestTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(params) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return requestTableData(params);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function requestTable(_x4) {
        return _requestTable.apply(this, arguments);
      }
      return requestTable;
    }(),
    searchName: "name",
    radioSelectName: "groupName",
    selectDrawerTableTitle: "\u5DF2\u9009\u62E9\u7FA4",
    titleGround: showTitle && /*#__PURE__*/React.createElement("span", null, "\u6210\u5458\uFF1A", ownerObj === null || ownerObj === void 0 ? void 0 : ownerObj.name),
    searchForm: /*#__PURE__*/React.createElement(Search, {
      type: "init",
      rowKey: rowKey,
      open: open,
      tableLayoutContainerRef: selectGroupRef,
      showGroup: !props.groupType,
      options: groupOption,
      companyCode: companyCode
    }),
    selectTableSearchForm: /*#__PURE__*/React.createElement(SelectedSearch, {
      type: "init",
      rowKey: rowKey,
      open: open,
      tableLayoutContainerRef: selectGroupRef,
      companyCode: companyCode
    }),
    requestSelectedTable: function () {
      var _requestSelectedTable2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(params) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _requestSelectedTable(params);
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
    operateFooterGroup: [{
      name: '删除',
      type: 'selectedTable',
      menu: [{
        label: '删除选中',
        key: '2'
      }, {
        label: '删除全部',
        key: '1'
      }]
    }],
    onSearch: function onSearch(data) {
      var _selectGroupRef$curre8, _selectGroupRef$curre9;
      setSearchData(data);
      //条件变了分页都需要重置
      (_selectGroupRef$curre8 = selectGroupRef.current) === null || _selectGroupRef$curre8 === void 0 ? void 0 : _selectGroupRef$curre8.setInitTableCurrentPage(1); //重置分页
      (_selectGroupRef$curre9 = selectGroupRef.current) === null || _selectGroupRef$curre9 === void 0 ? void 0 : _selectGroupRef$curre9.initTableReload();
    },
    onSelectTableSearch: function onSelectTableSearch(data) {
      var _selectGroupRef$curre10, _selectGroupRef$curre11;
      setSelectSearchData(data);
      (_selectGroupRef$curre10 = selectGroupRef.current) === null || _selectGroupRef$curre10 === void 0 ? void 0 : _selectGroupRef$curre10.setSelectedTableCurrentPage(1); //重置分页
      (_selectGroupRef$curre11 = selectGroupRef.current) === null || _selectGroupRef$curre11 === void 0 ? void 0 : _selectGroupRef$curre11.selectedTableReload();
    },
    onAllSelectedChange: onAllSelectedChange,
    onSubmit: handleSubmit,
    onCloseSelectTable: onCloseSelectTable
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};