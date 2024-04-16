import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Button } from 'antd';
import KhtBusinessProject from '../index';
import { CurrentAppMenuStorage, Local } from '../../../utils/storage';
export default function Demo() {
  var CROP_ID = 'crop-id';
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState('customer'),
    _useState4 = _slicedToArray(_useState3, 2),
    useSystem = _useState4[0],
    setUseSystem = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    companyCode = _useState6[0],
    setCompanyCode = _useState6[1];
  var _useState7 = useState('radio'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectType = _useState8[0],
    setSelectType = _useState8[1];
  //抽屉提交事件
  var onSubmit = function onSubmit(data, selectedRows) {
    console.log('%c Line:48 🍢 selectedRows', 'color:#b03734', selectedRows);
    console.log('%c Line:44 🥃 onSubmit-------data', 'color:#ffdd4d', data);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      setCompanyCode(Local.get(CROP_ID));
      setUseSystem('customer');
      setSelectType('radio');
      setOpen(true);
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u9009\u62E9\u9879\u76EE\uFF08\u4E2D\u53F0\uFF09\u5355\u9009"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 20,
      marginBottom: 10
    },
    onClick: function onClick() {
      setCompanyCode(Local.get(CROP_ID));
      setUseSystem('customer');
      setSelectType('checkbox');
      setOpen(true);
    }
  }, "\u9009\u62E9\u9879\u76EE\uFF08\u4E2D\u53F0\uFF09\u591A\u9009"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 20,
      marginBottom: 10
    },
    onClick: function onClick() {
      //超管获取企业code特殊处理
      setCompanyCode(CurrentAppMenuStorage.get(CROP_ID));
      setUseSystem('admin');
      setSelectType('radio');
      setOpen(true);
    }
  }, "\u9009\u62E9\u9879\u76EE\uFF08\u8D85\u7BA1\uFF09\u5355\u9009"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 20,
      marginBottom: 10
    },
    onClick: function onClick() {
      //超管获取企业code特殊处理
      setCompanyCode(CurrentAppMenuStorage.get(CROP_ID));
      setUseSystem('admin');
      setSelectType('checkbox');
      setOpen(true);
    }
  }, "\u9009\u62E9\u9879\u76EE\uFF08\u8D85\u7BA1\uFF09\u591A\u9009")), /*#__PURE__*/React.createElement(KhtBusinessProject, {
    selectType: selectType,
    companyCode: companyCode,
    useSystem: useSystem,
    onClose: function onClose() {
      return setOpen(false);
    },
    open: open,
    onSubmit: onSubmit,
    isNoDefaultOrganization: true
  }));
}