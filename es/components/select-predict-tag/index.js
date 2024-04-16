import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useMemo } from 'react';
import { Drawer, Button, message } from 'antd';
import BaseSelectForm from '../base-select-form';
import { getSpecialTagList } from './api';
import "./index.css";
export default function SelectPredictTag(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? true : _props$open,
    title = props.title,
    _props$width = props.width,
    width = _props$width === void 0 ? 480 : _props$width,
    _props$destroyOnClose = props.destroyOnClose,
    destroyOnClose = _props$destroyOnClose === void 0 ? true : _props$destroyOnClose,
    _props$footer = props.footer,
    footer = _props$footer === void 0 ? null : _props$footer,
    onClose = props.onClose,
    onSubmit = props.onSubmit,
    selectTag = props.selectTag,
    selectLevel = props.selectLevel;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tagOptions = _useState2[0],
    setTagOptions = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    tagValue = _useState4[0],
    setTagValue = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    levelValue = _useState6[0],
    setLevelValue = _useState6[1];
  var options = [{
    label: '30%以下',
    value: '1'
  }, {
    label: '31%-40%',
    value: '2'
  }, {
    label: '41%-50%',
    value: '3'
  }, {
    label: '51%-60%',
    value: '4'
  }, {
    label: '61%-70%',
    value: '5'
  }, {
    label: '71%-80%',
    value: '6'
  }, {
    label: '81%-90%',
    value: '7'
  }, {
    label: '91%-100%',
    value: '8'
  }];
  //取消
  var handleClose = function handleClose() {
    onClose && onClose();
  };
  //提交
  var handleOk = function handleOk() {
    var selectTagData = tagOptions.filter(function (item) {
      return item.id === tagValue;
    });
    var selectLevelData = options.filter(function (item) {
      return levelValue.includes(item.value);
    });
    console.log(tagValue, 'tagValue', levelValue, 'levelValue', selectTagData, 'selectTagData', selectLevelData, 'selectLevelData');
    onSubmit && onSubmit(tagValue, levelValue, selectTagData, selectLevelData);
    onClose && onClose();
  };
  //获取预测标签options
  var getTagList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var params, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            params = {
              id: 'b794cd6934f611ed90effc3497e18fc3'
            };
            _context.next = 3;
            return getSpecialTagList(params);
          case 3:
            res = _context.sent;
            setTagOptions(res || []);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getTagList() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleOpenChange = function handleOpenChange(visible) {
    if (visible && !tagValue) {
      message.warning('请先选择预测标签类型');
    }
  };
  useEffect(function () {
    getTagList();
  }, []);
  useEffect(function () {
    if (selectTag) {
      setTagValue(selectTag);
    } else {
      setTagValue(null);
    }
  }, [selectTag]);
  useEffect(function () {
    if (selectLevel) {
      setLevelValue(selectLevel);
    } else {
      setLevelValue([]);
    }
  }, [selectLevel]);
  var levelOptions = useMemo(function () {
    console.log('tag', tagValue);
    return tagValue ? options : [];
  }, [tagValue]);
  var initFooter = function initFooter() {
    if (footer) return footer;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      style: {
        borderColor: 'transparent',
        borderRadius: 4,
        marginRight: 10,
        backgroundColor: '#F1F1F1'
      },
      onClick: handleClose
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      style: {
        borderRadius: 4
      },
      type: "primary",
      onClick: handleOk
    }, "\u786E\u5B9A"));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Drawer, {
    className: "drawer-predict-tag",
    getContainer: document.querySelector('#root'),
    open: open,
    onClose: handleClose,
    title: title,
    destroyOnClose: destroyOnClose,
    footerStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    width: width,
    footer: initFooter()
  }, /*#__PURE__*/React.createElement("div", {
    className: "predict-tag-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "predict-tag-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item-label"
  }, "\u9884\u6D4B\u6807\u7B7E"), /*#__PURE__*/React.createElement("div", {
    className: "item-value"
  }, /*#__PURE__*/React.createElement(BaseSelectForm, {
    showSearch: false,
    isMultiple: false,
    value: tagValue,
    options: tagOptions,
    fieldNames: {
      label: 'name',
      value: 'id'
    },
    onChange: function onChange(value) {
      setTagValue(value);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "predict-tag-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item-label"
  }, "\u9700\u6C42\u7B49\u7EA7"), /*#__PURE__*/React.createElement("div", {
    className: "item-value"
  }, /*#__PURE__*/React.createElement(BaseSelectForm, {
    showArrow: true,
    showSearch: true,
    isMultiple: true,
    value: levelValue,
    options: levelOptions,
    onOpenChange: handleOpenChange,
    onChange: function onChange(value) {
      setLevelValue(value);
    }
  }))))));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};