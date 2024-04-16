import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Drawer, Pagination, ConfigProvider } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { KhtDrawerProTable } from '../../../../index';
import zhCN from 'antd/es/locale/zh_CN';
import { cloneDeep } from 'lodash';
import { getNewCustomerWxWorkDetailsById } from '../../api';
import { tableColumns } from './columns';
import HistoryDrawer from './components/history-drawer';
import { titleType } from '../../type';
import "./index.css";
export default function CustomerProfileTypeDrawer(props) {
  var open = props.open,
    _props$width = props.width,
    width = _props$width === void 0 ? 560 : _props$width,
    _props$type = props.type,
    type = _props$type === void 0 ? 'remark' : _props$type,
    customerId = props.customerId,
    _props$showTitleGroun = props.showTitleGround,
    showTitleGround = _props$showTitleGroun === void 0 ? true : _props$showTitleGroun,
    showSearchForm = props.showSearchForm,
    _props$showFooter = props.showFooter,
    showFooter = _props$showFooter === void 0 ? false : _props$showFooter,
    remark = props.remark;
  var tableRef = useRef(null);
  var actionRef = useRef(null);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    historyOpen = _useState4[0],
    setHistoryOpen = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    list = _useState6[0],
    setList = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dataSource = _useState8[0],
    setDataSource = _useState8[1];
  var _useState9 = useState(1),
    _useState10 = _slicedToArray(_useState9, 2),
    currentPage = _useState10[0],
    setCurrentPage = _useState10[1];
  var _useState11 = useState(20),
    _useState12 = _slicedToArray(_useState11, 2),
    pageSize = _useState12[0],
    setPageSize = _useState12[1];
  var showTotal = function showTotal(total) {
    return "\u5171 ".concat(total, "\u6761");
  };
  //取消
  var handleClose = function handleClose() {
    props.onClose && props.onClose();
  };
  //列表
  var requestTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var res, list;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getNewCustomerWxWorkDetailsById(customerId);
          case 2:
            res = _context.sent;
            list = (res === null || res === void 0 ? void 0 : res.customerFollowInfoResDtoList) || [];
            setList(list);
            setTotal(list.length || 0);
            return _context.abrupt("return", {
              data: list || [],
              success: true
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTableData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var showSizeChange = function showSizeChange(current, size) {
    setCurrentPage(1);
    setPageSize(size);
    var dataSource = list.slice(0, size);
    setDataSource(_toConsumableArray(dataSource));
  };
  var paginationChange = function paginationChange(page, pageSize) {
    setCurrentPage(page);
    var dataSource = list.slice((page - 1) * pageSize, page * pageSize);
    setDataSource(_toConsumableArray(dataSource));
  };
  var initFooter = showFooter && /*#__PURE__*/React.createElement("div", {
    className: "footer-content-wrapper"
  }, /*#__PURE__*/React.createElement(ClockCircleOutlined, {
    style: {
      color: '#666'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "footer-btn",
    style: {
      color: '#666',
      marginLeft: 7
    },
    onClick: function onClick() {
      setHistoryOpen(true);
    }
  }, type in titleType ? "\u5386\u53F2\u5BA2\u6237".concat(titleType[type]) : '历史客户'));
  //是否支持传入data
  var dataSourceProps = useMemo(function () {
    if (props.dataSource) {
      return {
        dataSource: dataSource
      };
    } else {
      return {};
    }
  }, [props.dataSource]);
  var title = useMemo(function () {
    return type in titleType ? "\u5BA2\u6237".concat(titleType[type]) : '客户';
  }, [type]);
  var columns = useMemo(function () {
    return type in tableColumns ? tableColumns[type] : [];
  }, [type]);
  useEffect(function () {
    if (open) {
      var _actionRef$current;
      (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.reload();
    } else {
      setDataSource([]);
      setCurrentPage(1);
      setPageSize(20);
      setList([]);
    }
  }, [open]);
  useEffect(function () {
    var tempList = cloneDeep(list);
    var dataSource = tempList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    //防止删除当前页所有数据造成bug
    if (tempList.length > 0 && dataSource.length == 0 && currentPage !== 1) {
      dataSource = tempList.slice((currentPage - 2) * pageSize, currentPage * pageSize);
      setCurrentPage(currentPage - 1);
    }
    setDataSource(_toConsumableArray(dataSource));
  }, [list]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Drawer, {
    open: open,
    title: title,
    width: width,
    className: "project-screen-drawer",
    getContainer: document.querySelector('#root'),
    onClose: handleClose,
    footer: initFooter
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-container"
  }, showTitleGround && /*#__PURE__*/React.createElement("div", {
    className: "title-ground",
    style: !showSearchForm && {
      marginBottom: 18
    } || {}
  }, /*#__PURE__*/React.createElement("span", null, remark ? "\uFF08".concat(remark, "\uFF09") : '')), props.titleGroundNode), /*#__PURE__*/React.createElement("div", {
    className: "table-layout-container"
  }, /*#__PURE__*/React.createElement(KhtDrawerProTable, _objectSpread({
    manualRequest: false,
    columns: columns,
    dataSource: dataSource,
    total: 0,
    ref: tableRef,
    actionRef: actionRef,
    rowKey: 'id',
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
    scroll: {
      y: 'calc(100vh - 300px)'
    }
  }, dataSourceProps))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, total > 20 ? /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(Pagination, {
    size: "small",
    total: total,
    current: currentPage,
    pageSize: pageSize,
    showTotal: showTotal,
    showQuickJumper: false,
    showSizeChanger: true,
    onShowSizeChange: showSizeChange,
    onChange: paginationChange,
    pageSizeOptions: [20, 50, 100],
    defaultPageSize: 20
  })) : total > 0 && total <= 20 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#999'
    }
  }, "\u5171", total, "\u6761")))), /*#__PURE__*/React.createElement(HistoryDrawer, {
    showFooter: showFooter,
    open: historyOpen,
    type: type,
    remark: remark,
    customerId: customerId,
    onClose: function onClose() {
      setHistoryOpen(false);
    }
  }));
}