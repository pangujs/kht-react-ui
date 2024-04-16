import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ConfigProvider, Input, Modal, Select } from 'antd';
import React, { createContext, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { DownOutlined, SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { ProCard, ProTable } from '@ant-design/pro-components';
import zhCN from 'antd/es/locale/zh_CN';
import { useTableCommon } from '../../hooks/useTableCommon';
import MultipleText from './components/multiple-text';
import KhtBusinessDeptUserModalTree from '../business-dept-user-modal-tree';
import { communityInitialState, communityReducer, deptUserInitialState, deptUserReducer, tagesInitialState, tagsReducer } from './reduce-fn';
import KhtBusinessTagsModalTree from '../business-tags-modal-tree';
import { debounce } from 'lodash';
import KhtBusinessInstitutionalAssetsModalTree from '../business-institutional-assets-modal-tree';
import BusinessUserInfoPopover from '../business-user-info-popover';
import RemarkNameModalTable from './components/remark-name-modal-table';
import TagsModalTable from './components/tags-modal-table';
import ReviewSelectTableItem from './components/review-select-table-item';
import { clearEmptyPro } from '../../utils';
import { getGroupAllIdsApi, getGroupListApi } from '../../http/api';
import { cloneDeep } from 'lodash';
import "./index.css";
var contextState = /*#__PURE__*/createContext(null);
/** 选择客户 -- 公共业务组件 */
export default function BusinessSelectGroup(props) {
  var _props$modalProps2, _props$modalProps3, _props$modalProps4, _props$modalProps5, _props$modalProps6;
  var _props$readOnlyTable = props.readOnlyTable,
    readOnlyTable = _props$readOnlyTable === void 0 ? false : _props$readOnlyTable;
  var callbackParams = useRef({
    tableStatus: {
      isSelectAll: false,
      checkRowKeys: [],
      unCheckRowKeys: []
    },
    searchParams: {
      search: '',
      treeCodeList: [],
      cipherIds: [],
      groupTagIds: [],
      groupType: 2
    }
    // defalutCheckItems: {
    //   deptUser: [],
    //   tagIdList: [],
    //   type: 'wechat',
    //   community: [],
    //   resident: [],
    //   searchInfo: '',
    // },
  });

  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectTableKeys = _useState2[0],
    setSelectTableKeys = _useState2[1];
  var _useState3 = useState({
      search: '',
      treeCodeList: [],
      cipherIds: [],
      groupTagIds: [],
      groupType: 2
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    tableParams = _useState4[0],
    setTableParams = _useState4[1];
  var _useReducer = useReducer(deptUserReducer, deptUserInitialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    deptState = _useReducer2[0],
    deptDispatch = _useReducer2[1];
  var _useReducer3 = useReducer(tagsReducer, tagesInitialState),
    _useReducer4 = _slicedToArray(_useReducer3, 2),
    tagsState = _useReducer4[0],
    tagsDispatch = _useReducer4[1];
  var _useReducer5 = useReducer(communityReducer, communityInitialState),
    _useReducer6 = _slicedToArray(_useReducer5, 2),
    communityState = _useReducer6[0],
    communityDispatch = _useReducer6[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    remarkNameVisible = _useState6[0],
    setRemarkNameVisible = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    tagsVisible = _useState8[0],
    setTagsVisible = _useState8[1];
  var _useState9 = useState(),
    _useState10 = _slicedToArray(_useState9, 2),
    currentItem = _useState10[0],
    setCurrentItem = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    reviewStatusVisible = _useState12[0],
    setReviewStatusVisible = _useState12[1];
  var actionRef = useRef();
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    cacheUnselectKeys = _useState14[0],
    setCacheUnselectKeys = _useState14[1];
  var maxTotal = 10000;
  var _useTableCommon = useTableCommon({
      isUIResponse: true,
      scrollYLimit: 21,
      rowKey: 'id',
      checkAllCallback: function (_checkAllCallback) {
        function checkAllCallback() {
          return _checkAllCallback.apply(this, arguments);
        }
        checkAllCallback.toString = function () {
          return _checkAllCallback.toString();
        };
        return checkAllCallback;
      }(function () {
        return checkAllCallback();
      }),
      openCheckAll: true
    }),
    baseProps = _useTableCommon.baseProps,
    rowProps = _useTableCommon.rowProps,
    selectedRowObj = _useTableCommon.selectedRowObj,
    selectedRowKeys = _useTableCommon.selectedRowKeys,
    queryListFunc = _useTableCommon.queryListFunc,
    total = _useTableCommon.total,
    unSelectedRowKeys = _useTableCommon.unSelectedRowKeys,
    checkAllStatus = _useTableCommon.checkAllStatus,
    editCheckItems = _useTableCommon.editCheckItems,
    setSelectedRowFunc = _useTableCommon.setSelectedRowFunc,
    setCheckAllStatusFunc = _useTableCommon.setCheckAllStatusFunc,
    setUnSelectedRowFunc = _useTableCommon.setUnSelectedRowFunc;
  var columns = [{
    title: '群名称',
    dataIndex: 'name',
    render: function render(_, record) {
      var _record$communityName, _record$leaderUserNam;
      var remark = (record === null || record === void 0 ? void 0 : record.tagNameList) || [];
      return /*#__PURE__*/React.createElement(BusinessUserInfoPopover, {
        descriptionNode: /*#__PURE__*/React.createElement("span", null, "\u7FA4\u5206\u7C7B\uFF1A\u4E1A\u4E3B\u7FA4"),
        userInfo: {
          avatar: record.avatar,
          sex: record.sex,
          name: record.name
        },
        contentList: [{
          label: '所属项目',
          value: (_record$communityName = record === null || record === void 0 ? void 0 : record.communityName) !== null && _record$communityName !== void 0 ? _record$communityName : '-'
        }, {
          label: '管理人员',
          value: (_record$leaderUserNam = record === null || record === void 0 ? void 0 : record.leaderUserName) !== null && _record$leaderUserNam !== void 0 ? _record$leaderUserNam : '-'
        }, {
          label: '群标签',
          render: function render() {
            return /*#__PURE__*/React.createElement("a", {
              onClick: function onClick() {
                remarkClick(record, remark);
              }
            }, /*#__PURE__*/React.createElement(MultipleText, {
              value: (record === null || record === void 0 ? void 0 : record.tagNameList) || [],
              serviceName: "tagName",
              unit: "\u4E2A\u6807\u7B7E"
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
    title: '群标签',
    dataIndex: 'tagNameList',
    render: function render(_, record) {
      var list = (record === null || record === void 0 ? void 0 : record.tagNameList) || [];
      return /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return remarkClick(record, list);
        }
      }, /*#__PURE__*/React.createElement(MultipleText, {
        value: list,
        serviceName: "tagName",
        unit: "\u4E2A\u6807\u7B7E"
      }));
    }
  }, {
    title: '所属项目',
    dataIndex: 'communityName'
  }, {
    title: '发送人',
    dataIndex: 'senderName'
  }];
  /** 确认回调 */
  var onOk = function onOk() {
    callbackParams.current = {
      tableStatus: {
        isSelectAll: checkAllStatus,
        checkRowKeys: selectTableKeys,
        checkRowRecords: selectedRowObj.filter(function (item) {
          return item.name;
        }),
        unCheckRowKeys: unSelectedRowKeys
      },
      searchParams: tableParams
      // defalutCheckItems:{
      //   deptUser: deptState.defaultCheckedItems,
      //   tagIdList: tagsState.defaultCheckedItems,
      //   type: tableParams.type,
      //   community: communityState.defaultCheckedItems,
      //   resident: householdState.defaultCheckedItems,
      //   searchInfo: tableParams.searchInfo
      // },
    };

    props.ok && props.ok(cloneDeep(callbackParams.current));
    props.cancel && props.cancel();
  };
  /** 关闭回调 */
  var onCancel = function onCancel() {
    if (props.defaultCheckedItems) {
      setUnSelectedRowFunc(props.defaultCheckedItems.tableStatus.unCheckRowKeys, props.defaultCheckedItems.tableStatus.unCheckRowKeys.map(function (item) {
        return {
          id: item
        };
      }));
    }
    props.cancel && props.cancel();
  };
  /** 客户列表请求 */
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
            if (checkAllStatus) debounce(function () {
              return checkAllCallback();
            }, 1000);
            return _context.abrupt("return", queryListFunc(getGroupListApi, clearEmptyPro(params)));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getTableList(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /** 点击 备注名 */
  var remarkClick = function remarkClick(record, list) {
    if (list.length == 0) return;
    setRemarkNameVisible(true);
    setCurrentItem(record);
  };
  /** 点击 标签 */
  var tagClick = function tagClick(record, list) {
    if (list.length == 0) return;
    setTagsVisible(true);
    setCurrentItem(record);
  };
  /** 点击 住户 */
  var customerOwnerClick = function customerOwnerClick(record, list) {
    if (list.length == 0) return;
    setCurrentItem(record);
  };
  /** 查看已选客户 */
  var reviewSelectRows = function reviewSelectRows() {
    setReviewStatusVisible(true);
  };
  /** 点击全选时，请求接口取所有 id 值 */
  var checkAllCallback = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getGroupAllIdsApi(_objectSpread({
              currentPage: 1,
              pageSize: maxTotal
            }, tableParams));
          case 2:
            result = _context2.sent;
            if (result.success) {
              result.response = result.response.filter(function (item) {
                return !unSelectedRowKeys.includes(item);
              });
              setSelectTableKeys(_toConsumableArray(new Set([].concat(_toConsumableArray(selectTableKeys), _toConsumableArray(result.response)))).filter(function (_, index) {
                return index < maxTotal;
              }));
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function checkAllCallback() {
      return _ref2.apply(this, arguments);
    };
  }();
  /** 点击清空某一个 查询条件时的回调 */
  var clearTableParams = function clearTableParams(type) {
    switch (type) {
      case 'dept':
        deptDispatch({
          type: 'RESET',
          payload: null
        });
        break;
      case 'tags':
        tagsDispatch({
          type: 'RESET',
          payload: null
        });
        break;
      case 'community':
        communityDispatch({
          type: 'RESET',
          payload: null
        });
        break;
    }
  };
  /** 处理多人时的显示 */
  var handleMoreData = function handleMoreData(array, unit) {
    var str = '';
    if (!array.length) return str;
    if (array.length === 1) {
      return str += array[0].title;
    }
    if (array.length > 1) {
      return str += array[0].title + ' 等' + array.length + unit;
    }
  };
  /** input 输入框的 清空与下拉图标 */
  var RenderClearBtn = function RenderClearBtn(array, type) {
    return array.length ? /*#__PURE__*/React.createElement(CloseCircleOutlined, {
      className: "base-color active-sty",
      onClick: function onClick() {
        return clearTableParams(type);
      }
    }) : /*#__PURE__*/React.createElement(DownOutlined, {
      className: "base-color"
    });
  };
  /** 表头查询条件中的 input onChange */
  var searchTableInput = useCallback(debounce(function (value) {
    setTableParams(_objectSpread(_objectSpread({}, tableParams), {}, {
      search: value
    }));
  }, 1000), []);
  /** 关闭已选客户，回传 取消已选的客户id值 */
  var selectedCancel = function selectedCancel(selectKeys) {
    setReviewStatusVisible(false);
    if (selectKeys) {
      editCheckItems({
        rows: selectKeys.unCheckKeys.map(function (item) {
          return {
            id: item
          };
        }),
        globalCheckStatus: checkAllStatus
      });
      setSelectTableKeys(selectTableKeys.filter(function (item) {
        return !selectKeys.unCheckKeys.includes(item);
      }));
    }
  };
  useEffect(function () {
    setCacheUnselectKeys(unSelectedRowKeys);
    if (checkAllStatus) {
      if (unSelectedRowKeys.length) {
        if (cacheUnselectKeys.length !== unSelectedRowKeys.length) {
          //全选状态下，取消后 又重新勾选的逻辑
          var addKey = cacheUnselectKeys.filter(function (item) {
            return !unSelectedRowKeys.includes(item);
          });
          if (!addKey.length) {
            setSelectTableKeys(selectTableKeys.filter(function (item) {
              return !unSelectedRowKeys.includes(item);
            }));
          } else {
            setSelectTableKeys([].concat(_toConsumableArray(selectTableKeys), _toConsumableArray(addKey)));
          }
        } else {
          // 全选状态下，取消勾选逻辑
          setSelectTableKeys(selectTableKeys.filter(function (item) {
            return !unSelectedRowKeys.includes(item);
          }));
        }
      } else {
        // 全选状态
        setSelectTableKeys(_toConsumableArray(new Set([].concat(_toConsumableArray(selectTableKeys), _toConsumableArray(selectedRowKeys)))).filter(function (_, index) {
          return index < maxTotal;
        }));
      }
    } else {
      setSelectTableKeys(selectedRowKeys);
    }
  }, [unSelectedRowKeys, selectedRowKeys]);
  useEffect(function () {
    var cipherIds = deptState.defaultCheckedItems.filter(function (item) {
      return item.user;
    }).map(function (item) {
      return item.code;
    });
    setTableParams(_objectSpread(_objectSpread({}, tableParams), {}, {
      treeCodeList: [],
      cipherIds: cipherIds
    }));
  }, [deptState.defaultCheckedItems]);
  useEffect(function () {
    var groupTagIds = tagsState.defaultCheckedItems.map(function (item) {
      return item.tagId;
    });
    setTableParams(_objectSpread(_objectSpread({}, tableParams), {}, {
      groupTagIds: groupTagIds
    }));
  }, [tagsState.defaultCheckedItems]);
  useEffect(function () {
    var communityIds = communityState.defaultCheckedItems.map(function (item) {
      return item.id;
    });
    setTableParams(_objectSpread(_objectSpread({}, tableParams), {}, {
      communityIds: communityIds
    }));
  }, [communityState.defaultCheckedItems]);
  useEffect(function () {
    var _props$modalProps;
    if (props.defaultCheckedItems && ((_props$modalProps = props.modalProps) === null || _props$modalProps === void 0 ? void 0 : _props$modalProps.open)) {
      var _props$defaultChecked;
      var defaultChecked = props.defaultCheckedItems;
      /** 设置表格状态 */
      if (defaultChecked.tableStatus.isSelectAll) {
        setCheckAllStatusFunc(defaultChecked.tableStatus.isSelectAll);
        editCheckItems({
          rows: defaultChecked.tableStatus.unCheckRowKeys.map(function (item) {
            return {
              id: item
            };
          }),
          globalCheckStatus: defaultChecked.tableStatus.isSelectAll
        });
      }
      var eliminateRecords = (_props$defaultChecked = props.defaultCheckedItems.tableStatus.checkRowRecords) === null || _props$defaultChecked === void 0 ? void 0 : _props$defaultChecked.map(function (item) {
        return item.id;
      });
      setSelectedRowFunc(defaultChecked.tableStatus.checkRowKeys, [].concat(_toConsumableArray(defaultChecked.tableStatus.checkRowRecords || []), _toConsumableArray(defaultChecked.tableStatus.checkRowKeys.filter(function (item) {
        return !(eliminateRecords === null || eliminateRecords === void 0 ? void 0 : eliminateRecords.includes(item));
      }).map(function (item) {
        return {
          id: item
        };
      }))));
      setTimeout(function () {
        var _props$defaultChecked2;
        return setSelectTableKeys(((_props$defaultChecked2 = props.defaultCheckedItems) === null || _props$defaultChecked2 === void 0 ? void 0 : _props$defaultChecked2.tableStatus.checkRowKeys) || []);
      }, 500);
      if (defaultChecked.searchParams) setTableParams(defaultChecked.searchParams);
      if (props.customDeptUserNode) deptDispatch({
        type: 'SETSELECTITEMS',
        payload: props.customDeptUserNode
      });
      // tagsDispatch({ type: 'SETSELECTITEMS', payload: defaultChecked.defalutCheckItems.tagIdList })
      // communityDispatch({ type: 'SETSELECTITEMS', payload: defaultChecked.defalutCheckItems.community })
      // householdDispatch({ type: 'SETSELECTITEMS', payload: defaultChecked.defalutCheckItems.resident })
    }
  }, [props.defaultCheckedItems, (_props$modalProps2 = props.modalProps) === null || _props$modalProps2 === void 0 ? void 0 : _props$modalProps2.open]);
  return /*#__PURE__*/React.createElement(contextState.Provider, {
    value: null
  }, /*#__PURE__*/React.createElement(Modal, _objectSpread(_objectSpread({}, props.modalProps), {}, {
    maskClosable: ((_props$modalProps3 = props.modalProps) === null || _props$modalProps3 === void 0 ? void 0 : _props$modalProps3.maskClosable) || false,
    title: '选择群',
    width: ((_props$modalProps4 = props.modalProps) === null || _props$modalProps4 === void 0 ? void 0 : _props$modalProps4.width) || '60%',
    wrapClassName: "".concat(props.readOnlyTable && 'read-sty', " wrapClassName"),
    onCancel: onCancel,
    onOk: onOk,
    okText: ((_props$modalProps5 = props.modalProps) === null || _props$modalProps5 === void 0 ? void 0 : _props$modalProps5.okText) || '确认',
    cancelText: ((_props$modalProps6 = props.modalProps) === null || _props$modalProps6 === void 0 ? void 0 : _props$modalProps6.cancelText) || '取消',
    getContainer: document.getElementById('root') || document.body
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-sty"
  }, !readOnlyTable && /*#__PURE__*/React.createElement(ProCard, {
    ghost: true,
    gutter: 10,
    style: {
      height: 30
    }
  }, /*#__PURE__*/React.createElement(ProCard, {
    ghost: true,
    colSpan: '13%',
    layout: "center"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: tableParams.groupType,
    className: "input-sty input-active",
    style: {
      width: '100%'
    },
    bordered: false,
    onChange: function onChange(value) {
      return setTableParams(_objectSpread(_objectSpread({}, tableParams), {}, {
        groupType: value
      }));
    },
    options: [{
      value: 2,
      label: '外部群'
    }]
  })), /*#__PURE__*/React.createElement(ProCard, {
    ghost: true,
    colSpan: '15%',
    layout: "center"
  }, /*#__PURE__*/React.createElement(Input, {
    className: "input-sty ".concat(tagsState.defaultCheckedItems.length && 'input-active'),
    placeholder: "\u4E0D\u9650\u6807\u7B7E",
    readOnly: true,
    value: handleMoreData(tagsState.defaultCheckedItems, '个标签'),
    onClick: function onClick() {
      return tagsDispatch({
        type: 'SETOPENSTATUS',
        payload: true
      });
    },
    suffix: RenderClearBtn(tagsState.defaultCheckedItems, 'tags')
  })), /*#__PURE__*/React.createElement(ProCard, {
    ghost: true,
    colSpan: '15%',
    layout: "center"
  }, /*#__PURE__*/React.createElement(Input, {
    className: "input-sty ".concat(deptState.defaultCheckedItems.length && 'input-active'),
    placeholder: "\u6267\u884C\u4EBA",
    readOnly: true,
    value: handleMoreData(deptState.defaultCheckedItems, '人'),
    onClick: function onClick() {
      return deptDispatch({
        type: 'SETOPENSTATUS',
        payload: true
      });
    },
    suffix: RenderClearBtn(deptState.defaultCheckedItems, 'dept')
  })), /*#__PURE__*/React.createElement(ProCard, {
    ghost: true,
    colSpan: '15%',
    layout: "center"
  }, /*#__PURE__*/React.createElement(Input, {
    className: "input-sty ".concat(communityState.defaultCheckedItems.length && 'input-active'),
    placeholder: "\u6240\u5C5E\u9879\u76EE",
    readOnly: true,
    value: handleMoreData(communityState.defaultCheckedItems, ''),
    onClick: function onClick() {
      return communityDispatch({
        type: 'SETOPENSTATUS',
        payload: true
      });
    },
    suffix: RenderClearBtn(communityState.defaultCheckedItems, 'community')
  })), /*#__PURE__*/React.createElement(ProCard, {
    ghost: true,
    layout: "center",
    bodyStyle: {
      justifyContent: 'end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    style: {
      width: 200
    },
    placeholder: "\u641C\u7D22",
    allowClear: true,
    onChange: function onChange(event) {
      return searchTableInput(event.target.value);
    },
    prefix: /*#__PURE__*/React.createElement(SearchOutlined, {
      className: "base-color"
    })
  }))), /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(ProTable, _objectSpread(_objectSpread(_objectSpread({}, baseProps), readOnlyTable ? {} : rowProps), {}, {
    tableClassName: "reset-table-sty",
    style: {
      marginTop: props.readOnlyTable ? 0 : 30
    },
    columns: columns,
    params: tableParams,
    request: getTableList,
    actionRef: actionRef,
    size: "small",
    search: false,
    toolBarRender: false,
    pagination: {
      simple: true,
      defaultPageSize: 10,
      hideOnSinglePage: true,
      showTotal: false
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "footer-tip",
    style: {
      left: total < 11 && '5px'
    }
  }, total > 0 && /*#__PURE__*/React.createElement("span", {
    className: "tip-margin"
  }, "\u5171 ", total, " \u4E2A\u7FA4"), !!selectTableKeys.length && /*#__PURE__*/React.createElement("span", {
    className: "tip-margin"
  }, "\u5DF2\u9009", ' ', /*#__PURE__*/React.createElement("i", {
    className: "select-btn",
    onClick: reviewSelectRows
  }, selectTableKeys.length, "\u4E2A\u7FA4")))), /*#__PURE__*/React.createElement(KhtBusinessDeptUserModalTree, {
    open: deptState.open,
    selectable: true,
    destroyOnClose: props.customDeptUserNode ? true : false,
    // treeProps={{
    //   checkStrictly: true
    // }}
    customRootNode: props.customDeptUserNode ? props.customDeptUserNode : undefined,
    defaultCheckedItems: deptState.defaultCheckedItems,
    ok: function ok(selectNode) {
      return deptDispatch({
        type: 'SETSELECTITEMS',
        payload: selectNode
      });
    },
    cancel: function cancel() {
      return deptDispatch({
        type: 'SETOPENSTATUS',
        payload: false
      });
    },
    treeProps: {
      isOriginSearch: props.customDeptUserNode ? false : true
    }
  }), /*#__PURE__*/React.createElement(KhtBusinessTagsModalTree, {
    open: tagsState.open,
    isGroup: true,
    defaultCheckedItems: tagsState.defaultCheckedItems,
    destroyOnClose: false,
    treeProps: {
      selectable: true
    },
    ok: function ok(selectNode) {
      return tagsDispatch({
        type: 'SETSELECTITEMS',
        payload: selectNode
      });
    },
    cancel: function cancel() {
      return tagsDispatch({
        type: 'SETOPENSTATUS',
        payload: false
      });
    }
  }), /*#__PURE__*/React.createElement(KhtBusinessInstitutionalAssetsModalTree, {
    open: communityState.open,
    defaultCheckedItems: communityState.defaultCheckedItems,
    destroyOnClose: false,
    loaderLevel: "community",
    canSelect: 'community',
    multiple: false,
    ok: function ok(selectNode) {
      return communityDispatch({
        type: 'SETSELECTITEMS',
        payload: selectNode
      });
    },
    cancel: function cancel() {
      return communityDispatch({
        type: 'SETOPENSTATUS',
        payload: false
      });
    }
  }), /*#__PURE__*/React.createElement(RemarkNameModalTable, {
    modalProps: {
      open: remarkNameVisible
    },
    cancel: function cancel() {
      return setRemarkNameVisible(false);
    },
    currentTableItem: currentItem
  }), /*#__PURE__*/React.createElement(TagsModalTable, {
    modalProps: {
      open: tagsVisible
    },
    cancel: function cancel() {
      return setTagsVisible(false);
    },
    currentTableItem: currentItem
  }), /*#__PURE__*/React.createElement(ReviewSelectTableItem, {
    modalProps: {
      open: reviewStatusVisible,
      destroyOnClose: true
    },
    cancel: selectedCancel,
    selectRowKyes: selectTableKeys,
    clickRemarkClick: remarkClick,
    clickCustomerOwnerClick: customerOwnerClick,
    clickTagClick: tagClick
  })));
}