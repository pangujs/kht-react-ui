import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import CustomerDrawer from './customer-drawer';
import HeaderContainer from './header-container';
import MultipleText from './multiple-text';
export default function AssetsAccountInfo(props) {
  var Type = {
    proprietor: '业主',
    tenant: '租户',
    family: '家属',
    tenantFamily: '租户家属',
    wechat: '微信客户',
    wxwork: '企微客户',
    employee: '员工'
  };
  var _ref = props.info || {},
    _ref$telephoneList = _ref.telephoneList,
    telephoneList = _ref$telephoneList === void 0 ? [] : _ref$telephoneList,
    _ref$followEmployeeLi = _ref.followEmployeeList,
    followEmployeeList = _ref$followEmployeeLi === void 0 ? [] : _ref$followEmployeeLi,
    name = _ref.name,
    businessType = _ref.businessType,
    sex = _ref.sex,
    avatar = _ref.avatar,
    telephone = _ref.telephone,
    landline = _ref.landline,
    assetFullName = _ref.assetFullName,
    isBindHouse = _ref.isBindHouse,
    residentHouseType = _ref.residentHouseType;
  var type = props.type;
  var phoneNumber = (landline === null || landline === void 0 ? void 0 : landline.split(',').map(function (item) {
    return {
      name: item
    };
  })) || [];
  var residentHouseList = (assetFullName === null || assetFullName === void 0 ? void 0 : assetFullName.split(',').map(function (item) {
    return {
      assetFullName: item
    };
  })) || [];
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    handleType = _useState4[0],
    setHandleType = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    title = _useState6[0],
    setTitle = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dataSource = _useState8[0],
    setDataSource = _useState8[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-account-popover-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(HeaderContainer, {
    name: name,
    businessType: businessType,
    sex: sex,
    type: type,
    avatar: avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u624B\u673A\u53F7\u7801"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner",
    onClick: function onClick(e) {
      e.stopPropagation();
      setVisible(true);
      setHandleType('assetMN');
      setTitle("\u4F4F\u6237\uFF1A".concat(name));
      setDataSource(telephoneList || []);
    }
  }, /*#__PURE__*/React.createElement(MultipleText, {
    type: "phone",
    value: telephoneList === null || telephoneList === void 0 ? void 0 : telephoneList.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        eyeClickIndex: false
      });
    }),
    serviceName: "telephone",
    unit: "\u624B\u673A\u53F7\u7801"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u7535\u8BDD\u53F7\u7801"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner",
    onClick: function onClick(e) {
      e.stopPropagation();
      setVisible(true);
      setHandleType('assetTN');
      setTitle("\u4F4F\u6237\uFF1A".concat(name));
      setDataSource(followEmployeeList || []);
    }
  }, /*#__PURE__*/React.createElement(MultipleText, {
    type: "telephone",
    value: phoneNumber,
    serviceName: "name",
    unit: "\u7535\u8BDD\u53F7\u7801"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content-row",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u7ED1\u5B9A\u8D44\u4EA7"), /*#__PURE__*/React.createElement("div", {
    className: "content-tags assets-tags"
  }, (residentHouseList === null || residentHouseList === void 0 ? void 0 : residentHouseList.length) ? residentHouseList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bind-asset",
      key: index
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "asset-name"
    }, item.assetFullName)), /*#__PURE__*/React.createElement("div", {
      className: "bind-type"
    }, Type[residentHouseType]), isBindHouse == 2 ? /*#__PURE__*/React.createElement("span", {
      className: "is-bind"
    }, "\u5DF2\u89E3\u7ED1") : null);
  }) : null)), /*#__PURE__*/React.createElement(CustomerDrawer, {
    drawerTableLayoutTitle: title,
    visible: visible,
    type: handleType,
    onClose: function onClose() {
      return setVisible(false);
    },
    dataSource: dataSource
  }));
}