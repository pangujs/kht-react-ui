import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import KhtDrawerTree from '../drawer-tree';
import { message } from 'antd';
import { getInstitutionalAssetsTree, getInstitutionalAssetsExtResidentData, getAdminInstitutionalAssetsTree, getAdminInstitutionalAssetsExtResidentData, getInstitutionalAssetsFullName } from '../../http/api';
import { KhtBusinessInstitutionalIconType } from '../business-institutional-assets-tree';
import { businessType } from '../business-institutional-assets-tree';
import AccountPopover from '../business-account-popover';
var BusinessAssetsDrawerTree = /*#__PURE__*/forwardRef(function (props, modalTreeRef) {
  var _props$paramsType;
  var MULTIPLE = props.multiple || typeof props.multiple == 'undefined';
  var SELECTABLE = props.selectable || typeof props.selectable == 'undefined';
  var DestoryOnClose = props.destroyOnClose || typeof props.destroyOnClose == 'undefined';
  var ISPAGELOAD = props.isPageLoad || typeof props.isPageLoad == 'undefined';
  var LOADRESIDENT = props.loadResident || typeof props.loadResident == 'undefined';
  var FETCHCUSTOM = props.fetchCustom || typeof props.fetchCustom == 'undefined';
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    treeData = _useState2[0],
    setTreeData = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultExpandedKeys = _useState4[0],
    setDefaultExpandedKeys = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    expandedKeys = _useState6[0],
    setExpandedKeys = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    defaultCheckedItems = _useState8[0],
    setDefaultCheckedItems = _useState8[1];
  var _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    _props$disableChild = props.disableChild,
    disableChild = _props$disableChild === void 0 ? false : _props$disableChild,
    _props$showAccountPop = props.showAccountPopover,
    showAccountPopover = _props$showAccountPop === void 0 ? true : _props$showAccountPop;
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    loadedKeys = _useState10[0],
    setLoadedKeys = _useState10[1];
  console.log('%c Line:207 🥓 props========机构', 'color:#b03734', (_props$paramsType = props.paramsType) === null || _props$paramsType === void 0 ? void 0 : _props$paramsType.companyCode);
  var residentType = {
    family: '家属',
    proprietor: '业主',
    tenant: '租户',
    tenantFamily: '租户家属',
    tenant_family: '租户家属'
  };
  /** 确认按钮的回调 */
  var ok = function ok(selectNode) {
    console.log('已选取的数据', selectNode);
    setDefaultCheckedItems(selectNode);
    props.ok && props.ok(selectNode);
  };
  /** 超管 - 资产树 */
  var getAaminAssets = function getAaminAssets() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
    var sourceTableType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'organization';
    var queryType = arguments.length > 2 ? arguments[2] : undefined;
    var name = arguments.length > 3 ? arguments[3] : undefined;
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve) {
        var _props$paramsType2;
        var param, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if ((_props$paramsType2 = props.paramsType) === null || _props$paramsType2 === void 0 ? void 0 : _props$paramsType2.companyCode) {
                _context.next = 3;
                break;
              }
              message.error('超管 - 资产树，未获取到 companyCode 参数');
              return _context.abrupt("return");
            case 3:
              param = {
                parentId: id,
                sourceTableType: sourceTableType,
                name: name,
                type: ''
              };
              if (queryType == 'search') {
                param = {
                  name: name
                };
              }
              if (props.paramsType && Object.keys(props.paramsType).length) {
                if (queryType == 'root') {
                  param = _objectSpread(_objectSpread({}, param), props.paramsType);
                }
                if (queryType == 'children') {
                  param = _objectSpread(_objectSpread({}, props.paramsType), param);
                }
              }
              _context.next = 8;
              return getAdminInstitutionalAssetsTree(param);
            case 8:
              result = _context.sent;
              resolve(result);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };
  /** 中台 - 资产树 */
  var getCustomAssets = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var id,
        sourceTableType,
        queryType,
        name,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            id = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : '0';
            sourceTableType = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 'organization';
            queryType = _args3.length > 2 ? _args3[2] : undefined;
            name = _args3.length > 3 ? _args3[3] : undefined;
            return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
                var param, result;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      param = {
                        parentId: id,
                        sourceTableType: sourceTableType,
                        type: ''
                      };
                      if (queryType == 'search') {
                        param = {
                          name: name
                        };
                      }
                      if (props.paramsType && Object.keys(props.paramsType).length) {
                        if (queryType == 'root') {
                          param = _objectSpread(_objectSpread({}, param), props.paramsType);
                        }
                        if (queryType == 'children') {
                          param = _objectSpread(_objectSpread(_objectSpread({}, props.paramsType), param), {}, {
                            type: props.paramsType.type || ''
                          });
                        }
                      }
                      _context2.next = 5;
                      return getInstitutionalAssetsTree(param);
                    case 5:
                      result = _context2.sent;
                      resolve(result);
                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }()));
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getCustomAssets() {
      return _ref2.apply(this, arguments);
    };
  }();
  /** 超管 - 资产树下的业户数据 */
  var getAaminAssetsResident = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id, sourceTableType, name) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve) {
                var _props$paramsType3;
                var param, result;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      if ((_props$paramsType3 = props.paramsType) === null || _props$paramsType3 === void 0 ? void 0 : _props$paramsType3.companyCode) {
                        _context4.next = 3;
                        break;
                      }
                      message.error('超管 - 资产树，未获取到 companyCode 参数');
                      return _context4.abrupt("return");
                    case 3:
                      param = {
                        parentId: id,
                        sourceTableType: sourceTableType,
                        searchInfo: name,
                        type: 'house'
                      };
                      if (props.paramsType && Object.keys(props.paramsType).length) {
                        param = _objectSpread(_objectSpread(_objectSpread({}, props.paramsType), param), {}, {
                          type: props.paramsType.type || ''
                        });
                      }
                      _context4.next = 7;
                      return getAdminInstitutionalAssetsExtResidentData(param);
                    case 7:
                      result = _context4.sent;
                      resolve(result);
                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function (_x6) {
                return _ref5.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function getAaminAssetsResident(_x3, _x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  /** 中台 - 资产树下的业户数据 */
  var getCustomAssetsResident = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id, sourceTableType, name) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve) {
                var param, result;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      param = {
                        parentId: id,
                        sourceTableType: sourceTableType,
                        searchInfo: name,
                        type: 'house'
                      };
                      if (props.paramsType && Object.keys(props.paramsType).length) {
                        param = _objectSpread(_objectSpread(_objectSpread({}, props.paramsType), param), {}, {
                          type: props.paramsType.type || ''
                        });
                      }
                      _context6.next = 4;
                      return getInstitutionalAssetsExtResidentData(param);
                    case 4:
                      result = _context6.sent;
                      resolve(result);
                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              return function (_x10) {
                return _ref7.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function getCustomAssetsResident(_x7, _x8, _x9) {
      return _ref6.apply(this, arguments);
    };
  }();
  /** 请求根节点 */
  var postDeptUserTreeData = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _result$response;
      var result, data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            result = {};
            if (!FETCHCUSTOM) {
              _context8.next = 5;
              break;
            }
            _context8.next = 4;
            return getCustomAssets('0', 'organization', 'root');
          case 4:
            result = _context8.sent;
          case 5:
            if (FETCHCUSTOM) {
              _context8.next = 9;
              break;
            }
            _context8.next = 8;
            return getAaminAssets('0', 'organization', 'root');
          case 8:
            result = _context8.sent;
          case 9:
            data = (_result$response = result.response) === null || _result$response === void 0 ? void 0 : _result$response.map(function (item) {
              var _objectSpread2;
              return _objectSpread(_objectSpread({}, item), {}, (_objectSpread2 = {
                title: item.name,
                key: item.id,
                icon: KhtBusinessInstitutionalIconType[item.sourceTableType]
              }, _defineProperty(_objectSpread2, item.sourceTableType, item.sourceTableType), _defineProperty(_objectSpread2, "selectable", !props.isReviewMode), _objectSpread2));
            });
            if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
              setTreeData(data);
              setExpandedKeys([data[0].key]);
              setDefaultExpandedKeys([data[0].key]);
            }
          case 11:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function postDeptUserTreeData() {
      return _ref8.apply(this, arguments);
    };
  }();
  /** 回车事件回调 */
  var onSearchTreeData = function onSearchTreeData(e) {
    return new Promise( /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve) {
        var _result$response2;
        var value, result, userResult, userData, _userResult$response, _userResult$response$, _userResult$response$2, postData, searchData;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              value = e.target.value;
              result = {};
              if (!FETCHCUSTOM) {
                _context9.next = 6;
                break;
              }
              _context9.next = 5;
              return getCustomAssets(undefined, undefined, 'search', value);
            case 5:
              result = _context9.sent;
            case 6:
              if (FETCHCUSTOM) {
                _context9.next = 10;
                break;
              }
              _context9.next = 9;
              return getAaminAssets(undefined, undefined, 'search', value);
            case 9:
              result = _context9.sent;
            case 10:
              userResult = {};
              userData = [];
              if (!LOADRESIDENT) {
                _context9.next = 22;
                break;
              }
              if (!FETCHCUSTOM) {
                _context9.next = 17;
                break;
              }
              _context9.next = 16;
              return getCustomAssetsResident(undefined, undefined, value);
            case 16:
              userResult = _context9.sent;
            case 17:
              if (FETCHCUSTOM) {
                _context9.next = 21;
                break;
              }
              _context9.next = 20;
              return getAaminAssetsResident(undefined, undefined, value);
            case 20:
              userResult = _context9.sent;
            case 21:
              userData = (_userResult$response = userResult.response) === null || _userResult$response === void 0 ? void 0 : (_userResult$response$ = _userResult$response[0]) === null || _userResult$response$ === void 0 ? void 0 : (_userResult$response$2 = _userResult$response$.residentBindHouseList) === null || _userResult$response$2 === void 0 ? void 0 : _userResult$response$2.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  id: props.residentHouseId || item.residentHouseId,
                  key: props.residentHouseId || item.residentHouseId,
                  title: "".concat(item.name, " (").concat(residentType[item.type], ")"),
                  icon: KhtBusinessInstitutionalIconType.noSub,
                  noSub: 'noSub',
                  isLeaf: true,
                  selectable: !props.isReviewMode
                });
              });
            case 22:
              postData = (_result$response2 = result.response) === null || _result$response2 === void 0 ? void 0 : _result$response2.map(function (item) {
                var _objectSpread3;
                return _objectSpread(_objectSpread({}, item), {}, (_objectSpread3 = {
                  title: item.name,
                  key: item.id,
                  isLeaf: true,
                  icon: KhtBusinessInstitutionalIconType[item.sourceTableType]
                }, _defineProperty(_objectSpread3, item.sourceTableType, item.sourceTableType), _defineProperty(_objectSpread3, "selectable", !props.isReviewMode), _objectSpread3));
              });
              searchData = postData.concat(userData || []) || [];
              if (props.loaderLevel) {
                searchData = searchData.filter(function (item) {
                  if (businessType[props.loaderLevel || 'house'] >= businessType[item.sourceTableType]) {
                    return true;
                  }
                  return false;
                });
              }
              setTreeData(searchData);
              resolve(undefined);
            case 27:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      return function (_x11) {
        return _ref9.apply(this, arguments);
      };
    }());
  };
  /** 懒加载子节点 */
  var loadData = function loadData(_ref10) {
    var key = _ref10.key,
      children = _ref10.children,
      id = _ref10.id,
      sourceTableType = _ref10.sourceTableType;
    return new Promise( /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve) {
        var result, childrenData, _result$response3, _result$response3$, _result$response3$$re, _result$response4;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!(children && children.length)) {
                _context10.next = 3;
                break;
              }
              resolve({
                data: [],
                key: ''
              });
              return _context10.abrupt("return");
            case 3:
              result = {};
              childrenData = [];
              if (!(LOADRESIDENT && sourceTableType == 'house')) {
                _context10.next = 17;
                break;
              }
              if (!FETCHCUSTOM) {
                _context10.next = 10;
                break;
              }
              _context10.next = 9;
              return getCustomAssetsResident(id, sourceTableType);
            case 9:
              result = _context10.sent;
            case 10:
              if (FETCHCUSTOM) {
                _context10.next = 14;
                break;
              }
              _context10.next = 13;
              return getAaminAssetsResident(id, sourceTableType);
            case 13:
              result = _context10.sent;
            case 14:
              /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
              childrenData = (_result$response3 = result.response) === null || _result$response3 === void 0 ? void 0 : (_result$response3$ = _result$response3[0]) === null || _result$response3$ === void 0 ? void 0 : (_result$response3$$re = _result$response3$.residentBindHouseList) === null || _result$response3$$re === void 0 ? void 0 : _result$response3$$re.map(function (item) {
                var _objectSpread4;
                return _objectSpread(_objectSpread({}, item), {}, (_objectSpread4 = {
                  id: props.residentHouseId || item.residentHouseId,
                  key: props.residentHouseId || item.residentHouseId,
                  title: "".concat(item.name, " (").concat(residentType[item.type], ")"),
                  icon: KhtBusinessInstitutionalIconType.noSub
                }, _defineProperty(_objectSpread4, result.response[0].sourceTableType, result.response[0].sourceTableType), _defineProperty(_objectSpread4, "isLeaf", true), _defineProperty(_objectSpread4, "selectable", !props.isReviewMode), _objectSpread4));
              });
              _context10.next = 26;
              break;
            case 17:
              if (!FETCHCUSTOM) {
                _context10.next = 21;
                break;
              }
              _context10.next = 20;
              return getCustomAssets(id, sourceTableType, 'children');
            case 20:
              result = _context10.sent;
            case 21:
              if (FETCHCUSTOM) {
                _context10.next = 25;
                break;
              }
              _context10.next = 24;
              return getAaminAssets(id, sourceTableType, 'children');
            case 24:
              result = _context10.sent;
            case 25:
              /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
              childrenData = (_result$response4 = result.response) === null || _result$response4 === void 0 ? void 0 : _result$response4.map(function (item) {
                var _objectSpread5;
                return _objectSpread(_objectSpread({}, item), {}, (_objectSpread5 = {
                  key: item.id,
                  title: item.name,
                  icon: KhtBusinessInstitutionalIconType[item.sourceTableType]
                }, _defineProperty(_objectSpread5, item.sourceTableType, item.sourceTableType), _defineProperty(_objectSpread5, "isLeaf", LOADRESIDENT && sourceTableType == 'house'), _defineProperty(_objectSpread5, "children", []), _defineProperty(_objectSpread5, "selectable", !props.isReviewMode), _objectSpread5));
              });
            case 26:
              if (props.loaderLevel) {
                // 过滤掉其它层级类型
                childrenData = childrenData.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    isLeaf: item.sourceTableType == props.loaderLevel,
                    selectable: !props.isReviewMode
                  });
                });
                childrenData = childrenData.filter(function (item) {
                  if (businessType[props.loaderLevel || 'house'] >= businessType[item.sourceTableType]) {
                    return true;
                  }
                  return false;
                });
              }
              resolve({
                data: childrenData || [],
                key: key
              });
            case 28:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      return function (_x12) {
        return _ref11.apply(this, arguments);
      };
    }());
  };
  /** 点击加载更多时的回调  ---- 暂时无用，接口未分页 */
  var onLoadMore = function onLoadMore(currentData) {
    return new Promise( /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve) {
        var users, userData, user;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return getInstitutionalAssetsTree({
                departmentCode: currentData.parentNode.code,
                currentPage: currentData.page.pageNo
              });
            case 2:
              users = _context11.sent;
              userData = users.response;
              user = userData.dataList.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  key: item.id,
                  title: item.name,
                  icon: KhtBusinessInstitutionalIconType.noSub,
                  fullTitle: item === null || item === void 0 ? void 0 : item.employeeDeptInfoList.map(function (keys) {
                    return keys.fullName;
                  }).join('、'),
                  isLeaf: true,
                  selectable: !props.isReviewMode
                });
              });
              resolve({
                data: user,
                key: currentData.parentKey,
                total: userData.totalCount
              });
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      return function (_x13) {
        return _ref12.apply(this, arguments);
      };
    }());
  };
  var onLoad = function onLoad(loadedKeys) {
    console.log('onLoad', loadedKeys);
    setLoadedKeys(loadedKeys);
  };
  var onExpand = function onExpand(loadedKeys) {
    console.log('onExpand', loadedKeys);
    setExpandedKeys(loadedKeys);
  };
  /** 自定义请求 tooltipContent 内容 */
  var customTooltipContent = function customTooltipContent(treeNode) {
    return new Promise( /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve) {
        var result, fullName;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return getInstitutionalAssetsFullName({
                sourceTableId: treeNode.id,
                sourceTableType: treeNode.sourceTableType
              });
            case 2:
              result = _context12.sent;
              fullName = result.success ? result.response : '暂无资料';
              resolve({
                fullName: fullName
              });
            case 5:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      return function (_x14) {
        return _ref13.apply(this, arguments);
      };
    }());
  };
  useEffect(function () {
    if (props.open) {
      console.log('TreeData', treeData);
    }
    if (props.open && (DestoryOnClose || treeData.length == 0)) {
      var _props$customRootNode;
      console.log('open');
      if (!props.customRootNode || !((_props$customRootNode = props.customRootNode) === null || _props$customRootNode === void 0 ? void 0 : _props$customRootNode.length)) postDeptUserTreeData();
    }
  }, [props.open]);
  useEffect(function () {
    var _props$customRootNode2;
    if ((_props$customRootNode2 = props.customRootNode) === null || _props$customRootNode2 === void 0 ? void 0 : _props$customRootNode2.length) {
      console.log('执行设置根节点');
      setLoadedKeys([]);
      setExpandedKeys([]);
      setTreeData([]);
      var openKeys = [];
      var rootNode = props.customRootNode;
      setTimeout(function () {
        var root = rootNode.map(function (item) {
          openKeys.push(item.key);
          return _objectSpread(_objectSpread({}, item), {}, {
            isLeaf: false,
            selectable: !props.isReviewMode
          });
        });
        setTreeData(root);
        setExpandedKeys(openKeys);
      }, 100);
    } else {
      postDeptUserTreeData();
    }
  }, [props.customRootNode]);
  useEffect(function () {
    setDefaultCheckedItems(props.defaultCheckedItems);
  }, [props.defaultCheckedItems]);
  useImperativeHandle(modalTreeRef, function () {
    return {
      reset: function reset() {
        setDefaultCheckedItems([]);
      }
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtDrawerTree, {
    cancel: props.cancel,
    ok: ok,
    drawerProps: {
      title: props.title,
      open: props.open,
      destroyOnClose: props.destroyOnClose || false,
      width: props.width || 480,
      maskClosable: maskClosable
    },
    treeProps: {
      showIcon: true,
      treeData: treeData,
      selectable: SELECTABLE,
      multiple: MULTIPLE,
      defaultExpandedKeys: defaultExpandedKeys,
      expandedKeys: expandedKeys,
      showTooltip: props.showTooltip || false,
      isPageLoad: !ISPAGELOAD,
      canSelect: props.canSelect,
      pageSize: props.pageSize,
      onSearchTreeData: onSearchTreeData,
      loadData: loadData,
      onLoadMore: onLoadMore,
      blockNode: true,
      customTooltipContent: customTooltipContent,
      onLoad: onLoad,
      loadedKeys: loadedKeys,
      onExpand: onExpand,
      // showTooltip: false,
      disableChild: disableChild,
      nameRender: LOADRESIDENT ? function (treeNode) {
        if (treeNode.isLeaf && treeNode.noSub && showAccountPopover) {
          return /*#__PURE__*/React.createElement(AccountPopover, {
            name: treeNode.title,
            id: treeNode.id,
            type: treeNode.type
          });
        } else {
          return treeNode.title;
        }
      } : false
    },
    inputProps: _objectSpread({}, props.inputProps),
    defaultCheckedItems: defaultCheckedItems,
    showNodeParents: props.showNodeParents,
    isReviewMode: props.isReviewMode,
    toolTipProps: {
      getPopupContainer: function getPopupContainer(node) {
        return (node === null || node === void 0 ? void 0 : node.parentElement) || document.body;
      },
      placement: 'topRight',
      // overlayStyle: {paddingRight: -480},
      zIndex: 1100
    }
  }));
});
export default BusinessAssetsDrawerTree;
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};