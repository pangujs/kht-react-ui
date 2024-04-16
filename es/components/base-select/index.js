import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ConfigProvider, Empty, Input, Select, Spin } from 'antd';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import "./index.css";
import KhtScrollbars from '../scrollbars';
import { SearchOutlined, CheckOutlined } from '@ant-design/icons';
import { debounce, cloneDeep } from 'lodash';
import { keywordHighlight, objArrayRemoval, waitTime } from '../../utils';
import EmptyPng from '../../assets/images/empty.png';
var BaseSelect = /*#__PURE__*/forwardRef(function (props, baseSelectRef) {
  var _props$selectProps6;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    cachOptions = _useState4[0],
    setCachOptions = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    selectOpen = _useState6[0],
    setSelectOpen = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectItems = _useState8[0],
    setSelectItems = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    searchType = _useState10[0],
    setSearchType = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    searchValue = _useState12[0],
    setSearchValue = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var paramsRef = useRef({
    pageNo: 1
  });
  var actionRef = useRef({
    isClear: false
  });
  /** 设置 value值 */
  var settingValues = function settingValues(item) {
    var _props$selectProps, _props$selectProps2;
    if (item.disabled) return;
    // if(searchValue) {
    //   setSearchValue("")
    //   searchInput("")
    // }
    // item.isSelect = !item.isSelect;
    var newSelectData = [];
    if (props.selectProps.mode) {
      item.isSelect = !item.isSelect;
      // 多选
      if (item.isSelect) {
        newSelectData = objArrayRemoval(selectItems, [item], 'value');
      } else {
        newSelectData = selectItems.filter(function (keys) {
          return keys.value != item.value;
        });
      }
    } else {
      // 单选
      if (selectItems.length && item.value === selectItems[0].value) {
        // 选择的数据 和上次一样 则取消选择
        newSelectData = [];
      } else {
        newSelectData = [item];
      }
      setSelectOpen(false);
    }
    setSelectItems(newSelectData);
    ((_props$selectProps = props.selectProps) === null || _props$selectProps === void 0 ? void 0 : _props$selectProps.onChange) && props.selectProps.onChange(item, newSelectData);
    ((_props$selectProps2 = props.selectProps) === null || _props$selectProps2 === void 0 ? void 0 : _props$selectProps2.onSelect) && props.selectProps.onSelect(item, newSelectData);
  };
  /** 查询条件中的 input onChange */
  var searchInput = useCallback(debounce( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
      var deepCachOptions, postData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            deepCachOptions = cloneDeep(cachOptions);
            setSearchType(Boolean(value));
            if (!props.isOriginSearch) {
              _context.next = 11;
              break;
            }
            _context.next = 6;
            return props.onSearchKeyword && props.onSearchKeyword(value);
          case 6:
            postData = _context.sent;
            // 搜索之后 重置分页参数
            paramsRef.current.pageNo = 1;
            setOptions((postData || []).map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                isSelect: Boolean(selectItems.filter(function (keys) {
                  return keys.value === item.value;
                }).length)
              });
            }));
            _context.next = 15;
            break;
          case 11:
            // 本地
            if (value) {
              deepCachOptions = deepCachOptions.filter(function (keys) {
                var _props$extraInfo, _contentKeyword$inclu;
                var has = false;
                has = typeof keys.label === 'string' && keys.label.includes(value);
                var contentKeyword = ((_props$extraInfo = props.extraInfo) === null || _props$extraInfo === void 0 ? void 0 : _props$extraInfo.map(function (item) {
                  var _item$keyword;
                  if (((_item$keyword = item.keyword) !== null && _item$keyword !== void 0 ? _item$keyword : true) && typeof item.content === 'string') {
                    return typeof item.content === 'string' && keys[item.content].includes(value);
                  }
                })) || [];
                contentKeyword.push(has);
                has = (_contentKeyword$inclu = contentKeyword.includes(true)) !== null && _contentKeyword$inclu !== void 0 ? _contentKeyword$inclu : true;
                return has;
              });
              setOptions(deepCachOptions.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  isSelect: Boolean(selectItems.filter(function (keys) {
                    return keys.value === item.value;
                  }).length)
                });
              }));
            }
            _context.next = 14;
            return waitTime(100);
          case 14:
            if (!value) setOptions(deepCachOptions.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                isSelect: Boolean(selectItems.filter(function (keys) {
                  return keys.value === item.value;
                }).length)
              });
            }));
          case 15:
            setLoading(false);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), 1000), [options, props.isOriginSearch, selectItems]);
  /** 下拉加载回调 */
  var touchBottom = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _props$total;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!props.isPageLoad || options.length >= ((_props$total = props.total) !== null && _props$total !== void 0 ? _props$total : 0))) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            paramsRef.current.pageNo++;
            setLoading(true);
            _context2.next = 6;
            return props.pageLoad && props.pageLoad(paramsRef.current.pageNo);
          case 6:
            setLoading(false);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function touchBottom() {
      return _ref2.apply(this, arguments);
    };
  }();
  /** 重写清空方法 */
  var onClear = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _props$selectProps3, _props$selectProps4;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            actionRef.current.isClear = true;
            setSelectItems([]);
            setSearchValue('');
            // 不需要执行searchInput，多余，而且searchInput里面用到了selectItems， 有数据异步问题会造成清空后，选不了的问题
            // searchInput('');
            ((_props$selectProps3 = props.selectProps) === null || _props$selectProps3 === void 0 ? void 0 : _props$selectProps3.onClear) && ((_props$selectProps4 = props.selectProps) === null || _props$selectProps4 === void 0 ? void 0 : _props$selectProps4.onClear());
            _context3.next = 6;
            return waitTime(1000);
          case 6:
            actionRef.current.isClear = false;
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onClear() {
      return _ref3.apply(this, arguments);
    };
  }();
  /** 重写 删除某一项方法 */
  var onDeselect = function onDeselect(value, options) {
    var _props$selectProps5;
    if (actionRef.current.isClear) return;
    var newSelectData = selectItems.filter(function (item) {
      return item.value !== value.value;
    });
    setSelectItems(newSelectData);
    ((_props$selectProps5 = props.selectProps) === null || _props$selectProps5 === void 0 ? void 0 : _props$selectProps5.onDeselect) && props.selectProps.onDeselect(value, newSelectData);
  };
  /** 重写 隐藏 tag 时显示的内容 */
  var maxTagPlaceholder = function maxTagPlaceholder(omittedValues) {
    return /*#__PURE__*/React.createElement("div", null, "\u7B49 ", omittedValues.length, " ", props.tagPlaceholder, " ...");
  };
  /** 重写下拉节点内容渲染 */
  var dropdownRender = function dropdownRender(menu) {
    var _props$inputProps, _props$inputProps2, _props$inputProps3, _props$total2;
    return /*#__PURE__*/React.createElement("div", {
      className: "drop-down-sty",
      onKeyDown: function onKeyDown(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement(Input, _objectSpread(_objectSpread({
      placeholder: ((_props$inputProps = props.inputProps) === null || _props$inputProps === void 0 ? void 0 : _props$inputProps.placeholder) || '姓名、电话、身份证',
      style: _objectSpread(_objectSpread({}, ((_props$inputProps2 = props.inputProps) === null || _props$inputProps2 === void 0 ? void 0 : _props$inputProps2.style) || {}), {}, {
        marginBottom: 10
      })
    }, props.inputProps), {}, {
      prefix: ((_props$inputProps3 = props.inputProps) === null || _props$inputProps3 === void 0 ? void 0 : _props$inputProps3.prefix) || /*#__PURE__*/React.createElement(SearchOutlined, null),
      allowClear: true,
      onChange: function onChange(event) {
        setSearchValue(event.target.value);
        searchInput(event.target.value);
      },
      value: searchValue
    })), !!options.length ? /*#__PURE__*/React.createElement(Spin, {
      size: "small",
      spinning: loading
    }, /*#__PURE__*/React.createElement("div", {
      className: "content-sty"
    }, /*#__PURE__*/React.createElement(KhtScrollbars, {
      touchBottom: touchBottom
    }, options.map(function (item) {
      var _props$extraInfo2;
      return /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return settingValues(item);
        },
        key: item.value,
        className: "content-box ".concat(selectItems.findIndex(function (keys) {
          return keys.value === item.value;
        }) > -1 && 'content-box-active' || '', " ").concat(item.disabled && 'content-box-disabled' || '', " ")
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-left"
      }, /*#__PURE__*/React.createElement("div", {
        className: "list-label text-overflow"
      }, searchType && typeof item.label === 'string' ? keywordHighlight(item.label, [searchValue]) : item.label), (_props$extraInfo2 = props.extraInfo) === null || _props$extraInfo2 === void 0 ? void 0 : _props$extraInfo2.map(function (keys, index) {
        var _keys$keyword2, _keys$mappping$filter3, _keys$mappping$filter4;
        return /*#__PURE__*/React.createElement("div", {
          className: "detail-box flex",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "detail-box-title text-overflow",
          title: typeof keys.title === 'string' ? keys.title : ''
        }, keys.title), /*#__PURE__*/React.createElement("div", {
          className: "detail-box-content text-overflow",
          title: typeof keys.content === 'string' ? item[keys.content] : ''
        }, typeof keys.content !== 'string' ? keys.content : /*#__PURE__*/React.createElement(React.Fragment, null,
        // 值是数组 则需要循环显示
        Object.prototype.toString.call(item[keys.content]) === '[object Array]' ? item[keys.content].map(function (val, index) {
          var _keys$keyword, _keys$mappping$filter, _keys$mappping$filter2;
          return /*#__PURE__*/React.createElement("div", {
            key: index
          }, searchType && ((_keys$keyword = keys.keyword) !== null && _keys$keyword !== void 0 ? _keys$keyword : true) ? keywordHighlight(val, [searchValue]) : keys.mappping ? ((_keys$mappping$filter = keys.mappping.filter(function (F) {
            return F.value == val;
          })) === null || _keys$mappping$filter === void 0 ? void 0 : (_keys$mappping$filter2 = _keys$mappping$filter[0]) === null || _keys$mappping$filter2 === void 0 ? void 0 : _keys$mappping$filter2.name) || '暂无资料' : val || '暂无资料');
        }) : /*#__PURE__*/React.createElement(React.Fragment, null, searchType && ((_keys$keyword2 = keys.keyword) !== null && _keys$keyword2 !== void 0 ? _keys$keyword2 : true) ? keywordHighlight(item[keys.content], [searchValue]) : keys.mappping ? ((_keys$mappping$filter3 = keys.mappping.filter(function (F) {
          return F.value == item[keys.content];
        })) === null || _keys$mappping$filter3 === void 0 ? void 0 : (_keys$mappping$filter4 = _keys$mappping$filter3[0]) === null || _keys$mappping$filter4 === void 0 ? void 0 : _keys$mappping$filter4.name) || '暂无资料' : item[keys.content] || '暂无资料'))));
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-right"
      }, selectItems.findIndex(function (keys) {
        return keys.value === item.value;
      }) > -1 && /*#__PURE__*/React.createElement(CheckOutlined, null)));
    }), options.length >= ((_props$total2 = props.total) !== null && _props$total2 !== void 0 ? _props$total2 : 0) && /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#ccc',
        textAlign: 'center',
        padding: '5px 0'
      }
    }, "- \u5DF2\u7ECF\u5230\u5E95\u4E86 -")))) : /*#__PURE__*/React.createElement(Empty, {
      image: EmptyPng,
      description: /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#ccc'
        }
      }, "\u6682\u65E0\u6570\u636E")
    }));
  };
  useImperativeHandle(baseSelectRef, function () {
    return {
      onClear: function onClear() {
        setSelectItems([]);
      },
      setCheckItems: function setCheckItems(items) {
        setSelectItems(items);
      }
    };
  });
  useEffect(function () {
    var _props$selectProps$op;
    var propsData = ((_props$selectProps$op = props.selectProps.options) === null || _props$selectProps$op === void 0 ? void 0 : _props$selectProps$op.map(function (item, index) {
      return _objectSpread(_objectSpread({}, item), {}, {
        isSelect: false
      });
    })) || [];
    setOptions(propsData);
    // 选项变换 都需要重新设置缓存值
    setCachOptions(propsData);
  }, [props.selectProps.options]);
  useEffect(function () {
    var _props$defaultSelectI;
    if ((_props$defaultSelectI = props.defaultSelectItems) === null || _props$defaultSelectI === void 0 ? void 0 : _props$defaultSelectI.length) {
      setSelectItems(props.defaultSelectItems.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          isSelect: true
        });
      }));
    } else {
      var _props$selectProps$op2;
      var propsData = ((_props$selectProps$op2 = props.selectProps.options) === null || _props$selectProps$op2 === void 0 ? void 0 : _props$selectProps$op2.map(function (item, index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          isSelect: false
        });
      })) || [];
      setOptions(propsData);
      setSelectItems([]);
    }
  }, [props.defaultSelectItems]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(Select, _objectSpread(_objectSpread({
    style: _objectSpread(_objectSpread({}, ((_props$selectProps6 = props.selectProps) === null || _props$selectProps6 === void 0 ? void 0 : _props$selectProps6.style) || {}), {}, {
      minWidth: 280
    }),
    open: selectOpen,
    value: selectItems,
    dropdownRender: dropdownRender,
    dropdownStyle: {
      maxHeight: 435,
      color: 'unset'
    },
    onDropdownVisibleChange: function onDropdownVisibleChange(visible) {
      return setSelectOpen(visible);
    }
  }, props.selectProps), {}, {
    options: options,
    showSearch: false,
    getPopupContainer: function getPopupContainer(node) {
      return node;
    },
    labelInValue: true,
    onClear: onClear,
    onDeselect: onDeselect,
    maxTagPlaceholder: props.tagPlaceholder ? maxTagPlaceholder : undefined
  }))));
});
export default BaseSelect;
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var ExtraInfoObjType = function ExtraInfoObjType(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};