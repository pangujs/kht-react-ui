import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { getHouseTenantInfoListUser, propertyManagementList, residentTenantAdd, residentTenantUpdate } from '../../http/api';
import InputAssetsDrawerTree from './input-assets-drawer-tree';
import { businessTypeOptions } from '../../utils/dictionaries';
import { ProForm, DrawerForm, ProFormDateRangePicker, ProFormDigit, ProFormRadio, ProFormSelect } from '@ant-design/pro-components';
import { Form, message, Select } from 'antd';
import KhtBusinessSelectHouseholdUsers from '../business-select-household-users';
import React, { useEffect, useState } from 'react';
import AddPropertyCompany from './add-property-company';
export default function AddTenant(props) {
  var _houseData$7;
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    rootNode = props.rootNode,
    secondNode = props.secondNode,
    _props$handleType = props.handleType,
    handleType = _props$handleType === void 0 ? 'add' : _props$handleType,
    ownerInfo = props.ownerInfo,
    houseInfo = props.houseInfo,
    editData = props.editData;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  // 项目分期数据
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    houseData = _useState2[0],
    setHouseData = _useState2[1];
  var isSharedRent = Form.useWatch('isSharedRent', form);
  var tenantType = Form.useWatch('tenantType', form);
  var lessorType = Form.useWatch('lessorType', form);
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    lessorSelectItems = _useState4[0],
    setLessorSelectItems = _useState4[1];
  var _useState5 = useState({
      houseId: '',
      type: 'proprietor',
      bindHouse: '1'
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    paramsData = _useState6[0],
    setParamsData = _useState6[1];
  var _useState7 = useState({
      businessType: '1'
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    householdUsersParams = _useState8[0],
    setHouseholdUsersParams = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    tenantSelectItems = _useState10[0],
    setTenantSelectItems = _useState10[1];
  // 物业公司列表
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    propertyList = _useState12[0],
    setPropertyList = _useState12[1];
  // 承租人列表
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    tenantryList = _useState14[0],
    setTenantryList = _useState14[1];
  // 出租人-物业公司id
  var _useState15 = useState(undefined),
    _useState16 = _slicedToArray(_useState15, 2),
    propertyId = _useState16[0],
    setPropertyId = _useState16[1];
  // 添加物业公司状态
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    openProperty = _useState18[0],
    setOpenProperty = _useState18[1];
  var onChange = function onChange(val, option) {
    setTenantSelectItems(option || []);
    form.setFieldsValue({
      tenantResidentId: option && option.length ? val === null || val === void 0 ? void 0 : val.id : ''
    });
  };
  // 房间选择
  var houseChange = function houseChange(selectNode) {
    var _selectNode$, _selectNode$2, _selectNode$3;
    setHouseData(selectNode);
    setParamsData(_objectSpread(_objectSpread({}, paramsData), {}, {
      houseId: (_selectNode$ = selectNode[0]) === null || _selectNode$ === void 0 ? void 0 : _selectNode$.id
    }));
    form.setFieldsValue({
      houseName: ((_selectNode$2 = selectNode[0]) === null || _selectNode$2 === void 0 ? void 0 : _selectNode$2.fullName) || ((_selectNode$3 = selectNode[0]) === null || _selectNode$3 === void 0 ? void 0 : _selectNode$3.name) || '',
      lessorId: ''
    });
    setLessorSelectItems([]);
  };
  // 出租人类型切换
  var lessorTypeChange = function lessorTypeChange(val) {
    setTenantSelectItems([]);
    form.setFieldsValue({
      lessorId: undefined
    });
  };
  // 出租人选择
  var lessorChange = function lessorChange(val, option) {
    setLessorSelectItems(option || []);
    form.setFieldsValue({
      lessorId: option && option.length ? val.id : ''
    });
  };
  // 出租人-物业公司选择
  var propertyChange = function propertyChange(val) {
    setPropertyId(val);
    form.setFieldsValue({
      lessorId: val
    });
  };
  // 租户类型切换
  var tenantTypeChange = function tenantTypeChange(value) {
    // 个人、企业
    setHouseholdUsersParams({
      businessType: value
    });
    form.setFieldsValue({
      tenantResidentId: ''
    });
    setTenantSelectItems([]);
  };
  var onFinish = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var _houseData$;
      var lessorId, lessorType, rent, leaseDate, list, actions, editParams, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(values);
            lessorId = values.lessorId, lessorType = values.lessorType, rent = values.rent, leaseDate = values.leaseDate; // 是否合租 1-合租 多个选择框，0-单租 一个选择框， 单个多个数据结构不同 分开处理
            list = isSharedRent == 0 ? tenantSelectItems.map(function (item) {
              return item.id;
            }) : tenantSelectItems.map(function (item) {
              return item.map(function (item) {
                return item.id;
              }).join(',');
            }); // 过滤空的数据
            list = list.filter(function (val) {
              return !!val;
            });
            actions = handleType === 'add' ? residentTenantAdd : residentTenantUpdate;
            editParams = {
              id: editData === null || editData === void 0 ? void 0 : editData.id,
              rent: values === null || values === void 0 ? void 0 : values.rent
            };
            if (handleType === 'edit' && (leaseDate === null || leaseDate === void 0 ? void 0 : leaseDate.length)) {
              editParams.leaseBeginDate = leaseDate[0] + ' 00:00:00';
              editParams.leaseEndDate = leaseDate[1] + ' 23:59:59';
            }
            _context.next = 9;
            return actions(handleType === 'add' ? {
              houseId: (_houseData$ = houseData[0]) === null || _houseData$ === void 0 ? void 0 : _houseData$.id,
              lessorId: lessorType == 3 ? undefined : lessorId,
              lessorType: lessorType == 3 ? undefined : lessorType,
              isSharedRent: isSharedRent,
              businessType: tenantType,
              residentTenantList: list && list.length && list.map(function (val) {
                return {
                  tenantResidentId: val,
                  rent: rent,
                  leaseBeginDate: (leaseDate === null || leaseDate === void 0 ? void 0 : leaseDate.length) ? leaseDate[0] + ' 00:00:00' : '',
                  leaseEndDate: (leaseDate === null || leaseDate === void 0 ? void 0 : leaseDate.length) ? leaseDate[1] + ' 23:59:59' : ''
                };
              })
            } : editParams);
          case 9:
            data = _context.sent;
            if (data.success) {
              message.success('操作成功！');
              props.onOkCb && props.onOkCb();
            } else {
              message.error(data.message);
            }
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  // 获取物业公司列表
  var getPropertyList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _houseData$2, _houseData$3;
      var data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if ((_houseData$2 = houseData[0]) === null || _houseData$2 === void 0 ? void 0 : _houseData$2.communityId) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            _context2.next = 4;
            return propertyManagementList({
              communityId: (_houseData$3 = houseData[0]) === null || _houseData$3 === void 0 ? void 0 : _houseData$3.communityId
            });
          case 4:
            data = _context2.sent;
            if (data.success) {
              setPropertyList(data.response);
            }
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getPropertyList() {
      return _ref2.apply(this, arguments);
    };
  }();
  // 获取承租人列表
  var getTenantryList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _houseData$4, _houseData$5;
      var data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if ((_houseData$4 = houseData[0]) === null || _houseData$4 === void 0 ? void 0 : _houseData$4.id) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.next = 4;
            return getHouseTenantInfoListUser({
              houseId: (_houseData$5 = houseData[0]) === null || _houseData$5 === void 0 ? void 0 : _houseData$5.id
            });
          case 4:
            data = _context3.sent;
            if (data.success) {
              setTenantryList(data.response);
            }
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getTenantryList() {
      return _ref3.apply(this, arguments);
    };
  }();
  // 添加物业公司事件
  var addProperty = function addProperty() {
    var _houseData$6;
    if (!((_houseData$6 = houseData[0]) === null || _houseData$6 === void 0 ? void 0 : _houseData$6.id)) {
      message.info('请先选择资产');
      return;
    }
    setOpenProperty(true);
  };
  useEffect(function () {
    if (open) {
      if (handleType === 'add') {
        // 回填信息
        if ((secondNode === null || secondNode === void 0 ? void 0 : secondNode.name) && secondNode.sourceTableType === 'house') {
          setHouseData([secondNode]);
          form.setFieldsValue({
            houseName: (secondNode === null || secondNode === void 0 ? void 0 : secondNode.fullName) || (secondNode === null || secondNode === void 0 ? void 0 : secondNode.name) || ''
          });
          setTimeout(function () {
            setParamsData({
              type: 'proprietor',
              houseId: secondNode.id,
              bindHouse: '1'
            });
          }, 500);
        }
        if (ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.id) {
          // 通过业主过来添加
          setHouseData([{
            id: ownerInfo.houseId,
            communityId: ownerInfo.communityId
          }]);
          form.setFieldsValue({
            houseName: ownerInfo.fullName || ownerInfo.name,
            lessorType: 0,
            lessorId: ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.proprietorResidentHouseId
          });
        } else if (houseInfo) {
          // 通过资产添加
          setHouseData([_objectSpread(_objectSpread({}, houseInfo), {}, {
            id: houseInfo.id || houseInfo.houseId
          })]);
          form.setFieldsValue({
            houseName: houseInfo === null || houseInfo === void 0 ? void 0 : houseInfo.fullName
          });
          setTimeout(function () {
            setParamsData(_objectSpread(_objectSpread({}, paramsData), {}, {
              houseId: houseInfo.id || houseInfo.houseId
            }));
          }, 500);
        }
      } else if (handleType === 'edit') {
        var _editData$leaseBeginD, _editData$leaseEndDat;
        form.setFieldsValue({
          houseName: editData.fullName,
          lessorType: (editData === null || editData === void 0 ? void 0 : editData.lessorType) || 3,
          lessorId: editData === null || editData === void 0 ? void 0 : editData.lessorId,
          isSharedRent: editData === null || editData === void 0 ? void 0 : editData.isSharedRent,
          tenantType: (editData === null || editData === void 0 ? void 0 : editData.businessType) ? (editData === null || editData === void 0 ? void 0 : editData.businessType) + '' : '1',
          tenantResidentId: editData === null || editData === void 0 ? void 0 : editData.residentId,
          leaseDate: (editData === null || editData === void 0 ? void 0 : editData.leaseBeginDate) ? [editData === null || editData === void 0 ? void 0 : (_editData$leaseBeginD = editData.leaseBeginDate) === null || _editData$leaseBeginD === void 0 ? void 0 : _editData$leaseBeginD.split(' ')[0], editData === null || editData === void 0 ? void 0 : (_editData$leaseEndDat = editData.leaseEndDate) === null || _editData$leaseEndDat === void 0 ? void 0 : _editData$leaseEndDat.split(' ')[0]] : [],
          rent: editData === null || editData === void 0 ? void 0 : editData.rent
        });
      }
    } else {
      // 清空信息
      setHouseholdUsersParams({
        businessType: '1'
      });
      setTenantSelectItems([]);
      setLessorSelectItems([]);
    }
  }, [open]);
  useEffect(function () {
    getTenantryList();
    getPropertyList();
  }, [houseData]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DrawerForm, {
    width: 480,
    title: "".concat(handleType === 'add' ? '新增租户' : '编辑租户'),
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
      span: 6
    },
    labelAlign: "left",
    onFinish: onFinish
  }, /*#__PURE__*/React.createElement(ProForm.Item, {
    label: "\u8D44\u4EA7",
    key: "house",
    name: "houseName",
    rules: [{
      required: true,
      message: '请选择'
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
  })), /*#__PURE__*/React.createElement(ProFormRadio.Group, {
    name: "lessorType",
    label: "\u51FA\u79DF\u4EBA\u7C7B\u578B",
    initialValue: 3,
    fieldProps: {
      onChange: function onChange(_ref4) {
        var value = _ref4.target.value;
        return lessorTypeChange(value);
      },
      disabled: !!ownerInfo || handleType === 'edit'
    },
    // rules={[{ required: true, message: '请选择' }]}
    options: [{
      value: 3,
      label: '无'
    }, {
      value: 0,
      label: '业主'
    }, {
      value: 1,
      label: '承租人'
    }, {
      value: 2,
      label: '物业公司'
    }]
  }), handleType === 'edit' || ownerInfo ? /*#__PURE__*/React.createElement(ProForm.Item, {
    name: "lessorId",
    label: "\u51FA\u79DF\u4EBA",
    rules: [{
      required: true,
      message: '请选择'
    }]
  }, /*#__PURE__*/React.createElement(React.Fragment, null, (editData === null || editData === void 0 ? void 0 : editData.lessorName) || (ownerInfo === null || ownerInfo === void 0 ? void 0 : ownerInfo.name))) : /*#__PURE__*/React.createElement(React.Fragment, null,
  // 业主
  lessorType == 0 && /*#__PURE__*/React.createElement(ProForm.Item, {
    name: "lessorId",
    label: "\u51FA\u79DF\u4EBA",
    rules: [{
      required: true,
      message: '请选择'
    }]
  }, /*#__PURE__*/React.createElement(KhtBusinessSelectHouseholdUsers, {
    baseSelectProps: {
      defaultSelectItems: lessorSelectItems,
      selectProps: {
        onChange: lessorChange,
        placeholder: '请选择'
      }
    },
    householdType: "house",
    params: paramsData,
    addBusinessType: "proprietor",
    addDrawerProps: {
      secondNode: houseData[0] || {}
    }
  })),
  // 承租人
  lessorType == 1 && /*#__PURE__*/React.createElement(ProFormSelect, {
    name: "lessorId",
    label: "\u51FA\u79DF\u4EBA",
    rules: [{
      required: true,
      message: '这是必填项'
    }],
    fieldProps: {
      fieldNames: {
        label: 'name',
        value: 'residentId'
      },
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      },
      placeholder: '请选择'
    },
    options: tenantryList
  }),
  // 物业公司
  lessorType == 2 && /*#__PURE__*/React.createElement(ProForm.Item, {
    name: "lessorId",
    label: "\u51FA\u79DF\u4EBA",
    rules: [{
      required: true,
      message: '请选择'
    }]
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Select, {
    style: {
      width: 260
    },
    onChange: propertyChange,
    fieldNames: {
      label: 'name',
      value: 'id'
    },
    options: propertyList,
    value: propertyId,
    placeholder: "\u8BF7\u9009\u62E9"
  }), /*#__PURE__*/React.createElement("a", {
    style: {
      marginLeft: 10
    },
    onClick: addProperty
  }, "\u65B0\u589E")))), /*#__PURE__*/React.createElement(ProFormRadio.Group, {
    label: "\u662F\u5426\u5408\u79DF",
    name: "isSharedRent",
    required: true,
    initialValue: 0,
    fieldProps: {
      disabled: handleType === 'edit'
    },
    options: [{
      label: '是',
      value: 1
    }, {
      label: '否',
      value: 0
    }]
  }), /*#__PURE__*/React.createElement(ProFormRadio.Group, {
    label: "\u79DF\u6237\u7C7B\u578B",
    name: "tenantType",
    required: true,
    fieldProps: {
      onChange: function onChange(_ref5) {
        var value = _ref5.target.value;
        return tenantTypeChange(value);
      },
      disabled: handleType === 'edit'
    },
    initialValue: '1',
    options: businessTypeOptions
  }), /*#__PURE__*/React.createElement(ProForm.Item, {
    name: "tenantResidentId",
    label: "\u79DF\u6237",
    rules: [{
      required: true,
      message: '请选择租户'
    }]
  }, handleType === 'edit' ? editData === null || editData === void 0 ? void 0 : editData.name : /*#__PURE__*/React.createElement(KhtBusinessSelectHouseholdUsers, {
    baseSelectProps: {
      defaultSelectItems: tenantSelectItems,
      selectProps: {
        onChange: onChange,
        placeholder: '请选择'
      }
    },
    householdType: "user",
    hasAddRow: isSharedRent === 1,
    rowSelectItems: tenantSelectItems,
    params: householdUsersParams,
    addBusinessType: tenantType == '1' ? 'user' : 'enterprise'
  })), /*#__PURE__*/React.createElement(ProFormDateRangePicker, {
    key: "leaseDate",
    name: "leaseDate",
    label: "\u79DF\u8D41\u65F6\u95F4",
    fieldProps: {
      getPopupContainer: function getPopupContainer() {
        return document.body;
      }
    }
  }), /*#__PURE__*/React.createElement(ProFormDigit, {
    key: "rent",
    name: "rent",
    label: "\u79DF\u91D1",
    placeholder: "\u8BF7\u8F93\u5165",
    fieldProps: {
      maxLength: 10,
      precision: 2,
      addonAfter: '元/月'
    }
  }), /*#__PURE__*/React.createElement(AddPropertyCompany, {
    handleType: "add",
    communityId: (_houseData$7 = houseData[0]) === null || _houseData$7 === void 0 ? void 0 : _houseData$7.communityId,
    open: openProperty,
    onOpenChange: setOpenProperty,
    onOkCb: function onOkCb() {
      getPropertyList();
      setOpenProperty(false);
    }
  })));
}