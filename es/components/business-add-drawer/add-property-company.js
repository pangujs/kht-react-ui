import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { DrawerForm, ProForm, ProFormDatePicker, ProFormSelect, ProFormSwitch, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { dictionaryGet, propertyManagementAdd, propertyManagementGet, propertyManagementUpdate } from '../../http/api';
import { Col, Form, Row, message } from 'antd';
import React, { useEffect, useState } from 'react';
import Style from "./index.module.css";
import FileUpload from '../file-upload';
import _find from 'lodash/find';
var getPopupContainer = function getPopupContainer(triggerNode) {
  return triggerNode.parentNode || document.body;
};
var fieldNames = {
  label: 'name',
  value: 'dictValue'
};
// 物业公司新增 编辑
export default function AddPropertyCompany(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$handleType = props.handleType,
    handleType = _props$handleType === void 0 ? 'add' : _props$handleType,
    currentRow = props.currentRow,
    communityId = props.communityId;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fileDataList = _useState2[0],
    setFileDataList = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    logoList = _useState4[0],
    setLogoList = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    dictionary = _useState6[0],
    setDictionary = _useState6[1];
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
      var _find2, _find3, _find4;
      var actions, params, _yield$actions, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(values);
            actions = handleType === 'add' ? propertyManagementAdd : propertyManagementUpdate;
            params = _objectSpread(_objectSpread({}, values), {}, {
              communitySourceName: (values === null || values === void 0 ? void 0 : values.communitySource) ? (_find2 = _find(dictionary === null || dictionary === void 0 ? void 0 : dictionary.community_source, {
                dictValue: values.communitySource
              })) === null || _find2 === void 0 ? void 0 : _find2.name : undefined,
              takeOverPropertyName: (values === null || values === void 0 ? void 0 : values.takeOverProperty) ? (_find3 = _find(dictionary === null || dictionary === void 0 ? void 0 : dictionary.community_take_over_property, {
                dictValue: values.takeOverProperty
              })) === null || _find3 === void 0 ? void 0 : _find3.name : undefined,
              communityStageName: (values === null || values === void 0 ? void 0 : values.communityStage) ? (_find4 = _find(dictionary === null || dictionary === void 0 ? void 0 : dictionary.community_stage, {
                dictValue: values.communityStage
              })) === null || _find4 === void 0 ? void 0 : _find4.name : undefined,
              attachmentList: fileDataList.map(function (item) {
                var fileId = item.fileId,
                  fileType = item.fileType,
                  fileUrl = item.fileUrl,
                  memory = item.memory,
                  name = item.name,
                  path = item.path;
                return {
                  fileId: fileId,
                  fileType: fileType,
                  fileUrl: fileUrl,
                  memory: memory,
                  name: name,
                  path: path
                };
              }),
              logo: logoList.map(function (item) {
                var fileId = item.fileId,
                  fileType = item.fileType,
                  fileUrl = item.fileUrl,
                  memory = item.memory,
                  name = item.name,
                  path = item.path;
                return {
                  fileId: fileId,
                  fileType: fileType,
                  fileUrl: fileUrl,
                  memory: memory,
                  name: name,
                  path: path
                };
              })[0],
              takeOverDate: values.takeOverDate ? values.takeOverDate + ' 00:00:00' : '',
              communityId: communityId
            });
            if (handleType === 'edit') {
              params.id = currentRow === null || currentRow === void 0 ? void 0 : currentRow.id;
            }
            _context.next = 6;
            return actions(params);
          case 6:
            _yield$actions = _context.sent;
            data = _yield$actions.data;
            if (data.success) {
              message.success('操作成功！');
              props.onOkCb && props.onOkCb();
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getDetailInfo = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _yield$propertyManage, data, _data$response, name, communitySource, takeOverProperty, powerSupplyMode, communityStage, takeOverDate, waterSupplyMode, managementFee, managementFeeDesc, attachmentList, logo, isCurrent;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return propertyManagementGet({
              id: currentRow === null || currentRow === void 0 ? void 0 : currentRow.id
            });
          case 2:
            _yield$propertyManage = _context2.sent;
            data = _yield$propertyManage.data;
            if (data.success) {
              _data$response = data.response, name = _data$response.name, communitySource = _data$response.communitySource, takeOverProperty = _data$response.takeOverProperty, powerSupplyMode = _data$response.powerSupplyMode, communityStage = _data$response.communityStage, takeOverDate = _data$response.takeOverDate, waterSupplyMode = _data$response.waterSupplyMode, managementFee = _data$response.managementFee, managementFeeDesc = _data$response.managementFeeDesc, attachmentList = _data$response.attachmentList, logo = _data$response.logo, isCurrent = _data$response.isCurrent;
              form.setFieldsValue({
                name: name,
                communitySource: communitySource,
                takeOverProperty: takeOverProperty,
                powerSupplyMode: powerSupplyMode,
                communityStage: communityStage,
                takeOverDate: takeOverDate === null || takeOverDate === void 0 ? void 0 : takeOverDate.split(' ')[0],
                waterSupplyMode: waterSupplyMode,
                managementFee: managementFee,
                managementFeeDesc: managementFeeDesc,
                attachmentList: attachmentList,
                logo: [logo],
                isCurrent: isCurrent
              });
              setFileDataList(attachmentList || []);
              setLogoList(logo ? [logo] : []);
            }
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getDetailInfo() {
      return _ref4.apply(this, arguments);
    };
  }();
  var getDictionaryGet = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return dictionaryGet();
          case 2:
            data = _context3.sent;
            if (data.success) setDictionary(data.response);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getDictionaryGet() {
      return _ref5.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (open) {
      getDictionaryGet();
    } else {
      setFileDataList([]);
      setLogoList([]);
    }
    if (open && handleType === 'edit') {
      getDetailInfo();
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerForm, {
    width: 580,
    title: "".concat(handleType === 'add' ? '添加物业公司' : '编辑物业公司'),
    form: form,
    open: open,
    onOpenChange: function onOpenChange(val) {
      return props.onOpenChange && props.onOpenChange(val);
    },
    autoFocusFirstInput: true,
    drawerProps: {
      destroyOnClose: true,
      maskClosable: true,
      getContainer: document.getElementById('root') || document.body
    },
    submitter: {
      render: function render(props, defaultDoms) {
        return [/*#__PURE__*/React.createElement("div", {
          className: "antd-drawer-footer-button-center",
          key: "btn-group"
        }, defaultDoms[0], defaultDoms[1])];
      }
    },
    layout: "vertical",
    onFinish: onFinish
  }, /*#__PURE__*/React.createElement(Row, {
    gutter: [20, 0]
  }, /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(ProFormText, {
    key: "name",
    name: "name",
    label: "\u7269\u4E1A\u516C\u53F8\u540D\u79F0",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 100
    },
    rules: [{
      required: true,
      message: '请输入物业公司名称'
    }]
  }), /*#__PURE__*/React.createElement(ProFormSelect, {
    fieldProps: {
      getPopupContainer: getPopupContainer,
      fieldNames: fieldNames
    },
    name: "communitySource",
    label: "\u9879\u76EE\u6765\u6E90",
    placeholder: "\u8BF7\u9009\u62E9",
    options: dictionary === null || dictionary === void 0 ? void 0 : dictionary.community_source
  }), /*#__PURE__*/React.createElement(ProFormSelect, {
    fieldProps: {
      getPopupContainer: getPopupContainer,
      fieldNames: fieldNames
    },
    name: "takeOverProperty",
    label: "\u63A5\u7BA1\u6027\u8D28",
    placeholder: "\u8BF7\u9009\u62E9",
    options: dictionary === null || dictionary === void 0 ? void 0 : dictionary.community_take_over_property
  }), /*#__PURE__*/React.createElement(ProFormText, {
    name: "powerSupplyMode",
    label: "\u4F9B\u7535\u65B9\u5F0F",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 100
    }
  })), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(ProFormSelect, {
    fieldProps: {
      getPopupContainer: getPopupContainer,
      fieldNames: fieldNames
    },
    name: "communityStage",
    label: "\u9879\u76EE\u9636\u6BB5",
    placeholder: "\u8BF7\u9009\u62E9",
    options: dictionary === null || dictionary === void 0 ? void 0 : dictionary.community_stage
  }), /*#__PURE__*/React.createElement(ProFormDatePicker, {
    name: "takeOverDate",
    fieldProps: {
      style: {
        width: '100%'
      },
      getPopupContainer: getPopupContainer
    },
    label: "\u63A5\u7BA1\u65F6\u95F4",
    placeholder: "\u8BF7\u9009\u62E9"
  }), /*#__PURE__*/React.createElement(ProFormText, {
    name: "waterSupplyMode",
    label: "\u4F9B\u6C34\u65B9\u5F0F",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 100
    }
  }), /*#__PURE__*/React.createElement(ProFormText, {
    name: "managementFee",
    label: "\u7269\u4E1A\u8D39",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 100
    }
  })), /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(ProFormTextArea, {
    name: "managementFeeDesc",
    label: "\u7269\u4E1A\u8D39\u63CF\u8FF0",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 2000,
      showCount: true,
      rows: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: Style['horizontal-form-div']
  }, /*#__PURE__*/React.createElement("div", {
    className: Style['label']
  }, "\u9644\u4EF6"), /*#__PURE__*/React.createElement("div", {
    className: Style['content']
  }, /*#__PURE__*/React.createElement(ProForm.Item, {
    key: "attachmentList",
    name: "attachmentList",
    noStyle: true
  }, /*#__PURE__*/React.createElement(FileUpload, {
    onChange: fileOnChange,
    defaultFileList: fileDataList,
    accept: ""
  })))), /*#__PURE__*/React.createElement("div", {
    className: Style['horizontal-form-div']
  }, /*#__PURE__*/React.createElement("div", {
    className: Style['label']
  }, "\u4F01\u4E1Alogo"), /*#__PURE__*/React.createElement("div", {
    className: Style['content']
  }, /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u4F01\u4E1Alogo",
    key: "logo",
    name: "logo",
    noStyle: true
  }, /*#__PURE__*/React.createElement(FileUpload, {
    maxCount: 1,
    onChange: logoOnChange,
    defaultFileList: logoList
  })))), /*#__PURE__*/React.createElement("div", {
    className: Style['horizontal-form-div']
  }, /*#__PURE__*/React.createElement("div", {
    className: Style['label']
  }, "\u8BBE\u4E3A\u5F53\u524D\u7269\u4E1A"), /*#__PURE__*/React.createElement("div", {
    className: Style['content']
  }, /*#__PURE__*/React.createElement(ProFormSwitch, {
    name: "isCurrent",
    initialValue: true,
    label: "\u8BBE\u4E3A\u5F53\u524D\u7269\u4E1A",
    noStyle: true
  })))))));
}