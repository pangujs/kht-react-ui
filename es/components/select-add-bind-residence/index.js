import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Button, Tabs } from 'antd';
import { getAddBindList, getAddBindCarPlaceList } from './api';
import KhtDrawerSearchProTable from '../drawer-search-pro-table';
import Search from './components/search';
import { residentColumns, carColumns } from './columns';
import { debounce } from 'lodash';
import "./index.css";
export default function SelectAddBindResidence(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? '添加绑定住户' : _props$title,
    _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'radio' : _props$selectType,
    _props$width = props.width,
    width = _props$width === void 0 ? 700 : _props$width,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    defaultRowKeys = props.defaultRowKeys,
    defaultTabKey = props.defaultTabKey,
    onClose = props.onClose,
    onOk = props.onOk;
  var bindResidenceRef = useRef();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    total = _useState2[0],
    setTotal = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    searchData = _useState4[0],
    setSearchData = _useState4[1];
  var _useState5 = useState('1'),
    _useState6 = _slicedToArray(_useState5, 2),
    activeTabKey = _useState6[0],
    setActiveTabKey = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectKeyData = _useState8[0],
    setSelectKeyData = _useState8[1];
  var handleClose = function handleClose() {
    setActiveTabKey('1');
    onClose && onClose();
  };
  //过滤条件
  var onSearch = debounce(function (data) {
    var _bindResidenceRef$cur, _bindResidenceRef$cur2;
    console.log('data', data);
    setSearchData(data);
    (_bindResidenceRef$cur = bindResidenceRef.current) === null || _bindResidenceRef$cur === void 0 ? void 0 : _bindResidenceRef$cur.setInitTableCurrentPage(1); //重置分页
    (_bindResidenceRef$cur2 = bindResidenceRef.current) === null || _bindResidenceRef$cur2 === void 0 ? void 0 : _bindResidenceRef$cur2.initTableReload();
  }, 500);
  //查询列表
  var requestTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var pageSize, currentPage, residentType, searchInfo, businessType, _searchData$projectId, projectId, _searchData$assetData, assetData, residentBodyParams, carBodyParams, list, carList, method, bodyParams, res, _ref4, dataList, totalCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = params.pageSize, currentPage = params.current;
            residentType = searchData.residentType, searchInfo = searchData.searchInfo, businessType = searchData.businessType, _searchData$projectId = searchData.projectId, projectId = _searchData$projectId === void 0 ? '' : _searchData$projectId, _searchData$assetData = searchData.assetData, assetData = _searchData$assetData === void 0 ? [] : _searchData$assetData;
            residentBodyParams = {
              searchInfo: searchInfo,
              businessType: businessType,
              type: residentType,
              bindStatus: 1 //未绑定
            };
            carBodyParams = {
              carPlaceResidentName: searchInfo,
              businessType: businessType,
              residentType: 'proprietor',
              bindStatus: 1 //未绑定，
              // estateTableType: 'organization',
              // estateTableId: '1'
            };

            if (projectId) {
              residentBodyParams['sourceTableId'] = projectId;
              residentBodyParams['sourceTableType'] = 'community';
              carBodyParams['estateTableId'] = projectId;
              carBodyParams['estateTableType'] = 'community';
            }
            if (assetData.length) {
              list = assetData.map(function (_ref2) {
                var id = _ref2.id,
                  sourceTableType = _ref2.sourceTableType;
                return {
                  sourceTableId: id,
                  sourceTableType: sourceTableType
                };
              });
              carList = assetData.map(function (_ref3) {
                var id = _ref3.id,
                  sourceTableType = _ref3.sourceTableType;
                return {
                  estateTableId: id,
                  estateTableType: sourceTableType
                };
              });
              residentBodyParams['sourceTableIdList'] = list;
              carBodyParams['estateTableIdList'] = carList;
            }
            method = activeTabKey === '1' ? getAddBindList : getAddBindCarPlaceList;
            bodyParams = activeTabKey === '1' ? residentBodyParams : carBodyParams;
            _context.next = 10;
            return method(bodyParams, {
              pageSize: pageSize,
              currentPage: currentPage
            });
          case 10:
            res = _context.sent;
            _ref4 = res || {}, dataList = _ref4.dataList, totalCount = _ref4.totalCount;
            setTotal(totalCount || 0);
            return _context.abrupt("return", {
              data: dataList || [],
              success: true
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function requestTableData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var showBindConfirm = function showBindConfirm() {
    var _bindResidenceRef$cur3, _bindResidenceRef$cur4;
    var selectedRowKey = (_bindResidenceRef$cur3 = bindResidenceRef.current) === null || _bindResidenceRef$cur3 === void 0 ? void 0 : _bindResidenceRef$cur3.initSelectedRowKeys;
    var selectedRow = (_bindResidenceRef$cur4 = bindResidenceRef.current) === null || _bindResidenceRef$cur4 === void 0 ? void 0 : _bindResidenceRef$cur4.initTableSelectedRows;
    onOk && onOk(selectedRowKey, selectedRow, activeTabKey);
  };
  var disabled = useMemo(function () {
    return selectKeyData.length ? false : true;
  }, [selectKeyData]);
  //columns
  var columns = useMemo(function () {
    return activeTabKey === '1' ? residentColumns : carColumns;
  }, [activeTabKey]);
  useEffect(function () {
    var _bindResidenceRef$cur5, _bindResidenceRef$cur6, _bindResidenceRef$cur7;
    (_bindResidenceRef$cur5 = bindResidenceRef.current) === null || _bindResidenceRef$cur5 === void 0 ? void 0 : _bindResidenceRef$cur5.setInitTableFieldsValue({
      residentType: undefined,
      businessType: undefined,
      searchInfo: undefined
    });
    (_bindResidenceRef$cur6 = bindResidenceRef.current) === null || _bindResidenceRef$cur6 === void 0 ? void 0 : _bindResidenceRef$cur6.setInitTableCurrentPage(1); //重置分页
    (_bindResidenceRef$cur7 = bindResidenceRef.current) === null || _bindResidenceRef$cur7 === void 0 ? void 0 : _bindResidenceRef$cur7.setInitSelectedRowKeys([]); //重置已选的值
    //bindResidenceRef.current?.initTableReload()
  }, [activeTabKey]);
  //初始化tab
  useEffect(function () {
    if (defaultTabKey) {
      setActiveTabKey(defaultTabKey);
    }
  }, [defaultTabKey]);
  var titleGround = function titleGround() {
    var items = [{
      key: '1',
      label: '住宅'
    }, {
      key: '2',
      label: '车位'
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabs, {
      defaultActiveKey: activeTabKey,
      className: "tab-wrapper",
      items: items,
      onChange: function onChange(data) {
        console.log('data', data);
        setActiveTabKey(data);
      }
    }));
  };
  var initFooter = /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    disabled: disabled,
    onClick: showBindConfirm
  }, "\u7ED1\u5B9A");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerSearchProTable, {
    open: open,
    title: title,
    onClose: handleClose,
    width: width,
    rowKey: rowKey,
    selectType: selectType,
    selectedRowKeys: defaultRowKeys,
    ref: bindResidenceRef,
    columns: columns,
    total: total,
    requestTable: function () {
      var _requestTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return requestTableData(params);
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function requestTable(_x2) {
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
      activeTabKey: activeTabKey
    }),
    searchInputPlaceholder: "\u641C\u7D22",
    footer: initFooter,
    onSearch: onSearch,
    onSelectedChange: function onSelectedChange(keyData) {
      setSelectKeyData(keyData);
    }
  }));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var Events = function Events(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};