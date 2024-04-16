import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import KhtBaseTree from '@src/base-tree';
import { getOrganizational, getOrganizationalChildren } from './mock';
import { FileSearchOutlined } from '@ant-design/icons';
import { objArrayRemoval, waitTime } from '@utils';
import { message, Switch } from 'antd';
import { cloneDeep } from 'lodash';
export default (function () {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    treeData = _useState2[0],
    setTreeData = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedKeys = _useState4[0],
    setCheckedKeys = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    checkedItems = _useState6[0],
    setCheckedItems = _useState6[1];
  var _useState7 = useState(true),
    _useState8 = _slicedToArray(_useState7, 2),
    multiple = _useState8[0],
    setMultiple = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isCheck = _useState10[0],
    setIsCheck = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    disableChild = _useState12[0],
    setDisableChild = _useState12[1];
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    showSearch = _useState14[0],
    setShowSearch = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    pageLoad = _useState16[0],
    setPageLoad = _useState16[1];
  var _useState17 = useState(true),
    _useState18 = _slicedToArray(_useState17, 2),
    localSearch = _useState18[0],
    setLocalSearch = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    bgColor = _useState20[0],
    setbgColor = _useState20[1];
  var _useState21 = useState(true),
    _useState22 = _slicedToArray(_useState21, 2),
    tooltip = _useState22[0],
    setTooltip = _useState22[1];
  /** 请求 树形 根节点 */
  var mockRootData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            result = getOrganizational();
            setTreeData(result.data.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                key: item.id,
                title: item.name,
                isLeaf: false,
                icon: /*#__PURE__*/React.createElement(FileSearchOutlined, null),
                children: []
              });
            }));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function mockRootData() {
      return _ref.apply(this, arguments);
    };
  }();
  /** 懒加载子节点 */
  var loadData = function loadData(treeNode) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        var key, children, result, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              key = treeNode.key, children = treeNode.children;
              if (!children.length) {
                _context2.next = 4;
                break;
              }
              resolve({
                data: [],
                key: ''
              });
              return _context2.abrupt("return");
            case 4:
              _context2.next = 6;
              return waitTime(1000);
            case 6:
              /** key 值调接口时请使用 treeNode.id */
              result = getOrganizationalChildren();
              /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
              data = result.data.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  key: item.id,
                  title: item.name,
                  isLeaf: false,
                  icon: /*#__PURE__*/React.createElement(FileSearchOutlined, null),
                  children: []
                });
              });
              resolve({
                data: data,
                key: key,
                total: pageLoad ? 24 : undefined
              });
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
  /** 已选状态时的回调 */
  var onChangeCallback = function onChangeCallback(selectKeys, info) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var showSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    console.log('变更时回调的参数: ', info);
    /** 根据业务场景进行单独写逻辑。***/
    /** 单独事件需要单独处理。 */
    // 选中状态
    var index = checkedItems.findIndex(function (item) {
      return item.key == info.node.key || info.node.key.split('_').pop() == item.key;
    });
    if (info.event == 'check') {
      if (showSearch) {
        if (index == -1) {
          if (multiple) {
            setCheckedItems(objArrayRemoval(checkedItems, info.checkedNodes, 'key'));
          } else {
            setCheckedItems([info.node]);
          }
        }
        if (index >= 0) {
          // 取消状态
          var checkitem = cloneDeep(checkedItems);
          checkitem.splice(index, 1);
          setCheckedItems(_toConsumableArray(checkitem));
        }
        return false;
      }
      if (info.isLoader) {
        setCheckedItems(multiple ? [].concat(_toConsumableArray(checkedItems), _toConsumableArray(info.checkedNodes)) : [info.node]);
      } else {
        if (info.checked) {
          // 选中
          if (index == -1) {
            if (multiple) {
              setCheckedItems(objArrayRemoval(checkedItems, info.checkedNodes, 'key'));
            } else {
              setCheckedItems([info.node]);
            }
          }
          if (index >= 0) {
            // 取消状态
            var _checkitem = cloneDeep(checkedItems);
            _checkitem.splice(index, 1);
            setCheckedItems(_toConsumableArray(_checkitem));
          }
        } else {
          // 反选
          var selectKey = info.checkedNodes.map(function (item) {
            return item.key;
          });
          setCheckedItems(function (items) {
            return items.filter(function (keys) {
              return !selectKey.includes(keys.key);
            });
          });
        }
      }
    }
    if (info.event == 'select') {
      if (info.selected && index == -1) {
        var _info$node;
        //选中状态
        var clearCheckedItems = [];
        //单选或多选判断
        clearCheckedItems = multiple ? checkedItems : [], setCheckedItems([].concat(_toConsumableArray(clearCheckedItems), [_objectSpread({
          title: info.node.title,
          fullTitle: (_info$node = info.node) === null || _info$node === void 0 ? void 0 : _info$node.fullName
        }, info.node)]));
      }
      if (!info.selected && index >= 0) {
        //取消状态
        var _checkitem2 = cloneDeep(checkedItems);
        _checkitem2.splice(index, 1);
        setCheckedItems(_toConsumableArray(_checkitem2));
      }
    }
  };
  /** 加载更多的回调 */
  var onLoadMore = function onLoadMore(currentData) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
        var result, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              message.success('当前页码: ' + currentData.page.pageNo);
              _context3.next = 3;
              return waitTime(1000);
            case 3:
              result = getOrganizationalChildren();
              data = result.data.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  key: item.id,
                  title: item.name,
                  isLeaf: false,
                  icon: /*#__PURE__*/React.createElement(FileSearchOutlined, null),
                  children: []
                });
              });
              resolve({
                data: data,
                key: currentData.key,
                total: 24
              });
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  };
  /** 远程搜索关键词的回调 */
  var onSearchTreeData = function onSearchTreeData(e) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve) {
        var result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              console.log('回车搜索值：', e.target.value);
              _context4.next = 3;
              return waitTime(1000);
            case 3:
              result = getOrganizationalChildren();
              setTreeData(result.data.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  title: item.name,
                  key: item.id,
                  isLeaf: false,
                  icon: /*#__PURE__*/React.createElement(FileSearchOutlined, null),
                  children: []
                });
              }));
              resolve(undefined);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  };
  /** 是否是单选 */
  var onMultipleChange = function onMultipleChange(checked) {
    setMultiple(checked);
  };
  /** 是否开启 checkable 模式 */
  var onIsCheckChange = function onIsCheckChange(checked) {
    setIsCheck(checked);
  };
  /** 是否开启禁用子节点模式 */
  var onDisableChildChange = function onDisableChildChange(checked) {
    setDisableChild(checked);
    setIsCheck(true);
    setMultiple(true);
  };
  /** 是否开启 tree 远端搜索模式 */
  var onShowSearchChange = function onShowSearchChange(checked) {
    setShowSearch(checked);
  };
  /** 是否开启分页加载功能 */
  var onPageLoadChange = function onPageLoadChange(checked) {
    setPageLoad(checked);
  };
  /** 是否开启本地检索功能 */
  var onLocalSearchChange = function onLocalSearchChange(checked) {
    setLocalSearch(checked);
  };
  /** 是否开启选中背景色 */
  var onBgColorChange = function onBgColorChange(checked) {
    setbgColor(checked);
  };
  /** 是否开启 tooltip 展示 */
  var onTooltipChange = function onTooltipChange(checked) {
    setTooltip(checked);
  };
  /** 自定义 toolTip 内容 */
  var customTooltipContent = function customTooltipContent(treeNode) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              console.log('当前节点：', treeNode);
              _context5.next = 3;
              return waitTime(1000);
            case 3:
              resolve({
                fullName: '远端请求回来的 fullName 字段值'
              });
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  };
  useEffect(function () {
    mockRootData();
  }, []);
  useEffect(function () {
    setCheckedKeys(checkedItems.map(function (item) {
      return item.key;
    }));
  }, [checkedItems]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F\u591A\u9009\u6A21\u5F0F\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: multiple,
    onChange: onMultipleChange
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F checkable \u6A21\u5F0F\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: isCheck,
    onChange: onIsCheckChange
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F\u7981\u7528\u5B50\u8282\u70B9\u6A21\u5F0F\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: disableChild,
    onChange: onDisableChildChange
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u641C\u7D22\u6A21\u5F0F\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: showSearch,
    onChange: onShowSearchChange
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F\u8FDC\u7AEF\u68C0\u7D22\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: localSearch,
    onChange: onLocalSearchChange
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F\u5206\u9875\u52A0\u8F7D\u529F\u80FD\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: pageLoad,
    onChange: onPageLoadChange
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F\u9009\u4E2D\u80CC\u666F\u8272\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: bgColor,
    onChange: onBgColorChange
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F tooltip \u5C55\u793A\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: tooltip,
    onChange: onTooltipChange
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '400px',
      width: '300px',
      padding: '10px',
      border: '1px solid #f1f1f1'
    }
  }, /*#__PURE__*/React.createElement(KhtBaseTree, {
    showIcon: true,
    checkedKeysSorce: checkedKeys,
    onChangeCallback: onChangeCallback,
    showSearch: showSearch,
    multiple: multiple,
    selectable: !isCheck,
    disableChild: disableChild,
    treeData: treeData,
    isOriginSearch: localSearch,
    loadData: loadData,
    isPageLoad: pageLoad,
    onLoadMore: onLoadMore,
    onSearchTreeData: onSearchTreeData,
    backgroundColorFull: bgColor,
    showTooltip: tooltip,
    toolTipProps: {
      getPopupContainer: function getPopupContainer() {
        return document.body;
      }
    },
    customTooltipContent: customTooltipContent
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '400px'
    }
  }, checkedItems.map(function (item) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '5px 20px'
      },
      key: item.key
    }, item.title);
  }))));
});