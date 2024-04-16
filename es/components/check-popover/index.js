import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useMemo, useState } from 'react';
import { Popover } from 'antd';
import { getAccountInfoById, getGroupList } from './api';
import "./index.css";
import WxAccountInfo from './components/wx-account-info';
import AssetsAccountInfo from './components/assets-account-info';
import EmployeeInfo from './components/employee-info';
import GroupInfo from './components/group-info';
var AccountPopover = function AccountPopover(props) {
  var _props$zIndex = props.zIndex,
    zIndex = _props$zIndex === void 0 ? 800 : _props$zIndex,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
    id = props.id,
    _props$type = props.type,
    type = _props$type === void 0 ? 'employee' : _props$type,
    _props$name = props.name,
    name = _props$name === void 0 ? '-' : _props$name,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottom' : _props$placement,
    nameStyle = props.nameStyle,
    getPopupContainer = props.getPopupContainer;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    info = _useState2[0],
    setInfo = _useState2[1];
  var onOpenChange = function onOpenChange(open) {
    //获取用户信息的请求
    if (open && !info.id) {
      if (type == 'group') {
        getGroupList({
          id: id
        }).then(function (res) {
          setInfo(res || {});
        });
      } else {
        getAccountInfoById({
          id: id,
          type: type
        }).then(function (res) {
          console.log(res, 'userinfo');
          setInfo(res || {});
        });
      }
    }
  };
  useEffect(function () {
    // id变更 清空信息，需要重新请求接口获取信息
    if (id) setInfo({});
  }, [id]);
  var PopoverContent = useMemo(function () {
    if (['proprietor', 'tenant', 'family', 'tenantFamily', 'carPlace'].includes(type)) {
      return /*#__PURE__*/React.createElement(AssetsAccountInfo, {
        info: info,
        type: type
      });
    } else if (['wechat', 'wxwork'].includes(type)) {
      return /*#__PURE__*/React.createElement(WxAccountInfo, {
        info: info,
        type: type
      });
    } else if (['group'].includes(type)) {
      return /*#__PURE__*/React.createElement(GroupInfo, {
        info: info,
        type: type
      });
    } else {
      return /*#__PURE__*/React.createElement(EmployeeInfo, {
        info: info,
        type: type
      });
    }
  }, [type, info]);
  return /*#__PURE__*/React.createElement(Popover, {
    placement: placement,
    getPopupContainer: getPopupContainer ? getPopupContainer : function (node) {
      return (node === null || node === void 0 ? void 0 : node.parentElement) || document.body;
    },
    onOpenChange: onOpenChange,
    content: PopoverContent,
    trigger: trigger,
    overlayClassName: "check-popover",
    zIndex: zIndex
  }, /*#__PURE__*/React.createElement("span", {
    style: nameStyle
  }, name));
};
export default AccountPopover;
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};