import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ProForm, DrawerForm, ProFormDatePicker, ProFormRadio, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { Divider, Form, Button, Input, message } from 'antd';
import React, { useState } from 'react';
import "./index.css";
import { IdcardUpload } from '../idcard-upload';
import FileUpload from '../file-upload';
import AreaCascader from '../area-cascader';
import { residentManagerAdd } from '../../http/api';
import { validateMobile, validatePhone } from '../../utils/regexp';
import { disabledAfterToday } from '../../utils';
export default function AddUser(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var contactType = Form.useWatch('contactType', form);
  var cardType = Form.useWatch('cardType', form);
  var nationalityType = Form.useWatch('nationalityType', form);
  // 身份证正反面
  var _useState = useState({
      pros: {},
      cons: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    defaultIdcardDate = _useState2[0],
    setDefaultIdcardDate = _useState2[1];
  // 照片
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    photoList = _useState4[0],
    setPhotoList = _useState4[1];
  // 其他证件照片
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    otherPhotoList = _useState6[0],
    setOtherPhotoList = _useState6[1];
  var idcardChange = function idcardChange(value) {
    setDefaultIdcardDate(value);
  };
  var photoChange = function photoChange(_ref) {
    var fileList = _ref.fileList;
    setPhotoList(fileList);
  };
  var otherPhotoChange = function otherPhotoChange(_ref2) {
    var fileList = _ref2.fileList;
    setOtherPhotoList(fileList);
  };
  var onFinish = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var sex, nationality, nationalityType, name, address, birth, emergencyContactName, emergencyContactTelephone, idCard, cardType, cardName, params, attachmentList, actions, data;
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
            sex = values.sex, nationality = values.nationality, nationalityType = values.nationalityType, name = values.name, address = values.address, birth = values.birth, emergencyContactName = values.emergencyContactName, emergencyContactTelephone = values.emergencyContactTelephone, idCard = values.idCard, cardType = values.cardType, cardName = values.cardName;
            params = {
              name: name,
              address: address,
              birth: birth,
              emergencyContactName: emergencyContactName,
              emergencyContactTelephone: emergencyContactTelephone,
              idCard: idCard,
              cardType: cardType,
              businessType: '1',
              mobilePhoneList: values.mobileList,
              telePhoneList: values.phoneList,
              cardName: cardName,
              nationality: nationalityType === '1' ? '中国' : nationality,
              sex: sex
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
            attachmentList = []; // attachmentType 类型 [attachment：1.附件：2.企业log,3.照片,4.身份证正面,5.身份证反面，6.其他证件]
            if (cardType === '1') {
              // 身份证
              // 身份证正面
              if (defaultIdcardDate.pros.fileUrl) {
                attachmentList.push(_objectSpread(_objectSpread({}, defaultIdcardDate.pros), {}, {
                  attachmentType: '4'
                }));
              }
              // 身份证反面
              if (defaultIdcardDate.cons.fileUrl) {
                attachmentList.push(_objectSpread(_objectSpread({}, defaultIdcardDate.cons), {}, {
                  attachmentType: '5'
                }));
              }
            } else {
              // 其他证件
              if (otherPhotoList.length) {
                otherPhotoList.map(function (item) {
                  attachmentList.push(_objectSpread(_objectSpread({}, item), {}, {
                    attachmentType: '6'
                  }));
                });
              }
            }
            // 照片
            if (photoList.length) {
              photoList.map(function (item) {
                attachmentList.push(_objectSpread(_objectSpread({}, item), {}, {
                  attachmentType: '3'
                }));
              });
            }
            params.attachmentList = attachmentList;
            if (nationalityType == '1' && values.area && values.area.length) {
              // 国籍中国 - 省市区
              params.province = values.area[0] || '';
              params.city = values.area[1] || '';
              params.district = values.area[2] || '';
            }
            actions = residentManagerAdd;
            _context.next = 15;
            return actions(params);
          case 15:
            data = _context.sent;
            if (data.success) {
              message.success('操作成功!');
              props.onOkCb && props.onOkCb();
              props.onOpenChange && props.onOpenChange(false);
            } else {
              message.error(data.message);
            }
          case 17:
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
    label: "\u59D3\u540D",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 32
    },
    rules: [{
      required: true,
      message: '请输入'
    }]
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
  })))), /*#__PURE__*/React.createElement(ProFormRadio.Group, {
    name: "sex",
    label: "\u6027\u522B",
    initialValue: 1,
    options: [{
      label: '男',
      value: 1
    }, {
      label: '女',
      value: 2
    }, {
      label: '未知',
      value: 3
    }]
  }), /*#__PURE__*/React.createElement(ProFormDatePicker, {
    name: "birth",
    fieldProps: {
      disabledDate: disabledAfterToday,
      style: {
        width: '100%'
      },
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement || document.body;
      }
    },
    label: "\u751F\u65E5",
    placeholder: "\u8BF7\u9009\u62E9"
  }), /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u56FD\u7C4D",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(ProFormSelect, {
    name: "nationalityType",
    fieldProps: {
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      }
    },
    placeholder: "\u8BF7\u9009\u62E9\u56FD\u7C4D",
    initialValue: "1",
    request: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", [{
                value: '1',
                label: '中国'
              }, {
                value: '2',
                label: '其他'
              }]);
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function request() {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }), nationalityType === '2' ? /*#__PURE__*/React.createElement(ProFormText, {
    key: "nationality",
    name: "nationality",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 32
    },
    rules: [{
      required: true,
      message: '请输入'
    }]
  }) : null), /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u6237\u7C4D\u5730\u5740"
  }, nationalityType === '1' ? /*#__PURE__*/React.createElement(ProForm.Item, {
    name: "area",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(AreaCascader, null)) : null, /*#__PURE__*/React.createElement(ProFormText, {
    key: "address",
    name: "address",
    placeholder: "\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740",
    formItemProps: {
      style: {
        marginBottom: 0
      }
    },
    fieldProps: {
      maxLength: 150,
      showCount: true,
      style: {
        marginTop: nationalityType === '1' ? 10 : 0
      }
    },
    rules: [
    // { required: true, message: '请输入' },
    {
      pattern: /^[^\s]*$/,
      message: '名称不能输入空格及非法表情符号'
    }, {
      pattern: /^[\u0020-\u007e\u4e00-\u9fa5]+$/,
      message: '名称不能输入空格及非法表情符号'
    }]
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ProFormSelect, {
    name: "cardType",
    label: "\u8BC1\u636E\u7C7B\u578B",
    fieldProps: {
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      }
    },
    placeholder: "\u8BF7\u9009\u62E9\u8BC1\u636E\u7C7B\u578B",
    initialValue: "1",
    request: function () {
      var _request2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", [{
                value: '1',
                label: '身份证'
              }, {
                value: '2',
                label: '其他'
              }]);
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function request() {
        return _request2.apply(this, arguments);
      }
      return request;
    }()
  }), cardType === '1' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProFormText, {
    key: "idCard",
    name: "idCard",
    label: "\u8EAB\u4EFD\u8BC1\u53F7",
    placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",
    fieldProps: {
      maxLength: 32
    }
  }), /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u8EAB\u4EFD\u8BC1\u7167\u7247",
    key: "idCardPhoto",
    name: "idCardPhoto"
  }, /*#__PURE__*/React.createElement(IdcardUpload, {
    onChange: idcardChange,
    defaultDate: defaultIdcardDate
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProFormText, {
    key: "cardName",
    name: "cardName",
    label: "\u8BC1\u4EF6\u540D\u79F0",
    placeholder: "\u8BF7\u8F93\u5165\u8BC1\u4EF6\u540D\u79F0",
    fieldProps: {
      maxLength: 32
    }
  }), /*#__PURE__*/React.createElement(ProFormText, {
    key: "idCard",
    name: "idCard",
    label: "\u8BC1\u4EF6\u53F7\u7801",
    placeholder: "\u8BF7\u8F93\u5165\u8BC1\u4EF6\u53F7\u7801",
    fieldProps: {
      maxLength: 32
    }
  }), /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u8BC1\u4EF6\u7167\u7247",
    key: "otherPhoto",
    name: "otherPhoto"
  }, /*#__PURE__*/React.createElement(FileUpload, {
    hasPopover: false,
    maxCount: 9,
    defaultFileList: otherPhotoList,
    onChange: otherPhotoChange
  }))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ProFormText, {
    key: "emergencyContactName",
    name: "emergencyContactName",
    label: "\u7D27\u6025\u8054\u7CFB\u4EBA",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 32
    }
  }), /*#__PURE__*/React.createElement(ProFormText, {
    key: "emergencyContactTelephone",
    name: "emergencyContactTelephone",
    label: "\u7D27\u6025\u8054\u7CFB\u4EBA\u7535\u8BDD",
    placeholder: "\u8BF7\u8F93\u5165",
    rules: [{
      validator: validatePhone
    }]
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u7167\u7247",
    key: "photo",
    name: "photo"
  }, /*#__PURE__*/React.createElement(FileUpload, {
    hasPopover: false,
    onChange: photoChange,
    maxCount: 1,
    defaultFileList: photoList
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerForm, {
    width: 580,
    title: "\u65B0\u589E\u7528\u6237",
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
      span: 6
    },
    labelAlign: "left",
    onFinish: onFinish
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-handle-drawer-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-handle-drawer-content"
  }, baseFormElement))));
}