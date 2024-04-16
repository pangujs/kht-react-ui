import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { useMemo } from 'react';
import { Cascader } from 'antd';
import { useFormItem } from './form-item';
// 抽屉表单级联组件
export function CascaderFormComponent(props) {
  var _onChange = props.onChange,
    options = props.options,
    value = props.value;
  var _useFormItem = useFormItem(),
    change = _useFormItem.change;
  return useMemo(function () {
    return /*#__PURE__*/React.createElement(Cascader, _objectSpread(_objectSpread({
      placeholder: '请选择'
    }, props), {}, {
      onChange: function onChange(data) {
        _onChange(data);
        change(data);
      }
    }));
  }, [options, value]);
}