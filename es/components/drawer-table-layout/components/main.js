import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Drawer, Input, Select, Form, Button } from 'antd';
import KhtIcons from '../../kht-icons';
import _debounce from 'lodash/debounce';
var Option = Select.Option;
//抽屉表格抽屉布局组件
function Main(props, ref) {
  var initTableOptions = props.initTableOptions,
    selectedTableOptions = props.selectedTableOptions,
    selectedDrawerProps = props.selectedDrawerProps,
    drawerProps = props.drawerProps,
    type = props.type;
  var _ref = type && (type === 'init' ? initTableOptions === null || initTableOptions === void 0 ? void 0 : initTableOptions.searchFormOptions : selectedTableOptions === null || selectedTableOptions === void 0 ? void 0 : selectedTableOptions.searchFormOptions) || {},
    _ref$searchOptions = _ref.searchOptions,
    searchOptions = _ref$searchOptions === void 0 ? [] : _ref$searchOptions,
    _ref$onSearch = _ref.onSearch,
    onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,
    _ref$onOptionClick = _ref.onOptionClick,
    onOptionClick = _ref$onOptionClick === void 0 ? function () {} : _ref$onOptionClick,
    _ref$searchInputState = _ref.searchInputState,
    searchInputState = _ref$searchInputState === void 0 ? true : _ref$searchInputState,
    _ref$searchInputName = _ref.searchInputName,
    searchInputName = _ref$searchInputName === void 0 ? 'name' : _ref$searchInputName,
    _ref$searchInputWidth = _ref.searchInputWidth,
    searchInputWidth = _ref$searchInputWidth === void 0 ? 176 : _ref$searchInputWidth,
    _ref$searchInputPlace = _ref.searchInputPlaceholder,
    searchInputPlaceholder = _ref$searchInputPlace === void 0 ? '搜索' : _ref$searchInputPlace;
  var drawerPropsData = type === 'init' ? drawerProps : selectedDrawerProps;
  var tableFormRef = useRef(null);
  var selectedTableFormRef = useRef(null);
  var inputVal = useRef('');
  //过滤undefined参数值
  var getSearchVal = function getSearchVal() {
    var _tableFormRef$current, _selectedTableFormRef;
    var obj = type === 'init' ? (_tableFormRef$current = tableFormRef.current) === null || _tableFormRef$current === void 0 ? void 0 : _tableFormRef$current.getFieldsValue() : (_selectedTableFormRef = selectedTableFormRef.current) === null || _selectedTableFormRef === void 0 ? void 0 : _selectedTableFormRef.getFieldsValue();
    var data = {};
    obj && Object.keys(obj).forEach(function (key) {
      if (typeof obj[key] !== 'undefined') {
        data[key] = obj[key];
      }
    });
    var saveData = _objectSpread(_objectSpread({}, data), {}, _defineProperty({}, searchInputName, inputVal.current));
    return saveData;
  };
  /** 搜索条件变化回调 -----start */
  var onSelectChange = function onSelectChange(e, name) {
    console.log('%c Line:50 🍅 name', 'color:#ea7e5c', name);
    var data = _objectSpread({}, getSearchVal());
    onSearch(data, type, name);
  };
  var onSearchChange = useMemo(function () {
    return function (data) {
      onSearch(data, type);
    };
  }, [type]);
  var searchOptionsChange = useMemo(function () {
    return function (e, name) {
      onOptionClick(e, name, type);
    };
  }, []);
  /** 搜索条件变化回调 -----end */
  //搜索输入
  var inputOnChange = function inputOnChange(e) {
    inputVal.current = e.target.value;
    searchInput(e.target.value);
  };
  /** 查询条件中的 input onChange */
  var searchInput = useCallback(_debounce( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _objectSpread(_objectSpread({}, getSearchVal()), {}, _defineProperty({}, searchInputName, value));
            onSearch(data, type);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 1000), []);
  //外部调用方法
  useImperativeHandle(ref, function () {
    //手动设置表单字段值
    return {
      setTableFormFieldsValue: function setTableFormFieldsValue(data) {
        var _tableFormRef$current2;
        (_tableFormRef$current2 = tableFormRef.current) === null || _tableFormRef$current2 === void 0 ? void 0 : _tableFormRef$current2.setFieldsValue(data);
        onSearchChange(_objectSpread({}, getSearchVal()));
      },
      getTableFormFieldsValue: function getTableFormFieldsValue() {
        return getSearchVal();
      },
      setSelectedTableFormFieldsValue: function setSelectedTableFormFieldsValue(data) {
        var _selectedTableFormRef2;
        (_selectedTableFormRef2 = selectedTableFormRef.current) === null || _selectedTableFormRef2 === void 0 ? void 0 : _selectedTableFormRef2.setFieldsValue(data);
        onSearchChange(_objectSpread({}, getSearchVal()));
      },
      getSelectedTableFormFieldsValue: function getSelectedTableFormFieldsValue() {
        return getSearchVal();
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Drawer, _objectSpread(_objectSpread({
    title: "\u62BD\u5C49\u6807\u9898",
    width: 700,
    key: type,
    footer: props.footer,
    footerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 70
    },
    getContainer: document.querySelector('#root')
  }, drawerPropsData), {}, {
    className: "drawer-container"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'calc(100% - 32px)'
    },
    className: "drawer-pro-table-container"
  }, (props === null || props === void 0 ? void 0 : props.drawerTableLayoutTitle) && /*#__PURE__*/React.createElement("div", {
    id: "drawer-table-top",
    className: "drawer-table-top"
  }, props.drawerTableLayoutTitle), /*#__PURE__*/React.createElement("div", {
    id: "drawer-search-ground",
    className: "drawer-search-ground"
  }, /*#__PURE__*/React.createElement(Form, {
    key: type,
    ref: type === 'init' ? tableFormRef : selectedTableFormRef,
    style: {
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, searchOptions === null || searchOptions === void 0 ? void 0 : searchOptions.map(function (item, index) {
    var _item$options;
    return /*#__PURE__*/React.createElement(Form.Item, {
      name: item.name,
      className: "select-option",
      style: {
        width: item.width
      },
      key: type + item.name + index
    }, item.valueType === 'button' ? /*#__PURE__*/React.createElement(Button, {
      style: {
        width: item.width
      },
      icon: item.icon,
      type: (item === null || item === void 0 ? void 0 : item.type) || 'primary',
      onClick: function onClick(e) {
        return searchOptionsChange(e, item.name);
      }
    }, item.label) : /*#__PURE__*/React.createElement(Select, {
      key: type + item.name + index,
      style: {
        width: item.width
      },
      placeholder: item.placeholder || '请选择',
      onChange: function onChange(e) {
        return onSelectChange(e, item.name);
      },
      open: item.open,
      disabled: item.disabled,
      onClick: function onClick(e) {
        !item.disabled && item.hasOwnProperty('open') && !item.open && searchOptionsChange(e, item.name);
      },
      allowClear: item.hasOwnProperty('allowClear') ? item.allowClear : true
    }, item === null || item === void 0 ? void 0 : (_item$options = item.options) === null || _item$options === void 0 ? void 0 : _item$options.map(function (c, i) {
      return /*#__PURE__*/React.createElement(Option, {
        key: c.value + i,
        value: c.value
      }, c.label);
    })));
  })), searchInputState && /*#__PURE__*/React.createElement("div", {
    className: "right",
    style: {
      width: searchInputWidth
    }
  }, /*#__PURE__*/React.createElement(Input, {
    key: type,
    style: {
      marginBottom: 15,
      width: searchInputWidth
    },
    allowClear: true,
    placeholder: searchInputPlaceholder,
    onChange: inputOnChange,
    prefix: /*#__PURE__*/React.createElement(KhtIcons, {
      type: "icon-sousuo",
      style: {
        color: '#bbb'
      }
    })
  }))), props.children), props.selectAllNode, props.drawerChildren));
}
export default /*#__PURE__*/React.forwardRef(Main);