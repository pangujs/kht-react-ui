import React from 'react';
import { Descriptions, Space } from 'antd';
import DescriptionsItem from 'antd/lib/descriptions/Item';
import HeaderContainer from '../../check-popover/components/header-container';
import { AccountPopover } from '../../..';
export default function GroupInfo(props) {
  var _tagNames$split;
  var _ref = props.info || {},
    name = _ref.name,
    ownerName = _ref.ownerName,
    ownerCode = _ref.ownerCode,
    memberCount = _ref.memberCount,
    classifyName = _ref.classifyName,
    leaderUserName = _ref.leaderUserName,
    communityName = _ref.communityName,
    groupType = _ref.groupType,
    tagNames = _ref.tagNames,
    leaderUserCode = _ref.leaderUserCode,
    groupStatus = _ref.groupStatus;
  var type = props.type;
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-account-popover-content kht-group-card-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, groupStatus == '1' ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 16,
      color: '#333',
      height: '100px',
      lineHeight: '100px'
    }
  }, "\u7FA4\u5DF2\u89E3\u6563") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderContainer, {
    name: name,
    type: type,
    customerType: groupType,
    groupStatus: groupStatus
  }), groupStatus != '1' && /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 100,
      color: '#999'
    }
  }, /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u7FA4\u4E3B"
  }, ownerCode ? /*#__PURE__*/React.createElement(AccountPopover, {
    trigger: "hover",
    placement: "right",
    type: "employee",
    nameStyle: {
      cursor: 'pointer'
    },
    name: ownerName || '-',
    id: ownerCode,
    zIndex: (props === null || props === void 0 ? void 0 : props.zIndex) ? (props === null || props === void 0 ? void 0 : props.zIndex) + 1 : undefined,
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('root') || document.body;
    }
  }) : ownerName || '-'), /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u7FA4\u6210\u5458"
  }, memberCount || '-', memberCount ? '人' : ''), /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u7FA4\u5206\u7C7B"
  }, classifyName || '-'), /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u6240\u5C5E\u9879\u76EE"
  }, communityName || '-'), /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u4F01\u4E1A\u7FA4\u7BA1\u7406\u5458"
  }, leaderUserCode ? /*#__PURE__*/React.createElement(AccountPopover, {
    trigger: "hover",
    placement: "right",
    type: "employee",
    nameStyle: {
      cursor: 'pointer'
    },
    name: leaderUserName || '-',
    id: leaderUserCode,
    zIndex: (props === null || props === void 0 ? void 0 : props.zIndex) ? (props === null || props === void 0 ? void 0 : props.zIndex) + 1 : undefined,
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('root') || document.body;
    }
  }) : leaderUserName || '-'), /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u7FA4\u6807\u7B7E"
  }, (tagNames === null || tagNames === void 0 ? void 0 : tagNames.length) ? /*#__PURE__*/React.createElement("div", {
    className: "content-tags"
  }, /*#__PURE__*/React.createElement(Space, {
    size: 8,
    wrap: true
  }, (_tagNames$split = tagNames.split(',')) === null || _tagNames$split === void 0 ? void 0 : _tagNames$split.map(function (i, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tags",
      key: index
    }, i);
  }))) : '-'))));
}