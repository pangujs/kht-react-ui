import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useRef } from 'react';
/**
 *  弹框的显示与隐藏 hooks
 */
export default function useDrawerTableLayout() {
  var initTableRef = useRef();
  var selectedTableRef = useRef();
  var drawerTableLayoutRef = useRef();
  var _useState = useState('0'),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1]; //弹框显示隐藏状态
  var _useState3 = useState('2'),
    _useState4 = _slicedToArray(_useState3, 2),
    searchType = _useState4[0],
    setSearchType = _useState4[1]; //1：全选查询类型， 2：选中查询类型
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedRowKeys = _useState6[0],
    setSelectedRowKeys = _useState6[1]; //已选数据key集合
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedRows = _useState8[0],
    setSelectedRows = _useState8[1]; //已选数据对象集合
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    cancelSelectedRowKeys = _useState10[0],
    setCancelSelectedRowKeys = _useState10[1]; //全选时的取消选中数据集合
  var _useState11 = useState('select'),
    _useState12 = _slicedToArray(_useState11, 2),
    handleType = _useState12[0],
    setHandleType = _useState12[1]; //组件操作类型
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    selectTableRowKeys = _useState14[0],
    setSelectTableRowKeys = _useState14[1]; //当前页数据
  // 已选面板 表格已选数据keys
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedPanelSelectedRowKeys = _useState16[0],
    setSelectedPanelSelectedRowKeys = _useState16[1];
  return {
    initTableRef: initTableRef,
    selectedTableRef: selectedTableRef,
    drawerTableLayoutRef: drawerTableLayoutRef,
    open: open,
    setOpen: setOpen,
    searchType: searchType,
    setSearchType: setSearchType,
    selectedRowKeys: selectedRowKeys,
    setSelectedRowKeys: setSelectedRowKeys,
    selectedRows: selectedRows,
    setSelectedRows: setSelectedRows,
    cancelSelectedRowKeys: cancelSelectedRowKeys,
    setCancelSelectedRowKeys: setCancelSelectedRowKeys,
    handleType: handleType,
    setHandleType: setHandleType,
    selectTableRowKeys: selectTableRowKeys,
    setSelectTableRowKeys: setSelectTableRowKeys,
    selectedPanelSelectedRowKeys: selectedPanelSelectedRowKeys,
    setSelectedPanelSelectedRowKeys: setSelectedPanelSelectedRowKeys
  };
}