import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import "./index.css";
import React, { useRef, useState, useImperativeHandle, useEffect } from 'react';
import InitSelect from './components/init-select';
import Selected from './components/selected';
import ReadOnly from './components/read-only';
//抽屉表格抽屉布局组件
function KhtDrawerTableLayout(props, ref) {
  var _props$selectedDrawer;
  var handleType = props.handleType,
    _props$selectedTableO = props.selectedTableOptions,
    selectedTableOptions = _props$selectedTableO === void 0 ? {} : _props$selectedTableO,
    _props$closeSelectedC = props.closeSelectedComponent,
    closeSelectedComponent = _props$closeSelectedC === void 0 ? function () {} : _props$closeSelectedC,
    _props$openSelectedCo = props.openSelectedComponent,
    openSelectedComponent = _props$openSelectedCo === void 0 ? function () {} : _props$openSelectedCo;
  var searchFormOptions = selectedTableOptions.searchFormOptions;
  //-----------------中间处理已选组件或查看组件的逻辑---------------------
  var initRef = useRef(null);
  var SelectedRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showState = _useState2[0],
    setShowState = _useState2[1];
  //手动关闭已选组件
  var closeSelected = function closeSelected() {
    closeSelectedComponent();
    setShowState(false);
  };
  //手动打开已选组件
  var openSelected = function openSelected() {
    setShowState(true);
    openSelectedComponent();
  };
  useEffect(function () {
    //如果选择组件内抽屉props加了open属性就取传进来的
    handleType !== 'readOnly' && props.selectedDrawerProps.hasOwnProperty('open') && setShowState(props.selectedDrawerProps.open);
  }, [(_props$selectedDrawer = props.selectedDrawerProps) === null || _props$selectedDrawer === void 0 ? void 0 : _props$selectedDrawer.open]);
  //外部调用方法
  useImperativeHandle(ref, function () {
    //手动设置表单字段值
    return {
      setTableFormFieldsValue: function setTableFormFieldsValue(data) {
        var _initRef$current;
        (_initRef$current = initRef.current) === null || _initRef$current === void 0 ? void 0 : _initRef$current.setTableFormFieldsValue(data);
      },
      getTableFormFieldsValue: function getTableFormFieldsValue() {
        var _initRef$current2;
        return (_initRef$current2 = initRef.current) === null || _initRef$current2 === void 0 ? void 0 : _initRef$current2.getTableFormFieldsValue();
      },
      setSelectedTableFormFieldsValue: function setSelectedTableFormFieldsValue(data) {
        var _SelectedRef$current;
        (_SelectedRef$current = SelectedRef.current) === null || _SelectedRef$current === void 0 ? void 0 : _SelectedRef$current.setSelectedTableFormFieldsValue(data);
      },
      getSelectedTableFormFieldsValue: function getSelectedTableFormFieldsValue() {
        var _SelectedRef$current2;
        return (_SelectedRef$current2 = SelectedRef.current) === null || _SelectedRef$current2 === void 0 ? void 0 : _SelectedRef$current2.getSelectedTableFormFieldsValue();
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, handleType === 'select' && /*#__PURE__*/React.createElement(InitSelect, _objectSpread(_objectSpread({}, props), {}, {
    ref: initRef,
    key: 'initRef',
    openSelectedComponent: openSelected,
    drawerChildren: /*#__PURE__*/React.createElement(Selected, _objectSpread(_objectSpread({
      key: 'SelectedRef'
    }, props), {}, {
      searchFormOptions: searchFormOptions,
      selectedDrawerProps: _objectSpread(_objectSpread({}, props.selectedDrawerProps), {}, {
        open: showState,
        onClose: closeSelected
      }),
      ref: SelectedRef
    }))
  })), handleType === 'readOnly' && /*#__PURE__*/React.createElement(ReadOnly, _objectSpread(_objectSpread({}, props), {}, {
    ref: initRef,
    key: 'initRef'
  })));
}
export default /*#__PURE__*/React.forwardRef(KhtDrawerTableLayout);
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var TableOptions = function TableOptions(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var SearchFormOptions = function SearchFormOptions(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var searchOptions = function searchOptions(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var DrawerTableLayoutRef = function DrawerTableLayoutRef(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};