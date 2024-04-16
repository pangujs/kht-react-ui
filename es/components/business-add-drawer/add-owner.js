import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { residentProprietorAdd } from '../../http/api';
import InputAssetsDrawerTree from './input-assets-drawer-tree';
import { businessTypeOptions, ownershipTypeOptions } from '../../utils/dictionaries';
import { ProForm, DrawerForm, ProFormRadio } from '@ant-design/pro-components';
import { Form, message } from 'antd';
import KhtBusinessSelectHouseholdUsers from '../business-select-household-users';
import React, { useEffect, useState } from 'react';
export default function AddOwner(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    rootNode = props.rootNode,
    secondNode = props.secondNode,
    _props$handleType = props.handleType,
    handleType = _props$handleType === void 0 ? 'add' : _props$handleType,
    houseInfo = props.houseInfo;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = useState('1'),
    _useState2 = _slicedToArray(_useState, 2),
    businessType = _useState2[0],
    setBusinessType = _useState2[1];
  var propertyType = Form.useWatch('propertyType', form);
  // 房间数据
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    houseData = _useState4[0],
    setHouseData = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    rowSelectItems = _useState6[0],
    setRowSelectItems = _useState6[1];
  var _useState7 = useState({
      businessType: businessType
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    householdUsersParams = _useState8[0],
    setHouseholdUsersParams = _useState8[1];
  var onChange = function onChange(val, option) {
    setRowSelectItems(option || []);
    form.setFieldsValue({
      ownerId: option && option.length ? val.id : ''
    });
  };
  // 房间选择
  var houseChange = function houseChange(selectNode) {
    var _selectNode$, _selectNode$2;
    setHouseData(selectNode);
    form.setFieldsValue({
      houseName: ((_selectNode$ = selectNode[0]) === null || _selectNode$ === void 0 ? void 0 : _selectNode$.fullName) || ((_selectNode$2 = selectNode[0]) === null || _selectNode$2 === void 0 ? void 0 : _selectNode$2.name) || ''
    });
  };
  var businessTypeChange = function businessTypeChange(value) {
    setBusinessType(value);
    setHouseholdUsersParams({
      businessType: value
    });
    // 个人 企业 切换
    setRowSelectItems([]);
  };
  var onFinish = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var _houseData$;
      var list, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(values);
            // 产权性质，多个选择框-单个选择框 数据结构不同 分开处理
            list = [];
            if (propertyType == 1) {
              list = rowSelectItems.map(function (item) {
                return item.map(function (item) {
                  return item.id;
                }).join(',');
              });
            } else {
              list = rowSelectItems.map(function (item) {
                return item.id;
              });
            }
            // 过滤空的数据
            list = list.filter(function (val) {
              return !!val;
            });
            _context.next = 6;
            return residentProprietorAdd({
              houseId: (_houseData$ = houseData[0]) === null || _houseData$ === void 0 ? void 0 : _houseData$.id,
              businessType: businessType,
              ownershipType: propertyType,
              residentIdList: list
            });
          case 6:
            data = _context.sent;
            if (data.success) {
              message.success('添加成功！');
              props.onOkCb && props.onOkCb();
            } else {
              message.error(data.message);
            }
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (open) {
      // 回填信息
      if ((secondNode === null || secondNode === void 0 ? void 0 : secondNode.name) && secondNode.sourceTableType === 'house') {
        setHouseData([secondNode]);
        form.setFieldsValue({
          houseName: (secondNode === null || secondNode === void 0 ? void 0 : secondNode.fullName) || (secondNode === null || secondNode === void 0 ? void 0 : secondNode.name) || ''
        });
      } else if (houseInfo) {
        setHouseData([{
          id: houseInfo.id || houseInfo.houseId
        }]);
        form.setFieldsValue({
          houseName: houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.fullName
        });
      }
    } else {
      // 清空信息
      setHouseholdUsersParams({
        businessType: '1'
      });
      setRowSelectItems([]);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerForm, {
    width: 480,
    title: "".concat(handleType === 'add' ? '新增业主' : '编辑业主'),
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
    layout: "horizontal",
    labelCol: {
      span: 5
    },
    labelAlign: "left",
    onFinish: onFinish
  }, /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u623F\u95F4",
    key: "house",
    name: "houseName",
    rules: [{
      required: true,
      message: '请选择房间'
    }]
  }, houseInfo ? houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.fullName : /*#__PURE__*/React.createElement(InputAssetsDrawerTree, {
    loaderLevel: "house",
    title: "\u9009\u62E9\u623F\u95F4",
    onChange: houseChange,
    canSelect: "house",
    rootNode: rootNode,
    defalutSelectedData: houseData,
    multiple: false,
    searchPlaceholder: "\u641C\u7D22\u623F\u95F4"
  })), /*#__PURE__*/React.createElement(ProFormRadio.Group, {
    label: "\u4E1A\u4E3B\u7C7B\u578B",
    name: "businessType",
    fieldProps: {
      onChange: function onChange(_ref2) {
        var value = _ref2.target.value;
        return businessTypeChange(value);
      }
    },
    initialValue: '1',
    options: businessTypeOptions
  }), /*#__PURE__*/React.createElement(ProFormRadio.Group, {
    label: "\u4EA7\u6743\u6027\u8D28",
    name: "propertyType",
    initialValue: 2,
    options: ownershipTypeOptions
  }), /*#__PURE__*/React.createElement(ProForm.Item, {
    name: "ownerId",
    label: "\u4E1A\u4E3B",
    rules: [{
      required: true,
      message: '请选择业户'
    }]
  }, /*#__PURE__*/React.createElement(KhtBusinessSelectHouseholdUsers, {
    baseSelectProps: {
      defaultSelectItems: rowSelectItems,
      selectProps: {
        onChange: onChange,
        placeholder: '请选择'
      }
    },
    hasAddRow: propertyType == 1,
    householdType: "user",
    rowSelectItems: rowSelectItems,
    params: householdUsersParams,
    addBusinessType: businessType == '1' ? 'user' : 'enterprise'
  }))));
}