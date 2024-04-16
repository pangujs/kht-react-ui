import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { AttrTypeItem, useMock } from '../../../hooks/useMock';
import KhtBaseSelect from '../index';
import { Button, Radio, Switch } from 'antd';
import { waitTime } from '../../../utils';
export default (function () {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    extraInfo = _useState4[0],
    setDetailInfo = _useState4[1];
  var _useState5 = useState('multiple'),
    _useState6 = _slicedToArray(_useState5, 2),
    mode = _useState6[0],
    setMode = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showSearch = _useState8[0],
    setShowSearch = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isPageLoad = _useState10[0],
    setIsPageLoad = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    defaultSelectItems = _useState12[0],
    setDefaultSelectItems = _useState12[1];
  /** 分页加载回调 */
  var pageLoad = function pageLoad(pageNo) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve) {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              data = useMock([{
                type: AttrTypeItem.id,
                value: 'string',
                key: 'phone'
              }, {
                type: AttrTypeItem.id,
                value: 'string',
                key: 'IDCard'
              }, {
                type: AttrTypeItem.county,
                value: 'string',
                key: 'assets'
              }, {
                type: AttrTypeItem.city,
                value: 'string',
                key: 'hoseType'
              }, {
                type: AttrTypeItem.datetime,
                key: 'keys'
              }, {
                type: AttrTypeItem.id,
                key: 'value'
              }, {
                type: AttrTypeItem.cname,
                key: 'label'
              }], 10);
              _context.next = 3;
              return waitTime(1000);
            case 3:
              setOptions([].concat(_toConsumableArray(options), _toConsumableArray(data.response)));
              resolve(undefined);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };
  /** 远端搜索回调 */
  var onSearchKeyword = function onSearchKeyword(value) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log('搜索值：', value);
              _context2.next = 3;
              return waitTime(1000);
            case 3:
              result = useMock([{
                type: AttrTypeItem.id,
                value: 'string',
                key: 'phone'
              }, {
                type: AttrTypeItem.id,
                value: 'string',
                key: 'IDCard'
              }, {
                type: AttrTypeItem.county,
                value: 'string',
                key: 'assets'
              }, {
                type: AttrTypeItem.city,
                value: 'string',
                key: 'hoseType'
              }, {
                type: AttrTypeItem.datetime,
                key: 'keys'
              }, {
                type: AttrTypeItem.id,
                key: 'value'
              }, {
                type: AttrTypeItem.cname,
                key: 'label'
              }], 10);
              resolve(result.response);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
  /** 选择勾选模式 */
  var onChangeMode = function onChangeMode(e) {
    setMode(e.target.value);
  };
  /** 是否开启远端搜索模式 */
  var onShowSearchChange = function onShowSearchChange(checked) {
    setShowSearch(checked);
  };
  /** 是否开启分页加载功能 */
  var onPageLoadChange = function onPageLoadChange(checked) {
    setIsPageLoad(checked);
  };
  var onClick = function onClick() {
    var data = useMock([{
      type: AttrTypeItem.id,
      value: 'string',
      key: 'phone'
    }, {
      type: AttrTypeItem.id,
      value: 'string',
      key: 'IDCard'
    }, {
      type: AttrTypeItem.county,
      value: 'string',
      key: 'assets'
    }, {
      type: AttrTypeItem.city,
      value: 'string',
      key: 'hoseType'
    }, {
      type: AttrTypeItem.datetime,
      key: 'keys'
    }, {
      type: AttrTypeItem.id,
      key: 'value'
    }, {
      type: AttrTypeItem.cname,
      key: 'label'
    }], 10);
    // setDetailInfo([
    //   {
    //     title: '电话号码: ',
    //     content: 'phone',
    //   },
    //   {
    //     title: '身份证: ',
    //     content: 'IDCard',
    //   },
    //   {
    //     title: '绑定资产: ',
    //     content: 'assets',
    //   },
    //   {
    //     title: '住户身份: ',
    //     content: 'hoseType',
    //   },
    // ]);
    setOptions(data.response);
  };
  useEffect(function () {
    onClick();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u9009\u62E9\u6A21\u5F0F\uFF1A", /*#__PURE__*/React.createElement(Radio.Group, {
    onChange: onChangeMode,
    value: mode
  }, /*#__PURE__*/React.createElement(Radio, {
    value: undefined
  }, "\u5355\u9009"), /*#__PURE__*/React.createElement(Radio, {
    value: 'multiple'
  }, "multiple"), /*#__PURE__*/React.createElement(Radio, {
    value: 'tags'
  }, "tags"))), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F\u8FDC\u7AEF\u641C\u7D22\u6A21\u5F0F\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: showSearch,
    onChange: onShowSearchChange
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F\u5206\u9875\u52A0\u8F7D\u529F\u80FD\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: isPageLoad,
    onChange: onPageLoadChange
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: onClick
  }, "\u5207\u6362\u6570\u636E")), /*#__PURE__*/React.createElement(KhtBaseSelect, {
    selectProps: {
      style: {
        width: 280
      },
      options: options,
      mode: mode,
      maxTagCount: 1,
      allowClear: true,
      onChange: function onChange(val, items) {
        setDefaultSelectItems(items);
      },
      placeholder: '全部项目'
    },
    isPageLoad: isPageLoad,
    total: 30,
    pageLoad: isPageLoad ? pageLoad : undefined,
    isOriginSearch: showSearch,
    onSearchKeyword: showSearch ? onSearchKeyword : undefined,
    extraInfo: extraInfo,
    tagPlaceholder: "\u4E2A\u9009\u9879",
    defaultSelectItems: defaultSelectItems
  }));
});