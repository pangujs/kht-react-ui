import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import KhtModalTree from '../modal-tree';
import { getCustomerTagsList, getGroupTagTreeApi } from '../../http/api';
import { arrayToTree, deepTreeDataMapping } from '../../utils';
import Tags from '../../svg/tags.svg';
import { FolderFilled } from '@ant-design/icons';
export var KhtBusinessTagsIconType = {
  classify: /*#__PURE__*/React.createElement(FolderFilled, {
    style: {
      color: '#4fa1fb'
    }
  }),
  tags: /*#__PURE__*/React.createElement("img", {
    src: Tags,
    alt: "",
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  })
};
export default function BusinessTagsModalTree(props) {
  var _props$destroyOnClose, _props$isGroup;
  var DestoryOnClose = (_props$destroyOnClose = props.destroyOnClose) !== null && _props$destroyOnClose !== void 0 ? _props$destroyOnClose : true;
  var IsGroup = (_props$isGroup = props.isGroup) !== null && _props$isGroup !== void 0 ? _props$isGroup : false;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tagsTreeData = _useState2[0],
    setTagsTreeData = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultExpandedKeys = _useState4[0],
    setDefaultExpandedKeys = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultCheckedItems = _useState6[0],
    setDefaultCheckedItems = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    initLoadingStatus = _useState8[0],
    setInitLoadingStatus = _useState8[1];
  /** 请求客户标签 */
  var postDeptUserTreeData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var result, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            result = {};
            setInitLoadingStatus(true);
            _context.next = 4;
            return getCustomerTagsList({});
          case 4:
            result = _context.sent;
            setInitLoadingStatus(false);
            data = result.response.map(function (item) {
              var _objectSpread2;
              return _objectSpread(_objectSpread({}, item), {}, (_objectSpread2 = {
                title: item.name,
                key: item.id
              }, _defineProperty(_objectSpread2, item.type === 3 ? 'canselect' : 'parent', true), _defineProperty(_objectSpread2, "icon", item.type === 3 ? KhtBusinessTagsIconType.tags : KhtBusinessTagsIconType.classify), _objectSpread2));
            });
            if (!(data.length > 0)) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", arrayToTree(data, 'id', 'parentId', '0'));
          case 9:
            return _context.abrupt("return", []);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function postDeptUserTreeData() {
      return _ref.apply(this, arguments);
    };
  }();
  /** 请求群标签 */
  var postGroupTreeData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var result, data, list;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            result = {};
            setInitLoadingStatus(true);
            _context2.next = 4;
            return getGroupTagTreeApi({});
          case 4:
            result = _context2.sent;
            setInitLoadingStatus(false);
            data = result.response || [];
            list = deepTreeDataMapping(data, {
              title: 'tagName',
              key: 'tagId',
              children: 'tagNameList',
              canSelect: function canSelect(val) {
                if (val.type === 'tag') {
                  val.canselect = true;
                  val.icon = KhtBusinessTagsIconType.tags;
                } else {
                  val.icon = KhtBusinessTagsIconType.classify;
                }
                return false;
              }
            });
            return _context2.abrupt("return", list);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function postGroupTreeData() {
      return _ref2.apply(this, arguments);
    };
  }();
  function requestFunc() {
    return _requestFunc.apply(this, arguments);
  }
  function _requestFunc() {
    _requestFunc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var api, treeData;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            api = IsGroup ? postGroupTreeData : postDeptUserTreeData;
            _context3.next = 3;
            return api();
          case 3:
            treeData = _context3.sent;
            if (treeData.length > 0) {
              setTagsTreeData(treeData);
              setDefaultExpandedKeys([treeData[0].key]);
            }
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _requestFunc.apply(this, arguments);
  }
  useEffect(function () {
    if ((props.open || props.visible) && (DestoryOnClose || tagsTreeData.length == 0)) {
      requestFunc();
    }
  }, [props.open, props.visible]);
  useEffect(function () {
    setDefaultCheckedItems(props.defaultCheckedItems);
  }, [props.defaultCheckedItems]);
  return /*#__PURE__*/React.createElement(KhtModalTree, {
    modalProps: {
      open: props.open || props.visible,
      visible: props.open || props.visible,
      destroyOnClose: DestoryOnClose,
      title: props.title
    },
    treeProps: _objectSpread(_objectSpread({}, props.treeProps), {}, {
      showIcon: true,
      treeData: tagsTreeData,
      defaultExpandedKeys: defaultExpandedKeys,
      isOriginSearch: false,
      selectable: true,
      canSelect: 'canselect',
      isUseSpellKey: true,
      height: 410,
      initLoadingStatus: initLoadingStatus
    }),
    cancel: props.cancel,
    ok: props.ok,
    defaultCheckedItems: defaultCheckedItems
  });
}
export var BusinessTagsIconType = function BusinessTagsIconType(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};