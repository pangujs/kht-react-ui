import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Drawer, Dropdown, Button, Pagination, ConfigProvider, Popover } from 'antd';
import "./index.css";
import { KhtBusinessInstitutionalIconType } from '../business-institutional-assets-tree';
import DrawerProTable from '../drawer-pro-table';
import zhCN from 'antd/es/locale/zh_CN';
import { cloneDeep } from 'lodash';
export default (function (props) {
  var open = props.open,
    onClose = props.onClose,
    checkedList = props.checkedList,
    removeSelectedRowKeys = props.removeSelectedRowKeys;
  var actionRef = useRef();
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    dataSource = _useState2[0],
    setDataSource = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedRowKeys = _useState4[0],
    setSelectedRowKeys = _useState4[1];
  var _useState5 = useState(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = useState(20),
    _useState8 = _slicedToArray(_useState7, 2),
    pageSize = _useState8[0],
    setPageSize = _useState8[1];
  var showTotal = function showTotal(total) {
    return "\u5171 ".concat(total, "\u6761");
  };
  var total = useMemo(function () {
    return checkedList.length;
  }, [checkedList]);
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    list = _useState10[0],
    setList = _useState10[1];
  var columns = [{
    title: '车位',
    dataIndex: 'name',
    ellipsis: true,
    hideInSearch: true,
    render: function render(a, records) {
      return /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, KhtBusinessInstitutionalIconType[records.sourceTableType] || KhtBusinessInstitutionalIconType['house'], /*#__PURE__*/React.createElement(Popover, {
        placement: "bottomLeft",
        content: records.fullName,
        overlayClassName: "selected-car-popover",
        getPopupContainer: function getPopupContainer() {
          return document.querySelector('.selected-car-table');
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: '10px',
          color: '#333'
        }
      }, records.name)));
    }
  }];
  var deleteCheckedItems = function deleteCheckedItems(type) {
    removeSelectedRowKeys(type == 'all' ? [] : selectedRowKeys);
    setSelectedRowKeys([]);
  };
  var items = [{
    key: '1',
    label: /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        deleteCheckedItems('part');
      }
    }, "\u5220\u9664\u9009\u4E2D")
  }, {
    key: '2',
    label: /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        deleteCheckedItems('all');
      }
    }, "\u5220\u9664\u5168\u90E8")
  }];
  var onSelectChange = function onSelectChange(newSelectedRowKeys) {
    setSelectedRowKeys(newSelectedRowKeys);
  };
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
    if (open) {
      var tempList = cloneDeep(checkedList);
      tempList.forEach(function (item) {
        return item.children = null;
      });
      setList(tempList);
      var _dataSource = tempList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      //防止删除当前页所有数据造成bug
      if (tempList.length > 0 && _dataSource.length == 0 && currentPage !== 1) {
        _dataSource = tempList.slice((currentPage - 2) * pageSize, currentPage * pageSize);
        setCurrentPage(currentPage - 1);
      }
      setDataSource(_toConsumableArray(_dataSource));
    } else {
      setDataSource([]);
      setCurrentPage(1);
      setPageSize(20);
      setSelectedRowKeys([]);
      setList([]);
    }
  }, [open, checkedList]);
  return /*#__PURE__*/React.createElement(Drawer, {
    className: "selected-bind-parking-drawer",
    getContainer: document.querySelector('#root'),
    title: "\u5DF2\u9009\u8F66\u4F4D",
    onClose: onClose,
    width: 480,
    footer: [/*#__PURE__*/React.createElement(Dropdown, {
      overlayClassName: "dropdown-menu",
      key: "drop",
      menu: {
        items: items
      },
      placement: "top",
      getPopupContainer: function getPopupContainer() {
        return document.querySelector('#root');
      }
    }, /*#__PURE__*/React.createElement(Button, null, "\u5220\u9664"))],
    open: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "selected-car-table table-content"
  }, /*#__PURE__*/React.createElement(DrawerProTable, {
    total: 0,
    columns: columns,
    actionRef: actionRef,
    dataSource: dataSource,
    requestTable: function requestTable() {},
    rowSelection: {
      selectedRowKeys: selectedRowKeys,
      onChange: onSelectChange
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginTop: 10,
      flex: '1'
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
  }, "\u5171", total, "\u6761"))));
});