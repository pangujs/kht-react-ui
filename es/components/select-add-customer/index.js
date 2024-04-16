import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect } from 'react';
import { Drawer, Radio, Button } from 'antd';
import "./index.css";
import Overflow from '../overflow';
import { useSetState } from 'ahooks';
import SelectMemberDrawer from './member-drawer/index';
import SelectDepartmentDrawer from '../select-department';
export default function SelectAddCustomer(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? '客户添加人' : _props$title,
    _props$hasNoAdd = props.hasNoAdd,
    hasNoAdd = _props$hasNoAdd === void 0 ? true : _props$hasNoAdd,
    memberTitle = props.memberTitle,
    _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    onClose = props.onClose,
    onSubmit = props.onSubmit,
    type = props.type,
    _props$initData = props.initData,
    initData = _props$initData === void 0 ? [] : _props$initData;
  var getInitDate = function getInitDate() {
    return {
      type: 'member',
      openMemberDrawer: false,
      openDepartment: false,
      memberList: [],
      departmentList: []
    };
  };
  var _useSetState = useSetState(getInitDate),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  var submitForm = function submitForm() {
    onSubmit && onSubmit(state.type, state.type == 'member' ? state.memberList : state.departmentList);
  };
  //改变类型
  var changeType = function changeType(e) {
    setState({
      type: e.target.value
    });
  };
  useEffect(function () {
    if (open) {
      setState(_defineProperty({
        type: type
      }, type == 'member' ? 'memberList' : 'departmentList', initData));
    } else {
      setState(getInitDate);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(Drawer, {
    className: "add-customer-drawer",
    getContainer: document.querySelector('#root'),
    title: title,
    width: 480,
    onClose: onClose,
    footer: [/*#__PURE__*/React.createElement(Button, {
      key: "cancel",
      className: "footer-cancel-btn",
      onClick: function onClick() {
        onClose;
      }
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      key: "submit",
      type: "primary",
      onClick: submitForm
    }, "\u786E\u8BA4")],
    open: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "type"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "\u7C7B\u578B"), /*#__PURE__*/React.createElement(Radio.Group, {
    onChange: changeType,
    value: state.type
  }, /*#__PURE__*/React.createElement(Radio, {
    value: "member"
  }, "\u6210\u5458"), /*#__PURE__*/React.createElement(Radio, {
    value: "department"
  }, "\u90E8\u95E8"))), /*#__PURE__*/React.createElement("div", {
    className: "member-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, state.type == 'member' ? '成员' : '部门'), state.type === 'member' ? /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, state.memberList.length > 0 && /*#__PURE__*/React.createElement(Overflow, {
    data: state.memberList,
    transformKey: "name",
    tips: "\u6210\u5458"
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      setState({
        openMemberDrawer: true
      });
    }
  }, state.memberList.length == 0 ? '请选择' : '修改')) : /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, state.departmentList.length > 0 && /*#__PURE__*/React.createElement(Overflow, {
    data: state.departmentList,
    transformKey: "name",
    tips: "\u90E8\u95E8"
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      setState({
        openDepartment: true
      });
    }
  }, state.departmentList.length == 0 ? '请选择' : '修改'))), /*#__PURE__*/React.createElement(SelectMemberDrawer, {
    title: memberTitle,
    onClose: function onClose() {
      setState({
        openMemberDrawer: false
      });
    },
    onSubmit: function onSubmit(ids, node) {
      setState({
        memberList: ids.length > 0 ? node : [],
        openMemberDrawer: false
      });
    },
    initData: state.memberList,
    open: state.openMemberDrawer,
    hasNoAdd: hasNoAdd
  }), /*#__PURE__*/React.createElement(SelectDepartmentDrawer, {
    initData: state.departmentList,
    open: state.openDepartment,
    onSubmit: function onSubmit(ids, nodes) {
      setState({
        departmentList: nodes,
        openDepartment: false
      });
    },
    onClose: function onClose() {
      setState({
        openDepartment: false
      });
    }
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};