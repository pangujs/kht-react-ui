import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { createContext, useContext, useMemo } from 'react';
import { Form } from 'antd';
import { useDrawerSearchProTableMain } from './main';
export var FormItemContext = /*#__PURE__*/createContext({});
export var useFormItem = function useFormItem() {
  return useContext(FormItemContext);
};
// 抽屉表单组件
export function FormItemComponent(props) {
  var name = props.name,
    initialValue = props.initialValue,
    style = props.style;
  var _useDrawerSearchProTa = useDrawerSearchProTableMain(),
    onChange = _useDrawerSearchProTa.onChange;
  //赋值变化回传给父组件DrawerSearchProTable
  var change = function change(data) {
    onChange(data);
  };
  return useMemo(function () {
    return /*#__PURE__*/React.createElement(FormItemContext.Provider, {
      value: {
        change: change
      }
    }, /*#__PURE__*/React.createElement(Form.Item, _objectSpread(_objectSpread({}, props), {}, {
      name: name,
      style: _objectSpread({
        marginRight: 10
      }, style)
    }), props.children));
  }, [name, initialValue, props.children, onChange]);
}