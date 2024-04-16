import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { updateTreeData, waitTime } from '../../../utils';
import { Tree } from 'antd';
import React, { useEffect, useState } from 'react';
import { getOrganizational, getOrganizationalChildren } from './mock';
export default (function () {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    treeData = _useState2[0],
    setTreeData = _useState2[1];
  /** 请求 树形 根节点 */
  var mockRootData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            result = getOrganizational();
            setTreeData(result.data.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                key: item.id,
                title: item.name,
                isLeaf: false,
                children: []
              });
            }));
          case 2:
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
  var loadData = function loadData(treeNode) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        var result, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log('FFFFFFF', treeNode);
              _context2.next = 3;
              return waitTime(2000);
            case 3:
              result = getOrganizationalChildren();
              /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
              data = result.data.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  key: item.id,
                  title: item.name,
                  isLeaf: false,
                  children: []
                });
              });
              setTreeData(updateTreeData(treeData, treeNode.key, data));
              resolve(undefined);
            case 7:
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
  useEffect(function () {
    mockRootData();
  }, []);
  return /*#__PURE__*/React.createElement(Tree, {
    treeData: treeData,
    loadData: loadData,
    checkable: true
  });
});