import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// 一些关于 pro table 的公共属性方法
import { useState, useEffect, useRef } from 'react';
import { message, Modal } from 'antd';
// import {CheckCircleOutlined,QuestionCircleOutlined} from "@ant-design/icons"
var confirm = Modal.confirm;
import { AntdConfig, validateRes } from './utils';
export var useTableCommon = function useTableCommon() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var tableParamsChangeFunc = arguments.length > 1 ? arguments[1] : undefined;
  var _options$x = options.x,
    x = _options$x === void 0 ? 720 : _options$x,
    _options$rowKey = options.rowKey,
    rowKey = _options$rowKey === void 0 ? 'id' : _options$rowKey,
    _options$scrollYLimit = options.scrollYLimit,
    scrollYLimit = _options$scrollYLimit === void 0 ? 8 : _options$scrollYLimit,
    _options$rowSelection = options.rowSelection,
    rowSelection = _options$rowSelection === void 0 ? {} : _options$rowSelection,
    _options$isUIResponse = options.isUIResponse,
    isUIResponse = _options$isUIResponse === void 0 ? false : _options$isUIResponse,
    _options$openCheckAll = options.openCheckAll,
    openCheckAll = _options$openCheckAll === void 0 ? false : _options$openCheckAll,
    _options$defaultCheck = options.defaultCheckAllStatus,
    defaultCheckAllStatus = _options$defaultCheck === void 0 ? false : _options$defaultCheck,
    _options$defaultUnSel = options.defaultUnSelectedRowObj,
    defaultUnSelectedRowObj = _options$defaultUnSel === void 0 ? [] : _options$defaultUnSel,
    _options$defaultCheck2 = options.defaultCheckNumber,
    defaultCheckNumber = _options$defaultCheck2 === void 0 ? 0 : _options$defaultCheck2;
  // 设置 table的水平和垂直方向的自适应宽高
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  var _useState3 = useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    totalPage = _useState4[0],
    setTotalPage = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    totalCount = _useState6[0],
    setTotalCount = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dataSource = _useState8[0],
    setDataSource = _useState8[1];
  var pageCount = useRef(0);
  // 是否勾选全部
  var checkAll = useRef(defaultCheckAllStatus);
  var dataListSync = useRef([]);
  // 取消勾选的数据
  var unCheckedRowKeys = useRef(defaultUnSelectedRowObj.map(function (val) {
    return val[rowKey];
  }));
  // 取消勾选的数据源
  var unCheckedRowObjs = useRef(defaultUnSelectedRowObj);
  // 遇到全选功能的时候，显示勾选的数量需要额外处理了，所以采用这个字段
  var _useState9 = useState(defaultCheckNumber),
    _useState10 = _slicedToArray(_useState9, 2),
    checkNumber = _useState10[0],
    setCheckNumber = _useState10[1];
  // table的实例
  var tableRef = useRef();
  // 搜索条件的实例
  var searchRef = useRef();
  // 被封勾选的数据
  var defaultBackups = {
    checkStatus: false,
    checkNumber: 0,
    selectIds: [],
    selectRows: [],
    unSelectIds: []
  };
  var backupsData = useRef(JSON.parse(JSON.stringify(defaultBackups)));
  //   复选框，被勾选的数据
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedRowKeys = _useState12[0],
    setSelectedRowKeys = _useState12[1];
  // 有些按钮需要被勾选中才能点击，这个用来控制按钮是否可以被点击
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    disable = _useState14[0],
    setDisable = _useState14[1];
  // 被选中的源数据
  var selectObj = useRef([]);
  var onSelect = function onSelect(obj, check) {
    obj['checked'] = check;
    if (check) {
      // 勾选
      unCheckedRowKeys.current = unCheckedRowKeys.current.filter(function (val) {
        return val !== obj[rowKey];
      });
      unCheckedRowObjs.current = unCheckedRowObjs.current.filter(function (val) {
        return val[rowKey] !== obj[rowKey];
      });
      selectObj.current.push(obj);
      setCheckNumber(checkNumber + 1);
    } else {
      // 取消勾选
      unCheckedRowKeys.current.push(obj[rowKey]);
      unCheckedRowObjs.current.push(obj);
      selectObj.current = selectObj.current.filter(function (val) {
        return val[rowKey] !== obj[rowKey];
      });
      setCheckNumber(checkNumber ? checkNumber - 1 : 0);
    }
    setSelectedRowKeys(selectObj.current.map(function (obj) {
      return obj[rowKey];
    }));
  };
  var onSelectAll = function onSelectAll(check, _, changeRows) {
    var setTotalFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var leng = changeRows.length;
    changeRows = changeRows.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        checked: check
      });
    });
    if (check) {
      var ids = changeRows.map(function (val) {
        return val[rowKey];
      });
      unCheckedRowKeys.current = unCheckedRowKeys.current.filter(function (val) {
        return !ids.includes(val);
      });
      unCheckedRowObjs.current = unCheckedRowObjs.current.filter(function (val) {
        return !ids.includes(val[rowKey]);
      });
      selectObj.current = [].concat(_toConsumableArray(selectObj.current), _toConsumableArray(changeRows));
      if (!setTotalFlag) setCheckNumber(checkNumber + leng);
    } else {
      var unCheckIds = changeRows.map(function (obj) {
        return obj[rowKey];
      });
      // unCheckedRowKeys.current = [...new Set([...unCheckIds, ...unCheckedRowKeys.current])];
      unCheckedRowKeys.current = [].concat(_toConsumableArray(unCheckIds), _toConsumableArray(unCheckedRowKeys.current));
      unCheckedRowObjs.current = [].concat(_toConsumableArray(unCheckedRowObjs.current), _toConsumableArray(changeRows));
      // unCheckedRowObjs.current = objArrayRemoval(unCheckedRowObjs.current,changeRows, rowKey);
      selectObj.current = selectObj.current.filter(function (val) {
        return !unCheckIds.includes(val[rowKey]);
      });
      if (!setTotalFlag) setCheckNumber(checkNumber - leng);
    }
    setSelectedRowKeys(selectObj.current.map(function (obj) {
      return obj[rowKey];
    }));
  };
  // 删除所有勾选
  var removeSelected = function removeSelected() {
    checkAll.current = false;
    selectObj.current = [];
    setSelectedRowKeys([]);
    unCheckedRowKeys.current = [];
    setCheckNumber(0);
  };
  // 设置当前勾选的数据
  function editCheckItems(obj) {
    var rows = obj.rows,
      globalCheckStatus = obj.globalCheckStatus;
    if (!rows.length) return;
    checkAll.current = globalCheckStatus;
    onSelectAll(false, {}, rows, true);
    if (globalCheckStatus) {
      setCheckNumber(checkNumber - rows.length);
    } else {
      setCheckNumber(rows.length);
    }
  }
  // 有些需求是不勾选也可以点击，不过需要提示，这个就是用来提示的
  var hasSelected = function hasSelected() {
    return new Promise(function (resolve, reject) {
      if (selectedRowKeys.length) {
        resolve(selectedRowKeys);
      } else {
        message.warning('请勾选数据', 1.5);
        reject(1);
      }
    });
  };
  // 设置默认勾选的数据
  function setSelectedRowFunc(ids, objs) {
    setSelectedRowKeys(ids);
    // 设置勾选的 row 数据源，手动设置全选接口如果返回的都是id的时候，需要用ids去设置
    var arr = objs || ids;
    selectObj.current = arr.map(function (val) {
      // 有些默认全选的时候，接口返回的只有id，这里要做下额外处理
      if (Object.prototype.toString.call(val) === '[object Object]') {
        return val;
      }
      return _defineProperty({}, rowKey, val);
    });
  }
  // 设置取消勾选的数据
  function setUnSelectedRowFunc(ids, objs) {
    unCheckedRowKeys.current = ids;
    unCheckedRowObjs.current = objs;
  }
  function setCheckAllStatusFunc(flag) {
    checkAll.current = flag;
  }
  function checkAllRows() {
    var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    checkAll.current = true;
    // 全选之后，如果反选了当前页，再勾选全选需要清空下，不然全选不上
    if (reset) {
      unCheckedRowKeys.current = [];
      setCheckNumber(totalCount);
    }
    dataListSync.current.map(function (val) {
      if (!selectedRowKeys.includes(val[rowKey]) && !unCheckedRowKeys.current.includes(val[rowKey])) {
        selectObj.current.push(val);
      }
    });
    setSelectedRowKeys(selectObj.current.map(function (val) {
      return val[rowKey];
    }));
    // options.checkAllCallback && options.checkAllCallback();
  }
  // 备份当前勾选的数据
  function backupsFunc() {
    backupsData.current = JSON.parse(JSON.stringify({
      checkStatus: checkAll.current,
      checkNumber: checkNumber,
      selectIds: _toConsumableArray(selectedRowKeys),
      selectRows: JSON.parse(JSON.stringify(selectObj.current)),
      unSelectIds: _toConsumableArray(unCheckedRowKeys.current)
    }));
  }
  // 从备份中还原勾选的数据
  function restoreFunc() {
    var _JSON$parse = JSON.parse(JSON.stringify(backupsData.current)),
      checkStatus = _JSON$parse.checkStatus,
      num = _JSON$parse.checkNumber,
      selectIds = _JSON$parse.selectIds,
      selectRows = _JSON$parse.selectRows,
      unSelectIds = _JSON$parse.unSelectIds;
    checkAll.current = checkStatus;
    setSelectedRowFunc(selectIds, selectRows);
    unCheckedRowKeys.current = unSelectIds;
  }
  // 重新回到第一页的列表，多用于 onRest
  var resetLoadList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var current, _tableRef$current, _tableRef$current2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            current = tableRef.current.pageInfo.current;
            if (current == 1) {
              // 如果已经在第一页，直接刷新就好了
              (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.reload();
            } else {
              (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.setPageInfo({
                current: 1,
                total: 0
              });
            }
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function resetLoadList() {
      return _ref2.apply(this, arguments);
    };
  }();
  // 刷新当前页面
  var reloadCurrentPage = function reloadCurrentPage() {
    var _tableRef$current3;
    return (_tableRef$current3 = tableRef.current) === null || _tableRef$current3 === void 0 ? void 0 : _tableRef$current3.reload();
  };
  // 关于删除
  var deleteSelectAndGetList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(length) {
      var _tableRef$current$pag, current, total, page, _tableRef$current4;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _tableRef$current$pag = tableRef.current.pageInfo, current = _tableRef$current$pag.current, total = _tableRef$current$pag.total;
            page = current - 1;
            if (page && +length === +pageCount.current) {
              // 删除的是当前页
              (_tableRef$current4 = tableRef.current) === null || _tableRef$current4 === void 0 ? void 0 : _tableRef$current4.setPageInfo({
                current: page ? page : 1,
                total: total - length
              });
            }
            if (page && +length > +pageCount.current) {
              // 批量删除大于当前页的数据，即跨多页删除了，就回到第一页
              resetLoadList();
            } else {
              reloadCurrentPage();
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function deleteSelectAndGetList(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var deleteAndGetList = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _tableRef$current$pag2, current, pageSize, total, page, _tableRef$current5, _tableRef$current6;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _tableRef$current$pag2 = tableRef.current.pageInfo, current = _tableRef$current$pag2.current, pageSize = _tableRef$current$pag2.pageSize, total = _tableRef$current$pag2.total;
            page = current - 1;
            if (page && total - page * pageSize === 1) {
              // 删除的是最后一项
              (_tableRef$current5 = tableRef.current) === null || _tableRef$current5 === void 0 ? void 0 : _tableRef$current5.setPageInfo({
                current: page,
                total: total - 1
              });
            } else {
              (_tableRef$current6 = tableRef.current) === null || _tableRef$current6 === void 0 ? void 0 : _tableRef$current6.reload();
            }
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function deleteAndGetList() {
      return _ref4.apply(this, arguments);
    };
  }();
  // options里面有ids(number)就是批量删除，否则默认是单个删除
  function deleteFunc(ajax, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$title = options.title,
      title = _options$title === void 0 ? '确定删除?' : _options$title,
      callback = options.callback,
      ids = options.ids,
      content = options.content,
      _options$okText = options.okText,
      okText = _options$okText === void 0 ? '删除' : _options$okText,
      _options$cancelText = options.cancelText,
      cancelText = _options$cancelText === void 0 ? '取消' : _options$cancelText,
      batchTitle = options.batchTitle;
    var asyncFunc = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", ajax(params));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function asyncFunc() {
        return _ref5.apply(this, arguments);
      };
    }();
    confirm(_objectSpread(_objectSpread({}, AntdConfig.mount), {}, {
      title: ids ? batchTitle ? batchTitle : "\u786E\u8BA4\u6279\u91CF\u5220\u9664".concat(ids.length, "\u6761\u6570\u636E\u5417?") : title,
      okText: okText,
      cancelText: cancelText,
      content: content,
      // icon:<QuestionCircleOutlined />,
      okButtonProps: {
        danger: true
      },
      onOk: function () {
        var _onOk = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var res;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return asyncFunc();
              case 3:
                res = _context5.sent;
                _context5.next = 6;
                return validateRes(res, 1);
              case 6:
                removeSelected();
                if (ids) {
                  deleteSelectAndGetList(ids.length);
                } else {
                  deleteAndGetList();
                }
                if (callback) callback();
                _context5.next = 14;
                break;
              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                console.log('删除失败的原因: ', _context5.t0);
              case 14:
              case "end":
                return _context5.stop();
            }
          }, _callee5, null, [[0, 11]]);
        }));
        function onOk() {
          return _onOk.apply(this, arguments);
        }
        return onOk;
      }()
    }));
  }
  // 关于更新，因为更新的确认框 title 很难统一，所以这里弄成必填了，更新之后只需要刷新当前列表页就好了
  function updateFunc(ajax, params, options) {
    var _options$isDelete = options.isDelete,
      isDelete = _options$isDelete === void 0 ? 0 : _options$isDelete,
      title = options.title,
      callback = options.callback,
      content = options.content,
      _options$okText2 = options.okText,
      okText = _options$okText2 === void 0 ? '确定' : _options$okText2,
      _options$cancelText2 = options.cancelText,
      cancelText = _options$cancelText2 === void 0 ? '取消' : _options$cancelText2;
    var asyncFunc = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", ajax(params));
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function asyncFunc() {
        return _ref6.apply(this, arguments);
      };
    }();
    return confirm(_objectSpread(_objectSpread({}, AntdConfig.mount), {}, {
      title: title,
      okText: okText,
      cancelText: cancelText,
      content: content,
      // icon:<CheckCircleOutlined />,
      okType: isDelete ? 'danger' : 'primary',
      onOk: function () {
        var _onOk2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
          var _tableRef$current7, res;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return asyncFunc();
              case 3:
                res = _context7.sent;
                _context7.next = 6;
                return validateRes(res, 1);
              case 6:
                removeSelected();
                (_tableRef$current7 = tableRef.current) === null || _tableRef$current7 === void 0 ? void 0 : _tableRef$current7.reload();
                if (callback) callback();
                _context7.next = 14;
                break;
              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](0);
                console.log('更新失败的原因: ', _context7.t0);
              case 14:
              case "end":
                return _context7.stop();
            }
          }, _callee7, null, [[0, 11]]);
        }));
        function onOk() {
          return _onOk2.apply(this, arguments);
        }
        return onOk;
      }()
    }));
  }
  // 因为列表页的获取接口有点特殊，分页参数是用的query，其他是用的body，所以做下额外处理
  function queryListFunc(_x2) {
    return _queryListFunc.apply(this, arguments);
  }
  function _queryListFunc() {
    _queryListFunc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(ajax) {
      var data,
        _resData$response$tot,
        _resData$response,
        _resData$response2,
        _resData$response$dat,
        _resData$response3,
        serviceData,
        res,
        resData,
        total,
        list,
        filterArr,
        _args8 = arguments;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            data = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
            _context8.prev = 1;
            serviceData = data;
            if (tableParamsChangeFunc) serviceData = tableParamsChangeFunc(data);
            _context8.next = 6;
            return ajax(serviceData);
          case 6:
            res = _context8.sent;
            resData = isUIResponse ? res : res.data;
            total = (_resData$response$tot = resData === null || resData === void 0 ? void 0 : (_resData$response = resData.response) === null || _resData$response === void 0 ? void 0 : _resData$response.totalCount) !== null && _resData$response$tot !== void 0 ? _resData$response$tot : 0;
            setTotalPage(resData === null || resData === void 0 ? void 0 : (_resData$response2 = resData.response) === null || _resData$response2 === void 0 ? void 0 : _resData$response2.totalPage);
            setTotalCount(total);
            list = (_resData$response$dat = resData === null || resData === void 0 ? void 0 : (_resData$response3 = resData.response) === null || _resData$response3 === void 0 ? void 0 : _resData$response3.dataList) !== null && _resData$response$dat !== void 0 ? _resData$response$dat : [];
            pageCount.current = list.length;
            setDataSource(list);
            // 得判断是否有禁用功能
            if (rowSelection && rowSelection.getCheckboxProps) {
              filterArr = [];
              list.map(function (val) {
                var _rowSelection$getChec;
                if (!((_rowSelection$getChec = rowSelection.getCheckboxProps(val)) === null || _rowSelection$getChec === void 0 ? void 0 : _rowSelection$getChec.disabled)) filterArr.push(val);
              });
              dataListSync.current = filterArr;
            } else {
              dataListSync.current = list;
            }
            // 目前全选只支持一万条，超出的翻页之后，也不需要自动加上
            // if (checkAll.current) {
            //   checkAllRows(false);
            //   // 这里需要把新加载进来的数据，丢进去备份的数据源里
            //   list.map((val: any) => {
            //     backupsData.current.selectIds.push(val[rowKey]);
            //     backupsData.current.selectRows.push(val);
            //   });
            // }
            return _context8.abrupt("return", {
              success: true,
              total: total,
              data: list
            });
          case 18:
            _context8.prev = 18;
            _context8.t0 = _context8["catch"](1);
            pageCount.current = 0;
            return _context8.abrupt("return", {
              success: true,
              total: 0,
              data: []
            });
          case 22:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 18]]);
    }));
    return _queryListFunc.apply(this, arguments);
  }
  useEffect(function () {
    if (selectedRowKeys.length) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [selectedRowKeys]);
  return {
    // 基础的table属性
    baseProps: {
      rowKey: rowKey,
      revalidateOnFocus: false,
      pagination: {
        showSizeChanger: true,
        defaultPageSize: 10,
        position: ['bottomCenter'],
        showQuickJumper: true,
        showTotal: function showTotal(total) {
          return "\u5171 ".concat(total, " \u6761");
        }
      },
      actionRef: tableRef,
      formRef: searchRef,
      scroll: {
        x: x,
        y: 'auto'
      }
    },
    // 需要复选框的话
    rowProps: {
      tableAlertRender: false,
      tableAlertOptionRender: false,
      rowSelection: _objectSpread({
        // 全选，取消全选
        // selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
        selections: openCheckAll ? [{
          key: '0',
          text: '全选',
          onSelect: function onSelect() {
            checkAllRows();
            options.checkAllCallback && options.checkAllCallback();
          }
        }, {
          key: '1',
          text: '取消全选',
          onSelect: removeSelected
        }] : null,
        selectedRowKeys: selectedRowKeys,
        onSelect: onSelect,
        onSelectAll: onSelectAll
      }, rowSelection)
    },
    // 用来控制，按钮的禁用状态，比如说没勾选的话需要禁用按钮
    selectStatus: disable,
    // 被勾选的行数据的id
    selectedRowKeys: selectedRowKeys,
    // 被勾选的行数据的数组对象
    selectedRowObj: selectObj.current,
    unSelectedRowKeys: unCheckedRowKeys.current,
    unSelectedRowObj: unCheckedRowObjs.current,
    setSelectedRowFunc: setSelectedRowFunc,
    // 取消勾选的数据
    removeSelected: removeSelected,
    // promise，如果没勾选数据，会message提示，返回勾选的ids
    hasSelected: hasSelected,
    // 删除之后重新刷新列表
    deleteFunc: deleteFunc,
    // 更新之后重新刷新列表页
    updateFunc: updateFunc,
    // 重新回到第一页
    resetLoadList: resetLoadList,
    queryListFunc: queryListFunc,
    totalPage: totalPage,
    searchRef: searchRef.current,
    tableRef: tableRef.current,
    reloadCurrentPage: reloadCurrentPage,
    total: totalCount,
    dataSource: dataSource,
    checkNumber: checkNumber,
    backupsFunc: backupsFunc,
    restoreFunc: restoreFunc,
    checkAllStatus: checkAll.current,
    editCheckItems: editCheckItems,
    setCheckAllStatusFunc: setCheckAllStatusFunc,
    setUnSelectedRowFunc: setUnSelectedRowFunc
  };
};
// 提交按钮，触发loading
export var useBtnLoading = function useBtnLoading() {
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  function beginSubmit(_x3) {
    return _beginSubmit.apply(this, arguments);
  }
  function _beginSubmit() {
    _beginSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(func) {
      var res;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return setLoading(true);
          case 3:
            _context9.next = 5;
            return func();
          case 5:
            res = _context9.sent;
            setTimeout(function () {
              setLoading(false);
            }, 20);
            return _context9.abrupt("return", res);
          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](0);
            console.log('error: ', _context9.t0);
            setLoading(false);
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 10]]);
    }));
    return _beginSubmit.apply(this, arguments);
  }
  return {
    loading: loading,
    beginSubmit: beginSubmit
  };
};