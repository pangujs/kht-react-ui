import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { Button, ConfigProvider, Modal } from 'antd';
import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ProTable } from '@ant-design/pro-components';
import { useTableCommon } from '../../../hooks/useTableCommon';
import "./index.css";
import { getGroupListApi } from '../../../http/api';
export default function ReviewSelectTableItem(props) {
  var _props$modalProps, _props$modalProps2;
  var _useTableCommon = useTableCommon({
      isUIResponse: true,
      rowKey: 'id',
      x: 0,
      scrollYLimit: 21
    }),
    baseProps = _useTableCommon.baseProps,
    rowProps = _useTableCommon.rowProps,
    queryListFunc = _useTableCommon.queryListFunc,
    selectedRowKeys = _useTableCommon.selectedRowKeys,
    total = _useTableCommon.total,
    selectStatus = _useTableCommon.selectStatus,
    checkAllStatus = _useTableCommon.checkAllStatus,
    checkNumber = _useTableCommon.checkNumber,
    updateFunc = _useTableCommon.updateFunc,
    unSelectedRowKeys = _useTableCommon.unSelectedRowKeys;
  var columns = [{
    title: '群名称',
    dataIndex: 'name'
  }, {
    title: '所属项目',
    dataIndex: 'remarkName'
  }];
  /** 客户列表请求 */
  var getTableList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var params;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            params = {
              currentPage: values.current,
              pageSize: values.pageSize,
              groupIds: props.selectRowKyes
            };
            return _context.abrupt("return", queryListFunc(getGroupListApi, params));
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
  var TableHeaderTitle = function TableHeaderTitle() {
    return /*#__PURE__*/React.createElement(Button, {
      disabled: selectStatus,
      onClick: removeSelectChecks
    }, "\u79FB\u9664\u9009\u4E2D(", checkAllStatus ? checkNumber : selectedRowKeys.length, ")");
  };
  /** 删除已勾选数据 */
  var removeSelectChecks = function removeSelectChecks() {
    if (checkAllStatus) {
      updateFunc( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              props.cancel({
                checkKeys: unSelectedRowKeys,
                unCheckKeys: props.selectRowKyes.filter(function (item) {
                  return !unSelectedRowKeys.includes(item);
                })
              });
              return _context2.abrupt("return", {
                data: {
                  response: {
                    dataList: [],
                    totalCount: 0
                  },
                  success: true,
                  message: '操作成功'
                }
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      })), {}, {
        title: '提示',
        content: '是否删除已勾选状态数据，并关闭此弹框？'
      });
    } else {
      updateFunc( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              props.cancel({
                checkKeys: props.selectRowKyes.filter(function (item) {
                  return !selectedRowKeys.includes(item);
                }),
                unCheckKeys: selectedRowKeys
              });
              return _context3.abrupt("return", {
                data: {
                  response: {
                    dataList: [],
                    totalCount: 0
                  },
                  success: true,
                  message: '操作成功'
                }
              });
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      })), {}, {
        title: '提示',
        content: '是否删除已勾选状态数据，并关闭此弹框？'
      });
    }
  };
  return /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(Modal, _objectSpread(_objectSpread({}, props.modalProps), {}, {
    className: "custom-modal-sty",
    maskClosable: ((_props$modalProps = props.modalProps) === null || _props$modalProps === void 0 ? void 0 : _props$modalProps.maskClosable) || false,
    title: "\u5DF2\u9009\u7FA4(".concat(total, ")"),
    width: ((_props$modalProps2 = props.modalProps) === null || _props$modalProps2 === void 0 ? void 0 : _props$modalProps2.width) || '40%',
    getContainer: document.getElementById('root') || document.body,
    onCancel: function onCancel() {
      return props.cancel();
    },
    footer: false
  }), /*#__PURE__*/React.createElement(ProTable, _objectSpread(_objectSpread(_objectSpread({}, baseProps), rowProps), {}, {
    tableClassName: "reset-table-sty-modal",
    columns: columns,
    request: getTableList,
    size: "small",
    search: false,
    headerTitle: /*#__PURE__*/React.createElement(TableHeaderTitle, null),
    pagination: {
      simple: true,
      defaultPageSize: 10,
      hideOnSinglePage: true,
      showTotal: false
    }
  }))));
}