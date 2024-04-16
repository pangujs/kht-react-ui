import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["cancel", "ok", "multiple", "defaultSelectedTags"];
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import "./index.css";
import { dictionaryGetByType, tagCustomerList } from '../../http/api';
import _find from 'lodash/find';
import _intersectionBy from 'lodash/intersectionBy';
import TagDrawer, { GroupTagList, TagSearch } from './components';
export default function BusinessSelectTagDrawer(props) {
  var cancel = props.cancel,
    ok = props.ok,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? false : _props$multiple,
    defaultSelectedTags = props.defaultSelectedTags,
    drawerProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tagTypeOptions = _useState2[0],
    setTagTypeOptions = _useState2[1];
  // 分组标签数据
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    groupTagList = _useState4[0],
    setGroupTagList = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedGroupTags = _useState6[0],
    setSelectedGroupTags = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTags = _useState8[0],
    setSelectedTags = _useState8[1];
  // 标签总数量
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    tagTotal = _useState10[0],
    setTagTotal = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openSelected = _useState12[0],
    setOpenSelected = _useState12[1];
  // 已选标签组标签数据-用于查询之后的还原
  var selectedGroupTagsSync = useRef([]);
  var okOnClick = function okOnClick() {
    props.ok(selectedTags);
  };
  // 获取标签来源字典表
  var getDictionaryGet = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return dictionaryGetByType({
              type: 'tag_type'
            });
          case 2:
            data = _context.sent;
            if (data.success) setTagTypeOptions(data.response || []);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getDictionaryGet() {
      return _ref.apply(this, arguments);
    };
  }();
  // 获取标签列表
  var getTagList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(searchParams) {
      var data, list, index, element, i, tag;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return tagCustomerList(_objectSpread({
              tagGroupCategoryIds: [],
              tagName: '',
              tagType: ''
            }, searchParams));
          case 2:
            data = _context2.sent;
            if (data.success) {
              list = data.response || [];
              setTagTotal(list.reduce(function (total, item) {
                return total + item.tag.length;
              }, 0));
              // 还原已选状态
              if (selectedTags.length) {
                for (index = 0; index < list.length; index++) {
                  element = list[index];
                  if (element.tag && element.tag.length) {
                    for (i = 0; i < element.tag.length; i++) {
                      tag = element.tag[i];
                      if (_find(selectedTags, {
                        id: tag.id
                      })) {
                        tag.selected = true;
                      }
                    }
                  }
                }
              }
              setGroupTagList(list);
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getTagList(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  // 标签点击事件
  var tagClick = function tagClick(group, tag) {
    tag.selected = !tag.selected;
    var tempTags = _toConsumableArray(selectedTags);
    if (tag.selected) {
      // 选中
      tempTags.push(tag);
    } else {
      // 取消选中
      tempTags = selectedTags.filter(function (item) {
        return item.id !== tag.id;
      });
    }
    setSelectedTags(tempTags);
  };
  var openSelectedClick = function openSelectedClick() {
    // 打开已选抽屉
    setOpenSelected(true);
  };
  // 删除已选事件
  var delClick = function delClick(group, tag) {
    // 更新已选标签
    var tags = selectedTags.filter(function (item) {
      return item.id !== tag.id;
    });
    setSelectedTags(tags);
  };
  // 删除全部选中数据
  var removeAll = function removeAll() {
    setSelectedTags([]);
  };
  var selectedSearch = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(searchParams) {
      var data, searchList, newList;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!((searchParams === null || searchParams === void 0 ? void 0 : searchParams.tagType) || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.tagGroupCategoryIds) && (searchParams === null || searchParams === void 0 ? void 0 : searchParams.tagGroupCategoryIds.length) || (searchParams === null || searchParams === void 0 ? void 0 : searchParams.tagName))) {
              _context3.next = 7;
              break;
            }
            _context3.next = 3;
            return tagCustomerList(_objectSpread({}, searchParams));
          case 3:
            data = _context3.sent;
            if (data.success) {
              // 获取查询出来的数据与原始已选数据的交集
              searchList = data.response || []; // 标签组数据
              newList = _intersectionBy(selectedGroupTagsSync.current, searchList, 'groupId') || []; // 再过滤标签组中的标签
              setSelectedGroupTags(newList);
            }
            _context3.next = 8;
            break;
          case 7:
            // 直接还原数据
            setSelectedGroupTags(_toConsumableArray(selectedGroupTagsSync.current));
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function selectedSearch(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (props.open && !tagTypeOptions.length) {
      getDictionaryGet();
    }
  }, [props.open]);
  useEffect(function () {
    getTagList();
  }, []);
  useEffect(function () {
    if (defaultSelectedTags) {
      setSelectedTags(defaultSelectedTags);
    }
  }, [defaultSelectedTags]);
  useEffect(function () {
    // 监听选中标签数据
    // 设置选中状态, 以及已选标签组标签
    var groupTags = [];
    for (var index = 0; index < groupTagList.length; index++) {
      var group = groupTagList[index];
      var tags = group.tag || [];
      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        tag.selected = !!_find(selectedTags, {
          id: tag.id
        });
      }
      var tempTags = tags.filter(function (tag) {
        return tag.selected;
      });
      if (tempTags.length) {
        groupTags.push(_objectSpread(_objectSpread({}, group), {}, {
          tag: tempTags
        }));
      }
    }
    setGroupTagList(_toConsumableArray(groupTagList));
    setSelectedGroupTags(groupTags);
    selectedGroupTagsSync.current = groupTags;
  }, [selectedTags.length]);
  var footer = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    className: "cancel",
    style: {
      background: '#F6F6F6',
      borderColor: '#F6F6F6',
      boxSizing: 'border-box'
    },
    onClick: cancel
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      color: '#fff'
    },
    onClick: okOnClick
  }, "\u786E\u5B9A"));
  var selectedFooter = /*#__PURE__*/React.createElement(Button, {
    className: "cancel",
    style: {
      background: '#F6F6F6',
      borderColor: '#F6F6F6',
      boxSizing: 'border-box'
    },
    onClick: removeAll
  }, "\u79FB\u9664\u5168\u90E8");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TagDrawer, _objectSpread(_objectSpread({
    title: "\u9009\u62E9\u5BA2\u6237\u6807\u7B7E"
  }, drawerProps), {}, {
    footer: footer,
    headerNode: /*#__PURE__*/React.createElement("div", {
      className: "tag-drawer-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "total-text"
    }, /*#__PURE__*/React.createElement("span", null, "\u6807\u7B7E\u6570: ", tagTotal), /*#__PURE__*/React.createElement("span", {
      style: {
        paddingLeft: '10px'
      },
      onClick: openSelectedClick
    }, "\u5DF2\u9009: ", /*#__PURE__*/React.createElement("a", null, selectedTags.length))), /*#__PURE__*/React.createElement(TagSearch, {
      tagTypeOptions: tagTypeOptions,
      onChange: getTagList
    })),
    contentNode: /*#__PURE__*/React.createElement("div", {
      className: "tag-drawer-content"
    }, /*#__PURE__*/React.createElement(GroupTagList, {
      list: groupTagList,
      tagClick: tagClick
    }))
  }), /*#__PURE__*/React.createElement(TagDrawer, {
    title: "\u5DF2\u9009\u5BA2\u6237\u6807\u7B7E",
    footer: selectedFooter,
    open: openSelected,
    onClose: function onClose() {
      return setOpenSelected(false);
    },
    headerNode: /*#__PURE__*/React.createElement("div", {
      className: "tag-drawer-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "total-text"
    }, /*#__PURE__*/React.createElement("span", null, "\u6807\u7B7E\u6570: ", selectedTags.length)), /*#__PURE__*/React.createElement(TagSearch, {
      tagTypeOptions: tagTypeOptions,
      onChange: selectedSearch
    })),
    contentNode: /*#__PURE__*/React.createElement("div", {
      className: "tag-drawer-content"
    }, /*#__PURE__*/React.createElement(GroupTagList, {
      list: selectedGroupTags,
      delClick: delClick,
      hasDel: true
    }))
  })));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};