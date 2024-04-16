import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useMemo, useRef, useState, useImperativeHandle, createContext, useContext, useEffect } from 'react';
import "./index.css";
import Main from './components/main';
import DrawerProTable from '../drawer-pro-table';
import { FormItemComponent } from './components/form-item';
import { SelectFormComponent } from './components/select-form';
import { CascaderFormComponent } from './components/cascader-iterm';
import { InputForm } from './components/input-form';
import { useTableSelect } from './utils';
//布局组件的上下文
export var DrawerSearchProTableContext = /*#__PURE__*/createContext({});
export var useDrawerSearchProTable = function useDrawerSearchProTable() {
  return useContext(DrawerSearchProTableContext);
};
var DrawerSearchProTable = /*#__PURE__*/React.forwardRef(function DrawerSearchProTable(props, ref) {
  var _tableLayoutContainer2, _tableLayoutContainer15, _tableLayoutContainer16;
  var open = props.open,
    _props$title = props.title,
    title = _props$title === void 0 ? '标题' : _props$title,
    _props$selectDrawerTa = props.selectDrawerTableTitle,
    selectDrawerTableTitle = _props$selectDrawerTa === void 0 ? (props === null || props === void 0 ? void 0 : props.title) || '标题' : _props$selectDrawerTa,
    _props$width = props.width,
    width = _props$width === void 0 ? 640 : _props$width,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'readOnly' : _props$selectType,
    _props$operateFooterG = props.operateFooterGroup,
    operateFooterGroup = _props$operateFooterG === void 0 ? [] : _props$operateFooterG,
    _props$footer = props.footer,
    footer = _props$footer === void 0 ? null : _props$footer,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    _props$searchName = props.searchName,
    searchName = _props$searchName === void 0 ? 'name' : _props$searchName,
    _props$radioSelectNam = props.radioSelectName,
    radioSelectName = _props$radioSelectNam === void 0 ? 'name' : _props$radioSelectNam,
    _props$searchInputSta = props.searchInputState,
    searchInputState = _props$searchInputSta === void 0 ? true : _props$searchInputSta,
    _props$searchInputPla = props.searchInputPlaceholder,
    searchInputPlaceholder = _props$searchInputPla === void 0 ? '搜索' : _props$searchInputPla,
    _props$submitState = props.submitState,
    submitState = _props$submitState === void 0 ? true : _props$submitState,
    _props$selectedRowKey = props.selectedRowKeys,
    selectedRowKeys = _props$selectedRowKey === void 0 ? [] : _props$selectedRowKey,
    _props$manualRequest = props.manualRequest,
    manualRequest = _props$manualRequest === void 0 ? false : _props$manualRequest,
    titleGround = props.titleGround,
    searchForm = props.searchForm,
    _props$columns = props.columns,
    columns = _props$columns === void 0 ? [] : _props$columns,
    _props$selectTableCol = props.selectTableColumns,
    selectTableColumns = _props$selectTableCol === void 0 ? [] : _props$selectTableCol,
    _props$total = props.total,
    total = _props$total === void 0 ? 0 : _props$total,
    _props$selectedTotal = props.selectedTotal,
    selectedTotal = _props$selectedTotal === void 0 ? 0 : _props$selectedTotal,
    requestTable = props.requestTable,
    selectTableTitleGround = props.selectTableTitleGround,
    selectTableSearchForm = props.selectTableSearchForm,
    _props$selectTableOpe = props.selectTableOperateName,
    selectTableOperateName = _props$selectTableOpe === void 0 ? '删除' : _props$selectTableOpe,
    _props$drawerClassNam = props.drawerClassName,
    drawerClassName = _props$drawerClassNam === void 0 ? '' : _props$drawerClassNam,
    _props$selectedDrawer = props.selectedDrawerClassName,
    selectedDrawerClassName = _props$selectedDrawer === void 0 ? '' : _props$selectedDrawer,
    requestSelectedTable = props.requestSelectedTable,
    onClose = props.onClose,
    _onSearch = props.onSearch,
    onAllSelectedChange = props.onAllSelectedChange,
    onSelectedChange = props.onSelectedChange,
    onOpenSelectTable = props.onOpenSelectTable,
    onCloseSelectTable = props.onCloseSelectTable,
    onSubmit = props.onSubmit,
    _onSelectTableSearch = props.onSelectTableSearch,
    _onRemoveSelected = props.onRemoveSelected,
    _onOperateFooterButtonClick = props.onOperateFooterButtonClick,
    onSelectTextMouseEnter = props.onSelectTextMouseEnter,
    onSubmitState = props.onSubmitState,
    tableOnChange = props.tableOnChange,
    selectedTableOnChange = props.selectedTableOnChange,
    getRowDisabled = props.getRowDisabled,
    radioSelectNameNodeRender = props.radioSelectNameNodeRender;
  var actionRef = useRef();
  var initDrawerProTableRef = useRef();
  var selectedDrawerProTableRef = useRef();
  var selectedActionRef = useRef();
  var tableLayoutContainerRef = useRef();
  //获取表格top值
  var tableLayoutScrollTop = useMemo(function () {
    var _tableLayoutContainer;
    return tableLayoutContainerRef === null || tableLayoutContainerRef === void 0 ? void 0 : (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.tableLayoutTop;
  }, [tableLayoutContainerRef === null || tableLayoutContainerRef === void 0 ? void 0 : (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.tableLayoutTop]);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    removeSelectedState = _useState2[0],
    setRemoveSelectedState = _useState2[1]; //已选组件的删除清空回调来获取最新的表格布局的数据
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    initSelectedRowKeys = _useState4[0],
    setInitSelectedRowKeys = _useState4[1]; //第一层初始化数据的已选数据总集合
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    initTableCurrentPageKeys = _useState6[0],
    setInitTableCurrentPageKeys = _useState6[1]; //第一层表格的当前页源数据
  //   const [initTableCurrentSelectedKeys, setInitTableCurrentSelectedKeys] = useState<[]>([]) //第一层抽屉当前页已选数据
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedSelectTableRowKeys = _useState8[0],
    setSelectedSelectTableRowKeys = _useState8[1]; //已选组件中的已选
  var _useState9 = useState({}),
    _useState10 = _slicedToArray(_useState9, 2),
    allSelectTableRowKeys = _useState10[0],
    setAllSelectTableRowKeys = _useState10[1]; //触发全选的所有数据集合,以条件参数为key存储
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    initTableSelectedRows = _useState12[0],
    setInitTableSelectedRows = _useState12[1]; //当前表格已选对象数组（单选时用）
  var _useTableSelect = useTableSelect({
      initSelectedRowKeys: initSelectedRowKeys,
      setInitSelectedRowKeys: setInitSelectedRowKeys,
      allSelectTableRowKeys: allSelectTableRowKeys,
      setAllSelectTableRowKeys: setAllSelectTableRowKeys
    }),
    setAllSelectRowKeys = _useTableSelect.setAllSelectRowKeys,
    cancelSingleSelectKey = _useTableSelect.cancelSingleSelectKey,
    setInitTableSelectedKeysData = _useTableSelect.setInitTableSelectedKeysData;
  var close = function close() {
    setInitSelectedRowKeys([]); //清空已选ids
    setInitTableSelectedRows([]); //清空已选对象数组
    setAllSelectTableRowKeys({}); //清空已选的全选操作
    setSelectedSelectTableRowKeys([]); //清空已选组件中的已选
    setInitTableCurrentPageKeys([]); //清空已选组件中的已选
    onClose && onClose();
  };
  //第一层抽屉table组件request
  var initTableRequest = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var result, currentPageKeys;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return requestTable && requestTable(data);
          case 2:
            _context.t0 = _context.sent;
            if (_context.t0) {
              _context.next = 5;
              break;
            }
            _context.t0 = {};
          case 5:
            result = _context.t0;
            if (result === null || result === void 0 ? void 0 : result.data) {
              //设置当前页的keys
              if (['checkbox', 'operate'].includes(selectType)) {
                currentPageKeys = ((result === null || result === void 0 ? void 0 : result.data) || []).map(function (c) {
                  return c[rowKey];
                }); //存储源数据
                setInitTableCurrentPageKeys(currentPageKeys || []);
              }
            }
            return _context.abrupt("return", result);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function initTableRequest(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  //表格的y轴滚动数值
  var initTableScrollY = useMemo(function () {
    var obj = {};
    obj['readOnly'] = 150;
    obj['operate'] = operateFooterGroup.length > 0 ? initSelectedRowKeys.length > 0 ? 200 : 150 : 160;
    obj['radio'] = initTableSelectedRows.length > 0 ? 200 : 150;
    return obj[selectType] || 200;
  }, [open, selectType, operateFooterGroup, initTableSelectedRows, initSelectedRowKeys, removeSelectedState]);
  //已选表格的字段列表，没有自定义传入默认取第一层表格的
  var selectTableColumnsData = useMemo(function () {
    return selectTableColumns.length > 0 ? selectTableColumns : columns;
  }, [columns, selectTableColumns]);
  useEffect(function () {
    //已选数据初始化显示
    var selectKeyList = selectedRowKeys;
    if (selectType === 'radio') {
      //已选数据为空时清空已选对象数组(单选)
      var keyList = (selectKeyList || []).map(function (c) {
        return c[rowKey];
      });
      setInitSelectedRowKeys(keyList);
      setInitTableSelectedRows(selectKeyList);
    } else {
      setInitSelectedRowKeys(selectKeyList);
    }
  }, [open]);
  useEffect(function () {
    //已选数据集合变化
    if (initSelectedRowKeys.length === 0) {
      var _tableLayoutContainer3, _tableLayoutContainer4;
      (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.setIndeterminate(false);
      (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.setCheckAll(false);
    }
    onSelectedChange && onSelectedChange(initSelectedRowKeys);
  }, [initSelectedRowKeys]);
  //外部调用方法
  useImperativeHandle(ref, function () {
    var _tableLayoutContainer5, _tableLayoutContainer7;
    return {
      setAllSelectRowKeys: setAllSelectRowKeys,
      allSelectTableRowKeys: allSelectTableRowKeys,
      setAllSelectTableRowKeys: setAllSelectTableRowKeys,
      submitState: (_tableLayoutContainer5 = tableLayoutContainerRef.current) === null || _tableLayoutContainer5 === void 0 ? void 0 : _tableLayoutContainer5.submitState,
      setSubmitState: function setSubmitState(data) {
        var _tableLayoutContainer6;
        return (_tableLayoutContainer6 = tableLayoutContainerRef.current) === null || _tableLayoutContainer6 === void 0 ? void 0 : _tableLayoutContainer6.setSubmitState(data);
      },
      initSelectedRowKeys: initSelectedRowKeys,
      setInitSelectedRowKeys: setInitSelectedRowKeys,
      initTableSelectedRows: initTableSelectedRows,
      //初始化的选择组件
      initTableReload: function initTableReload() {
        var _actionRef$current;
        return (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.reload();
      },
      setInitTableCurrentPage: function setInitTableCurrentPage(data) {
        var _initDrawerProTableRe;
        return (_initDrawerProTableRe = initDrawerProTableRef.current) === null || _initDrawerProTableRe === void 0 ? void 0 : _initDrawerProTableRe.setCurrentPage(data);
      },
      setInitTableCurrentPageSize: function setInitTableCurrentPageSize(data) {
        var _initDrawerProTableRe2;
        return (_initDrawerProTableRe2 = initDrawerProTableRef.current) === null || _initDrawerProTableRe2 === void 0 ? void 0 : _initDrawerProTableRe2.setPageSize(data);
      },
      //已选组件
      selectedTableReload: function selectedTableReload() {
        var _selectedActionRef$cu;
        return (_selectedActionRef$cu = selectedActionRef.current) === null || _selectedActionRef$cu === void 0 ? void 0 : _selectedActionRef$cu.reload();
      },
      setSelectedTableCurrentPage: function setSelectedTableCurrentPage(data) {
        var _selectedDrawerProTab;
        return (_selectedDrawerProTab = selectedDrawerProTableRef.current) === null || _selectedDrawerProTab === void 0 ? void 0 : _selectedDrawerProTab.setCurrentPage(data);
      },
      setSelectedTableCurrentPageSize: function setSelectedTableCurrentPageSize(data) {
        var _selectedDrawerProTab2;
        return (_selectedDrawerProTab2 = selectedDrawerProTableRef.current) === null || _selectedDrawerProTab2 === void 0 ? void 0 : _selectedDrawerProTab2.setPageSize(data);
      },
      //表格的top
      tableLayoutTop: (_tableLayoutContainer7 = tableLayoutContainerRef.current) === null || _tableLayoutContainer7 === void 0 ? void 0 : _tableLayoutContainer7.tableLayoutTop,
      setInitTableFieldsValue: function setInitTableFieldsValue(data) {
        var _tableLayoutContainer8;
        return (_tableLayoutContainer8 = tableLayoutContainerRef.current) === null || _tableLayoutContainer8 === void 0 ? void 0 : _tableLayoutContainer8.setInitTableFieldsValue(data);
      },
      getInitTableFieldsValue: function getInitTableFieldsValue() {
        var _tableLayoutContainer9;
        return (_tableLayoutContainer9 = tableLayoutContainerRef.current) === null || _tableLayoutContainer9 === void 0 ? void 0 : _tableLayoutContainer9.getInitTableFieldsValue();
      },
      resetInitTableFields: function resetInitTableFields() {
        var _tableLayoutContainer10;
        return (_tableLayoutContainer10 = tableLayoutContainerRef.current) === null || _tableLayoutContainer10 === void 0 ? void 0 : _tableLayoutContainer10.resetInitTableFields();
      },
      resetSelectTableFields: function resetSelectTableFields() {
        var _tableLayoutContainer11;
        return (_tableLayoutContainer11 = tableLayoutContainerRef.current) === null || _tableLayoutContainer11 === void 0 ? void 0 : _tableLayoutContainer11.resetSelectTableFields();
      },
      getSelectTableFieldsValue: function getSelectTableFieldsValue() {
        var _tableLayoutContainer12;
        return (_tableLayoutContainer12 = tableLayoutContainerRef.current) === null || _tableLayoutContainer12 === void 0 ? void 0 : _tableLayoutContainer12.getSelectTableFieldsValue();
      },
      setSelectTableFieldsValue: function setSelectTableFieldsValue(data) {
        var _tableLayoutContainer13;
        return (_tableLayoutContainer13 = tableLayoutContainerRef.current) === null || _tableLayoutContainer13 === void 0 ? void 0 : _tableLayoutContainer13.setSelectTableFieldsValue(data);
      },
      setCheckAll: function setCheckAll(val) {
        var _tableLayoutContainer14;
        return (_tableLayoutContainer14 = tableLayoutContainerRef.current) === null || _tableLayoutContainer14 === void 0 ? void 0 : _tableLayoutContainer14.setCheckAll(val);
      }
    };
  }, [open, allSelectTableRowKeys, initSelectedRowKeys, initTableSelectedRows, initDrawerProTableRef, selectedDrawerProTableRef, (_tableLayoutContainer15 = tableLayoutContainerRef.current) === null || _tableLayoutContainer15 === void 0 ? void 0 : _tableLayoutContainer15.submitState, (_tableLayoutContainer16 = tableLayoutContainerRef.current) === null || _tableLayoutContainer16 === void 0 ? void 0 : _tableLayoutContainer16.tableLayoutTop]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerSearchProTableContext.Provider, {
    value: {
      initTableScrollY: initTableScrollY,
      setInitSelectedRowKeys: setInitSelectedRowKeys,
      initSelectedRowKeys: initSelectedRowKeys,
      setSelectedSelectTableRowKeys: setSelectedSelectTableRowKeys,
      selectedSelectTableRowKeys: selectedSelectTableRowKeys,
      selectedActionRef: selectedActionRef,
      actionRef: actionRef,
      initTableCurrentPageKeys: initTableCurrentPageKeys,
      allSelectTableRowKeys: allSelectTableRowKeys,
      setAllSelectTableRowKeys: setAllSelectTableRowKeys,
      initTableSelectedRows: initTableSelectedRows,
      setInitTableSelectedRows: setInitTableSelectedRows,
      total: total
    }
  }, /*#__PURE__*/React.createElement(Main, {
    title: title,
    selectDrawerTableTitle: selectDrawerTableTitle,
    open: open,
    footer: footer,
    submitState: submitState,
    width: width,
    ref: tableLayoutContainerRef,
    selectType: selectType,
    searchName: searchName,
    radioSelectName: radioSelectName,
    searchInputState: searchInputState,
    searchInputPlaceholder: searchInputPlaceholder,
    operateFooterGroup: operateFooterGroup,
    allSelectState: ['checkbox', 'radio', 'operate'].includes(selectType),
    selectedRowKeys: initSelectedRowKeys,
    titleGround: titleGround,
    searchForm: searchForm,
    selectTableTitleGround: selectTableTitleGround,
    selectTableSearchForm: selectTableSearchForm,
    selectTableOperateName: selectTableOperateName,
    drawerClassName: drawerClassName,
    selectedDrawerClassName: selectedDrawerClassName,
    onClose: close,
    onSubmitState: onSubmitState,
    onSelectTextMouseEnter: onSelectTextMouseEnter,
    onSearch: function onSearch(data) {
      _onSearch && _onSearch(data);
    },
    onFinish: function onFinish(data) {
      onSubmit && onSubmit(data);
    },
    allSelectedChange: function () {
      var _allSelectedChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(checked) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return onAllSelectedChange && onAllSelectedChange(checked);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function allSelectedChange(_x2) {
        return _allSelectedChange.apply(this, arguments);
      }
      return allSelectedChange;
    }(),
    openSelectTable: function openSelectTable(data) {
      onOpenSelectTable && onOpenSelectTable(data);
    },
    closeSelectTable: function closeSelectTable() {
      //关闭已选组件时重置已选数据
      setSelectedSelectTableRowKeys([]);
      onCloseSelectTable && onCloseSelectTable();
    },
    onSelectTableSearch: function onSelectTableSearch(data) {
      _onSelectTableSearch && _onSelectTableSearch(data);
    },
    onRemoveSelected: function onRemoveSelected(type, data) {
      var _tableLayoutContainer17, _tableLayoutContainer18;
      // 设置全选状态
      (_tableLayoutContainer17 = tableLayoutContainerRef.current) === null || _tableLayoutContainer17 === void 0 ? void 0 : _tableLayoutContainer17.setCheckAll(false);
      (_tableLayoutContainer18 = tableLayoutContainerRef.current) === null || _tableLayoutContainer18 === void 0 ? void 0 : _tableLayoutContainer18.setIndeterminate(type == '1' ? false : true);
      _onRemoveSelected && _onRemoveSelected(type, data);
      setRemoveSelectedState(!removeSelectedState);
    },
    onOperateFooterButtonClick: function onOperateFooterButtonClick(key, type, selectedRowKeys) {
      _onOperateFooterButtonClick && _onOperateFooterButtonClick(key, type, selectedRowKeys);
    },
    selectTableNode: ['operate', 'checkbox'].includes(selectType) && /*#__PURE__*/React.createElement(DrawerProTable, {
      manualRequest: manualRequest,
      scroll: {
        y: "calc(100vh - ".concat(tableLayoutScrollTop, "px - 150px)")
      },
      columns: selectTableColumnsData,
      total: selectedTotal,
      ref: selectedDrawerProTableRef,
      actionRef: selectedActionRef,
      rowKey: rowKey,
      requestTable: function () {
        var _requestTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return requestSelectedTable && requestSelectedTable(_objectSpread(_objectSpread({}, data), {}, {
                  initSelectedRowKeys: initSelectedRowKeys
                }));
              case 2:
                return _context3.abrupt("return", _context3.sent);
              case 3:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        function requestTable(_x3) {
          return _requestTable.apply(this, arguments);
        }
        return requestTable;
      }(),
      rowSelection: {
        type: selectType,
        defaultSelectedRowKeys: selectedSelectTableRowKeys,
        selectedRowKeys: selectedSelectTableRowKeys,
        onChange: function onChange(selectedRowKeys, selectedRows, info) {
          setSelectedSelectTableRowKeys(selectedRowKeys);
        }
      },
      onChange: selectedTableOnChange
    }),
    radioSelectNameNodeRender: radioSelectNameNodeRender
  }, /*#__PURE__*/React.createElement(DrawerProTable, {
    manualRequest: manualRequest,
    scroll: {
      y: "calc(100vh - ".concat(tableLayoutScrollTop + initTableScrollY + (footer && (selectType === 'readOnly' ? 50 : selectType === 'operate' && initSelectedRowKeys.length > 0 ? 50 : 0) || 0), "px)")
    },
    columns: columns,
    total: total,
    ref: initDrawerProTableRef,
    actionRef: actionRef,
    requestTable: function () {
      var _requestTable2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return initTableRequest(_objectSpread({}, data));
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function requestTable(_x4) {
        return _requestTable2.apply(this, arguments);
      }
      return requestTable;
    }(),
    rowKey: rowKey,
    rowSelection: ['checkbox', 'operate', 'radio'].includes(selectType) && {
      type: selectType,
      defaultSelectedRowKeys: initSelectedRowKeys || [],
      selectedRowKeys: initSelectedRowKeys || [],
      onChange: function onChange(selectedRowKeys, selectedRows) {
        if (selectType === 'radio') {
          setInitTableSelectedRows(selectedRows);
          setInitSelectedRowKeys(selectedRowKeys);
        }
        if (['checkbox', 'operate'].includes(selectType)) {
          var _tableLayoutContainer19, _tableLayoutContainer20;
          (_tableLayoutContainer19 = tableLayoutContainerRef.current) === null || _tableLayoutContainer19 === void 0 ? void 0 : _tableLayoutContainer19.setCheckAll(false);
          (_tableLayoutContainer20 = tableLayoutContainerRef.current) === null || _tableLayoutContainer20 === void 0 ? void 0 : _tableLayoutContainer20.setIndeterminate(true);
          setInitTableSelectedKeysData(initSelectedRowKeys, selectedRowKeys, initTableCurrentPageKeys);
        }
      },
      getCheckboxProps: function getCheckboxProps(record) {
        return {
          disabled: getRowDisabled && getRowDisabled(record)
        };
      }
    } || false,
    onRow: function onRow(record) {
      return {
        onChange: function onChange(_ref2) {
          var target = _ref2.target;
          var checked = target.checked;
          if (['checkbox', 'operate'].includes(selectType)) {
            if (!checked) {
              //取消选中
              cancelSingleSelectKey(record[rowKey]);
            }
          }
        },
        onClick: function onClick(_ref3) {
          var target = _ref3.target;
          // 单选 整行点击切换选中
          var disabled = getRowDisabled && getRowDisabled(record);
          if (selectType === 'radio' && !disabled) {
            setInitSelectedRowKeys([record[rowKey]]);
            setInitTableSelectedRows([record]);
          }
        }
      };
    },
    onChange: tableOnChange
  }))));
});
DrawerSearchProTable.FormItem = FormItemComponent;
DrawerSearchProTable.SelectForm = SelectFormComponent;
DrawerSearchProTable.CascaderForm = CascaderFormComponent;
DrawerSearchProTable.InputForm = InputForm;
export default DrawerSearchProTable;
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Ref = function Ref(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Component = function Component(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};