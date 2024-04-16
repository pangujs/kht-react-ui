import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { Pagination, ConfigProvider } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import "./index.css";
import { getCustomerHistoryPhone } from '../../api';
import Drawer from 'antd/es/drawer';
import { KhtbusinessMobileText } from '../../../../index';
import zhCN from 'antd/es/locale/zh_CN';
import { cloneDeep } from 'lodash';
export default function CustomerMobileModal(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$id = props.id,
    id = _props$id === void 0 ? '' : _props$id,
    remark = props.remark,
    onClose = props.onClose;
  var currentId = useRef('');
  var columns = [{
    title: '客户电话',
    dataIndex: 'telephone',
    key: 'telephone',
    render: function render(_, record) {
      var _JSON$parse;
      console.log(JSON.parse(record.telephone));
      var p = (_JSON$parse = JSON.parse(record.telephone)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.map(function (i) {
        return i.telephone;
      }).join();
      return /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
        value: p
      });
    }
  }, {
    title: '添加人',
    dataIndex: 'employeeName',
    key: 'employeeName',
    ellipsis: true
  }, {
    title: '添加时间',
    dataIndex: 'addDate',
    key: 'addDate',
    render: function render(value, records) {
      var _records$addDate, _records$addDate2;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_records$addDate = records.addDate) === null || _records$addDate === void 0 ? void 0 : _records$addDate.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_records$addDate2 = records.addDate) === null || _records$addDate2 === void 0 ? void 0 : _records$addDate2.slice(10, 16)));
    }
  }, {
    title: '修改时间',
    dataIndex: 'updateDate',
    key: 'updateDate',
    render: function render(value, records) {
      var _records$updateDate, _records$updateDate2;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_records$updateDate = records.updateDate) === null || _records$updateDate === void 0 ? void 0 : _records$updateDate.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_records$updateDate2 = records.updateDate) === null || _records$updateDate2 === void 0 ? void 0 : _records$updateDate2.slice(10, 16)));
    }
  }];
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    dataSource = _useState2[0],
    setDataSource = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    total = _useState6[0],
    setTotal = _useState6[1];
  var _useState7 = useState(1),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPage = _useState8[0],
    setCurrentPage = _useState8[1];
  var _useState9 = useState(20),
    _useState10 = _slicedToArray(_useState9, 2),
    pageSize = _useState10[0],
    setPageSize = _useState10[1];
  var showTotal = function showTotal(total) {
    return "\u5171 ".concat(total, "\u6761");
  };
  var getDataList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res, temp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getCustomerHistoryPhone(currentId.current);
          case 2:
            res = _context.sent;
            temp = res || [];
            setTotal(temp.length || 0);
            setList(temp);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getDataList() {
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
  useEffect(function () {
    if (open) {
      currentId.current = id;
      getDataList();
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
    console.log('list: ', list);
  }, [list]);
  return /*#__PURE__*/React.createElement(Drawer, {
    title: "\u5386\u53F2\u5BA2\u6237\u7535\u8BDD",
    width: 560,
    className: "client-phone-modal",
    open: open,
    onClose: onClose,
    footer: null,
    maskClosable: true,
    getContainer: document.getElementById('root') || document.body
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, remark ? "\uFF08".concat(remark, "\uFF09") : ''), /*#__PURE__*/React.createElement("div", {
    className: "table-layout-container"
  }, /*#__PURE__*/React.createElement(ProTable, {
    columns: columns,
    dataSource: dataSource,
    toolBarRender: false,
    tableAlertRender: false,
    rowKey: "rowKey",
    search: false,
    pagination: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 21
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
  }, "\u5171", total, "\u6761"))));
}