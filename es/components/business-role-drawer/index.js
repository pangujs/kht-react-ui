import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import KhtDrawerTree from '../drawer-tree';
import KhtIcons from '../kht-icons';
import { getLeftRoleByRoleType, getLeftRoleList } from './api';
import "./index.css";
import SelectedRoleTreeDrawer from './selected-role-tree-drawer';
var FolderIcon = /*#__PURE__*/React.createElement(KhtIcons, {
  type: "icon-wenjian",
  style: {
    fontSize: 15,
    color: '#4fa1fb'
  }
});
var PeopleIcon = /*#__PURE__*/React.createElement(KhtIcons, {
  type: "icon-kehu",
  style: {
    fontSize: 15,
    color: '#4fa1fb'
  }
});
var BusinessRoleDrawer = function BusinessRoleDrawer(props) {
  var MULTIPLE = props.multiple || typeof props.multiple == 'undefined';
  var SELECTABLE = props.selectable || typeof props.selectable == 'undefined';
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
    _props$roleType = props.roleType,
    roleType = _props$roleType === void 0 ? 'business' : _props$roleType;
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    loadedKeys = _useState10[0],
    setLoadedKeys = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedOpen = _useState12[0],
    setSelectedOpen = _useState12[1];
  /** 确认按钮的回调 */
  var ok = function ok(selectNode) {
    console.log('已选取的数据', selectNode);
    setDefaultCheckedItems(selectNode);
    props.ok && props.ok(selectNode);
  };
  /** 请求根节点 */
  var postRootTreeData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _resultRoleType$respo, _resultRoleList$respo;
      var resultRoleType, resultRoleList, typeList, roleList, tempData, _loop, index;
      return _regeneratorRuntime().wrap(function _callee$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setLoadedKeys([]);
            setExpandedKeys([]);
            setTreeData([]);
            _context2.next = 5;
            return getLeftRoleByRoleType({
              roleType: roleType
            });
          case 5:
            resultRoleType = _context2.sent;
            _context2.next = 8;
            return getLeftRoleList({
              roleType: roleType
            });
          case 8:
            resultRoleList = _context2.sent;
            if (!((resultRoleType === null || resultRoleType === void 0 ? void 0 : (_resultRoleType$respo = resultRoleType.response) === null || _resultRoleType$respo === void 0 ? void 0 : _resultRoleType$respo.length) && (resultRoleList === null || resultRoleList === void 0 ? void 0 : (_resultRoleList$respo = resultRoleList.response) === null || _resultRoleList$respo === void 0 ? void 0 : _resultRoleList$respo.length))) {
              _context2.next = 21;
              break;
            }
            typeList = resultRoleType.response;
            roleList = resultRoleList.response;
            tempData = [{
              title: '全部',
              name: '全部',
              key: '',
              id: '',
              icon: FolderIcon,
              isClassify: true,
              children: []
            }];
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var element, item, temp;
              return _regeneratorRuntime().wrap(function _loop$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    element = typeList[index];
                    item = _objectSpread(_objectSpread({}, element), {}, {
                      title: element.name,
                      key: element.id,
                      icon: FolderIcon,
                      isClassify: true,
                      children: []
                    });
                    temp = roleList.filter(function (keys) {
                      return item.manageType == keys.manageType;
                    });
                    if (temp.length) {
                      item.children = temp.map(function (i) {
                        return _objectSpread(_objectSpread({}, i), {}, {
                          key: i.id,
                          title: i.name,
                          icon: PeopleIcon
                        });
                      });
                    }
                    tempData[0].children.push(item);
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _loop);
            });
            index = 0;
          case 15:
            if (!(index < typeList.length)) {
              _context2.next = 20;
              break;
            }
            return _context2.delegateYield(_loop(), "t0", 17);
          case 17:
            index++;
            _context2.next = 15;
            break;
          case 20:
            setTreeData(tempData);
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee);
    }));
    return function postRootTreeData() {
      return _ref.apply(this, arguments);
    };
  }();
  var onExpand = function onExpand(loadedKeys) {
    console.log('onExpand', loadedKeys);
  };
  var initTree = function initTree() {
    postRootTreeData();
  };
  /** 已选状态时的回调 */
  var onChangeCallback = function onChangeCallback(selectKeys, info) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var showSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    setDefaultCheckedItems(info.checkedNodes);
  };
  var removeSelectedRowKeys = function removeSelectedRowKeys(keys) {
    if (keys.length == 0) {
      setDefaultCheckedItems([]);
    } else {
      setDefaultCheckedItems(defaultCheckedItems.filter(function (i) {
        return !keys.includes(i.key);
      }));
    }
  };
  useEffect(function () {
    if (!props.isReviewMode) initTree();
  }, [roleType]);
  useEffect(function () {
    if (props.open && props.isReviewMode) {
      var tempData = [{
        title: '全部',
        name: '全部',
        key: '',
        id: '',
        icon: FolderIcon,
        isClassify: true,
        children: props.reviewData
      }];
      setTreeData(tempData);
    }
  }, [props.open]);
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
    treeProps: _objectSpread({
      rootClassName: 'role-drawer-tree-box',
      defaultExpandAll: true,
      isUseSpellKey: false,
      showIcon: true,
      treeData: treeData,
      selectable: SELECTABLE,
      multiple: MULTIPLE,
      defaultExpandedKeys: defaultExpandedKeys,
      isPageLoad: isPageLoad,
      canSelect: props.isReviewMode ? ['isReviewMode'] : undefined,
      pageSize: props.pageSize,
      blockNode: true,
      onExpand: onExpand,
      disableChild: disableChild,
      isOriginSearch: false
    }, !SELECTABLE && MULTIPLE ? {
      onChangeCallback: onChangeCallback
    } : {}),
    inputProps: _objectSpread({
      placeholder: '搜索角色'
    }, props.inputProps),
    defaultCheckedItems: defaultCheckedItems,
    showNodeParents: props.showNodeParents,
    isReviewMode: props.isReviewMode,
    afterNode: !SELECTABLE && MULTIPLE ? /*#__PURE__*/React.createElement(React.Fragment, null, defaultCheckedItems.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "role-drawer-footer-selected-info"
    }, /*#__PURE__*/React.createElement("span", null, "\u5DF2\u9009\uFF1A"), /*#__PURE__*/React.createElement("a", {
      onClick: function onClick() {
        setSelectedOpen(true);
      }
    }, defaultCheckedItems.length)), /*#__PURE__*/React.createElement(SelectedRoleTreeDrawer, {
      open: selectedOpen,
      checkedList: _toConsumableArray(defaultCheckedItems),
      removeSelectedRowKeys: removeSelectedRowKeys,
      onClose: function onClose() {
        // setState({ selectedOpen: false });
        setSelectedOpen(false);
      }
    })) : null
  }));
};
export default BusinessRoleDrawer;
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};