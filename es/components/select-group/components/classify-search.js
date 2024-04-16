import React from 'react';
import { KhtDrawerSearchProTable } from '../../../index';
var FormItem = KhtDrawerSearchProTable.FormItem,
  InputForm = KhtDrawerSearchProTable.InputForm;
export default function Search(props) {
  var tableLayoutContainerRef = props.tableLayoutContainerRef,
    _props$type = props.type,
    type = _props$type === void 0 ? 'init' : _props$type;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem, {
    name: "searchName",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(InputForm, {
    placeholder: "\u641C\u7D22",
    style: {
      width: '100%'
    },
    onChange: function onChange(data) {
      var _tableLayoutContainer;
      (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setInitTableFieldsValue({
        searchName: data
      });
    }
  })));
}