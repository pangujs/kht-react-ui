import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import { Select } from 'antd';
import { KhtDrawerSearchProTable } from '../../../../../index';
import { customerSourceMap } from '../../../type';
var FormItem = KhtDrawerSearchProTable.FormItem;
export default function Search(props) {
  var tableLayoutContainerRef = props.tableLayoutContainerRef;
  var options = Object.entries(customerSourceMap).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      value = _ref2[0],
      label = _ref2[1];
    return {
      value: value,
      label: label
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem, {
    name: "addWay"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u6DFB\u52A0\u65B9\u5F0F",
    allowClear: true,
    options: options,
    onChange: function onChange(value) {
      var _tableLayoutContainer;
      tableLayoutContainerRef === null || tableLayoutContainerRef === void 0 ? void 0 : (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setInitTableFieldsValue({
        addWay: value
      });
    }
  })));
}