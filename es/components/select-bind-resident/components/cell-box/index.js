import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import "./index.css";
export default function CellBox(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$hasArrow = props.hasArrow,
    hasArrow = _props$hasArrow === void 0 ? true : _props$hasArrow,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    _props$labelWidth = props.labelWidth,
    labelWidth = _props$labelWidth === void 0 ? 108 : _props$labelWidth,
    _props$valueColor = props.valueColor,
    valueColor = _props$valueColor === void 0 ? '#666' : _props$valueColor;
  var onClick = function onClick() {
    hasArrow && props.onClick && props.onClick();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cell-box ".concat(className),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cell-label",
    style: {
      width: labelWidth
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "cell-content",
    style: {
      cursor: hasArrow ? 'pointer' : 'auto',
      color: valueColor
    },
    onClick: onClick
  }, value || '-')), hasArrow ? /*#__PURE__*/React.createElement("div", {
    className: "right-icon",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(RightOutlined, null)) : null);
}