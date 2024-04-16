import { Button, Tooltip, Tabs } from 'antd';
import React from 'react';
import KhtDrawerSearchProTable from '../../index';
import { rechargeStatus, houseOptions } from '../constants';
var FormItem = KhtDrawerSearchProTable.FormItem,
  SelectForm = KhtDrawerSearchProTable.SelectForm,
  InputForm = KhtDrawerSearchProTable.InputForm;
export var TitleGround = function TitleGround(props) {
  var companyName = props.companyName,
    typeName = props.typeName,
    tab = props.tab;
  var items = [{
    key: '1',
    label: 'Tab 1',
    children: null
  }, {
    key: '2',
    label: 'Tab 2',
    children: null
  }, {
    key: '3',
    label: 'Tab 3',
    children: null
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, tab && /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveKey: "1",
    items: items,
    style: {
      marginTop: -15
    },
    onChange: function onChange(data) {
      console.log('%c Line:41 🍩 data', 'color:#4fff4B', data);
    }
  }), companyName && !tab && /*#__PURE__*/React.createElement("span", null, "\u4F01\u4E1A\uFF1A", companyName, "\uFF0C \u670D\u52A1\uFF1A", typeName));
};
export default function Search(props) {
  var tableLayoutContainerRef = props.tableLayoutContainerRef,
    _props$type = props.type,
    type = _props$type === void 0 ? 'init' : _props$type,
    typeVal = props.typeVal,
    typeList = props.typeList;
  return /*#__PURE__*/React.createElement(React.Fragment, null, ['prediction-tag'].includes(typeVal) && /*#__PURE__*/React.createElement(FormItem, {
    name: "openTypeId",
    initialValue: ''
  }, /*#__PURE__*/React.createElement(SelectForm, {
    allowClear: true,
    options: houseOptions,
    onChange: function onChange(data) {
      console.log('%c Line:161 🌶 data', 'color:#4fff4B', data);
      if (type === 'init') {
        var _tableLayoutContainer;
        (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setInitTableFieldsValue({
          openTypeId: data
        });
      }
    }
  })), ['event-control', 'event-control-estate', 'chatting-records'].includes(typeVal) && /*#__PURE__*/React.createElement(FormItem, {
    name: "openTypeId",
    initialValue: ''
  }, /*#__PURE__*/React.createElement(SelectForm, {
    allowClear: true,
    options: typeList,
    onChange: function onChange(data) {
      console.log('%c Line:161 🌶 data', 'color:#4fff4B', data);
      if (type === 'init') {
        var _tableLayoutContainer2;
        (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setInitTableFieldsValue({
          openTypeId: data
        });
      }
    }
  })), type === 'input' ? /*#__PURE__*/React.createElement(FormItem, {
    name: "input11",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(InputForm, {
    style: {
      width: '100%'
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormItem, {
    name: "status"
  }, /*#__PURE__*/React.createElement(SelectForm, {
    options: rechargeStatus,
    onChange: function onChange(data) {
      console.log('%c Line:161 🌶 data', 'color:#4fff4B', data);
      if (type === 'init') {
        var _tableLayoutContainer3;
        (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.setInitTableFieldsValue({
          status: data
        });
      }
    }
  })), /*#__PURE__*/React.createElement(FormItem, {
    name: "status"
  }, /*#__PURE__*/React.createElement(SelectForm, {
    options: rechargeStatus,
    onChange: function onChange(data) {
      console.log('%c Line:161 🌶 data', 'color:#4fff4B', data);
      if (type === 'init') {
        var _tableLayoutContainer4;
        (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.setInitTableFieldsValue({
          status: data
        });
      }
    }
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    placement: "topLeft",
    title: 'tableLayoutContainerRef.current?.setInitSelectedRowKeys([]);'
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      var _tableLayoutContainer5;
      (_tableLayoutContainer5 = tableLayoutContainerRef.current) === null || _tableLayoutContainer5 === void 0 ? void 0 : _tableLayoutContainer5.setInitSelectedRowKeys([]);
    }
  }, "\u624B\u52A8\u6E05\u9664\u5DF2\u9009")));
}