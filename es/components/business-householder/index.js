import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import useDrawerTableLayout from '../../hooks/drawer-table-layout';
import KhtDrawerTableLayout from '../drawer-table-layout';
import KhtDrawerTable from '../drawer-table';
import { getResidentHousePageTypeList, getRecentProject } from './api';
import useBusinessHouseholderState from './hooks';
import _ from 'lodash';
import { message } from 'antd';
import ModalMessage from '../modal-message';
import KhtBusinessInstitutionalAssetsModalTree from '../../components/business-institutional-assets-modal-tree';
import KhtBusinessAssetsDrawerTree from '../../components/business-assets-drawer-tree';
import useBusinessHouseholderOperate from './hooks/operate';
//选择住户、业主组件
export default function KhtBusinessHouseholder(props) {
  var _typeOptions$type, _initTableSearchRef$c8, _selectTableSearchRef6, _initTableSearchRef$c9, _selectTableSearchRef7, _typeOptions$type2, _typeOptions$type3, _typeOptions$type4, _typeOptions$type5, _typeOptions$type6, _typeOptions$type7, _typeOptions$type8, _typeOptions$type9, _typeOptions$type10, _typeOptions$type11, _typeOptions$type12;
  var _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'checkbox' : _props$selectType,
    open = props.open,
    close = props.close,
    _onSubmit = props.onSubmit,
    type = props.type,
    _props$handleType = props.handleType,
    handleType = _props$handleType === void 0 ? 'select' : _props$handleType,
    _props$projectType = props.projectType,
    projectType = _props$projectType === void 0 ? 'multiple' : _props$projectType,
    _props$selectProject = props.selectProject,
    selectProject = _props$selectProject === void 0 ? {} : _props$selectProject,
    _props$selectedRowKey = props.selectedRowKeys,
    selectedRowKeys = _props$selectedRowKey === void 0 ? [] : _props$selectedRowKey;
  var _useDrawerTableLayout = useDrawerTableLayout(),
    initTableRef = _useDrawerTableLayout.initTableRef,
    selectedTableRef = _useDrawerTableLayout.selectedTableRef,
    drawerTableLayoutRef = _useDrawerTableLayout.drawerTableLayoutRef,
    searchType = _useDrawerTableLayout.searchType,
    setSearchType = _useDrawerTableLayout.setSearchType;
  var _useBusinessHousehold = useBusinessHouseholderState(),
    initCurrentTableIds = _useBusinessHousehold.initCurrentTableIds,
    setInitCurrentTableIds = _useBusinessHousehold.setInitCurrentTableIds,
    initTableDataTotal = _useBusinessHousehold.initTableDataTotal,
    setInitTableDataTotal = _useBusinessHousehold.setInitTableDataTotal,
    selectCurrentTableIds = _useBusinessHousehold.selectCurrentTableIds,
    setSelectCurrentTableIds = _useBusinessHousehold.setSelectCurrentTableIds,
    selectTableTotal = _useBusinessHousehold.selectTableTotal,
    setSelectTableTotal = _useBusinessHousehold.setSelectTableTotal,
    typeOptions = _useBusinessHousehold.typeOptions;
  var _useBusinessHousehold2 = useBusinessHouseholderOperate(),
    tableType = _useBusinessHousehold2.tableType,
    initTableSearchRef = _useBusinessHousehold2.initTableSearchRef,
    selectTableSearchRef = _useBusinessHousehold2.selectTableSearchRef,
    initTableSelectedRowKeys = _useBusinessHousehold2.initTableSelectedRowKeys,
    setInitTableSelectedRowKeys = _useBusinessHousehold2.setInitTableSelectedRowKeys,
    selectTableSelectedRowKeys = _useBusinessHousehold2.selectTableSelectedRowKeys,
    setSelectTableSelectedRowKeys = _useBusinessHousehold2.setSelectTableSelectedRowKeys,
    assetsModalTreeSubmit = _useBusinessHousehold2.assetsModalTreeSubmit,
    getTableColumns = _useBusinessHousehold2.getTableColumns,
    getComponentTypeSearchOptions = _useBusinessHousehold2.getComponentTypeSearchOptions,
    allAssetSubmit = _useBusinessHousehold2.allAssetSubmit,
    setSearchFormData = _useBusinessHousehold2.setSearchFormData,
    confirmOpen = _useBusinessHousehold2.confirmOpen,
    confirmSubmit = _useBusinessHousehold2.confirmSubmit,
    confirmCancel = _useBusinessHousehold2.confirmCancel,
    assetsModalCheckedItems = _useBusinessHousehold2.assetsModalCheckedItems,
    setAssetsModalCheckedItems = _useBusinessHousehold2.setAssetsModalCheckedItems,
    assetsModalTreeVisible = _useBusinessHousehold2.assetsModalTreeVisible,
    setAssetsModalTreeVisible = _useBusinessHousehold2.setAssetsModalTreeVisible,
    allAssetVisible = _useBusinessHousehold2.allAssetVisible,
    setAllAssetVisible = _useBusinessHousehold2.setAllAssetVisible;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    closeState = _useState2[0],
    setCloseState = _useState2[1]; //已选组件的当前页已选数据的ids
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    selectTableIsBigData = _useState4[0],
    setSelectTableIsBigData = _useState4[1]; //已选组件是否全选当前条件
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    selectAllState = _useState6[0],
    setSelectAllState = _useState6[1]; //全选操作状态，全选回调取的是这个是上一步的状态，故取默认可全选值true
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    selectAllOperate = _useState8[0],
    setSelectAllOperate = _useState8[1]; //全选操作是否执行过
  var _useState9 = useState({}),
    _useState10 = _slicedToArray(_useState9, 2),
    selectProjectData = _useState10[0],
    setSelectProjectData = _useState10[1]; //当前已选项目
  var tableColumnsData = type && getTableColumns(type) || []; //表格按组件类型获取显示字段列表
  var columns = [{
    title: (_typeOptions$type = typeOptions[type]) === null || _typeOptions$type === void 0 ? void 0 : _typeOptions$type.title,
    dataIndex: 'residentName',
    ellipsis: true
  }].concat(_toConsumableArray(tableColumnsData));
  //选择组件的数据请求------------------------start
  var getInitTableData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var _drawerTableLayoutRef2;
      var currentPage, pageSize, isBigData, _drawerTableLayoutRef, businessType, bindCustomerType, searchInfo, searchType, _initTableSearchRef$c, communityId, sourceTableList, typeVal, paramsData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            currentPage = _ref.currentPage, pageSize = _ref.pageSize, isBigData = _ref.isBigData;
            _drawerTableLayoutRef = (_drawerTableLayoutRef2 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef2 === void 0 ? void 0 : _drawerTableLayoutRef2.getTableFormFieldsValue(), businessType = _drawerTableLayoutRef.businessType, bindCustomerType = _drawerTableLayoutRef.bindCustomerType, searchInfo = _drawerTableLayoutRef.searchInfo, searchType = _drawerTableLayoutRef.type;
            _initTableSearchRef$c = initTableSearchRef.current, communityId = _initTableSearchRef$c.communityId, sourceTableList = _initTableSearchRef$c.sourceTableList;
            typeVal = searchType ? searchType : type; //有类型条件时取搜索添加的类型
            paramsData = {
              communityId: communityId,
              sourceTableList: sourceTableList,
              bindCustomerType: bindCustomerType,
              businessType: businessType,
              searchInfo: searchInfo,
              type: typeVal
            };
            return _context.abrupt("return", getResidentHousePageTypeList(paramsData, {
              currentPage: currentPage,
              pageSize: pageSize,
              isBigData: isBigData
            }).then(function (result) {
              var _response$dataList;
              var response = result.response;
              setInitTableDataTotal(response.totalCount);
              !isBigData && setInitCurrentTableIds(((_response$dataList = response.dataList) === null || _response$dataList === void 0 ? void 0 : _response$dataList.map(function (c) {
                return c.id;
              })) || []);
              // !isBigData && setSelectAllState(false);
              return {
                data: response.dataList,
                total: response.totalCount,
                success: true
              };
            }));
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getInitTableData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  //获取已选数据
  var getSelectListData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _drawerTableLayoutRef4;
      var _drawerTableLayoutRef3, businessType, searchInfo, searchType, communityId, typeVal, paramsData, _yield$getResidentHou, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _drawerTableLayoutRef3 = (_drawerTableLayoutRef4 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef4 === void 0 ? void 0 : _drawerTableLayoutRef4.getTableFormFieldsValue(), businessType = _drawerTableLayoutRef3.businessType, searchInfo = _drawerTableLayoutRef3.searchInfo, searchType = _drawerTableLayoutRef3.type;
            communityId = initTableSearchRef.current.communityId;
            typeVal = searchType ? searchType : type; //有类型条件时取搜索添加的类型
            paramsData = {
              communityId: communityId,
              businessType: businessType,
              searchInfo: searchInfo,
              type: typeVal,
              idList: initTableSelectedRowKeys
            };
            if (!(initTableSelectedRowKeys.length == 0)) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return", []);
          case 6:
            _context2.next = 8;
            return getResidentHousePageTypeList(paramsData, {
              currentPage: 1,
              pageSize: initTableSelectedRowKeys.length
            });
          case 8:
            _yield$getResidentHou = _context2.sent;
            response = _yield$getResidentHou.response;
            return _context2.abrupt("return", (response === null || response === void 0 ? void 0 : response.dataList) || []);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getSelectListData() {
      return _ref3.apply(this, arguments);
    };
  }();
  var requestInitTable = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref4) {
      var currentPage, pageSize;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            currentPage = _ref4.current, pageSize = _ref4.pageSize;
            if (!initTableSearchRef.current.communityId) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return", getInitTableData({
              currentPage: currentPage,
              pageSize: pageSize
            }));
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function requestInitTable(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  var getSelectTableData = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref6) {
      var _drawerTableLayoutRef6;
      var currentPage, pageSize, _drawerTableLayoutRef5, businessType, searchInfo, _selectTableSearchRef, communityId, sourceTableList, paramsData, isBigData;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            currentPage = _ref6.currentPage, pageSize = _ref6.pageSize;
            _drawerTableLayoutRef5 = (_drawerTableLayoutRef6 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef6 === void 0 ? void 0 : _drawerTableLayoutRef6.getSelectedTableFormFieldsValue(), businessType = _drawerTableLayoutRef5.businessType, searchInfo = _drawerTableLayoutRef5.searchInfo;
            _selectTableSearchRef = selectTableSearchRef.current, communityId = _selectTableSearchRef.communityId, sourceTableList = _selectTableSearchRef.sourceTableList;
            paramsData = {
              communityId: communityId,
              sourceTableList: sourceTableList,
              businessType: businessType,
              searchInfo: searchInfo,
              idList: initTableSelectedRowKeys,
              type: type
            };
            isBigData = selectTableIsBigData ? {
              isBigData: selectTableIsBigData
            } : {};
            return _context4.abrupt("return", getResidentHousePageTypeList(paramsData, _objectSpread({
              currentPage: currentPage,
              pageSize: selectTableIsBigData ? selectTableTotal : pageSize
            }, isBigData)).then(function (result) {
              var response = result.response;
              setSelectTableTotal(response.totalCount);
              if (selectTableIsBigData) {
                var _response$dataList2;
                var ids = (_response$dataList2 = response.dataList) === null || _response$dataList2 === void 0 ? void 0 : _response$dataList2.map(function (c) {
                  return c.id;
                });
                setInitTableSelectedRowKeys(ids.length > 0 ? _.difference(initTableSelectedRowKeys, ids) : initTableSelectedRowKeys);
              } else {
                var _response$dataList3;
                setSelectCurrentTableIds(((_response$dataList3 = response.dataList) === null || _response$dataList3 === void 0 ? void 0 : _response$dataList3.map(function (c) {
                  return c.id;
                })) || []);
              }
              return {
                data: selectTableIsBigData ? [] : response.dataList,
                total: selectTableIsBigData ? 0 : response.totalCount,
                success: true
              };
            }));
          case 6:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function getSelectTableData(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();
  //已选组件的数据请求
  var requestSelectedTable = function requestSelectedTable(_ref8) {
    var currentPage = _ref8.current,
      pageSize = _ref8.pageSize;
    return getSelectTableData({
      currentPage: currentPage,
      pageSize: pageSize
    });
  };
  //获取最近的项目
  var getProject = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            getRecentProject().then(function (result) {
              var response = result.response;
              var data = _objectSpread(_objectSpread({}, response), {}, {
                title: response.name,
                key: response.id
              });
              //设置搜索表单值
              if (Object.keys(response).length > 0) {
                setSelectProjectData({
                  name: response.name,
                  id: response.id
                });
                setSearchFormData([data], drawerTableLayoutRef);
              }
            });
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function getProject() {
      return _ref9.apply(this, arguments);
    };
  }();
  //关闭抽屉
  var onClose = function onClose() {
    setSearchType('2');
    close();
  };
  //条件搜索值回调
  var onSearch = function onSearch(data, type, name) {
    var _initTableRef$current, _selectedTableRef$cur;
    if (['communityName', 'sourceTableName'].includes(name)) {
      var search = {};
      if (name === 'communityName') {
        var _data$;
        search['communityId'] = ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.id) || '';
      }
      if (name === 'sourceTableName') {
        //已选数据重新赋值
        search['sourceTableList'] = (data === null || data === void 0 ? void 0 : data.sourceTableName) || [];
      }
      if (type === 'init') {
        var _drawerTableLayoutRef7, _initTableSearchRef$c2, _initTableSearchRef$c3;
        if (!data.sourceTableName) {
          //清空时也要清空缓存
          delete initTableSearchRef.current.assetsDrawerTreeItems;
          delete initTableSearchRef.current.sourceTableList;
        }
        initTableSearchRef.current = Object.assign(_objectSpread({}, initTableSearchRef.current), search);
        (_drawerTableLayoutRef7 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef7 === void 0 ? void 0 : _drawerTableLayoutRef7.setTableFormFieldsValue({
          communityName: ((_initTableSearchRef$c2 = initTableSearchRef.current) === null || _initTableSearchRef$c2 === void 0 ? void 0 : (_initTableSearchRef$c3 = _initTableSearchRef$c2.allAssetCustomRootNode[0]) === null || _initTableSearchRef$c3 === void 0 ? void 0 : _initTableSearchRef$c3.name) || ''
        });
      } else {
        var _drawerTableLayoutRef8, _selectTableSearchRef2, _selectTableSearchRef3;
        if (!data.sourceTableName) {
          //清空时也要清空缓存
          delete selectTableSearchRef.current.assetsDrawerTreeItems;
          delete selectTableSearchRef.current.sourceTableList;
        }
        selectTableSearchRef.current = Object.assign(_objectSpread({}, selectTableSearchRef.current), search);
        (_drawerTableLayoutRef8 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef8 === void 0 ? void 0 : _drawerTableLayoutRef8.setSelectedTableFormFieldsValue({
          communityName: ((_selectTableSearchRef2 = selectTableSearchRef.current) === null || _selectTableSearchRef2 === void 0 ? void 0 : (_selectTableSearchRef3 = _selectTableSearchRef2.allAssetCustomRootNode[0]) === null || _selectTableSearchRef3 === void 0 ? void 0 : _selectTableSearchRef3.name) || ''
        });
      }
    }
    tableType.current === '1' && type === 'init' && ((_initTableRef$current = initTableRef.current) === null || _initTableRef$current === void 0 ? void 0 : _initTableRef$current.reload());
    tableType.current === '2' && type === 'selected' && ((_selectedTableRef$cur = selectedTableRef.current) === null || _selectedTableRef$cur === void 0 ? void 0 : _selectedTableRef$cur.reload());
  };
  //搜索条件选项点击事件
  var onOptionClick = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e, name, type) {
      var _initTableSearchRef$c4, _selectTableSearchRef4;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            type === 'init' && name === 'communityName' && setAssetsModalTreeVisible(true);
            if (name === 'sourceTableName') {
              if (type === 'init' && ((_initTableSearchRef$c4 = initTableSearchRef.current) === null || _initTableSearchRef$c4 === void 0 ? void 0 : _initTableSearchRef$c4.communityId) || type === 'selected' && ((_selectTableSearchRef4 = selectTableSearchRef.current) === null || _selectTableSearchRef4 === void 0 ? void 0 : _selectTableSearchRef4.communityId)) {
                setAllAssetVisible(true);
              } else {
                message.warning('请先选择项目！');
              }
            }
          case 2:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function onOptionClick(_x4, _x5, _x6) {
      return _ref10.apply(this, arguments);
    };
  }();
  //表格勾选事件
  var selectHandleChange = function selectHandleChange(val, type) {
    if (type === 'init') {
      //选择组件
      var list = _.difference(initCurrentTableIds, val);
      //当前触发已选返回的长度和
      (initCurrentTableIds.length === val.length || val.length === 0) && setInitTableSelectedRowKeys(initCurrentTableIds.length === val.length ? _toConsumableArray(new Set([].concat(_toConsumableArray(initTableSelectedRowKeys), _toConsumableArray(val)))) : _.difference(initTableSelectedRowKeys, val.length === 0 ? initCurrentTableIds : list));
    } else {
      //已选组件
      var _list = _.difference(selectCurrentTableIds, val);
      if (selectCurrentTableIds.length === 0) {
        setSelectTableSelectedRowKeys(val);
      } else {
        setSelectTableSelectedRowKeys(selectCurrentTableIds.length === val.length ? _toConsumableArray(new Set([].concat(_toConsumableArray(selectTableSelectedRowKeys), _toConsumableArray(val)))) : _.difference(selectTableSelectedRowKeys, val.length === 0 ? selectCurrentTableIds : _list));
      }
      //长度一样、当前页已选大于已存在的已选、取消当前页选择
    }
  };
  //抽屉全选事件
  var onCheckAllChange = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(checked) {
      var _yield$getInitTableDa, data, ids, idList, _idList;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            checked && setSelectAllState(!selectAllState); //部分状态下也是true（有不可更改的重复，此时需要在当下矫正)
            !checked && setSelectAllState(false); //取消全选时设置
            setSearchType(checked ? '1' : '2');
            setSelectAllOperate(true); //是否执行过
            _context7.next = 6;
            return getInitTableData({
              currentPage: 1,
              pageSize: initTableDataTotal,
              isBigData: true
            });
          case 6:
            _yield$getInitTableDa = _context7.sent;
            data = _yield$getInitTableDa.data;
            ids = data === null || data === void 0 ? void 0 : data.map(function (c) {
              return c.id;
            });
            if (selectAllState) {
              //这个是上一步的状态（所以初始值默认是true)
              idList = [].concat(_toConsumableArray(initTableSelectedRowKeys), _toConsumableArray(ids));
              setInitTableSelectedRowKeys(idList.length > 0 ? _toConsumableArray(new Set(idList)) : []);
              //增量增加
            } else {
              //减去当前全选的取消
              _idList = _.difference(initTableSelectedRowKeys, ids);
              setInitTableSelectedRowKeys(_idList);
            }
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function onCheckAllChange(_x7) {
      return _ref11.apply(this, arguments);
    };
  }();
  //离开已选组件回调
  var closeSelectedComponent = function closeSelectedComponent() {
    tableType.current = '1';
  };
  //打开已选组件回调
  var openSelectedComponent = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            setCloseState(true); //同步已选组件的显示状态
            tableType.current = '2';
          case 2:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function openSelectedComponent() {
      return _ref12.apply(this, arguments);
    };
  }();
  //已选移除事件
  var onRemoveSelected = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(type, data) {
      var _selectedTableRef$cur2;
      var list;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            if (type === '1') {
              setSelectTableIsBigData(true);
            } else {
              list = _.difference(initTableSelectedRowKeys, data);
              setInitTableSelectedRowKeys(list);
            }
            _context9.next = 3;
            return (_selectedTableRef$cur2 = selectedTableRef.current) === null || _selectedTableRef$cur2 === void 0 ? void 0 : _selectedTableRef$cur2.reload();
          case 3:
            //重新加载
            setSelectTableIsBigData(false);
          case 4:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function onRemoveSelected(_x8, _x9) {
      return _ref13.apply(this, arguments);
    };
  }();
  useEffect(function () {
    //初始化时获取最近项目
    if (open) {
      var _initTableRef$current2;
      setInitTableSelectedRowKeys(selectedRowKeys); //设置已选数据
      if (Object.keys(selectProject).length > 0) {
        //传入已选项目
        setSelectProjectData(selectProject); //设置已选项目
        var data = _objectSpread(_objectSpread({}, selectProject), {}, {
          title: selectProject.name,
          key: selectProject.id
        });
        //设置搜索表单值
        setSearchFormData([data], drawerTableLayoutRef);
      } else {
        //没有取最近
        getProject();
      }
      (_initTableRef$current2 = initTableRef.current) === null || _initTableRef$current2 === void 0 ? void 0 : _initTableRef$current2.reload();
    }
  }, [open]);
  useEffect(function () {
    //搜索条件变化时（是否操作过全选事件&&如果全选状态是false时重置初始值true(false时是取消全选设置的)
    selectAllOperate && !selectAllState && setSelectAllState(true);
  }, [initTableSearchRef.current]);
  useEffect(function () {
    initTableSelectedRowKeys.length === 0 && setCloseState(false);
    console.log('%c Line:353 🥐 initTableSelectedRowKeys', 'color:#ffdd4d', initTableSelectedRowKeys);
  }, [initTableSelectedRowKeys]);
  useEffect(function () {
    //打开已选组件时tableTye变化为2时，设置表单显示的项目值
    if (tableType.current === '2') {
      var _drawerTableLayoutRef9, _initTableSearchRef$c5, _initTableSearchRef$c6, _selectedTableRef$cur3;
      drawerTableLayoutRef.current && ((_drawerTableLayoutRef9 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef9 === void 0 ? void 0 : _drawerTableLayoutRef9.setSelectedTableFormFieldsValue({
        communityName: ((_initTableSearchRef$c5 = initTableSearchRef.current) === null || _initTableSearchRef$c5 === void 0 ? void 0 : (_initTableSearchRef$c6 = _initTableSearchRef$c5.allAssetCustomRootNode[0]) === null || _initTableSearchRef$c6 === void 0 ? void 0 : _initTableSearchRef$c6.name) || ''
      }));
      (_selectedTableRef$cur3 = selectedTableRef.current) === null || _selectedTableRef$cur3 === void 0 ? void 0 : _selectedTableRef$cur3.reload();
    }
  }, [tableType.current]);
  useEffect(function () {
    var _initTableSearchRef$c7, _selectTableSearchRef5;
    //机构-项目树弹框选中数据设置
    setAssetsModalCheckedItems(tableType.current === '1' ? ((_initTableSearchRef$c7 = initTableSearchRef.current) === null || _initTableSearchRef$c7 === void 0 ? void 0 : _initTableSearchRef$c7.allAssetCustomRootNode) || [] : ((_selectTableSearchRef5 = selectTableSearchRef.current) === null || _selectTableSearchRef5 === void 0 ? void 0 : _selectTableSearchRef5.allAssetCustomRootNode) || []);
  }, [tableType.current, selectTableSearchRef.current, initTableSearchRef.current]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalMessage, {
    title: "\u786E\u8BA4\u5207\u6362\u9879\u76EE\uFF1F",
    content: "\u5207\u6362\u540E\uFF0C\u5F53\u524D\u9879\u76EE\u6240\u9009\u6570\u636E\u5C06\u4F1A\u88AB\u6E05\u9664\u3002",
    width: 400,
    open: confirmOpen,
    onOk: confirmSubmit,
    onCancel: confirmCancel
  }), /*#__PURE__*/React.createElement(KhtBusinessInstitutionalAssetsModalTree, {
    destroyOnClose: false,
    loaderLevel: "community",
    canSelect: "community",
    multiple: false,
    open: assetsModalTreeVisible,
    cancel: function cancel() {
      return setAssetsModalTreeVisible(false);
    },
    ok: function ok(data) {
      data.length > 0 && setSelectProjectData({
        name: data[0].name,
        id: data[0].id
      });
      assetsModalTreeSubmit('select', data, drawerTableLayoutRef);
    },
    defaultCheckedItems: assetsModalCheckedItems,
    showTooltip: true
  }), allAssetVisible && /*#__PURE__*/React.createElement(KhtBusinessAssetsDrawerTree, {
    open: allAssetVisible,
    cancel: function cancel() {
      return setAllAssetVisible(false);
    },
    ok: function ok(data) {
      return allAssetSubmit(data, drawerTableLayoutRef);
    },
    destroyOnClose: false,
    defaultCheckedItems: tableType.current === '1' ? ((_initTableSearchRef$c8 = initTableSearchRef.current) === null || _initTableSearchRef$c8 === void 0 ? void 0 : _initTableSearchRef$c8.assetsDrawerTreeItems) || [] : ((_selectTableSearchRef6 = selectTableSearchRef.current) === null || _selectTableSearchRef6 === void 0 ? void 0 : _selectTableSearchRef6.assetsDrawerTreeItems) || [],
    showTooltip: true,
    // canSelect="house"
    customRootNode: tableType.current === '1' ? ((_initTableSearchRef$c9 = initTableSearchRef.current) === null || _initTableSearchRef$c9 === void 0 ? void 0 : _initTableSearchRef$c9.allAssetCustomRootNode) || [] : ((_selectTableSearchRef7 = selectTableSearchRef.current) === null || _selectTableSearchRef7 === void 0 ? void 0 : _selectTableSearchRef7.allAssetCustomRootNode) || [],
    multiple: true,
    selectable: false,
    disableChild: true
  }), handleType === 'select' && /*#__PURE__*/React.createElement(KhtDrawerTableLayout, {
    ref: drawerTableLayoutRef,
    drawerProps: {
      width: (_typeOptions$type2 = typeOptions[type]) === null || _typeOptions$type2 === void 0 ? void 0 : _typeOptions$type2.width,
      title: "\u9009\u62E9".concat((_typeOptions$type3 = typeOptions[type]) === null || _typeOptions$type3 === void 0 ? void 0 : _typeOptions$type3.title),
      onClose: onClose,
      open: open
    },
    drawerTableLayoutTitle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        marginRight: 15
      }
    }, "\u9879\u76EE\uFF1A".concat(selectProjectData === null || selectProjectData === void 0 ? void 0 : selectProjectData.name)), /*#__PURE__*/React.createElement("span", null, "".concat((_typeOptions$type4 = typeOptions[type]) === null || _typeOptions$type4 === void 0 ? void 0 : _typeOptions$type4.title, "\u6570\uFF1A").concat(initTableDataTotal))),
    selectedDrawerProps: {
      width: (_typeOptions$type5 = typeOptions[type]) === null || _typeOptions$type5 === void 0 ? void 0 : _typeOptions$type5.width,
      title: "\u5DF2\u9009".concat((_typeOptions$type6 = typeOptions[type]) === null || _typeOptions$type6 === void 0 ? void 0 : _typeOptions$type6.title),
      open: closeState
    },
    onCheckAllChange: onCheckAllChange,
    searchType: searchType,
    selectType: selectType,
    handleType: handleType,
    onSubmit: function () {
      var _onSubmit2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(ids, selectedRows, searchType) {
        var listData;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return getSelectListData();
            case 2:
              listData = _context10.sent;
              _onSubmit({
                ids: ids,
                selectedRows: listData,
                searchType: searchType,
                selectProject: selectProjectData
              });
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function onSubmit(_x10, _x11, _x12) {
        return _onSubmit2.apply(this, arguments);
      }
      return onSubmit;
    }(),
    onRemoveSelected: onRemoveSelected,
    closeSelectedComponent: closeSelectedComponent,
    openSelectedComponent: openSelectedComponent,
    initTableOptions: {
      selectedRowKeys: initTableSelectedRowKeys,
      tableDataTotal: initTableDataTotal,
      searchFormOptions: {
        onSearch: onSearch,
        onOptionClick: onOptionClick,
        searchInputName: 'searchInfo',
        searchInputWidth: ((_typeOptions$type7 = typeOptions[type]) === null || _typeOptions$type7 === void 0 ? void 0 : _typeOptions$type7.searchInputWidth) || '',
        searchOptions: getComponentTypeSearchOptions('init', type, projectType)
      },
      tableNode: /*#__PURE__*/React.createElement(KhtDrawerTable, {
        actionRef: initTableRef,
        onRow: function onRow(record) {
          return {
            onChange: function onChange(_ref14) {
              var target = _ref14.target;
              var checked = target.checked;
              var list = [];
              //当前的数据中是否存在改数据
              var flag = initTableSelectedRowKeys === null || initTableSelectedRowKeys === void 0 ? void 0 : initTableSelectedRowKeys.some(function (c) {
                return c === record.id;
              });
              if (flag && !checked) {
                //存在时取消勾选
                list = _.difference(initTableSelectedRowKeys, [record.id]);
              }
              if (!flag && checked) {
                //不存在时勾选
                //不存在勾选中时
                list = [].concat(_toConsumableArray(initTableSelectedRowKeys), [record.id]);
              }
              setInitTableSelectedRowKeys(list);
            } // 点击行
          };
        },

        rowKey: "id",
        columns: columns,
        selectAllButtonState: true,
        scroll: {
          y: 'calc(100vh - 370px)'
        },
        rowSelection: {
          type: selectType,
          defaultSelectedRowKeys: initTableSelectedRowKeys,
          selectedRowKeys: initTableSelectedRowKeys,
          onChange: function onChange(e) {
            return selectHandleChange(e, 'init');
          }
        },
        request: requestInitTable
      })
    },
    selectedTableOptions: {
      selectedRowKeys: selectTableSelectedRowKeys,
      searchFormOptions: {
        onSearch: onSearch,
        onOptionClick: onOptionClick,
        searchInputName: 'searchInfo',
        searchInputWidth: ((_typeOptions$type8 = typeOptions[type]) === null || _typeOptions$type8 === void 0 ? void 0 : _typeOptions$type8.searchInputWidth) || '',
        searchOptions: getComponentTypeSearchOptions('selected', type, projectType)
      },
      tableNode: /*#__PURE__*/React.createElement(KhtDrawerTable, {
        actionRef: selectedTableRef,
        onRow: function onRow(record) {
          return {
            onChange: function onChange(_ref15) {
              var target = _ref15.target;
              var checked = target.checked;
              var list = [];
              //当前的数据中是否存在改数据
              var flag = selectTableSelectedRowKeys === null || selectTableSelectedRowKeys === void 0 ? void 0 : selectTableSelectedRowKeys.some(function (c) {
                return c === record.id;
              });
              if (flag && !checked) {
                //存在时取消勾选
                list = _.difference(selectTableSelectedRowKeys, [record.id]);
              }
              if (!flag && checked) {
                //不存在时勾选
                //不存在勾选中时
                list = [].concat(_toConsumableArray(selectTableSelectedRowKeys), [record.id]);
              }
              setSelectTableSelectedRowKeys(list);
            } // 点击行
          };
        },

        rowKey: "id",
        columns: columns,
        scroll: {
          y: 'calc(100vh - 322px)'
        },
        rowSelection: {
          type: selectType,
          defaultSelectedRowKeys: selectTableSelectedRowKeys,
          selectedRowKeys: selectTableSelectedRowKeys,
          onChange: function onChange(e) {
            return selectHandleChange(e, 'selected');
          }
        },
        request: requestSelectedTable
      })
    }
  }), handleType === 'readOnly' && /*#__PURE__*/React.createElement(KhtDrawerTableLayout, {
    ref: drawerTableLayoutRef,
    drawerProps: {
      width: (_typeOptions$type9 = typeOptions[type]) === null || _typeOptions$type9 === void 0 ? void 0 : _typeOptions$type9.width,
      title: "\u67E5\u770B".concat((_typeOptions$type10 = typeOptions[type]) === null || _typeOptions$type10 === void 0 ? void 0 : _typeOptions$type10.title),
      onClose: onClose,
      open: open
    },
    handleType: handleType,
    drawerTableLayoutTitle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        marginRight: 15
      }
    }, "\u9879\u76EE\uFF1A".concat(selectProjectData === null || selectProjectData === void 0 ? void 0 : selectProjectData.name)), /*#__PURE__*/React.createElement("span", null, "".concat((_typeOptions$type11 = typeOptions[type]) === null || _typeOptions$type11 === void 0 ? void 0 : _typeOptions$type11.title, "\u6570\uFF1A").concat(initTableDataTotal))),
    initTableOptions: {
      searchFormOptions: {
        onSearch: onSearch,
        onOptionClick: onOptionClick,
        searchInputName: 'searchInfo',
        searchInputWidth: ((_typeOptions$type12 = typeOptions[type]) === null || _typeOptions$type12 === void 0 ? void 0 : _typeOptions$type12.searchInputWidth) || '',
        searchOptions: getComponentTypeSearchOptions('init', type, projectType)
      },
      tableNode: /*#__PURE__*/React.createElement(KhtDrawerTable, {
        actionRef: initTableRef,
        rowKey: "id",
        columns: columns,
        selectAllButtonState: true,
        scroll: {
          y: 'calc(100vh - 370px)'
        },
        request: requestInitTable
      })
    }
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var SubmitParams = function SubmitParams(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var SelectProject = function SelectProject(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};