import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import useDrawerTableLayout from '../../hooks/drawer-table-layout';
import KhtDrawerTableLayout from '../drawer-table-layout';
import KhtDrawerTable from '../drawer-table';
import { moduleCheckPageList } from '../../http/api';
import _uniq from 'lodash/uniq';
import _difference from 'lodash/difference';
import _uniqBy from 'lodash/uniqBy';
import _differenceBy from 'lodash/differenceBy';
import _cloneDeep from 'lodash/cloneDeep';
import KhtBusinessPeople from '../business-people';
import KhtBusinessSelectTagDrawer from '../business-select-tag-drawer';
import KhtBusinessInstitutionalAssetsModalTree from '../business-institutional-assets-modal-tree';
import KhtBusinessAssetsDrawerTree from '../business-assets-drawer-tree';
import AccountPopover from '../check-popover';
//选择客户抽屉组件
export default function KhtBusinessCustomer(props) {
  var _props$businessType = props.businessType,
    businessType = _props$businessType === void 0 ? 'wechat' : _props$businessType,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'checkbox' : _props$selectType,
    open = props.open,
    close = props.close,
    onSubmit = props.onSubmit,
    _props$selectedData = props.selectedData,
    selectedData = _props$selectedData === void 0 ? [] : _props$selectedData,
    _props$canChangeBusin = props.canChangeBusinessType,
    canChangeBusinessType = _props$canChangeBusin === void 0 ? false : _props$canChangeBusin,
    employeeInfo = props.employeeInfo;
  var title = useMemo(function () {
    return canChangeBusinessType ? '' : businessType === 'wechat' ? '微信' : '企微';
  }, [canChangeBusinessType, businessType]);
  var _useDrawerTableLayout = useDrawerTableLayout(),
    initTableRef = _useDrawerTableLayout.initTableRef,
    selectedTableRef = _useDrawerTableLayout.selectedTableRef,
    drawerTableLayoutRef = _useDrawerTableLayout.drawerTableLayoutRef,
    searchType = _useDrawerTableLayout.searchType,
    setSearchType = _useDrawerTableLayout.setSearchType,
    selectedRowKeys = _useDrawerTableLayout.selectedRowKeys,
    setSelectedRowKeys = _useDrawerTableLayout.setSelectedRowKeys,
    selectedRows = _useDrawerTableLayout.selectedRows,
    setSelectedRows = _useDrawerTableLayout.setSelectedRows,
    cancelSelectedRowKeys = _useDrawerTableLayout.cancelSelectedRowKeys,
    setCancelSelectedRowKeys = _useDrawerTableLayout.setCancelSelectedRowKeys,
    handleType = _useDrawerTableLayout.handleType,
    selectedPanelSelectedRowKeys = _useDrawerTableLayout.selectedPanelSelectedRowKeys,
    setSelectedPanelSelectedRowKeys = _useDrawerTableLayout.setSelectedPanelSelectedRowKeys;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOpen = _useState2[0],
    setSelectedOpen = _useState2[1];
  // 选择面板 添加人打开状态
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openPeople = _useState4[0],
    setOpenPeople = _useState4[1];
  // 已选添加人
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedPeople = _useState6[0],
    setSelectedPeople = _useState6[1];
  // 已选面板 添加人打开状态
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openPeopleSelected = _useState8[0],
    setOpenPeopleSelected = _useState8[1];
  // 已选面板 添加人
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedPanelPeople = _useState10[0],
    setSelectedPanelPeople = _useState10[1];
  // 选择面板 标签打开状态
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openTag = _useState12[0],
    setOpenTag = _useState12[1];
  // 已选标签
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedTags = _useState14[0],
    setSelectedTags = _useState14[1];
  // 选择面板 标签打开状态
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openTagSelected = _useState16[0],
    setOpenTagSelected = _useState16[1];
  // 已选标签
  var _useState17 = useState([]),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedPanelTags = _useState18[0],
    setSelectedPanelTags = _useState18[1];
  // 选择面板 项目打开状态
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    openCommunity = _useState20[0],
    setOpenCommunity = _useState20[1];
  // 已选项目
  var _useState21 = useState([]),
    _useState22 = _slicedToArray(_useState21, 2),
    selectedCommunity = _useState22[0],
    setSelectedCommunity = _useState22[1];
  // 选择面板 项目打开状态
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    openCommunitySelected = _useState24[0],
    setOpenCommunitySelected = _useState24[1];
  // 已选项目
  var _useState25 = useState([]),
    _useState26 = _slicedToArray(_useState25, 2),
    selectedPanelCommunity = _useState26[0],
    setSelectedPanelCommunity = _useState26[1];
  // 选择面板 住户打开状态
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    openResident = _useState28[0],
    setOpenResident = _useState28[1];
  // 已选住户
  var _useState29 = useState([]),
    _useState30 = _slicedToArray(_useState29, 2),
    selectedResident = _useState30[0],
    setSelectedResident = _useState30[1];
  // 选择面板 住户打开状态
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    openResidentSelected = _useState32[0],
    setOpenResidentSelected = _useState32[1];
  // 已选住户
  var _useState33 = useState([]),
    _useState34 = _slicedToArray(_useState33, 2),
    selectedPanelResident = _useState34[0],
    setSelectedPanelResident = _useState34[1];
  // 选择面板 当前查询条件下表格数据总条数
  var tableTotalSync = useRef(0);
  // 选择面板 当前查询条件下表格数据总条数，用于全选状态对比
  var _useState35 = useState(0),
    _useState36 = _slicedToArray(_useState35, 2),
    tableTotal = _useState36[0],
    setTableTotal = _useState36[1];
  // 选择面板 当前查询条件
  var tableSearchParamsSync = useRef({});
  // 已选面板当前表格数据
  var selectTableDataListSync = useRef([]);
  // 已选面板 当前查询条件下的 所有数据总数
  var selectedTableTotalSync = useRef(0);
  // 已选面板当前查询条件
  var selectedTableSearchParamsSync = useRef({});
  var businessTypeSelectOptions = [{
    name: 'sourceTableType',
    width: 108,
    placeholder: '',
    options: [{
      label: '微信客户',
      value: 'wechat'
    }, {
      label: '企微客户',
      value: 'wxwork'
    }],
    allowClear: false
  }];
  var searchOptionsSync = [{
    name: 'employeeType',
    width: 108,
    placeholder: '全部添加人',
    options: [{
      label: '全部添加人',
      value: '2'
    }, {
      label: '指定添加人',
      value: '3'
    }, {
      label: '我的',
      value: '1'
    }],
    disabled: employeeInfo === null || employeeInfo === void 0 ? void 0 : employeeInfo.code
  }, {
    name: 'tagIdList',
    width: 108,
    placeholder: '不限标签',
    open: false
  }, {
    name: 'communityId',
    width: 108,
    placeholder: '不限项目',
    open: false
  }];
  var _useState37 = useState(canChangeBusinessType ? [].concat(searchOptionsSync, businessTypeSelectOptions) : searchOptionsSync),
    _useState38 = _slicedToArray(_useState37, 2),
    searchOptions = _useState38[0],
    setSearchOptions = _useState38[1];
  var _useState39 = useState(_cloneDeep(canChangeBusinessType ? [].concat(searchOptionsSync, businessTypeSelectOptions) : searchOptionsSync)),
    _useState40 = _slicedToArray(_useState39, 2),
    selectedSearchOptions = _useState40[0],
    setSelectedSearchOptions = _useState40[1];
  var columns = [{
    title: '客户',
    dataIndex: 'name',
    ellipsis: true,
    render: function render(_, record) {
      var _drawerTableLayoutRef, _drawerTableLayoutRef2;
      return /*#__PURE__*/React.createElement(AccountPopover, {
        name: record.name,
        id: record.id,
        type: canChangeBusinessType ? (_drawerTableLayoutRef = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef2 = _drawerTableLayoutRef.getTableFormFieldsValue()) === null || _drawerTableLayoutRef2 === void 0 ? void 0 : _drawerTableLayoutRef2.sourceTableType : businessType,
        trigger: "hover",
        getPopupContainer: function getPopupContainer() {
          return document.getElementById('root') || document.body;
        },
        zIndex: 1000
      });
    }
  }, {
    title: '备注名',
    dataIndex: 'remarks',
    ellipsis: true
  }, {
    title: '绑定住户',
    dataIndex: 'bindResidentNames',
    ellipsis: true
  }];
  //选择组件的数据请求
  var requestInitTable = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var _drawerTableLayoutRef3, _selectedCommunity$;
      var currentPage, pageSize, paramsData, employeeType, employeeCodeList, res, _res$response, data, total;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            currentPage = _ref.current, pageSize = _ref.pageSize;
            paramsData = _objectSpread({
              currentPage: currentPage,
              pageSize: pageSize
            }, (_drawerTableLayoutRef3 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef3 === void 0 ? void 0 : _drawerTableLayoutRef3.getTableFormFieldsValue());
            console.log('%c Line:84 🍪requestInitTable---- paramsData', 'color:#7f2b82', paramsData);
            // 标签查询数据为空，重置已选标签数据
            if (!paramsData.tagIdList) setSelectedTags([]);
            if (!paramsData.communityId) setSelectedCommunity([]);
            if (!paramsData.residentHouseIdList) setSelectedResident([]);
            employeeType = paramsData.employeeType;
            if (employeeType && employeeType !== '1' && employeeType !== '2') {
              employeeType = '3';
            }
            employeeCodeList = employeeType === '3' ? selectedPeople.map(function (item) {
              return item.code;
            }) : [];
            _context.next = 11;
            return moduleCheckPageList({
              currentPage: currentPage,
              pageSize: pageSize,
              employeeType: employeeType,
              sourceTableType: canChangeBusinessType ? paramsData.sourceTableType : businessType,
              employeeCodeList: (employeeInfo === null || employeeInfo === void 0 ? void 0 : employeeInfo.code) ? [employeeInfo.code] : employeeCodeList,
              searchInfo: paramsData.searchInfo,
              tagIdList: (paramsData === null || paramsData === void 0 ? void 0 : paramsData.tagIdList) ? selectedTags.map(function (item) {
                return item.id;
              }) : undefined,
              communityId: (paramsData === null || paramsData === void 0 ? void 0 : paramsData.communityId) ? (_selectedCommunity$ = selectedCommunity[0]) === null || _selectedCommunity$ === void 0 ? void 0 : _selectedCommunity$.id : undefined,
              residentHouseIdList: (paramsData === null || paramsData === void 0 ? void 0 : paramsData.residentHouseIdList) ? selectedResident.map(function (item) {
                return item.id;
              }) : undefined
            });
          case 11:
            res = _context.sent;
            _res$response = res.response, data = _res$response.dataList, total = _res$response.totalCount; // 保存当前查询条件下，数据条数
            tableTotalSync.current = total;
            if (!tableTotal) setTableTotal(total);
            // 保存当前查询条件
            tableSearchParamsSync.current = paramsData;
            return _context.abrupt("return", {
              data: data,
              total: total,
              success: true
            });
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestInitTable(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  //已选组件的数据请求
  var requestSelectedTable = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
      var _drawerTableLayoutRef4, _selectedPanelCommuni;
      var currentPage, pageSize, paramsData, employeeType, employeeCodeList, params, res, _res$response2, data, total;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = _ref3.current, pageSize = _ref3.pageSize;
            paramsData = _objectSpread({
              currentPage: currentPage,
              pageSize: pageSize
            }, (_drawerTableLayoutRef4 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef4 === void 0 ? void 0 : _drawerTableLayoutRef4.getSelectedTableFormFieldsValue()); // 标签查询数据为空，重置已选标签数据
            if (!paramsData.tagIdList) setSelectedPanelTags([]);
            if (!paramsData.communityId) setSelectedPanelCommunity([]);
            if (!paramsData.residentHouseIdList) setSelectedPanelResident([]);
            // 已选数据为空，不执行查询接口，否则会查出所有的数据来
            if (!(!selectedRowKeys || selectedRowKeys.length === 0)) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt("return", {
              data: [],
              total: 0,
              success: true
            });
          case 7:
            employeeType = paramsData.employeeType;
            if (employeeType && employeeType !== '1' && employeeType !== '2') {
              employeeType = '3';
            }
            employeeCodeList = employeeType === '3' ? selectedPanelPeople.map(function (item) {
              return item.code;
            }) : [];
            params = {
              currentPage: currentPage,
              pageSize: pageSize,
              employeeType: employeeType,
              sourceTableType: canChangeBusinessType ? paramsData.sourceTableType : businessType,
              employeeCodeList: (employeeInfo === null || employeeInfo === void 0 ? void 0 : employeeInfo.code) ? [employeeInfo.code] : employeeCodeList,
              searchInfo: paramsData.searchInfo,
              tagIdList: (paramsData === null || paramsData === void 0 ? void 0 : paramsData.tagIdList) ? selectedPanelTags.map(function (item) {
                return item.id;
              }) : undefined,
              communityId: (paramsData === null || paramsData === void 0 ? void 0 : paramsData.communityId) ? (_selectedPanelCommuni = selectedPanelCommunity[0]) === null || _selectedPanelCommuni === void 0 ? void 0 : _selectedPanelCommuni.id : undefined,
              residentHouseIdList: (paramsData === null || paramsData === void 0 ? void 0 : paramsData.residentHouseIdList) ? selectedPanelResident.map(function (item) {
                return item.id;
              }) : undefined,
              idList: selectedRowKeys
            };
            _context2.next = 13;
            return moduleCheckPageList(params);
          case 13:
            res = _context2.sent;
            _res$response2 = res.response, data = _res$response2.dataList, total = _res$response2.totalCount; // 保存当前查询条件下，表格当前数据
            selectTableDataListSync.current = data;
            // 保存当前查询条件下，数据条数
            selectedTableTotalSync.current = total;
            // 保存当前查询条件
            selectedTableSearchParamsSync.current = params;
            return _context2.abrupt("return", {
              data: data,
              total: total,
              success: true
            });
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function requestSelectedTable(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  //关闭抽屉
  var onClose = function onClose() {
    setSearchType('2');
    console.log('%c Line:140 🥃---关闭-----color:#ffdd4d');
    close();
  };
  //条件搜索值回调
  var onSearch = function onSearch(data, type, name) {
    var _selectedTableRef$cur, _initTableRef$current;
    console.log('%c Line:141 🥕 name', 'color:#f5ce50', name);
    console.log('%c Line:150 🥥 data', 'color:#4fff4B', data);
    if (name === 'employeeType') {
      if (data.employeeType === '3') {
        // 指定添加人-弹出添加人选择抽屉
        if (type === 'init') {
          setOpenPeople(true);
          var temp = searchOptions;
          temp[0].open = false;
          setSearchOptions(_toConsumableArray(temp));
        } else {
          setOpenPeopleSelected(true);
          var _temp = selectedSearchOptions;
          _temp[0].open = false;
          setSelectedSearchOptions(_toConsumableArray(_temp));
        }
        return;
      } else {
        if (type === 'init') {
          setSelectedPeople([]);
          var _temp2 = searchOptions;
          _temp2[0].open = undefined;
          setSearchOptions(_toConsumableArray(_temp2));
        } else {
          setSelectedPanelPeople([]);
          var _temp3 = selectedSearchOptions;
          _temp3[0].open = undefined;
          setSelectedSearchOptions(_toConsumableArray(_temp3));
        }
      }
    }
    if (name === 'communityId' && !data.communityId) {
      if (type === 'init') {
        searchOptions.pop();
        setSearchOptions(_toConsumableArray(searchOptions));
      } else {
        selectedSearchOptions.pop();
        setSelectedSearchOptions(_toConsumableArray(selectedSearchOptions));
      }
    }
    // if (name === 'sourceTableType') {
    //   debugger
    //   if (type === 'init') {
    //     searchOptions.pop();
    //     setSearchOptions([...searchOptions]);
    //   } else {
    //     selectedSearchOptions.pop();
    //     setSelectedSearchOptions([...selectedSearchOptions]);
    //   }
    // }
    type === 'selected' ? (_selectedTableRef$cur = selectedTableRef.current) === null || _selectedTableRef$cur === void 0 ? void 0 : _selectedTableRef$cur.reloadAndRest() : (_initTableRef$current = initTableRef.current) === null || _initTableRef$current === void 0 ? void 0 : _initTableRef$current.reloadAndRest();
  };
  //搜索条件选项点击事件
  var onOptionClick = function onOptionClick(e, name, type) {
    console.log('%c Line:133 🥝 type', 'color:#4fff4B', type);
    console.log('%c Line:104 🥑 e', 'color:#3f7cff', e);
    console.log('%c Line:104 🌮 name', 'color:#b03734', drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : drawerTableLayoutRef.current);
    if (name === 'employeeType') {
      if (type == 'init' && searchOptions[0].open !== undefined) {
        setOpenPeople(true);
      } else if (type == 'selected' && selectedSearchOptions[0].open !== undefined) {
        setOpenPeopleSelected(true);
      }
    }
    if (name === 'tagIdList') {
      type == 'init' ? setOpenTag(true) : setOpenTagSelected(true);
    }
    if (name === 'communityId') {
      type == 'init' ? setOpenCommunity(true) : setOpenCommunitySelected(true);
    }
    if (name === 'residentHouseIdList') {
      type == 'init' ? setOpenResident(true) : setOpenResidentSelected(true);
    }
  };
  //表格勾选事件-单个
  var tableOnSelect = function tableOnSelect(record, selected, type) {
    console.log('%c Line:103 🥔 type', 'color:#4fff4B', record);
    if (selectType === 'radio') {
      // 单选
      setSelectedRowKeys([record.id]);
      setSelectedRows([record]);
    } else {
      // 多选
      var temp = type === 'selected' ? selectedPanelSelectedRowKeys : selectedRowKeys;
      var tempRows = selectedRows;
      if (selected) {
        temp.push(record.id);
        tempRows.push(record);
      } else {
        temp = temp.filter(function (id) {
          return record.id !== id;
        });
        tempRows = tempRows.filter(function (item) {
          return record.id !== item.id;
        });
      }
      // 已选面板
      if (type === 'selected') {
        setSelectedPanelSelectedRowKeys(_toConsumableArray(temp));
      } else {
        // 选择面板
        setSelectedRowKeys(_toConsumableArray(temp));
        setSelectedRows(_toConsumableArray(tempRows));
      }
    }
  };
  var tableOnSelectAll = function tableOnSelectAll(selected, changeRows, type) {
    // 设置源头数据
    var tempKeys = type === 'selected' ? selectedPanelSelectedRowKeys : selectedRowKeys;
    var tempRows = selectedRows;
    var newKeys = [];
    if (selected) {
      newKeys = _uniq([].concat(_toConsumableArray(tempKeys), _toConsumableArray(changeRows.map(function (item) {
        return item.id;
      }))));
      tempRows = _uniqBy([].concat(_toConsumableArray(selectedRows), _toConsumableArray(changeRows)), 'id');
    } else {
      newKeys = _difference(tempKeys, changeRows.map(function (item) {
        return item.id;
      }));
      tempRows = _differenceBy(selectedRows, changeRows, 'id');
    }
    // 已选面板
    if (type === 'selected') {
      setSelectedPanelSelectedRowKeys(_toConsumableArray(newKeys));
    } else {
      setSelectedRowKeys(_toConsumableArray(newKeys));
      setSelectedRows(_toConsumableArray(tempRows));
    }
  };
  //抽屉全选事件
  var onCheckAllChange = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(checked) {
      var _tableSearchParamsSyn, _tableSearchParamsSyn2, _selectedCommunity$2, res, _res$response$dataLis, dataList, list;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            console.log('%c Line:76 🌭 checked', 'color:#fca650', checked);
            // 全选事件，重新请求接口拉取全部数据，存入已选数据当中，设置选中
            if (!checked) {
              _context3.next = 11;
              break;
            }
            _context3.next = 4;
            return moduleCheckPageList({
              currentPage: 1,
              pageSize: tableTotalSync.current,
              searchType: 1,
              sourceTableType: canChangeBusinessType ? tableSearchParamsSync.current.sourceTableType : businessType,
              employeeCodeList: (employeeInfo === null || employeeInfo === void 0 ? void 0 : employeeInfo.code) ? [employeeInfo.code] : tableSearchParamsSync.current.employeeType === '3' ? selectedPeople.map(function (item) {
                return item.id;
              }) : [],
              searchInfo: tableSearchParamsSync.current.searchInfo,
              tagIdList: ((_tableSearchParamsSyn = tableSearchParamsSync.current) === null || _tableSearchParamsSyn === void 0 ? void 0 : _tableSearchParamsSyn.tagIdList) ? selectedTags.map(function (item) {
                return item.id;
              }) : undefined,
              communityId: ((_tableSearchParamsSyn2 = tableSearchParamsSync.current) === null || _tableSearchParamsSyn2 === void 0 ? void 0 : _tableSearchParamsSyn2.communityId) ? (_selectedCommunity$2 = selectedCommunity[0]) === null || _selectedCommunity$2 === void 0 ? void 0 : _selectedCommunity$2.id : undefined
            });
          case 4:
            res = _context3.sent;
            _res$response$dataLis = res.response.dataList, dataList = _res$response$dataLis === void 0 ? [] : _res$response$dataLis; // 增量去重更新
            list = dataList.map(function (c) {
              return c.id;
            }) || [];
            setSelectedRowKeys(_uniq([].concat(_toConsumableArray(selectedRowKeys), _toConsumableArray(list))));
            setSelectedRows(_uniqBy([].concat(_toConsumableArray(selectedRows), _toConsumableArray(dataList)), 'id'));
            _context3.next = 13;
            break;
          case 11:
            setSelectedRowKeys([]);
            setSelectedRows([]);
          case 13:
            setSearchType(checked ? '1' : '2');
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onCheckAllChange(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  //离开已选组件回调
  var closeSelectedComponent = function closeSelectedComponent() {
    setSelectedOpen(false);
    console.log('%c Line:77 🍷--已选组件关闭了-   color:#7f2b82');
  };
  //打开已选组件回调
  var openSelectedComponent = function openSelectedComponent() {
    var _selectedTableRef$cur2;
    console.log('%c Line:77 🍷--已选组件已打开了-   color:#7f2b82');
    (_selectedTableRef$cur2 = selectedTableRef.current) === null || _selectedTableRef$cur2 === void 0 ? void 0 : _selectedTableRef$cur2.reload();
    setSelectedOpen(true);
  };
  //已选移除事件
  var onRemoveSelected = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(type, data) {
      var _selectedTableRef$cur3;
      var tempList, res, _res$response$dataLis2, dataList;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            console.log('%c Line:67 🌶 data', 'color:#b03734', data);
            console.log('%c Line:64 onRemoveSelected--- type', 'color:#b03734', type);
            tempList = [];
            if (!(type == '2')) {
              _context4.next = 9;
              break;
            }
            if (data.length) {
              _context4.next = 6;
              break;
            }
            return _context4.abrupt("return");
          case 6:
            tempList = data;
            _context4.next = 20;
            break;
          case 9:
            if (selectTableDataListSync.current.length) {
              _context4.next = 11;
              break;
            }
            return _context4.abrupt("return");
          case 11:
            if (!(selectedTableTotalSync.current > selectTableDataListSync.current.length)) {
              _context4.next = 19;
              break;
            }
            _context4.next = 14;
            return moduleCheckPageList(_objectSpread(_objectSpread({}, selectedTableSearchParamsSync.current), {}, {
              currentPage: 1,
              pageSize: selectedTableTotalSync.current
            }));
          case 14:
            res = _context4.sent;
            _res$response$dataLis2 = res.response.dataList, dataList = _res$response$dataLis2 === void 0 ? [] : _res$response$dataLis2;
            tempList = dataList.map(function (c) {
              return c.id;
            }) || [];
            _context4.next = 20;
            break;
          case 19:
            tempList = selectTableDataListSync.current.map(function (item) {
              return item.id;
            });
          case 20:
            // 移除选中，从selectedRowKeys中删除需要移除的数据
            setSelectedRowKeys(_difference(selectedRowKeys, tempList));
            // 移除之后，已选面板也需要移除这些数据，用新的已选数据重新请求接口来更新已选列表。
            (_selectedTableRef$cur3 = selectedTableRef.current) === null || _selectedTableRef$cur3 === void 0 ? void 0 : _selectedTableRef$cur3.reloadAndRest();
            setSelectedRows(_differenceBy(selectedRows, tempList.map(function (val) {
              return {
                id: val
              };
            }), 'id'));
            // 已选面板清空已选数据
            setSelectedPanelSelectedRowKeys([]);
          case 24:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function onRemoveSelected(_x4, _x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  // 添加人选择
  var onPeopleSubmit = function onPeopleSubmit(selectedRowKeys, selectedRows, type) {
    var peopleName = '';
    if (selectedRows.length > 3) {
      peopleName = "".concat(selectedRows.slice(0, 3).map(function (item) {
        return item.name;
      }).join(','), "\u7B49").concat(selectedRows.length, "\u4E2A\u4EBA");
    } else {
      peopleName = selectedRows.map(function (item) {
        return item.name;
      }).join(',');
    }
    if (type === 'selected') {
      var _drawerTableLayoutRef5;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef5 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef5 === void 0 ? void 0 : _drawerTableLayoutRef5.setSelectedTableFormFieldsValue({
        employeeType: peopleName
      });
      setOpenPeopleSelected(false);
      setSelectedPanelPeople(selectedRows);
    } else {
      var _drawerTableLayoutRef6;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef6 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef6 === void 0 ? void 0 : _drawerTableLayoutRef6.setTableFormFieldsValue({
        employeeType: peopleName
      });
      console.log(selectedRowKeys);
      setOpenPeople(false);
      setSelectedPeople(selectedRows);
    }
    if (selectedRowKeys.length) {
      var _selectedTableRef$cur4, _initTableRef$current2;
      // 已选添加人数据, 执行查询表格
      type === 'selected' ? (_selectedTableRef$cur4 = selectedTableRef.current) === null || _selectedTableRef$cur4 === void 0 ? void 0 : _selectedTableRef$cur4.reloadAndRest() : (_initTableRef$current2 = initTableRef.current) === null || _initTableRef$current2 === void 0 ? void 0 : _initTableRef$current2.reloadAndRest();
    }
  };
  // 标签选择
  var tagOnOk = function tagOnOk(selectNode, type) {
    var tagName = '';
    if (selectNode.length > 3) {
      tagName = "".concat(selectNode.slice(0, 3).map(function (item) {
        return item.name;
      }).join(','), "\u7B49").concat(selectNode.length, "\u4E2A\u6807\u7B7E");
    } else {
      tagName = selectNode.map(function (item) {
        return item.name;
      }).join(',');
    }
    if (type === 'selected') {
      var _drawerTableLayoutRef7;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef7 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef7 === void 0 ? void 0 : _drawerTableLayoutRef7.setSelectedTableFormFieldsValue({
        tagIdList: tagName
      });
      setOpenTagSelected(false);
      setSelectedPanelTags(selectNode);
    } else {
      var _drawerTableLayoutRef8;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef8 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef8 === void 0 ? void 0 : _drawerTableLayoutRef8.setTableFormFieldsValue({
        tagIdList: tagName
      });
      setOpenTag(false);
      setSelectedTags(selectNode);
    }
  };
  // 项目选择
  var communityOnOk = function communityOnOk(selectNode, type) {
    if (type === 'selected') {
      var _drawerTableLayoutRef9, _selectNode$;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef9 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef9 === void 0 ? void 0 : _drawerTableLayoutRef9.setSelectedTableFormFieldsValue({
        communityId: ((_selectNode$ = selectNode[0]) === null || _selectNode$ === void 0 ? void 0 : _selectNode$.name) || undefined
      });
      setOpenCommunitySelected(false);
      setSelectedPanelCommunity(selectNode);
    } else {
      var _drawerTableLayoutRef10, _selectNode$2;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef10 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef10 === void 0 ? void 0 : _drawerTableLayoutRef10.setTableFormFieldsValue({
        communityId: ((_selectNode$2 = selectNode[0]) === null || _selectNode$2 === void 0 ? void 0 : _selectNode$2.name) || undefined
      });
      setOpenCommunity(false);
      setSelectedCommunity(selectNode);
    }
    if (selectNode && selectNode.length) {
      var temp = type === 'init' ? searchOptions : selectedSearchOptions;
      if (temp.findIndex(function (item) {
        return item.name === 'residentHouseIdList';
      }) === -1) {
        temp.push({
          name: 'residentHouseIdList',
          width: 108,
          placeholder: '住户',
          open: false
        });
        type === 'init' ? setSearchOptions(_toConsumableArray(temp)) : setSelectedSearchOptions(_toConsumableArray(temp));
      }
    } else {
      var _temp4 = type === 'init' ? searchOptions : selectedSearchOptions;
      if (_temp4.findIndex(function (item) {
        return item.name === 'residentHouseIdList';
      }) !== -1) {
        _temp4.pop();
        type === 'init' ? setSearchOptions(_toConsumableArray(_temp4)) : setSelectedSearchOptions(_toConsumableArray(_temp4));
      }
    }
  };
  // 住户选择
  var residentOnOk = function residentOnOk(selectNode, type) {
    var residentName = '';
    if (selectNode.length > 3) {
      residentName = "".concat(selectNode.slice(0, 3).map(function (item) {
        return item.name;
      }).join(','), "\u7B49").concat(selectNode.length, "\u4E2A\u4F4F\u6237");
    } else {
      residentName = selectNode.map(function (item) {
        return item.name;
      }).join(',');
    }
    if (type === 'selected') {
      var _drawerTableLayoutRef11;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef11 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef11 === void 0 ? void 0 : _drawerTableLayoutRef11.setSelectedTableFormFieldsValue({
        residentHouseIdList: residentName
      });
      setOpenResidentSelected(false);
      setSelectedPanelResident(selectNode);
    } else {
      var _drawerTableLayoutRef12;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef12 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef12 === void 0 ? void 0 : _drawerTableLayoutRef12.setTableFormFieldsValue({
        residentHouseIdList: residentName
      });
      setOpenResident(false);
      setSelectedResident(selectNode);
    }
  };
  useEffect(function () {
    setSelectedRowKeys(_toConsumableArray(selectedData.map(function (item) {
      return item.id;
    })));
    setSelectedRows(_toConsumableArray(selectedData));
  }, [selectedData]);
  useEffect(function () {
    var _drawerTableLayoutRef13, _drawerTableLayoutRef14;
    var sourceTableType = (_drawerTableLayoutRef13 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef13 === void 0 ? void 0 : (_drawerTableLayoutRef14 = _drawerTableLayoutRef13.getTableFormFieldsValue()) === null || _drawerTableLayoutRef14 === void 0 ? void 0 : _drawerTableLayoutRef14.sourceTableType;
    if (canChangeBusinessType && open && !sourceTableType) {
      var _drawerTableLayoutRef15, _drawerTableLayoutRef16;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef15 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef15 === void 0 ? void 0 : _drawerTableLayoutRef15.setTableFormFieldsValue({
        sourceTableType: businessType
      });
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef16 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef16 === void 0 ? void 0 : _drawerTableLayoutRef16.setSelectedTableFormFieldsValue({
        sourceTableType: businessType
      });
    }
    if (employeeInfo) {
      var _drawerTableLayoutRef17;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef17 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef17 === void 0 ? void 0 : _drawerTableLayoutRef17.setTableFormFieldsValue({
        employeeType: employeeInfo.name
      });
    }
  }, [open]);
  useEffect(function () {
    var _drawerTableLayoutRef18, _drawerTableLayoutRef19;
    var sourceTableType = (_drawerTableLayoutRef18 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef18 === void 0 ? void 0 : (_drawerTableLayoutRef19 = _drawerTableLayoutRef18.getSelectedTableFormFieldsValue()) === null || _drawerTableLayoutRef19 === void 0 ? void 0 : _drawerTableLayoutRef19.sourceTableType;
    if (canChangeBusinessType && selectedOpen && !sourceTableType) {
      var _drawerTableLayoutRef20;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef20 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef20 === void 0 ? void 0 : _drawerTableLayoutRef20.setSelectedTableFormFieldsValue({
        sourceTableType: businessType
      });
    }
    if (employeeInfo) {
      var _drawerTableLayoutRef21;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef21 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef21 === void 0 ? void 0 : _drawerTableLayoutRef21.setSelectedTableFormFieldsValue({
        employeeType: employeeInfo.name
      });
    }
  }, [selectedOpen]);
  useEffect(function () {
    if (!canChangeBusinessType && businessType) {
      var _initTableRef$current3;
      (_initTableRef$current3 = initTableRef.current) === null || _initTableRef$current3 === void 0 ? void 0 : _initTableRef$current3.reloadAndRest();
    }
  }, [businessType]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerTableLayout, {
    ref: drawerTableLayoutRef,
    drawerProps: {
      width: 720,
      title: "\u9009\u62E9".concat(title, "\u5BA2\u6237"),
      onClose: onClose,
      open: open,
      getContainer: document.getElementById('root') || document.body
    },
    selectedDrawerProps: {
      width: 720,
      title: "\u5DF2\u9009".concat(title, "\u5BA2\u6237"),
      getContainer: document.getElementById('root') || document.body,
      open: selectedOpen
    },
    onCheckAllChange: onCheckAllChange,
    searchType: searchType,
    selectType: selectType,
    handleType: handleType,
    onSubmit: onSubmit,
    onRemoveSelected: onRemoveSelected,
    closeSelectedComponent: closeSelectedComponent,
    openSelectedComponent: openSelectedComponent,
    initTableOptions: {
      selectedRowKeys: selectedRowKeys,
      tableDataTotal: tableTotal,
      selectedRows: selectedRows,
      searchFormOptions: {
        onSearch: onSearch,
        onOptionClick: onOptionClick,
        searchInputName: 'searchInfo',
        searchOptions: searchOptions,
        searchInputPlaceholder: "\u641C\u7D22".concat(title, "\u5BA2\u6237")
      },
      tableNode: /*#__PURE__*/React.createElement(KhtDrawerTable, {
        onRow: function onRow(record) {
          return {
            onChange: function onChange(_ref7) {
              var target = _ref7.target;
              var checked = target.checked;
              if (searchType === '1') {
                var list = [];
                var flag = cancelSelectedRowKeys.some(function (c) {
                  return c === record.id;
                });
                if (checked) {
                  var _list;
                  //勾选时删除取消选中,过滤掉选中的数据
                  console.log('%c Line:207 🍏 cancelSelectedRowKeys', 'color:#ed9ec7', cancelSelectedRowKeys);
                  list = _toConsumableArray(cancelSelectedRowKeys);
                  (_list = list) === null || _list === void 0 ? void 0 : _list.map(function (c, index) {
                    if (c === record.id) {
                      list.splice(index, 1);
                    }
                  });
                  console.log('%c Line:207 🍻 list', 'color:#465975', list);
                } else if (!flag) {
                  //不存在已取消勾选中时
                  list = [].concat(_toConsumableArray(cancelSelectedRowKeys), [record.id]);
                }
                console.log('%c Line:210 🍓 list', 'color:#42b983', list);
                setCancelSelectedRowKeys(list);
              }
            },
            // 点击行
            onClick: function onClick(event) {
              if (selectType === 'radio') {
                setSelectedRowKeys([record.id]);
                setSelectedRows([record]);
                event.stopPropagation();
              }
            }
          };
        },
        actionRef: initTableRef,
        rowKey: "id",
        columns: columns,
        selectAllButtonState: true,
        rowSelection: {
          type: selectType,
          defaultSelectedRowKeys: selectedRowKeys,
          selectedRowKeys: selectedRowKeys,
          onSelect: function onSelect(record, selected) {
            return tableOnSelect(record, selected);
          },
          onSelectAll: function onSelectAll(record, selectedRows, changeRows) {
            return tableOnSelectAll(record, changeRows);
          }
        },
        request: requestInitTable,
        scroll: {
          y: document.documentElement.clientHeight - 400 > 250 ? document.documentElement.clientHeight - 400 : 250
        }
      })
    },
    selectedTableOptions: {
      selectedRowKeys: selectedPanelSelectedRowKeys,
      searchFormOptions: {
        onSearch: onSearch,
        onOptionClick: onOptionClick,
        searchInputName: 'searchInfo',
        searchOptions: selectedSearchOptions,
        searchInputPlaceholder: "\u641C\u7D22".concat(title, "\u5BA2\u6237")
      },
      tableNode: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerTable, {
        actionRef: selectedTableRef,
        rowKey: "id",
        columns: columns,
        rowSelection: {
          type: selectType,
          defaultSelectedRowKeys: selectedPanelSelectedRowKeys,
          selectedRowKeys: selectedPanelSelectedRowKeys,
          onSelect: function onSelect(record, selected) {
            return tableOnSelect(record, selected, 'selected');
          },
          onSelectAll: function onSelectAll(record, selectedRows, changeRows) {
            return tableOnSelectAll(record, changeRows, 'selected');
          }
        },
        request: requestSelectedTable,
        scroll: {
          y: document.documentElement.clientHeight - 350 > 250 ? document.documentElement.clientHeight - 350 : 250
        }
      }))
    }
  }), /*#__PURE__*/React.createElement(KhtBusinessPeople, {
    key: "init",
    close: function close() {
      return setOpenPeople(false);
    },
    open: openPeople,
    onSubmit: function onSubmit(selectedRowKeys, selectedRows) {
      return onPeopleSubmit(selectedRowKeys, selectedRows, 'init');
    },
    selectedPeople: selectedPeople
  }), /*#__PURE__*/React.createElement(KhtBusinessSelectTagDrawer, {
    open: openTag,
    onClose: function onClose() {
      return setOpenTag(false);
    },
    cancel: function cancel() {
      return setOpenTag(false);
    },
    ok: function ok(selectNode) {
      return tagOnOk(selectNode, 'init');
    },
    destroyOnClose: false,
    multiple: true,
    defaultSelectedTags: selectedTags
  }), /*#__PURE__*/React.createElement(KhtBusinessInstitutionalAssetsModalTree, {
    open: openCommunity,
    cancel: function cancel() {
      return setOpenCommunity(false);
    },
    ok: function ok(selectNode) {
      return communityOnOk(selectNode, 'init');
    },
    defaultCheckedItems: selectedCommunity,
    destroyOnClose: false,
    showTooltip: false,
    loaderLevel: "community",
    multiple: false
  }), /*#__PURE__*/React.createElement(KhtBusinessAssetsDrawerTree, {
    open: openResident,
    cancel: function cancel() {
      return setOpenResident(false);
    },
    ok: function ok(selectNode) {
      return residentOnOk(selectNode, 'init');
    },
    destroyOnClose: false,
    defaultCheckedItems: selectedResident,
    showTooltip: false,
    customRootNode: selectedCommunity,
    multiple: true,
    selectable: false,
    disableChild: false,
    canSelect: "noSub"
  }), /*#__PURE__*/React.createElement(KhtBusinessPeople, {
    close: function close() {
      return setOpenPeopleSelected(false);
    },
    open: openPeopleSelected,
    onSubmit: function onSubmit(selectedRowKeys, selectedRows) {
      return onPeopleSubmit(selectedRowKeys, selectedRows, 'selected');
    },
    selectedPeople: selectedPanelPeople
  }), /*#__PURE__*/React.createElement(KhtBusinessSelectTagDrawer, {
    open: openTagSelected,
    onClose: function onClose() {
      return setOpenTagSelected(false);
    },
    cancel: function cancel() {
      return setOpenTagSelected(false);
    },
    ok: function ok(selectNode) {
      return tagOnOk(selectNode, 'selected');
    },
    destroyOnClose: false,
    multiple: true,
    defaultSelectedTags: selectedPanelTags
  }), /*#__PURE__*/React.createElement(KhtBusinessInstitutionalAssetsModalTree, {
    open: openCommunitySelected,
    cancel: function cancel() {
      return setOpenCommunitySelected(false);
    },
    ok: function ok(selectNode) {
      return communityOnOk(selectNode, 'selected');
    },
    defaultCheckedItems: selectedPanelCommunity,
    destroyOnClose: false,
    showTooltip: false,
    loaderLevel: "community",
    multiple: false
  }), /*#__PURE__*/React.createElement(KhtBusinessAssetsDrawerTree, {
    open: openResidentSelected,
    cancel: function cancel() {
      return setOpenResidentSelected(false);
    },
    ok: function ok(selectNode) {
      return residentOnOk(selectNode, 'selected');
    },
    destroyOnClose: false,
    defaultCheckedItems: selectedPanelResident,
    showTooltip: false,
    customRootNode: selectedPanelCommunity,
    multiple: true,
    selectable: false,
    disableChild: false,
    canSelect: "noSub"
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};