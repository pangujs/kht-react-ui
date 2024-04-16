import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useCallback, useState } from 'react';
import { Drawer, Empty, Input, Select } from 'antd';
import emptyImg from '../../assets/images/table-null.png';
import KhtBusinessCategoryDrawerTree from '../business-category-drawer-tree';
import _find from 'lodash/find';
import _debounce from 'lodash/debounce';
import KhtIcons from '../kht-icons';
var SearchIcon = /*#__PURE__*/React.createElement(KhtIcons, {
  type: "icon-sousuo",
  style: {
    color: '#bbb'
  }
});
export var TagSearch = function TagSearch(props) {
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    categoryName = _useState2[0],
    setCategoryName = _useState2[1];
  var _useState3 = useState(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    tagType = _useState4[0],
    setTagType = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    tagName = _useState6[0],
    setTagName = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openCategory = _useState8[0],
    setOpenCategory = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    defaultCheckedItems = _useState10[0],
    setDefaultCheckedItems = _useState10[1];
  var categorySelectChange = function categorySelectChange(e) {
    if (e == undefined) {
      categoryChange([]);
    }
  };
  var categoryChange = function categoryChange(selectNode) {
    console.log(selectNode);
    setDefaultCheckedItems(selectNode);
    if (selectNode.length) {
      // 判断是否选择了根节点（全部分类）
      if (_find(selectNode, {
        id: '0'
      })) {
        setCategoryName('全部分类');
      } else {
        var temp = selectNode.length > 3 ? "".concat(selectNode.slice(0, 3).map(function (item) {
          return item.title;
        }).join(','), "\u7B49").concat(selectNode.length, "\u4E2A\u5206\u7C7B") : selectNode.map(function (item) {
          return item.title;
        }).join(',');
        setCategoryName(temp);
      }
    } else {
      setCategoryName(undefined);
    }
    props.onChange({
      tagGroupCategoryIds: selectNode.map(function (item) {
        return item.id;
      }) || [],
      tagType: tagType,
      tagName: tagName
    });
  };
  var tagTypeChange = function tagTypeChange(val) {
    setTagType(val);
    props.onChange({
      tagGroupCategoryIds: defaultCheckedItems.map(function (item) {
        return item.id;
      }),
      tagType: val,
      tagName: tagName
    });
  };
  // 搜索输入
  var inputOnChange = function inputOnChange(e) {
    setTagName(e.target.value);
    searchInput(e.target.value);
  };
  /** 查询条件中的 input onChange */
  var searchInput = useCallback(_debounce( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            props.onChange({
              tagGroupCategoryIds: defaultCheckedItems.map(function (item) {
                return item.id;
              }),
              tagType: tagType,
              tagName: value
            });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), 1000), [defaultCheckedItems, tagType]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tag-search-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag-search-box-left"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u5168\u90E8\u5206\u7C7B",
    allowClear: true,
    value: categoryName,
    open: false,
    style: {
      width: '108px'
    },
    onChange: categorySelectChange,
    onClick: function onClick() {
      setOpenCategory(true);
    }
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u5168\u90E8\u6765\u6E90",
    style: {
      width: '108px',
      marginLeft: 10
    },
    options: props.tagTypeOptions || [],
    onChange: tagTypeChange,
    value: tagType,
    fieldNames: {
      label: 'name',
      value: 'dictValue'
    },
    allowClear: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "tag-search-box-right"
  }, /*#__PURE__*/React.createElement(Input, {
    allowClear: true,
    style: {
      width: '148px'
    },
    value: tagName,
    onChange: inputOnChange,
    placeholder: "\u641C\u7D22\u6807\u7B7E",
    prefix: SearchIcon
  }))), /*#__PURE__*/React.createElement(KhtBusinessCategoryDrawerTree, {
    open: openCategory,
    cancel: function cancel() {
      return setOpenCategory(false);
    },
    ok: categoryChange,
    destroyOnClose: false,
    defaultCheckedItems: defaultCheckedItems,
    multiple: true,
    selectable: false,
    disableChild: true,
    isPageLoad: true
  }));
};
export var emptyNode = /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: '100px'
  }
}, /*#__PURE__*/React.createElement(Empty, {
  image: emptyImg,
  description: /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ccc'
    }
  }, "\u6682\u65E0\u6570\u636E")
}));
export var GroupTagList = function GroupTagList(props) {
  var list = props.list,
    _props$hasDel = props.hasDel,
    hasDel = _props$hasDel === void 0 ? false : _props$hasDel,
    _props$tagClick = props.tagClick,
    tagClick = _props$tagClick === void 0 ? function () {} : _props$tagClick,
    _props$delClick = props.delClick,
    delClick = _props$delClick === void 0 ? function () {} : _props$delClick;
  return /*#__PURE__*/React.createElement(React.Fragment, null, list.length ? list.map(function (item, index) {
    var _item$tag;
    return ((_item$tag = item.tag) === null || _item$tag === void 0 ? void 0 : _item$tag.length) ? /*#__PURE__*/React.createElement("div", {
      className: "tab-group-items",
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "group-label"
    }, item === null || item === void 0 ? void 0 : item.groupName), /*#__PURE__*/React.createElement("div", {
      className: "tag-items"
    }, item.tag.map(function (tag, tagIndex) {
      return /*#__PURE__*/React.createElement("div", {
        className: "tag ".concat(tag.selected && !hasDel ? 'active' : ''),
        key: tagIndex,
        onClick: function onClick() {
          return tagClick(item, tag);
        }
      }, tag === null || tag === void 0 ? void 0 : tag.name, hasDel ? /*#__PURE__*/React.createElement("div", {
        className: "close-icon",
        onClick: function onClick() {
          return delClick(item, tag);
        }
      }, /*#__PURE__*/React.createElement(KhtIcons, {
        type: "icon-qingchu"
      })) : null);
    }))) : null;
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '100px'
    }
  }, /*#__PURE__*/React.createElement(Empty, {
    image: emptyImg,
    description: /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#ccc'
      }
    }, "\u6682\u65E0\u6570\u636E")
  })));
};
export default function TagDrawer(props) {
  return /*#__PURE__*/React.createElement(Drawer, _objectSpread(_objectSpread({
    width: 480,
    maskClosable: true
  }, props), {}, {
    className: "kht-business-select-tag-drawer",
    getContainer: document.getElementById('root') || document.body,
    bodyStyle: {
      padding: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tag-drawer-body"
  }, props.headerNode, props.contentNode, props.children));
}