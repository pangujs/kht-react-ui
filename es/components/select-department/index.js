import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Drawer, Button } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { KhtBaseTree, KhtDeptUserIconType, KhtIcons } from '../../index';
import "./index.css";
import { useSetState } from 'ahooks';
import { getDepartmentData } from './api';
import { objArrayRemoval } from '../../utils';
import SelectedDepartmentDrawer from './selected-department-drawer';
import { cloneDeep } from 'lodash';
export default function SelectDepartment(props) {
  var _checkedItems$;
  var treeRef = useRef();
  var onClose = props.onClose,
    _props$open = props.open,
    open = _props$open === void 0 ? true : _props$open,
    onSubmit = props.onSubmit,
    initData = props.initData,
    _props$title = props.title,
    title = _props$title === void 0 ? '选择部门' : _props$title,
    _props$selectable = props.selectable,
    selectable = _props$selectable === void 0 ? false : _props$selectable,
    _props$inDrawerStyle = props.inDrawerStyle,
    inDrawerStyle = _props$inDrawerStyle === void 0 ? false : _props$inDrawerStyle,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? true : _props$multiple,
    _props$isUseSpellKey = props.isUseSpellKey,
    isUseSpellKey = _props$isUseSpellKey === void 0 ? true : _props$isUseSpellKey,
    _props$isMogami = props.isMogami,
    isMogami = _props$isMogami === void 0 ? false : _props$isMogami;
  var _useSetState = useSetState({
      selectedOpen: false,
      treeData: [],
      defaultExpandedKeys: []
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    checkedKeys = _useState2[0],
    setCheckedKeys = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedItems = _useState4[0],
    setCheckedItems = _useState4[1];
  var selectedRowKeys = useMemo(function () {
    var codes = checkedItems.map(function (item) {
      return item.code;
    });
    if (selectable) {
      return checkedItems;
    }
    return checkedItems.filter(function (item) {
      return !codes.includes(item.parentCode);
    });
  }, [checkedItems]);
  var onSave = function onSave() {
    if (isMogami) {
      //不需要子孙数据
      var ids = checkedItems.map(function (item) {
        return item.id;
      });
      var currentCheckedItems = checkedItems.filter(function (item) {
        return !ids.includes(item.parentId);
      });
      var currentCheckedKeys = currentCheckedItems.map(function (item) {
        return item.id;
      });
      onSubmit && onSubmit(currentCheckedKeys, currentCheckedItems);
    } else {
      onSubmit && onSubmit(checkedKeys, checkedItems);
    }
  };
  /** 远程搜索关键词的回调 */
  var onSearchTreeData = function onSearchTreeData(e) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve) {
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log('回车搜索值：', e.target.value);
              _context.next = 3;
              return getTreeData('loadMore', {
                searchInfo: e.target.value,
                parentCode: ''
              });
            case 3:
              result = _context.sent;
              setState({
                treeData: result.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    title: item.name,
                    key: item.id,
                    isLeaf: true,
                    icon: KhtDeptUserIconType.dept,
                    children: []
                  });
                })
              });
              resolve(undefined);
            case 6:
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
  /** 懒加载子节点 */
  var loadData = function loadData(node) {
    return (
      // eslint-disable-next-line no-async-promise-executor
      new Promise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
          var key, children, code, data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                key = node.key, children = node.children, code = node.code;
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
                return getTreeData('loadMore', {
                  parentCode: code,
                  searchInfo: ''
                });
              case 6:
                data = _context2.sent;
                /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
                resolve({
                  data: data,
                  key: key,
                  total: 0,
                  id: 'id'
                });
              case 8:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }())
    );
  };
  /** 已选状态时的回调 */
  var onChangeCallback = function onChangeCallback(selectKeys, info) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var showSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
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
  var getTreeData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var type,
        params,
        response,
        treeData,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            type = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 'init';
            params = _args3.length > 1 ? _args3[1] : undefined;
            _context3.next = 4;
            return getDepartmentData(params);
          case 4:
            response = _context3.sent;
            treeData = response.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                key: item.id,
                title: item.name,
                isLeaf: false,
                icon: KhtDeptUserIconType.dept,
                children: []
              });
            }) || []; //加载更多
            if (!(type == 'loadMore')) {
              _context3.next = 8;
              break;
            }
            return _context3.abrupt("return", treeData);
          case 8:
            setState({
              treeData: treeData,
              defaultExpandedKeys: treeData[0] ? [treeData[0].id] : []
            });
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getTreeData() {
      return _ref3.apply(this, arguments);
    };
  }();
  var findRemoveChildItems = function findRemoveChildItems(tree, keys) {
    var nodes = [];
    tree.forEach(function (item) {
      if (keys.includes(item.key)) {
        nodes.push(item);
      } else {
        var _item$children;
        if (((_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.length) > 0) {
          nodes.push.apply(nodes, _toConsumableArray(findRemoveChildItems(item.children, keys)));
        }
      }
    });
    return nodes;
  };
  //扁平化数据
  var flatData = function flatData(arr) {
    var list = [];
    arr.forEach(function (item) {
      if (item.children.length > 0) {
        list.push.apply(list, _toConsumableArray(flatData(cloneDeep(item.children))));
      }
      item.children = [];
      list.push(item);
    });
    return list;
  };
  var removeSelectedRowKeys = function removeSelectedRowKeys(keys) {
    if (keys.length == 0) {
      var _treeRef$current, _treeRef$current2, _tree$;
      var tree = (_treeRef$current = treeRef.current) === null || _treeRef$current === void 0 ? void 0 : _treeRef$current.getTreeData;
      setCheckedItems([]);
      (_treeRef$current2 = treeRef.current) === null || _treeRef$current2 === void 0 ? void 0 : _treeRef$current2.setTreeDataNodeDisabled((_tree$ = tree[0]) === null || _tree$ === void 0 ? void 0 : _tree$.key, false);
    } else {
      var _treeRef$current4;
      if (selectable) {
        setCheckedItems(checkedItems.filter(function (i) {
          return !_toConsumableArray(keys).includes(i.key);
        }));
        return;
      }
      keys.forEach(function (i) {
        var _treeRef$current3;
        (_treeRef$current3 = treeRef.current) === null || _treeRef$current3 === void 0 ? void 0 : _treeRef$current3.setTreeDataNodeDisabled(i, false);
      });
      var _tree = (_treeRef$current4 = treeRef.current) === null || _treeRef$current4 === void 0 ? void 0 : _treeRef$current4.getTreeData;
      var removeItems = findRemoveChildItems(_tree, keys);
      var removeKeys = flatData(removeItems).map(function (i) {
        return i.key;
      });
      //这样处理是 避免搜查出来的数据还没加载在树结构里面造成的bug
      setCheckedItems(checkedItems.filter(function (i) {
        return ![].concat(_toConsumableArray(keys), _toConsumableArray(removeKeys)).includes(i.key);
      }));
    }
  };
  useEffect(function () {
    setCheckedKeys(checkedItems.map(function (item) {
      return item.key;
    }));
  }, [checkedItems]);
  useEffect(function () {
    if (open) {
      getTreeData('init', {
        searchInfo: '',
        parentCode: ''
      });
      setCheckedItems(_toConsumableArray(initData));
    } else {
      setState({
        selectedOpen: false,
        treeData: [],
        defaultExpandedKeys: []
      });
      setCheckedItems([]);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(Drawer, {
    className: "select-department-drawer",
    getContainer: document.querySelector('#root'),
    title: title,
    onClose: onClose,
    width: 480,
    footer: [/*#__PURE__*/React.createElement(Button, {
      key: "cancel",
      onClick: onClose
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      key: "submit",
      type: "primary",
      onClick: onSave
    }, "\u4FDD\u5B58")],
    open: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-content"
  }, open ? /*#__PURE__*/React.createElement(KhtBaseTree, {
    ref: treeRef,
    treeData: state.treeData,
    inputProps: {
      placeholder: '搜索',
      allowClear: true
    },
    onSearchTreeData: onSearchTreeData,
    showIcon: true,
    selectable: selectable,
    inDrawerStyle: inDrawerStyle,
    multiple: multiple,
    disableChild: true,
    defaultExpandedKeys: state.defaultExpandedKeys,
    checkedKeysSorce: checkedKeys,
    isUseSpellKey: isUseSpellKey,
    loadData: loadData,
    showTooltip: false,
    onChangeCallback: onChangeCallback,
    backgroundColorFull: true
  }) : /*#__PURE__*/React.createElement(React.Fragment, null)), multiple ?
  /*#__PURE__*/
  // 多选
  React.createElement("div", {
    className: "pagination-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "check-info"
  }, /*#__PURE__*/React.createElement("span", null, "\u5DF2\u9009\uFF1A"), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      setState({
        selectedOpen: true
      });
    }
  }, selectedRowKeys.length))) : !multiple ?
  /*#__PURE__*/
  // 单选
  React.createElement("div", {
    className: "pagination-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "radio-check-info"
  }, /*#__PURE__*/React.createElement("span", null, "\u5DF2\u9009\uFF1A"), selectedRowKeys.length && checkedItems.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, (_checkedItems$ = checkedItems[0]) === null || _checkedItems$ === void 0 ? void 0 : _checkedItems$.name), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return setCheckedItems([]);
    }
  }, /*#__PURE__*/React.createElement(KhtIcons, {
    type: "icon-guanbi"
  }))) : null)) : null, /*#__PURE__*/React.createElement(SelectedDepartmentDrawer, {
    open: state.selectedOpen,
    checkedList: _toConsumableArray(selectedRowKeys),
    removeSelectedRowKeys: removeSelectedRowKeys,
    onClose: function onClose() {
      setState({
        selectedOpen: false
      });
    }
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};