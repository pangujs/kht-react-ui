import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ConfigProvider, Modal, Select, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ProTable } from '@ant-design/pro-components';
import { useTableCommon } from '../../../hooks/useTableCommon';
import "./index.css";
import KhtMobileText from '../../table-render/mobile-text';
import { houseTypeList, identityMap } from '../../../utils/dictionaries';
export default function ResidentModalTable(props) {
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
      houseType: '',
      type: '',
      bindStatus: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    params = _useState4[0],
    setParmas = _useState4[1];
  var tableCache = useRef([]);
  var columns = [{
    title: '姓名',
    dataIndex: 'name',
    width: 120,
    ellipsis: true
  }, {
    title: '身份',
    dataIndex: 'type',
    width: 120,
    ellipsis: true,
    render: function render(_, record) {
      return identityMap[record.type];
    }
  }, {
    title: '住户手机号',
    dataIndex: 'telephone',
    width: 150,
    ellipsis: true,
    render: function render(_, record) {
      return /*#__PURE__*/React.createElement(KhtMobileText, {
        value: record.telephone || []
      });
    }
  }, {
    title: '绑定资产',
    dataIndex: 'fullName',
    align: 'center',
    ellipsis: true
  }, {
    title: '住户状态',
    dataIndex: 'bindStatus',
    width: 120,
    ellipsis: true,
    render: function render(_, record) {
      if (record.bindStatus == 1) {
        return /*#__PURE__*/React.createElement("span", null, "\u5DF2\u7ED1\u5B9A");
      }
      if (record.bindStatus == 2) {
        return /*#__PURE__*/React.createElement("span", {
          style: {
            color: '#fe9400'
          }
        }, "\u5DF2\u89E3\u7ED1");
      }
    }
  }];
  var HeaderTitle = function HeaderTitle() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18
      }
    }, ' ', props.currentTableItem.name, ' ', /*#__PURE__*/React.createElement("span", null, "(", props.currentTableItem.residentHouseInfoReqDtoList.length, ")"), ' ');
  };
  var TableHeaderTitle = function TableHeaderTitle() {
    return /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Select, {
      value: params.houseType,
      bordered: false,
      style: {
        width: 100
      },
      className: "input-sty input-active",
      onChange: function onChange(value) {
        return setParmas(_objectSpread(_objectSpread({}, params), {}, {
          houseType: value
        }));
      },
      options: houseTypeList
    }), /*#__PURE__*/React.createElement(Select, {
      value: params.type,
      bordered: false,
      style: {
        width: 100
      },
      className: "input-sty input-active",
      onChange: function onChange(value) {
        return setParmas(_objectSpread(_objectSpread({}, params), {}, {
          type: value
        }));
      },
      options: [{
        value: '',
        label: '全部'
      }, {
        value: 'proprietor',
        label: '业主'
      }, {
        value: 'family',
        label: '家属'
      }, {
        value: 'tenant',
        label: '住户'
      }]
    }), /*#__PURE__*/React.createElement(Select, {
      value: params.bindStatus,
      bordered: false,
      style: {
        width: 100
      },
      className: "input-sty input-active",
      onChange: function onChange(value) {
        return setParmas(_objectSpread(_objectSpread({}, params), {}, {
          bindStatus: value
        }));
      },
      options: [{
        value: '',
        label: '全部'
      }, {
        value: '1',
        label: '已绑定'
      }, {
        value: '2',
        label: '已解绑'
      }]
    }));
  };
  useEffect(function () {
    if (props.currentTableItem) {
      var _props$currentTableIt;
      var formmatTableData = (_props$currentTableIt = props.currentTableItem.residentHouseInfoReqDtoList) === null || _props$currentTableIt === void 0 ? void 0 : _props$currentTableIt.map(function (item, index) {
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
      if (item.bindStatus.toString().includes(params.bindStatus) && item.type.includes(params.type) && item.houseType.includes(params.houseType)) {
        return true;
      }
    });
    setTableData(searchTable);
  }, [params]);
  return /*#__PURE__*/React.createElement(Modal, _objectSpread(_objectSpread({}, props.modalProps), {}, {
    className: "custom-modal-sty",
    maskClosable: ((_props$modalProps = props.modalProps) === null || _props$modalProps === void 0 ? void 0 : _props$modalProps.maskClosable) || false,
    title: '绑定住户',
    width: ((_props$modalProps2 = props.modalProps) === null || _props$modalProps2 === void 0 ? void 0 : _props$modalProps2.width) || '60%',
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