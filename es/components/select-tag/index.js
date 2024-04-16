import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["width", "cancel", "defaultSelectedTags", "batchEdit"];
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Button } from 'antd';
import "./index.css";
import { dictionaryGetByType, tagCustomerList } from './api';
import _find from 'lodash/find';
import _intersectionBy from 'lodash/intersectionBy';
import _ from 'lodash';
import TagDrawer, { GroupTagList, TagSearch } from './components';
export default function SelectTag(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 480 : _props$width,
    cancel = props.cancel,
    defaultSelectedTags = props.defaultSelectedTags,
    _props$batchEdit = props.batchEdit,
    batchEdit = _props$batchEdit === void 0 ? false : _props$batchEdit,
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
    allGroupTagList = _useState6[0],
    setAllGroupTagList = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedGroupTags = _useState8[0],
    setSelectedGroupTags = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedTags = _useState10[0],
    setSelectedTags = _useState10[1];
  // 标签总数量
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    tagTotal = _useState12[0],
    setTagTotal = _useState12[1];
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    selectQueryList = _useState14[0],
    setSelectQueryList = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openSelected = _useState16[0],
    setOpenSelected = _useState16[1];
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
            console.log('pppp', data);
            if (data) setTagTypeOptions(data || []);
          case 5:
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
            if (data) {
              list = data || [];
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
              //存储
              if (!searchParams) {
                setAllGroupTagList(list);
              }
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
    selectedSearch();
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
      var data, searchList, newList, tempTagList, ids, _list;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return tagCustomerList(_objectSpread({}, searchParams));
          case 2:
            data = _context3.sent;
            if (data) {
              console.log('xxxx', selectedGroupTagsSync.current);
              // 获取查询出来的数据与原始已选数据的交集
              searchList = data || [];
              setSelectQueryList(searchList);
              // 标签组数据
              newList = _intersectionBy(selectedGroupTagsSync.current, searchList, 'groupId') || []; //构造数据
              tempTagList = _.cloneDeep(searchList);
              ids = selectedTags.map(function (item) {
                return item.id;
              });
              tempTagList.forEach(function (i) {
                var _i$tag;
                var list = [];
                if (((_i$tag = i.tag) === null || _i$tag === void 0 ? void 0 : _i$tag.length) > 0) {
                  list = i.tag.filter(function (a) {
                    return ids.includes(a.id);
                  }) || [];
                }
                i.tag = list;
              });
              _list = tempTagList.filter(function (i) {
                return i.tag.length > 0;
              }); // 再过滤标签组中的标签
              setSelectedGroupTags(_list);
            }
          case 4:
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
    } else {
      setSelectedTags([]);
    }
  }, [defaultSelectedTags, props.open]);
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
      // const tempTags: TagTypes[] = tags.filter((tag: TagTypes) => tag.selected);
      // if (tempTags.length) {
      //   groupTags.push({
      //     ...group,
      //     tag: tempTags,
      //   });
      // }
    }

    var filterList = selectQueryList.length ? selectQueryList : allGroupTagList;
    for (var _index = 0; _index < filterList.length; _index++) {
      var _group = filterList[_index];
      var _tags = _group.tag || [];
      for (var _i = 0; _i < _tags.length; _i++) {
        var _tag = _tags[_i];
        _tag.selected = !!_find(selectedTags, {
          id: _tag.id
        });
      }
      var tempTags = _tags.filter(function (tag) {
        return tag.selected;
      });
      if (tempTags.length) {
        groupTags.push(_objectSpread(_objectSpread({}, _group), {}, {
          tag: tempTags
        }));
      }
    }
    setGroupTagList(_toConsumableArray(groupTagList));
    setSelectedGroupTags(groupTags);
    selectedGroupTagsSync.current = groupTags;
  }, [selectedTags.length, selectQueryList]);
  useEffect(function () {
    if (props.open) {
      getTagList();
    }
  }, [props.open]);
  //计算过滤已选标签的数量
  var selectTagNumber = useMemo(function () {
    var numberLength = selectedGroupTags.reduce(function (acc, item) {
      var length = item.tag.length;
      return acc = acc + length;
    }, 0);
    return numberLength || 0;
  }, [selectedGroupTags]);
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
  }, "\u5220\u9664\u5168\u90E8");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TagDrawer, _objectSpread(_objectSpread({
    title: batchEdit ? '批量打标签' : '选择客户标签'
  }, drawerProps), {}, {
    footer: footer,
    headerNode: /*#__PURE__*/React.createElement("div", {
      className: "tag-drawer-header"
    }, /*#__PURE__*/React.createElement(TagSearch, {
      tagTypeOptions: tagTypeOptions,
      onChange: getTagList,
      batchEdit: batchEdit,
      selectedOpen: props.open
    })),
    contentNode: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "tag-drawer-content"
    }, /*#__PURE__*/React.createElement(GroupTagList, {
      list: groupTagList,
      tagClick: tagClick
    })), selectedTags.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: width
      },
      className: "select-tag",
      onClick: openSelectedClick
    }, /*#__PURE__*/React.createElement("span", null, "\u5DF2\u9009:"), /*#__PURE__*/React.createElement("a", {
      style: {
        marginLeft: 6
      }
    }, selectedTags.length)))
  }), /*#__PURE__*/React.createElement(TagDrawer, {
    title: batchEdit ? '已选标签' : '已选客户标签',
    footer: selectedFooter,
    open: openSelected,
    onClose: function onClose() {
      return setOpenSelected(false);
    },
    headerNode: /*#__PURE__*/React.createElement("div", {
      className: "tag-drawer-header"
    }, /*#__PURE__*/React.createElement(TagSearch, {
      tagTypeOptions: tagTypeOptions,
      onChange: selectedSearch,
      batchEdit: batchEdit,
      selectedOpen: openSelected
    })),
    contentNode: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "tag-drawer-content"
    }, /*#__PURE__*/React.createElement(GroupTagList, {
      list: selectedGroupTags,
      delClick: delClick,
      hasDel: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      }
    }, selectedGroupTags.length > 0 && selectedTags.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#999'
      }
    }, "\u5171", selectTagNumber, "\u6761")))
  })));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};