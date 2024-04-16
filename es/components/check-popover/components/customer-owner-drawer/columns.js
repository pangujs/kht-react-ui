import React from 'react';
import { AccountPopover } from '../../../../index';
import { customerSourceMap } from '../../type';
var remarkColumns = [{
  title: '备注名',
  dataIndex: 'remark',
  ellipsis: true
}, {
  title: '备注人',
  dataIndex: 'employeeName',
  ellipsis: true
}, {
  title: '备注时间',
  dataIndex: 'addDate',
  key: 'addDate'
}];
var descriptionColumns = [{
  title: '描述',
  dataIndex: 'description',
  key: 'description'
}, {
  title: '描述人',
  dataIndex: 'employeeName',
  ellipsis: true
}, {
  title: '描述时间',
  dataIndex: 'addDate',
  key: 'addDate'
}];
var addPersonColumns = [{
  title: '添加人',
  dataIndex: 'employeeName',
  key: 'employeeName',
  render: function render(_, record) {
    return /*#__PURE__*/React.createElement(AccountPopover, {
      zIndex: 2000,
      getPopupContainer: function getPopupContainer() {
        return document.querySelector('#root');
      },
      name: record.employeeName,
      id: record.employeeId,
      type: 'employee',
      trigger: "hover",
      placement: "bottomRight"
    });
  }
}, {
  title: '添加时间',
  dataIndex: 'addDate',
  key: 'addDate',
  render: function render(value, records) {
    var _records$addDate, _records$addDate2;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_records$addDate = records.addDate) === null || _records$addDate === void 0 ? void 0 : _records$addDate.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_records$addDate2 = records.addDate) === null || _records$addDate2 === void 0 ? void 0 : _records$addDate2.slice(10, 16)));
  }
}, {
  title: '添加方式',
  dataIndex: 'addWay',
  key: 'addWay',
  render: function render(_, record) {
    return customerSourceMap[record.addWay] || '-';
  }
}];
export var tableColumns = {
  remark: remarkColumns,
  description: descriptionColumns,
  addPerson: addPersonColumns
};