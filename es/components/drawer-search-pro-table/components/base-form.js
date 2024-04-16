import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useImperativeHandle } from 'react';
import { Form, Input } from 'antd';
import KhtIcons from '../../kht-icons';
// import { throttle } from '../../../utils';
import _debounce from 'lodash/debounce';
//抽屉表单
export var BaseForm = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var searchName = props.searchName,
    _props$searchInputSta = props.searchInputState,
    searchInputState = _props$searchInputSta === void 0 ? true : _props$searchInputSta,
    _props$searchInputPla = props.searchInputPlaceholder,
    searchInputPlaceholder = _props$searchInputPla === void 0 ? '搜索' : _props$searchInputPla,
    onChange = props.onChange;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  //外部调用方法
  useImperativeHandle(ref, function () {
    return {
      resetFields: form.resetFields,
      getFieldsValue: function getFieldsValue() {
        var data = {};
        var formData = form.getFieldsValue();
        //过滤undefined值的返回
        Object.keys(formData).forEach(function (key) {
          if (typeof formData[key] !== 'undefined') {
            data[key] = formData[key];
          }
        });
        return data;
      },
      setFieldsValue: function () {
        var _setFieldsValue = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                form.setFieldsValue(data);
                _context.next = 3;
                return onChange(data);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function setFieldsValue(_x) {
          return _setFieldsValue.apply(this, arguments);
        }
        return setFieldsValue;
      }()
    };
  }, []);
  var debounceFun = _debounce(function (data) {
    onChange(data);
  }, 1000);
  return /*#__PURE__*/React.createElement(Form, {
    className: searchInputState ? 'filter-ground search-input' : 'filter-ground',
    layout: "inline",
    form: form
  }, props.children, searchInputState && /*#__PURE__*/React.createElement(Form.Item, {
    name: searchName,
    className: "search-input-ground"
  }, /*#__PURE__*/React.createElement(Input
  // onChange={throttle((data: any) => {
  //   onChange(data);
  // }, 2500)}
  // onChange={({target: { value }}:any) => {
  //   if (!value) onChange({});
  // }}
  , {
    // onChange={throttle((data: any) => {
    //   onChange(data);
    // }, 2500)}
    // onChange={({target: { value }}:any) => {
    //   if (!value) onChange({});
    // }}
    onChange: debounceFun,
    onPressEnter: debounceFun,
    // onBlur={(data: any) => onChange(data)}
    style: {
      borderRadius: 4,
      paddingLeft: 6,
      width: 158
    },
    allowClear: true,
    placeholder: searchInputPlaceholder,
    prefix: /*#__PURE__*/React.createElement(KhtIcons, {
      type: "icon-sousuo",
      style: {
        color: '#bbb'
      }
    })
  })));
});