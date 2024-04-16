import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { getCompanyUserList, getCustomerUrlData, getresidentManager } from '../../http/api';
import React, { useEffect, useRef, useState } from 'react';
import BaseSelect from '../base-select';
import { Space } from 'antd';
import "./index.css";
export default function BusinessSelectHouseholdUser(props) {
  var _props$hasAddRow = props.hasAddRow,
    hasAddRow = _props$hasAddRow === void 0 ? false : _props$hasAddRow,
    btnItems = props.btnItems,
    _props$householdType = props.householdType,
    householdType = _props$householdType === void 0 ? 'house' : _props$householdType;
  var userObj = {
    searchInfo: '',
    options: [],
    total: 0,
    defaultSelectItems: []
  };
  var userListSync = useRef([userObj]);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    userList = _useState2[0],
    setUserList = _useState2[1];
  var optionsSync = useRef([]);
  var totalSync = useRef(0);
  var extraInfo = [
  // {
  //   title: '手机号码: ',
  //   content: 'telephone',
  // },
  {
    title: '电话号码: ',
    content: 'telephone'
  }, {
    title: '身份证: ',
    content: 'idCard'
  }, {
    title: '绑定资产: ',
    content: 'fullName',
    keyword: false
  }, {
    title: '住户身份: ',
    content: 'type',
    keyword: false,
    mappping: [{
      name: '家属',
      value: 'family'
    }, {
      name: '业主',
      value: 'proprietor'
    }, {
      name: '租户',
      value: 'tenant'
    }]
  }];
  var userExtraInfo = [
  // {
  //   title: '手机号码: ',
  //   content: 'telephone',
  // },
  {
    title: '电话号码: ',
    content: 'telephone'
  }, {
    title: '身份证: ',
    content: 'idCard'
  }];
  var enterpriseExtraInfo = [{
    title: '企业简称: ',
    content: 'idCard'
  }, {
    title: '手机号码: ',
    content: 'telephone'
  }, {
    title: '电话号码: ',
    content: 'telephone'
  }];
  /** 初始化 */
  var initOptions = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageNo, search, index) {
      var result, actions, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            result = {};
            if (!props.url) {
              _context.next = 7;
              break;
            }
            _context.next = 4;
            return getCustomerUrlData(props.url, _objectSpread(_objectSpread({
              searchInfo: search !== null && search !== void 0 ? search : ''
            }, props.params || {}), {}, {
              page: {
                currentPage: pageNo !== null && pageNo !== void 0 ? pageNo : 1,
                pageSize: 10
              }
            }));
          case 4:
            result = _context.sent;
            _context.next = 11;
            break;
          case 7:
            actions = householdType === 'house' ? getresidentManager : getCompanyUserList;
            _context.next = 10;
            return actions(_objectSpread({
              searchInfo: search !== null && search !== void 0 ? search : '',
              currentPage: pageNo !== null && pageNo !== void 0 ? pageNo : 1,
              pageSize: 10
            }, props.params || {}));
          case 10:
            result = _context.sent;
          case 11:
            if (!result.success) {
              _context.next = 15;
              break;
            }
            data = result.response.dataList.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                label: item.name,
                value: item.id
              });
            });
            if (!pageNo && !search) {
              // 保留一份原始数据
              optionsSync.current = data;
              totalSync.current = result.response.totalCount;
              userListSync.current = userListSync.current.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  options: data,
                  total: result.response.totalCount
                });
              });
              setUserList(_toConsumableArray(userListSync.current));
            } else {
              if (index || index === 0) {
                userListSync.current[index].total = result.response.totalCount;
                setUserList(_toConsumableArray(userListSync.current));
              }
            }
            return _context.abrupt("return", Promise.resolve(data));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function initOptions(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  /** 分页加载回调 */
  var _pageLoad = function pageLoad(pageNo, index) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return initOptions(pageNo, userListSync.current[index].searchInfo || '', index);
            case 2:
              data = _context2.sent;
              userListSync.current[index].options = [].concat(_toConsumableArray(userListSync.current[index].options), _toConsumableArray(data));
              setUserList(_toConsumableArray(userListSync.current));
              resolve(undefined);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
  /** 远端搜索回调 */
  var _onSearchKeyword = function onSearchKeyword(value, index) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
        var data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // setSearchInfo(value);
              userListSync.current[index].searchInfo = value;
              // setUserList([...userListSync.current]);
              _context3.next = 3;
              return initOptions(undefined, value, index);
            case 3:
              data = _context3.sent;
              userListSync.current[index].options = _toConsumableArray(data);
              setUserList(_toConsumableArray(userListSync.current));
              resolve(data);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x5) {
        return _ref3.apply(this, arguments);
      };
    }());
  };
  var addItem = function addItem() {
    userListSync.current = [].concat(_toConsumableArray(userListSync.current), [{
      searchInfo: '',
      options: optionsSync.current,
      total: totalSync.current,
      defaultSelectItems: []
    }]);
    setUserList(_toConsumableArray(userListSync.current));
  };
  var delItem = function delItem(index) {
    var _userListSync$current, _props$baseSelectProp, _props$baseSelectProp2;
    // 删除的值
    var value = (_userListSync$current = userListSync.current[index]) === null || _userListSync$current === void 0 ? void 0 : _userListSync$current.defaultSelectItems[0];
    userListSync.current.splice(index, 1);
    setUserList(_toConsumableArray(userListSync.current));
    var tempOptions = userListSync.current.map(function (item) {
      return item.defaultSelectItems;
    });
    ((_props$baseSelectProp = props.baseSelectProps.selectProps) === null || _props$baseSelectProp === void 0 ? void 0 : _props$baseSelectProp.onChange) && ((_props$baseSelectProp2 = props.baseSelectProps.selectProps) === null || _props$baseSelectProp2 === void 0 ? void 0 : _props$baseSelectProp2.onChange(value, tempOptions));
  };
  var getDefaultSelectItems = function getDefaultSelectItems(index) {
    var _props$baseSelectProp3, _props$baseSelectProp4;
    if (!((_props$baseSelectProp3 = props.baseSelectProps.selectProps) === null || _props$baseSelectProp3 === void 0 ? void 0 : _props$baseSelectProp3.mode) && hasAddRow) {
      var _userListSync$current2;
      return ((_userListSync$current2 = userListSync.current[index]) === null || _userListSync$current2 === void 0 ? void 0 : _userListSync$current2.defaultSelectItems) || [];
    }
    return ((_props$baseSelectProp4 = props.baseSelectProps) === null || _props$baseSelectProp4 === void 0 ? void 0 : _props$baseSelectProp4.defaultSelectItems) || [];
  };
  var selectOnClear = function selectOnClear(index) {
    var _props$baseSelectProp5, _props$baseSelectProp6;
    // 选择框清除事件, 需清除当前选择框中 已经输入的搜索值
    userListSync.current[index].searchInfo = '';
    setUserList(_toConsumableArray(userListSync.current));
    (props === null || props === void 0 ? void 0 : (_props$baseSelectProp5 = props.baseSelectProps) === null || _props$baseSelectProp5 === void 0 ? void 0 : (_props$baseSelectProp6 = _props$baseSelectProp5.selectProps) === null || _props$baseSelectProp6 === void 0 ? void 0 : _props$baseSelectProp6.onClear) && props.baseSelectProps.selectProps.onClear();
  };
  var selectChange = function selectChange(value, option, index) {
    var _props$baseSelectProp7, _props$baseSelectProp8, _props$baseSelectProp9;
    // 单选模式 并且有新增一行选择, 单个设置选择值
    var tempOptions = option;
    if (!((_props$baseSelectProp7 = props.baseSelectProps.selectProps) === null || _props$baseSelectProp7 === void 0 ? void 0 : _props$baseSelectProp7.mode) && hasAddRow) {
      userListSync.current[index].defaultSelectItems = option;
      // setUserList([...userList])
      // 再把所有选择的数据组装返回上级
      tempOptions = userListSync.current.map(function (item) {
        return item.defaultSelectItems;
      });
      setUserList(_toConsumableArray(userListSync.current));
    }
    ((_props$baseSelectProp8 = props.baseSelectProps.selectProps) === null || _props$baseSelectProp8 === void 0 ? void 0 : _props$baseSelectProp8.onChange) && ((_props$baseSelectProp9 = props.baseSelectProps.selectProps) === null || _props$baseSelectProp9 === void 0 ? void 0 : _props$baseSelectProp9.onChange(value, tempOptions));
  };
  var initUserList = function initUserList() {
    userListSync.current = [{
      searchInfo: '',
      options: optionsSync.current,
      total: totalSync.current,
      defaultSelectItems: []
    }];
    setUserList(_toConsumableArray(userListSync.current));
  };
  useEffect(function () {
    initOptions();
  }, [props.params]);
  useEffect(function () {
    if (hasAddRow) {
      if (props.rowSelectItems && props.rowSelectItems.length) {
        // 长度一致 直接赋值
        if (userListSync.current.length === props.rowSelectItems.length) {
          props.rowSelectItems.map(function (item, index) {
            userListSync.current[index].defaultSelectItems = item;
          });
          setUserList(_toConsumableArray(userListSync.current));
        } else {
          var tempList = [];
          for (var index = 0; index < props.rowSelectItems.length; index++) {
            tempList.push({
              searchInfo: '',
              options: optionsSync.current,
              total: totalSync.current,
              defaultSelectItems: props.rowSelectItems[index]
            });
          }
          userListSync.current = tempList;
          setUserList(_toConsumableArray(userListSync.current));
        }
      } else {
        initUserList();
      }
    } else {
      var _props$baseSelectProp10, _props$baseSelectProp11;
      if (((_props$baseSelectProp10 = props.baseSelectProps) === null || _props$baseSelectProp10 === void 0 ? void 0 : _props$baseSelectProp10.defaultSelectItems) && ((_props$baseSelectProp11 = props.baseSelectProps) === null || _props$baseSelectProp11 === void 0 ? void 0 : _props$baseSelectProp11.defaultSelectItems.length)) {
        setUserList(_toConsumableArray(userListSync.current));
      } else {
        var _userListSync$current3;
        if (userListSync.current.length && ((_userListSync$current3 = userListSync.current[0].options) === null || _userListSync$current3 === void 0 ? void 0 : _userListSync$current3.length)) {
          setUserList(_toConsumableArray(userListSync.current));
        } else {
          initUserList();
        }
      }
    }
  }, [props.rowSelectItems, hasAddRow]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, userList === null || userList === void 0 ? void 0 : userList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "household-user-row"
    }, /*#__PURE__*/React.createElement(BaseSelect, _objectSpread(_objectSpread({
      ref: props.baseSelectRef,
      isPageLoad: true,
      total: item.total,
      pageLoad: function pageLoad(val) {
        return _pageLoad(val, index);
      },
      isOriginSearch: true,
      onSearchKeyword: function onSearchKeyword(val) {
        return _onSearchKeyword(val, index);
      },
      extraInfo: householdType === 'house' ? extraInfo : userExtraInfo,
      tagPlaceholder: "\u4F4D"
    }, props.baseSelectProps), {}, {
      defaultSelectItems: getDefaultSelectItems(index),
      selectProps: _objectSpread(_objectSpread({
        options: item.options,
        allowClear: false
      }, props.baseSelectProps.selectProps), {}, {
        onClear: function onClear() {
          selectOnClear(index);
        },
        onChange: function onChange(value, option) {
          selectChange(value, option, index);
        }
      })
    })), btnItems && btnItems.length || hasAddRow ? /*#__PURE__*/React.createElement(Space, {
      style: {
        paddingLeft: 10
      }
    }, btnItems && btnItems.length && btnItems.map(function (btn, btnIndex) {
      var showCondition = btn.showCondition;
      var show = true;
      if (showCondition === 'onFirstRow') {
        show = index === 0;
      } else if (showCondition === 'isSelect') {
        var _item$defaultSelectIt;
        show = !!((_item$defaultSelectIt = item.defaultSelectItems) === null || _item$defaultSelectIt === void 0 ? void 0 : _item$defaultSelectIt.length);
      }
      return show ? /*#__PURE__*/React.createElement("a", {
        key: btnIndex,
        onClick: function onClick() {
          return btn.onClick && btn.onClick(item.defaultSelectItems || []);
        }
      }, btn.label) : null;
    }), hasAddRow ? index === 0 ? /*#__PURE__*/React.createElement("a", {
      onClick: addItem
    }, "\u6DFB\u52A0") : /*#__PURE__*/React.createElement("a", {
      style: {
        color: '#ff4d4f'
      },
      onClick: function onClick() {
        return delItem(index);
      }
    }, "\u5220\u9664") : null) : null);
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var BtnItemType = function BtnItemType(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};