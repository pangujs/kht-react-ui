import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import CustomerDrawer from './customer-drawer';
import HeaderContainer from './header-container';
import MultipleText from './multiple-text';
import { Popover } from 'antd';
export default function EmployeeInfo(props) {
  var _ref = props.info || {},
    _ref$telephoneList = _ref.telephoneList,
    telephoneList = _ref$telephoneList === void 0 ? [] : _ref$telephoneList,
    name = _ref.name,
    businessType = _ref.businessType,
    sex = _ref.sex,
    avatar = _ref.avatar,
    username = _ref.username,
    telephone = _ref.telephone,
    employeeStatus = _ref.employeeStatus,
    departmentShortList = _ref.departmentShortList,
    position = _ref.position,
    customerType = _ref.type;
  var departName = (departmentShortList === null || departmentShortList === void 0 ? void 0 : departmentShortList.map(function (i) {
    return i.fullName;
  })) || [];
  var type = props.type;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    title = _useState4[0],
    setTitle = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    dataSource = _useState6[0],
    setDataSource = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    handleType = _useState8[0],
    setHandleType = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isShowPopover1 = _useState10[0],
    setIsShowPopover1 = _useState10[1];
  var ellipsisSpan1 = useRef();
  //是否显示省略号
  useEffect(function () {
    var _ellipsisSpan1$curren;
    setIsShowPopover1(210 < (ellipsisSpan1 === null || ellipsisSpan1 === void 0 ? void 0 : (_ellipsisSpan1$curren = ellipsisSpan1.current) === null || _ellipsisSpan1$curren === void 0 ? void 0 : _ellipsisSpan1$curren.offsetWidth));
  }, [name]);
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-account-popover-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(HeaderContainer, {
    name: name,
    employeeStatus: employeeStatus,
    businessType: businessType,
    sex: sex,
    type: type,
    position: position,
    avatar: avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u8D26\u53F7"), /*#__PURE__*/React.createElement(Popover, {
    overlayStyle: isShowPopover1 ? {} : {
      display: 'none'
    },
    overlayClassName: "check-exceeding-ellipsis-popover",
    getPopupContainer: function getPopupContainer() {
      return document.querySelector('#root');
    },
    content: username || '-',
    placement: "topLeft"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline'
    },
    ref: ellipsisSpan1
  }, username || '-')))), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u624B\u673A\u53F7\u7801"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, /*#__PURE__*/React.createElement(MultipleText, {
    type: "phone",
    value: telephone === null || telephone === void 0 ? void 0 : telephone.split(',').map(function (item) {
      return {
        name: item,
        eyeClickIndex: false
      };
    }),
    serviceName: "name",
    unit: "\u624B\u673A\u53F7\u7801"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content-row",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u90E8\u95E8"), /*#__PURE__*/React.createElement("div", {
    className: "content-tags"
  }, (departName === null || departName === void 0 ? void 0 : departName.length) ? departName.map(function (i, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, i);
  }) : '-')), /*#__PURE__*/React.createElement(CustomerDrawer, {
    drawerTableLayoutTitle: title,
    visible: visible,
    type: handleType,
    onClose: function onClose() {
      return setVisible(false);
    },
    dataSource: dataSource
  }));
}