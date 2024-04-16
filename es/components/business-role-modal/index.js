import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Empty, Input, Modal, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import style from "./index.module.css";
import KhtSortable from '../scrollbars';
import { CheckOutlined, SearchOutlined, CloseOutlined, CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';
import { getLeftRoleList, getLeftRoleByRoleType } from '../../http/api';
import { cloneDeep } from 'lodash';
var TabsCheckItemChildren = function TabsCheckItemChildren(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 350
    },
    key: 2
  }, props.itemList.length ? /*#__PURE__*/React.createElement(KhtSortable, null, props.itemList.map(function (item) {
    var _props$selectItems$pr;
    return /*#__PURE__*/React.createElement("div", {
      key: item.name,
      className: "".concat(style['item']),
      onClick: function onClick() {
        return props.selectItemEvent(item, props.type);
      }
    }, /*#__PURE__*/React.createElement("span", null, item.name), /*#__PURE__*/React.createElement("span", null, !!((_props$selectItems$pr = props.selectItems[props.type]) === null || _props$selectItems$pr === void 0 ? void 0 : _props$selectItems$pr.filter(function (keys) {
      return keys.id === item.id;
    }).length) && /*#__PURE__*/React.createElement(CheckOutlined, {
      className: style['selectable']
    })), !props.type && /*#__PURE__*/React.createElement(CloseOutlined, {
      className: style['select-icon'],
      style: {
        color: '#ccc'
      },
      onClick: function onClick(e) {
        props.deleteSelect(item.id, e);
      }
    }));
  })) : props.type && /*#__PURE__*/React.createElement(Empty, {
    description: "\u6682\u65E0\u6570\u636E"
  }));
};
var TabsItemChildren = function TabsItemChildren(props) {
  var _props$itemList;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 350
    },
    key: 2
  }, ((_props$itemList = props.itemList) === null || _props$itemList === void 0 ? void 0 : _props$itemList.length) ? /*#__PURE__*/React.createElement(KhtSortable, null, props.itemList.map(function (item, index) {
    var _item$children;
    return /*#__PURE__*/React.createElement("div", {
      key: item.id
    }, /*#__PURE__*/React.createElement("div", {
      key: item.name,
      className: "".concat(style['item'])
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        marginRight: 5
      },
      onClick: function onClick() {
        return props.checkExpandStatus(index);
      }
    }, item.expand ? /*#__PURE__*/React.createElement(CaretRightOutlined, null) : /*#__PURE__*/React.createElement(CaretDownOutlined, null)), /*#__PURE__*/React.createElement("span", null, item.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: item.expand ? 'none' : 'block',
        marginLeft: 20
      }
    }, (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.map(function (item, number) {
      var _props$selectItems$pr2;
      return /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return props.selectItemEvent(item, props.type);
        },
        key: number,
        style: {
          cursor: 'pointer'
        }
      }, /*#__PURE__*/React.createElement("span", null, item.name), /*#__PURE__*/React.createElement("span", null, !!((_props$selectItems$pr2 = props.selectItems[props.type]) === null || _props$selectItems$pr2 === void 0 ? void 0 : _props$selectItems$pr2.filter(function (keys) {
        return keys.id === item.id;
      }).length) && /*#__PURE__*/React.createElement(CheckOutlined, {
        className: style['selectable']
      })));
    })));
  })) : props.type && /*#__PURE__*/React.createElement(Empty, {
    description: "\u6682\u65E0\u6570\u636E"
  }));
};
export default function BusinessRoleModal(props) {
  var _props$multiple, _props$modalProps5, _props$modalProps6, _props$modalProps7, _props$modalProps8, _props$modalProps9, _props$modalProps10, _props$inputProps, _props$inputProps2;
  var CLICKOKCANCEL = props.clickOkCancel || typeof props.clickOkCancel == 'undefined';
  var MULTIPLE = (_props$multiple = props.multiple) !== null && _props$multiple !== void 0 ? _props$multiple : true;
  var _useState = useState({
      organizationRole: [],
      businessRole: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    sourceData = _useState2[0],
    setSourceData = _useState2[1];
  var _useState3 = useState({
      organizationRole: [],
      businessRole: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    cacheSourceData = _useState4[0],
    setCacheSourceData = _useState4[1];
  var _useState5 = useState({
      organizationRole: [],
      businessRole: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    selectItems = _useState6[0],
    setSelectItems = _useState6[1];
  var _useState7 = useState('businessRole'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectTabs = _useState8[0],
    setSelectTabs = _useState8[1];
  /** 取消 */
  var onCancel = function onCancel(e) {
    var _props$modalProps, _props$modalProps2;
    if (!((_props$modalProps = props.modalProps) === null || _props$modalProps === void 0 ? void 0 : _props$modalProps.destroyOnClose)) {
      if (props === null || props === void 0 ? void 0 : props.defaultCheckedItems) {
        setSelectItems(props.defaultCheckedItems);
      } else {
        setSelectItems({
          organizationRole: [],
          businessRole: []
        });
      }
    }
    if ((_props$modalProps2 = props.modalProps) === null || _props$modalProps2 === void 0 ? void 0 : _props$modalProps2.destroyOnClose) {
      setSelectItems({
        organizationRole: [],
        businessRole: []
      });
    }
    props.cancel && props.cancel();
  };
  /** 确定 */
  var onOk = function onOk() {
    var _props$modalProps3;
    if ((_props$modalProps3 = props.modalProps) === null || _props$modalProps3 === void 0 ? void 0 : _props$modalProps3.destroyOnClose) {
      setSelectItems({
        organizationRole: [],
        businessRole: []
      });
    }
    props.ok && props.ok(selectItems);
    if (CLICKOKCANCEL) props.cancel && props.cancel();
  };
  /** 清除 */
  var clear = function clear() {
    setSelectItems({
      organizationRole: [],
      businessRole: []
    });
  };
  /** 选中某一项 */
  var selectItemEvent = function selectItemEvent(item, type) {
    var _selectItems$type;
    if (!type) return;
    var index = (_selectItems$type = selectItems[type]) === null || _selectItems$type === void 0 ? void 0 : _selectItems$type.findIndex(function (list) {
      return list.id == item.id;
    });
    if (index == -1) {
      if (MULTIPLE) {
        setSelectItems(_objectSpread(_objectSpread({}, selectItems), {}, _defineProperty({}, type, [].concat(_toConsumableArray(selectItems[type]), [item]))));
      } else {
        setSelectItems(_objectSpread(_objectSpread({}, selectItems), {}, _defineProperty({}, type, [item])));
      }
    } else {
      var items = _toConsumableArray(selectItems[type]);
      items.splice(index, 1);
      setSelectItems(_objectSpread(_objectSpread({}, selectItems), {}, _defineProperty({}, type, items)));
    }
  };
  /** 输入框 change 事件 */
  var inputChange = function inputChange(e) {
    var value = e.target.value;
    var cachData = cloneDeep(cacheSourceData);
    if (!value) {
      setSourceData(cachData);
      return;
    }
    var searchObj = {
      organizationRole: [],
      businessRole: []
    };
    searchObj.organizationRole = cachData.organizationRole.filter(function (keys) {
      keys.expand = false;
      keys.children = keys.children.filter(function (list) {
        return list.name.includes(value);
      });
      return keys.name.includes(value) || !!keys.children.length;
    });
    searchObj.businessRole = cachData.businessRole.filter(function (keys) {
      keys.expand = false;
      keys.children = keys.children.filter(function (list) {
        return list.name.includes(value);
      });
      return keys.name.includes(value) || !!keys.children.length;
    });
    setSourceData(searchObj);
  };
  /** 删除某一项 */
  var deleteSelect = function deleteSelect(id, e) {
    e.stopPropagation();
    var index = selectItems[selectTabs].findIndex(function (list) {
      return list.id == id;
    });
    var items = _toConsumableArray(selectItems[selectTabs]);
    items.splice(index, 1);
    setSelectItems(_objectSpread(_objectSpread({}, selectItems), {}, _defineProperty({}, selectTabs, items)));
  };
  /** 切换展开状态 */
  var checkExpandStatus = function checkExpandStatus(index) {
    var copyData = cloneDeep(sourceData);
    copyData[selectTabs][index].expand = !copyData[selectTabs][index].expand;
    setSourceData(copyData);
  };
  /** 切换 tabs */
  var tabsChange = function tabsChange(type) {
    setSelectTabs(type);
  };
  var tabsSource = [{
    label: "\u7EC4\u7EC7\u89D2\u8272",
    key: 'organizationRole',
    children: /*#__PURE__*/React.createElement(TabsItemChildren, {
      key: 1,
      itemList: sourceData.organizationRole,
      type: 'organizationRole',
      deleteSelect: deleteSelect,
      selectItemEvent: selectItemEvent,
      selectItems: selectItems,
      checkExpandStatus: checkExpandStatus
    })
  }, {
    label: "\u4E1A\u52A1\u89D2\u8272",
    key: 'businessRole',
    children: /*#__PURE__*/React.createElement(TabsItemChildren, {
      key: 2,
      itemList: sourceData.businessRole,
      type: 'businessRole',
      deleteSelect: deleteSelect,
      selectItemEvent: selectItemEvent,
      selectItems: selectItems,
      checkExpandStatus: checkExpandStatus
    })
  }];
  var tabsItem = [{
    label: "\u7EC4\u7EC7\u89D2\u8272",
    key: 'organizationRole',
    children: /*#__PURE__*/React.createElement(TabsCheckItemChildren, {
      key: 3,
      itemList: selectItems.organizationRole,
      deleteSelect: deleteSelect,
      selectItemEvent: selectItemEvent,
      selectItems: selectItems
    })
  }, {
    label: "\u4E1A\u52A1\u89D2\u8272",
    key: 'businessRole',
    children: /*#__PURE__*/React.createElement(TabsCheckItemChildren, {
      key: 4,
      itemList: selectItems.businessRole,
      deleteSelect: deleteSelect,
      selectItemEvent: selectItemEvent,
      selectItems: selectItems
    })
  }];
  /** 请求 组织/业务下的 角色  */
  var initRoleData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var organizationRoot, organizationChildren, businessRoot, businessChildren, _organizationRoot$res, org, _businessRoot$respons, bus, _organizationRoot$res2, _businessRoot$respons2, _org, _bus;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            organizationRoot = {};
            organizationChildren = [];
            businessRoot = {};
            businessChildren = [];
            if (!(props.showRole == 'organizationRole' || !props.showRole)) {
              _context.next = 12;
              break;
            }
            _context.next = 7;
            return getLeftRoleByRoleType(_objectSpread(_objectSpread({}, props.roleClassParams || {}), {}, {
              roleType: 'organization'
            }));
          case 7:
            organizationRoot = _context.sent;
            _context.next = 10;
            return getLeftRoleList(_objectSpread(_objectSpread({}, props.roleParams || {}), {}, {
              roleType: 'organization'
            }));
          case 10:
            organizationChildren = _context.sent;
            if (organizationRoot.success && props.showRole == 'organizationRole') {
              org = (_organizationRoot$res = organizationRoot.response) === null || _organizationRoot$res === void 0 ? void 0 : _organizationRoot$res.map(function (item, index) {
                var _organizationChildren;
                item.children = (_organizationChildren = organizationChildren) === null || _organizationChildren === void 0 ? void 0 : _organizationChildren.response.filter(function (keys) {
                  return item.manageType == keys.manageType;
                });
                item.expand = !(index == 0);
                return item;
              });
              setCacheSourceData({
                organizationRole: org,
                businessRole: cacheSourceData.businessRole
              });
              setSourceData({
                organizationRole: org,
                businessRole: sourceData.businessRole
              });
            }
          case 12:
            if (!(props.showRole == 'businessRole' || !props.showRole)) {
              _context.next = 20;
              break;
            }
            _context.next = 15;
            return getLeftRoleByRoleType(_objectSpread(_objectSpread({}, props.roleClassParams || ''), {}, {
              roleType: 'business'
            }));
          case 15:
            businessRoot = _context.sent;
            _context.next = 18;
            return getLeftRoleList(_objectSpread(_objectSpread({}, props.roleParams || {}), {}, {
              roleType: 'business'
            }));
          case 18:
            businessChildren = _context.sent;
            if (businessRoot.success && props.showRole == 'businessRole') {
              bus = (_businessRoot$respons = businessRoot.response) === null || _businessRoot$respons === void 0 ? void 0 : _businessRoot$respons.map(function (item, index) {
                var _businessChildren;
                item.children = (_businessChildren = businessChildren) === null || _businessChildren === void 0 ? void 0 : _businessChildren.response.filter(function (keys) {
                  return item.manageType == keys.manageType;
                });
                item.expand = !(index == 0);
                return item;
              });
              setCacheSourceData({
                organizationRole: cacheSourceData.organizationRole,
                businessRole: bus
              });
              setSourceData({
                organizationRole: sourceData.organizationRole,
                businessRole: bus
              });
            }
          case 20:
            if ((organizationRoot.success || businessRoot.success) && !props.showRole) {
              _org = (_organizationRoot$res2 = organizationRoot.response) === null || _organizationRoot$res2 === void 0 ? void 0 : _organizationRoot$res2.map(function (item, index) {
                var _organizationChildren2;
                item.children = (_organizationChildren2 = organizationChildren) === null || _organizationChildren2 === void 0 ? void 0 : _organizationChildren2.response.filter(function (keys) {
                  return item.manageType == keys.manageType;
                });
                item.expand = !(index == 0);
                return item;
              });
              _bus = (_businessRoot$respons2 = businessRoot.response) === null || _businessRoot$respons2 === void 0 ? void 0 : _businessRoot$respons2.map(function (item, index) {
                var _businessChildren2;
                item.children = (_businessChildren2 = businessChildren) === null || _businessChildren2 === void 0 ? void 0 : _businessChildren2.response.filter(function (keys) {
                  return item.manageType == keys.manageType;
                });
                item.expand = !(index == 0);
                return item;
              });
              setCacheSourceData({
                organizationRole: _org,
                businessRole: _bus
              });
              setSourceData({
                organizationRole: _org,
                businessRole: _bus
              });
            }
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function initRoleData() {
      return _ref.apply(this, arguments);
    };
  }();
  useEffect(function () {
    var _props$modalProps4;
    if ((_props$modalProps4 = props.modalProps) === null || _props$modalProps4 === void 0 ? void 0 : _props$modalProps4.open // (props.modalProps?.destroyOnClose &&
    //   (cacheSourceData.organizationRole.length == 0 ||
    //   cacheSourceData.businessRole.length == 0) )
    ) {
      initRoleData();
    }
  }, [(_props$modalProps5 = props.modalProps) === null || _props$modalProps5 === void 0 ? void 0 : _props$modalProps5.open]);
  useEffect(function () {
    if (props.showRole) setSelectTabs(props.showRole || 'businessRole');
  }, [props.showRole]);
  useEffect(function () {
    if (props.defaultCheckedItems) {
      setSelectItems(props.defaultCheckedItems);
    }
  }, [props.defaultCheckedItems]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, _objectSpread({
    maskClosable: ((_props$modalProps6 = props.modalProps) === null || _props$modalProps6 === void 0 ? void 0 : _props$modalProps6.maskClosable) || false,
    title: ((_props$modalProps7 = props.modalProps) === null || _props$modalProps7 === void 0 ? void 0 : _props$modalProps7.title) || '选择角色',
    width: ((_props$modalProps8 = props.modalProps) === null || _props$modalProps8 === void 0 ? void 0 : _props$modalProps8.width) || 800,
    wrapClassName: style['wrapClassName'],
    onCancel: onCancel,
    onOk: onOk,
    okText: ((_props$modalProps9 = props.modalProps) === null || _props$modalProps9 === void 0 ? void 0 : _props$modalProps9.okText) || '确认',
    cancelText: ((_props$modalProps10 = props.modalProps) === null || _props$modalProps10 === void 0 ? void 0 : _props$modalProps10.cancelText) || '取消',
    getContainer: document.getElementById('root') || document.body,
    zIndex: 1100
  }, props.modalProps), /*#__PURE__*/React.createElement("div", {
    className: style['modal-tree-container']
  }, /*#__PURE__*/React.createElement("div", {
    className: style['tree-sorce']
  }, /*#__PURE__*/React.createElement(Input, _objectSpread(_objectSpread({
    style: {
      marginBottom: 8,
      width: '98%'
    }
  }, props.inputProps), {}, {
    placeholder: ((_props$inputProps = props.inputProps) === null || _props$inputProps === void 0 ? void 0 : _props$inputProps.placeholder) || '按关键词搜索',
    prefix: ((_props$inputProps2 = props.inputProps) === null || _props$inputProps2 === void 0 ? void 0 : _props$inputProps2.prefix) || /*#__PURE__*/React.createElement(SearchOutlined, null),
    onChange: inputChange
  })), props.showRole ? /*#__PURE__*/React.createElement(TabsItemChildren, {
    itemList: sourceData[props.showRole],
    type: props.showRole,
    selectItems: selectItems,
    selectItemEvent: selectItemEvent,
    deleteSelect: deleteSelect,
    checkExpandStatus: checkExpandStatus
  }) : /*#__PURE__*/React.createElement(Tabs, _objectSpread(_objectSpread({
    onChange: tabsChange,
    items: tabsSource
  }, props.tabsProps), {}, {
    defaultActiveKey: props.activeKey
  }))), /*#__PURE__*/React.createElement("div", {
    className: style['select-item']
  }, /*#__PURE__*/React.createElement("div", {
    className: style['tools-styl']
  }, /*#__PURE__*/React.createElement("span", {
    className: style['tools-select']
  }, "\u5DF2\u9009: ", /*#__PURE__*/React.createElement("i", null, selectItems.organizationRole.length + selectItems.businessRole.length)), /*#__PURE__*/React.createElement("span", {
    className: style['tools-clear'],
    onClick: clear
  }, "\u6E05\u7A7A")), /*#__PURE__*/React.createElement("div", null, props.showRole ? /*#__PURE__*/React.createElement(TabsCheckItemChildren, {
    itemList: selectItems[props.showRole],
    selectItems: selectItems,
    selectItemEvent: selectItemEvent,
    deleteSelect: deleteSelect,
    checkExpandStatus: checkExpandStatus
  }) : /*#__PURE__*/React.createElement(Tabs, _objectSpread(_objectSpread({
    items: tabsItem
  }, props.tabsProps), {}, {
    defaultActiveKey: props.activeKey
  })))))));
}