import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect } from 'react';
import { Descriptions } from 'antd';
import DescriptionsItem from 'antd/lib/descriptions/Item';
import HeaderContainer from '../../check-popover/components/header-container';
import { joinTypeMap } from '../type';
import { AccountPopover } from '../../..';
import "./index.css";
import ResidentList from './resident-list';
import { useSetState } from 'ahooks';
export default function MemberInfo(props) {
  var _state$dataList$, _state$dataList$2, _info$createDate;
  var info = props.info;
  var _useSetState = useSetState({
      openResident: false,
      dataList: []
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  useEffect(function () {
    var _info$bindResident, _info$residentHouseId;
    var temp = (info === null || info === void 0 ? void 0 : (_info$bindResident = info.bindResident) === null || _info$bindResident === void 0 ? void 0 : _info$bindResident.split(',')) || [];
    var ids = (info === null || info === void 0 ? void 0 : (_info$residentHouseId = info.residentHouseId) === null || _info$residentHouseId === void 0 ? void 0 : _info$residentHouseId.split(',')) || [];
    var dataList = [];
    if (temp.length) {
      for (var index = 0; index < temp.length; index++) {
        var element = temp[index];
        dataList.push({
          name: element,
          id: ids[index]
        });
      }
    }
    setState({
      dataList: dataList
    });
  }, [info]);
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-account-popover-content kht-group-card-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(HeaderContainer, {
    name: info === null || info === void 0 ? void 0 : info.name,
    avatar: (info === null || info === void 0 ? void 0 : info.avstar) || (info === null || info === void 0 ? void 0 : info.customerAvatar),
    type: info === null || info === void 0 ? void 0 : info.customerType,
    sex: info === null || info === void 0 ? void 0 : info.customerSex,
    customerType: info === null || info === void 0 ? void 0 : info.customerType
  }), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 100,
      color: '#999'
    }
  }, (info === null || info === void 0 ? void 0 : info.groupType) == 2 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u7FA4\u6635\u79F0"
  }, (info === null || info === void 0 ? void 0 : info.remarkName) || '-'), /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u5FAE\u4FE1\u53F7"
  }, (info === null || info === void 0 ? void 0 : info.userId) || '-'), /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u5730\u533A"
  }, '-')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u7FA4\u5907\u6CE8\u540D"
  }, (info === null || info === void 0 ? void 0 : info.remarkName) || '-'), (info === null || info === void 0 ? void 0 : info.customerType) === 'wxwork' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u4F01\u4E1A"
  }, (info === null || info === void 0 ? void 0 : info.customerCorpName) || (info === null || info === void 0 ? void 0 : info.customerCorpFullName) || '-')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u7ED1\u5B9A\u4F4F\u6237"
  }, state.dataList.length > 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AccountPopover, {
    trigger: "hover",
    placement: "right",
    type: "proprietor",
    nameStyle: {
      cursor: 'pointer'
    },
    name: (_state$dataList$ = state.dataList[0]) === null || _state$dataList$ === void 0 ? void 0 : _state$dataList$.name,
    id: (_state$dataList$2 = state.dataList[0]) === null || _state$dataList$2 === void 0 ? void 0 : _state$dataList$2.id,
    zIndex: (props === null || props === void 0 ? void 0 : props.zIndex) ? (props === null || props === void 0 ? void 0 : props.zIndex) + 1 : undefined,
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('root') || document.body;
    }
  })), state.dataList.length > 1 ? /*#__PURE__*/React.createElement("div", {
    className: "more-resident-text",
    onClick: function onClick() {
      return setState({
        openResident: true
      });
    }
  }, "\u7B49\u4F4F\u6237") : null) : '-')), /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u8FDB\u7FA4\u65F6\u95F4"
  }, (info === null || info === void 0 ? void 0 : (_info$createDate = info.createDate) === null || _info$createDate === void 0 ? void 0 : _info$createDate.slice(0, 16)) || '-'), /*#__PURE__*/React.createElement(DescriptionsItem, {
    label: "\u8FDB\u7FA4\u65B9\u5F0F"
  }, joinTypeMap[info === null || info === void 0 ? void 0 : info.joinScene] || '-'))), /*#__PURE__*/React.createElement(ResidentList, {
    open: state.openResident,
    onClose: function onClose() {
      return setState({
        openResident: false
      });
    },
    dataList: state.dataList
  }));
}