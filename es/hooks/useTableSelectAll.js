import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useRef, useState } from 'react';
var useTableSelectAll = function useTableSelectAll(props) {
  /**表格勾选行Id */
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedRowKeys = _useState2[0],
    setSelectedRowKeys = _useState2[1];
  //是否勾选全部的标志
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    selectAll = _useState4[0],
    setSelectAll = _useState4[1];
  //表格已加载过的数据的id
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    tableRowKeys = _useState6[0],
    setTableRowKeys = _useState6[1];
  //下拉选项
  var selections = [{
    key: '0',
    text: '全选所有',
    onSelect: function onSelect() {
      globalSelectAll(true);
    }
  }, {
    key: '1',
    text: '取消全选所有',
    onSelect: function onSelect() {
      globalSelectAll(false);
    }
  }];
  //点击了全选所有，用来记录移除勾选的行数据的id
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    unCheckedRowKeys = _useState8[0],
    setUnCheckedRowKeys = _useState8[1];
  var tableFormRef = useRef();
  var singlePageSelectAll = function singlePageSelectAll(selected, selectedRows, changeRows) {
    var rowsIds = changeRows.map(function (item) {
      return item[(props === null || props === void 0 ? void 0 : props.rowKey) || 'id'];
    });
    if (selected) {
      // 全选
      var removeId = unCheckedRowKeys.filter(function (item) {
        return !rowsIds.includes(item);
      });
      setSelectedRowKeys(Array.from(new Set([].concat(_toConsumableArray(rowsIds), _toConsumableArray(selectedRowKeys)))));
      setUnCheckedRowKeys(removeId);
    } else {
      // 取消全选
      setUnCheckedRowKeys(Array.from(new Set([].concat(_toConsumableArray(unCheckedRowKeys), _toConsumableArray(rowsIds)))));
      var selectId = selectedRowKeys.filter(function (item) {
        return !rowsIds.includes(item);
      });
      setSelectedRowKeys(selectId);
    }
  };
  // 单个勾选
  var singleSelect = function singleSelect(row, checked) {
    var id = row[(props === null || props === void 0 ? void 0 : props.rowKey) || 'id'];
    if (checked) {
      // 全选
      var removeId = unCheckedRowKeys.filter(function (item) {
        return item != id;
      });
      setUnCheckedRowKeys(removeId);
      setSelectedRowKeys(Array.from(new Set([id].concat(_toConsumableArray(selectedRowKeys)))));
    } else {
      // 取消全选
      setUnCheckedRowKeys(Array.from(new Set([].concat(_toConsumableArray(unCheckedRowKeys), [id]))));
      var selectId = selectedRowKeys.filter(function (item) {
        return id !== item;
      });
      setSelectedRowKeys(selectId);
    }
  };
  var globalSelectAll = function globalSelectAll(checked) {
    setSelectAll(checked);
    setSelectedRowKeys(checked ? tableRowKeys : []);
    setUnCheckedRowKeys([]);
  };
  //分页切换
  var singlePageChange = function singlePageChange() {
    if (!selectAll) {
      setSelectedRowKeys([]);
      setUnCheckedRowKeys([]);
    }
  };
  var onDataSourceChange = function onDataSourceChange(dataSource) {
    setTableRowKeys(Array.from(new Set([].concat(_toConsumableArray(tableRowKeys), _toConsumableArray(dataSource.map(function (item) {
      return item[(props === null || props === void 0 ? void 0 : props.rowKey) || 'id'];
    }))))));
  };
  // 单页全选
  var onSelectAll = function onSelectAll(selected, selectedRows, changeRows) {
    return singlePageSelectAll(selected, selectedRows, changeRows);
  };
  var onSelect = function onSelect(selected, checked) {
    return singleSelect(selected, checked);
  };
  // table重置
  var tableReset = function tableReset() {
    setSelectAll(false);
    setUnCheckedRowKeys([]);
    setSelectedRowKeys([]);
    setTableRowKeys([]);
  };
  useEffect(function () {
    if (selectAll) {
      var tableRowId = tableRowKeys.filter(function (item) {
        return !unCheckedRowKeys.includes(item);
      });
      setSelectedRowKeys(tableRowId);
    }
  }, [tableRowKeys]);
  return {
    setTableRowKeys: setTableRowKeys,
    selectedRowKeys: selectedRowKeys,
    setSelectedRowKeys: setSelectedRowKeys,
    selectAll: selectAll,
    singlePageSelectAll: singlePageSelectAll,
    globalSelectAll: globalSelectAll,
    tableFormRef: tableFormRef,
    unCheckedRowKeys: unCheckedRowKeys,
    tableRowKeys: tableRowKeys,
    singleSelect: singleSelect,
    onDataSourceChange: onDataSourceChange,
    onSelect: onSelect,
    selections: selections,
    onSelectAll: onSelectAll,
    setSelectAll: setSelectAll,
    singlePageChange: singlePageChange,
    tableReset: tableReset
  };
};
export default useTableSelectAll;