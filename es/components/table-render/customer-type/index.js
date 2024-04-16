import React from 'react';
export default function KhtCustomerType(props) {
  var _typeObj$type, _typeObj$type$name, _typeObj$type2;
  var _props$type = props.type,
    type = _props$type === void 0 ? 'wxchat' : _props$type,
    name = props.name,
    _props$unit = props.unit,
    unit = _props$unit === void 0 ? '用户' : _props$unit;
  var typeObj = {
    wxchat: {
      color: '#2DB34A',
      name: "\u5FAE\u4FE1".concat(unit)
    },
    wechat: {
      color: '#2DB34A',
      name: "\u5FAE\u4FE1".concat(unit)
    },
    wxwork: {
      color: '#FF8B51',
      name: "\u4F01\u4E1A\u5FAE\u4FE1".concat(unit)
    }
  };
  var color = (_typeObj$type = typeObj[type]) === null || _typeObj$type === void 0 ? void 0 : _typeObj$type.color;
  var typeName = (_typeObj$type$name = (_typeObj$type2 = typeObj[type]) === null || _typeObj$type2 === void 0 ? void 0 : _typeObj$type2.name) !== null && _typeObj$type$name !== void 0 ? _typeObj$type$name : '参数有误哦';
  return /*#__PURE__*/React.createElement(React.Fragment, null, name ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", null, name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: color
    }
  }, "@".concat(typeName))) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: color
    }
  }, typeName));
}