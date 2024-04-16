import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import KhtDrawerTree from '../drawer-tree';
import KhtIcons from '../kht-icons';
import { getAdminOrganizationList, getOrganization } from './api';
var FolderIcon = /*#__PURE__*/React.createElement(KhtIcons, {
  type: "icon-wenjian",
  style: {
    fontSize: 15,
    color: '#4fa1fb'
  }
});
var BusinessOrganizationDrawerTree = function BusinessOrganizationDrawerTree(props) {
  var MULTIPLE = props.multiple || typeof props.multiple == 'undefined';
  var SELECTABLE = props.selectable || typeof props.selectable == 'undefined';
  var DestoryOnClose = props.destroyOnClose || typeof props.destroyOnClose == 'undefined';
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    treeData = _useState2[0],
    setTreeData = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultExpandedKeys = _useState4[0],
    setDefaultExpandedKeys = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    expandedKeys = _useState6[0],
    setExpandedKeys = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    defaultCheckedItems = _useState8[0],
    setDefaultCheckedItems = _useState8[1];
  var _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    _props$disableChild = props.disableChild,
    disableChild = _props$disableChild === void 0 ? false : _props$disableChild,
    _props$isPageLoad = props.isPageLoad,
    isPageLoad = _props$isPageLoad === void 0 ? false : _props$isPageLoad,
    _props$pageSize = props.pageSize,
    pageSize = _props$pageSize === void 0 ? 100 : _props$pageSize,
    paramsType = props.paramsType,
    _props$useSystem = props.useSystem,
    useSystem = _props$useSystem === void 0 ? 'customer' : _props$useSystem;
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    loadedKeys = _useState10[0],
    setLoadedKeys = _useState10[1];
  /** 确认按钮的回调 */
  var ok = function ok(selectNode) {
    console.log('已选取的数据', selectNode);
    setDefaultCheckedItems(selectNode);
    props.ok && props.ok(selectNode);
  };
  /** 请求根节点 */
  var postRootTreeData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var actions, result, list;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoadedKeys([]);
            setExpandedKeys([]);
            setTreeData([]);
            actions = useSystem === 'customer' ? getOrganization : getAdminOrganizationList;
            _context.next = 6;
            return actions(_objectSpread(_objectSpread({}, props.paramsType), {}, {
              sourceTableType: 'organization'
            }));
          case 6:
            result = _context.sent;
            if (result.success) {
              list = result.response || [];
              /** 需要将请求回来的数据,进行构造 */
              list = list.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  title: item.name,
                  key: item.id,
                  icon: FolderIcon,
                  selectable: !props.isReviewMode
                  // isLeaf: !item.existLowerLevelNode,
                });
              });

              setTimeout(function () {
                setTreeData(list);
                setExpandedKeys([list[0].key]);
              }, 100);
              props.backRootNode && props.backRootNode(list[0]);
            }
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function postRootTreeData() {
      return _ref.apply(this, arguments);
    };
  }();
  /** 回车事件回调 */
  var onSearchTreeData = function onSearchTreeData(e) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        var value, actions, result, childrenData, list;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              value = e.target.value;
              actions = useSystem === 'customer' ? getOrganization : getAdminOrganizationList;
              _context2.next = 4;
              return actions(_objectSpread(_objectSpread({}, props.paramsType), {}, {
                name: value,
                sourceTableType: 'organization'
              }));
            case 4:
              result = _context2.sent;
              childrenData = [];
              if (result.success) {
                list = result.response || [];
                /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
                childrenData = list.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    title: item.name,
                    key: item.id,
                    icon: FolderIcon,
                    selectable: !props.isReviewMode,
                    isLeaf: true
                  });
                });
              }
              setTreeData(childrenData);
              resolve(undefined);
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
  /** 懒加载子节点 */
  var loadData = function loadData(_ref3) {
    var key = _ref3.key,
      children = _ref3.children,
      id = _ref3.id;
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
        var childrenData, actions, result, list;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(children && children.length)) {
                _context3.next = 3;
                break;
              }
              resolve({
                data: [],
                key: ''
              });
              return _context3.abrupt("return");
            case 3:
              childrenData = [];
              actions = useSystem === 'customer' ? getOrganization : getAdminOrganizationList;
              _context3.next = 7;
              return actions(_objectSpread(_objectSpread({}, props.paramsType), {}, {
                parentId: id,
                sourceTableType: 'organization'
              }));
            case 7:
              result = _context3.sent;
              if (result.success) {
                list = result.response || [];
                /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
                childrenData = list.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    title: item.name,
                    key: item.id,
                    icon: FolderIcon,
                    selectable: !props.isReviewMode
                    // isLeaf: !item.existLowerLevelNode,
                  });
                });
              }

              resolve({
                data: childrenData || [],
                key: key
              });
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x2) {
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
  useEffect(function () {
    if (props.open && (DestoryOnClose || treeData.length == 0)) {
      var _props$customRootNode2;
      console.log('open');
      if (!props.customRootNode || !((_props$customRootNode2 = props.customRootNode) === null || _props$customRootNode2 === void 0 ? void 0 : _props$customRootNode2.length)) postRootTreeData();
    }
  }, [props.open]);
  useEffect(function () {
    initTree();
  }, [props.customRootNode, paramsType]);
  useEffect(function () {
    setDefaultCheckedItems(props.defaultCheckedItems);
  }, [props.defaultCheckedItems]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerTree, {
    cancel: props.cancel,
    ok: ok,
    drawerProps: {
      title: props.title,
      open: props.open,
      destroyOnClose: props.destroyOnClose || false,
      width: props.width || 480,
      maskClosable: maskClosable
    },
    treeProps: {
      isUseSpellKey: false,
      showIcon: true,
      treeData: treeData,
      selectable: SELECTABLE,
      multiple: MULTIPLE,
      defaultExpandedKeys: defaultExpandedKeys,
      expandedKeys: expandedKeys,
      isPageLoad: isPageLoad,
      canSelect: props.canSelect,
      pageSize: props.pageSize,
      onSearchTreeData: onSearchTreeData,
      loadData: loadData,
      blockNode: true,
      onLoad: onLoad,
      loadedKeys: loadedKeys,
      onExpand: onExpand,
      disableChild: disableChild
    },
    inputProps: _objectSpread({
      placeholder: '搜索机构'
    }, props.inputProps),
    defaultCheckedItems: defaultCheckedItems,
    showNodeParents: props.showNodeParents,
    isReviewMode: props.isReviewMode
  }));
};
export default BusinessOrganizationDrawerTree;
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};