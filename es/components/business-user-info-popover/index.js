import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { Avatar, Card, Popover } from 'antd';
import React from 'react';
import DefaultAvatar from '../../svg/default-avatar.svg';
import Man from '../../svg/man.svg';
import WoMan from '../../svg/woman.svg';
import "./index.css";
import KhtMobileText from '../table-render/mobile-text';
var Meta = Card.Meta;
export default function BusinessUserInfoPopover(props) {
  var contentList = props.contentList,
    descriptionNode = props.descriptionNode;
  var TipUserInfoComponents = function TipUserInfoComponents() {
    var _props$userInfo, _props$userInfo2, _props$userInfo3, _props$userInfo4;
    return /*#__PURE__*/React.createElement(Card, {
      style: {
        width: 300,
        padding: '20px 10px'
      },
      bordered: false,
      bodyStyle: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(Meta, {
      avatar: ((_props$userInfo = props.userInfo) === null || _props$userInfo === void 0 ? void 0 : _props$userInfo.avatar) ? /*#__PURE__*/React.createElement(Avatar, {
        shape: "square",
        size: 64,
        src: props.userInfo.avatar,
        alt: '加载失败'
      }) : /*#__PURE__*/React.createElement(Avatar, {
        shape: "square",
        size: 64,
        src: DefaultAvatar
      }),
      title: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, (_props$userInfo2 = props.userInfo) === null || _props$userInfo2 === void 0 ? void 0 : _props$userInfo2.name), /*#__PURE__*/React.createElement("img", {
        src: ((_props$userInfo3 = props.userInfo) === null || _props$userInfo3 === void 0 ? void 0 : _props$userInfo3.sex) == '1' ? Man : WoMan,
        style: {
          width: 15,
          marginLeft: 10,
          verticalAlign: 'unset'
        }
      })),
      description: descriptionNode ? descriptionNode : '客户类型: ' + (((_props$userInfo4 = props.userInfo) === null || _props$userInfo4 === void 0 ? void 0 : _props$userInfo4.type) == 'wechat' ? '微信客户' : '企微客户')
    }), /*#__PURE__*/React.createElement("div", {
      className: "popover-content-sty"
    }, Array.isArray(contentList) && contentList.map(function (val, inx) {
      return /*#__PURE__*/React.createElement("div", {
        className: "conent-list",
        key: inx + 'user-info-popover-key'
      }, /*#__PURE__*/React.createElement("span", {
        className: 'label-sty'
      }, val.label, " "), val.type === 'phone' ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(KhtMobileText, {
        value: val.value
      })) : val.render ? /*#__PURE__*/React.createElement(React.Fragment, null, val.render()) : /*#__PURE__*/React.createElement("span", null, val.value));
    })));
  };
  return /*#__PURE__*/React.createElement(Popover, _objectSpread({
    placement: "right",
    content: /*#__PURE__*/React.createElement(TipUserInfoComponents, null),
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('root') || document.body;
    }
  }, props.popoverProps), props.children || '移入提示');
}
export var UserInfoType = function UserInfoType(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var ContentListType = function ContentListType(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};