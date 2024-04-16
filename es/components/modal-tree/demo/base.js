import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import KhtModalTree from '@src/modal-tree';
import { useModalVisible } from '@hooks';
import { Button, message, Radio, Switch } from 'antd';
import { getOrganizational, getOrganizationalChildren } from './mock';
import { waitTime } from '@utils';
import { FileSearchOutlined } from '@ant-design/icons';
export default (function () {
  var _useModalVisible = useModalVisible(),
    visible = _useModalVisible.visible,
    changeStatus = _useModalVisible.changeStatus;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    treeData = _useState2[0],
    setTreeData = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultExpandedKeys = _useState4[0],
    setDefaultExpandedKeys = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    destroy = _useState6[0],
    setDestroy = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectItems = _useState8[0],
    setSelectItems = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    defaultCheckedItems = _useState10[0],
    setDefaultCheckedItems = _useState10[1];
  var _useState11 = useState(true),
    _useState12 = _slicedToArray(_useState11, 2),
    multiple = _useState12[0],
    setMultiple = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isCheck = _useState14[0],
    setIsCheck = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    disableChild = _useState16[0],
    setDisableChild = _useState16[1];
  var _useState17 = useState(true),
    _useState18 = _slicedToArray(_useState17, 2),
    showSearch = _useState18[0],
    setShowSearch = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    pageLoad = _useState20[0],
    setPageLoad = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    tooltip = _useState22[0],
    setTooltip = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    footerBtn = _useState24[0],
    setFooterBtn = _useState24[1];
  var _useState25 = useState(),
    _useState26 = _slicedToArray(_useState25, 2),
    showType = _useState26[0],
    setShowType = _useState26[1];
  var cancel = function cancel() {
    changeStatus(!visible);
  };
  /** 确认按钮的回调 */
  var ok = function ok(selectNode) {
    console.log('已选取的数据', selectNode);
    setSelectItems(selectNode);
    setDefaultCheckedItems(selectNode);
  };
  /** 请求 树形 根节点 */
  var mockRootData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            result = getOrganizational();
            setDefaultExpandedKeys([result.data[0].id]);
            setTreeData(result.data.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                key: item.id,
                title: item.name,
                isLeaf: false,
                icon: /*#__PURE__*/React.createElement(FileSearchOutlined, null),
                children: []
                // disableCheckbox: true,
              });
            }));
          case 3:
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
  var loadData = function loadData(_ref2) {
    var key = _ref2.key,
      children = _ref2.children;
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        var result, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!children.length) {
                _context2.next = 3;
                break;
              }
              resolve({
                data: [],
                key: ''
              });
              return _context2.abrupt("return");
            case 3:
              _context2.next = 5;
              return waitTime(1000);
            case 5:
              /** key 值调接口时请使用 treeNode.id */
              result = getOrganizationalChildren();
              /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
              data = result.data.map(function (item, index) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  key: item.id,
                  title: item.name,
                  isLeaf: false,
                  icon: /*#__PURE__*/React.createElement(FileSearchOutlined, null),
                  children: []
                  // suffix: "未开通"
                  // disableCheckbox: index % 2 == 0 ? true : false,
                  // [index % 2 == 0 ? 'suffix' : 'bb']: "已是管理员",
                });
              });

              console.log('懒加载后组装的数据: ', data);
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
        return _ref3.apply(this, arguments);
      };
    }());
  };
  /** 搜索关键词的回调 */
  var onSearchTreeData = function onSearchTreeData(e) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              console.log('回车搜索值：', e.target.value);
              _context3.next = 3;
              return waitTime(1000);
            case 3:
              result = getOrganizationalChildren();
              setTreeData(result.data.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  title: item.name,
                  key: item.id,
                  isLeaf: false,
                  children: []
                });
              }));
              resolve(undefined);
            case 6:
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
  /** 分页加载回调 */
  var onLoadMore = function onLoadMore(currentData) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve) {
        var result, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              message.success('当前页码: ' + currentData.page.pageNo);
              _context4.next = 3;
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
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
  };
  /** 卸载 Modal 组件 */
  var onSwitchChange = function onSwitchChange(checked) {
    setDestroy(checked);
  };
  /** 是否是单选 */
  var onMultipleChange = function onMultipleChange(checked) {
    setMultiple(checked);
  };
  /** 是否开启 checkable 模式 */
  var onIsCheckChange = function onIsCheckChange(checked) {
    setIsCheck(checked);
    setDisableChild(false);
  };
  /** 是否开启禁用子节点模式 */
  var onDisableChildChange = function onDisableChildChange(checked) {
    setDisableChild(checked);
    setIsCheck(true);
  };
  /** 是否开启 tree 远端搜索模式 */
  var onShowSearchChange = function onShowSearchChange(checked) {
    setShowSearch(checked);
  };
  /** 是否开启分页加载功能 */
  var onPageLoadChange = function onPageLoadChange(checked) {
    setPageLoad(checked);
  };
  /** 是否开启 tooltip 展示 */
  var onTooltipChange = function onTooltipChange(checked) {
    setTooltip(checked);
  };
  /** 是否开启 footer 功能组展示 */
  var onFooterChange = function onFooterChange(checked) {
    setFooterBtn(checked);
  };
  var onChangeShowType = function onChangeShowType(e) {
    setShowType(e.target.value);
    if (e.target.value == 'parent' || e.target.value == 'children') {
      setDisableChild(true);
      setIsCheck(true);
    }
  };
  /** 自定义请求 tooltipContent 内容 */
  var customTooltipContent = function customTooltipContent(treeNode) {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve) {
        var fullName;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              fullName = '自定义请求 tooltipContent 内容';
              resolve({
                fullName: fullName
              });
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());
  };
  useEffect(function () {
    mockRootData();
  }, []);
  // useEffect(() => {
  // },[defaultCheckedItems])
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5378\u8F7D Modal \u7EC4\u4EF6\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: destroy,
    onChange: onSwitchChange
  })), /*#__PURE__*/React.createElement("span", {
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
  }, "\u662F\u5426\u5F00\u542F tree \u8FDC\u7AEF\u641C\u7D22\u6A21\u5F0F\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: showSearch,
    onChange: onShowSearchChange
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
  }, "\u662F\u5426\u5F00\u542F tooltip \u5C55\u793A\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: tooltip,
    onChange: onTooltipChange
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F\u53F3\u4FA7\u5C55\u793A\u7C7B\u578B\u6A21\u5F0F\uFF1A", /*#__PURE__*/React.createElement(Radio.Group, {
    onChange: onChangeShowType,
    value: showType
  }, /*#__PURE__*/React.createElement(Radio, {
    value: undefined
  }, "\u5168\u90E8"), /*#__PURE__*/React.createElement(Radio, {
    value: 'parent'
  }, "\u7236\u8282\u70B9"), /*#__PURE__*/React.createElement(Radio, {
    value: 'children'
  }, "\u5B50\u8282\u70B9"))), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 25px',
      display: 'inline-block'
    }
  }, "\u662F\u5426\u5F00\u542F\u529F\u80FD\u7EC4\uFF1A", /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    checked: footerBtn,
    onChange: onFooterChange
  }))), /*#__PURE__*/React.createElement(Button, {
    key: "import",
    onClick: changeStatus
  }, "\u7EC4\u7EC7\u67B6\u6784"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, "\u5DF2\u9009\u4E2D\u6570\u636E\uFF1A", selectItems.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.key
    }, item.title);
  })), /*#__PURE__*/React.createElement(KhtModalTree, {
    modalProps: {
      visible: visible,
      destroyOnClose: destroy
    },
    treeProps: {
      showIcon: true,
      treeData: treeData,
      loadData: loadData,
      selectable: !isCheck,
      multiple: multiple,
      disableChild: disableChild,
      showSearch: showSearch,
      onSearchTreeData: onSearchTreeData,
      isPageLoad: pageLoad,
      onLoadMore: onLoadMore,
      defaultExpandedKeys: defaultExpandedKeys,
      showTooltip: tooltip,
      customTooltipContent: customTooltipContent
    },
    cancel: cancel,
    ok: ok,
    defaultCheckedItems: defaultCheckedItems,
    showNodeParents: showType,
    showTooltip: tooltip,
    showFooterBtn: footerBtn ? ['selectAll'] : undefined
  }));
});