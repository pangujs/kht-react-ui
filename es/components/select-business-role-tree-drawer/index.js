import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Drawer, Button } from 'antd';
import { getLeftRoleList, getLeftRoleByRoleType, getSearchLeftRoleList } from './api';
import { KhtIcons, KhtBaseTree } from '../../index';
import { objArrayRemoval } from '../../utils';
import { cloneDeep } from 'lodash';
import SelectCategoryDrawer from './components/selected-category-drawer';
import "./index.css";
var FolderIcon = /*#__PURE__*/React.createElement(KhtIcons, {
  type: "icon-wenjian",
  style: {
    fontSize: 15,
    color: '#4fa1fb'
  }
});
var SelectBusinessRoleTreeDrawer = function SelectBusinessRoleTreeDrawer(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$title = props.title,
    title = _props$title === void 0 ? '选择资产角色' : _props$title,
    _props$width = props.width,
    width = _props$width === void 0 ? 480 : _props$width,
    _props$destroyOnClose = props.destroyOnClose,
    destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    _props$disableChild = props.disableChild,
    disableChild = _props$disableChild === void 0 ? false : _props$disableChild,
    _props$isPageLoad = props.isPageLoad,
    isPageLoad = _props$isPageLoad === void 0 ? true : _props$isPageLoad,
    _props$pageSize = props.pageSize,
    pageSize = _props$pageSize === void 0 ? 100 : _props$pageSize,
    paramsType = props.paramsType,
    _props$showTooltip = props.showTooltip,
    showTooltip = _props$showTooltip === void 0 ? true : _props$showTooltip;
  var baseTreeRef = useRef();
  var MULTIPLE = props.multiple || typeof props.multiple == 'undefined';
  var SELECTABLE = props.selectable || typeof props.selectable == 'undefined';
  var DestoryOnClose = props.destroyOnClose || typeof props.destroyOnClose == 'undefined';
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    treeData = _useState2[0],
    setTreeData = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    expandedKeys = _useState4[0],
    setExpandedKeys = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    loadedKeys = _useState6[0],
    setLoadedKeys = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    checkedKeys = _useState8[0],
    setCheckedKeys = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    checkedItems = _useState10[0],
    setCheckedItems = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedOpen = _useState12[0],
    setSelectedOpen = _useState12[1];
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    firstEnter = _useState14[0],
    setFirstEnter = _useState14[1];
  /** 取消 */
  var onCancel = function onCancel() {
    if (!(props === null || props === void 0 ? void 0 : props.destroyOnClose)) {
      var _props$defaultChecked;
      if (props === null || props === void 0 ? void 0 : (_props$defaultChecked = props.defaultCheckedItems) === null || _props$defaultChecked === void 0 ? void 0 : _props$defaultChecked.length) {
        setCheckedItems(props.defaultCheckedItems);
      } else {
        setCheckedItems([]);
      }
    }
    if ((props === null || props === void 0 ? void 0 : props.destroyOnClose) && !props.defaultCheckedItems.length) {
      setCheckedKeys([]);
      setCheckedItems([]);
    }
    setFirstEnter(true);
    props.cancel && props.cancel();
  };
  /** 确认按钮的回调 */
  var footerOnOk = function footerOnOk() {
    if (props === null || props === void 0 ? void 0 : props.destroyOnClose) {
      setCheckedKeys([]);
      setCheckedItems([]);
    }
    setFirstEnter(true);
    props.ok && props.ok(checkedItems);
    props.cancel && props.cancel();
  };
  /** 请求根节点 */
  var postRootTreeData = function postRootTreeData() {
    setLoadedKeys([]);
    setExpandedKeys([]);
    setTreeData([]);
    var rootNode = {
      title: '全部',
      name: '全部',
      fullName: '全部',
      key: '0',
      id: '0',
      icon: FolderIcon,
      selectable: !props.isReviewMode,
      isLeaf: false,
      children: []
    };
    setTimeout(function () {
      setTreeData([rootNode]);
      setExpandedKeys([rootNode.key]);
    }, 100);
  };
  /** 回车事件回调 */
  var onSearchTreeData = function onSearchTreeData(e) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve) {
        var value, result, childrenData, list;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              value = e.target.value;
              _context.next = 3;
              return getSearchLeftRoleList({
                name: value,
                roleType: 'business'
              });
            case 3:
              result = _context.sent;
              childrenData = [];
              if (result) {
                list = result || [];
                /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
                childrenData = list.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    title: item.name,
                    fullName: item.name,
                    key: item.id,
                    icon: /*#__PURE__*/React.createElement(KhtIcons, {
                      type: "icon-kehu",
                      style: {
                        color: '#47a7ff'
                      }
                    }),
                    selectable: !props.isReviewMode,
                    isLeaf: true,
                    children: []
                  });
                });
              }
              setTreeData(childrenData);
              resolve(undefined);
            case 8:
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
  var loadData = function loadData(_ref2) {
    var key = _ref2.key,
      children = _ref2.children,
      id = _ref2.id,
      fullName = _ref2.fullName;
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        var childrenData, Methods, params, result, list;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(children && children.length)) {
                _context2.next = 3;
                break;
              }
              resolve({
                data: [],
                key: ''
              });
              return _context2.abrupt("return");
            case 3:
              childrenData = [];
              Methods = firstEnter ? getLeftRoleByRoleType : getLeftRoleList;
              params = {
                roleType: 'business',
                name: ''
              };
              if (!firstEnter) {
                params.classificationId = id;
              }
              setFirstEnter(false);
              _context2.next = 10;
              return Methods(params);
            case 10:
              result = _context2.sent;
              if (result) {
                list = result || [];
                /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
                childrenData = list.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    title: item.name,
                    key: item.id,
                    fullName: item.name,
                    icon: item.roleClassificationId ? /*#__PURE__*/React.createElement(KhtIcons, {
                      type: "icon-kehu",
                      style: {
                        color: '#47a7ff'
                      }
                    }) : /*#__PURE__*/React.createElement(KhtIcons, {
                      type: "icon-wenjian",
                      style: {
                        color: '#47a7ff'
                      }
                    }),
                    selectable: !props.isReviewMode,
                    isLeaf: item.roleClassificationId ? true : false,
                    children: []
                  });
                });
              }
              resolve({
                data: childrenData || [],
                key: key,
                total: result === null || result === void 0 ? void 0 : result.totalCount,
                id: 'id'
              });
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  };
  /** 点击加载更多时的回调  ---- 暂时无用，接口未分页 */
  var onLoadMore = function onLoadMore(currentData) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
        var _result$response2;
        var result, childrenData, _result$response, list;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return getLeftRoleList(_objectSpread(_objectSpread({}, props.paramsType), {}, {
                parentId: currentData.parentNode.id,
                page: {
                  currentPage: currentData.page.pageNo,
                  pageSize: pageSize
                }
              }));
            case 2:
              result = _context3.sent;
              childrenData = [];
              if (result.success) {
                list = ((_result$response = result.response) === null || _result$response === void 0 ? void 0 : _result$response.dataList) || [];
                /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
                childrenData = list.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    title: item.name,
                    key: item.id,
                    icon: FolderIcon,
                    fullName: item.name,
                    selectable: !props.isReviewMode,
                    isLeaf: !item.existLowerLevelNode
                  });
                });
              }
              resolve({
                data: childrenData,
                key: currentData.parentKey,
                total: (_result$response2 = result.response) === null || _result$response2 === void 0 ? void 0 : _result$response2.totalCount
              });
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  };
  var onLoad = function onLoad(loadedKeys) {
    console.log('onLoad', loadedKeys);
    setLoadedKeys(loadedKeys);
  };
  var onExpand = function onExpand(loadedKeys) {
    console.log('onExpand', loadedKeys);
    setExpandedKeys(loadedKeys);
  };
  var onChangeCallback = function onChangeCallback(selectedKeys, info) {
    var index = checkedItems.findIndex(function (item) {
      return item.key == info.node.key || info.node.key.split('_').pop() == item.key;
    });
    if (info.event == 'check') {
      if (index == -1) {
        if (props.multiple) {
          setCheckedItems(objArrayRemoval(checkedItems, info.checkedNodes, 'key'));
        } else {
          setCheckedItems([info.node]);
        }
      }
      if (index >= 0) {
        // 取消状态
        var checkItem = cloneDeep(checkedItems);
        checkItem.splice(index, 1);
        setCheckedItems(_toConsumableArray(checkItem));
      }
      if (info.isLoader) {
        setCheckedItems(props.multiple ? [].concat(_toConsumableArray(checkedItems), _toConsumableArray(info.checkedNodes)) : [info.node]);
      } else {
        if (info.checked) {
          // 选中
          if (index == -1) {
            if (props.multiple) {
              setCheckedItems(objArrayRemoval(checkedItems, info.checkedNodes, 'key'));
            } else {
              setCheckedItems([info.node]);
            }
          }
          if (index >= 0) {
            // 取消状态
            var _checkItem = cloneDeep(checkedItems);
            _checkItem.splice(index, 1);
            setCheckedItems(_toConsumableArray(_checkItem));
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
  };
  var initTree = function initTree() {
    var _props$customRootNode;
    if ((_props$customRootNode = props.customRootNode) === null || _props$customRootNode === void 0 ? void 0 : _props$customRootNode.length) {
      console.log('执行设置根节点');
      setLoadedKeys([]);
      setExpandedKeys([]);
      setTreeData([]);
      var openKeys = [];
      var rootNode = props.customRootNode;
      setTimeout(function () {
        var root = rootNode.map(function (item) {
          openKeys.push(item.key);
          return _objectSpread(_objectSpread({}, item), {}, {
            isLeaf: false,
            selectable: !props.isReviewMode
          });
        });
        setTreeData(root);
        setExpandedKeys(openKeys);
      }, 100);
    } else {
      postRootTreeData();
    }
  };
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
      var _item$children2;
      if ((item === null || item === void 0 ? void 0 : (_item$children2 = item.children) === null || _item$children2 === void 0 ? void 0 : _item$children2.length) > 0) {
        list.push.apply(list, _toConsumableArray(flatData(cloneDeep(item.children))));
      }
      item.children = [];
      list.push(item);
    });
    return list;
  };
  //移除节点
  var removeSelectedRowKeys = function removeSelectedRowKeys(keys) {
    if (keys.length == 0) {
      var _baseTreeRef$current, _baseTreeRef$current2, _tree$;
      var tree = (_baseTreeRef$current = baseTreeRef.current) === null || _baseTreeRef$current === void 0 ? void 0 : _baseTreeRef$current.getTreeData;
      setCheckedItems([]);
      (_baseTreeRef$current2 = baseTreeRef.current) === null || _baseTreeRef$current2 === void 0 ? void 0 : _baseTreeRef$current2.setTreeDataNodeDisabled((_tree$ = tree[0]) === null || _tree$ === void 0 ? void 0 : _tree$.key, false);
    } else {
      var _baseTreeRef$current5;
      keys.forEach(function (i) {
        var _baseTreeRef$current3, _baseTreeRef$current4;
        (_baseTreeRef$current3 = baseTreeRef.current) === null || _baseTreeRef$current3 === void 0 ? void 0 : (_baseTreeRef$current4 = _baseTreeRef$current3.setTreeDataNodeDisabled) === null || _baseTreeRef$current4 === void 0 ? void 0 : _baseTreeRef$current4.call(_baseTreeRef$current3, i, false);
      });
      var _tree = (_baseTreeRef$current5 = baseTreeRef.current) === null || _baseTreeRef$current5 === void 0 ? void 0 : _baseTreeRef$current5.getTreeData;
      var removeItems = findRemoveChildItems(_tree, keys);
      var removeKeys = flatData(removeItems).map(function (i) {
        return i.key;
      });
      setCheckedItems(checkedItems.filter(function (i) {
        return !removeKeys.includes(i.key);
      }));
    }
  };
  useEffect(function () {
    if (props.open) {
      var _props$customRootNode2;
      console.log('open');
      if (!props.customRootNode || !((_props$customRootNode2 = props.customRootNode) === null || _props$customRootNode2 === void 0 ? void 0 : _props$customRootNode2.length)) postRootTreeData();
    } else {
      setTreeData([]);
    }
  }, [props.open]);
  useEffect(function () {
    initTree();
  }, [props.customRootNode, paramsType]);
  useEffect(function () {
    setCheckedKeys(checkedItems.map(function (item) {
      return item.key;
    }));
  }, [checkedItems]);
  useEffect(function () {
    var _props$defaultChecked2;
    setCheckedItems(props.defaultCheckedItems);
    //清空禁用节点
    if (!((_props$defaultChecked2 = props.defaultCheckedItems) === null || _props$defaultChecked2 === void 0 ? void 0 : _props$defaultChecked2.length)) {
      var _baseTreeRef$current6, _baseTreeRef$current7;
      (_baseTreeRef$current6 = baseTreeRef.current) === null || _baseTreeRef$current6 === void 0 ? void 0 : (_baseTreeRef$current7 = _baseTreeRef$current6.setTreeDataNodeDisabled) === null || _baseTreeRef$current7 === void 0 ? void 0 : _baseTreeRef$current7.call(_baseTreeRef$current6, 'all', false);
    }
  }, [props.defaultCheckedItems]);
  //已选的值
  var selectedRowKeys = useMemo(function () {
    var idList = checkedItems.map(function (item) {
      return item.id;
    });
    return checkedItems.filter(function (item) {
      return !idList.includes(item.roleClassificationId);
    });
  }, [checkedItems]);
  var footerRender = /*#__PURE__*/React.createElement("div", {
    className: "select-business-role-drawer-tree-footer"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "footer-cancel-btn",
    onClick: onCancel
  }, '取消'), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: footerOnOk
  }, '确认'));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Drawer, {
    open: open,
    destroyOnClose: destroyOnClose,
    maskClosable: maskClosable,
    title: title,
    width: width,
    className: "select-business-role-drawer-tree-wrapper",
    onClose: onCancel,
    getContainer: document.getElementById('root') || document.body,
    footer: !props.isReviewMode && footerRender,
    bodyStyle: {
      padding: '20px 20px 0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "calc(100% - ".concat(selectedRowKeys.length > 0 ? '60px' : '0px', ")")
    }
  }, props.open && /*#__PURE__*/React.createElement(KhtBaseTree, {
    ref: baseTreeRef,
    selectable: SELECTABLE,
    multiple: MULTIPLE,
    showIcon: true,
    treeData: treeData,
    expandedKeys: expandedKeys,
    isPageLoad: isPageLoad,
    isUseSpellKey: false,
    canSelect: props.canSelect,
    pageSize: props.pageSize,
    onSearchTreeData: onSearchTreeData,
    loadData: loadData,
    onLoadMore: onLoadMore,
    blockNode: true,
    onLoad: onLoad,
    loadedKeys: loadedKeys,
    onExpand: onExpand,
    showTooltip: showTooltip,
    inputProps: _objectSpread({
      placeholder: '搜索',
      prefix: /*#__PURE__*/React.createElement(KhtIcons, {
        type: "icon-sousuo",
        style: {
          color: '#999'
        }
      })
    }, props.inputProps),
    onChangeCallback: onChangeCallback,
    inDrawerStyle: true,
    disableChild: disableChild,
    checkedKeysSorce: checkedKeys,
    showHeadSelectFullText: true
  })), selectedRowKeys.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: (props === null || props === void 0 ? void 0 : props.width) || 480
    },
    className: "select-business-role-bottom-title",
    onClick: function onClick() {
      return setSelectedOpen(true);
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u5DF2\u9009\uFF1A"), /*#__PURE__*/React.createElement("a", {
    style: {
      marginLeft: 6
    }
  }, selectedRowKeys.length)), /*#__PURE__*/React.createElement(SelectCategoryDrawer, {
    open: selectedOpen,
    checkedList: _toConsumableArray(selectedRowKeys),
    removeSelectedRowKeys: removeSelectedRowKeys,
    onClose: function onClose() {
      setSelectedOpen(false);
    }
  })));
};
export default SelectBusinessRoleTreeDrawer;
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};