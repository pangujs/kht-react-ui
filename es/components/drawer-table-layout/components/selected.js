import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { useMemo } from 'react';
import { Dropdown, Button } from 'antd';
import Main from './main';
//初始选择组件
function Selected(props, ref) {
  var _props$onRemoveSelect = props.onRemoveSelected,
    onRemoveSelected = _props$onRemoveSelect === void 0 ? function () {} : _props$onRemoveSelect,
    selectedTableOptions = props.selectedTableOptions;
  var selectedRowKeys = selectedTableOptions.selectedRowKeys,
    tableNode = selectedTableOptions.tableNode;
  //移除
  var deleteOperate = function deleteOperate(type) {
    onRemoveSelected(type, type === '2' ? selectedRowKeys : []);
  };
  //删除
  var buttonItems = [{
    key: '2',
    label: /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return deleteOperate('2');
      },
      style: {
        textAlign: 'center',
        color: '#666'
      }
    }, "\u79FB\u9664\u9009\u4E2D")
  }, {
    key: '1',
    label: /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return deleteOperate('1');
      },
      style: {
        textAlign: 'center',
        color: '#666'
      }
    }, "\u79FB\u9664\u5168\u90E8")
  }];
  //抽屉脚
  var footer = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dropdown, {
    overlayClassName: "delete-select-ground",
    menu: {
      items: buttonItems
    },
    placement: "top"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "cancel",
    style: {
      background: '#F6F6F6',
      borderColor: '#F6F6F6'
    }
  }, "\u79FB\u9664")));
  var MainComponent = useMemo(function () {
    return /*#__PURE__*/React.createElement(Main, _objectSpread(_objectSpread({
      key: "selected",
      type: "selected"
    }, props), {}, {
      footer: footer,
      selectedDrawerProps: props.selectedDrawerProps || props.drawerProps,
      ref: ref
    }), tableNode);
  }, [props, selectedRowKeys]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, MainComponent);
}
export default /*#__PURE__*/React.forwardRef(Selected);