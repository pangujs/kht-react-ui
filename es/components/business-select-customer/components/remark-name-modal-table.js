import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ConfigProvider, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ProTable } from '@ant-design/pro-components';
import { useTableCommon } from '../../../hooks/useTableCommon';
import "./index.css";
export default function RemarkNameModalTable(props) {
  var _props$modalProps, _props$modalProps2;
  var _useTableCommon = useTableCommon({
      isUIResponse: true,
      scrollYLimit: 11,
      rowKey: 'id'
    }),
    baseProps = _useTableCommon.baseProps;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tableData = _useState2[0],
    setTableData = _useState2[1];
  var columns = [{
    title: '客户',
    dataIndex: 'remark',
    ellipsis: true
  }, {
    title: '备注名',
    dataIndex: 'employeeName',
    ellipsis: true
  }];
  var HeaderTitle = function HeaderTitle() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18
      }
    }, ' ', props.currentTableItem.name, ' ', /*#__PURE__*/React.createElement("span", null, "(", props.currentTableItem.customerFollowInfoResDtoList.length, ")"), ' ');
  };
  useEffect(function () {
    if (props.currentTableItem) {
      var _props$currentTableIt;
      setTableData((_props$currentTableIt = props.currentTableItem.customerFollowInfoResDtoList) === null || _props$currentTableIt === void 0 ? void 0 : _props$currentTableIt.map(function (item, index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          id: index.toString()
        });
      }));
    }
  }, [props.currentTableItem]);
  return /*#__PURE__*/React.createElement(Modal, _objectSpread(_objectSpread({}, props.modalProps), {}, {
    className: "custom-modal-sty",
    maskClosable: ((_props$modalProps = props.modalProps) === null || _props$modalProps === void 0 ? void 0 : _props$modalProps.maskClosable) || false,
    title: '客户备注名',
    width: ((_props$modalProps2 = props.modalProps) === null || _props$modalProps2 === void 0 ? void 0 : _props$modalProps2.width) || '40%',
    getContainer: document.getElementById('root') || document.body,
    footer: false,
    onCancel: props.cancel,
    zIndex: 1001
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
    },
    options: false
  }))));
}