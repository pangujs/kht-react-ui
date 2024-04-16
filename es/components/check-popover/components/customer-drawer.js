import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef } from 'react';
import KhtbusinessMobileText from '../../business-mobile-text';
import CheckDrawerTable from '../../check-drawer-table';
import { addType } from '../type';
import "./index.css";
import { useSetState } from 'ahooks';
export default (function (props) {
  var visible = props.visible,
    type = props.type,
    onClose = props.onClose,
    _props$drawerTableLay = props.drawerTableLayoutTitle,
    drawerTableLayoutTitle = _props$drawerTableLay === void 0 ? null : _props$drawerTableLay,
    _props$dataSource = props.dataSource,
    dataSource = _props$dataSource === void 0 ? [] : _props$dataSource;
  var drawerTableLayoutRef1 = useRef(null);
  var drawerTableLayoutRef2 = useRef(null);
  var _useSetState = useSetState({
      title: '',
      columns1: [],
      columns2: [],
      footerValue: '',
      historyTitle: '',
      drawerTotal1: 0,
      drawerTotal2: 0,
      data: []
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  var requestInitTable1 = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var _state$data, _state$data2;
      var currentPage, pageSize, startIndex, endIndex;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            currentPage = _ref.current, pageSize = _ref.pageSize;
            startIndex = (currentPage - 1) * pageSize; // 当前页的起始数据索引
            endIndex = startIndex + pageSize; // 当前页的结束数据索引
            // const res: any = await getRiskControlPropertyRechargeRecord({
            //   pageSize,
            //   currentPage
            // })
            setState({
              drawerTotal1: ((_state$data = state.data) === null || _state$data === void 0 ? void 0 : _state$data.length) || 0
            });
            return _context.abrupt("return", {
              data: (_state$data2 = state.data) === null || _state$data2 === void 0 ? void 0 : _state$data2.slice(startIndex, endIndex),
              total: state.rawerTotal1,
              success: true
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestInitTable1(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var requestInitTable2 = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
      var currentPage, pageSize;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = _ref3.current, pageSize = _ref3.pageSize;
            // const res: any = await getRiskControlPropertyRechargeRecord({
            //   pageSize,
            //   currentPage
            // })
            setState({
              drawerTotal2: 0
            });
            return _context2.abrupt("return", {
              data: [],
              total: 28 || 0,
              success: true
            });
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function requestInitTable2(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var onCancel = function onCancel() {
    onClose();
    setState({
      data: dataSource
    });
  };
  var columnsType = function columnsType() {
    switch (type) {
      case 'assetMN':
        setState({
          columns1: houseHoldPhoneColumns,
          columns2: historyHouseHoldPhoneColumns,
          title: '手机号码',
          historyTitle: '历史手机号码',
          footerValue: '历史手机号码'
        });
        break;
      case 'assetTN':
        setState({
          columns1: houseHoldTeleColumns,
          columns2: historyHouseHoldTeleColumns,
          title: '电话号码',
          historyTitle: '历史电话号码',
          footerValue: '历史电话号码'
        });
        break;
      case 'employeeMN':
        setState({
          columns1: memberPhoneColumns,
          columns2: historyMemberPhoneColumns,
          title: '手机号码',
          historyTitle: '历史手机号码',
          footerValue: '历史客户电话'
        });
        break;
      case 'customerTN':
        setState({
          columns1: customerPhoneColumns,
          columns2: historyCustomerPhoneColumns,
          title: '客户电话',
          historyTitle: '历史客户电话',
          footerValue: '历史客户电话'
        });
        break;
      case 'customerCN':
        setState({
          columns1: customerRemarkColumns,
          columns2: historyCustomerRemarkColumns,
          title: '客户备注名',
          historyTitle: '历史客户备注名',
          footerValue: '历史客户备注名'
        });
        break;
      case 'customerAP':
        setState({
          columns1: customerAddColumns,
          columns2: historyCustomerAddColumns,
          title: '客户添加人',
          historyTitle: '历史添加人',
          footerValue: '历史添加人'
        });
        break;
    }
  };
  var houseHoldPhoneColumns = [{
    title: '手机号码',
    dataIndex: 'telephone',
    width: '140px',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
        value: text
      });
    }
  }, {
    title: '添加人',
    dataIndex: 'employeeName'
  }, {
    title: '添加时间',
    dataIndex: 'addDate',
    render: function render(value, record) {
      var _record$addDate, _record$addDate2;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_record$addDate = record.addDate) === null || _record$addDate === void 0 ? void 0 : _record$addDate.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_record$addDate2 = record.addDate) === null || _record$addDate2 === void 0 ? void 0 : _record$addDate2.slice(10, 16)));
    }
  }];
  var historyHouseHoldPhoneColumns = [].concat(houseHoldPhoneColumns, [{
    title: '修改时间',
    dataIndex: 'editTime',
    render: function render(value) {
      return '2023-03-05';
    }
  }]);
  var houseHoldTeleColumns = [{
    title: '客户电话',
    dataIndex: 'telephone',
    width: '140px'
  }, {
    title: '添加人',
    dataIndex: 'employeeName'
  }, {
    title: '添加时间',
    dataIndex: 'addDate',
    render: function render(value, record) {
      var _record$addDate3, _record$addDate4;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_record$addDate3 = record.addDate) === null || _record$addDate3 === void 0 ? void 0 : _record$addDate3.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_record$addDate4 = record.addDate) === null || _record$addDate4 === void 0 ? void 0 : _record$addDate4.slice(10, 16)));
    }
  }];
  var historyHouseHoldTeleColumns = [].concat(houseHoldTeleColumns, [{
    title: '修改时间',
    dataIndex: 'editTime',
    render: function render(value) {
      return '2023-03-05';
    }
  }]);
  var memberPhoneColumns = [{
    title: '手机号码',
    dataIndex: 'telephone',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
        value: text
      });
    }
  }, {
    title: '添加时间',
    dataIndex: 'addDate',
    render: function render(value, record) {
      var _record$addDate5, _record$addDate6;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_record$addDate5 = record.addDate) === null || _record$addDate5 === void 0 ? void 0 : _record$addDate5.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_record$addDate6 = record.addDate) === null || _record$addDate6 === void 0 ? void 0 : _record$addDate6.slice(10, 16)));
    }
  }];
  var historyMemberPhoneColumns = [].concat(memberPhoneColumns, [{
    title: '修改时间',
    dataIndex: 'editTime',
    render: function render(value) {
      return '2023-03-05';
    }
  }]);
  var customerPhoneColumns = [{
    title: '客户电话',
    dataIndex: 'telephone',
    width: '140px',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
        value: text
      });
    }
  }, {
    title: '添加人',
    dataIndex: 'employeeName',
    ellipsis: true
  }, {
    title: '添加时间',
    dataIndex: 'addDate',
    render: function render(value, record) {
      var _record$addDate7, _record$addDate8;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_record$addDate7 = record.addDate) === null || _record$addDate7 === void 0 ? void 0 : _record$addDate7.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_record$addDate8 = record.addDate) === null || _record$addDate8 === void 0 ? void 0 : _record$addDate8.slice(10, 16)));
    }
  }];
  var historyCustomerPhoneColumns = [].concat(customerPhoneColumns, [{
    title: '修改时间',
    dataIndex: 'editTime',
    render: function render(value) {
      return '2023-03-05';
    }
  }]);
  var customerRemarkColumns = [{
    title: '备注名',
    dataIndex: 'remark',
    width: '140px',
    ellipsis: true
  }, {
    title: '备注人',
    dataIndex: 'employeeName'
  }, {
    title: '备注时间',
    dataIndex: 'addDate',
    render: function render(value, record) {
      var _record$addDate9, _record$addDate10;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_record$addDate9 = record.addDate) === null || _record$addDate9 === void 0 ? void 0 : _record$addDate9.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_record$addDate10 = record.addDate) === null || _record$addDate10 === void 0 ? void 0 : _record$addDate10.slice(10, 16)));
    }
  }];
  var historyCustomerRemarkColumns = [].concat(customerRemarkColumns, [{
    title: '修改时间',
    dataIndex: 'editTime',
    render: function render(value) {
      return '2023-03-05';
    }
  }]);
  var customerAddColumns = [{
    title: '添加人',
    dataIndex: 'employeeName',
    width: '140px',
    ellipsis: true
  }, {
    title: '添加时间',
    dataIndex: 'addDate',
    render: function render(value, record) {
      var _record$addDate11, _record$addDate12;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, (_record$addDate11 = record.addDate) === null || _record$addDate11 === void 0 ? void 0 : _record$addDate11.slice(0, 10)), /*#__PURE__*/React.createElement("div", null, (_record$addDate12 = record.addDate) === null || _record$addDate12 === void 0 ? void 0 : _record$addDate12.slice(10, 16)));
    }
  }, {
    title: '添加方式',
    dataIndex: 'addWay',
    render: function render(value, record) {
      return record.addWay ? addType[record.addWay] : '未知来源';
    }
  }];
  var historyCustomerAddColumns = [].concat(customerAddColumns, [{
    title: '流失时间',
    dataIndex: 'editTime',
    render: function render(value) {
      return '2023-03-05';
    }
  }, {
    title: '流失原因',
    dataIndex: 'remark',
    render: function render(value) {
      return '被客户删除';
    }
  }]);
  useEffect(function () {
    if (visible) {
      columnsType();
    }
  }, [visible]);
  useEffect(function () {
    var _drawerTableLayoutRef;
    setState({
      data: dataSource
    });
    (_drawerTableLayoutRef = drawerTableLayoutRef1.current) === null || _drawerTableLayoutRef === void 0 ? void 0 : _drawerTableLayoutRef.initTableReload();
  }, [dataSource]);
  return /*#__PURE__*/React.createElement(CheckDrawerTable, {
    title: state.title,
    open: visible,
    drawerTableLayoutTitle: drawerTableLayoutTitle,
    // tableNode={<KhtDrawerProTable total={state.drawerTotal1} actionRef={initTableRef1} columns={state.columns1} requestTable={requestInitTable1} />}
    initTotal: state.drawerTotal1,
    initColumns: state.columns1,
    drawerTableLayoutRef1: drawerTableLayoutRef1,
    initRequestTable: requestInitTable1,
    initOptions: Object.entries(addType).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];
      return {
        value: key,
        label: value
      };
    }),
    initPlaceholder: "\u6DFB\u52A0\u65B9\u5F0F",
    historyStateFooter: false,
    footerValue: state.footerValue,
    onClose: onCancel,
    historyTitle: state.historyTitle,
    historyDrawerTableLayoutTitle: drawerTableLayoutTitle,
    isShowInput: type == 'customerAP' ? true : false,
    // historyTableNode={
    //   <KhtDrawerProTable total={state.drawerTotal2} actionRef={initTableRef2} columns={state.columns2} requestTable={requestInitTable2} />
    // }
    selectedTotal: state.drawerTotal2,
    selectedColumns: state.columns2,
    drawerTableLayoutRef2: drawerTableLayoutRef2,
    selectedRequestTable: requestInitTable2,
    selectedPlaceholder: "\u6DFB\u52A0\u65B9\u5F0F",
    selectOptions: Object.entries(addType).map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        key = _ref8[0],
        value = _ref8[1];
      return {
        value: key,
        label: value
      };
    }),
    onSearch1: type == 'customerAP' ? function (data) {
      var _drawerTableLayoutRef2;
      var d = dataSource.filter(function (item) {
        if (data.name && data.type) {
          return item.employeeName.indexOf(data.name) !== -1 && item.addWay == data.type;
        } else if (data.name) {
          return item.employeeName.indexOf(data.name) !== -1;
        } else if (data.type) {
          return item.addWay == data.type;
        } else {
          return dataSource;
        }
      });
      setState({
        data: d,
        drawerTotal1: d.length
      });
      (_drawerTableLayoutRef2 = drawerTableLayoutRef1.current) === null || _drawerTableLayoutRef2 === void 0 ? void 0 : _drawerTableLayoutRef2.initTableReload();
    } : undefined,
    onSearch2: type == 'customerAP' ? function (data) {
      console.log(data, '搜索条件的回调2');
    } : undefined
  });
});