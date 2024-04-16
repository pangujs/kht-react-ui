import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { useMemo } from 'react';
import { Input } from 'antd';
import KhtIcons from '../../kht-icons';
import { useFormItem } from './form-item';
// import { throttle } from '../../../utils';
// import { debounce } from 'lodash';
// 抽屉input输入组件
export function InputForm(props) {
  var _onChange = props.onChange,
    placeholder = props.placeholder,
    style = props.style;
  var _useFormItem = useFormItem(),
    change = _useFormItem.change;
  return useMemo(function () {
    return /*#__PURE__*/React.createElement(Input, {
      onChange: function onChange(data) {
        var _ref = data || {},
          target = _ref.target;
        var _ref2 = target || {},
          value = _ref2.value;
        _onChange(value);
        change && change(data);
      },
      style: _objectSpread({
        borderRadius: 4,
        paddingLeft: 6,
        width: 158
      }, style),
      allowClear: true,
      placeholder: placeholder,
      prefix: /*#__PURE__*/React.createElement(KhtIcons, {
        type: "icon-sousuo",
        style: {
          color: '#bbb'
        }
      })
    });
  }, [_onChange]);
}