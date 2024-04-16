import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ConfigProvider, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ProTable } from '@ant-design/pro-components';
import { useTableCommon } from '../../../hooks/useTableCommon';
import "./index.css";
export default function RemarkNameModalTable(props) {
  var _props$modalProps;
  var _useTableCommon = useTableCommon({
      isUIResponse: true,
      scrollYLimit: 11,
      rowKey: 'id',
      x: undefined
    }),
    baseProps = _useTableCommon.baseProps;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tableData = _useState2[0],
    setTableData = _useState2[1];
  var columns = [{
    title: '标签',
    dataIndex: 'tagName'
  }, {
    title: '标签组',
    dataIndex: 'tagGroupName'
  }, {
    title: '标签分类',
    dataIndex: 'tagCategory',
    render: function render() {
      var _props$currentTableIt, _props$currentTableIt2;
      return (_props$currentTableIt = (_props$currentTableIt2 = props.currentTableItem) === null || _props$currentTableIt2 === void 0 ? void 0 : _props$currentTableIt2.classifyName) !== null && _props$currentTableIt !== void 0 ? _props$currentTableIt : '-';
    }
  }, {
    title: '打标签人',
    dataIndex: 'createAccountName'
  }, {
    title: '打标签时间',
    dataIndex: 'createDate'
  }];
  var HeaderTitle = function HeaderTitle() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18
      }
    }, props.currentTableItem.name, /*#__PURE__*/React.createElement("span", null, "(", props.currentTableItem.tagNameList.length, ")"));
  };
  useEffect(function () {
    if (props.currentTableItem) {
      var _props$currentTableIt3, _props$currentTableIt4;
      console.log(props.currentTableItem);
      setTableData((_props$currentTableIt3 = (_props$currentTableIt4 = props.currentTableItem) === null || _props$currentTableIt4 === void 0 ? void 0 : _props$currentTableIt4.tagNameList) !== null && _props$currentTableIt3 !== void 0 ? _props$currentTableIt3 : []);
    }
  }, [props.currentTableItem]);
  return /*#__PURE__*/React.createElement(Modal, _objectSpread(_objectSpread({}, props.modalProps), {}, {
    className: "custom-modal-sty",
    maskClosable: ((_props$modalProps = props.modalProps) === null || _props$modalProps === void 0 ? void 0 : _props$modalProps.maskClosable) || false,
    title: '标签',
    width: 800,
    getContainer: document.getElementById('root') || document.body,
    footer: false,
    onCancel: props.cancel
  }), /*#__PURE__*/React.createElement(HeaderTitle, null), /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(ProTable, _objectSpread(_objectSpread({}, baseProps), {}, {
    columns: columns,
    dataSource: tableData,
    tableClassName: "reset-table-sty-modal",
    size: "small",
    search: false,
    toolBarRender: false,
    pagination: {
      simple: true,
      defaultPageSize: 10,
      hideOnSinglePage: true,
      showTotal: false
    }
  }))));
}