import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Select } from 'antd';
import { useModalVisible } from '../../../hooks';
import React, { useState } from 'react';
import KhtBusinessAssetsDrawerTree from '../../business-assets-drawer-tree';
export default function InputAssetsDrawerTree(props) {
  var _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? '请选择' : _props$placeholder,
    _props$canSelect = props.canSelect,
    canSelect = _props$canSelect === void 0 ? '' : _props$canSelect,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? true : _props$multiple,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$loaderLevel = props.loaderLevel,
    loaderLevel = _props$loaderLevel === void 0 ? undefined : _props$loaderLevel,
    rootNode = props.rootNode,
    _props$defalutSelecte = props.defalutSelectedData,
    defalutSelectedData = _props$defalutSelecte === void 0 ? [] : _props$defalutSelecte,
    _props$otherQueryPara = props.otherQueryParams,
    otherQueryParams = _props$otherQueryPara === void 0 ? {} : _props$otherQueryPara,
    _props$title = props.title,
    title = _props$title === void 0 ? '选择资产' : _props$title,
    searchPlaceholder = props.searchPlaceholder;
  var _useModalVisible = useModalVisible(),
    visible = _useModalVisible.visible,
    changeStatus = _useModalVisible.changeStatus;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    defaultCheckedItems = _useState2[0],
    setDefaultCheckedItems = _useState2[1];
  var ok = function ok(selectNode) {
    console.log('已选取的数据', selectNode);
    setDefaultCheckedItems(selectNode);
    props.onChange && props.onChange(selectNode);
  };
  var cancel = function cancel() {
    changeStatus(!visible);
  };
  var showModalTree = function showModalTree() {
    if (defalutSelectedData.length) setDefaultCheckedItems(defalutSelectedData);
    changeStatus();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
    value: props.value,
    placeholder: placeholder,
    disabled: disabled,
    onClick: showModalTree,
    open: false
  }), /*#__PURE__*/React.createElement(KhtBusinessAssetsDrawerTree, {
    title: title,
    open: visible,
    cancel: cancel,
    ok: ok,
    destroyOnClose: false,
    defaultCheckedItems: defaultCheckedItems,
    showTooltip: false,
    customRootNode: rootNode,
    multiple: multiple,
    canSelect: canSelect,
    loaderLevel: loaderLevel,
    paramsType: otherQueryParams,
    inputProps: {
      placeholder: searchPlaceholder
    }
  }));
}