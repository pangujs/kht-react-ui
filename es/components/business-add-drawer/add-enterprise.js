import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ProForm, DrawerForm, ProFormRadio, ProFormText } from '@ant-design/pro-components';
import { Form, Button, Input, message } from 'antd';
import React, { useState } from 'react';
import FileUpload from '../file-upload';
import { validateMobile, validatePhone } from '../../utils/regexp';
import { residentManagerAdd } from '../../http/api';
import { getValueFromEvent } from '../../utils';
export default function AddEnterprise(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var contactType = Form.useWatch('contactType', form);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fileDataList = _useState2[0],
    setFileDataList = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    logoList = _useState4[0],
    setLogoList = _useState4[1];
  var fileOnChange = function fileOnChange(_ref) {
    var fileList = _ref.fileList;
    console.log(fileList);
    setFileDataList(fileList);
  };
  var logoOnChange = function logoOnChange(_ref2) {
    var fileList = _ref2.fileList;
    setLogoList(fileList);
  };
  var onFinish = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var name, simpleName, params, attachmentList, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(values);
            // 基础资料提交
            if (!(values.mobileList[0] == '' && values.phoneList[0] == '')) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", message.info('联系方式至少填写一个'));
          case 3:
            name = values.name, simpleName = values.simpleName;
            params = {
              name: name,
              simpleName: simpleName,
              mobilePhoneList: values.mobileList,
              telePhoneList: values.phoneList,
              businessType: '2' // 个人
            };

            if (values.mobileList.length) {
              params.mobilePhoneList = params.mobilePhoneList.filter(function (val) {
                return !!val;
              });
            }
            if (values.phoneList.length) {
              params.telePhoneList = params.telePhoneList.filter(function (val) {
                return !!val;
              });
            }
            attachmentList = []; // 附件
            if (fileDataList.length) {
              fileDataList.map(function (item) {
                attachmentList.push(_objectSpread(_objectSpread({}, item), {}, {
                  attachmentType: '1'
                }));
              });
            }
            // logo
            if (logoList.length) {
              logoList.map(function (item) {
                attachmentList.push(_objectSpread(_objectSpread({}, item), {}, {
                  attachmentType: '2'
                }));
              });
            }
            params.attachmentList = attachmentList;
            _context.next = 13;
            return residentManagerAdd(params);
          case 13:
            data = _context.sent;
            if (data.success) {
              message.success('操作成功!');
              props.onOkCb && props.onOkCb();
              props.onOpenChange && props.onOpenChange(false);
            } else {
              message.error(data.message);
            }
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  // 基础信息-添加、编辑
  var baseFormElement = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProFormText, {
    key: "name",
    name: "name",
    getValueFromEvent: getValueFromEvent,
    label: "\u4F01\u4E1A\u540D\u79F0",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 32
    },
    rules: [{
      required: true,
      message: '请输入'
    }]
  }), /*#__PURE__*/React.createElement(ProFormText, {
    key: "simpleName",
    name: "simpleName",
    getValueFromEvent: getValueFromEvent,
    label: "\u4F01\u4E1A\u7B80\u79F0",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 32
    }
  }), /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u8054\u7CFB\u65B9\u5F0F",
    required: true,
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(ProFormRadio.Group, {
    name: "contactType",
    fieldProps: {
      optionType: 'button',
      buttonStyle: 'solid'
    },
    formItemProps: {
      noStyle: true
    },
    initialValue: '1',
    options: [{
      label: '手机号码',
      value: '1'
    }, {
      label: '电话号码',
      value: '2'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: contactType === '1' ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Form.List, {
    name: "mobileList",
    initialValue: ['']
  }, function (fields, _ref4) {
    var add = _ref4.add,
      remove = _ref4.remove;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement(Form.Item, {
        label: "",
        required: false,
        key: field.key
      }, /*#__PURE__*/React.createElement("div", {
        className: "phone-list"
      }, /*#__PURE__*/React.createElement(Form.Item, _objectSpread(_objectSpread({}, field), {}, {
        noStyle: true,
        rules: [{
          validator: validatePhone
        }]
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u8BF7\u8F93\u5165",
        maxLength: 11
      })), index === 0 ? /*#__PURE__*/React.createElement(Button, {
        style: {
          padding: 0
        },
        type: "link",
        onClick: function onClick() {
          return add('');
        }
      }, "\u6DFB\u52A0") : /*#__PURE__*/React.createElement(Button, {
        style: {
          padding: 0
        },
        type: "link",
        danger: true,
        onClick: function onClick() {
          return remove(field.name);
        }
      }, "\u5220\u9664")));
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: contactType === '2' ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Form.List, {
    name: "phoneList",
    initialValue: ['']
  }, function (fields, _ref5) {
    var add = _ref5.add,
      remove = _ref5.remove;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement(Form.Item, {
        label: "",
        required: false,
        key: field.key
      }, /*#__PURE__*/React.createElement("div", {
        className: "phone-list"
      }, /*#__PURE__*/React.createElement(Form.Item, _objectSpread(_objectSpread({}, field), {}, {
        noStyle: true,
        rules: [{
          validator: validateMobile
        }]
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u8BF7\u8F93\u5165"
      })), index === 0 ? /*#__PURE__*/React.createElement(Button, {
        style: {
          padding: 0
        },
        type: "link",
        onClick: function onClick() {
          return add('');
        }
      }, "\u6DFB\u52A0") : /*#__PURE__*/React.createElement(Button, {
        style: {
          padding: 0
        },
        type: "link",
        danger: true,
        onClick: function onClick() {
          return remove(field.name);
        }
      }, "\u5220\u9664")));
    }));
  })))), /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u9644\u4EF6",
    key: "file",
    name: "file"
  }, /*#__PURE__*/React.createElement(FileUpload, {
    hasPopover: false,
    maxCount: 1,
    onChange: fileOnChange,
    defaultFileList: fileDataList,
    accept: ""
  })), /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u4F01\u4E1Alogo",
    key: "logo",
    name: "logo"
  }, /*#__PURE__*/React.createElement(FileUpload, {
    hasPopover: false,
    maxCount: 1,
    onChange: logoOnChange,
    defaultFileList: logoList
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerForm, {
    width: 580,
    title: "\u65B0\u589E\u4F01\u4E1A",
    form: form,
    open: open,
    onOpenChange: function onOpenChange(val) {
      return props.onOpenChange && props.onOpenChange(val);
    },
    autoFocusFirstInput: true,
    className: "user-handle-drawer",
    drawerProps: {
      destroyOnClose: true,
      maskClosable: true,
      getContainer: document.getElementById('root') || document.body,
      bodyStyle: {
        paddingBottom: 0
      }
    },
    submitter: {
      render: function render(props, defaultDoms) {
        return [/*#__PURE__*/React.createElement("div", {
          className: "antd-drawer-footer-button-center",
          key: "btn-group"
        }, defaultDoms[0], defaultDoms[1])];
      }
    },
    layout: "horizontal",
    labelCol: {
      span: 4
    },
    labelAlign: "left",
    onFinish: onFinish
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-handle-drawer-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-handle-drawer-content"
  }, baseFormElement))));
}