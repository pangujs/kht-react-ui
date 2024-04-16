import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { Pagination, ConfigProvider } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import "./index.css";
import { getCustomerDetailById } from '../../api';
import { ClockCircleOutlined } from '@ant-design/icons';
import Drawer from 'antd/es/drawer';
import { KhtbusinessMobileText } from '../../../../index';
import zhCN from 'antd/es/locale/zh_CN';
import { cloneDeep } from 'lodash';
import History from './history';
import { useSetState } from 'ahooks';
export var formatData = function formatData(data) {
  var temp = [];
  var _loop = function _loop(i) {
    var element = data[i];
    if (element.telephoneJson) {
      var telephone = JSON.parse(element.telephoneJson);
      if (telephone && telephone.length > 0) {
        telephone.map(function (item, index) {
          temp.push({
            mobile: item.telephone,
            rowKey: "".concat(i, "-").concat(index),
            employeeName: element.name || element.employeeName,
            addDate: element.addDate
          });
        });
      }
    }
  };
  for (var i = 0; i < data.length; i++) {
    _loop(i);
  }
  return temp;
};
export default function CustomerMobileModal(props) {
  var _props$isModalOpen = props.isModalOpen,
    isModalOpen = _props$isModalOpen === void 0 ? false : _props$isModalOpen,
    _props$id = props.id,
    id = _props$id === void 0 ? '' : _props$id,
    _props$name = props.name,
    name = _props$name === void 0 ? '' : _props$name,
    _props$title = props.title,
    title = _props$title === void 0 ? '客户电话' : _props$title,
    remark = props.remark;
  var _useSetState = useSetState({
      open: false
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  var currentId = useRef('');
  var onCancel = function onCancel() {
    props.onCancel && props.onCancel();
  };
  var columns = [{
    title: '客户电话',
    dataIndex: 'telephone',
    key: 'telephone',
    render: function render(_, record) {
      return /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
        value: record.telephone
      });
    }
  }, {
    title: '添加人',
    dataIndex: 'employeeName',
    key: 'employeeName'
  }, {
    title: '添加时间',
    dataIndex: 'addDate',
    key: 'addDate',
    render: function render(value, records) {
      var _records$addDate, _records$addDate2;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_records$addDate = records.addDate) === null || _records$addDate === void 0 ? void 0 : _records$addDate.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_records$addDate2 = records.addDate) === null || _records$addDate2 === void 0 ? void 0 : _records$addDate2.slice(10, 16)));
    }
  }];
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    dataSource = _useState2[0],
    setDataSource = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    total = _useState6[0],
    setTotal = _useState6[1];
  var _useState7 = useState(1),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPage = _useState8[0],
    setCurrentPage = _useState8[1];
  var _useState9 = useState(20),
    _useState10 = _slicedToArray(_useState9, 2),
    pageSize = _useState10[0],
    setPageSize = _useState10[1];
  var showTotal = function showTotal(total) {
    return "\u5171 ".concat(total, "\u6761");
  };
  var getDataList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$getCustomerDet, data, _data$response, temp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getCustomerDetailById(currentId.current);
          case 2:
            _yield$getCustomerDet = _context.sent;
            data = _yield$getCustomerDet.data;
            if (data.success && data.response) {
              temp = ((_data$response = data.response) === null || _data$response === void 0 ? void 0 : _data$response.customerFollowInfoResDtoList) || [];
              setTotal(temp.length || 0);
              setList(formatData(temp));
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getDataList() {
      return _ref.apply(this, arguments);
    };
  }();
  var showSizeChange = function showSizeChange(current, size) {
    setCurrentPage(1);
    setPageSize(size);
    var dataSource = list.slice(0, size);
    setDataSource(_toConsumableArray(dataSource));
  };
  var paginationChange = function paginationChange(page, pageSize) {
    setCurrentPage(page);
    var dataSource = list.slice((page - 1) * pageSize, page * pageSize);
    setDataSource(_toConsumableArray(dataSource));
  };
  useEffect(function () {
    if (props.tableData) {
      var dataList = props.tableData;
      setDataSource(dataList);
      setTotal(dataList.length || 0);
    }
  }, [isModalOpen, id]);
  useEffect(function () {
    var tempList = cloneDeep(list);
    var dataSource = tempList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    //防止删除当前页所有数据造成bug
    if (tempList.length > 0 && dataSource.length == 0 && currentPage !== 1) {
      dataSource = tempList.slice((currentPage - 2) * pageSize, currentPage * pageSize);
      setCurrentPage(currentPage - 1);
    }
    setDataSource(_toConsumableArray(dataSource));
  }, [list]);
  return /*#__PURE__*/React.createElement(Drawer, {
    title: title,
    width: 560,
    className: "client-phone-modal",
    open: isModalOpen,
    onClose: onCancel,
    footer: null,
    maskClosable: true,
    getContainer: document.getElementById('root') || document.body
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, remark ? "\uFF08".concat(remark, "\uFF09") : ''), /*#__PURE__*/React.createElement("div", {
    className: "table-layout-container"
  }, /*#__PURE__*/React.createElement(ProTable, {
    columns: columns,
    dataSource: dataSource,
    toolBarRender: false,
    tableAlertRender: false,
    rowKey: "rowKey",
    search: false,
    pagination: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 21
    }
  }, total > 20 ? /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(Pagination, {
    size: "small",
    total: total,
    current: currentPage,
    pageSize: pageSize,
    showTotal: showTotal,
    showQuickJumper: false,
    showSizeChanger: true,
    onShowSizeChange: showSizeChange,
    onChange: paginationChange,
    pageSizeOptions: [20, 50, 100],
    defaultPageSize: 20
  })) : total > 0 && total <= 20 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#999'
    }
  }, "\u5171", total, "\u6761")), /*#__PURE__*/React.createElement("div", {
    className: "history"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ClockCircleOutlined, {
    style: {
      color: '#333'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#333',
      fontSize: 14,
      marginLeft: 7
    },
    onClick: function onClick() {
      setState({
        open: true
      });
    }
  }, "\u5386\u53F2\u5BA2\u6237\u7535\u8BDD")))), /*#__PURE__*/React.createElement(History, _objectSpread(_objectSpread({}, props), {}, {
    open: state.open,
    onClose: function onClose() {
      setState({
        open: false
      });
    }
  })));
}