import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Modal, Checkbox } from 'antd';
import MobileText from './mobile-text';
import CellBox from './cell-box';
export default function BindConfirmModal(props) {
  var _props$isBind = props.isBind,
    isBind = _props$isBind === void 0 ? true : _props$isBind,
    bindOpen = props.bindOpen,
    _props$bindData = props.bindData,
    bindData = _props$bindData === void 0 ? [] : _props$bindData,
    _props$customerName = props.customerName,
    customerName = _props$customerName === void 0 ? '' : _props$customerName,
    _props$remark = props.remark,
    remark = _props$remark === void 0 ? '' : _props$remark,
    onClose = props.onClose,
    onOk = props.onOk;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    isAllBind = _useState2[0],
    setIsAllBind = _useState2[1];
  var currentItem = bindData.length ? bindData[0] : {};
  var handleClose = function handleClose() {
    onClose && onClose();
  };
  var handleOk = function handleOk() {
    onOk && onOk(isAllBind);
  };
  // 是否绑定全部资产
  var onChange = function onChange(e) {
    e.target.checked ? setIsAllBind(1) : setIsAllBind(0);
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: isBind ? '绑定确认' : '解绑确认',
    open: bindOpen,
    zIndex: 3001,
    onOk: handleOk,
    onCancel: handleClose,
    className: "bind-confirm-modal",
    getContainer: document.getElementById('root') || document.body
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CellBox, {
    labelWidth: 80,
    valueColor: '#333',
    style: {
      padding: '5px 0'
    },
    hasArrow: false,
    label: "\u7528\u6237\u6635\u79F0\uFF1A",
    value: remark ? "".concat(customerName, " (").concat(remark, ")") : customerName
  }), /*#__PURE__*/React.createElement(CellBox, {
    labelWidth: 80,
    valueColor: '#333',
    style: {
      padding: '5px 0'
    },
    hasArrow: false,
    label: "\u7ED1\u5B9A\u4E1A\u6237\uFF1A",
    value: /*#__PURE__*/React.createElement("div", {
      className: "customer-owner-modal-owner-info"
    }, /*#__PURE__*/React.createElement("div", null, currentItem === null || currentItem === void 0 ? void 0 : currentItem.fullName), /*#__PURE__*/React.createElement("div", null, currentItem === null || currentItem === void 0 ? void 0 : currentItem.name, (currentItem === null || currentItem === void 0 ? void 0 : currentItem.type) == 'proprietor' ? '（业主）' : (currentItem === null || currentItem === void 0 ? void 0 : currentItem.type) == 'family' ? '（家属）' : '（租户）'))
  }), /*#__PURE__*/React.createElement(CellBox, {
    labelWidth: 80,
    valueColor: '#333',
    style: {
      padding: '5px 0'
    },
    hasArrow: false,
    label: "\u624B\u673A\u53F7\u7801\uFF1A",
    value: /*#__PURE__*/React.createElement(MobileText, {
      value: currentItem === null || currentItem === void 0 ? void 0 : currentItem.telephone
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    onChange: onChange,
    style: {
      color: '#999',
      fontSize: '16px'
    }
  }, isBind ? '绑定' : '解绑', "\u8BE5\u4F4F\u6237\u7684\u6240\u6709\u8D44\u4EA7")));
}