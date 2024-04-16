import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { AccountPopover, KhtDrawerSearchProTable } from '../../../index';
import React, { useRef, useState } from 'react';
export default function ResidentList(props) {
  var open = props.open,
    onClose = props.onClose,
    _props$dataList = props.dataList,
    dataList = _props$dataList === void 0 ? [] : _props$dataList;
  var tableLayoutContainerRef = useRef();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  var columns = [{
    title: '名称',
    dataIndex: 'name',
    render: function render(_, record) {
      return /*#__PURE__*/React.createElement(AccountPopover, {
        trigger: "hover",
        placement: "right",
        type: "proprietor",
        nameStyle: {
          cursor: 'pointer'
        },
        name: record === null || record === void 0 ? void 0 : record.name,
        id: record === null || record === void 0 ? void 0 : record.id,
        zIndex: 1300,
        getPopupContainer: function getPopupContainer() {
          return document.getElementById('root') || document.body;
        }
      });
    }
  }];
  var requestTable = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setTotal(dataList.length);
            return _context.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTable() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    title: "\u4F4F\u6237",
    open: open,
    onClose: onClose,
    width: 700,
    rowKey: 'id',
    searchName: "name",
    ref: tableLayoutContainerRef,
    selectType: "readOnly",
    searchInputState: false,
    total: total,
    columns: columns,
    requestTable: requestTable
  }));
}