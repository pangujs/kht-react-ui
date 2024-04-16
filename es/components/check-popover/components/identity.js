import React from 'react';
export default function Identity(props) {
  var Type = {
    proprietor: '业主',
    tenant: '租户',
    family: '家属',
    tenantFamily: '租户家属',
    employee: '员工',
    wechat: '微信客户',
    wxwork: '企微客户',
    '1': '企微群',
    '2': '个微群'
  };
  var type = props.type || '';
  var customerType = props.customerType || '';
  if (type == 'wechat' || type == 'wxwork') {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: customerType == 'wechat' ? 'wechart-identity' : customerType == 'wxwork' ? 'wxwork-identity' : ''
    }, Type[customerType] || null));
  } else if (type == 'employee') {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "account"
    }, props.position || null));
  } else if (type == 'group') {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: customerType == '1' ? 'wxwork-identity' : customerType == '2' ? 'wechart-identity' : ''
    }, Type[customerType] || null));
  } else {
    return /*#__PURE__*/React.createElement("div", null);
  }
}