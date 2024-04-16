import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Drawer, Button } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import KhtBaseTree from '../base-tree';
import KhtIcons from '../kht-icons';
import "./index.css";
import { useSetState } from 'ahooks';
import { getLeftRoleList, getLeftRoleByRoleType } from './api';
import { objArrayRemoval } from '../../utils';
import SelectedDepartmentDrawer from './selected-role-tree-drawer';
import { cloneDeep } from 'lodash';
export default function SelectRoleTreeDrawer(props) {
  var treeRef = useRef();
  var onClose = props.onClose,
    _props$open = props.open,
    open = _props$open === void 0 ? true : _props$open,
    onSubmit = props.onSubmit,
    initData = props.initData,
    _props$type = props.type,
    type = _props$type === void 0 ? 'business' : _props$type;
  var _useSetState = useSetState({
      selectedOpen: false,
      treeData: [],
      defaultExpandedKeys: ['0']
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
      return item.id;
    });
    return checkedItems.filter(function (item) {
      return item.id != '0';
    }).filter(function (item) {
      return !codes.includes(item.roleClassificationId);
    });
  }, [checkedItems]);
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
                name: e.target.value,
                roleType: type
              });
            case 3:
              result = _context.sent;
              setState({
                treeData: result.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    title: item.name,
                    key: item.id,
                    isLeaf: true,
                    icon: /*#__PURE__*/React.createElement(KhtIcons, {
                      type: "icon-kehu",
                      style: {
                        color: '#47a7ff'
                      }
                    }),
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
          var key, children, id, data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                key = node.key, children = node.children, id = node.id;
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
                  roleType: type,
                  classificationId: id,
                  name: ''
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
        Methods,
        res,
        treeData,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            type = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 'init';
            params = _args3.length > 1 ? _args3[1] : undefined;
            Methods = type == 'init' ? getLeftRoleByRoleType : getLeftRoleList;
            _context3.next = 5;
            return Methods(params);
          case 5:
            res = _context3.sent;
            treeData = (res === null || res === void 0 ? void 0 : res.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                key: item.id,
                title: item.name,
                isLeaf: type == 'init' ? false : true,
                icon: type == 'init' ? /*#__PURE__*/React.createElement(KhtIcons, {
                  type: "icon-wenjian",
                  style: {
                    color: '#47a7ff'
                  }
                }) : /*#__PURE__*/React.createElement(KhtIcons, {
                  type: "icon-kehu",
                  style: {
                    color: '#47a7ff'
                  }
                }),
                children: []
              });
            })) || []; //加载更多
            if (!(type == 'loadMore')) {
              _context3.next = 9;
              break;
            }
            return _context3.abrupt("return", treeData);
          case 9:
            treeData = [{
              key: '0',
              id: '0',
              title: '全部',
              isLeaf: false,
              icon: /*#__PURE__*/React.createElement(KhtIcons, {
                type: "icon-wenjian",
                style: {
                  color: '#47a7ff'
                }
              }),
              children: treeData
            }];
            setState({
              treeData: treeData,
              defaultExpandedKeys: treeData[0] ? [treeData[0].id] : []
            });
            if (type === 'init' && initData.length) setCheckedKeys(initData.map(function (item) {
              return item.id;
            }));
          case 12:
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
      var _treeRef$current4, _treeRef$current5;
      keys.forEach(function (i) {
        var _treeRef$current3;
        (_treeRef$current3 = treeRef.current) === null || _treeRef$current3 === void 0 ? void 0 : _treeRef$current3.setTreeDataNodeDisabled(i, false);
      });
      (_treeRef$current4 = treeRef.current) === null || _treeRef$current4 === void 0 ? void 0 : _treeRef$current4.setTreeDataNodeDisabled('0', false);
      var _tree = (_treeRef$current5 = treeRef.current) === null || _treeRef$current5 === void 0 ? void 0 : _treeRef$current5.getTreeData;
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
      return item.id;
    }));
  }, [checkedItems]);
  useEffect(function () {
    if (open) {
      getTreeData('init', {
        name: '',
        roleType: type
      });
      setCheckedItems(_toConsumableArray(initData));
    } else {
      setState({
        selectedOpen: false,
        treeData: [],
        defaultExpandedKeys: []
      });
      setCheckedKeys([]);
      setCheckedItems([]);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(Drawer, {
    className: "select-role-tree-drawer",
    getContainer: document.querySelector('#root'),
    title: type == 'business' ? '选择资产角色' : '选择组织角色',
    onClose: onClose,
    width: 480,
    footer: [/*#__PURE__*/React.createElement(Button, {
      key: "cancel",
      onClick: onClose
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      style: {
        marginLeft: '10px'
      },
      key: "submit",
      type: "primary",
      onClick: function onClick() {
        onSubmit(checkedKeys, checkedItems);
      }
    }, "\u786E\u8BA4")],
    open: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "role-tree-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tree-content"
  }, open ? /*#__PURE__*/React.createElement(KhtBaseTree, {
    ref: treeRef,
    treeData: state.treeData,
    inputProps: {
      placeholder: '搜索'
    },
    onSearchTreeData: onSearchTreeData,
    showIcon: true,
    selectable: false,
    disableChild: true,
    defaultExpandedKeys: state.defaultExpandedKeys,
    checkedKeysSorce: checkedKeys,
    isUseSpellKey: false,
    loadData: loadData,
    showTooltip: false,
    onChangeCallback: onChangeCallback,
    backgroundColorFull: true
  }) : /*#__PURE__*/React.createElement(React.Fragment, null)), selectedRowKeys.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "selected-info"
  }, /*#__PURE__*/React.createElement("span", null, "\u5DF2\u9009\uFF1A"), /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      setState({
        selectedOpen: true
      });
    }
  }, selectedRowKeys.length))), /*#__PURE__*/React.createElement(SelectedDepartmentDrawer, {
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