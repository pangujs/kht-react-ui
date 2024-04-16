import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Modal } from 'antd';
import React, { useState } from 'react';
/** 操作按钮前的提示弹层 */
export default function PopconfirmModal(props) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var onOk = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.next = 3;
            return props.ok && props.ok();
          case 3:
            setLoading(false);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onOk() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(Modal, _objectSpread(_objectSpread({}, props.modalProps), {}, {
    title: props.title || '温馨提示',
    visible: props.visible,
    open: props.visible,
    onOk: onOk,
    onCancel: props.cancel,
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88",
    confirmLoading: loading,
    getContainer: document.getElementById('root') || document.body
  }), props.children);
}