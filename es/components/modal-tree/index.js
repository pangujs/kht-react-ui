import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import KhtBaseTree from '../base-tree';
import { Checkbox, Modal, Tooltip } from 'antd';
import style from "./style/index.module.css";
import KhtSortable from '../scrollbars';
import { CloseOutlined } from '@ant-design/icons';
import { getTreeOneDimensional, objArrayRemoval, objArrayUnique, searchTreeNode } from '../../utils';
import { cloneDeep } from 'lodash';
export default function ModalTree(props) {
  var _props$clickOkCancel, _props$height, _props$showSelectPane, _props$modalProps4, _props$modalProps5, _props$modalProps6, _props$modalProps7, _props$modalProps8, _props$treeProps3, _props$treeProps4, _props$showFooterBtn2;
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
    var _props$modalProps, _props$modalProps2;
    if (!((_props$modalProps = props.modalProps) === null || _props$modalProps === void 0 ? void 0 : _props$modalProps.destroyOnClose)) {
      var _props$defaultChecked;
      if (props === null || props === void 0 ? void 0 : (_props$defaultChecked = props.defaultCheckedItems) === null || _props$defaultChecked === void 0 ? void 0 : _props$defaultChecked.length) {
        setCheckedItems(props.defaultCheckedItems);
      } else {
        setCheckedItems([]);
      }
    }
    if (((_props$modalProps2 = props.modalProps) === null || _props$modalProps2 === void 0 ? void 0 : _props$modalProps2.destroyOnClose) && !props.defaultCheckedItems.length) {
      setCheckedKeys([]);
      setCheckedItems([]);
      actionType.current = {
        disableChildActionType: '',
        disableChildCheckedKeys: []
      };
    }
    props.cancel && props.cancel();
  };
  /** 确定 */
  var onOk = function onOk() {
    var _props$modalProps3;
    if ((_props$modalProps3 = props.modalProps) === null || _props$modalProps3 === void 0 ? void 0 : _props$modalProps3.destroyOnClose) {
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
  /** 渲染已选中列表 */
  var renderSelectItem = function renderSelectItem() {
    if (props.renderSelectItem && typeof props.renderSelectItem == 'function') return props.renderSelectItem();
    return checkedItems.map(function (item) {
      var _props$rightShowTitle, _props$toolTipProps, _props$toolTipProps2, _props$toolTipProps3, _props$rightShowTitle2, _props$rightShowTitle3;
      return /*#__PURE__*/React.createElement("div", {
        className: style['select-list'],
        key: item.key
      }, item.icon, props.showTooltip ? /*#__PURE__*/React.createElement(Tooltip, _objectSpread(_objectSpread({
        title: item[(_props$rightShowTitle = props.rightShowTitle) !== null && _props$rightShowTitle !== void 0 ? _props$rightShowTitle : 'fullName' || 'title'],
        color: ((_props$toolTipProps = props.toolTipProps) === null || _props$toolTipProps === void 0 ? void 0 : _props$toolTipProps.color) || '#fff',
        overlayInnerStyle: ((_props$toolTipProps2 = props.toolTipProps) === null || _props$toolTipProps2 === void 0 ? void 0 : _props$toolTipProps2.overlayInnerStyle) || {
          color: '#545454'
        },
        overlayStyle: {
          maxWidth: 'unset'
        },
        placement: ((_props$toolTipProps3 = props.toolTipProps) === null || _props$toolTipProps3 === void 0 ? void 0 : _props$toolTipProps3.placement) || 'bottomLeft',
        getPopupContainer: function getPopupContainer(node) {
          return node;
        }
      }, props.toolTipProps), {}, {
        key: 1
      }), /*#__PURE__*/React.createElement("span", {
        className: style['select-name']
      }, item[(_props$rightShowTitle2 = props.rightShowTitle) !== null && _props$rightShowTitle2 !== void 0 ? _props$rightShowTitle2 : 'title'])) : /*#__PURE__*/React.createElement("span", {
        className: style['select-name']
      }, item[(_props$rightShowTitle3 = props.rightShowTitle) !== null && _props$rightShowTitle3 !== void 0 ? _props$rightShowTitle3 : 'title']), /*#__PURE__*/React.createElement("span", {
        className: style['suffix']
      }, item.suffix), /*#__PURE__*/React.createElement(CloseOutlined, {
        className: style['select-icon'],
        style: {
          color: '#ccc'
        },
        onClick: function onClick() {
          deleteSelect(item.key);
        }
      }));
    });
  };
  /** 清空已选数据 */
  var clear = function clear() {
    setCheckedItems([]);
    if (actionType.current.disableChildActionType == 'merge') {
      var _baseTreeRef$current8, _baseTreeRef$current9;
      actionType.current.disableChildCheckedKeys = [];
      (_baseTreeRef$current8 = baseTreeRef.current) === null || _baseTreeRef$current8 === void 0 ? void 0 : (_baseTreeRef$current9 = _baseTreeRef$current8.setTreeDataNodeDisabled) === null || _baseTreeRef$current9 === void 0 ? void 0 : _baseTreeRef$current9.call(_baseTreeRef$current8, 'all', false);
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
      var _baseTreeRef$current10, _baseTreeRef$current11;
      actionType.current.disableChildCheckedKeys = actionType.current.disableChildCheckedKeys.filter(function (item) {
        return !item.includes(key);
      });
      (_baseTreeRef$current10 = baseTreeRef.current) === null || _baseTreeRef$current10 === void 0 ? void 0 : (_baseTreeRef$current11 = _baseTreeRef$current10.setTreeDataNodeDisabled) === null || _baseTreeRef$current11 === void 0 ? void 0 : _baseTreeRef$current11.call(_baseTreeRef$current10, key, false);
    }
  };
  /** 处理 footer 工具组相关的业务逻辑 */
  var handelFooterLogic = function handelFooterLogic() {
    var _props$showFooterBtn;
    if ((_props$showFooterBtn = props.showFooterBtn) === null || _props$showFooterBtn === void 0 ? void 0 : _props$showFooterBtn.includes('selectAll')) {
      var _baseTreeRef$current12, _baseTreeRef$current13, _baseTreeRef$current14, _baseTreeRef$current15, _baseTreeRef$current16, _baseTreeRef$current17, _baseTreeRef$current18, _baseTreeRef$current19, _baseTreeRef$current20, _baseTreeRef$current21;
      if (checkedItems.length && ((_baseTreeRef$current12 = baseTreeRef.current) === null || _baseTreeRef$current12 === void 0 ? void 0 : (_baseTreeRef$current13 = _baseTreeRef$current12.getToolContent) === null || _baseTreeRef$current13 === void 0 ? void 0 : _baseTreeRef$current13.canSelectNumber) != checkedItems.length) {
        setIndeterminate(true);
      } else {
        setIndeterminate(false);
      }
      console.log('可选、是否模糊搜索状态', (_baseTreeRef$current14 = baseTreeRef.current) === null || _baseTreeRef$current14 === void 0 ? void 0 : (_baseTreeRef$current15 = _baseTreeRef$current14.getToolContent) === null || _baseTreeRef$current15 === void 0 ? void 0 : _baseTreeRef$current15.canSelectNumber, (_baseTreeRef$current16 = baseTreeRef.current) === null || _baseTreeRef$current16 === void 0 ? void 0 : (_baseTreeRef$current17 = _baseTreeRef$current16.getToolContent) === null || _baseTreeRef$current17 === void 0 ? void 0 : _baseTreeRef$current17.isSearch, checkedItems.length);
      if (((_baseTreeRef$current18 = baseTreeRef.current) === null || _baseTreeRef$current18 === void 0 ? void 0 : (_baseTreeRef$current19 = _baseTreeRef$current18.getToolContent) === null || _baseTreeRef$current19 === void 0 ? void 0 : _baseTreeRef$current19.canSelectNumber) && ((_baseTreeRef$current20 = baseTreeRef.current) === null || _baseTreeRef$current20 === void 0 ? void 0 : (_baseTreeRef$current21 = _baseTreeRef$current20.getToolContent) === null || _baseTreeRef$current21 === void 0 ? void 0 : _baseTreeRef$current21.canSelectNumber) == checkedItems.length) {
        setFooterCheckAllStatus(true);
      } else {
        setFooterCheckAllStatus(false);
      }
    }
  };
  /** 按钮集组 */
  var FooterRender = function FooterRender() {
    var footerCheckAllChange = function footerCheckAllChange(e) {
      setIndeterminate(false);
      setFooterCheckAllStatus(e.target.checked);
      if (e.target.checked) {
        var _baseTreeRef$current22, _baseTreeRef$current23, _baseTreeRef$current24, _baseTreeRef$current25;
        var getTreeData = !((_baseTreeRef$current22 = baseTreeRef.current) === null || _baseTreeRef$current22 === void 0 ? void 0 : (_baseTreeRef$current23 = _baseTreeRef$current22.getToolContent) === null || _baseTreeRef$current23 === void 0 ? void 0 : _baseTreeRef$current23.isSearch) ? (_baseTreeRef$current24 = baseTreeRef.current) === null || _baseTreeRef$current24 === void 0 ? void 0 : _baseTreeRef$current24.getTreeData : (_baseTreeRef$current25 = baseTreeRef.current) === null || _baseTreeRef$current25 === void 0 ? void 0 : _baseTreeRef$current25.getSearchTreeData;
        var nodeData = getTreeOneDimensional(getTreeData);
        setCheckedItems(nodeData);
      } else {
        setCheckedItems([]);
      }
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: style['item-checkbox']
    }, /*#__PURE__*/React.createElement(Checkbox, {
      indeterminate: indeterminate,
      onChange: footerCheckAllChange,
      checked: footerCheckAllStatus
    }, "\u5168\u9009")));
  };
  useEffect(function () {
    setCheckedKeys(props.defaultCheckedItems.map(function (item) {
      return item.key;
    }));
    setCheckedItems(props.defaultCheckedItems);
  }, [props.defaultCheckedItems]);
  useEffect(function () {
    handelFooterLogic();
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, _objectSpread(_objectSpread({}, props.modalProps), {}, {
    maskClosable: ((_props$modalProps4 = props.modalProps) === null || _props$modalProps4 === void 0 ? void 0 : _props$modalProps4.maskClosable) || false,
    title: ((_props$modalProps5 = props.modalProps) === null || _props$modalProps5 === void 0 ? void 0 : _props$modalProps5.title) || '请选择',
    width: ((_props$modalProps6 = props.modalProps) === null || _props$modalProps6 === void 0 ? void 0 : _props$modalProps6.width) || 800,
    wrapClassName: style['wrapClassName'],
    onCancel: onCancel,
    onOk: onOk,
    okText: ((_props$modalProps7 = props.modalProps) === null || _props$modalProps7 === void 0 ? void 0 : _props$modalProps7.okText) || '确认',
    cancelText: ((_props$modalProps8 = props.modalProps) === null || _props$modalProps8 === void 0 ? void 0 : _props$modalProps8.cancelText) || '取消',
    getContainer: document.getElementById('root') || document.body,
    zIndex: 1100
  }), /*#__PURE__*/React.createElement("div", {
    className: style['modal-tree-container']
  }, /*#__PURE__*/React.createElement("div", {
    className: style['tree-sorce']
  }, props.beforeNode, /*#__PURE__*/React.createElement(KhtBaseTree, _objectSpread({
    ref: baseTreeRef,
    checkedKeysSorce: checkedKeys,
    inputProps: _objectSpread({}, props.inputProps),
    height: HEIGHT ? 410 : undefined,
    onChangeCallback: onChangeCallback,
    inModalStyle: true,
    showTooltip: (_props$treeProps3 = props.treeProps) === null || _props$treeProps3 === void 0 ? void 0 : _props$treeProps3.showTooltip,
    disableChild: ((_props$treeProps4 = props.treeProps) === null || _props$treeProps4 === void 0 ? void 0 : _props$treeProps4.disableChild) || Boolean(props.showNodeParents)
  }, props.treeProps))), /*#__PURE__*/React.createElement("div", {
    className: style['select-item'],
    style: {
      display: SHOWSELECTPANEL ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: style['tools-styl']
  }, /*#__PURE__*/React.createElement("span", {
    className: style['tools-select']
  }, "\u5DF2\u9009: ", /*#__PURE__*/React.createElement("i", null, checkedItems === null || checkedItems === void 0 ? void 0 : checkedItems.length)), /*#__PURE__*/React.createElement("span", {
    className: style['tools-clear'],
    onClick: clear
  }, "\u6E05\u7A7A")), /*#__PURE__*/React.createElement(KhtSortable, null, renderSelectItem()))), /*#__PURE__*/React.createElement("div", {
    className: style['modal-footer']
  }, ((_props$showFooterBtn2 = props.showFooterBtn) === null || _props$showFooterBtn2 === void 0 ? void 0 : _props$showFooterBtn2.length) && /*#__PURE__*/React.createElement(FooterRender, null))));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var DefaultCheckedItems = function DefaultCheckedItems(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};