import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef, useEffect } from 'react';
import { Image, Popover, Tag } from 'antd';
import Identity from './identity';
import DefaultAvatar from '../images/svg/default-avatar.svg';
import Man from '../images/svg/man.svg';
import WoMan from '../images/svg/woman.svg';
import Company from '../images/company.png';
import Group from '../images/group.png';
export default function HeaderContainer(props) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowPopover1 = _useState2[0],
    setIsShowPopover1 = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowPopover2 = _useState4[0],
    setIsShowPopover2 = _useState4[1];
  var ellipsisSpan1 = useRef();
  var ellipsisSpan2 = useRef();
  //是否显示省略号
  useEffect(function () {
    var _ellipsisSpan1$curren, _ellipsisSpan2$curren;
    setIsShowPopover1(180 == (ellipsisSpan1 === null || ellipsisSpan1 === void 0 ? void 0 : (_ellipsisSpan1$curren = ellipsisSpan1.current) === null || _ellipsisSpan1$curren === void 0 ? void 0 : _ellipsisSpan1$curren.offsetWidth));
    setIsShowPopover2(130 == (ellipsisSpan2 === null || ellipsisSpan2 === void 0 ? void 0 : (_ellipsisSpan2$curren = ellipsisSpan2.current) === null || _ellipsisSpan2$curren === void 0 ? void 0 : _ellipsisSpan2$curren.offsetWidth));
  }, [props === null || props === void 0 ? void 0 : props.name]);
  return /*#__PURE__*/React.createElement("div", {
    className: "name-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "img-info"
  }, /*#__PURE__*/React.createElement(Image, {
    preview: false,
    width: 60,
    height: 60,
    src: (props === null || props === void 0 ? void 0 : props.avatar) ? props === null || props === void 0 ? void 0 : props.avatar : props.type == 'group' ? Group : DefaultAvatar
  })), /*#__PURE__*/React.createElement("div", {
    className: "name-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name-sex"
  }, props.type == 'group' ? /*#__PURE__*/React.createElement("div", {
    className: "group-name",
    title: props === null || props === void 0 ? void 0 : props.name
  }, (props === null || props === void 0 ? void 0 : props.name) || '未知群') : (props === null || props === void 0 ? void 0 : props.type) == 'employee' && (props === null || props === void 0 ? void 0 : props.employeeStatus) && (props === null || props === void 0 ? void 0 : props.employeeStatus) == 2 ? /*#__PURE__*/React.createElement(Popover, {
    overlayStyle: isShowPopover2 ? {} : {
      display: 'none'
    },
    overlayClassName: "check-exceeding-ellipsis-popover",
    getPopupContainer: function getPopupContainer() {
      return document.querySelector('#root');
    },
    content: props === null || props === void 0 ? void 0 : props.name,
    placement: "topLeft"
  }, /*#__PURE__*/React.createElement("div", {
    ref: ellipsisSpan2,
    className: "depart-employee-name"
  }, props === null || props === void 0 ? void 0 : props.name)) : /*#__PURE__*/React.createElement(Popover, {
    overlayStyle: isShowPopover1 ? {} : {
      display: 'none'
    },
    overlayClassName: "check-exceeding-ellipsis-popover",
    getPopupContainer: function getPopupContainer() {
      return document.querySelector('#root');
    },
    content: props === null || props === void 0 ? void 0 : props.name,
    placement: "topLeft"
  }, /*#__PURE__*/React.createElement("div", {
    ref: ellipsisSpan1
  }, props === null || props === void 0 ? void 0 : props.name)), props.type == 'group' ? null : (props === null || props === void 0 ? void 0 : props.businessType) == 2 ? /*#__PURE__*/React.createElement("img", {
    src: Company,
    width: 15,
    height: 17
  }) : /*#__PURE__*/React.createElement("img", {
    src: (props === null || props === void 0 ? void 0 : props.sex) == 2 ? WoMan : Man,
    width: 13,
    height: 14
  }), (props === null || props === void 0 ? void 0 : props.type) == 'employee' && (props === null || props === void 0 ? void 0 : props.employeeStatus) && (props === null || props === void 0 ? void 0 : props.employeeStatus) == 2 ? /*#__PURE__*/React.createElement("span", {
    className: "leave-employee"
  }, "\u5DF2\u79BB\u804C") : null), /*#__PURE__*/React.createElement("div", {
    className: "name-type",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Identity, {
    type: props === null || props === void 0 ? void 0 : props.type,
    position: props === null || props === void 0 ? void 0 : props.position,
    customerType: props === null || props === void 0 ? void 0 : props.customerType
  }), (props === null || props === void 0 ? void 0 : props.groupStatus) && (props === null || props === void 0 ? void 0 : props.groupStatus) == '1' ? /*#__PURE__*/React.createElement(Tag, {
    style: {
      marginLeft: 10,
      borderRadius: 4
    },
    color: "error"
  }, "\u5DF2\u89E3\u6563") : null)));
}