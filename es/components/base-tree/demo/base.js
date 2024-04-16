import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import KhtBaseTree from '@src/base-tree';
import { Button, message } from 'antd';
import { randomStr } from '@utils';
import { FileSearchOutlined } from '@ant-design/icons';
export default (function () {
  var _useState = useState([{
      title: 'parent 1',
      key: '1',
      children: [{
        title: 'parent 1-0',
        key: '2',
        suffix: '未开通',
        children: [{
          title: 'leaf1',
          key: '3',
          suffix: '未开通'
        }, {
          title: 'leaf',
          key: '4',
          children: [{
            icon: /*#__PURE__*/React.createElement(FileSearchOutlined, null),
            title: 'leaf1',
            key: '7'
          }]
        }]
      }, {
        title: 'parent 1-1',
        key: '5',
        children: [{
          title: 'sss',
          key: '6'
        }]
      }, {
        title: 'leaf1',
        key: '8',
        icon: /*#__PURE__*/React.createElement(FileSearchOutlined, null)
      }]
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    treeData = _useState2[0],
    setTreeData = _useState2[1];
  var _useState3 = useState(['2']),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedKeys = _useState4[0],
    setCheckedKeys = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    checkedItems = _useState6[0],
    setCheckedItems = _useState6[1];
  var treeRef = useRef(null);
  var onChangeCallback = function onChangeCallback(selectKeys, info) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var showSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (info.event == 'select') {
      setCheckedItems(info.selectedNodes);
    }
    if (info.event == 'check') {
      setCheckedItems(info.checkedNodes);
    }
  };
  var setDeptVisible = function setDeptVisible() {
    if (checkedItems.length == 0) {
      message.error('请先选择一个节点');
      return;
    }
    treeRef.current.addTreeDataChildren(checkedItems[0].key, [{
      title: '新增的节点',
      key: randomStr(),
      isLeaf: true
    }]);
  };
  var deleteDeptVisible = function deleteDeptVisible() {
    var _treeRef$current;
    if (checkedItems.length == 0) {
      message.error('请先选择一个节点');
      return;
    }
    (_treeRef$current = treeRef.current) === null || _treeRef$current === void 0 ? void 0 : _treeRef$current.deletTreeDataNode(checkedItems[0].treeParentKey, checkedItems[0].key);
  };
  var updataTreeNode = function updataTreeNode() {
    var _treeRef$current2;
    if (checkedItems.length == 0) {
      message.error('请先选择一个节点');
      return;
    }
    (_treeRef$current2 = treeRef.current) === null || _treeRef$current2 === void 0 ? void 0 : _treeRef$current2.updateTreeDataNode(checkedItems[0].key, {
      title: '更新title',
      text: 'ss',
      data: 'rrrr',
      icon: /*#__PURE__*/React.createElement(FileSearchOutlined, null)
    });
  };
  useEffect(function () {
    setCheckedKeys(checkedItems.map(function (item) {
      return item.key;
    }));
  }, [checkedItems]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: setDeptVisible
  }, '选中某节点新增子节点'), /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: deleteDeptVisible
  }, '选中某节点删除第一个节点'), /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: updataTreeNode
  }, '选中某节点更新第一个节点的名称'), /*#__PURE__*/React.createElement("div", {
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
    ref: treeRef,
    showIcon: true,
    selectable: true,
    treeData: treeData,
    checkedKeysSorce: checkedKeys,
    onChangeCallback: onChangeCallback,
    // canSelect={'username'}
    showTooltip: true,
    multiple: false,
    isUseSpellKey: false
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