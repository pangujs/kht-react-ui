import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Drawer, Dropdown, Button, Pagination, ConfigProvider, Tooltip, message } from 'antd';
import "./index.css";
import zhCN from 'antd/es/locale/zh_CN';
import { cloneDeep } from 'lodash';
import KhtDrawerProTable from '../drawer-pro-table';
import KhtIcons from '../kht-icons';
export default function SelectedRoleTreeDrawer(props) {
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
    title: '角色',
    dataIndex: 'name',
    ellipsis: true,
    hideInSearch: true,
    render: function render(a, records) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '16px'
        }
      }, records.isExistChild !== undefined ? /*#__PURE__*/React.createElement(KhtIcons, {
        type: "icon-wenjian",
        style: {
          color: '#47a7ff'
        }
      }) : /*#__PURE__*/React.createElement(KhtIcons, {
        type: "icon-kehu",
        style: {
          color: '#47a7ff'
        }
      })), /*#__PURE__*/React.createElement(Tooltip, {
        getPopupContainer: function getPopupContainer() {
          return document.querySelector('.selected-department-drawer');
        },
        placement: "top",
        color: "#fff",
        overlayStyle: {
          color: '#000'
        },
        title: records.fullName
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: '8px',
          color: '#333'
        }
      }, records.name)));
    }
  }];
  var deleteCheckedItems = function deleteCheckedItems(type) {
    if (type == 'all') {
      removeSelectedRowKeys([]);
    } else {
      if (!selectedRowKeys.length) return message.warning('请先选择要处理的数据');
      var keyList = list.filter(function (item) {
        return selectedRowKeys.includes(item.id);
      }).map(function (item) {
        return item.key;
      });
      removeSelectedRowKeys(keyList);
    }
    setSelectedRowKeys([]);
  };
  var items = [{
    key: '1',
    label: /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        deleteCheckedItems('part');
      }
    }, "\u79FB\u9664\u9009\u4E2D")
  }, {
    key: '2',
    label: /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        deleteCheckedItems('all');
      }
    }, "\u79FB\u9664\u5168\u90E8")
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
    className: "selected-role-tree-drawer",
    getContainer: document.querySelector('#root'),
    title: "\u5DF2\u9009\u89D2\u8272",
    onClose: onClose,
    width: 480,
    zIndex: 1200,
    footer: [/*#__PURE__*/React.createElement(Dropdown, {
      overlayClassName: "selected-role-tree-drawer-dropdown-menu",
      key: "drop",
      menu: {
        items: items
      },
      placement: "top",
      getPopupContainer: function getPopupContainer() {
        return document.querySelector('#root');
      }
    }, /*#__PURE__*/React.createElement(Button, null, "\u79FB\u9664"))],
    open: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-content"
  }, /*#__PURE__*/React.createElement(KhtDrawerProTable, {
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
}