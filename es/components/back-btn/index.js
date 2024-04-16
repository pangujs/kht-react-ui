import React from 'react';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import "./index.css";
export default function BackBtn(props) {
  var onClick = function onClick() {
    if (props.backFun) {
      props.backFun();
    } else {
      window.history.back();
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "back-btn"
  }, /*#__PURE__*/React.createElement(Button, {
    value: "small",
    className: "btn",
    onClick: onClick,
    icon: /*#__PURE__*/React.createElement(LeftOutlined, null)
  }, props.backText || '返回'), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, " ", props.title || '')));
}