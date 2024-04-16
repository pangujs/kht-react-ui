import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
import DrawerTable from '../index';
export default function Demo() {
  var actionRef = useRef();
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    tableDataListState = _useState2[0],
    setTableDataState = _useState2[1]; //切换demo状态
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    tableDataList = _useState4[0],
    setTableData = _useState4[1]; //当前页数据
  var columns = [{
    title: '项目1',
    dataIndex: 'name',
    ellipsis: true
  }, {
    title: '项目1',
    dataIndex: 'name',
    ellipsis: true
  }, {
    title: '所属机构',
    dataIndex: 'organization',
    width: 160,
    ellipsis: true
  }];
  //选择组件的数据请求
  var requestInitTable = function requestInitTable(_ref) {
    var currentPage = _ref.current,
      pageSize = _ref.pageSize;
    return Promise.resolve({
      data: tableDataList,
      success: true
    });
  };
  var changeHandle = function changeHandle() {
    var _actionRef$current;
    setTableDataState(!tableDataListState);
    (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.reload();
  };
  //模拟数据
  var getList = function getList() {
    var list = [];
    for (var i = 0; i < 20; i += 1) {
      list.push({
        name: "".concat(i, "AppName\u9879\u76EE\u58EB\u5927\u592B\u58EB\u5927\u592B\u7531\u4E8E"),
        organization: "".concat(i, "\u5BA2\u6237\u901A\u79D1\u6280\u4F18\u5148\u516C\u53F8"),
        id: (Math.floor(Math.random() * 2000) + 'jjk' + i * 23 + 'llk').toString()
      });
    }
    return list;
  };
  //模拟表格数据
  useEffect(function () {
    setTableData(tableDataListState ? getList() : []);
  }, [tableDataListState]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginBottom: '20px'
    },
    onClick: changeHandle
  }, "\u5207\u6362\u7EC4\u4EF6\u6570\u636E\u72B6\u6001"), /*#__PURE__*/React.createElement(DrawerTable, {
    actionRef: actionRef,
    rowKey: "id",
    columns: columns,
    request: requestInitTable
  }));
}