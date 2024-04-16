import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { useMemo } from 'react';
import { Select } from 'antd';
import { useFormItem } from './form-item';
var Option = Select.Option;
// 抽屉表单下拉组件 继承select属性，内置option
export function SelectFormComponent(props) {
  var _onChange = props.onChange,
    options = props.options,
    value = props.value;
  var _useFormItem = useFormItem(),
    change = _useFormItem.change;
  return useMemo(function () {
    return /*#__PURE__*/React.createElement(Select, _objectSpread(_objectSpread({
      placeholder: '请选择'
    }, props), {}, {
      onChange: function onChange(data) {
        _onChange(data);
        change && change(data);
      }
    }), (options || []).map(function (c, index) {
      return /*#__PURE__*/React.createElement(Option, {
        key: c.value + index,
        value: c.value
      }, c.label);
    }));
  }, [options, value, change]);
}