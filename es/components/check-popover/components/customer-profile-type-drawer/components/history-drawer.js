import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { KhtDrawerSearchProTable } from '../../../../../index';
import { getCustomerRemarkHistoryListById, getCustomerDescriptionHistoryListById } from '../../../api';
import { titleType } from '../../../type';
import { tableColumns } from '../columns';
import "../index.css";
export default function HistoryDrawer(props) {
  var open = props.open,
    _props$width = props.width,
    width = _props$width === void 0 ? 560 : _props$width,
    _props$type = props.type,
    type = _props$type === void 0 ? 'remark' : _props$type,
    customerId = props.customerId,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'readOnly' : _props$selectType,
    _props$searchInputSta = props.searchInputState,
    searchInputState = _props$searchInputSta === void 0 ? false : _props$searchInputSta,
    showSearchForm = props.showSearchForm,
    remark = props.remark;
  var tableRef = useRef(null);
  var actionRef = useRef(null);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  //取消
  var handleClose = function handleClose() {
    console.log('llll');
    props.onClose && props.onClose();
  };
  //列表
  var requestTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var req, res, list;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            req = type == 'remark' ? getCustomerRemarkHistoryListById : getCustomerDescriptionHistoryListById;
            _context.next = 3;
            return req(customerId);
          case 3:
            res = _context.sent;
            list = res || [];
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
  var TitleGround = /*#__PURE__*/React.createElement("div", {
    className: "title-ground",
    style: !showSearchForm && {
      marginBottom: 16
    } || {}
  }, /*#__PURE__*/React.createElement("span", null, remark ? "\uFF08".concat(remark, "\uFF09") : ''));
  var title = useMemo(function () {
    return type in titleType ? "\u5386\u53F2\u5BA2\u6237".concat(titleType[type]) : '历史客户';
  }, [type]);
  var columns = useMemo(function () {
    var suffixColumns = [{
      title: '修改时间',
      dataIndex: 'updateDate',
      key: 'updateDate',
      render: function render(value, records) {
        var _records$updateDate, _records$updateDate2;
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_records$updateDate = records.updateDate) === null || _records$updateDate === void 0 ? void 0 : _records$updateDate.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_records$updateDate2 = records.updateDate) === null || _records$updateDate2 === void 0 ? void 0 : _records$updateDate2.slice(10, 16)));
      }
    }];
    return type in tableColumns ? [].concat(_toConsumableArray(tableColumns[type]), suffixColumns) : [];
  }, [type]);
  useEffect(function () {
    if (open) {
      var _actionRef$current;
      (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.reload();
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    open: open,
    title: title,
    width: width,
    className: "project-screen-drawer",
    rowKey: 'id',
    ref: tableRef,
    actionRef: actionRef,
    selectType: selectType,
    searchInputState: searchInputState,
    getContainer: document.querySelector('#root'),
    onClose: handleClose,
    total: total,
    columns: columns,
    requestTable: requestTableData,
    titleGround: TitleGround,
    footer: null
  }));
}