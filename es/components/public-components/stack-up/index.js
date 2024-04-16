import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import styles from "./index.module.css";
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
export default function StackUp(props) {
  var _props$isDefaultClose;
  var _useState = useState((_props$isDefaultClose = props.isDefaultClose) !== null && _props$isDefaultClose !== void 0 ? _props$isDefaultClose : false),
    _useState2 = _slicedToArray(_useState, 2),
    isClosing = _useState2[0],
    setIsClosing = _useState2[1];
  var changeClosing = function changeClosing() {
    setIsClosing(!isClosing);
  };
  useEffect(function () {
    if (props.stackUpRef) {
      props.stackUpRef.current = {
        setClosingStatus: function setClosingStatus(visible) {
          setIsClosing(visible);
        }
      };
    }
  }, []);
  useEffect(function () {
    props.onShrinks && props.onShrinks(!isClosing);
  }, [isClosing]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: " ".concat(styles['stackup-container'])
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['stackup-container-base'])
  }, props.baseChildren), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['stackup-container-closing'], " ").concat(isClosing ? styles['slid-in'] : '', " ")
  }, /*#__PURE__*/React.createElement("span", {
    className: styles['tiggle-btn'],
    onClick: changeClosing
  }, isClosing ? /*#__PURE__*/React.createElement(DoubleRightOutlined, {
    className: "".concat(styles['closing-sty'])
  }) : /*#__PURE__*/React.createElement(DoubleLeftOutlined, {
    className: "".concat(styles['closing-sty'])
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(isClosing && styles['content-hide'])
  }, props.rightChildren))));
}