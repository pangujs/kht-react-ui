import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Button, message, Tooltip } from 'antd';
import React, { useRef, useMemo, useState } from 'react';
import { KhtDrawerSearchProTable } from '../../../index';
import { columnsData } from './columns';
import Search, { TitleGround } from './components/search';
export default function Demo() {
  var tableLayoutContainerRef = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    total = _useState4[0],
    setTotal = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedTotal = _useState6[0],
    setSelectedTotal = _useState6[1]; //已选组件总条数
  var _useState7 = useState('readOnly'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectType = _useState8[0],
    setSelectType = _useState8[1]; //组件类型
  var _useState9 = useState({}),
    _useState10 = _slicedToArray(_useState9, 2),
    searchData = _useState10[0],
    setSearchData = _useState10[1]; //第一层抽屉的表单筛选条件
  var _useState11 = useState({}),
    _useState12 = _slicedToArray(_useState11, 2),
    selectTableSearchData = _useState12[0],
    setSelectTableSearchData = _useState12[1]; //第二层已选组件的筛选条件
  var _useState13 = useState({}),
    _useState14 = _slicedToArray(_useState13, 2),
    currentComponentProps = _useState14[0],
    setCurrentComponentProps = _useState14[1]; //当前组件的pros
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedRowKeys = _useState16[0],
    setSelectedRowKeys = _useState16[1]; //当前组件是单选时才是object[],其他都是string[]
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    tabState = _useState18[0],
    setTabState = _useState18[1]; //是否自定义tabs
  var _useState19 = useState([]),
    _useState20 = _slicedToArray(_useState19, 2),
    selectTableColumns = _useState20[0],
    setSelectTableColumns = _useState20[1]; //已选表格列表字段
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    useTableState = _useState22[0],
    setUseTableState = _useState22[1]; //已选表格列表字段
  var tableParamsSync = useRef({
    orderByDtoList: [{
      asc: false,
      column: 'id'
    }]
  });
  //表格数据
  var columns = useMemo(function () {
    return columnsData();
  }, []);
  //模拟表格数据
  var rechargeRecord = function rechargeRecord(data) {
    var dataList = [];
    for (var index = 0; index < 100; index++) {
      var obj = {
        id: '0' + index,
        openCount: '0',
        unit: '群',
        createAccountName: '嘻嘻嘻' + index
      };
      dataList.push(obj);
    }
    return {
      totalCount: 3,
      dataList: dataList
    };
  };
  //第一层表格组件的请求
  var requestTable = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var currentPage, pageSize, params, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            currentPage = _ref.current, pageSize = _ref.pageSize;
            params = _objectSpread(_objectSpread({}, searchData), {}, {
              currentPage: currentPage,
              pageSize: pageSize
            });
            console.log('%c Line:46 🍷 params', 'color:#fca650', _objectSpread(_objectSpread({}, params), tableParamsSync.current));
            _context.next = 5;
            return rechargeRecord(_objectSpread(_objectSpread({}, params), tableParamsSync.current));
          case 5:
            data = _context.sent;
            setTotal((data === null || data === void 0 ? void 0 : data.totalCount) || 0);
            return _context.abrupt("return", {
              data: (data === null || data === void 0 ? void 0 : data.dataList) || [],
              total: (data === null || data === void 0 ? void 0 : data.totalCount) || 0,
              success: true
            });
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTable(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  //第二层表格组件已选组件的请求(按idList条件去查询)
  var requestSelectedTable = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
      var currentPage, pageSize, params, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = _ref3.current, pageSize = _ref3.pageSize;
            params = _objectSpread(_objectSpread({}, selectTableSearchData), {}, {
              currentPage: currentPage,
              pageSize: pageSize,
              idList: []
            });
            console.log('%c Line:46 🍷 params', 'color:#fca650', params);
            _context2.next = 5;
            return rechargeRecord(_objectSpread({}, params));
          case 5:
            data = _context2.sent;
            setSelectedTotal((data === null || data === void 0 ? void 0 : data.totalCount) || 0);
            return _context2.abrupt("return", {
              data: (data === null || data === void 0 ? void 0 : data.dataList) || [],
              total: (data === null || data === void 0 ? void 0 : data.totalCount) || 0,
              success: true
            });
          case 8:
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
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(checked) {
      var _tableLayoutContainer, params, response, _tableLayoutContainer2;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            console.log('%c Line:135 🍓 allSelectedChange=======checked', 'color:#ffdd4d', checked);
            if (!checked) {
              _context3.next = 9;
              break;
            }
            params = {};
            _context3.next = 5;
            return rechargeRecord(_objectSpread({
              idList: []
            }, params));
          case 5:
            response = _context3.sent;
            (_tableLayoutContainer = tableLayoutContainerRef.current) === null || _tableLayoutContainer === void 0 ? void 0 : _tableLayoutContainer.setInitSelectedRowKeys(((response === null || response === void 0 ? void 0 : response.dataList) || []).filter(function (record) {
              return !['01', '05'].includes(record.id);
            }).map(function (c) {
              return c.id;
            }) || []);
            _context3.next = 10;
            break;
          case 9:
            (_tableLayoutContainer2 = tableLayoutContainerRef.current) === null || _tableLayoutContainer2 === void 0 ? void 0 : _tableLayoutContainer2.setInitSelectedRowKeys([]);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onAllSelectedChange(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  var _onSubmit = function onSubmit(data) {
    console.log('%c Line:40 🥃 data', 'color:#6ec1c2', data);
  };
  //重置demo数据
  var reset = function reset() {
    setTotal(0);
    setSelectedTotal(0);
    setSearchData({});
    setSelectTableSearchData({});
    setCurrentComponentProps({});
    setSelectedRowKeys([]);
    setOpen(false);
    setTabState(false);
    setUseTableState(false);
    setSelectTableColumns([]);
  };
  var tableTitleNode = /*#__PURE__*/React.createElement("span", null, "\u670D\u52A1\uFF1A", 'dddd', "\uFF0C \u670D\u52A1\u7C7B\u578B\uFF1A", 'ooo');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setSelectType('readOnly');
      setOpen(true);
    }
  }, "\u67E5\u770B\u7EC4\u4EF6"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setSelectType('readOnly');
      setCurrentComponentProps({
        searchForm: null
      });
      setOpen(true);
    }
  }, "\u67E5\u770B\u7EC4\u4EF6,\u6CA1\u6709\u7B5B\u9009\u6761\u4EF6"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setSelectType('readOnly');
      setCurrentComponentProps({
        titleGround: null,
        searchForm: null
      });
      setOpen(true);
    }
  }, "\u67E5\u770B\u7EC4\u4EF6,\u6CA1\u6709\u6807\u9898,\u6CA1\u6709\u7B5B\u9009\u6761\u4EF6")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setSelectType('checkbox');
      setCurrentComponentProps({
        selectDrawerTableTitle: '已选',
        selectTableTitleGround: tableTitleNode,
        selectTableSearchForm: /*#__PURE__*/React.createElement(Search, {
          tableLayoutContainerRef: tableLayoutContainerRef,
          type: "select"
        }),
        selectedTotal: selectedTotal,
        requestSelectedTable: requestSelectedTable,
        onSubmit: function onSubmit(data) {
          _onSubmit(data);
          console.log('%c Line:178 🥪 onSubmit=======data', 'color:#33a5ff', data);
        },
        onAllSelectedChange: onAllSelectedChange,
        onOpenSelectTable: function onOpenSelectTable(data) {
          //一般情况下都用不上，备用日后交互需要
          console.log('%c Line:135 🍓 allSelectedChange=======data', 'color:#ffdd4d', data);
        },
        onCloseSelectTable: function onCloseSelectTable() {
          //一般情况下都用不上，备用日后交互需要
          console.log('%c Line:135 🍓 closeSelectTable=======data');
        },
        onSelectTableSearch: function onSelectTableSearch(data) {
          var _tableLayoutContainer3;
          setSelectTableSearchData(data);
          console.log('%c Line:133 🍪onSelectTableSearch===== data', 'color:#ed9ec7', data);
          (_tableLayoutContainer3 = tableLayoutContainerRef.current) === null || _tableLayoutContainer3 === void 0 ? void 0 : _tableLayoutContainer3.selectedTableReload();
        },
        onRemoveSelected: function onRemoveSelected(type, data) {
          //一般情况下都用不上，备用日后交互需要
          console.log('%c Line:128 🍫 onRemoveSelected=======type', 'color:#3f7cff', type, data);
        }
      });
      setOpen(true);
    }
  }, "\u591A\u9009\u7EC4\u4EF6"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setSelectType('checkbox');
      setSelectedRowKeys(['1']);
      setCurrentComponentProps({
        selectDrawerTableTitle: '已选',
        selectTableTitleGround: tableTitleNode,
        selectTableSearchForm: /*#__PURE__*/React.createElement(Search, {
          tableLayoutContainerRef: tableLayoutContainerRef,
          type: "select"
        }),
        selectedTotal: selectedTotal,
        requestSelectedTable: requestSelectedTable,
        onSubmit: function onSubmit(data) {
          _onSubmit(data);
          console.log('%c Line:178 🥪 onSubmit=======data', 'color:#33a5ff', data);
        },
        onAllSelectedChange: onAllSelectedChange,
        onOpenSelectTable: function onOpenSelectTable(data) {
          //一般情况下都用不上，备用日后交互需要
          console.log('%c Line:135 🍓 allSelectedChange=======data', 'color:#ffdd4d', data);
        },
        onCloseSelectTable: function onCloseSelectTable() {
          //一般情况下都用不上，备用日后交互需要
          console.log('%c Line:135 🍓 closeSelectTable=======data');
        },
        onSelectTableSearch: function onSelectTableSearch(data) {
          var _tableLayoutContainer4;
          setSelectTableSearchData(data);
          console.log('%c Line:133 🍪onSelectTableSearch===== data', 'color:#ed9ec7', data);
          (_tableLayoutContainer4 = tableLayoutContainerRef.current) === null || _tableLayoutContainer4 === void 0 ? void 0 : _tableLayoutContainer4.selectedTableReload();
        },
        onRemoveSelected: function onRemoveSelected(type, data) {
          //一般情况下都用不上，备用日后交互需要
          console.log('%c Line:128 🍫 onRemoveSelected=======type', 'color:#3f7cff', type, data);
        }
      });
      setOpen(true);
    }
  }, "\u591A\u9009\u7EC4\u4EF6,\u5E26\u5DF2\u9009\u6570\u636E\u56DE\u663E")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setSelectType('radio');
      setCurrentComponentProps({
        radioSelectName: 'createAccountName',
        onSubmit: function onSubmit(data) {
          _onSubmit(data);
          console.log('%c Line:178 🥪 onSubmit=======data', 'color:#33a5ff', data);
        }
      });
      setOpen(true);
    }
  }, "\u5355\u9009\u7EC4\u4EF6"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    onClick: function onClick() {
      setSelectType('radio');
      setSelectedRowKeys([{
        id: '1',
        openCount: '1',
        unit: '群',
        createAccountName: '哈哈哈'
      }]);
      setCurrentComponentProps({
        radioSelectName: 'createAccountName',
        onSubmit: function onSubmit(data) {
          _onSubmit(data);
          console.log('%c Line:178 🥪 onSubmit=======data', 'color:#33a5ff', data);
        }
      });
      setOpen(true);
    }
  }, "\u5355\u9009\u7EC4\u4EF6,\u5E26\u56DE\u663E\u6570\u636E")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      setCurrentComponentProps({
        selectDrawerTableTitle: '已选',
        selectTableTitleGround: tableTitleNode,
        selectTableSearchForm: /*#__PURE__*/React.createElement(Search, {
          tableLayoutContainerRef: tableLayoutContainerRef,
          type: "select"
        }),
        selectedTotal: selectedTotal,
        requestSelectedTable: requestSelectedTable,
        operateFooterGroup: [{
          name: '停用',
          type: 'stop',
          menu: [{
            label: '停用选中',
            key: '2'
          }, {
            label: '停用全部',
            key: '1'
          }]
        }],
        onOperateFooterButtonClick: function () {
          var _onOperateFooterButtonClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(key, type, selectedRowKeys) {
            var _tableLayoutContainer5, _tableLayoutContainer6;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  console.log('%c Line:107 🥚操作自定义类型 type', 'color:#fca650', type);
                  console.log('%c Line:107 🥑操作自定义 key', 'color:#6ec1c2', key);
                  console.log('%c Line:107 🥑操作已选数据 selectedRowKeys', 'color:#6ec1c2', selectedRowKeys);
                  if (!(key === '2' && selectedRowKeys.length === 0)) {
                    _context4.next = 5;
                    break;
                  }
                  return _context4.abrupt("return", message.warning('请先选择要处理的数据！'));
                case 5:
                  _context4.next = 7;
                  return Promise.resolve();
                case 7:
                  (_tableLayoutContainer5 = tableLayoutContainerRef.current) === null || _tableLayoutContainer5 === void 0 ? void 0 : _tableLayoutContainer5.setInitTableCurrentPage(1); //重置分页
                  (_tableLayoutContainer6 = tableLayoutContainerRef.current) === null || _tableLayoutContainer6 === void 0 ? void 0 : _tableLayoutContainer6.initTableReload();
                case 9:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function onOperateFooterButtonClick(_x4, _x5, _x6) {
            return _onOperateFooterButtonClick.apply(this, arguments);
          }
          return onOperateFooterButtonClick;
        }()
      });
      setSelectType('operate');
      setOpen(true);
    }
  }, "\u591A\u9009\u64CD\u4F5C\u7EC4\u4EF6")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginRight: 10,
      marginBottom: 10,
      borderRadius: 4,
      padding: '5px 10px',
      background: '#1890ff',
      color: '#fff',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      setSelectType('checkbox');
      setSelectedRowKeys([{
        id: '1',
        openCount: '1',
        unit: '群',
        createAccountName: '哈哈哈'
      }]);
      setCurrentComponentProps({
        searchInputState: false,
        selectDrawerTableTitle: '已选',
        titleGround: false,
        selectTableTitleGround: false,
        selectTableOperateName: '禁用',
        searchForm: /*#__PURE__*/React.createElement(Search, {
          tableLayoutContainerRef: tableLayoutContainerRef,
          type: "input"
        }),
        selectTableSearchForm: /*#__PURE__*/React.createElement(Search, {
          tableLayoutContainerRef: tableLayoutContainerRef,
          type: "input"
        }),
        selectedTotal: selectedTotal,
        requestSelectedTable: requestSelectedTable,
        onSubmit: function onSubmit(data) {
          _onSubmit(data);
          console.log('%c Line:178 🥪 onSubmit=======data', 'color:#33a5ff', data);
        },
        onAllSelectedChange: onAllSelectedChange,
        onOpenSelectTable: function onOpenSelectTable(data) {
          //一般情况下都用不上，备用日后交互需要
          console.log('%c Line:135 🍓 allSelectedChange=======data', 'color:#ffdd4d', data);
        },
        onCloseSelectTable: function onCloseSelectTable() {
          //一般情况下都用不上，备用日后交互需要
          console.log('%c Line:135 🍓 closeSelectTable=======data');
        },
        onSelectTableSearch: function onSelectTableSearch(data) {
          var _tableLayoutContainer7;
          setSelectTableSearchData(data);
          console.log('%c Line:133 🍪onSelectTableSearch===== data', 'color:#ed9ec7', data);
          (_tableLayoutContainer7 = tableLayoutContainerRef.current) === null || _tableLayoutContainer7 === void 0 ? void 0 : _tableLayoutContainer7.selectedTableReload();
        },
        onRemoveSelected: function onRemoveSelected(type, data) {
          //一般情况下都用不上，备用日后交互需要
          console.log('%c Line:128 🍫 onRemoveSelected=======type', 'color:#3f7cff', type, data);
        }
      });
      setOpen(true);
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, " \u591A\u9009\u7EC4\u4EF6\uFF0C"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u52A0\u81EA\u5B9A\u4E49\u8F93\u5165input(\u5C4F\u853D\u6807\u51C6\u7684\u7B5B\u9009\u53F3\u4FA7\u641C\u7D22input\u3010searchInputState= false\u3011)"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u3001\u81EA\u5B9A\u4E49\u5DF2\u9009\u7EC4\u4EF6\u5185\u7684\u64CD\u4F5C\u6309\u94AE\u7684\u6587\u6848\u3010selectTableOperateName=\"\u7981\u7528\"\u3011")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10
    },
    onClick: function onClick() {
      setSelectType('readOnly');
      setCurrentComponentProps({
        footer: /*#__PURE__*/React.createElement("div", null, "\u81EA\u5B9A\u4E49footer")
      });
      setOpen(true);
    }
  }, "\u81EA\u5B9A\u4E49footer\u3010readOnly\u3011"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10
    },
    onClick: function onClick() {
      setSelectType('radio');
      setCurrentComponentProps({
        footer: /*#__PURE__*/React.createElement("div", null, "\u81EA\u5B9A\u4E49footer")
      });
      setOpen(true);
    }
  }, "\u81EA\u5B9A\u4E49footer\u3010radio\u3011"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10
    },
    onClick: function onClick() {
      setSelectType('checkbox');
      setCurrentComponentProps({
        footer: /*#__PURE__*/React.createElement("div", null, "\u81EA\u5B9A\u4E49footer")
      });
      setOpen(true);
    }
  }, "\u81EA\u5B9A\u4E49footer\u3010checkbox\u3011"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10
    },
    onClick: function onClick() {
      setSelectType('operate');
      setCurrentComponentProps({
        footer: /*#__PURE__*/React.createElement("div", null, "\u81EA\u5B9A\u4E49footer")
      });
      setOpen(true);
    }
  }, "\u81EA\u5B9A\u4E49footer\u3010operate\u3011")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Tooltip, {
    placement: "topLeft",
    title: '自行加到titleGround属性的组件里面修改样式，通过状态来控制表格数据切换即可'
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10
    },
    onClick: function onClick() {
      setSelectType('checkbox');
      setTabState(true);
      setOpen(true);
    }
  }, "\u81EA\u5B9A\u4E49\u62BD\u5C49\u5185\u5BB9\u5934\u90E8\uFF0C\u6DFB\u52A0tab"))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10
    },
    onClick: function onClick() {
      setSelectType('checkbox');
      setOpen(true);
      setUseTableState(true);
    }
  }, "\u5DF2\u9009\u8868\u683C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5217\u5B57\u6BB5\u3010\u5C5E\u6027\uFF1AselectTableColumns\u3011")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 10
    },
    onClick: function onClick() {
      setOpen(true);
      setCurrentComponentProps({
        tableOnChange: function tableOnChange(p, f, s) {
          console.log(s);
          tableParamsSync.current = {
            orderByDtoList: [{
              asc: s.order === 'ascend',
              column: '2365'
            }]
          };
        },
        selectedTableOnChange: function selectedTableOnChange(p, f, s) {
          // console.log(s)
          // tableParamsSync.current = {
          //     orderByDtoList: [
          //     {
          //       asc: s.order === 'ascend',
          //       column: '2365'
          //     }
          //   ]
          // }
        }
      });
    }
  }, "\u8868\u683C\u670D\u52A1\u7AEF\u6392\u5E8F")), /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, _objectSpread({
    title: '测试demo',
    open: open,
    onClose: reset,
    width: 700,
    rowKey: 'id',
    searchName: "searchName",
    ref: tableLayoutContainerRef,
    selectType: selectType,
    searchInputState: true,
    selectedRowKeys: selectedRowKeys,
    total: total,
    columns: columns,
    selectTableColumns: selectTableColumns,
    requestTable: requestTable,
    getRowDisabled: function getRowDisabled(record) {
      return ['01', '05'].includes(record.id);
    },
    titleGround: /*#__PURE__*/React.createElement(TitleGround, {
      companyName: 'companyName',
      typeName: 'typeName',
      tab: tabState
    }),
    searchForm: /*#__PURE__*/React.createElement(Search, {
      tableLayoutContainerRef: tableLayoutContainerRef,
      type: "init"
    }),
    onSelectedChange: function onSelectedChange(data) {
      console.log('%c Line:449 🥖 data', 'color:#ffdd4d', data);
    },
    onSelectTextMouseEnter: function onSelectTextMouseEnter(data) {
      console.log('%c Line:474 🍒onSelectTextMouseEnter=== data', 'color:#e41a6a', data);
    },
    onSearch: function onSearch(data) {
      var _tableLayoutContainer8, _tableLayoutContainer9;
      console.log('%c Line:45 🍆 data', 'color:#fca650', new Date());
      setSearchData(data);
      (_tableLayoutContainer8 = tableLayoutContainerRef.current) === null || _tableLayoutContainer8 === void 0 ? void 0 : _tableLayoutContainer8.setInitTableCurrentPage(1); //重置分页
      (_tableLayoutContainer9 = tableLayoutContainerRef.current) === null || _tableLayoutContainer9 === void 0 ? void 0 : _tableLayoutContainer9.initTableReload();
      console.log('%c Line:133 🍪onSearch==== data', 'color:#ed9ec7', tableLayoutContainerRef.current, data);
    },
    onOpenSelectTable: function onOpenSelectTable() {
      //测试自定义已选字段列表（截取前三个字段）
      useTableState && setSelectTableColumns(columns.slice(0, 3));
    }
  }, currentComponentProps)));
}