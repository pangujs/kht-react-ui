import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { createContext, useContext, useState, useRef, useEffect, useImperativeHandle, useMemo } from 'react';
import { Drawer, Button, Dropdown, Checkbox, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BaseForm } from './base-form';
import { useDrawerSearchProTable } from '..';
import _ from 'lodash';
//布局组件的上下文
export var DrawerSearchProTableMainContext = /*#__PURE__*/createContext({});
export var useDrawerSearchProTableMain = function useDrawerSearchProTableMain() {
  return useContext(DrawerSearchProTableMainContext);
};
// 抽屉搜索表格组件
function Main(props, ref) {
  var open = props.open,
    title = props.title,
    selectDrawerTableTitle = props.selectDrawerTableTitle,
    _props$width = props.width,
    width = _props$width === void 0 ? 600 : _props$width,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'checkbox' : _props$selectType,
    titleGround = props.titleGround,
    searchForm = props.searchForm,
    _props$allSelectState = props.allSelectState,
    allSelectState = _props$allSelectState === void 0 ? true : _props$allSelectState,
    _props$selectedRowKey = props.selectedRowKeys,
    selectedRowKeys = _props$selectedRowKey === void 0 ? [] : _props$selectedRowKey,
    _props$searchName = props.searchName,
    searchName = _props$searchName === void 0 ? 'name' : _props$searchName,
    _props$radioSelectNam = props.radioSelectName,
    radioSelectName = _props$radioSelectNam === void 0 ? 'name' : _props$radioSelectNam,
    _props$selectTableOpe = props.selectTableOperateName,
    selectTableOperateName = _props$selectTableOpe === void 0 ? '删除' : _props$selectTableOpe,
    _props$searchInputSta = props.searchInputState,
    searchInputState = _props$searchInputSta === void 0 ? true : _props$searchInputSta,
    _props$searchInputPla = props.searchInputPlaceholder,
    searchInputPlaceholder = _props$searchInputPla === void 0 ? '搜索' : _props$searchInputPla,
    _props$submitState = props.submitState,
    submitState = _props$submitState === void 0 ? true : _props$submitState,
    _props$operateFooterG = props.operateFooterGroup,
    operateFooterGroup = _props$operateFooterG === void 0 ? [] : _props$operateFooterG,
    _props$footer = props.footer,
    footer = _props$footer === void 0 ? null : _props$footer,
    _props$drawerClassNam = props.drawerClassName,
    drawerClassName = _props$drawerClassNam === void 0 ? '' : _props$drawerClassNam,
    _props$selectedDrawer = props.selectedDrawerClassName,
    selectedDrawerClassName = _props$selectedDrawer === void 0 ? '' : _props$selectedDrawer,
    onClose = props.onClose,
    onFinish = props.onFinish,
    onSearch = props.onSearch,
    onSubmitState = props.onSubmitState,
    allSelectedChange = props.allSelectedChange,
    openSelectTable = props.openSelectTable,
    closeSelectTable = props.closeSelectTable,
    selectTableTitleGround = props.selectTableTitleGround,
    selectTableSearchForm = props.selectTableSearchForm,
    onSelectTableSearch = props.onSelectTableSearch,
    onRemoveSelected = props.onRemoveSelected,
    onOperateFooterButtonClick = props.onOperateFooterButtonClick,
    onSelectTextMouseEnter = props.onSelectTextMouseEnter,
    radioSelectNameNodeRender = props.radioSelectNameNodeRender;
  var _useDrawerSearchProTa = useDrawerSearchProTable(),
    initTableScrollY = _useDrawerSearchProTa.initTableScrollY,
    setInitSelectedRowKeys = _useDrawerSearchProTa.setInitSelectedRowKeys,
    initSelectedRowKeys = _useDrawerSearchProTa.initSelectedRowKeys,
    selectedActionRef = _useDrawerSearchProTa.selectedActionRef,
    setSelectedSelectTableRowKeys = _useDrawerSearchProTa.setSelectedSelectTableRowKeys,
    selectedSelectTableRowKeys = _useDrawerSearchProTa.selectedSelectTableRowKeys,
    initTableSelectedRows = _useDrawerSearchProTa.initTableSelectedRows,
    setInitTableSelectedRows = _useDrawerSearchProTa.setInitTableSelectedRows,
    total = _useDrawerSearchProTa.total;
  var initTableFormRef = useRef();
  var selectTableFormRef = useRef();
  var tableLayoutContainerRef = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    submitDisable = _useState2[0],
    setSubmitDisable = _useState2[1]; //提交按钮禁用
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    indeterminate = _useState4[0],
    _setIndeterminate = _useState4[1]; //全选半选
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    checkAll = _useState6[0],
    setCheckAll = _useState6[1]; //全选
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openSelectTableState = _useState8[0],
    setOpenSelectTableState = _useState8[1]; //已选组件打开状态
  var _useState9 = useState(150),
    _useState10 = _slicedToArray(_useState9, 2),
    tableLayoutTop = _useState10[0],
    setTableLayoutTop = _useState10[1]; //表格top值
  // 关闭当前组件
  var close = function close() {
    var _initTableFormRef$cur;
    (_initTableFormRef$cur = initTableFormRef.current) === null || _initTableFormRef$cur === void 0 ? void 0 : _initTableFormRef$cur.resetFields();
    setCheckAll(false);
    onClose();
  };
  // 搜索选项值变化回调
  var onChange = function onChange() {
    var _initTableFormRef$cur2;
    var data = {};
    var formData = (_initTableFormRef$cur2 = initTableFormRef.current) === null || _initTableFormRef$cur2 === void 0 ? void 0 : _initTableFormRef$cur2.getFieldsValue();
    //过滤undefined值的返回
    Object.keys(formData).forEach(function (key) {
      if (typeof formData[key] !== 'undefined') {
        data[key] = formData[key];
      }
    });
    onSearch && onSearch(data);
  };
  // 关闭已选组件
  var selectTableClose = function selectTableClose() {
    var _selectTableFormRef$c;
    //清除条件
    (_selectTableFormRef$c = selectTableFormRef.current) === null || _selectTableFormRef$c === void 0 ? void 0 : _selectTableFormRef$c.resetFields();
    //清除已选
    setSelectedSelectTableRowKeys([]);
    setOpenSelectTableState(false);
    closeSelectTable && closeSelectTable();
  };
  // 搜索选项值变化回调
  var onSelectTableChange = function onSelectTableChange() {
    var data = {};
    var formData = selectTableFormRef.current.getFieldsValue();
    //过滤undefined值的返回
    Object.keys(formData).forEach(function (key) {
      if (typeof formData[key] !== 'undefined') {
        data[key] = formData[key];
      }
    });
    onSelectTableSearch && onSelectTableSearch(data);
  };
  //全选
  var selectedAllChange = function selectedAllChange(_ref) {
    var target = _ref.target;
    var checked = target.checked;
    _setIndeterminate(false);
    setCheckAll(checked);
    allSelectedChange && allSelectedChange(checked);
  };
  //打开已选组件
  var openSelect = function openSelect() {
    openSelectTable && openSelectTable(selectedRowKeys);
    setOpenSelectTableState(true);
  };
  //移除等操作
  var deleteOperate = function deleteOperate(type) {
    if (['checkbox', 'operate'].includes(selectType)) {
      //多选组件时，组件内操作已选数据
      if ((selectedSelectTableRowKeys === null || selectedSelectTableRowKeys === void 0 ? void 0 : selectedSelectTableRowKeys.length) === 0 && type !== '1') {
        return message.warning('请先选择要处理的数据');
      }
      if (type === '1') {
        //清空已选
        setInitSelectedRowKeys([]);
        selectTableClose();
        setCheckAll(false);
      } else {
        var _selectedActionRef$cu;
        //部分删除时选差集
        var list = _.difference(initSelectedRowKeys, selectedSelectTableRowKeys);
        setInitSelectedRowKeys(list);
        (list === null || list === void 0 ? void 0 : list.length) === 0 && selectTableClose();
        setSelectedSelectTableRowKeys([]);
        selectedActionRef && (selectedActionRef === null || selectedActionRef === void 0 ? void 0 : (_selectedActionRef$cu = selectedActionRef.current) === null || _selectedActionRef$cu === void 0 ? void 0 : _selectedActionRef$cu.reload());
      }
    }
    //删除回调，备用
    onRemoveSelected && onRemoveSelected(type, selectedRowKeys);
  };
  var menuClick = function menuClick(_ref2, type) {
    var key = _ref2.key;
    //多选、底部操作组时有已选组件时内部删除
    ['checkbox', 'operate'].includes(selectType) && type === 'selectedTable' && deleteOperate(key);
    //底部操作组,非内部已选组件的删除才会
    selectType === 'operate' && type !== 'selectedTable' && onOperateFooterButtonClick && onOperateFooterButtonClick(key, type, selectedRowKeys);
  };
  //表格高度
  var tableLayoutContainerStyle = useMemo(function () {
    var style = {};
    var bottom = tableLayoutTop + initTableScrollY + (total > 20 ? 52 : 54);
    style['height'] = "calc(100vh - ".concat(bottom, "px)");
    return style;
  }, [open, tableLayoutTop, initTableScrollY, total]);
  //抽屉已选操作栏显示状态
  var drawerSelectState = useMemo(function () {
    var flag = allSelectState && selectType === 'checkbox' || allSelectState && selectType === 'operate' && selectedRowKeys.length > 0 || allSelectState && selectType === 'radio' && selectedRowKeys.length > 0;
    return flag;
  }, [open, selectType, tableLayoutTop, initTableScrollY, total, initSelectedRowKeys]);
  useEffect(function () {
    //获table的top
    if (open) {
      var _tableLayoutContainer;
      var tableLayoutContainer = tableLayoutContainerRef === null || tableLayoutContainerRef === void 0 ? void 0 : (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.getBoundingClientRect();
      setTableLayoutTop((tableLayoutContainer === null || tableLayoutContainer === void 0 ? void 0 : tableLayoutContainer.top) || 150);
    }
  }, [open]);
  useEffect(function () {
    if (open) {
      //设置提交按钮的状态
      setSubmitDisable(submitState);
    }
  }, [open, submitState]);
  //抽屉脚操作按钮
  var Footer = function Footer(props) {
    var _ref3 = props || {},
      _ref3$operateFooterGr = _ref3.operateFooterGroup,
      operateFooterGroup = _ref3$operateFooterGr === void 0 ? [] : _ref3$operateFooterGr;
    return /*#__PURE__*/React.createElement(React.Fragment, null, useMemo(function () {
      return (operateFooterGroup || []).map(function (c, index) {
        var items = c.menu || [];
        return /*#__PURE__*/React.createElement(Dropdown, {
          getPopupContainer: function getPopupContainer() {
            return document.querySelector('#root');
          },
          overlayStyle: {
            zIndex: 9999,
            position: 'fixed'
          },
          overlayClassName: 'drawer-search-pro-table-menu-options',
          key: c.name + index,
          menu: {
            items: items,
            onClick: function onClick(e) {
              return menuClick(e, c.type);
            }
          },
          placement: "top"
        }, /*#__PURE__*/React.createElement(Button, {
          style: {
            borderRadius: 4,
            backgroundColor: 'rgba(241, 241, 241, 1)',
            borderColor: 'transparent'
          }
        }, c.name));
      });
    }, [operateFooterGroup]));
  };
  //第一个抽屉的脚
  var initFooter = ['checkbox', 'radio'].includes(selectType) && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    style: {
      borderColor: 'transparent',
      borderRadius: 4,
      marginRight: 10,
      backgroundColor: '#F1F1F1'
    },
    onClick: close
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    style: {
      borderRadius: 4
    },
    disabled: !submitDisable,
    type: 'primary',
    onClick: function onClick() {
      return submitDisable && onFinish && onFinish(selectedRowKeys);
    }
  }, "\u786E\u5B9A")) || selectType === 'operate' && operateFooterGroup && operateFooterGroup.length > 0 && /*#__PURE__*/React.createElement(Footer, {
    operateFooterGroup: operateFooterGroup
  }) || false || false;
  //外部调用方法
  useImperativeHandle(ref, function () {
    return {
      submitState: submitDisable,
      setSubmitState: function setSubmitState(data) {
        //设置提交按钮状态
        setSubmitDisable(data);
        onSubmitState && onSubmitState(data);
      },
      setIndeterminate: function setIndeterminate(checked) {
        //设置全选
        _setIndeterminate(checked);
      },
      setCheckAll: setCheckAll,
      tableLayoutTop: allSelectState ? tableLayoutTop : tableLayoutTop - 60,
      setInitTableFieldsValue: function setInitTableFieldsValue(data) {
        var _initTableFormRef$cur3;
        return (_initTableFormRef$cur3 = initTableFormRef.current) === null || _initTableFormRef$cur3 === void 0 ? void 0 : _initTableFormRef$cur3.setFieldsValue(data);
      },
      resetInitTableFields: function resetInitTableFields() {
        var _initTableFormRef$cur4;
        return (_initTableFormRef$cur4 = initTableFormRef.current) === null || _initTableFormRef$cur4 === void 0 ? void 0 : _initTableFormRef$cur4.resetFields();
      },
      resetSelectTableFields: function resetSelectTableFields() {
        var _selectTableFormRef$c2;
        return (_selectTableFormRef$c2 = selectTableFormRef.current) === null || _selectTableFormRef$c2 === void 0 ? void 0 : _selectTableFormRef$c2.resetFields();
      },
      getInitTableFieldsValue: function getInitTableFieldsValue() {
        var _initTableFormRef$cur5;
        return (_initTableFormRef$cur5 = initTableFormRef.current) === null || _initTableFormRef$cur5 === void 0 ? void 0 : _initTableFormRef$cur5.getFieldsValue();
      },
      setSelectTableFieldsValue: function setSelectTableFieldsValue(data) {
        var _selectTableFormRef$c3;
        return (_selectTableFormRef$c3 = selectTableFormRef.current) === null || _selectTableFormRef$c3 === void 0 ? void 0 : _selectTableFormRef$c3.setFieldsValue(data);
      },
      getSelectTableFieldsValue: function getSelectTableFieldsValue() {
        var _selectTableFormRef$c4;
        return (_selectTableFormRef$c4 = selectTableFormRef.current) === null || _selectTableFormRef$c4 === void 0 ? void 0 : _selectTableFormRef$c4.getFieldsValue();
      }
    };
  }, [submitDisable, open, allSelectState, tableLayoutTop]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Drawer, {
    className: drawerSelectState ? "drawer-search-pro-table all-selected ".concat(drawerClassName) : "drawer-search-pro-table ".concat(drawerClassName),
    getContainer: document.querySelector('#root'),
    open: open,
    onClose: close,
    title: title,
    destroyOnClose: true,
    bodyStyle: (selectType === 'radio' && !titleGround && searchForm || !titleGround && searchForm) && {
      paddingTop: 0
    } || {},
    footerStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    width: width,
    footer: footer || initFooter
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-container"
  }, titleGround && /*#__PURE__*/React.createElement("div", {
    className: "title-ground",
    style: !searchForm && {
      marginBottom: 16
    } || {}
  }, titleGround), searchForm && /*#__PURE__*/React.createElement(BaseForm, {
    ref: initTableFormRef,
    searchName: searchName,
    searchInputState: searchInputState,
    searchInputPlaceholder: searchInputPlaceholder,
    onChange: onChange
  }, /*#__PURE__*/React.createElement(DrawerSearchProTableMainContext.Provider, {
    value: {
      onChange: onChange
    }
  }, searchForm))), /*#__PURE__*/React.createElement("div", {
    ref: tableLayoutContainerRef,
    className: "table-layout-container",
    style: tableLayoutContainerStyle
  }, /*#__PURE__*/React.createElement(DrawerSearchProTableMainContext.Provider, {
    value: {
      onChange: onChange
    }
  }, props.children)), drawerSelectState && /*#__PURE__*/React.createElement("div", {
    style: {
      width: width
    },
    className: "selected-all"
  }, selectType === 'checkbox' && /*#__PURE__*/React.createElement(Checkbox, {
    indeterminate: indeterminate,
    onChange: function onChange(val) {
      return selectedAllChange(val);
    },
    checked: checkAll
  }, "\u5168\u9009"), selectedRowKeys.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: selectType === 'radio' && 'radio-ground' || ''
  }, /*#__PURE__*/React.createElement("span", null, selectType === 'checkbox' && '，', "\u5DF2\u9009\uFF1A"), ['checkbox', 'operate'].includes(selectType) && /*#__PURE__*/React.createElement("span", {
    onClick: openSelect,
    style: {
      color: '#0178ff',
      cursor: 'pointer',
      marginLeft: 6
    }
  }, selectedRowKeys.length), selectType === 'radio' && /*#__PURE__*/React.createElement("span", {
    className: "selected-radio",
    style: {
      marginLeft: 6
    },
    onMouseEnter: function onMouseEnter(e) {
      var target = e.target;
      onSelectTextMouseEnter && onSelectTextMouseEnter(target && (target === null || target === void 0 ? void 0 : target.getBoundingClientRect()));
    }
  }, initTableSelectedRows.length > 0 ? radioSelectNameNodeRender ? radioSelectNameNodeRender(initTableSelectedRows[0]) : initTableSelectedRows[0][radioSelectName] : '', /*#__PURE__*/React.createElement(CloseOutlined, {
    style: {
      color: 'rgb(187,187,187)',
      fontSize: 16,
      paddingLeft: 20,
      verticalAlign: -4
      // position: 'absolute',
      // right: 0,
      // top: 'calc(50% - 8px)',
    },
    onClick: function onClick() {
      //删除
      setInitTableSelectedRows([]);
      setInitSelectedRowKeys([]);
    }
  })))), openSelectTableState && /*#__PURE__*/React.createElement(Drawer, {
    className: "drawer-search-pro-table ".concat(selectedDrawerClassName),
    getContainer: document.querySelector('#root'),
    open: openSelectTableState,
    onClose: selectTableClose,
    title: selectDrawerTableTitle,
    destroyOnClose: true,
    bodyStyle: !titleGround && selectTableSearchForm && {
      paddingTop: 0
    } || {},
    footerStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    width: width,
    footer: /*#__PURE__*/React.createElement(Footer, {
      operateFooterGroup: [{
        name: selectTableOperateName,
        type: 'selectedTable',
        menu: [{
          label: "".concat(selectTableOperateName, "\u9009\u4E2D"),
          key: '2'
        }, {
          label: "".concat(selectTableOperateName, "\u5168\u90E8"),
          key: '1'
        }]
      }]
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-container"
  }, selectTableTitleGround && /*#__PURE__*/React.createElement("div", {
    className: "title-ground"
  }, selectTableTitleGround), selectTableSearchForm && /*#__PURE__*/React.createElement(BaseForm, {
    ref: selectTableFormRef,
    searchName: searchName,
    searchInputState: searchInputState,
    onChange: onSelectTableChange
  }, /*#__PURE__*/React.createElement(DrawerSearchProTableMainContext.Provider, {
    value: {
      onChange: onSelectTableChange
    }
  }, selectTableSearchForm))), /*#__PURE__*/React.createElement("div", {
    ref: tableLayoutContainerRef,
    className: "table-layout-container",
    style: {
      height: "calc(100vh - ".concat(tableLayoutTop, "px - 54px)")
    }
  }, /*#__PURE__*/React.createElement(DrawerSearchProTableMainContext.Provider, {
    value: {
      onChange: onSelectTableChange
    }
  }, props.selectTableNode)))));
}
export default /*#__PURE__*/React.forwardRef(Main);