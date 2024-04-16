import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Tree, Input, Empty, Tooltip, Spin } from 'antd';
import KhtSortable from '../scrollbars';
import style from "./index.module.css";
import "./index.css";
import { CheckOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { assembleNewKey, findFormatKeys, getTreeDataKeys, getTreeOneDimensional, handleTreeDataKey, loopTreeData, objArrayUnique, randomStr, searchTreeNode, updateTreeData, waitTime } from '../../utils';
import { cloneDeep, debounce } from 'lodash';
var BaseTree = /*#__PURE__*/forwardRef(function (props, treeRef) {
  var _props$multiple, _props$showSearch, _props$selectable, _props$isOriginSearch, _props$isUseSpellKey, _props$newStyle, _props$inputProps, _props$inputProps2, _checkedNodeInfo$node, _checkedNodeInfo$node2, _checkedNodeInfo$node3, _checkedNodeInfo$node4, _props$checkStrictly, _props$checkStrictly2;
  /** 多选默认值 */
  var MULTIPLE = (_props$multiple = props.multiple) !== null && _props$multiple !== void 0 ? _props$multiple : true;
  var SHOWSEARCH = (_props$showSearch = props.showSearch) !== null && _props$showSearch !== void 0 ? _props$showSearch : true;
  var SELECTABLE = (_props$selectable = props.selectable) !== null && _props$selectable !== void 0 ? _props$selectable : true;
  var ISORIGINSEACH = (_props$isOriginSearch = props.isOriginSearch) !== null && _props$isOriginSearch !== void 0 ? _props$isOriginSearch : true;
  var ISUSESPELLKEY = (_props$isUseSpellKey = props.isUseSpellKey) !== null && _props$isUseSpellKey !== void 0 ? _props$isUseSpellKey : true;
  var CHECKCHILDREN = true;
  var newStyle = (_props$newStyle = props.newStyle) !== null && _props$newStyle !== void 0 ? _props$newStyle : false;
  var titleRef = useRef(null);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    formatTreeData = _useState2[0],
    setFormatTreeData = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedKeys = _useState4[0],
    setCheckedKeys = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    cacheRely = _useState6[0],
    setCacheRely = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    searchTreeData = _useState8[0],
    setSearchTreeData = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isSearch = _useState10[0],
    setIsSearch = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    loadNextData = _useState12[0],
    setLoadNextData = _useState12[1];
  var _useState13 = useState(),
    _useState14 = _slicedToArray(_useState13, 2),
    currentLoad = _useState14[0],
    setCurrentLoad = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    searchValue = _useState18[0],
    setSearchValue = _useState18[1];
  var _useState19 = useState([]),
    _useState20 = _slicedToArray(_useState19, 2),
    treeExpandedKeys = _useState20[0],
    setTreeExpandedKeys = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    toolTipLoading = _useState22[0],
    setToolTipLoading = _useState22[1];
  /** 解决 一个人员在多个部门下，同时选中与取消 */
  var _useState23 = useState({
      isSelectNode: false,
      key: ''
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    isSelect = _useState24[0],
    setIsSelect = _useState24[1];
  var toolContent = useRef({});
  // 保留一份已选数据节点信息，用于清除
  var _useState25 = useState({}),
    _useState26 = _slicedToArray(_useState25, 2),
    checkedNodeInfo = _useState26[0],
    setCheckedNodeInfo = _useState26[1];
  /** 重写渲染节点 */
  var titleRender = function titleRender(nodeData) {
    var _props$toolTipProps, _props$toolTipProps2, _props$toolTipProps3;
    var hasCanSelect = typeof props.canSelect == 'string' && nodeData.hasOwnProperty(props.canSelect || '');
    if (_typeof(props.canSelect) == 'object') {
      props.canSelect.forEach(function (keys) {
        if (nodeData.hasOwnProperty(keys)) {
          hasCanSelect = true;
        }
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, nodeData.morebtn ? /*#__PURE__*/React.createElement("div", {
      className: style['more-btn-style'],
      onClick: function onClick() {
        return loadMoreData(nodeData);
      }
    }, nodeData.title) : /*#__PURE__*/React.createElement("div", {
      className: style['tree-title-box']
    }, /*#__PURE__*/React.createElement("div", {
      ref: titleRef,
      "data-level": nodeData.level,
      className: "".concat(style['tree-box'], " ")
    }, props.showTooltip ? /*#__PURE__*/React.createElement(Tooltip, _objectSpread({
      title: /*#__PURE__*/React.createElement(Spin, {
        size: "small",
        spinning: toolTipLoading,
        wrapperClassName: style['clear-min-height']
      }, nodeData.fullName || nodeData.title),
      color: ((_props$toolTipProps = props.toolTipProps) === null || _props$toolTipProps === void 0 ? void 0 : _props$toolTipProps.color) || '#fff',
      overlayInnerStyle: ((_props$toolTipProps2 = props.toolTipProps) === null || _props$toolTipProps2 === void 0 ? void 0 : _props$toolTipProps2.overlayInnerStyle) || {
        color: '#545454'
      },
      overlayClassName: style['max-width-none'],
      placement: ((_props$toolTipProps3 = props.toolTipProps) === null || _props$toolTipProps3 === void 0 ? void 0 : _props$toolTipProps3.placement) || 'bottomLeft',
      key: 1,
      getPopupContainer: function getPopupContainer(node) {
        return node;
      }
    }, props.toolTipProps), /*#__PURE__*/React.createElement("span", {
      title: "",
      className: "".concat(style['tree-title-box-title'], " ").concat(nodeData.suffix ? style['suffix-color'] : ''),
      onMouseEnter: function onMouseEnter() {
        return tooltipMouseEnter(nodeData, formatTreeData);
      }
    }, (props === null || props === void 0 ? void 0 : props.nameRender) ? props === null || props === void 0 ? void 0 : props.nameRender(nodeData) : nodeData.title)) : /*#__PURE__*/React.createElement("span", {
      className: "".concat(style['tree-title-box-title'], " ").concat(nodeData.suffix ? style['suffix-color'] : '')
    }, (props === null || props === void 0 ? void 0 : props.nameRender) ? props === null || props === void 0 ? void 0 : props.nameRender(nodeData) : nodeData.title), props.selectable && (props.inModalStyle || props.inDrawerStyle) && (checkedKeys === null || checkedKeys === void 0 ? void 0 : checkedKeys.includes(nodeData.key)) ? /*#__PURE__*/React.createElement(CheckOutlined, {
      className: "".concat(props.inDrawerStyle ? style['drawer-selectable'] : style['selectable'])
    }) : null, nodeData.suffix && /*#__PURE__*/React.createElement("span", {
      className: "".concat(style['suffix'], " ").concat(!props.selectable && style['check-suffix'], "\n                ")
    }, nodeData.suffix))));
  };
  /** 自定义 tooltip 内容 */
  var tooltipMouseEnter = useCallback(debounce( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(treeNode, treeData) {
      var result, copyFormmat, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(props.showTooltip && !treeNode.fullName)) {
              _context.next = 10;
              break;
            }
            setToolTipLoading(true);
            _context.next = 4;
            return props.customTooltipContent && props.customTooltipContent(treeNode);
          case 4:
            result = _context.sent;
            setToolTipLoading(false);
            copyFormmat = cloneDeep(treeData);
            data = searchTreeNode(copyFormmat, treeNode.key);
            if (data && data.length) Object.assign(data[0], result, {
              key: data[0].key,
              treeParentKey: data[0].treeParentKey
            });
            setFormatTreeData(copyFormmat);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(), 500), []);
  /** 查找 加载更多时传的加载类型 */
  var findLoaderTypeDdata = function findLoaderTypeDdata() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'key';
    var data = arguments.length > 1 ? arguments[1] : undefined;
    return data.filter(function (item) {
      return item.hasOwnProperty(type);
    });
  };
  /** 重写 loadData 方法，懒加载时，处理 key 值重复问题 */
  var loadData = function loadData(treeNode) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        var result, newTreeData, moreData;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (props.loadData) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", resolve(undefined));
            case 2:
              _context2.next = 4;
              return props.loadData && props.loadData(treeNode);
            case 4:
              result = _context2.sent;
              if (result.data.length > 0) {
                newTreeData = handleTreeDataKey(result.data, result, ISUSESPELLKEY); // 判断是否需要分页加载功能
                if (props.isPageLoad && result.total > findLoaderTypeDdata(result === null || result === void 0 ? void 0 : result.loaderType, newTreeData).length) {
                  moreData = {
                    parentNode: treeNode,
                    parentKey: result.key,
                    title: '加载更多',
                    key: result.key + '_' + randomStr(),
                    checkable: false,
                    isLeaf: true,
                    selectable: false,
                    morebtn: true,
                    childNodes: newTreeData,
                    page: {
                      pageSize: props.pageSize || 10,
                      pageNo: 1
                    }
                  };
                  newTreeData.push(moreData);
                }
                findFormatKeyForLoader(newTreeData);
                setFormatTreeData(updateTreeData(formatTreeData, result.key, newTreeData));
                setLoadNextData(newTreeData);
                handleToolContent(newTreeData);
              }
              //当返回的数据为空时，需要重置 loadNextData
              if (result.data.length == 0) setLoadNextData([]);
              resolve(undefined);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
  /** 重写 onLoad 方法 */
  var onLoad = function onLoad(loadedKeys, _ref3) {
    var event = _ref3.event,
      node = _ref3.node;
    setCurrentLoad(node);
    props.onLoad && props.onLoad(loadedKeys, {
      event: event,
      node: node
    });
  };
  /** 回车查询 */
  var onPressEnter = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (ISORIGINSEACH) {
              _context3.next = 4;
              break;
            }
            setSearchValue(e.target.value);
            setIsSearch(Boolean(e.target.value));
            return _context3.abrupt("return", false);
          case 4:
            if (!e.target.value) {
              _context3.next = 8;
              break;
            }
            setIsSearch(true);
            _context3.next = 10;
            break;
          case 8:
            setIsSearch(false);
            return _context3.abrupt("return", false);
          case 10:
            setLoading(true);
            _context3.next = 13;
            return props.onSearchTreeData && props.onSearchTreeData(e);
          case 13:
            setLoading(false);
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onPressEnter(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  /** 清空时还原树 */
  var inputChange = function inputChange(e) {
    if (!e.target.value.trim()) {
      setIsSearch(false);
    }
  };
  /** 选中 - onSelect 扩展 */
  var onSelect = function onSelect(selectedKeys, info) {
    var _info$selectedNodes;
    if (!SELECTABLE) return false;
    if (props.isMandatory && !MULTIPLE && checkedKeys.length) return;
    if (typeof props.canSelect == 'string') {
      info.selectedNodes = info.selectedNodes.filter(function (item) {
        return item.hasOwnProperty(props.canSelect || '');
      });
    }
    if (_typeof(props.canSelect) == 'object') {
      info.selectedNodes = info.selectedNodes.filter(function (item) {
        var isTrue = [];
        props.canSelect.forEach(function (keys) {
          if (!item.hasOwnProperty(keys)) {
            isTrue.push(false);
          } else {
            isTrue.push(true);
          }
        });
        return isTrue.includes(true);
      });
    }
    selectedKeys = _toConsumableArray(new Set(_toConsumableArray(selectedKeys)));
    info.selectedNodes = objArrayUnique(info.selectedNodes, 'key');
    setIsSelect({
      isSelectNode: info.selected,
      key: info.node.key.toString()
    });
    if (!info.selected) {
      info.selectedNodes = info.selectedNodes.filter(function (item) {
        return item.key.toString().split('_').pop() != info.node.key.toString().split('_').pop();
      });
    }
    if (props.checkedKeysSorce == undefined) setCheckedKeys(selectedKeys);
    if ((_info$selectedNodes = info.selectedNodes) === null || _info$selectedNodes === void 0 ? void 0 : _info$selectedNodes.length) setCheckedNodeInfo(info);
    props.onChangeCallback && props.onChangeCallback(selectedKeys, info, MULTIPLE, isSearch);
  };
  /** 勾选 - onCheck 扩展 */
  var onCheck = function onCheck(checkedKeysArray, info) {
    if (SELECTABLE) return false;
    if (typeof props.canSelect == 'string') {
      info.checkedNodes = info.checkedNodes.filter(function (item) {
        return item.hasOwnProperty(props.canSelect || '');
      });
    }
    if (_typeof(props.canSelect) == 'object') {
      info.checkedNodes = info.checkedNodes.filter(function (item) {
        var isTrue = [];
        props.canSelect.forEach(function (keys) {
          if (!item.hasOwnProperty(keys)) {
            isTrue.push(false);
          } else {
            isTrue.push(true);
          }
        });
        return isTrue.includes(true);
      });
    }
    if (checkedKeysArray instanceof Array) {
      checkedKeysArray = _toConsumableArray(new Set(_toConsumableArray(checkedKeysArray)));
    } else {
      checkedKeysArray = _toConsumableArray(new Set(_toConsumableArray(checkedKeysArray.checked)));
    }
    info.checkedNodes = objArrayUnique(info.checkedNodes, 'key');
    setIsSelect({
      isSelectNode: info.checked,
      key: info.node.key.toString()
    });
    if (!info.checked) {
      info.checkedNodes = info.checkedNodes.filter(function (item) {
        return item.key.toString().split('_').pop() != info.node.key.toString().split('_').pop();
      });
    }
    /** 勾选父节点，全选子节点并禁用 */
    if (props.disableChild && !isSearch) {
      info.merge = true;
      var copyFormmat = cloneDeep(formatTreeData);
      var data = searchTreeNode(copyFormmat, info.node.key);
      // let parentData = searchTreeNode(copyFormmat, (info.node as any).treeParentKey as string);
      if (data.length) {
        // if(parentData?.[0]?.children.length === info.checkedNodes.filter((item:TreeDataNode) => item.treeParentKey === parentData[0]?.key).length){
        //   deepSetChildrenDisabled(parentData[0].children || [], info.checked);
        // }else{
        deepSetChildrenDisabled(data[0].children || [], info.checked);
        // }
      }

      setFormatTreeData(copyFormmat);
      var oneTreeData = getTreeOneDimensional(data);
      info.checkedNodes = oneTreeData;
    }
    if (props.checkedKeysSorce == undefined) setCheckedKeys(checkedKeysArray);
    setCheckedNodeInfo((info === null || info === void 0 ? void 0 : info.checked) ? info : {});
    props.onChangeCallback && props.onChangeCallback(checkedKeysArray, info, MULTIPLE, isSearch);
  };
  /** 递归设置子元素的禁用状态 */
  var deepSetChildrenDisabled = function deepSetChildrenDisabled(treeData, disabled) {
    var checks = [];
    for (var i = 0; i < treeData.length; i++) {
      treeData[i].disabled = disabled;
      checks.push(treeData[i].key);
      if (treeData[i].children && treeData[i].children.length) {
        checks = checks.concat(deepSetChildrenDisabled(treeData[i].children, disabled));
      }
    }
    return checks;
  };
  /** 查询转化后的 key 值 */
  var findFormatkeysHandle = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var beforFormmat, afterFormmat, _props$checkedKeysSor, concatSorceAndCache, formmatKeys, formmatNewKeys;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            beforFormmat = [];
            afterFormmat = [];
            if (!ISUSESPELLKEY) {
              _context4.next = 12;
              break;
            }
            concatSorceAndCache = (_props$checkedKeysSor = props.checkedKeysSorce) === null || _props$checkedKeysSor === void 0 ? void 0 : _props$checkedKeysSor.concat(cacheRely);
            concatSorceAndCache === null || concatSorceAndCache === void 0 ? void 0 : concatSorceAndCache.forEach(function (item) {
              if (item.toString().split('_').length > 1) {
                // key 值处理后的
                beforFormmat.push(item);
                afterFormmat.push(item.split('_').pop());
              } else {
                // key 值未经过处理的
                afterFormmat.push(item);
              }
            });
            formmatKeys = findFormatKeys(isSearch ? searchTreeData : (formatTreeData.length ? formatTreeData : props.treeData) || props.treeData, afterFormmat);
            formmatNewKeys = _toConsumableArray(new Set([].concat(_toConsumableArray(formmatKeys), beforFormmat)));
            _context4.next = 9;
            return waitTime(50);
          case 9:
            //解决整颗树传入，赋默认值不成功的问题
            setCheckedKeys(formmatNewKeys);
            _context4.next = 15;
            break;
          case 12:
            _context4.next = 14;
            return waitTime(50);
          case 14:
            setCheckedKeys(props.checkedKeysSorce ? props.checkedKeysSorce : []);
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function findFormatkeysHandle() {
      return _ref5.apply(this, arguments);
    };
  }();
  /** 展开时，拿默认已选中的key来查找转化后的 key 值，解决 -- 回显时，数据是懒加载 */
  var findFormatKeyForLoader = function findFormatKeyForLoader(treeData) {
    var _props$checkedKeysSor2;
    var findKeys = [];
    // let needFormatKeys = props.checkedKeysSorce?.filter((item: any) => item.split('_').length == 1);
    var needFormatKeys = (_props$checkedKeysSor2 = props.checkedKeysSorce) === null || _props$checkedKeysSor2 === void 0 ? void 0 : _props$checkedKeysSor2.map(function (item) {
      return item.toString().split('_').pop();
    });
    if (needFormatKeys === null || needFormatKeys === void 0 ? void 0 : needFormatKeys.length) {
      for (var i = 0; i < treeData.length; i++) {
        if (needFormatKeys === null || needFormatKeys === void 0 ? void 0 : needFormatKeys.includes(treeData[i].key.toString().split('_').pop())) {
          findKeys.push(treeData[i].key);
        }
      }
      findKeys.length ? setCheckedKeys([].concat(_toConsumableArray(checkedKeys), findKeys)) : checkKeyInOtherNodes(formatTreeData);
    }
  };
  /** 查找原始 key ,是否在其他节点下。 */
  var checkKeyInOtherNodes = function checkKeyInOtherNodes(treedata) {
    var popKeys = checkedKeys.map(function (item) {
      return item.toString().split('_').pop();
    });
    var formmatKeys = findFormatKeys(treedata, popKeys);
    setCheckedKeys(formmatKeys);
  };
  /** 加载更多 */
  var loadMoreData = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(nodeData) {
      var _searchTreeNode, _searchTreeNode2, searchTree, result, newTreeData, _searchTree$children;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            nodeData.page.pageNo++;
            setLoading(true);
            _searchTreeNode = searchTreeNode(formatTreeData, nodeData.parentKey), _searchTreeNode2 = _slicedToArray(_searchTreeNode, 1), searchTree = _searchTreeNode2[0];
            _context5.next = 5;
            return props.onLoadMore && props.onLoadMore(nodeData);
          case 5:
            result = _context5.sent;
            newTreeData = handleTreeDataKey(result.data, _objectSpread(_objectSpread({}, result), {}, {
              key: nodeData.parentKey
            }), ISUSESPELLKEY);
            if ((searchTree === null || searchTree === void 0 ? void 0 : searchTree.children) && searchTree.children.length) {
              searchTree === null || searchTree === void 0 ? void 0 : (_searchTree$children = searchTree.children).splice.apply(_searchTree$children, [(searchTree === null || searchTree === void 0 ? void 0 : searchTree.children.length) - 1, 0].concat(_toConsumableArray(newTreeData)));
              if (result.total <= findLoaderTypeDdata(result === null || result === void 0 ? void 0 : result.loaderType, searchTree === null || searchTree === void 0 ? void 0 : searchTree.children).length) {
                searchTree.children.pop();
              }
              setFormatTreeData(updateTreeData(formatTreeData, nodeData.parentKey, searchTree.children));
            }
            findFormatkeysHandle();
            setLoading(false);
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function loadMoreData(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  /** 展开的回调 */
  var onExpand = function onExpand(expandedKeys) {
    setTreeExpandedKeys(expandedKeys);
  };
  /** 处理工具集内，数据值 */
  var handleToolContent = function handleToolContent(treeData) {
    toolContent.current.canSelectNumber = (toolContent.current.canSelectNumber || 0) + treeData.length;
    if (typeof props.canSelect == 'string') {
      var items = treeData.filter(function (item) {
        return !item.hasOwnProperty(props.canSelect || '') || !item.disableCheckbox || !item.disabled;
      });
      toolContent.current.canSelectNumber = items.length;
    }
    if (_typeof(props.canSelect) == 'object') {
      var _items = treeData.filter(function (item) {
        var isTrue = [];
        props.canSelect.forEach(function (keys) {
          if (!item.hasOwnProperty(keys) || !item.disableCheckbox || !item.disabled) {
            isTrue.push(false);
          } else {
            isTrue.push(true);
          }
        });
        return isTrue.includes(true);
      });
      toolContent.current.canSelectNumber = _items.length;
    }
  };
  var clearChecked = function clearChecked() {
    props.onChangeCallback && props.onChangeCallback([], _objectSpread(_objectSpread({}, checkedNodeInfo), {}, {
      selected: false
    }), MULTIPLE, isSearch);
    setCheckedKeys([]);
    setCheckedNodeInfo({});
  };
  useImperativeHandle(treeRef, function () {
    return {
      /** 新增节点数据至树中 */
      addTreeDataChildren: function addTreeDataChildren(key, childrenData, appendType) {
        childrenData[0].treeParentKey = key;
        if (!appendType || appendType == 'after') setFormatTreeData(updateTreeData(formatTreeData, key, childrenData, true));
        if (appendType == 'befor') setFormatTreeData(updateTreeData(formatTreeData, key, childrenData, true, true));
      },
      /** 删除节点数据 */
      deletTreeDataNode: function deletTreeDataNode(parentKey, key) {
        var _searchNode$;
        var searchNode = [];
        searchNode = searchTreeNode(formatTreeData, parentKey);
        var childrenData = (_searchNode$ = searchNode[0]) === null || _searchNode$ === void 0 ? void 0 : _searchNode$.children.filter(function (item) {
          return item.key != key;
        });
        setFormatTreeData(updateTreeData(formatTreeData, parentKey, childrenData));
      },
      /** 更新节点数据 */
      updateTreeDataNode: function updateTreeDataNode(key, nodeData) {
        var copyFormmat = cloneDeep(formatTreeData);
        var data = searchTreeNode(copyFormmat, key);
        Object.assign(data[0], nodeData, {
          key: data[0].key,
          treeParentKey: data[0].treeParentKey
        });
        setFormatTreeData(copyFormmat);
      },
      /** 设置某节点下的所有子节点的 disabled 的状态 */
      setTreeDataNodeDisabled: function setTreeDataNodeDisabled(key, disable) {
        var copyFormmat = cloneDeep(formatTreeData);
        if (key == 'all') {
          deepSetChildrenDisabled(copyFormmat, disable);
        } else {
          var data = searchTreeNode(copyFormmat, key);
          if (data.length) {
            deepSetChildrenDisabled(data[0].children, disable);
          }
        }
        setFormatTreeData(copyFormmat);
      },
      getToolContent: toolContent.current,
      getTreeData: formatTreeData,
      getSearchTreeData: searchTreeData
    };
  });
  useEffect(function () {
    if (props.treeData) {
      // 当配置了懒加载 和 远程搜索
      if (props.loadData && ISORIGINSEACH) {
        if (isSearch) {
          var searchData = props.treeData.map(function (item) {
            return _objectSpread(_objectSpread({}, item), {}, {
              key: ISUSESPELLKEY ? randomStr() + '_' + item.key : item.key
            });
          });
          setSearchTreeData(searchData);
          checkKeyInOtherNodes(searchData);
        }
        if (!isSearch) {
          setFormatTreeData(_toConsumableArray(props.treeData));
          findFormatKeyForLoader(props.treeData);
        }
      } else {
        // 传入整颗树，无需 懒加载或远端搜索
        assembleNewKey(props.treeData, '', '0', ISUSESPELLKEY);
        setFormatTreeData(props.treeData);
      }
      handleToolContent(props.treeData);
    }
  }, [props.treeData]);
  useEffect(function () {
    var _props$checkedKeysSor3;
    if ((_props$checkedKeysSor3 = props.checkedKeysSorce) === null || _props$checkedKeysSor3 === void 0 ? void 0 : _props$checkedKeysSor3.length) {
      findFormatkeysHandle();
    } else {
      setCheckedKeys([]);
    }
  }, [props.checkedKeysSorce, cacheRely]);
  useEffect(function () {
    /** 必须是不受控，父节点是选中状态，多选，checkbox */
    if (!props.checkStrictly && (currentLoad === null || currentLoad === void 0 ? void 0 : currentLoad.checked) && MULTIPLE && !SELECTABLE) {
      var loadNextDataList = [];
      var filterLoadNextDataList = [];
      var copyFormmat = cloneDeep(formatTreeData);
      var data = searchTreeNode(copyFormmat, currentLoad.key);
      if (data.length) {
        var _data$0$children;
        data[0].children = (_data$0$children = data[0].children) === null || _data$0$children === void 0 ? void 0 : _data$0$children.map(function (item) {
          var _props$disableChild;
          return _objectSpread(_objectSpread({}, item), {}, {
            disabled: (_props$disableChild = props.disableChild) !== null && _props$disableChild !== void 0 ? _props$disableChild : currentLoad.disabled
          });
        });
        setFormatTreeData(copyFormmat);
      }
      if (typeof props.canSelect == 'string') {
        loadNextDataList = loadNextData.filter(function (item) {
          return item.hasOwnProperty(props.canSelect || '');
        });
      }
      if (_typeof(props.canSelect) == 'object') {
        loadNextDataList = loadNextData.filter(function (item) {
          var isTrue = [];
          props.canSelect.forEach(function (keys) {
            if (!item.hasOwnProperty(keys)) {
              isTrue.push(false);
            } else {
              isTrue.push(true);
            }
          });
          return isTrue.includes(true);
        });
      }
      filterLoadNextDataList = loadNextDataList.length ? loadNextDataList : loadNextData;
      props.onChangeCallback && props.onChangeCallback(filterLoadNextDataList.map(function (item) {
        return item.key;
      }), {
        event: 'check',
        checkedStatus: true,
        isLoader: true,
        checkedNodes: filterLoadNextDataList,
        node: {
          key: currentLoad.key,
          title: currentLoad.title,
          children: []
        }
      }, MULTIPLE, isSearch);
    }
  }, [currentLoad]);
  useEffect(function () {
    if (!isSelect.isSelectNode) {
      var key = isSelect.key.split('_').pop();
      var arrCheckedKeys = checkedKeys.filter(function (item) {
        return item.toString().split('_').pop() !== key;
      });
      setCheckedKeys(arrCheckedKeys);
    }
  }, [isSelect]);
  useEffect(function () {
    if (ISORIGINSEACH && !isSearch) {
      findFormatkeysHandle();
    }
    if (!ISORIGINSEACH && isSearch) {
      var searchLoadTreeData = loopTreeData(formatTreeData, searchValue);
      var keys = getTreeDataKeys(searchLoadTreeData);
      setTreeExpandedKeys(keys);
      setSearchTreeData(searchLoadTreeData);
    }
    toolContent.current.isSearch = isSearch;
  }, [isSearch, searchValue]);
  useEffect(function () {
    setLoading(props.initLoadingStatus || false);
  }, [props.initLoadingStatus]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(newStyle ? 'tree-new-style-menu' : '', " ").concat(style['tree-box-style'])
  }, SHOWSEARCH && /*#__PURE__*/React.createElement(Input, _objectSpread(_objectSpread({
    style: {
      marginBottom: 8,
      width: '98%'
    }
  }, props.inputProps), {}, {
    placeholder: ((_props$inputProps = props.inputProps) === null || _props$inputProps === void 0 ? void 0 : _props$inputProps.placeholder) || '按关键词搜索' + ', 并按回车键',
    prefix: ((_props$inputProps2 = props.inputProps) === null || _props$inputProps2 === void 0 ? void 0 : _props$inputProps2.prefix) || /*#__PURE__*/React.createElement(SearchOutlined, null),
    onPressEnter: onPressEnter,
    onChange: inputChange
  })), !(props === null || props === void 0 ? void 0 : props.multiple) && (props === null || props === void 0 ? void 0 : props.showHeadSelectFullText) && (checkedKeys === null || checkedKeys === void 0 ? void 0 : checkedKeys.length) && (checkedNodeInfo === null || checkedNodeInfo === void 0 ? void 0 : (_checkedNodeInfo$node = checkedNodeInfo.node) === null || _checkedNodeInfo$node === void 0 ? void 0 : _checkedNodeInfo$node.name) && SELECTABLE ? /*#__PURE__*/React.createElement("div", {
    className: style['tree-head-select-full-text']
  }, /*#__PURE__*/React.createElement("div", {
    className: style['label']
  }, "\u5DF2\u9009\uFF1A", (checkedNodeInfo === null || checkedNodeInfo === void 0 ? void 0 : (_checkedNodeInfo$node2 = checkedNodeInfo.node) === null || _checkedNodeInfo$node2 === void 0 ? void 0 : _checkedNodeInfo$node2.fullName) || (checkedNodeInfo === null || checkedNodeInfo === void 0 ? void 0 : (_checkedNodeInfo$node3 = checkedNodeInfo.node) === null || _checkedNodeInfo$node3 === void 0 ? void 0 : _checkedNodeInfo$node3.name) || ''), /*#__PURE__*/React.createElement(CloseOutlined, {
    className: style['select-icon'],
    style: {
      color: '#ccc'
    },
    onClick: clearChecked
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: style['tree-contianer'],
    style: {
      height: "calc(100% - ".concat(!(props === null || props === void 0 ? void 0 : props.multiple) && (props === null || props === void 0 ? void 0 : props.showHeadSelectFullText) && (checkedKeys === null || checkedKeys === void 0 ? void 0 : checkedKeys.length) && (checkedNodeInfo === null || checkedNodeInfo === void 0 ? void 0 : (_checkedNodeInfo$node4 = checkedNodeInfo.node) === null || _checkedNodeInfo$node4 === void 0 ? void 0 : _checkedNodeInfo$node4.name) && SELECTABLE ? "".concat(SHOWSEARCH ? '70px' : '30px') : SHOWSEARCH ? '40px' : '0px', ")")
    }
  }, /*#__PURE__*/React.createElement(Spin, {
    size: "small",
    spinning: loading
  }, formatTreeData.length ? /*#__PURE__*/React.createElement(KhtSortable, null, !isSearch ? /*#__PURE__*/React.createElement(Tree, _objectSpread(_objectSpread({
    style: {
      display: !isSearch ? 'block' : 'none'
    }
  }, props), {}, {
    checkedKeys: !SELECTABLE ? checkedKeys : undefined,
    selectedKeys: SELECTABLE ? checkedKeys : undefined,
    checkable: !SELECTABLE,
    selectable: SELECTABLE,
    treeData: formatTreeData,
    loadData: loadData,
    className: "".concat(props.inModalStyle ? style['tree-node-styl'] : props.inDrawerStyle ? style['tree-node-drawer-styl'] : style['tree-base-style'], " \n                      ").concat(!(props.inModalStyle || props.inDrawerStyle) && props.selectable && props.backgroundColorFull ? style['background-color-full'] : '', "\n                    "),
    titleRender: props.titleRender || titleRender,
    multiple: MULTIPLE,
    onLoad: onLoad,
    checkStrictly: (_props$checkStrictly = props.checkStrictly) !== null && _props$checkStrictly !== void 0 ? _props$checkStrictly : props.disableChild && !SELECTABLE,
    onCheck: onCheck,
    onSelect: onSelect
  })) : searchTreeData.length ? /*#__PURE__*/React.createElement(Tree, _objectSpread(_objectSpread({
    style: {
      display: isSearch ? 'block' : 'none'
    }
  }, props), {}, {
    checkedKeys: !SELECTABLE ? checkedKeys : undefined,
    selectedKeys: SELECTABLE ? checkedKeys : undefined,
    checkable: !SELECTABLE,
    selectable: SELECTABLE,
    treeData: searchTreeData,
    loadData: loadData,
    className: "".concat(props.inModalStyle ? style['tree-node-styl'] : props.inDrawerStyle ? style['tree-node-drawer-styl'] : style['tree-base-style'], " \n                      ").concat(!(props.inModalStyle || props.inDrawerStyle) && props.selectable && props.backgroundColorFull ? style['background-color-full'] : '', "\n                    "),
    titleRender: props.titleRender || titleRender,
    multiple: MULTIPLE,
    onLoad: onLoad,
    checkStrictly: (_props$checkStrictly2 = props.checkStrictly) !== null && _props$checkStrictly2 !== void 0 ? _props$checkStrictly2 : props.disableChild && !SELECTABLE,
    onCheck: onCheck,
    onSelect: onSelect,
    expandedKeys: !ISORIGINSEACH ? treeExpandedKeys : undefined,
    onExpand: !ISORIGINSEACH ? onExpand : undefined
  })) : /*#__PURE__*/React.createElement(Empty, {
    description: "\u672A\u641C\u5230\u76F8\u5173\u5185\u5BB9"
  })) : /*#__PURE__*/React.createElement(Empty, {
    description: "\u6682\u65E0\u6570\u636E"
  }))));
});
export default BaseTree;
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var TreeDataNode = function TreeDataNode(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var LoadDataPromiseType = function LoadDataPromiseType(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var TreeRefAction = function TreeRefAction(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};