import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Button } from 'antd';
import KhtBusinessPeople from '../index';
export default function Demo() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectData = _useState4[0],
    setSelectData = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectObjData = _useState6[0],
    setSelectObjData = _useState6[1];
  var changeShow = function changeShow() {
    console.log('%c Line:5 🥕 open', 'color:#2eafb0', open);
    setOpen(true);
  };
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedPeople = _useState8[0],
    setSelectedPeople = _useState8[1];
  //抽屉提交事件
  var onSubmit = function onSubmit(selectedRowKeys, selectedRows, searchType) {
    console.log('%c Line:48 🍢 searchType', 'color:#b03734', searchType);
    console.log('%c Line:44 🥃 onSubmit-------selectedRowKeys', 'color:#ffdd4d', selectedRowKeys);
    console.log('%c Line:45 🥃 onSubmit-------selectedRows', 'color:#ffdd4d', selectedRows);
    setOpen(false);
    setSelectData(selectedRowKeys);
    setSelectObjData(selectedRows);
    setSelectedPeople(selectedRows);
  };
  var clearData = function clearData() {
    setSelectedPeople([]);
    setSelectData([]);
    setSelectObjData([]);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: changeShow,
    style: {
      marginRight: '20px'
    }
  }, "\u9009\u62E9\u4EBA\u5458"), /*#__PURE__*/React.createElement(Button, {
    type: "link",
    onClick: clearData
  }, "\u6E05\u7A7A\u6570\u636E"), /*#__PURE__*/React.createElement("div", null, selectObjData.map(function (item) {
    return item.name;
  }).join(','))), /*#__PURE__*/React.createElement(KhtBusinessPeople, {
    close: function close() {
      return setOpen(false);
    },
    open: open,
    onSubmit: onSubmit,
    selectedPeople: selectedPeople
  }));
}