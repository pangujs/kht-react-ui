import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { Button, ConfigProvider, Modal } from 'antd';
import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ProTable } from '@ant-design/pro-components';
import { useTableCommon } from '../../../hooks/useTableCommon';
import "./index.css";
import { getCustomerWxWorkList } from '../../../http/api';
import MultipleText from './multiple-text';
import BusinessUserInfoPopover from '../../business-user-info-popover';
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
    selectedRowObj = _useTableCommon.selectedRowObj,
    selectStatus = _useTableCommon.selectStatus,
    checkAllStatus = _useTableCommon.checkAllStatus,
    checkNumber = _useTableCommon.checkNumber,
    updateFunc = _useTableCommon.updateFunc,
    unSelectedRowKeys = _useTableCommon.unSelectedRowKeys;
  var columns = [{
    title: '客户',
    dataIndex: 'name',
    ellipsis: true,
    width: 180,
    render: function render(_, record) {
      var _record$telephoneList;
      // 过滤出 备注名信息和描述信息
      var remarkName = (record === null || record === void 0 ? void 0 : record.customerFollowInfoResDtoList) || [];
      var remark = [];
      if (remarkName.length) {
        for (var index = 0; index < remarkName.length; index++) {
          var element = remarkName[index];
          if (element.remark) remark.push(element);
        }
      }
      return /*#__PURE__*/React.createElement(BusinessUserInfoPopover, {
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
            return /*#__PURE__*/React.createElement("a", {
              onClick: function onClick() {
                return props.clickRemarkClick(record, remark);
              }
            }, /*#__PURE__*/React.createElement(MultipleText, {
              value: remarkName,
              serviceName: "remark",
              unit: "\u4E2A\u5907\u6CE8\u540D"
            }));
          }
        }, {
          label: '绑定住户',
          render: function render() {
            return /*#__PURE__*/React.createElement("a", {
              onClick: function onClick() {
                return props.clickCustomerOwnerClick(record, record === null || record === void 0 ? void 0 : record.useTagInfoList);
              }
            }, /*#__PURE__*/React.createElement(MultipleText, {
              value: record === null || record === void 0 ? void 0 : record.residentHouseInfoReqDtoList,
              serviceName: "name",
              unit: "\u4E2A\u4F4F\u6237"
            }));
          }
        }, {
          label: '客户标签',
          render: function render() {
            return /*#__PURE__*/React.createElement("a", {
              onClick: function onClick() {
                return props.clickTagClick(record, record === null || record === void 0 ? void 0 : record.useTagInfoList);
              }
            }, /*#__PURE__*/React.createElement(MultipleText, {
              value: record === null || record === void 0 ? void 0 : record.useTagInfoList,
              serviceName: "name",
              unit: "\u4E2A\u6807\u7B7E"
            }));
          }
        }],
        children: /*#__PURE__*/React.createElement("span", {
          style: {
            minWidth: 180,
            display: 'block'
          }
        }, record.name)
      });
    }
  }, {
    title: '备注名',
    dataIndex: 'remarkName',
    ellipsis: true,
    render: function render(_, record) {
      // 过滤出 备注名信息和描述信息
      var list = (record === null || record === void 0 ? void 0 : record.customerFollowInfoResDtoList) || [];
      var remark = [];
      if (list.length) {
        for (var index = 0; index < list.length; index++) {
          var element = list[index];
          if (element.remark) remark.push(element);
        }
      }
      return /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return props.clickRemarkClick(record, remark);
        }
      }, /*#__PURE__*/React.createElement(MultipleText, {
        value: remark,
        serviceName: "remark",
        unit: "\u4E2A\u5907\u6CE8\u540D"
      }));
    }
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
              customerIds: props.selectRowKyes
            };
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
    title: '客户备注名',
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
    },
    options: false
  }))));
}