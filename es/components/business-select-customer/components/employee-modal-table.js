import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ConfigProvider, Modal, Select, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ProTable } from '@ant-design/pro-components';
import { useTableCommon } from '../../../hooks/useTableCommon';
import "./index.css";
import { customerSourceMap } from '../../../utils/dictionaries';
export default function EmployeeModalTable(props) {
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
  var _useState3 = useState({
      addWay: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    params = _useState4[0],
    setParmas = _useState4[1];
  var tableCache = useRef([]);
  var columns = [{
    title: '添加人',
    dataIndex: 'employeeName',
    ellipsis: true
  }, {
    title: '客户来源',
    dataIndex: 'addWay',
    ellipsis: true,
    render: function render(_, record) {
      return customerSourceMap[record.addWay] || '-';
    }
  }, {
    title: '客户状态',
    dataIndex: 'address',
    ellipsis: true,
    render: function render() {
      return '正常';
    }
  }, {
    title: '添加时间',
    dataIndex: 'addDate',
    ellipsis: true
  }];
  var HeaderTitle = function HeaderTitle() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18
      }
    }, ' ', props.currentTableItem.name, ' ', /*#__PURE__*/React.createElement("span", null, "(", props.currentTableItem.customerFollowInfoResDtoList.length, ")"), ' ');
  };
  var TableHeaderTitle = function TableHeaderTitle() {
    return /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Select, {
      value: params.addWay,
      bordered: false,
      style: {
        width: 100
      },
      className: "input-sty input-active",
      onChange: function onChange(value) {
        return setParmas(_objectSpread(_objectSpread({}, params), {}, {
          addWay: value
        }));
      },
      options: [{
        value: '',
        label: '全部'
      }, {
        value: '1',
        label: '扫描二维码'
      }, {
        value: '2',
        label: '管理员/负责人分配'
      }, {
        value: '3',
        label: '名片分享'
      }, {
        value: '4',
        label: '群聊'
      }, {
        value: '6',
        label: '微信联系人'
      }]
    }));
  };
  useEffect(function () {
    if (props.currentTableItem) {
      var _props$currentTableIt;
      var formmatTableData = (_props$currentTableIt = props.currentTableItem.customerFollowInfoResDtoList) === null || _props$currentTableIt === void 0 ? void 0 : _props$currentTableIt.map(function (item, index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          id: index.toString()
        });
      });
      setTableData(formmatTableData);
      tableCache.current = formmatTableData;
    }
  }, [props.currentTableItem]);
  useEffect(function () {
    var searchTable = tableCache.current.filter(function (item) {
      if (item.addWay.toString().includes(params.addWay)) {
        return true;
      }
    });
    setTableData(searchTable);
  }, [params]);
  return /*#__PURE__*/React.createElement(Modal, _objectSpread(_objectSpread({}, props.modalProps), {}, {
    className: "custom-modal-sty",
    maskClosable: ((_props$modalProps = props.modalProps) === null || _props$modalProps === void 0 ? void 0 : _props$modalProps.maskClosable) || false,
    title: '客户添加人',
    width: ((_props$modalProps2 = props.modalProps) === null || _props$modalProps2 === void 0 ? void 0 : _props$modalProps2.width) || '40%',
    getContainer: document.getElementById('root') || document.body,
    footer: false,
    onCancel: props.cancel
  }), /*#__PURE__*/React.createElement(HeaderTitle, null), /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(ProTable, _objectSpread(_objectSpread({}, baseProps), {}, {
    columns: columns,
    tableClassName: "reset-table-sty-modal",
    dataSource: tableData,
    size: "small",
    search: false,
    headerTitle: /*#__PURE__*/React.createElement(TableHeaderTitle, null),
    pagination: {
      simple: true,
      defaultPageSize: 10,
      hideOnSinglePage: true,
      showTotal: false
    },
    options: false
  }))));
}