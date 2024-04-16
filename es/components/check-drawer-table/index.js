import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { KhtDrawerSearchProTable } from '../../index';
var FormItem = KhtDrawerSearchProTable.FormItem;
import { Space, Select } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import "./index.css";
var CheckDrawerTableType = function CheckDrawerTableType(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 560 : _props$width,
    title = props.title,
    onClose = props.onClose,
    open = props.open,
    _props$historyStateFo = props.historyStateFooter,
    historyStateFooter = _props$historyStateFo === void 0 ? false : _props$historyStateFo,
    _props$drawerTableLay = props.drawerTableLayoutTitle,
    drawerTableLayoutTitle = _props$drawerTableLay === void 0 ? null : _props$drawerTableLay,
    historyTitle = props.historyTitle,
    historyDrawerTableLayoutTitle = props.historyDrawerTableLayoutTitle,
    footerValue = props.footerValue,
    isShowInput = props.isShowInput,
    initTotal = props.initTotal,
    selectedTotal = props.selectedTotal,
    initColumns = props.initColumns,
    initRequestTable = props.initRequestTable,
    selectedColumns = props.selectedColumns,
    selectedRequestTable = props.selectedRequestTable,
    initOptions = props.initOptions,
    selectOptions = props.selectOptions,
    initPlaceholder = props.initPlaceholder,
    selectedPlaceholder = props.selectedPlaceholder,
    drawerTableLayoutRef1 = props.drawerTableLayoutRef1,
    drawerTableLayoutRef2 = props.drawerTableLayoutRef2;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    historyStateOpen = _useState2[0],
    setHistoryStateOpen = _useState2[1];
  var onHistoryClose = function onHistoryClose() {
    setHistoryStateOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    title: title,
    ref: drawerTableLayoutRef1,
    open: open,
    onClose: onClose,
    width: width,
    selectType: "readOnly",
    searchInputState: true,
    total: initTotal,
    manualRequest: false,
    columns: initColumns,
    requestTable: initRequestTable,
    titleGround: drawerTableLayoutTitle,
    searchForm: isShowInput ? /*#__PURE__*/React.createElement(FormItem, {
      name: "type"
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: initPlaceholder,
      allowClear: true,
      style: {
        width: 108
      },
      onChange: function onChange(key) {
        var _drawerTableLayoutRef;
        (_drawerTableLayoutRef = drawerTableLayoutRef1.current) === null || _drawerTableLayoutRef === void 0 ? void 0 : _drawerTableLayoutRef.setInitTableFieldsValue({
          type: !key ? null : key
        });
      },
      options: initOptions
    })) : false,
    onSearch: function onSearch(data) {
      var _drawerTableLayoutRef2, _drawerTableLayoutRef3;
      props.onSearch1 && props.onSearch1(data);
      (_drawerTableLayoutRef2 = drawerTableLayoutRef1.current) === null || _drawerTableLayoutRef2 === void 0 ? void 0 : _drawerTableLayoutRef2.setInitTableCurrentPage(1); //重置分页
      (_drawerTableLayoutRef3 = drawerTableLayoutRef1.current) === null || _drawerTableLayoutRef3 === void 0 ? void 0 : _drawerTableLayoutRef3.initTableReload();
    },
    footer: historyStateFooter ? /*#__PURE__*/React.createElement(Space, {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(ClockCircleOutlined, {
      style: {
        color: '#1890ff'
      }
    }), /*#__PURE__*/React.createElement("a", {
      type: "primary",
      onClick: function onClick() {
        return setHistoryStateOpen(true);
      }
    }, footerValue)) : false
  }), /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    title: historyTitle,
    ref: drawerTableLayoutRef2,
    open: historyStateOpen,
    onClose: onHistoryClose,
    width: width,
    selectType: "readOnly",
    manualRequest: false,
    searchInputState: true,
    total: selectedTotal,
    columns: selectedColumns,
    requestTable: selectedRequestTable,
    titleGround: historyDrawerTableLayoutTitle,
    searchForm: isShowInput ? /*#__PURE__*/React.createElement(FormItem, {
      name: "type"
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: selectedPlaceholder,
      allowClear: true,
      style: {
        width: 108
      },
      onChange: function onChange(key) {
        var _drawerTableLayoutRef4;
        (_drawerTableLayoutRef4 = drawerTableLayoutRef2.current) === null || _drawerTableLayoutRef4 === void 0 ? void 0 : _drawerTableLayoutRef4.setInitTableFieldsValue({
          type: key === '[]' ? null : key
        });
      },
      options: selectOptions
    })) : false,
    onSearch: function onSearch(data) {
      var _drawerTableLayoutRef5, _drawerTableLayoutRef6;
      props.onSearch2 && props.onSearch2(data);
      (_drawerTableLayoutRef5 = drawerTableLayoutRef2.current) === null || _drawerTableLayoutRef5 === void 0 ? void 0 : _drawerTableLayoutRef5.setInitTableCurrentPage(1); //重置分页
      (_drawerTableLayoutRef6 = drawerTableLayoutRef2.current) === null || _drawerTableLayoutRef6 === void 0 ? void 0 : _drawerTableLayoutRef6.initTableReload();
    },
    footer: false
  }));
};
export default CheckDrawerTableType;