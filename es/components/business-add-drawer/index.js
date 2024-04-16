import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["businessType", "communityId", "handleType"];
import React from 'react';
import "./index.css";
import AddUser from './add-user';
import AddFamily from './add-family';
import AddOwner from './add-owner';
import AddTenant from './add-tenant';
import AddTenantFamily from './add-tenant-family';
import AddEnterprise from './add-enterprise';
import AddPropertyCompany from './add-property-company';
// 各种业务详情组件
export default function BusinessAddDrawer(props) {
  var businessType = props.businessType,
    communityId = props.communityId,
    _props$handleType = props.handleType,
    handleType = _props$handleType === void 0 ? 'add' : _props$handleType,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, businessType === 'proprietor' && /*#__PURE__*/React.createElement(AddOwner, _objectSpread({
    handleType: "add"
  }, other)), businessType === 'family' && /*#__PURE__*/React.createElement(AddFamily, _objectSpread({
    handleType: handleType
  }, other)), businessType === 'tenant' && /*#__PURE__*/React.createElement(AddTenant, _objectSpread({
    handleType: handleType
  }, other)), businessType === 'tenant_family' && /*#__PURE__*/React.createElement(AddTenantFamily, _objectSpread({
    handleType: handleType
  }, other)), businessType === 'user' && /*#__PURE__*/React.createElement(AddUser, _objectSpread({}, other)), businessType === 'enterprise' && /*#__PURE__*/React.createElement(AddEnterprise, _objectSpread({}, other)), businessType === 'property_company' && /*#__PURE__*/React.createElement(AddPropertyCompany, _objectSpread({
    communityId: communityId,
    handleType: "add"
  }, other)));
}
export var businessTypeTextMap = {
  proprietor: '业主',
  family: '家属',
  tenant: '租户',
  tenant_family: '租户家属',
  user: '企业用户'
};
export var relationTextMap = {
  spouse: '配偶',
  children: '子女',
  parent: '父母',
  brotherSister: '兄弟姐妹',
  relative: '亲戚',
  grandparent: '祖父母',
  other: '其他'
};
export var valueEnumLessorType = {
  0: {
    key: '0',
    text: '业主'
  },
  1: {
    key: '1',
    text: '承租人'
  },
  2: {
    key: '2',
    text: '物业公司'
  }
};
export var valueEnumBusinessType = {
  1: {
    key: '1',
    text: '个人'
  },
  2: {
    key: '2',
    text: '企业'
  }
};
export var valueEnumOwnershipType = {
  1: {
    key: '1',
    text: '共有'
  },
  2: {
    key: '2',
    text: '私有'
  }
};
export var valueEnumCurrent = {
  0: {
    key: '0',
    text: '否'
  },
  1: {
    key: '1',
    text: '是'
  }
};
export var HouseListOption = [{
  value: 'residence',
  label: '普通住宅'
}, {
  value: 'shop',
  label: '住宅底商'
}, {
  value: 'apartment',
  label: '公寓'
}, {
  value: 'villa',
  label: '别墅'
}, {
  value: 'foreignStyle',
  label: '洋房'
}, {
  value: 'officeBuilding',
  label: '写字楼'
}, {
  value: 'businessStreet',
  label: '商业街'
}, {
  value: 'other',
  label: '其它'
}];