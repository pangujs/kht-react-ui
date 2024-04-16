import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { KhtDrawerSearchProTable, AccountPopover } from '../../index';
import { getMemberCompList, getAllMemberCompList } from './api';
import Search from './components/search';
import SelectedSearch from './components/selected-search';
// import MultipleText from '../dept-multiple-text';
import "./index.css";
//多选部门+搜索name的成员接口
//根据选中id查已选成员的接口
export default function SelectMember(props) {
  var _props$selectedTitle = props.selectedTitle,
    selectedTitle = _props$selectedTitle === void 0 ? '已选成员' : _props$selectedTitle,
    _props$title = props.title,
    title = _props$title === void 0 ? '选择成员' : _props$title,
    open = props.open,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'radio' : _props$selectType,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    _props$useSystem = props.useSystem,
    useSystem = _props$useSystem === void 0 ? 'customer' : _props$useSystem,
    _props$defaultRowKeys = props.defaultRowKeys,
    defaultRowKeys = _props$defaultRowKeys === void 0 ? [] : _props$defaultRowKeys,
    companyCode = props.companyCode,
    _props$isDelete = props.isDelete,
    isDelete = _props$isDelete === void 0 ? false : _props$isDelete,
    onClose = props.onClose,
    _onSubmit = props.onSubmit;
  var tableLayoutContainerRef = useRef();
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    searchData = _useState2[0],
    setSearchData = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedSearchData = _useState4[0],
    setSelectedSearchData = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    total = _useState6[0],
    setTotal = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTotal = _useState8[0],
    setSelectedTotal = _useState8[1];
  //成员列表
  var _requestTable = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, res, _ref2, dataList, totalCount, _tableLayoutContainer, _tableLayoutContainer2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            console.log('%c Line:44 🍞 requestData', 'color:#f5ce50', searchData);
            if (!(useSystem === 'customer')) {
              _context.next = 8;
              break;
            }
            _context.next = 5;
            return getMemberCompList({
              currentPage: currentPage,
              pageSize: pageSize
            }, _objectSpread(_objectSpread({}, searchData), {}, {
              isDelete: isDelete ? 1 : 0
            }));
          case 5:
            _context.t0 = _context.sent;
            _context.next = 11;
            break;
          case 8:
            _context.next = 10;
            return getMemberCompList({
              currentPage: currentPage,
              pageSize: pageSize
            }, _objectSpread(_objectSpread({}, searchData), {}, {
              isDelete: isDelete ? 1 : 0
            }));
          case 10:
            _context.t0 = _context.sent;
          case 11:
            res = _context.t0;
            _ref2 = res || {}, dataList = _ref2.dataList, totalCount = _ref2.totalCount;
            console.log('%c Line:45 🍉 res', 'color:#3f7cff', res);
            setTotal(totalCount || 0);
            if (defaultRowKeys.length == totalCount) {
              ((_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setCheckAll) && ((_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setCheckAll(true));
            }
            return _context.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTable(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  //第二层表格组件已选组件的请求(按idList条件去查询)
  var _requestSelectedTable = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
      var _tableLayoutContainer3;
      var currentPage, pageSize, employeeIdList, res, _ref5, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = _ref3.current, pageSize = _ref3.pageSize;
            console.log(selectedSearchData, '获取第二层搜索条件数据');
            employeeIdList = (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.initSelectedRowKeys;
            if (!(useSystem === 'customer')) {
              _context2.next = 9;
              break;
            }
            _context2.next = 6;
            return getMemberCompList({
              currentPage: currentPage,
              pageSize: pageSize
            }, _objectSpread(_objectSpread({}, selectedSearchData), {}, {
              employeeIdList: employeeIdList,
              isDelete: isDelete ? 1 : 0
            }));
          case 6:
            _context2.t0 = _context2.sent;
            _context2.next = 12;
            break;
          case 9:
            _context2.next = 11;
            return getMemberCompList({
              currentPage: currentPage,
              pageSize: pageSize
            }, _objectSpread(_objectSpread({}, selectedSearchData), {}, {
              employeeIdList: employeeIdList,
              isDelete: isDelete ? 1 : 0
            }));
          case 11:
            _context2.t0 = _context2.sent;
          case 12:
            res = _context2.t0;
            _ref5 = res || {}, dataList = _ref5.dataList, totalCount = _ref5.totalCount;
            console.log('%c Line:45 🍉 res', 'color:#3f7cff', res);
            setSelectedTotal(totalCount || 0);
            return _context2.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function requestSelectedTable(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  //全选 接口通过isList查询返回全部的已经选的数据列表
  var onAllSelectedChange = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(checked) {
      var _tableLayoutContainer4, response, _tableLayoutContainer5;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            console.log('%c Line:135 🍓 allSelectedChange=======checked', 'color:#ffdd4d', checked);
            if (!checked) {
              _context3.next = 8;
              break;
            }
            _context3.next = 4;
            return getAllMemberCompList(_objectSpread(_objectSpread({}, searchData), {}, {
              isDelete: isDelete ? 1 : 0
            }));
          case 4:
            response = _context3.sent;
            //全选获取所有id的接口
            (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.setInitSelectedRowKeys((response || []).map(function (c) {
              return c.id;
            }) || []);
            _context3.next = 9;
            break;
          case 8:
            (_tableLayoutContainer5 = tableLayoutContainerRef.current) === null || _tableLayoutContainer5 === void 0 ? void 0 : _tableLayoutContainer5.setInitSelectedRowKeys([]);
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onAllSelectedChange(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();
  var onSearch = function onSearch(data) {
    var _tableLayoutContainer6, _tableLayoutContainer7;
    if (data.departmentCodeList) {
      setSearchData(_objectSpread(_objectSpread({}, data), {}, {
        departmentCodeList: JSON.parse(data.departmentCodeList)
      }));
    } else {
      setSearchData(data);
    }
    // 条件变了分页都需要重置
    (_tableLayoutContainer6 = tableLayoutContainerRef.current) === null || _tableLayoutContainer6 === void 0 ? void 0 : _tableLayoutContainer6.setInitTableCurrentPage(1); // 重置分页
    (_tableLayoutContainer7 = tableLayoutContainerRef.current) === null || _tableLayoutContainer7 === void 0 ? void 0 : _tableLayoutContainer7.initTableReload();
  };
  var onSelectedSearch = function onSelectedSearch(data) {
    var _tableLayoutContainer8, _tableLayoutContainer9;
    if (data.departmentCodeList) {
      setSelectedSearchData(_objectSpread(_objectSpread({}, data), {}, {
        departmentCodeList: JSON.parse(data.departmentCodeList)
      }));
    } else {
      setSelectedSearchData(data);
    }
    //条件变了分页都需要重置
    (_tableLayoutContainer8 = tableLayoutContainerRef.current) === null || _tableLayoutContainer8 === void 0 ? void 0 : _tableLayoutContainer8.setSelectedTableCurrentPage(1); //重置分页
    (_tableLayoutContainer9 = tableLayoutContainerRef.current) === null || _tableLayoutContainer9 === void 0 ? void 0 : _tableLayoutContainer9.selectedTableReload();
  };
  //移除的回调
  var onRemoveSelected = function onRemoveSelected(type, data) {
    //一般情况下都用不上，备用日后交互需要
    console.log('%c Line:128 🍫 onRemoveSelected=======type', 'color:#3f7cff', type, data);
  };
  var onCloseSelectTable = function onCloseSelectTable() {
    var _tableLayoutContainer10;
    //关闭已选组件制空
    (_tableLayoutContainer10 = tableLayoutContainerRef.current) === null || _tableLayoutContainer10 === void 0 ? void 0 : _tableLayoutContainer10.setSelectTableFieldsValue({});
  };
  var columns = [{
    title: '姓名',
    dataIndex: 'name',
    // ellipsis: true,
    render: function render(value, records) {
      return /*#__PURE__*/React.createElement(AccountPopover, {
        name: value,
        id: records.id,
        type: "employee",
        trigger: "hover"
      });
    }
  }
  // {
  //   title: '所属部门',
  //   dataIndex: 'organizationName',
  //   ellipsis: true,
  //   render: (value: any, record: any) => {
  //     return (
  //       <MultipleText value={record?.employeeDeptInfoList || []} serviceName="name" unit="部门" />
  //     );
  //   },
  // },
  ];

  useEffect(function () {
    if (!open) {
      var _tableLayoutContainer11;
      (_tableLayoutContainer11 = tableLayoutContainerRef.current) === null || _tableLayoutContainer11 === void 0 ? void 0 : _tableLayoutContainer11.setInitTableFieldsValue({
        searchInfo: '',
        departmentCodeList: null
      });
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    title: title,
    open: open,
    onClose: onClose,
    width: 560,
    rowKey: rowKey,
    manualRequest: false,
    ref: tableLayoutContainerRef,
    selectType: selectType,
    selectedRowKeys: defaultRowKeys,
    selectDrawerTableTitle: selectedTitle,
    columns: columns,
    searchName: "searchInfo",
    searchForm: /*#__PURE__*/React.createElement(Search, {
      type: "init",
      rowKey: rowKey,
      open: open,
      useSystem: useSystem,
      companyCode: companyCode,
      tableLayoutContainerRef: tableLayoutContainerRef
    }),
    selectTableSearchForm: /*#__PURE__*/React.createElement(SelectedSearch, {
      type: "init",
      open: open,
      useSystem: useSystem,
      companyCode: companyCode,
      tableLayoutContainerRef: tableLayoutContainerRef
    }),
    total: total,
    selectedTotal: selectedTotal,
    requestTable: function () {
      var _requestTable2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _requestTable(data);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function requestTable(_x4) {
        return _requestTable2.apply(this, arguments);
      }
      return requestTable;
    }(),
    requestSelectedTable: function () {
      var _requestSelectedTable2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _requestSelectedTable(data);
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function requestSelectedTable(_x5) {
        return _requestSelectedTable2.apply(this, arguments);
      }
      return requestSelectedTable;
    }(),
    onAllSelectedChange: onAllSelectedChange,
    onSearch: onSearch,
    onSelectTableSearch: onSelectedSearch,
    onSubmit: function onSubmit(data) {
      var _tableLayoutContainer13, _tableLayoutContainer14;
      if (selectType === 'radio') {
        var _tableLayoutContainer12;
        _onSubmit && _onSubmit(data, (_tableLayoutContainer12 = tableLayoutContainerRef.current) === null || _tableLayoutContainer12 === void 0 ? void 0 : _tableLayoutContainer12.initTableSelectedRows);
      } else if (selectType === 'checkbox' && ((_tableLayoutContainer13 = tableLayoutContainerRef.current) === null || _tableLayoutContainer13 === void 0 ? void 0 : _tableLayoutContainer13.initSelectedRowKeys.length)) {
        _requestSelectedTable({
          current: 1,
          pageSize: 10000
        }).then(function (_ref7) {
          var data = _ref7.data;
          return data;
        }).then(function (selectedRows) {
          _onSubmit && _onSubmit(data, selectedRows);
        });
      } else if (selectType === 'checkbox' && !((_tableLayoutContainer14 = tableLayoutContainerRef.current) === null || _tableLayoutContainer14 === void 0 ? void 0 : _tableLayoutContainer14.initSelectedRowKeys.length)) {
        _onSubmit && _onSubmit(data, []);
      }
    },
    onCloseSelectTable: onCloseSelectTable,
    onRemoveSelected: onRemoveSelected,
    onSelectTextMouseEnter: function onSelectTextMouseEnter() {},
    radioSelectNameNodeRender: function radioSelectNameNodeRender(records) {
      return /*#__PURE__*/React.createElement(AccountPopover, {
        zIndex: 1000,
        getPopupContainer: function getPopupContainer() {
          return document.getElementById('root') || document.body;
        },
        name: records.name,
        id: records.id,
        placement: "top",
        type: "employee",
        trigger: "hover"
      });
    }
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};