import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ProTable } from '@ant-design/pro-components';
import React, { useState } from 'react';
import KhtBusinessUserInfoPopover from '../index';
import { useTableCommon } from '../../../hooks';
import { getCustomerWxWorkList } from '../../../http/api';
import KhtTableOverflowTool from '../../table-render/overflow-tool';
export default function index() {
  var _useTableCommon = useTableCommon({
      isUIResponse: true,
      scrollYLimit: 21,
      rowKey: 'id'
    }),
    baseProps = _useTableCommon.baseProps,
    rowProps = _useTableCommon.rowProps,
    selectedRowKeys = _useTableCommon.selectedRowKeys,
    selectStatus = _useTableCommon.selectStatus,
    reloadCurrentPage = _useTableCommon.reloadCurrentPage,
    removeSelected = _useTableCommon.removeSelected,
    deleteFunc = _useTableCommon.deleteFunc,
    updateFunc = _useTableCommon.updateFunc,
    queryListFunc = _useTableCommon.queryListFunc;
  var _useState = useState({
      searchInfo: '',
      treeCodeList: [],
      employeeCodeList: [],
      tagIdList: [],
      type: 'wechat',
      isHasDepartmentEmployeeQuery: 1
    }),
    _useState2 = _slicedToArray(_useState, 2),
    tableParams = _useState2[0],
    setTableParams = _useState2[1];
  var columns = [{
    title: '客户',
    dataIndex: 'name',
    width: 120,
    ellipsis: true,
    render: function render(_, record) {
      var _record$telephoneList;
      // 过滤出 备注名信息和描述信息
      var remarkName = (record === null || record === void 0 ? void 0 : record.customerFollowInfoResDtoList) || [];
      var remark = [];
      if (remarkName.length) {
        for (var _index = 0; _index < remarkName.length; _index++) {
          var element = remarkName[_index];
          if (element.remark) remark.push(element);
        }
      }
      return /*#__PURE__*/React.createElement(KhtBusinessUserInfoPopover, {
        userInfo: {
          avatar: record.avatar,
          sex: record.sex,
          name: record.name,
          type: record.type
        },
        contentList: [{
          label: '手机',
          value: (_record$telephoneList = record.telephoneList[0]) === null || _record$telephoneList === void 0 ? void 0 : _record$telephoneList.telephone,
          type: 'phone'
        }, {
          label: '备注名',
          render: function render() {
            return /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(KhtTableOverflowTool, {
              arr: remarkName,
              serviceName: "remark",
              tips: "\u4E2A\u5907\u6CE8\u540D"
            }));
          }
        }, {
          label: '绑定住户',
          render: function render() {
            return /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(KhtTableOverflowTool, {
              arr: record === null || record === void 0 ? void 0 : record.residentHouseInfoReqDtoList,
              serviceName: "name",
              tips: "\u4E2A\u4F4F\u6237"
            }));
          }
        }, {
          label: '客户标签',
          render: function render() {
            return /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(KhtTableOverflowTool, {
              arr: record === null || record === void 0 ? void 0 : record.useTagInfoList,
              serviceName: "name",
              tips: "\u4E2A\u6807\u7B7E"
            }));
          }
        }],
        children: /*#__PURE__*/React.createElement("span", {
          style: {
            minWidth: 120,
            display: 'block'
          }
        }, record.name)
      });
    }
  }, {
    title: '添加时间',
    dataIndex: 'createDate',
    width: 120,
    ellipsis: true
  }];
  var getTableList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var params;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            params = _objectSpread({
              currentPage: values.current,
              pageSize: values.pageSize
            }, tableParams);
            return _context.abrupt("return", queryListFunc(getCustomerWxWorkList, params));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getTableList(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProTable, _objectSpread(_objectSpread({}, baseProps), {}, {
    columns: columns,
    request: getTableList,
    search: false,
    toolBarRender: false
  })));
}