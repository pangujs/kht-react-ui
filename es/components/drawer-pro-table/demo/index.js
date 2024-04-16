import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState } from 'react';
import { KhtDrawerProTable } from '../../../index';
export default function Demo() {
  var drawerProTableRef = useRef(null);
  var selectedActionRef = useRef(null);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  var columns = [{
    title: '充值数量',
    dataIndex: 'openCount',
    ellipsis: true,
    hideInSearch: true
  }, {
    title: '单位',
    dataIndex: 'unit',
    ellipsis: true,
    hideInSearch: true
  }, {
    title: '充值人',
    dataIndex: 'createAccountName',
    ellipsis: true,
    hideInSearch: true
  }, {
    title: '充值时间',
    dataIndex: 'createDate',
    ellipsis: true,
    hideInSearch: true
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerProTable, {
    manualRequest: false,
    columns: columns,
    total: total,
    ref: drawerProTableRef,
    actionRef: selectedActionRef,
    rowKey: 'id',
    requestTable: function () {
      var _requestTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Promise.resolve({}));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function requestTable(_x) {
        return _requestTable.apply(this, arguments);
      }
      return requestTable;
    }()
  }));
}