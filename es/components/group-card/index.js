import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useMemo, useState } from 'react';
import { Popover, Spin } from 'antd';
import { getMemberCustomer, groupGet } from './api';
import "./index.css";
import GroupInfo from './components/group-info';
import MemberInfo from './components/member-info';
var GroupCard = function GroupCard(props) {
  var _props$zIndex = props.zIndex,
    zIndex = _props$zIndex === void 0 ? 800 : _props$zIndex,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
    id = props.id,
    _props$type = props.type,
    type = _props$type === void 0 ? 'group' : _props$type,
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
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var onOpenChange = function onOpenChange(open) {
    //获取用户信息的请求
    if (open && !info.id) {
      setLoading(true);
      var actions = type == 'group' ? groupGet : getMemberCustomer;
      actions({
        id: id
      }).then(function (res) {
        setLoading(false);
        console.log(res, 'userinfo');
        setInfo(res || {});
      });
    }
  };
  useEffect(function () {
    // id变更 清空信息，需要重新请求接口获取信息
    if (id) setInfo({});
  }, [id]);
  var PopoverContent = useMemo(function () {
    return /*#__PURE__*/React.createElement(Spin, {
      spinning: loading
    }, type === 'group' ? /*#__PURE__*/React.createElement(GroupInfo, {
      info: info,
      type: type,
      zIndex: zIndex
    }) : /*#__PURE__*/React.createElement(MemberInfo, {
      info: info,
      type: type,
      zIndex: zIndex
    }));
  }, [type, info, loading]);
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
export default GroupCard;
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};