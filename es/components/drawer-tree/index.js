import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import KhtBaseTree from '../base-tree';
import { Drawer, Button } from 'antd';
import style from "./style/index.module.css";
import { getTreeOneDimensional, objArrayRemoval, objArrayUnique, searchTreeNode } from '../../utils';
import { cloneDeep } from 'lodash';
export default function DrawerTree(props) {
  var _props$clickOkCancel, _props$height, _props$showSelectPane, _props$drawerProps4, _props$drawerProps5, _props$drawerProps6, _props$treeProps3;
  var _props$showHeadSelect = props.showHeadSelectFullText,
    showHeadSelectFullText = _props$showHeadSelect === void 0 ? true : _props$showHeadSelect;
  var CLICKOKCANCEL = (_props$clickOkCancel = props.clickOkCancel) !== null && _props$clickOkCancel !== void 0 ? _props$clickOkCancel : true;
  var HEIGHT = (_props$height = props.height) !== null && _props$height !== void 0 ? _props$height : false;
  var SHOWSELECTPANEL = (_props$showSelectPane = props.showSelectPanel) !== null && _props$showSelectPane !== void 0 ? _props$showSelectPane : true;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    checkedKeys = _useState2[0],
    setCheckedKeys = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedItems = _useState4[0],
    setCheckedItems = _useState4[1];
  var actionType = useRef({
    disableChildActionType: '',
    disableChildCheckedKeys: []
  });
  var baseTreeRef = useRef(null);
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    indeterminate = _useState6[0],
    setIndeterminate = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    footerCheckAllStatus = _useState8[0],
    setFooterCheckAllStatus = _useState8[1];
  /** 取消 */
  var onCancel = function onCancel(e) {
    var _props$drawerProps, _props$drawerProps2;
    if (!((_props$drawerProps = props.drawerProps) === null || _props$drawerProps === void 0 ? void 0 : _props$drawerProps.destroyOnClose)) {
      var _props$defaultChecked;
      if (props === null || props === void 0 ? void 0 : (_props$defaultChecked = props.defaultCheckedItems) === null || _props$defaultChecked === void 0 ? void 0 : _props$defaultChecked.length) {
        setCheckedItems(props.defaultCheckedItems);
      } else {
        setCheckedItems([]);
      }
    }
    if (((_props$drawerProps2 = props.drawerProps) === null || _props$drawerProps2 === void 0 ? void 0 : _props$drawerProps2.destroyOnClose) && !props.defaultCheckedItems.length) {
      setCheckedKeys([]);
      setCheckedItems([]);
      actionType.current = {
        disableChildActionType: '',
        disableChildCheckedKeys: []
      };
    }
    props.cancel && props.cancel();
  };
  /** 树组件触发选择或勾选时的回调 */
  var onChangeCallback = function onChangeCallback(selectedKeys, info) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var showSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    props.onChangeCallback && props.onChangeCallback(selectedKeys, info);
    var index = checkedItems.findIndex(function (item) {
      return item.key == info.node.key || info.node.key.split('_').pop() == item.key.split('_').pop();
    });
    if (info.event == 'check') {
      var _props$treeProps;
      if (info.isLoader && !showSearch && ((_props$treeProps = props.treeProps) === null || _props$treeProps === void 0 ? void 0 : _props$treeProps.disableChild)) {
        info.checkedNodes = info.checkedNodes.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            disabled: true
          });
        });
        handleDisableChildAction(info);
        return false;
      }
      if (info.merge && !showSearch) {
        //仅在 disableChild 属性时有效，  勾选时的处理
        if (!info.checked) {
          clearCheckedItemsData(info);
          return;
        }
        if (index == -1) {
          if (multiple) {
            handleDisableChildAction(info);
          } else {
            setCheckedItems([info.node]);
          }
        }
        if (index >= 0) {
          // 取消状态
          var checkitem = cloneDeep(checkedItems);
          checkitem.splice(index, 1);
          setCheckedItems(_toConsumableArray(checkitem));
          clearCheckedItemsData(info);
        }
        return false;
      }
      /** checked 模式，展开时独有的属性 */
      if (info.checkedStatus) {
        setCheckedItems(objArrayUnique([].concat(_toConsumableArray(checkedItems), _toConsumableArray(info.checkedNodes)), 'key'));
      } else {
        setCheckedItems(info.checkedNodes);
      }
    }
    if (info.event == 'select') {
      if (info.selected && index == -1) {
        var _props$treeProps2, _info$node;
        //选中状态
        var clearCheckedItems = [];
        // 处理已传 canSelect 参数的处理
        if ((_props$treeProps2 = props.treeProps) === null || _props$treeProps2 === void 0 ? void 0 : _props$treeProps2.canSelect) {
          if (!info.selectedNodes.length) return;
          if (multiple) {
            setCheckedItems(function (items) {
              return objArrayRemoval(items, [].concat(_toConsumableArray(clearCheckedItems), _toConsumableArray(info.selectedNodes)), 'key');
            });
          } else {
            setCheckedItems(info.selectedNodes);
          }
          return;
        }
        //单选或多选判断
        clearCheckedItems = multiple ? checkedItems : [], setCheckedItems([].concat(_toConsumableArray(clearCheckedItems), [_objectSpread({
          title: info.node.title,
          fullName: (_info$node = info.node) === null || _info$node === void 0 ? void 0 : _info$node.fullName
        }, info.node)]));
      }
      if (!info.selected && index >= 0) {
        //取消状态
        var _checkitem = cloneDeep(checkedItems);
        _checkitem.splice(index, 1);
        setCheckedItems(_toConsumableArray(_checkitem));
      }
    }
  };
  /** 处理所有子元素被禁用后 页面交互展示所需要的值 */
  var handleDisableChildAction = function handleDisableChildAction(info) {
    var _baseTreeRef$current, _parentData$, _parentData$3, _parentData$5;
    var newCheckedKeys = info.checkedNodes.filter(function (keys) {
      return !keys.disableCheckbox;
    }).map(function (item) {
      return item.key;
    });
    var parentData = searchTreeNode((_baseTreeRef$current = baseTreeRef.current) === null || _baseTreeRef$current === void 0 ? void 0 : _baseTreeRef$current.getTreeData, info.node.treeParentKey);
    var parentChild = parentData === null || parentData === void 0 ? void 0 : (_parentData$ = parentData[0]) === null || _parentData$ === void 0 ? void 0 : _parentData$.children.filter(function (keys) {
      return !keys.disableCheckbox;
    });
    var isCheckAllChild = (parentChild === null || parentChild === void 0 ? void 0 : parentChild.length) === checkedItems.filter(function (item) {
      var _parentData$2;
      return item.treeParentKey === ((_parentData$2 = parentData[0]) === null || _parentData$2 === void 0 ? void 0 : _parentData$2.key);
    }).length + (info.node.treeParentKey === ((_parentData$3 = parentData[0]) === null || _parentData$3 === void 0 ? void 0 : _parentData$3.key) ? 1 : 0);
    if (props.showNodeParents === 'parent') {
      if (isCheckAllChild && !(parentData === null || parentData === void 0 ? void 0 : parentData[0].disableCheckbox) && !(parentData === null || parentData === void 0 ? void 0 : parentData[0].level)) {
        var _baseTreeRef$current2, _baseTreeRef$current3;
        setCheckedItems(function (oldCheckedItems) {
          return [].concat(_toConsumableArray(oldCheckedItems.filter(function (keys) {
            var _parentData$4;
            return keys.treeParentKey !== ((_parentData$4 = parentData[0]) === null || _parentData$4 === void 0 ? void 0 : _parentData$4.key);
          })), _toConsumableArray(parentData));
        });
        if (info.checked) (_baseTreeRef$current2 = baseTreeRef.current) === null || _baseTreeRef$current2 === void 0 ? void 0 : (_baseTreeRef$current3 = _baseTreeRef$current2.setTreeDataNodeDisabled) === null || _baseTreeRef$current3 === void 0 ? void 0 : _baseTreeRef$current3.call(_baseTreeRef$current2, parentData === null || parentData === void 0 ? void 0 : parentData[0].key, true);
      } else {
        setCheckedItems(objArrayRemoval(checkedItems, info.checkedNodes.filter(function (item) {
          return !item.disabled;
        })));
      }
    }
    if (props.showNodeParents === 'children') {
      var _baseTreeRef$current4, _baseTreeRef$current5;
      if (info.checked && isCheckAllChild && !(parentData === null || parentData === void 0 ? void 0 : parentData[0].disableCheckbox) && !(parentData === null || parentData === void 0 ? void 0 : parentData[0].level)) (_baseTreeRef$current4 = baseTreeRef.current) === null || _baseTreeRef$current4 === void 0 ? void 0 : (_baseTreeRef$current5 = _baseTreeRef$current4.setTreeDataNodeDisabled) === null || _baseTreeRef$current5 === void 0 ? void 0 : _baseTreeRef$current5.call(_baseTreeRef$current4, parentData === null || parentData === void 0 ? void 0 : parentData[0].key, true);
      setCheckedItems(objArrayRemoval(checkedItems, info.checkedNodes.filter(function (item) {
        return info.checkedNodes.length > 1 ? item.disabled : true;
      }).filter(function (item) {
        return !item.disableCheckbox;
      })));
    }
    if (props.showNodeParents === undefined) {
      var _baseTreeRef$current6, _baseTreeRef$current7;
      if (info.checked && isCheckAllChild && !(parentData === null || parentData === void 0 ? void 0 : parentData[0].disableCheckbox) && !(parentData === null || parentData === void 0 ? void 0 : parentData[0].level)) (_baseTreeRef$current6 = baseTreeRef.current) === null || _baseTreeRef$current6 === void 0 ? void 0 : (_baseTreeRef$current7 = _baseTreeRef$current6.setTreeDataNodeDisabled) === null || _baseTreeRef$current7 === void 0 ? void 0 : _baseTreeRef$current7.call(_baseTreeRef$current6, parentData === null || parentData === void 0 ? void 0 : parentData[0].key, true);
      setCheckedItems(objArrayRemoval(checkedItems, [].concat(_toConsumableArray(info.checkedNodes), _toConsumableArray(isCheckAllChild && parentData || [])).filter(function (keys) {
        return !keys.disableCheckbox;
      })));
    }
    actionType.current.disableChildActionType = 'merge';
    actionType.current.disableChildCheckedKeys = [].concat(_toConsumableArray(actionType.current.disableChildCheckedKeys), _toConsumableArray(newCheckedKeys), _toConsumableArray(isCheckAllChild && !(parentData === null || parentData === void 0 ? void 0 : parentData[0].disableCheckbox) && [parentData === null || parentData === void 0 ? void 0 : (_parentData$5 = parentData[0]) === null || _parentData$5 === void 0 ? void 0 : _parentData$5.key] || []));
  };
  /** 删除已勾选状态 */
  var clearCheckedItemsData = function clearCheckedItemsData(info) {
    if (props.showNodeParents === 'parent') {
      var newCheckedKeys = getTreeOneDimensional([info.node]).map(function (item) {
        return item.key;
      });
      setCheckedItems(function (checkedItems) {
        return checkedItems.filter(function (item) {
          return !newCheckedKeys.includes(item.key);
        });
      });
      actionType.current.disableChildActionType = 'merge';
      actionType.current.disableChildCheckedKeys = actionType.current.disableChildCheckedKeys.filter(function (item) {
        return !newCheckedKeys.includes(item);
      });
    }
    if (props.showNodeParents === 'children' || props.showNodeParents === undefined) {
      var _newCheckedKeys = info.checkedNodes.map(function (item) {
        return item.key;
      });
      var checkitem = cloneDeep(checkedItems);
      checkitem = checkitem.filter(function (item) {
        return !_newCheckedKeys.includes(item.key);
      });
      setCheckedItems(_toConsumableArray(checkitem));
      actionType.current.disableChildActionType = 'merge';
      actionType.current.disableChildCheckedKeys = actionType.current.disableChildCheckedKeys.filter(function (item) {
        return !_newCheckedKeys.includes(item);
      });
    }
  };
  /** 删除已勾选或已选中的数据 */
  var deleteSelect = function deleteSelect(key) {
    var index = checkedItems.findIndex(function (item) {
      return item.key == key;
    });
    var checkitem = cloneDeep(checkedItems);
    checkitem.splice(index, 1);
    setCheckedItems(_toConsumableArray(checkitem));
    if (actionType.current.disableChildActionType == 'merge') {
      var _baseTreeRef$current8, _baseTreeRef$current9;
      actionType.current.disableChildCheckedKeys = actionType.current.disableChildCheckedKeys.filter(function (item) {
        return !item.includes(key);
      });
      (_baseTreeRef$current8 = baseTreeRef.current) === null || _baseTreeRef$current8 === void 0 ? void 0 : (_baseTreeRef$current9 = _baseTreeRef$current8.setTreeDataNodeDisabled) === null || _baseTreeRef$current9 === void 0 ? void 0 : _baseTreeRef$current9.call(_baseTreeRef$current8, key, false);
    }
  };
  var footerOnOk = function footerOnOk() {
    var _props$drawerProps3;
    if ((_props$drawerProps3 = props.drawerProps) === null || _props$drawerProps3 === void 0 ? void 0 : _props$drawerProps3.destroyOnClose) {
      setCheckedKeys([]);
      setCheckedItems([]);
      actionType.current = {
        disableChildActionType: '',
        disableChildCheckedKeys: []
      };
    }
    props.ok && props.ok(checkedItems);
    if (CLICKOKCANCEL) props.cancel && props.cancel();
  };
  /** 按钮集组 */
  var footerRender = /*#__PURE__*/React.createElement("div", {
    className: style['drawer-tree-footer']
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, (props === null || props === void 0 ? void 0 : props.cancelText) || '取消'), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: footerOnOk
  }, (props === null || props === void 0 ? void 0 : props.okText) || '确认'));
  useEffect(function () {
    if (props.defaultCheckedItems) {
      setCheckedKeys(props.defaultCheckedItems.map(function (item) {
        return item.key;
      }));
      setCheckedItems(props.defaultCheckedItems);
      if (!props.defaultCheckedItems.length) {
        if (actionType.current.disableChildActionType == 'merge') {
          var _baseTreeRef$current10, _baseTreeRef$current11;
          actionType.current.disableChildCheckedKeys = [];
          (_baseTreeRef$current10 = baseTreeRef.current) === null || _baseTreeRef$current10 === void 0 ? void 0 : (_baseTreeRef$current11 = _baseTreeRef$current10.setTreeDataNodeDisabled) === null || _baseTreeRef$current11 === void 0 ? void 0 : _baseTreeRef$current11.call(_baseTreeRef$current10, 'all', false);
        }
      }
    }
  }, [props.defaultCheckedItems]);
  useEffect(function () {
    if (actionType.current.disableChildActionType == 'merge') {
      setCheckedKeys([].concat(_toConsumableArray(checkedItems.map(function (item) {
        return item.key;
      })), _toConsumableArray(actionType.current.disableChildCheckedKeys)));
      return;
    }
    setCheckedKeys(checkedItems.map(function (item) {
      return item.key;
    }));
  }, [checkedItems]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Drawer, _objectSpread(_objectSpread({}, props.drawerProps), {}, {
    maskClosable: ((_props$drawerProps4 = props.drawerProps) === null || _props$drawerProps4 === void 0 ? void 0 : _props$drawerProps4.maskClosable) || false,
    title: ((_props$drawerProps5 = props.drawerProps) === null || _props$drawerProps5 === void 0 ? void 0 : _props$drawerProps5.title) || '请选择',
    width: ((_props$drawerProps6 = props.drawerProps) === null || _props$drawerProps6 === void 0 ? void 0 : _props$drawerProps6.width) || 800,
    className: "drawer-tree-wrapper-class",
    onClose: onCancel,
    getContainer: document.getElementById('root') || document.body,
    zIndex: 1100,
    footer: !props.isReviewMode && footerRender,
    bodyStyle: {
      padding: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: style['drawer-tree-wrapper-body']
  }, props.beforeNode, /*#__PURE__*/React.createElement("div", {
    className: style['drawer-tree-box']
  }, /*#__PURE__*/React.createElement(KhtBaseTree, _objectSpread(_objectSpread({
    ref: baseTreeRef,
    inputProps: _objectSpread({}, props.inputProps),
    onChangeCallback: onChangeCallback,
    inDrawerStyle: true,
    disableChild: ((_props$treeProps3 = props.treeProps) === null || _props$treeProps3 === void 0 ? void 0 : _props$treeProps3.disableChild) || Boolean(props.showNodeParents)
  }, props.treeProps), {}, {
    checkedKeysSorce: checkedKeys,
    showHeadSelectFullText: showHeadSelectFullText,
    toolTipProps: props.toolTipProps
  }))), props.afterNode)));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var DefaultCheckedItems = function DefaultCheckedItems(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};