import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState } from 'react';
import { KhtDrawerSearchProTable } from '../../index';
import { columns } from './columns';
import { getProjectTableData, getAdminProjectTableData } from './api';
import Search from './components/search';
export default function KhtBusinessProject(props) {
  var _props$title = props.title,
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
    _props$isNoDefaultOrg = props.isNoDefaultOrganization,
    isNoDefaultOrganization = _props$isNoDefaultOrg === void 0 ? false : _props$isNoDefaultOrg,
    companyCode = props.companyCode,
    onClose = props.onClose,
    onSubmit = props.onSubmit;
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
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTotal = _useState8[0],
    setSelectedTotal = _useState8[1];
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
              province: province,
              city: city,
              district: district,
              name: name,
              organizationIds: organizationIds ? JSON.parse(organizationIds) : [],
              departmentTreeCodeList: departmentTreeCodeList ? JSON.parse(departmentTreeCodeList) : []
            };
            console.log('%c Line:44 🍞 requestData', 'color:#f5ce50', requestData);
            _context.next = 7;
            return (requestData === null || requestData === void 0 ? void 0 : requestData.organizationIds.length) > 0 || isNoDefaultOrganization ? useSystem === 'customer' ? getProjectTableData({
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
  // 第二层已选列表
  var _requestSelectedTable = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
      var _tableLayoutContainer;
      var currentPage, pageSize, organizationIds, departmentTreeCodeList, name, citySelectOptions, _ref6, _ref7, province, city, district, idList, requestData, actions, res, _ref8, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = params.current, pageSize = params.pageSize;
            organizationIds = selectedSearchData.organizationIds, departmentTreeCodeList = selectedSearchData.departmentTreeCodeList, name = selectedSearchData.name, citySelectOptions = selectedSearchData.citySelectOptions;
            _ref6 = citySelectOptions || [], _ref7 = _slicedToArray(_ref6, 3), province = _ref7[0], city = _ref7[1], district = _ref7[2];
            idList = (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.initSelectedRowKeys;
            requestData = {
              province: province,
              city: city,
              district: district,
              name: name,
              organizationIds: organizationIds ? JSON.parse(organizationIds) : searchData.organizationIds ? JSON.parse(searchData.organizationIds) : [],
              departmentTreeCodeList: departmentTreeCodeList ? JSON.parse(departmentTreeCodeList) : [],
              filterIdList: idList,
              searchType: '2'
            };
            actions = useSystem === 'customer' ? getProjectTableData : getAdminProjectTableData;
            _context2.next = 8;
            return actions({
              currentPage: currentPage,
              pageSize: pageSize,
              companyCode: useSystem !== 'customer' ? companyCode : undefined
            }, requestData);
          case 8:
            res = _context2.sent;
            _ref8 = res.response || {}, dataList = _ref8.dataList, totalCount = _ref8.totalCount;
            setSelectedTotal(totalCount || 0);
            return _context2.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function requestSelectedTable(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  // 全选
  var onAllSelectedChange = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(checked) {
      var _tableLayoutContainer2, organizationIds, departmentTreeCodeList, name, citySelectOptions, _ref10, _ref11, province, city, district, requestData, res, _ref12, dataList, _tableLayoutContainer3;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!checked) {
              _context3.next = 11;
              break;
            }
            organizationIds = searchData.organizationIds, departmentTreeCodeList = searchData.departmentTreeCodeList, name = searchData.name, citySelectOptions = searchData.citySelectOptions;
            _ref10 = citySelectOptions || [], _ref11 = _slicedToArray(_ref10, 3), province = _ref11[0], city = _ref11[1], district = _ref11[2];
            requestData = {
              province: province,
              city: city,
              district: district,
              name: name,
              organizationIds: organizationIds ? JSON.parse(organizationIds) : [],
              departmentTreeCodeList: departmentTreeCodeList ? JSON.parse(departmentTreeCodeList) : [],
              isBigData: true,
              isShowCommunityManager: 0
            };
            _context3.next = 6;
            return (requestData === null || requestData === void 0 ? void 0 : requestData.organizationIds.length) > 0 || isNoDefaultOrganization ? useSystem === 'customer' ? getProjectTableData({
              currentPage: 1,
              pageSize: 100000
            }, requestData) : getAdminProjectTableData({
              currentPage: 1,
              pageSize: 100000,
              companyCode: companyCode
            }, requestData) : {
              totalCount: 0,
              dataList: []
            };
          case 6:
            res = _context3.sent;
            _ref12 = res.response || {}, dataList = _ref12.dataList;
            (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setInitSelectedRowKeys((dataList || []).map(function (c) {
              return c.id;
            }) || []);
            _context3.next = 12;
            break;
          case 11:
            (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.setInitSelectedRowKeys([]);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onAllSelectedChange(_x3) {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleSubmit = function handleSubmit(data) {
    var _tableLayoutContainer5, _tableLayoutContainer6;
    if (selectType === 'radio') {
      var _tableLayoutContainer4;
      onSubmit && onSubmit(data, (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.initTableSelectedRows);
    } else if (selectType === 'checkbox' && ((_tableLayoutContainer5 = tableLayoutContainerRef.current) === null || _tableLayoutContainer5 === void 0 ? void 0 : _tableLayoutContainer5.initSelectedRowKeys.length)) {
      _requestSelectedTable({
        current: 1,
        pageSize: 10000
      }).then(function (_ref13) {
        var data = _ref13.data;
        return data;
      }).then(function (selectedRows) {
        onSubmit && onSubmit(data, selectedRows);
      });
    } else if (selectType === 'checkbox' && !((_tableLayoutContainer6 = tableLayoutContainerRef.current) === null || _tableLayoutContainer6 === void 0 ? void 0 : _tableLayoutContainer6.initSelectedRowKeys.length)) {
      onSubmit && onSubmit(data, []);
    }
  };
  var onCloseSelectTable = function onCloseSelectTable() {
    var _tableLayoutContainer7;
    //关闭已选组件制空
    (_tableLayoutContainer7 = tableLayoutContainerRef.current) === null || _tableLayoutContainer7 === void 0 ? void 0 : _tableLayoutContainer7.setSelectTableFieldsValue({});
  };
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
      isNoDefaultOrganization: isNoDefaultOrganization,
      tableLayoutContainerRef: tableLayoutContainerRef
    }),
    selectTableSearchForm: /*#__PURE__*/React.createElement(Search, {
      type: "selected",
      rowKey: rowKey,
      open: open,
      useSystem: useSystem,
      companyCode: companyCode,
      isNoDefaultOrganization: isNoDefaultOrganization,
      tableLayoutContainerRef: tableLayoutContainerRef
    }),
    total: total,
    selectedTotal: selectedTotal,
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
    onSearch: function onSearch(data) {
      var _tableLayoutContainer8, _tableLayoutContainer9;
      setSearchData(data);
      //条件变了分页都需要重置
      (_tableLayoutContainer8 = tableLayoutContainerRef.current) === null || _tableLayoutContainer8 === void 0 ? void 0 : _tableLayoutContainer8.setInitTableCurrentPage(1); //重置分页
      (_tableLayoutContainer9 = tableLayoutContainerRef.current) === null || _tableLayoutContainer9 === void 0 ? void 0 : _tableLayoutContainer9.initTableReload();
    },
    onSelectTableSearch: function onSelectTableSearch(data) {
      var _tableLayoutContainer10, _tableLayoutContainer11;
      setSelectedSearchData(data);
      //条件变了分页都需要重置
      (_tableLayoutContainer10 = tableLayoutContainerRef.current) === null || _tableLayoutContainer10 === void 0 ? void 0 : _tableLayoutContainer10.setSelectedTableCurrentPage(1); //重置分页
      (_tableLayoutContainer11 = tableLayoutContainerRef.current) === null || _tableLayoutContainer11 === void 0 ? void 0 : _tableLayoutContainer11.selectedTableReload();
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