import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useImperativeHandle } from 'react';
import { ProTable } from '@ant-design/pro-components';
import { Pagination, ConfigProvider } from 'antd';
import "./index.css";
import zhCN from 'antd/es/locale/zh_CN';
// 抽屉表格
export default /*#__PURE__*/React.forwardRef(function DrawerProTable(props, ref) {
  var _props$manualRequest = props.manualRequest,
    manualRequest = _props$manualRequest === void 0 ? false : _props$manualRequest,
    total = props.total,
    actionRef = props.actionRef,
    columns = props.columns,
    scroll = props.scroll,
    requestTable = props.requestTable,
    _props$showQuickJumpe = props.showQuickJumper,
    showQuickJumper = _props$showQuickJumpe === void 0 ? false : _props$showQuickJumpe;
  var showTotal = function showTotal(total) {
    return "\u5171 ".concat(total, "\u6761");
  };
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = useState(20),
    _useState4 = _slicedToArray(_useState3, 2),
    pageSize = _useState4[0],
    setPageSize = _useState4[1];
  var paginationChange = function paginationChange(page, pageSize) {
    var _actionRef$current;
    setCurrentPage(page);
    setPageSize(pageSize);
    actionRef && (actionRef === null || actionRef === void 0 ? void 0 : (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.reload());
  };
  var showSizeChange = function showSizeChange(current, size) {
    var _actionRef$current2;
    setCurrentPage(current);
    setPageSize(size);
    actionRef && (actionRef === null || actionRef === void 0 ? void 0 : (_actionRef$current2 = actionRef.current) === null || _actionRef$current2 === void 0 ? void 0 : _actionRef$current2.reload());
  };
  //外部调用方法
  useImperativeHandle(ref, function () {
    return {
      setCurrentPage: setCurrentPage,
      setPageSize: setPageSize
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "drawer-table-layout"
  }, /*#__PURE__*/React.createElement(ProTable, _objectSpread(_objectSpread({
    scroll: scroll ? scroll : {
      y: 'calc(100vh - 280px)'
    }
  }, props), {}, {
    actionRef: actionRef,
    cardProps: false,
    columns: columns,
    manualRequest: manualRequest,
    request: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return requestTable(_objectSpread(_objectSpread({}, params), {}, {
                current: currentPage,
                pageSize: pageSize
              }));
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function request(_x) {
        return _request.apply(this, arguments);
      }
      return request;
    }(),
    options: false,
    search: false,
    pagination: false,
    headerTitle: false,
    tableAlertRender: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    }
  }, total > 20 ? /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(Pagination, {
    size: "small",
    total: total,
    current: currentPage,
    pageSize: pageSize,
    showTotal: showTotal,
    showQuickJumper: showQuickJumper,
    showSizeChanger: true,
    onShowSizeChange: showSizeChange,
    onChange: paginationChange,
    pageSizeOptions: [20, 50, 100],
    defaultPageSize: 20
  })) : total > 0 && total <= 20 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#999'
    }
  }, "\u5171", total, "\u6761")));
});
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Ref = function Ref(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};