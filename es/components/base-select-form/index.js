import React, { useMemo } from 'react';
import { Select, TreeSelect } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import "./index.css";
var Option = Select.Option;
// 基础下拉组件
export default function BaseSelectFormComponent(props) {
  var _onChange = props.onChange,
    options = props.options,
    value = props.value,
    _props$allowClear = props.allowClear,
    allowClear = _props$allowClear === void 0 ? false : _props$allowClear,
    _props$isMultiple = props.isMultiple,
    isMultiple = _props$isMultiple === void 0 ? false : _props$isMultiple,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? '请选择' : _props$placeholder,
    _props$showSearch = props.showSearch,
    showSearch = _props$showSearch === void 0 ? false : _props$showSearch,
    _props$maxTagCount = props.maxTagCount,
    maxTagCount = _props$maxTagCount === void 0 ? 2 : _props$maxTagCount,
    _props$listHeight = props.listHeight,
    listHeight = _props$listHeight === void 0 ? 175 : _props$listHeight,
    _props$fieldNames = props.fieldNames,
    fieldNames = _props$fieldNames === void 0 ? {
      label: 'label',
      value: 'value'
    } : _props$fieldNames,
    _props$showArrow = props.showArrow,
    showArrow = _props$showArrow === void 0 ? false : _props$showArrow,
    onOpenChange = props.onOpenChange;
  return useMemo(function () {
    return /*#__PURE__*/React.createElement(React.Fragment, null, isMultiple ? /*#__PURE__*/React.createElement(TreeSelect, {
      allowClear: allowClear,
      popupClassName: "tree-select-wrapper",
      showSearch: showSearch,
      placeholder: placeholder,
      treeData: options,
      value: value,
      listHeight: listHeight,
      treeCheckable: isMultiple,
      showCheckedStrategy: "SHOW_PARENT",
      multiple: isMultiple,
      maxTagCount: maxTagCount,
      showArrow: showArrow,
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentNode;
      },
      onChange: function onChange(data) {
        _onChange && _onChange(data);
      },
      onDropdownVisibleChange: function onDropdownVisibleChange(open) {
        onOpenChange && onOpenChange(open);
      }
    }) : /*#__PURE__*/React.createElement(Select, {
      allowClear: allowClear,
      popupClassName: "single-select-wrapper",
      placeholder: placeholder,
      value: value,
      optionLabelProp: "label",
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentNode;
      },
      onChange: function onChange(data) {
        _onChange && _onChange(data);
      }
    }, (options || []).map(function (item) {
      var optionKey = item[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value];
      var optionValue = item[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value];
      var optionLabel = item[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.label];
      return /*#__PURE__*/React.createElement(Option, {
        key: optionKey,
        value: optionValue,
        label: optionLabel
      }, /*#__PURE__*/React.createElement("div", {
        className: "option-item"
      }, /*#__PURE__*/React.createElement("span", null, optionLabel), value === optionValue ? /*#__PURE__*/React.createElement(CheckOutlined, null) : null));
    })));
  }, [options, value, isMultiple]);
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};