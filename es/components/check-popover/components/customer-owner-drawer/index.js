import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { KhtDrawerSearchProTable } from '../../../../index';
import { getCustomerOwnerList } from '../../api';
import Search from './components/search';
import HistoryDrawer from './components/history-drawer';
import { tableColumns } from './columns';
import "./index.css";
export default function CustomerOwnerDrawer(props) {
  var open = props.open,
    _props$width = props.width,
    width = _props$width === void 0 ? 560 : _props$width,
    _props$type = props.type,
    type = _props$type === void 0 ? 'remark' : _props$type,
    customerId = props.customerId,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'readOnly' : _props$selectType,
    _props$searchInputSta = props.searchInputState,
    searchInputState = _props$searchInputSta === void 0 ? true : _props$searchInputSta,
    showSearchForm = props.showSearchForm,
    _props$showFooter = props.showFooter,
    showFooter = _props$showFooter === void 0 ? true : _props$showFooter,
    remark = props.remark;
  var tableRef = useRef();
  var actionRef = useRef(null);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    searchData = _useState2[0],
    setSearchData = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    total = _useState4[0],
    setTotal = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    historyOpen = _useState6[0],
    setHistoryOpen = _useState6[1];
  //取消
  var handleClose = function handleClose() {
    var _tableRef$current;
    (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.setInitTableFieldsValue({
      searchInfo: undefined,
      addWay: undefined
    });
    props.onClose && props.onClose();
  };
  //列表
  var requestTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, searchInfo, addWay, bodyParams, res, list;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            searchInfo = searchData.searchInfo, addWay = searchData.addWay;
            bodyParams = {
              customerStatus: 0,
              customerId: customerId,
              searchInfo: searchInfo,
              addWay: addWay
            };
            _context.next = 5;
            return getCustomerOwnerList(bodyParams, {
              currentPage: currentPage,
              pageSize: pageSize
            });
          case 5:
            res = _context.sent;
            list = (res === null || res === void 0 ? void 0 : res.dataList) || [];
            setTotal((res === null || res === void 0 ? void 0 : res.totalCount) || 0);
            return _context.abrupt("return", {
              data: list || [],
              success: true
            });
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTableData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var initFooter = showFooter && /*#__PURE__*/React.createElement("div", {
    className: "customer-add-people-footer-content"
  }, /*#__PURE__*/React.createElement(ClockCircleOutlined, null), /*#__PURE__*/React.createElement("span", {
    className: "footer-btn",
    onClick: function onClick() {
      setHistoryOpen(true);
    }
  }, "\u5386\u53F2\u6DFB\u52A0\u4EBA"));
  var TitleGround = /*#__PURE__*/React.createElement("div", {
    className: "title-ground",
    style: !showSearchForm && {
      marginBottom: 16
    } || {}
  }, /*#__PURE__*/React.createElement("span", null, remark ? "\uFF08".concat(remark, "\uFF09") : ''));
  var columns = useMemo(function () {
    return type in tableColumns ? tableColumns[type] : [];
  }, [type]);
  useEffect(function () {
    if (open) {
      var _actionRef$current;
      (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.reload();
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    open: open,
    title: "\u5BA2\u6237\u6DFB\u52A0\u4EBA",
    width: width,
    rowKey: 'id',
    ref: tableRef,
    actionRef: actionRef,
    selectType: selectType,
    searchName: "searchInfo",
    searchForm: /*#__PURE__*/React.createElement(Search, {
      tableLayoutContainerRef: tableRef
    }),
    searchInputState: searchInputState,
    getContainer: document.querySelector('#root'),
    onClose: handleClose,
    total: total,
    columns: columns,
    requestTable: requestTableData,
    titleGround: TitleGround,
    footer: initFooter,
    onSearch: function onSearch(data) {
      var _tableRef$current2, _tableRef$current3;
      setSearchData(data);
      (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.setInitTableCurrentPage(1); //重置分页
      (_tableRef$current3 = tableRef.current) === null || _tableRef$current3 === void 0 ? void 0 : _tableRef$current3.initTableReload();
    }
  }), /*#__PURE__*/React.createElement(HistoryDrawer, {
    open: historyOpen,
    customerId: customerId,
    type: type,
    remark: remark,
    onClose: function onClose() {
      setHistoryOpen(false);
    }
  }));
}