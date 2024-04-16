import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState, useMemo } from 'react';
import { message } from 'antd';
import KhtDrawerSearchProTable from '../drawer-search-pro-table';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getBindResidentList, bindCustomer, unBindCustomer, bindCustomerCarPlace, unBindCustomerCarPlace } from './api';
import Search from './components/search';
import BindConfirmModal from './components/bind-confirm-modal';
import { columns } from './columns';
import HistoryDrawer from './components/history-drawer';
import BusinessAccountPopover from '../check-popover';
import { debounce } from 'lodash';
import "./index.css";
export default function SelectBindResident(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? '已绑定住户' : _props$title,
    _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$width = props.width,
    width = _props$width === void 0 ? 800 : _props$width,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    customerId = props.customerId,
    customerName = props.customerName,
    _props$showFooter = props.showFooter,
    showFooter = _props$showFooter === void 0 ? true : _props$showFooter,
    onClose = props.onClose,
    remark = props.remark;
  var bindResidenceRef = useRef();
  var searchRef = useRef();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    searchData = _useState4[0],
    setSearchData = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    historyOpen = _useState6[0],
    setHistoryOpen = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    bindConfirmOpen = _useState8[0],
    setBindConfirmOpen = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    bindDataKey = _useState10[0],
    setBindDataKey = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    bindData = _useState12[0],
    setBindData = _useState12[1];
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    isBind = _useState14[0],
    setIsBind = _useState14[1];
  var _useState15 = useState('1'),
    _useState16 = _slicedToArray(_useState15, 2),
    bindType = _useState16[0],
    setBindType = _useState16[1]; //绑定类型 1表示住宅 2表示车位
  var identityMap = {
    family: '家属',
    proprietor: '业主',
    tenant: '租户',
    tenant_family: '租户家属',
    tenantFamily: '租户家属'
  };
  var handleClose = function handleClose() {
    onClose && onClose();
  };
  //过滤条件
  var onSearch = debounce(function (data) {
    var _bindResidenceRef$cur, _bindResidenceRef$cur2;
    setSearchData(data);
    (_bindResidenceRef$cur = bindResidenceRef.current) === null || _bindResidenceRef$cur === void 0 ? void 0 : _bindResidenceRef$cur.setInitTableCurrentPage(1); //重置分页
    (_bindResidenceRef$cur2 = bindResidenceRef.current) === null || _bindResidenceRef$cur2 === void 0 ? void 0 : _bindResidenceRef$cur2.initTableReload();
  }, 500);
  //查询列表
  var requestTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, residentType, searchInfo, communityType, projectId, residentBodyParams, method, bodyParams, res, _ref2, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            residentType = searchData.residentType, searchInfo = searchData.searchInfo, communityType = searchData.communityType, projectId = searchData.projectId;
            residentBodyParams = {
              id: customerId || 'ff57509813094ed8bbc41adeb61173ad',
              communityTreeCode: (projectId === null || projectId === void 0 ? void 0 : projectId.length) ? projectId[0] : '',
              communityType: communityType,
              searchInfo: searchInfo,
              type: residentType,
              bindStatus: 1 //已绑定
            };
            method = getBindResidentList;
            bodyParams = residentBodyParams;
            _context.next = 7;
            return method(bodyParams, {
              pageSize: pageSize,
              currentPage: currentPage
            });
          case 7:
            res = _context.sent;
            _ref2 = res || {}, dataList = _ref2.dataList, totalCount = _ref2.totalCount;
            setTotal(totalCount || 0);
            return _context.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTableData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  //新增绑定
  var handleAdd = function handleAdd(idList, data, type) {
    setIsBind(true);
    setBindConfirmOpen(true);
    setBindDataKey(idList);
    setBindData(data);
    setBindType(type);
  };
  //绑定住户
  var handleBindConfirmOk = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(isAllBind) {
      var _bindResidenceRef$cur3, _bindResidenceRef$cur4, _searchRef$current;
      var bindParams, unBindParams, bindCarPlaceParams, lastBindParams, lastBindMethod, lastUnBindMethod, params, method, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            bindParams = {
              isAllBind: isAllBind,
              id: customerId || 'ff57509813094ed8bbc41adeb61173ad',
              residentHouseId: bindDataKey === null || bindDataKey === void 0 ? void 0 : bindDataKey.join(),
              operateClient: 1
            };
            unBindParams = {
              isAllUnBind: isAllBind,
              id: bindDataKey === null || bindDataKey === void 0 ? void 0 : bindDataKey.join(),
              operateClient: 1
            };
            bindCarPlaceParams = {
              isAllBind: isAllBind,
              id: customerId || 'ff57509813094ed8bbc41adeb61173ad',
              carPlaceResidentId: bindDataKey === null || bindDataKey === void 0 ? void 0 : bindDataKey.join()
            };
            if (bindDataKey.length) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return");
          case 5:
            lastBindParams = bindType == '2' ? bindCarPlaceParams : bindParams; //最终绑定参数
            lastBindMethod = bindType == '2' ? bindCustomerCarPlace : bindCustomer; //最终绑定接口
            lastUnBindMethod = bindType == '2' ? unBindCustomerCarPlace : unBindCustomer; //最终解绑接口
            params = isBind ? lastBindParams : unBindParams;
            method = isBind ? lastBindMethod : lastUnBindMethod;
            _context2.next = 12;
            return method(params);
          case 12:
            res = _context2.sent;
            console.log('res', res);
            message.success("".concat(isBind ? '绑定' : '解绑', "\u6210\u529F"));
            (_bindResidenceRef$cur3 = bindResidenceRef.current) === null || _bindResidenceRef$cur3 === void 0 ? void 0 : _bindResidenceRef$cur3.setInitTableCurrentPage(1); //重置分页
            (_bindResidenceRef$cur4 = bindResidenceRef.current) === null || _bindResidenceRef$cur4 === void 0 ? void 0 : _bindResidenceRef$cur4.initTableReload();
            //重置绑定弹窗
            (_searchRef$current = searchRef.current) === null || _searchRef$current === void 0 ? void 0 : _searchRef$current.resetAddBindStatus();
            setBindConfirmOpen(false);
            setIsBind(true);
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleBindConfirmOk(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var unbinding = function unbinding(item) {
    setBindData([item] || []);
    setBindDataKey((item === null || item === void 0 ? void 0 : item.customerResidentId) ? [item.customerResidentId] : []);
    setIsBind(false);
    setBindConfirmOpen(true);
  };
  var operateColumns = [{
    title: '操作',
    width: 55,
    key: 'option',
    valueType: 'option',
    render: function render(text, record) {
      return record.bindStatus === 1 ? /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return unbinding(record);
        }
      }, "\u89E3\u7ED1") : null;
    }
  }];
  var columnsData = useMemo(function () {
    var communityType = searchData.communityType;
    var newColumns = columns.map(function (item) {
      if (item.dataIndex === 'type') {
        if (communityType === 'carPlace') {
          return _objectSpread(_objectSpread({}, item), {}, {
            render: function render(text, record) {
              if (record.type == 'proprietor') {
                return '车位业主';
              } else {
                return identityMap[record.type];
              }
            }
          });
        }
        return item;
      }
      if (item.dataIndex === 'name') {
        if (communityType === 'carPlace') {
          return _objectSpread(_objectSpread({}, item), {}, {
            render: function render(text, record) {
              return /*#__PURE__*/React.createElement(BusinessAccountPopover, {
                name: record.name,
                id: record.residentHouseId,
                type: "carPlace",
                trigger: "hover",
                zIndex: 2002,
                placement: "bottomLeft",
                getPopupContainer: function getPopupContainer() {
                  return document.querySelector('#root');
                }
              });
            }
          });
        }
        return item;
      }
      return item;
    });
    return operateColumns ? [].concat(_toConsumableArray(newColumns), operateColumns) : _toConsumableArray(newColumns);
  }, [operateColumns, searchData]);
  var titleGround = function titleGround() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '16px'
      }
    }, "\u5BA2\u6237\uFF1A", customerName, remark ? "\uFF08".concat(remark, "\uFF09") : ''));
  };
  var initFooter = showFooter && /*#__PURE__*/React.createElement("div", {
    className: "footer-content-wrapper"
  }, /*#__PURE__*/React.createElement(ClockCircleOutlined, null), /*#__PURE__*/React.createElement("span", {
    className: "footer-btn",
    onClick: function onClick() {
      setHistoryOpen(true);
    }
  }, "\u5386\u53F2\u7ED1\u5B9A\u4F4F\u6237"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    drawerClassName: "select-bind-resident-drawer",
    open: open,
    title: title,
    onClose: handleClose,
    width: width,
    rowKey: rowKey,
    selectType: 'readOnly',
    selectedRowKeys: [],
    ref: bindResidenceRef,
    columns: columnsData,
    total: total,
    requestTable: function () {
      var _requestTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(params) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return requestTableData(params);
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function requestTable(_x3) {
        return _requestTable.apply(this, arguments);
      }
      return requestTable;
    }(),
    searchName: "searchInfo",
    radioSelectName: "name",
    titleGround: titleGround(),
    searchForm: /*#__PURE__*/React.createElement(Search, {
      type: "init",
      rowKey: rowKey,
      tableLayoutContainerRef: bindResidenceRef,
      ref: searchRef,
      onAdd: handleAdd,
      customerId: customerId
    }),
    searchInputPlaceholder: "\u641C\u7D22",
    footer: initFooter,
    onSearch: onSearch
  }), /*#__PURE__*/React.createElement(BindConfirmModal, {
    bindOpen: bindConfirmOpen,
    isBind: isBind,
    bindData: bindData,
    customerName: customerName,
    remark: remark,
    onClose: function onClose() {
      setBindConfirmOpen(false);
    },
    onOk: handleBindConfirmOk
  }), /*#__PURE__*/React.createElement(HistoryDrawer, {
    open: historyOpen,
    customerId: customerId,
    customerName: customerName,
    onClose: function onClose() {
      setHistoryOpen(false);
    }
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};