import { rechargeStatus } from './constants';
export var columnsData = function columnsData() {
  return [{
    title: '充值数量',
    dataIndex: 'openCount',
    ellipsis: true,
    hideInSearch: true
  }, {
    title: '单位',
    dataIndex: 'unit',
    ellipsis: true,
    hideInSearch: true,
    onCell: function onCell(record) {
      return {
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      };
    }
  }, {
    title: '充值人',
    dataIndex: 'createAccountName',
    ellipsis: true,
    hideInSearch: true
  }, {
    title: '充值时间',
    dataIndex: 'createDate',
    ellipsis: true,
    hideInSearch: true,
    sorter: true
  }, {
    title: '启用状态',
    dataIndex: 'status',
    hideInSearch: true,
    valueType: 'select',
    fieldProps: {
      placeholder: '全部',
      options: rechargeStatus
    }
  }];
};