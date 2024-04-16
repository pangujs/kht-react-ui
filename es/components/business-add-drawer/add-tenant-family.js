import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import InputAssetsDrawerTree from './input-assets-drawer-tree';
import { ProForm, DrawerForm, ProFormSelect } from '@ant-design/pro-components';
import { Form, message } from 'antd';
import { relationOption } from '../../utils/dictionaries';
import KhtBusinessSelectHouseholdUsers from '../business-select-household-users';
import React, { useEffect, useState } from 'react';
import { residentTenantFamilyAdd, residentTenantFamilyUpdate } from '../../http/api';
export default function AddTenantFamily(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    rootNode = props.rootNode,
    _props$currentRow = props.currentRow,
    currentRow = _props$currentRow === void 0 ? {} : _props$currentRow,
    ownerInfo = props.ownerInfo,
    houseInfo = props.houseInfo,
    secondNode = props.secondNode,
    _props$handleType = props.handleType,
    handleType = _props$handleType === void 0 ? 'add' : _props$handleType,
    editData = props.editData;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  // 项目分期数据
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    houseData = _useState2[0],
    setHouseData = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    ownerDefaultSelectItems = _useState4[0],
    setOwnerDefaultSelectItems = _useState4[1];
  // 所选家属数据
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    familyDefaultSelectItems = _useState6[0],
    setFamilyDefaultSelectItems = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    addUserOpen = _useState8[0],
    setAddUserOpen = _useState8[1];
  var _useState9 = useState({
      houseId: '',
      type: 'tenant',
      bindHouse: '1'
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    paramsData = _useState10[0],
    setParamsData = _useState10[1];
  var _useState11 = useState({
      businessType: '1'
    }),
    _useState12 = _slicedToArray(_useState11, 1),
    householdUsersParams = _useState12[0];
  var onChange = function onChange(val, option) {
    console.log(val, option);
    setOwnerDefaultSelectItems(option || []);
    form.setFieldsValue({
      tenantResidentHouseId: option && option.length ? val.id : ''
    });
  };
  var familyChange = function familyChange(val, option) {
    setFamilyDefaultSelectItems(option || []);
    form.setFieldsValue({
      tenantFamilyResidentId: option && option.length ? val.id : ''
    });
  };
  // 房间选择
  var houseChange = function houseChange(selectNode) {
    var _selectNode$, _selectNode$2, _selectNode$3;
    console.log(selectNode, 'selectNode');
    setHouseData(selectNode);
    setParamsData(_objectSpread(_objectSpread({}, paramsData), {}, {
      houseId: (_selectNode$ = selectNode[0]) === null || _selectNode$ === void 0 ? void 0 : _selectNode$.id
    }));
    form.setFieldsValue({
      houseName: ((_selectNode$2 = selectNode[0]) === null || _selectNode$2 === void 0 ? void 0 : _selectNode$2.fullName) || ((_selectNode$3 = selectNode[0]) === null || _selectNode$3 === void 0 ? void 0 : _selectNode$3.name) || '',
      tenantResidentHouseId: ''
    });
    setOwnerDefaultSelectItems([]);
  };
  var onFinish = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var params, editParams, actions, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(values);
            params = _objectSpread(_objectSpread({}, paramsData), values);
            delete params.houseName;
            editParams = {
              id: editData === null || editData === void 0 ? void 0 : editData.id,
              relation: values.relation
            };
            actions = handleType === 'add' ? residentTenantFamilyAdd : residentTenantFamilyUpdate;
            _context.next = 7;
            return actions(handleType === 'add' ? params : editParams);
          case 7:
            data = _context.sent;
            if (data.success) {
              message.success('操作成功！');
              props.onOkCb && props.onOkCb();
            } else {
              message.error(data.message);
            }
          case 9:
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
      if (handleType === 'add') {
        if (ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.tenantResidentHouseId) {
          form.setFieldsValue({
            tenantResidentHouseId: ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.tenantResidentHouseId
          });
        } else if (houseInfo) {
          // 通过资产添加
          setHouseData([{
            name: (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.fullName) || (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.name),
            id: (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.houseId) || (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.id),
            key: (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.houseId) || (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.id),
            communityId: houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.communityId,
            sourceTableType: 'house'
          }]);
          form.setFieldsValue({
            houseName: (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.fullName) || ''
          });
          setTimeout(function () {
            setParamsData({
              houseId: (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.houseId) || (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.id),
              type: 'tenant',
              bindHouse: '1'
            });
          }, 500);
        } else if ((secondNode === null || secondNode === void 0 ? void 0 : secondNode.name) && secondNode.sourceTableType === 'house') {
          setHouseData([secondNode]);
          form.setFieldsValue({
            houseName: (secondNode === null || secondNode === void 0 ? void 0 : secondNode.fullName) || (secondNode === null || secondNode === void 0 ? void 0 : secondNode.name) || ''
          });
          setTimeout(function () {
            setParamsData(_objectSpread(_objectSpread({}, paramsData), {}, {
              houseId: secondNode.id
            }));
          }, 500);
        }
      } else if (handleType === 'edit') {
        form.setFieldsValue({
          houseName: editData.fullName,
          tenantResidentHouseId: editData === null || editData === void 0 ? void 0 : editData.tenantResidentId,
          tenantFamilyResidentId: editData === null || editData === void 0 ? void 0 : editData.residentId,
          relation: editData === null || editData === void 0 ? void 0 : editData.relation
        });
      }
    } else {
      // 清空信息
      setFamilyDefaultSelectItems([]);
      setOwnerDefaultSelectItems([]);
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerForm, {
    width: 480,
    title: "".concat(currentRow.id ? '编辑租户家属' : '新增租户家属'),
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
    label: "\u7ED1\u5B9A\u623F\u95F4",
    key: "house",
    name: "houseName",
    rules: [{
      required: true,
      message: '请选择房间'
    }]
  }, handleType === 'edit' || ownerInfo || houseInfo ? (editData === null || editData === void 0 ? void 0 : editData.fullName) || (ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.fullName) || (houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.fullName) : /*#__PURE__*/React.createElement(InputAssetsDrawerTree, {
    loaderLevel: "house",
    title: "\u9009\u62E9\u623F\u95F4",
    onChange: houseChange,
    canSelect: "house",
    rootNode: rootNode,
    defalutSelectedData: houseData,
    multiple: false,
    searchPlaceholder: "\u641C\u7D22\u623F\u95F4"
  })), /*#__PURE__*/React.createElement(ProForm.Item, {
    name: "tenantResidentHouseId",
    label: "\u6240\u5C5E\u79DF\u6237",
    rules: [{
      required: true,
      message: '请选择租户'
    }]
  }, handleType === 'edit' || ownerInfo ? (editData === null || editData === void 0 ? void 0 : editData.tenantResidentName) || (ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.name) : /*#__PURE__*/React.createElement(KhtBusinessSelectHouseholdUsers, {
    baseSelectProps: {
      defaultSelectItems: ownerDefaultSelectItems,
      selectProps: {
        onChange: onChange,
        placeholder: '请选择'
      }
    },
    params: paramsData,
    addBusinessType: "tenant",
    addDrawerProps: {
      secondNode: houseData[0] || {}
    }
  })), /*#__PURE__*/React.createElement(ProForm.Item, {
    name: "tenantFamilyResidentId",
    label: "\u79DF\u6237\u5BB6\u5C5E",
    rules: [{
      required: true,
      message: '请选择租户家属'
    }]
  }, handleType === 'edit' ? editData === null || editData === void 0 ? void 0 : editData.name : /*#__PURE__*/React.createElement(KhtBusinessSelectHouseholdUsers, {
    baseSelectProps: {
      defaultSelectItems: familyDefaultSelectItems,
      selectProps: {
        onChange: familyChange,
        placeholder: '请选择'
      }
    },
    householdType: "user",
    params: householdUsersParams
  })), /*#__PURE__*/React.createElement(ProFormSelect, {
    name: "relation",
    label: "\u4E0E\u79DF\u6237\u5173\u7CFB",
    fieldProps: {
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      }
    },
    placeholder: "\u8BF7\u9009\u62E9",
    request: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", relationOption);
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
  })));
}