import React from 'react';
import HeaderContainer from './header-container';
export default function GroupInfo(props) {
  var _ref = props.info || {},
    name = _ref.name,
    classifyName = _ref.classifyName,
    leaderUserName = _ref.leaderUserName,
    communityName = _ref.communityName,
    leaderDepartmentNames = _ref.leaderDepartmentNames,
    groupType = _ref.groupType;
  var type = props.type;
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-account-popover-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(HeaderContainer, {
    name: name,
    type: type,
    customerType: groupType
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u7FA4\u5206\u7C7B"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, classifyName || '未设置')), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u6240\u5C5E\u9879\u76EE"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, communityName || '未设置')), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u7BA1\u7406\u4EBA\u5458"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, leaderUserName || '未设置')), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u6240\u5C5E\u90E8\u95E8"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, leaderDepartmentNames || '未设置')));
}