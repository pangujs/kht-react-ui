import React from 'react';
import "./index.css";
export default function MultipleText(props) {
  var _props$value;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#1890ff',
      cursor: 'pointer'
    }
  }, !((_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.length) && /*#__PURE__*/React.createElement("span", null, " - "), props.value.length === 1 && /*#__PURE__*/React.createElement("span", {
    title: props.value[0][props.serviceName],
    style: {
      maxWidth: 160,
      display: 'block'
    },
    className: "text-overflow"
  }, props.value[0][props.serviceName]), props.value.length > 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-overflow",
    title: props.value[0][props.serviceName],
    style: {
      marginRight: 5,
      maxWidth: '100px',
      display: 'inline-block',
      verticalAlign: 'bottom'
    }
  }, props.value[0][props.serviceName]), /*#__PURE__*/React.createElement("span", null, "\u7B49", props.value.length, props.unit)));
}