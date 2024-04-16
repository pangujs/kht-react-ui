import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState } from 'react';
import "./index.css";
import CollapsePanel from '../collapse-panel';
import AssetsBaseTree from './components/assets-base-tree';
import { AreaPhasegetList } from './api';
export default function BusinessCollapsePanelAssets(props) {
  var _props$leftCanSelect = props.leftCanSelect,
    leftCanSelect = _props$leftCanSelect === void 0 ? ['organization', 'community'] : _props$leftCanSelect,
    _props$rightCanSelect = props.rightCanSelect,
    rightCanSelect = _props$rightCanSelect === void 0 ? ['community', 'phase', 'building', 'unit', 'floor', 'house'] : _props$rightCanSelect,
    _props$leftLoaderLeve = props.leftLoaderLevel,
    leftLoaderLevel = _props$leftLoaderLeve === void 0 ? 'community' : _props$leftLoaderLeve,
    _props$rightLoaderLev = props.rightLoaderLevel,
    rightLoaderLevel = _props$rightLoaderLev === void 0 ? 'house' : _props$rightLoaderLev,
    _props$hasRight = props.hasRight,
    hasRight = _props$hasRight === void 0 ? true : _props$hasRight,
    _props$url = props.url,
    url = _props$url === void 0 ? undefined : _props$url,
    _props$leftPlaceholde = props.leftPlaceholder,
    leftPlaceholder = _props$leftPlaceholde === void 0 ? '搜索项目' : _props$leftPlaceholde,
    _props$rightPlacehold = props.rightPlaceholder,
    rightPlaceholder = _props$rightPlacehold === void 0 ? '搜索分期、楼栋、单元、楼层、房间' : _props$rightPlacehold,
    _props$businessType = props.businessType,
    businessType = _props$businessType === void 0 ? 'house' : _props$businessType,
    _props$newStyle = props.newStyle,
    newStyle = _props$newStyle === void 0 ? false : _props$newStyle,
    _props$defaultSelectR = props.defaultSelectRoot,
    defaultSelectRoot = _props$defaultSelectR === void 0 ? true : _props$defaultSelectR,
    _props$leftLoadParams = props.leftLoadParams,
    leftLoadParams = _props$leftLoadParams === void 0 ? {} : _props$leftLoadParams,
    _props$leftQueryParam = props.leftQueryParams,
    leftQueryParams = _props$leftQueryParam === void 0 ? {} : _props$leftQueryParam,
    _props$rightLoadParam = props.rightLoadParams,
    rightLoadParams = _props$rightLoadParam === void 0 ? {} : _props$rightLoadParam,
    _props$rightQueryPara = props.rightQueryParams,
    rightQueryParams = _props$rightQueryPara === void 0 ? {} : _props$rightQueryPara;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    rootNode = _useState2[0],
    setRootNode = _useState2[1];
  var collapsePanelRef = useRef(null);
  var onChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(info) {
      var _info$node;
      var _data$response$dataLi, data, _info$node2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            props.leftChange && props.leftChange(info);
            // 取消选择后，隐藏右侧层
            collapsePanelRef.current.changeCollapseState(false);
            if (info === null || info === void 0 ? void 0 : info.selected) {
              _context.next = 5;
              break;
            }
            setRootNode({});
            return _context.abrupt("return");
          case 5:
            if (!(rightLoaderLevel === 'phase' && ((_info$node = info.node) === null || _info$node === void 0 ? void 0 : _info$node.sourceTableType) === 'community')) {
              _context.next = 12;
              break;
            }
            _context.next = 8;
            return AreaPhasegetList("currentPage=1&pageSize=10", {
              type: 'phase',
              communityId: info.node.id
            });
          case 8:
            data = _context.sent;
            if (data.response && ((_data$response$dataLi = data.response.dataList) === null || _data$response$dataLi === void 0 ? void 0 : _data$response$dataLi.length)) {
              setRootNode(info.node);
              collapsePanelRef.current.changeCollapseState(true);
            } else {
              setRootNode({});
            }
            _context.next = 13;
            break;
          case 12:
            if (((_info$node2 = info.node) === null || _info$node2 === void 0 ? void 0 : _info$node2.sourceTableType) === 'community') {
              setRootNode(info.node);
              collapsePanelRef.current.changeCollapseState(true);
            } else {
              setRootNode({});
            }
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var rightChange = function rightChange(info) {
    props.rightChange && props.rightChange(info);
  };
  return /*#__PURE__*/React.createElement(CollapsePanel, {
    collapsePanelRef: collapsePanelRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-left",
    key: "left"
  }, /*#__PURE__*/React.createElement(AssetsBaseTree, {
    url: url,
    onChange: onChange,
    canSelect: leftCanSelect,
    otherQueryParams: _objectSpread({
      type: businessType
    }, leftLoadParams),
    searchParams: leftQueryParams,
    loaderLevel: leftLoaderLevel,
    placeholder: leftPlaceholder,
    newStyle: newStyle,
    defaultSelectRoot: defaultSelectRoot
  })), rootNode.id && hasRight ? /*#__PURE__*/React.createElement("div", {
    className: "panel-right",
    key: "right"
  }, /*#__PURE__*/React.createElement(AssetsBaseTree, {
    url: url,
    otherQueryParams: _objectSpread({
      type: businessType,
      communityId: rootNode === null || rootNode === void 0 ? void 0 : rootNode.id
    }, rightLoadParams),
    searchParams: rightQueryParams,
    rootNode: rootNode,
    onChange: rightChange,
    canSelect: rightCanSelect,
    loaderLevel: rightLoaderLevel,
    placeholder: rightPlaceholder,
    newStyle: newStyle,
    defaultSelectRoot: defaultSelectRoot
  })) : null);
}