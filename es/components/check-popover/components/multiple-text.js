import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { Space } from 'antd';
import OpenEye from '../images/eye_open.png';
import CloseEye from '../images/eye_close.png';
import "./index.css";
export default function MultipleText(props) {
  var _props$accountType = props.accountType,
    accountType = _props$accountType === void 0 ? '' : _props$accountType,
    _props$typeName = props.typeName,
    typeName = _props$typeName === void 0 ? 'type' : _props$typeName,
    _props$idName = props.idName,
    idName = _props$idName === void 0 ? 'id' : _props$idName,
    type = props.type,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    _props$serviceName = props.serviceName,
    serviceName = _props$serviceName === void 0 ? 'name' : _props$serviceName,
    _props$unit = props.unit,
    unit = _props$unit === void 0 ? '' : _props$unit,
    _props$isWrap = props.isWrap,
    isWrap = _props$isWrap === void 0 ? true : _props$isWrap,
    _props$valueUnit = props.valueUnit,
    valueUnit = _props$valueUnit === void 0 ? '' : _props$valueUnit,
    _props$width = props.width,
    width = _props$width === void 0 ? 200 : _props$width,
    ellipsisSpan = props.ellipsisSpan;
  // const [eyeClickIndex, setEyeClickIndex] = useState<boolean>(false)
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    phoneValue = _useState2[0],
    setPhoneValue = _useState2[1];
  var handleEyeChange = function handleEyeChange(e, i) {
    e.stopPropagation();
    setPhoneValue(phoneValue.map(function (item, index) {
      if (index === i) {
        return _objectSpread(_objectSpread({}, item), {}, {
          eyeClickIndex: !item.eyeClickIndex
        });
      }
      return item;
    }));
    // setEyeClickIndex(!eyeClickIndex)
  };

  var str = '';
  if (value === null || value === void 0 ? void 0 : value.length) {
    if (typeof serviceName === 'string') {
      str = value[0][serviceName];
    } else if (Object.prototype.toString.call(serviceName) === '[object Array]') {
      str = serviceName.map(function (item) {
        return value[0][item] || '';
      }).join('/') + valueUnit;
    }
  }
  useEffect(function () {
    if (type === 'phone' || type === 'telephone') {
      setPhoneValue(value);
    }
  }, [type, value === null || value === void 0 ? void 0 : value.length]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, (value === null || value === void 0 ? void 0 : value.length) > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "check-popover-hover-style"
  }, type === 'phone' && phoneValue.length && (phoneValue === null || phoneValue === void 0 ? void 0 : phoneValue.length) > 3 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Space, {
    size: 10
  }, /*#__PURE__*/React.createElement("span", {
    className: "telephone-style"
  }, phoneValue.length && phoneValue[0].eyeClickIndex ? phoneValue[0][serviceName] : String(phoneValue[0][serviceName]).replace(/(\d{3})\d*(\d{4})/, '$1****$2')), /*#__PURE__*/React.createElement("img", {
    onClick: function onClick(e) {
      return handleEyeChange(e, 0);
    },
    style: {
      width: '16px',
      height: '16px',
      display: 'inherit'
    },
    src: phoneValue.length && phoneValue[0].eyeClickIndex ? OpenEye : CloseEye
  })), /*#__PURE__*/React.createElement("span", {
    className: "more-type",
    style: {
      display: isWrap ? 'block' : 'inline-block',
      paddingLeft: isWrap ? '0' : '10px'
    }
  }, "\u7B49", unit)) : type === 'phone' && phoneValue.length && (phoneValue === null || phoneValue === void 0 ? void 0 : phoneValue.length) <= 3 ? /*#__PURE__*/React.createElement(React.Fragment, null, phoneValue === null || phoneValue === void 0 ? void 0 : phoneValue.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "telephone-style"
    }, item.eyeClickIndex ? item[serviceName] : String(item[serviceName]).replace(/(\d{3})\d*(\d{4})/, '$1****$2')), /*#__PURE__*/React.createElement("img", {
      onClick: function onClick(e) {
        return handleEyeChange(e, index);
      },
      style: {
        width: '16px',
        height: '16px',
        marginLeft: '10px'
      },
      src: item.eyeClickIndex ? OpenEye : CloseEye
    }));
  })) : type === 'telephone' && (phoneValue === null || phoneValue === void 0 ? void 0 : phoneValue.length) > 3 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Space, {
    size: 10
  }, /*#__PURE__*/React.createElement("span", {
    className: "telephone-style"
  }, phoneValue.length && phoneValue[0][serviceName])), /*#__PURE__*/React.createElement("span", {
    className: "more-type",
    style: {
      display: isWrap ? 'block' : 'inline-block',
      paddingLeft: isWrap ? '0' : '10px'
    }
  }, "\u7B49", unit)) : type === 'telephone' && (phoneValue === null || phoneValue === void 0 ? void 0 : phoneValue.length) <= 3 ? /*#__PURE__*/React.createElement(React.Fragment, null, phoneValue === null || phoneValue === void 0 ? void 0 : phoneValue.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "telephone-style"
    }, item[serviceName]));
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: width
    },
    className: "name-style"
  }, /*#__PURE__*/React.createElement("span", {
    ref: ellipsisSpan
  }, typeof value[0] === 'string' ? value[0] : str)), value.length > 1 ? /*#__PURE__*/React.createElement("span", {
    className: "more-type",
    style: {
      display: isWrap ? 'block' : 'inline-block',
      paddingLeft: isWrap ? '0' : '10px'
    }
  }, "\u7B49", unit) : null)) : '-');
}