import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import useDrawerTableLayout from '../../hooks/drawer-table-layout';
import KhtDrawerTableLayout from '../drawer-table-layout';
import KhtDrawerTable from '../drawer-table';
import { pagelistByDeptAndName } from '../../http/api';
import _uniq from 'lodash/uniq';
import _difference from 'lodash/difference';
import _uniqBy from 'lodash/uniqBy';
import _differenceBy from 'lodash/differenceBy';
import { SelectDepartment } from '../../index';
//选择项目抽屉组件
export default function KhtBusinessPeople(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? '人员' : _props$title,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'checkbox' : _props$selectType,
    open = props.open,
    close = props.close,
    onSubmit = props.onSubmit,
    _props$selectedPeople = props.selectedPeople,
    selectedPeople = _props$selectedPeople === void 0 ? [] : _props$selectedPeople;
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
  // 选择面板 当前查询条件下表格数据总条数
  var tableTotalSync = useRef(0);
  // 选择面板 当前查询条件下表格数据总条数，用于全选状态对比
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    tableTotal = _useState2[0],
    setTableTotal = _useState2[1];
  // 选择面板 当前查询条件
  var tableSearchParamsSync = useRef({});
  // 已选面板当前表格数据
  var selectTableDataListSync = useRef([]);
  // 选择面板 部门查询表单状态
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openDept = _useState4[0],
    setOpenDept = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultCheckedItems = _useState6[0],
    setDefaultCheckedItems = _useState6[1];
  // 已选面板 部门查询表单状态
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openDeptSelected = _useState8[0],
    setOpenDeptSelected = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    defaultCheckedItemsSelected = _useState10[0],
    setDefaultCheckedItemsSelected = _useState10[1];
  // 已选面板 所选部门同步数据
  var checkedItemsSelectedSync = useRef([]);
  // 已选面板 当前查询条件下的 所有数据总数
  var selectedTableTotalSync = useRef(0);
  // 已选面板当前查询条件
  var selectedTableSearchParamsSync = useRef({});
  var _useState11 = useState([{
      name: 'deptName',
      width: 148,
      placeholder: '全部部门',
      open: false
    }]),
    _useState12 = _slicedToArray(_useState11, 1),
    searchOptions = _useState12[0];
  var columns = [{
    title: title,
    dataIndex: 'name',
    ellipsis: true
  }, {
    title: '部门',
    dataIndex: 'deptNames',
    ellipsis: true
  }];
  //选择组件的数据请求
  var requestInitTable = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var _drawerTableLayoutRef;
      var currentPage, pageSize, paramsData, res, _res$response, data, total;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            currentPage = _ref.current, pageSize = _ref.pageSize;
            paramsData = _objectSpread({
              currentPage: currentPage,
              pageSize: pageSize
            }, (_drawerTableLayoutRef = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef === void 0 ? void 0 : _drawerTableLayoutRef.getTableFormFieldsValue());
            console.log('%c Line:84 🍪requestInitTable---- paramsData', 'color:#7f2b82', paramsData);
            // 部门查询数据为空，重置已选部门数据
            if (!paramsData.deptName) setDefaultCheckedItems([]);
            _context.next = 6;
            return pagelistByDeptAndName({
              currentPage: currentPage,
              pageSize: pageSize,
              departmentCodeList: paramsData.deptName ? defaultCheckedItems.map(function (item) {
                return item.code;
              }) : [],
              searchInfo: paramsData.searchInfo
            });
          case 6:
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
          case 12:
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
      var _drawerTableLayoutRef2;
      var currentPage, pageSize, paramsData, params, res, _res$response2, data, total;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = _ref3.current, pageSize = _ref3.pageSize;
            paramsData = _objectSpread({
              currentPage: currentPage,
              pageSize: pageSize
            }, (_drawerTableLayoutRef2 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef2 === void 0 ? void 0 : _drawerTableLayoutRef2.getSelectedTableFormFieldsValue()); // 部门查询数据为空，重置已选部门数据
            if (!paramsData.deptName) setDefaultCheckedItemsSelected([]);
            // 已选数据为空，不执行查询接口，否则会查出所有的数据来
            if (!(!selectedRowKeys || selectedRowKeys.length === 0)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", {
              data: [],
              total: 0,
              success: true
            });
          case 5:
            params = {
              currentPage: currentPage,
              pageSize: pageSize,
              departmentCodeList: paramsData.deptName ? checkedItemsSelectedSync.current.map(function (item) {
                return item.code;
              }) : [],
              searchInfo: paramsData.searchInfo,
              idList: selectedRowKeys
            };
            _context2.next = 8;
            return pagelistByDeptAndName(params);
          case 8:
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
          case 14:
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
    type === 'selected' ? (_selectedTableRef$cur = selectedTableRef.current) === null || _selectedTableRef$cur === void 0 ? void 0 : _selectedTableRef$cur.reloadAndRest() : (_initTableRef$current = initTableRef.current) === null || _initTableRef$current === void 0 ? void 0 : _initTableRef$current.reloadAndRest();
  };
  //搜索条件选项点击事件
  var onOptionClick = function onOptionClick(e, name, type) {
    console.log('%c Line:133 🥝 type', 'color:#4fff4B', type);
    console.log('%c Line:104 🥑 e', 'color:#3f7cff', e);
    console.log('%c Line:104 🌮 name', 'color:#b03734', drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : drawerTableLayoutRef.current);
    if (name === 'deptName') {
      type == 'init' ? setOpenDept(true) : setOpenDeptSelected(true);
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
      var res, _res$response$dataLis, dataList, list;
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
            return pagelistByDeptAndName({
              currentPage: 1,
              pageSize: tableTotalSync.current,
              departmentCodeList: tableSearchParamsSync.current.deptName ? defaultCheckedItems.map(function (item) {
                return item.code;
              }) : [],
              searchInfo: tableSearchParamsSync.current.searchInfo
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
    console.log('%c Line:77 🍷--已选组件关闭了-   color:#7f2b82');
  };
  //打开已选组件回调
  var openSelectedComponent = function openSelectedComponent() {
    var _selectedTableRef$cur2;
    console.log('%c Line:77 🍷--已选组件已打开了-   color:#7f2b82');
    (_selectedTableRef$cur2 = selectedTableRef.current) === null || _selectedTableRef$cur2 === void 0 ? void 0 : _selectedTableRef$cur2.reload();
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
            _context4.next = 21;
            break;
          case 9:
            if (selectTableDataListSync.current.length) {
              _context4.next = 11;
              break;
            }
            return _context4.abrupt("return");
          case 11:
            if (!(selectedTableTotalSync.current > selectTableDataListSync.current.length)) {
              _context4.next = 20;
              break;
            }
            // 如果当前已选表格数据总条数 大于 当前表格第一页条数，请求接口拿到当前条件下的全部id
            selectedTableSearchParamsSync.current;
            // 移除全部，用当前最大数量当成pageSize查询接口
            _context4.next = 15;
            return pagelistByDeptAndName(_objectSpread(_objectSpread({}, selectedTableSearchParamsSync.current), {}, {
              currentPage: 1,
              pageSize: selectedTableTotalSync.current
            }));
          case 15:
            res = _context4.sent;
            _res$response$dataLis2 = res.response.dataList, dataList = _res$response$dataLis2 === void 0 ? [] : _res$response$dataLis2;
            tempList = dataList.map(function (c) {
              return c.id;
            }) || [];
            _context4.next = 21;
            break;
          case 20:
            tempList = selectTableDataListSync.current.map(function (item) {
              return item.id;
            });
          case 21:
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
          case 25:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function onRemoveSelected(_x4, _x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  // 选择部门
  var deptOk = function deptOk(selectNode, type) {
    console.log('已选取的数据', selectNode);
    var deptName = '';
    if (selectNode.length > 3) {
      deptName = "".concat(selectNode.slice(0, 3).map(function (item) {
        return item.title;
      }).join(','), "\u7B49").concat(selectNode.length, "\u4E2A\u90E8\u95E8");
    } else {
      deptName = selectNode.map(function (item) {
        return item.title;
      }).join(',');
    }
    if (type === 'selected') {
      var _drawerTableLayoutRef3;
      setDefaultCheckedItemsSelected(selectNode);
      checkedItemsSelectedSync.current = selectNode;
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef3 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef3 === void 0 ? void 0 : _drawerTableLayoutRef3.setSelectedTableFormFieldsValue({
        deptName: deptName
      });
    } else {
      var _drawerTableLayoutRef4;
      setDefaultCheckedItems(selectNode);
      drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef4 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef4 === void 0 ? void 0 : _drawerTableLayoutRef4.setTableFormFieldsValue({
        deptName: deptName
      });
    }
  };
  useEffect(function () {
    if (selectedPeople) {
      setSelectedRowKeys(selectedPeople.map(function (item) {
        return item.id;
      }));
      setSelectedRows(selectedPeople);
    }
  }, [selectedPeople]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerTableLayout, {
    ref: drawerTableLayoutRef,
    drawerProps: {
      width: 600,
      title: "\u9009\u62E9".concat(title),
      onClose: onClose,
      open: open,
      getContainer: document.getElementById('root') || document.body
    },
    selectedDrawerProps: {
      width: 600,
      title: "\u5DF2\u9009".concat(title)
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
        searchInputPlaceholder: "\u641C\u7D22".concat(title)
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
        searchOptions: searchOptions,
        searchInputPlaceholder: "\u641C\u7D22".concat(title)
      },
      tableNode: /*#__PURE__*/React.createElement(KhtDrawerTable, {
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
      })
    }
  }), /*#__PURE__*/React.createElement(SelectDepartment, {
    initData: defaultCheckedItems,
    onSubmit: function onSubmit(ids, nodes) {
      deptOk(nodes, 'init');
      setOpenDept(false);
    },
    open: openDept,
    onClose: function onClose() {
      setOpenDept(false);
    }
  }), /*#__PURE__*/React.createElement(SelectDepartment, {
    initData: defaultCheckedItemsSelected,
    onSubmit: function onSubmit(ids, nodes) {
      deptOk(nodes, 'selected');
      setOpenDeptSelected(false);
    },
    open: openDeptSelected,
    onClose: function onClose() {
      setOpenDeptSelected(false);
    }
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};