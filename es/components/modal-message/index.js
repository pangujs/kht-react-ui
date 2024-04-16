import React from 'react';
import { Modal, Button } from 'antd';
import "./index.css";
//提示弹框
export default function ModalMessage(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 400 : _props$width,
    title = props.title,
    content = props.content,
    open = props.open,
    onOk = props.onOk,
    onCancel = props.onCancel;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, {
    className: "modal-message",
    style: {
      borderRadius: 8
    },
    closable: false,
    width: width,
    open: open,
    onOk: onOk,
    onCancel: onCancel,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 19
      }
    }, /*#__PURE__*/React.createElement(Button, {
      style: {
        borderColor: 'transparent',
        width: 168,
        background: '#F3F3F3',
        color: '#999',
        borderRadius: 8,
        marginRight: 12
      },
      onClick: onCancel
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      style: {
        borderColor: 'transparent',
        width: 168,
        background: '#0178FF',
        color: '#fff',
        borderRadius: 8
      },
      onClick: onOk
    }, "\u786E\u5B9A"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      color: '#000',
      fontWeight: 'bold',
      fontSize: '18px',
      textAlign: 'center'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 35,
      marginBottom: 11,
      fontSize: '16px',
      color: '#666',
      textAlign: 'center'
    }
  }, content)));
}