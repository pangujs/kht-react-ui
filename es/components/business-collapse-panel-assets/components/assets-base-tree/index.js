import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { getCommunityAreaBuilding } from '../../api';
import KhtBaseTree from '../../../base-tree';
import { KhtBusinessInstitutionalIconType } from '../../../business-institutional-assets-tree';
import React, { useEffect, useRef, useState } from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import { getInstitutionalAssetsFullName } from '../../../../http/api';
var loaderLevelMap = {
  organization: ['function', 'organization'],
  community: ['function', 'organization', 'community'],
  phase: ['function', 'organization', 'community', 'phase'],
  building: ['function', 'organization', 'community', 'phase', 'building'],
  unit: ['function', 'organization', 'community', 'phase', 'building', 'unit'],
  floor: ['function', 'organization', 'community', 'phase', 'building', 'unit', 'floor'],
  house: ['function', 'organization', 'community', 'phase', 'building', 'unit', 'floor', 'house']
};
export default function AssetsBaseTree(props) {
  var rootNode = props.rootNode,
    _props$canSelect = props.canSelect,
    canSelect = _props$canSelect === void 0 ? '' : _props$canSelect,
    loaderLevel = props.loaderLevel,
    _props$otherQueryPara = props.otherQueryParams,
    otherQueryParams = _props$otherQueryPara === void 0 ? {} : _props$otherQueryPara,
    _props$showTooltip = props.showTooltip,
    showTooltip = _props$showTooltip === void 0 ? true : _props$showTooltip,
    placeholder = props.placeholder,
    _props$newStyle = props.newStyle,
    newStyle = _props$newStyle === void 0 ? false : _props$newStyle,
    _props$defaultSelectR = props.defaultSelectRoot,
    defaultSelectRoot = _props$defaultSelectR === void 0 ? true : _props$defaultSelectR,
    _props$searchParams = props.searchParams,
    searchParams = _props$searchParams === void 0 ? {} : _props$searchParams;
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
    checkedKeysSorce = _useState8[0],
    setCheckedKeysSorce = _useState8[1];
  var currentRoot = useRef(null);
  var onExpand = function onExpand(expandedKeys) {
    setExpandedKeys(expandedKeys);
  };
  var addIcon = function addIcon(data) {
    var list = data.list,
      _data$type = data.type,
      type = _data$type === void 0 ? '' : _data$type;
    if (list.length) {
      list.map(function (item) {
        // 设置是否叶子节点
        if (item.isExistChild == 0 || item.isExistChild == null || type === 'search' || !!item.residentHouseId || item.sourceTableType === loaderLevel && loaderLevel !== 'organization') item.isLeaf = true;
        // 设置是否可选择
        if (canSelect) {
          item.selectable = canSelect === item.sourceTableType || canSelect.includes(item.sourceTableType);
        }
        item.key = item.id;
        item.title = item.name;
        item.icon = KhtBusinessInstitutionalIconType[item.sourceTableType];
        return item;
      });
    }
    return list;
  };
  var loadRootData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data, list, temp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getCommunityAreaBuilding(_objectSpread({
              parentId: rootNode ? rootNode.id : '',
              sourceTableType: rootNode ? rootNode.sourceTableType : ''
            }, otherQueryParams), props.url);
          case 2:
            data = _context.sent;
            list = data.response || []; // 过滤掉加载层级后面层级的数据
            if (loaderLevel) {
              list = list.filter(function (res) {
                return loaderLevelMap[loaderLevel].includes(res.sourceTableType);
              });
            }
            if (rootNode) {
              currentRoot.current = rootNode;
              // 设置根节点为传入的父节点
              temp = _cloneDeep(rootNode); // 设置节点非叶子节点
              temp.isLeaf = !!temp.residentHouseId || temp.sourceTableType === loaderLevel && loaderLevel !== 'organization';
              // 设置是否可选择
              if (canSelect) temp.selectable = canSelect === temp.sourceTableType || canSelect.includes(temp.sourceTableType);
              temp.children = _toConsumableArray(addIcon({
                list: list
              }));
              list = [temp];
              if (!temp.isLeaf) {
                if (defaultSelectRoot) setCheckedKeysSorce([temp.key]);
                setExpandedKeys([temp.key]);
                setLoadedKeys([temp.key]);
              }
            } else {
              if (defaultSelectRoot) setCheckedKeysSorce([list[0].id]);
              setExpandedKeys([list[0].id]);
            }
            setTreeData(rootNode ? list : _toConsumableArray(addIcon({
              list: list
            })));
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadRootData() {
      return _ref.apply(this, arguments);
    };
  }();
  /** 搜索关键词的回调 */
  var onSearchTreeData = function onSearchTreeData(e) {
    e.preventDefault();
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        var data, treeList;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log('回车搜索值：', e.target.value);
              _context2.next = 3;
              return getCommunityAreaBuilding(_objectSpread(_objectSpread({
                name: e.target.value,
                parentId: rootNode ? rootNode.id : ''
              }, otherQueryParams), searchParams), props.url);
            case 3:
              data = _context2.sent;
              treeList = data.response || [];
              treeList = treeList.map(function (val) {
                return _objectSpread(_objectSpread({}, val), {}, {
                  title: val.name,
                  key: val.id
                });
              });
              // 过滤掉加载层级后面层级的数据
              if (loaderLevel) {
                treeList = treeList.filter(function (res) {
                  return loaderLevelMap[loaderLevel].includes(res.sourceTableType);
                });
              }
              // 过滤不能选择的节点
              if (canSelect) {
                treeList = treeList.filter(function (val) {
                  console.log(Object.prototype.toString.call(canSelect));
                  if (Object.prototype.toString.call(canSelect) === '[object Array]') {
                    return canSelect.includes(val.sourceTableType);
                  } else if (Object.prototype.toString.call(canSelect) === '[object String]') {
                    return canSelect === val.sourceTableType;
                  }
                });
              }
              // 过滤和根节点不同项目的数据
              if (rootNode && rootNode.id && rootNode.communityId) {
                treeList = treeList.filter(function (val) {
                  return rootNode.communityId === val.communityId;
                });
              }
              setTreeData(_toConsumableArray(addIcon({
                list: treeList,
                type: 'search'
              })));
              resolve(undefined);
            case 11:
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
  var loadData = function loadData(node) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve) {
        var key, children, sourceTableType, id, data, list, temp;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              key = node.key, children = node.children, sourceTableType = node.sourceTableType, id = node.id;
              if (!(children && children.length)) {
                _context3.next = 4;
                break;
              }
              resolve({
                data: [],
                key: ''
              });
              return _context3.abrupt("return");
            case 4:
              _context3.next = 6;
              return getCommunityAreaBuilding(_objectSpread({
                parentId: id,
                sourceTableType: sourceTableType
              }, otherQueryParams), props.url);
            case 6:
              data = _context3.sent;
              list = [];
              setLoadedKeys([].concat(_toConsumableArray(loadedKeys), [key]));
              if (data.response && data.response.length) {
                list = data.response;
                if (loaderLevel === 'organization') {
                  // 只加载到机构
                  list = list.filter(function (item) {
                    return item.sourceTableType == loaderLevel;
                  });
                }
                if (sourceTableType === 'house') {
                  // 业户信息需要组装额外的字段
                  temp = [];
                  data.response.map(function (item) {
                    if (item.residentBindHouseList && item.residentBindHouseList.length) temp = [].concat(_toConsumableArray(temp), _toConsumableArray(item.residentBindHouseList));
                  });
                  list = temp.map(function (val) {
                    return _objectSpread(_objectSpread({}, val), {}, {
                      id: val.residentHouseId,
                      sourceTableType: 'noSub'
                    });
                  });
                }
              }
              resolve({
                data: _toConsumableArray(addIcon({
                  list: list
                })),
                key: key
              });
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  };
  var onChangeCallback = function onChangeCallback(selectedKeys, info) {
    setCheckedKeysSorce(selectedKeys);
    props.onChange && props.onChange(info);
  };
  /** 自定义请求 tooltipContent 内容 */
  var customTooltipContent = function customTooltipContent(treeNode) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve) {
        var result, fullName;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getInstitutionalAssetsFullName({
                sourceTableId: treeNode.id,
                sourceTableType: treeNode.sourceTableType
              });
            case 2:
              result = _context4.sent;
              fullName = result.success ? result.response : '暂无资料';
              resolve({
                fullName: fullName
              });
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  };
  useEffect(function () {
    var _currentRoot$current;
    if (rootNode && rootNode.id !== ((_currentRoot$current = currentRoot.current) === null || _currentRoot$current === void 0 ? void 0 : _currentRoot$current.id) || !treeData.length) {
      loadRootData();
    }
  }, [rootNode]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtBaseTree, {
    showIcon: true,
    showSearch: true,
    multiple: false,
    treeData: treeData,
    loadData: loadData,
    onSearchTreeData: onSearchTreeData,
    expandedKeys: expandedKeys,
    loadedKeys: loadedKeys,
    onExpand: onExpand,
    onChangeCallback: onChangeCallback,
    customTooltipContent: customTooltipContent,
    showTooltip: showTooltip,
    toolTipProps: {
      getPopupContainer: function getPopupContainer() {
        return document.body;
      },
      placement: 'right'
    },
    inputProps: {
      placeholder: placeholder
    },
    newStyle: newStyle,
    checkedKeysSorce: checkedKeysSorce
  }));
}