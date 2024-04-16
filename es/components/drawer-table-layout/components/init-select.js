import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useMemo } from 'react';
import { Checkbox, Button } from 'antd';
import Main from './main';
//初始选择组件
function InitSelect(props, ref) {
  var _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'checkbox' : _props$selectType,
    _props$searchType = props.searchType,
    searchType = _props$searchType === void 0 ? '2' : _props$searchType,
    _props$onSubmit = props.onSubmit,
    onSubmit = _props$onSubmit === void 0 ? function () {} : _props$onSubmit,
    _props$openSelectedCo = props.openSelectedComponent,
    openSelectedComponent = _props$openSelectedCo === void 0 ? function () {} : _props$openSelectedCo,
    _props$onCheckAllChan = props.onCheckAllChange,
    onCheckAllChange = _props$onCheckAllChan === void 0 ? function () {} : _props$onCheckAllChan,
    drawerProps = props.drawerProps,
    initTableOptions = props.initTableOptions;
  var _drawerProps$onClose = drawerProps.onClose,
    onClose = _drawerProps$onClose === void 0 ? function () {} : _drawerProps$onClose;
  var _initTableOptions$che = initTableOptions.checkedAllText,
    checkedAllText = _initTableOptions$che === void 0 ? '(全选最多选2万条)' : _initTableOptions$che,
    _initTableOptions$sel = initTableOptions.selectedRowKeys,
    selectedRowKeys = _initTableOptions$sel === void 0 ? [] : _initTableOptions$sel,
    tableNode = initTableOptions.tableNode,
    _initTableOptions$tab = initTableOptions.tableDataTotal,
    tableDataTotal = _initTableOptions$tab === void 0 ? 0 : _initTableOptions$tab,
    _initTableOptions$sel2 = initTableOptions.selectedRows,
    selectedRows = _initTableOptions$sel2 === void 0 ? [] : _initTableOptions$sel2;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    indeterminate = _useState2[0],
    setIndeterminate = _useState2[1]; //半选状态
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    checkboxSelectState = _useState4[0],
    setCheckboxSelectState = _useState4[1]; //全选选择状态
  //全选事件
  var checkAllChange = function checkAllChange(_ref) {
    var target = _ref.target;
    var checked = target.checked;
    setCheckboxSelectState(checked);
    onCheckAllChange(checked);
  };
  useEffect(function () {
    // //手动点击了全选状态，全选按钮的必要条件
    // let handleState = searchType === '1';
    // //手动全选状态下，取消了表格中的选项时，全选的选中状态是半选（全选未满）
    // let selectAllStatus = tableDataTotal === selectedRowKeys.length;
    // /**
    //  * 全选按钮显示状态:
    //  * 1、【手动全选】时数量满为【勾选】状态；
    //  * 2、【手动全选】时取消部分选中（数量未满）时为【半选状态】；
    //  * 3、选中的数据为空时取消【手动的全选】动作恢复【选中类型2】
    //  */
    // if (handleState) {
    //   //手动全选（全选类型）状态下
    //   checkboxSelectState && selectedRowKeys.length > 0 && setIndeterminate(!selectAllStatus);
    //   setCheckboxSelectState(selectAllStatus);
    // } else {
    //   //非全选类型时取消全选按钮的状态
    //   setIndeterminate(false);
    //   setCheckboxSelectState(false);
    // }
    var selectAllStatus = tableDataTotal === selectedRowKeys.length;
    // setCheckboxSelectState(selectAllStatus && selectedRowKeys.length > 0)
    if (selectAllStatus && selectedRowKeys.length > 0) {
      setCheckboxSelectState(true);
      setIndeterminate(false);
    } else if (selectedRowKeys.length > 0) {
      setCheckboxSelectState(false);
      setIndeterminate(true);
    } else {
      setCheckboxSelectState(false);
      setIndeterminate(false);
    }
  }, [selectedRowKeys]);
  //全选
  var selectAllNode = /*#__PURE__*/React.createElement(React.Fragment, null, selectType === 'checkbox' && /*#__PURE__*/React.createElement("div", {
    className: "drawer-table-select-all"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    indeterminate: indeterminate,
    onChange: checkAllChange,
    checked: checkboxSelectState
  }, "\u5168\u9009"), selectedRowKeys.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\uFF0C\u5DF2\u9009:", /*#__PURE__*/React.createElement("span", {
    onClick: openSelectedComponent,
    style: {
      color: '#1890ff',
      cursor: 'pointer',
      paddingLeft: 10
    }
  }, selectedRowKeys.length)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10
    }
  }, checkedAllText))));
  //抽屉脚
  var footer = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    className: "cancel",
    style: {
      background: '#F6F6F6',
      borderColor: '#F6F6F6',
      boxSizing: 'border-box'
    },
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      color: '#fff'
    },
    // onClick={() => onSubmit((searchType === '2' && selectedRowKeys) || [], searchType)}
    onClick: function onClick() {
      return onSubmit(selectedRowKeys || [], selectedRows || [], searchType);
    }
  }, "\u786E\u5B9A"));
  var MainComponent = useMemo(function () {
    return /*#__PURE__*/React.createElement(Main, _objectSpread(_objectSpread({
      key: "init",
      type: "init"
    }, props), {}, {
      footer: footer,
      selectAllNode: selectAllNode,
      drawerChildren: props.drawerChildren,
      ref: ref
    }), tableNode);
  }, [props, checkboxSelectState, indeterminate, selectedRows]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, MainComponent);
}
export default /*#__PURE__*/React.forwardRef(InitSelect);