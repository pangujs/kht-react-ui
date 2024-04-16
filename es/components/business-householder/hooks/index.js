import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState } from 'react';
export default function useBusinessHouseholderState() {
  var Project = {
    name: 'communityName',
    width: 108,
    placeholder: '全部项目',
    allowClear: false,
    open: false,
    disabled: false
  };
  var SourceTableName = {
    name: 'sourceTableName',
    width: 108,
    placeholder: '全部资产',
    open: false
  };
  var Types = {
    name: 'type',
    width: 108,
    placeholder: '全部身份',
    options: [{
      label: '全部身份',
      value: ''
    }, {
      label: '业主',
      value: 'proprietor'
    }, {
      label: '家属',
      value: 'family'
    }, {
      label: '住户',
      value: 'tenant'
    }, {
      label: '住户家属',
      value: 'tenantFamily'
    }]
  };
  var BusinessTypes = {
    name: 'businessType',
    width: 108,
    placeholder: '业务类型',
    options: [{
      label: '个人',
      value: 1
    }, {
      label: '企业',
      value: 2
    }]
  };
  var BindCustomerType = {
    name: 'bindCustomerType',
    width: 108,
    placeholder: '绑定客户类型',
    options: [{
      label: '已绑定微信客户',
      value: '1'
    }, {
      label: '已绑定企微客户',
      value: '2'
    }, {
      label: '未绑定微信客户',
      value: '3'
    }, {
      label: '未绑定企微客户',
      value: '4'
    }]
  };
  var typeOptions = {
    tenant: {
      title: '住户',
      width: 800,
      searchInputWidth: 158
    },
    proprietor: {
      title: '业主',
      width: 720,
      searchInputWidth: 158
    },
    family: {
      title: '家属',
      width: 600,
      searchInputWidth: 158
    },
    tenantFamily: {
      title: '租户家属',
      width: 600,
      searchInputWidth: 158
    }
  };
  var componentTypeData = {
    single: {
      //单项目
      tenant: [SourceTableName, Types, BusinessTypes, BindCustomerType],
      proprietor: [SourceTableName, BusinessTypes, BindCustomerType],
      family: [SourceTableName, BindCustomerType],
      tenantFamily: [SourceTableName, BindCustomerType] //租户家属
    },

    multiple: {
      //多项目
      tenant: [Project, SourceTableName, Types, BusinessTypes, BindCustomerType],
      proprietor: [Project, SourceTableName, BusinessTypes, BindCustomerType],
      family: [Project, SourceTableName, BindCustomerType],
      tenantFamily: [Project, SourceTableName, BindCustomerType]
    }
  };
  //住户
  var tenantColumns = [{
    title: '绑定资产',
    dataIndex: 'houseFullName',
    ellipsis: true
  }, {
    title: '身份',
    dataIndex: 'type',
    ellipsis: true
  }];
  //业主
  var proprietorColumns = [{
    title: '绑定房间',
    dataIndex: 'houseFullName',
    ellipsis: true
  }];
  //家属
  var familyColumns = [{
    title: '绑定房间',
    dataIndex: 'houseFullName',
    ellipsis: true
  }, {
    title: '所属业主',
    dataIndex: 'type',
    ellipsis: true
  }];
  //租户家属
  var tenantFamilyColumns = [{
    title: '绑定房间',
    dataIndex: 'houseFullName',
    ellipsis: true
  }, {
    title: '所属租户',
    dataIndex: 'type',
    ellipsis: true
  }];
  var tableColumns = {
    tenant: tenantColumns,
    proprietor: proprietorColumns,
    family: familyColumns,
    tenantFamily: tenantFamilyColumns
  };
  /**第一层抽屉 */
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    initCurrentTableIds = _useState2[0],
    setInitCurrentTableIds = _useState2[1]; //第一层抽屉当前页选中ids
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    initTableDataTotal = _useState4[0],
    setInitTableDataTotal = _useState4[1]; //第一层抽屉表格总数
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    allAssetDefaultCheckedItems = _useState6[0],
    setAllAssetDefaultCheckedItems = _useState6[1]; //第一层抽屉搜索选择资产默认选中
  /**第二层抽屉 */
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectCurrentTableIds = _useState8[0],
    setSelectCurrentTableIds = _useState8[1]; //第二层抽屉当前页选中ids
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    selectTableTotal = _useState10[0],
    setSelectTableTotal = _useState10[1]; //第二层抽屉总条数
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedRowKeys = _useState12[0],
    setSelectedRowKeys = _useState12[1]; //第一层抽屉已选ids
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    sourceTableList = _useState14[0],
    setSourceTableList = _useState14[1]; //第一层抽屉搜索非直接提交的字段值资产
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    selectIdList = _useState16[0],
    setSelectIdList = _useState16[1]; //第二层抽屉已选ids
  var _useState17 = useState([]),
    _useState18 = _slicedToArray(_useState17, 2),
    selectTableRowKeys = _useState18[0],
    setSelectTableRowKeys = _useState18[1]; //第二层抽屉选择的ids
  var _useState19 = useState([]),
    _useState20 = _slicedToArray(_useState19, 2),
    selectSourceTableList = _useState20[0],
    setSelectSourceTableList = _useState20[1]; //第二层抽屉搜索非直接提交的字段值资产
  return {
    typeOptions: typeOptions,
    initCurrentTableIds: initCurrentTableIds,
    setInitCurrentTableIds: setInitCurrentTableIds,
    initTableDataTotal: initTableDataTotal,
    setInitTableDataTotal: setInitTableDataTotal,
    sourceTableList: sourceTableList,
    selectedRowKeys: selectedRowKeys,
    setSelectedRowKeys: setSelectedRowKeys,
    selectTableRowKeys: selectTableRowKeys,
    selectSourceTableList: selectSourceTableList,
    selectCurrentTableIds: selectCurrentTableIds,
    setSelectCurrentTableIds: setSelectCurrentTableIds,
    selectTableTotal: selectTableTotal,
    setSelectTableTotal: setSelectTableTotal,
    setSelectTableRowKeys: setSelectTableRowKeys,
    selectIdList: selectIdList,
    setSelectIdList: setSelectIdList,
    allAssetDefaultCheckedItems: allAssetDefaultCheckedItems,
    tableColumns: tableColumns,
    componentTypeData: componentTypeData
  };
}