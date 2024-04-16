import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState } from 'react';
import KhtDrawerSearchProTable from '../../drawer-search-pro-table';
import { getBindResidentList } from '../api';
import BusinessAccountPopover from '../../check-popover';
import Search from './search';
import { debounce } from 'lodash';
import "../index.css";
export default function HistoryDrawer(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? '历史绑定住户' : _props$title,
    _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'readOnly' : _props$selectType,
    _props$width = props.width,
    width = _props$width === void 0 ? 800 : _props$width,
    _props$customerId = props.customerId,
    customerId = _props$customerId === void 0 ? '' : _props$customerId,
    _props$customerName = props.customerName,
    customerName = _props$customerName === void 0 ? '' : _props$customerName,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    defaultRowKeys = props.defaultRowKeys,
    onClose = props.onClose;
  var bindResidenceRef = useRef();
  var searchRef = useRef();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    searchData = _useState4[0],
    setSearchData = _useState4[1];
  var identityMap = {
    family: '家属',
    proprietor: '业主',
    tenant: '租户',
    tenant_family: '租户家属',
    tenantFamily: '租户家属'
  };
  var handleClose = function handleClose() {
    setSearchData([]);
    onClose && onClose();
  };
  //过滤条件
  var onSearch = debounce(function (data) {
    var _bindResidenceRef$cur, _bindResidenceRef$cur2;
    setSearchData(data);
    (_bindResidenceRef$cur = bindResidenceRef.current) === null || _bindResidenceRef$cur === void 0 ? void 0 : _bindResidenceRef$cur.setInitTableCurrentPage(1); //重置分页
    (_bindResidenceRef$cur2 = bindResidenceRef.current) === null || _bindResidenceRef$cur2 === void 0 ? void 0 : _bindResidenceRef$cur2.initTableReload();
  }, 500);
  //查询列表
  var requestTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, residentType, searchInfo, communityType, projectId, residentBodyParams, method, bodyParams, res, _ref2, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            residentType = searchData.residentType, searchInfo = searchData.searchInfo, communityType = searchData.communityType, projectId = searchData.projectId;
            residentBodyParams = {
              id: customerId || 'ff57509813094ed8bbc41adeb61173ad',
              communityTreeCode: (projectId === null || projectId === void 0 ? void 0 : projectId.length) ? projectId[0] : '',
              communityType: communityType || 'residence',
              searchInfo: searchInfo,
              type: residentType,
              bindStatus: 2 //已解绑
            };
            method = getBindResidentList;
            bodyParams = residentBodyParams;
            _context.next = 7;
            return method(bodyParams, {
              pageSize: pageSize,
              currentPage: currentPage
            });
          case 7:
            res = _context.sent;
            _ref2 = res || {}, dataList = _ref2.dataList, totalCount = _ref2.totalCount;
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
    return function requestTableData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var columns = [{
    title: '住户',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
    hideInSearch: true,
    width: 150,
    render: function render(_, record) {
      return /*#__PURE__*/React.createElement(BusinessAccountPopover, {
        name: record.name,
        id: record.residentHouseId,
        type: record.type,
        trigger: "hover",
        zIndex: 2002,
        getPopupContainer: function getPopupContainer() {
          return document.querySelector('#root');
        }
      });
    }
  }, {
    title: '绑定资产',
    dataIndex: 'fullName',
    key: 'fullName',
    ellipsis: true,
    hideInSearch: true
  }, {
    title: '身份',
    dataIndex: 'type',
    key: 'type',
    hideInSearch: true,
    width: 100,
    render: function render(_, record) {
      return identityMap[record.type];
    }
  }, {
    title: '绑定时间',
    dataIndex: 'bindDate',
    key: 'bindDate',
    hideInSearch: true
  }, {
    title: '解绑人',
    key: 'unbindEmployeeName',
    dataIndex: 'unbindEmployeeName',
    ellipsis: true,
    render: function render(_, record) {
      return /*#__PURE__*/React.createElement(BusinessAccountPopover, {
        name: record.unbindEmployeeName,
        id: record.unbindEmployeeCode,
        type: 'employee',
        trigger: "hover",
        zIndex: 2002,
        getPopupContainer: function getPopupContainer() {
          return document.querySelector('#root');
        }
      });
    }
  }, {
    title: '解绑时间',
    key: 'unbindDate',
    dataIndex: 'unbindDate'
  }
  // {
  //   title: '解绑方式',
  //   key: 'unbindSource',
  //   dataIndex: 'unbindSource',
  //   ellipsis: true,
  //   render: (_: any, record: any) => {
  //     return bindSourceMap[record?.unbindSource];
  //   },
  // },
  ];

  var titleGround = function titleGround() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\u5BA2\u6237\uFF1A", customerName));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    open: open,
    title: title,
    onClose: handleClose,
    width: width,
    rowKey: rowKey,
    selectType: selectType,
    selectedRowKeys: defaultRowKeys,
    ref: bindResidenceRef,
    columns: columns,
    total: total,
    requestTable: function () {
      var _requestTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return requestTableData(params);
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function requestTable(_x2) {
        return _requestTable.apply(this, arguments);
      }
      return requestTable;
    }(),
    searchName: "searchInfo",
    radioSelectName: "name",
    titleGround: titleGround(),
    searchForm: /*#__PURE__*/React.createElement(Search, {
      type: "init",
      rowKey: rowKey,
      tableLayoutContainerRef: bindResidenceRef,
      ref: searchRef,
      showAdd: false,
      customerId: customerId,
      bindStatus: 2
    }),
    searchInputPlaceholder: "\u641C\u7D22",
    footer: null,
    onSearch: onSearch
  }));
}