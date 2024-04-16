import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { KhtDeptUserIconType, KhtDrawerSearchProTable } from '../../index';
import { Popover } from 'antd';
export default (function (props) {
  var open = props.open,
    onClose = props.onClose,
    _props$dataSource = props.dataSource,
    dataSource = _props$dataSource === void 0 ? [] : _props$dataSource;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    groupTotal = _useState2[0],
    setGroupTotal = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var tableLayoutContainerRef = useRef();
  var requestGroupTable = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _ref2,
        currentPage,
        pageSize,
        startIndex,
        endIndex,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, currentPage = _ref2.current, pageSize = _ref2.pageSize;
            startIndex = (currentPage - 1) * pageSize; // 当前页的起始数据索引
            endIndex = startIndex + pageSize; // 当前页的结束数据索引
            setGroupTotal((data === null || data === void 0 ? void 0 : data.length) || 0);
            return _context.abrupt("return", {
              data: data === null || data === void 0 ? void 0 : data.slice(startIndex, endIndex),
              total: groupTotal,
              success: true
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestGroupTable() {
      return _ref.apply(this, arguments);
    };
  }();
  var columns = [{
    title: '部门',
    dataIndex: 'name',
    ellipsis: true,
    render: function render(value, records) {
      console.log(records, 'records');
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '16px'
        }
      }, KhtDeptUserIconType.dept), /*#__PURE__*/React.createElement(Popover, {
        placement: "bottomLeft",
        overlayClassName: "select-dept-name-popover",
        zIndex: 1200,
        getPopupContainer: function getPopupContainer() {
          return document.querySelector('.dept-multiple-drawer .ant-drawer-body .ant-pro-table');
        },
        content: records === null || records === void 0 ? void 0 : records.fullName
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: '8px',
          color: '#333'
        }
      }, records.name)));
    }
  }];
  var onCancel = function onCancel() {
    onClose();
    setData(dataSource);
  };
  useEffect(function () {
    var _tableLayoutContainer;
    setData(dataSource);
    (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.initTableReload();
  }, [dataSource]);
  return /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    drawerClassName: "dept-multiple-drawer",
    ref: tableLayoutContainerRef,
    searchName: "searchInfo",
    title: "\u6240\u5C5E\u90E8\u95E8",
    open: open,
    onClose: onCancel,
    width: 480,
    selectType: "readOnly",
    searchInputState: false,
    total: groupTotal,
    columns: columns,
    requestTable: requestGroupTable
  });
});