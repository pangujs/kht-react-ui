import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { message } from 'antd';
import { useRef, useState, useEffect } from 'react';
import useBusinessHouseholderState from './index';
import { JsonParse } from '../../../utils';
import useDrawerTableLayout from '../../../hooks/drawer-table-layout';
//操作
export default function useBusinessHouseholderOperate() {
  var _useDrawerTableLayout = useDrawerTableLayout(),
    selectedTableRef = _useDrawerTableLayout.selectedTableRef;
  var _useBusinessHousehold = useBusinessHouseholderState(),
    tableColumns = _useBusinessHousehold.tableColumns,
    componentTypeData = _useBusinessHousehold.componentTypeData;
  var tableType = useRef('1'); //1：当前是第一层，2：当前是第二层抽屉
  var initTableSearchRef = useRef({}); //第一层抽屉搜索非表单直接提交的字段值
  var selectTableSearchRef = useRef({}); //第二层抽屉搜索非表单直接提交的字段值
  var assetsModalTreeStorage = useRef({}); //已选项目暂存
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    assetsModalTreeVisible = _useState2[0],
    setAssetsModalTreeVisible = _useState2[1]; //机构项目树弹框
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    allAssetVisible = _useState4[0],
    setAllAssetVisible = _useState4[1]; //抽屉搜索选择资产显示状态
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    initTableSelectedRowKeys = _useState6[0],
    setInitTableSelectedRowKeys = _useState6[1]; //第一层表格的当前已选数据
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectTableSelectedRowKeys = _useState8[0],
    setSelectTableSelectedRowKeys = _useState8[1]; //第二层表格的当前已选数据
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    confirmOpen = _useState10[0],
    setConfirmOpen = _useState10[1]; //机构项目树弹框已选数据
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    assetsModalCheckedItems = _useState12[0],
    setAssetsModalCheckedItems = _useState12[1]; //机构项目树弹框已选数据
  /**
   *initTableSearchRef/selectTableSearchRef
   * @param communityId:需要提交的项目id
   * @param allAssetCustomRootNode:当前选中的项目选项object[]
   * @param sourceTableList:需要提交的资产数组object[] {sourceTableId: c.id,sourceTableType}
   * @param assetsDrawerTreeItems:当前选中的资产选项object[]
   * @returns
   */
  //获取表头
  var getTableColumns = function getTableColumns(type) {
    return tableColumns[type];
  };
  /**
   * @param tableType :init(选择组件)、selected已选组件
   * @param type 组件类型
   * @param projectType 项目类型（单选、多选）
   * @returns
   */
  var getComponentTypeSearchOptions = function getComponentTypeSearchOptions(tableType, type, projectType) {
    var list = componentTypeData[projectType][type];
    if (tableType === 'selected') {
      var listData = JsonParse(list);
      listData === null || listData === void 0 ? void 0 : listData.map(function (c) {
        if (c.name === 'communityName') {
          c.disabled = true;
        }
      });
      return listData;
    } else {
      return list;
    }
  };
  var setSearchFormData = function setSearchFormData(data, ref) {
    if (tableType.current === '1') {
      var _ref$current, _data$, _data$2;
      //第一层
      //搜索表单显示值设置
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.setTableFormFieldsValue({
        communityName: ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.name) || '',
        sourceTableName: null //选择组件中项目切换时清空已选资产
      });

      var obj = _objectSpread({}, initTableSearchRef.current);
      initTableSearchRef.current = Object.assign(obj, {
        communityId: ((_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.id) || '',
        allAssetCustomRootNode: data
      });
      //选择组件中项目切换时清空已选资产
      delete initTableSearchRef.current.sourceTableList;
      delete initTableSearchRef.current.assetsDrawerTreeItems;
      initTableSearchRef.current = Object.assign(_objectSpread({}, initTableSearchRef.current));
    } else {
      var _ref$current2, _data$3, _data$4;
      //搜索表单显示值设置
      (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.setSelectedTableFormFieldsValue({
        communityName: ((_data$3 = data[0]) === null || _data$3 === void 0 ? void 0 : _data$3.name) || ''
      });
      var _obj = _objectSpread({}, selectTableSearchRef.current);
      selectTableSearchRef.current = Object.assign(_obj, {
        communityId: ((_data$4 = data[0]) === null || _data$4 === void 0 ? void 0 : _data$4.id) || '',
        allAssetCustomRootNode: data
      });
    }
  };
  //机构项目树弹框提交
  var assetsModalTreeSubmit = function assetsModalTreeSubmit(type, data, ref) {
    var _data$5, _initTableSearchRef$c2, _initTableSearchRef$c3, _initTableSearchRef$c4;
    console.log('%c Line:86 🍷 data', 'color:#465975', data);
    console.log('%c Line:86 🍪 type', 'color:#f5ce50', type);
    if (data.length === 0) {
      //手动选择才提示
      if (type === 'select') {
        var _initTableSearchRef$c;
        message.error('最少选择一个项目');
        //重新设置前一个已选
        //机构-项目树弹框选中数据设置
        tableType.current === '1' && setAssetsModalCheckedItems(Object.assign([], (_initTableSearchRef$c = initTableSearchRef.current) === null || _initTableSearchRef$c === void 0 ? void 0 : _initTableSearchRef$c.allAssetCustomRootNode) || []);
        return;
      } else {
        return;
      }
    }
    //判断是否有更换，不更换就停止执行下一步
    if (data.length > 0 && ((_data$5 = data[0]) === null || _data$5 === void 0 ? void 0 : _data$5.id) === ((_initTableSearchRef$c2 = initTableSearchRef.current) === null || _initTableSearchRef$c2 === void 0 ? void 0 : _initTableSearchRef$c2.allAssetCustomRootNode.length) > 0 && ((_initTableSearchRef$c3 = initTableSearchRef.current) === null || _initTableSearchRef$c3 === void 0 ? void 0 : (_initTableSearchRef$c4 = _initTableSearchRef$c3.allAssetCustomRootNode[0]) === null || _initTableSearchRef$c4 === void 0 ? void 0 : _initTableSearchRef$c4.id)) {
      return;
    }
    //暂存已选
    assetsModalTreeStorage.current = {
      data: data,
      ref: ref
    };
    //有已选数据时才提示
    if (initTableSelectedRowKeys.length > 0 && type === 'select') {
      setConfirmOpen(true);
    } else {
      setSearchFormData(data, ref);
    }
  };
  //资产树弹框提交
  var allAssetSubmit = function allAssetSubmit(data, ref) {
    var sourceTableList = [];
    if (data.length > 0) {
      sourceTableList = data.map(function (c) {
        return {
          sourceTableId: c.id,
          sourceTableType: c.sourceTableType
        };
      });
    }
    if (tableType.current === '1') {
      var _ref$current3, _data$6;
      initTableSearchRef.current = Object.assign(_objectSpread({}, initTableSearchRef.current), {
        sourceTableList: sourceTableList,
        assetsDrawerTreeItems: data
      });
      //搜索表单显示值设置
      (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.setTableFormFieldsValue({
        sourceTableName: ((_data$6 = data[0]) === null || _data$6 === void 0 ? void 0 : _data$6.name) || ''
      });
    } else {
      var _ref$current4, _data$7;
      selectTableSearchRef.current = Object.assign(_objectSpread({}, selectTableSearchRef.current), {
        sourceTableList: sourceTableList,
        assetsDrawerTreeItems: data
      });
      //搜索表单显示值设置
      (_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : _ref$current4.setSelectedTableFormFieldsValue({
        sourceTableName: ((_data$7 = data[0]) === null || _data$7 === void 0 ? void 0 : _data$7.name) || ''
      });
    }
  };
  //切换项目的提示提交回调
  var confirmSubmit = function confirmSubmit() {
    var _assetsModalTreeStora = assetsModalTreeStorage.current,
      data = _assetsModalTreeStora.data,
      ref = _assetsModalTreeStora.ref;
    setSearchFormData(data, ref);
    tableType.current === '1' && setInitTableSelectedRowKeys([]);
    tableType.current === '2' && setSelectTableSelectedRowKeys([]);
    setConfirmOpen(false);
  };
  //切换项目的提示撤销回调
  var confirmCancel = function confirmCancel() {
    var _initTableSearchRef$c5, _selectTableSearchRef;
    setAssetsModalCheckedItems(tableType.current === '1' ? Object.assign([], (_initTableSearchRef$c5 = initTableSearchRef.current) === null || _initTableSearchRef$c5 === void 0 ? void 0 : _initTableSearchRef$c5.allAssetCustomRootNode) || [] : ((_selectTableSearchRef = selectTableSearchRef.current) === null || _selectTableSearchRef === void 0 ? void 0 : _selectTableSearchRef.allAssetCustomRootNode) || []);
    setConfirmOpen(false);
  };
  useEffect(function () {
    //监听selectedTableRef、tableType变化
    if (tableType.current === '2') {
      var _initTableSearchRef$c6, _selectedTableRef$cur;
      //已选组件
      var obj = _objectSpread({}, selectTableSearchRef.current);
      selectTableSearchRef.current = Object.assign(obj, {
        communityId: initTableSearchRef.current.communityId || '',
        allAssetCustomRootNode: (_initTableSearchRef$c6 = initTableSearchRef.current) === null || _initTableSearchRef$c6 === void 0 ? void 0 : _initTableSearchRef$c6.allAssetCustomRootNode
      });
      (_selectedTableRef$cur = selectedTableRef.current) === null || _selectedTableRef$cur === void 0 ? void 0 : _selectedTableRef$cur.reload();
    }
  }, [tableType.current, selectedTableRef.current]);
  return {
    tableType: tableType,
    initTableSearchRef: initTableSearchRef,
    selectTableSearchRef: selectTableSearchRef,
    initTableSelectedRowKeys: initTableSelectedRowKeys,
    setInitTableSelectedRowKeys: setInitTableSelectedRowKeys,
    selectTableSelectedRowKeys: selectTableSelectedRowKeys,
    setSelectTableSelectedRowKeys: setSelectTableSelectedRowKeys,
    assetsModalCheckedItems: assetsModalCheckedItems,
    setAssetsModalCheckedItems: setAssetsModalCheckedItems,
    assetsModalTreeSubmit: assetsModalTreeSubmit,
    getTableColumns: getTableColumns,
    getComponentTypeSearchOptions: getComponentTypeSearchOptions,
    allAssetSubmit: allAssetSubmit,
    setSearchFormData: setSearchFormData,
    confirmOpen: confirmOpen,
    confirmSubmit: confirmSubmit,
    confirmCancel: confirmCancel,
    assetsModalTreeVisible: assetsModalTreeVisible,
    setAssetsModalTreeVisible: setAssetsModalTreeVisible,
    allAssetVisible: allAssetVisible,
    setAllAssetVisible: setAllAssetVisible
  };
}