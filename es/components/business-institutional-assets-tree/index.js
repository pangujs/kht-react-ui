import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import KhtBaseTree from '../base-tree';
import { getInstitutionalAssetsTree, getInstitutionalAssetsExtResidentData, getAdminInstitutionalAssetsTree, getAdminInstitutionalAssetsExtResidentData, getInstitutionalAssetsFullName } from '../../http/api';
import { FolderFilled } from '@ant-design/icons';
import { objArrayRemoval } from '../../utils';
import { cloneDeep } from 'lodash';
import Project from '../../svg/project.svg';
import Func from '../../svg/func.svg';
import Space from '../../svg/space.svg';
import Building from '../../svg/building.svg';
import Stages from '../../svg/stages.svg';
import Floor from '../../svg/floor.svg';
import Room from '../../svg/room.svg';
import Unit from '../../svg/unit.svg';
import User from '../../svg/user.svg';
import { message } from 'antd';
export var businessType = {
  /** 机构 */
  organization: 1,
  /** 项目/小区 */
  community: 2,
  /** 功能 */
  function: 3,
  /** 空间 */
  space: 3,
  /** 分期 */
  phase: 4,
  /** 楼栋 */
  building: 5,
  /** 单元 */
  unit: 6,
  /** 楼层 */
  floor: 7,
  /** 房号 */
  house: 8
};
export var KhtBusinessInstitutionalIconType = {
  /** 机构 */
  organization: /*#__PURE__*/React.createElement(FolderFilled, {
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  }),
  /** 项目/小区 */
  community: /*#__PURE__*/React.createElement("img", {
    src: Project,
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  }),
  /** 功能 */
  function: /*#__PURE__*/React.createElement("img", {
    src: Func,
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  }),
  /** 空间 */
  space: /*#__PURE__*/React.createElement("img", {
    src: Space,
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  }),
  /** 分期 */
  phase: /*#__PURE__*/React.createElement("img", {
    src: Stages,
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  }),
  /** 楼栋 */
  building: /*#__PURE__*/React.createElement("img", {
    src: Building,
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  }),
  /** 单元 */
  unit: /*#__PURE__*/React.createElement("img", {
    src: Unit,
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  }),
  /** 楼层 */
  floor: /*#__PURE__*/React.createElement("img", {
    src: Floor,
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  }),
  /** 房号 */
  house: /*#__PURE__*/React.createElement("img", {
    src: Room,
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  }),
  /** 业主 */
  noSub: /*#__PURE__*/React.createElement("img", {
    src: User,
    style: {
      color: '#4fa1fb',
      width: 15,
      display: 'inline-block'
    }
  })
};
export default function BusinessInstitutionalAssetsTree(props) {
  var _props$multiple, _props$openCustomTool;
  var MULTIPLE = (_props$multiple = props.multiple) !== null && _props$multiple !== void 0 ? _props$multiple : !(typeof props.multiple == 'undefined');
  var SELECTABLE = props.selectable || typeof props.selectable == 'undefined';
  var LOADRESIDENT = props.loadResident || typeof props.loadResident == 'undefined';
  var FETCHCUSTOM = props.fetchCustom || typeof props.fetchCustom == 'undefined';
  var OPENCUSTOMTOOLTIPCONTENT = (_props$openCustomTool = props.openCustomTooltipContent) !== null && _props$openCustomTool !== void 0 ? _props$openCustomTool : false;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    checkedKeys = _useState2[0],
    setCheckedKeys = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    treeData = _useState4[0],
    setTreeData = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    checkedItems = _useState6[0],
    setCheckedItems = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    defaultExpandedKeys = _useState8[0],
    setDefaultExpandedKeys = _useState8[1];
  var newStyle = props.newStyle || false;
  var residentType = {
    family: '家属',
    proprietor: '业主',
    tenant: '租户'
  };
  /** 超管 - 资产树 */
  var getAaminAssets = function getAaminAssets() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
    var sourceTableType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'organization';
    var queryType = arguments.length > 2 ? arguments[2] : undefined;
    var name = arguments.length > 3 ? arguments[3] : undefined;
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve) {
        var _props$paramsType;
        var param, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if ((_props$paramsType = props.paramsType) === null || _props$paramsType === void 0 ? void 0 : _props$paramsType.companyCode) {
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
              if (props.paramsType && Object.keys(props.paramsType).length) {
                if (queryType == 'root') {
                  param = _objectSpread(_objectSpread({}, param), props.paramsType);
                }
                if (queryType == 'children') {
                  param = _objectSpread(_objectSpread({}, props.paramsType), param);
                }
                if (queryType == 'search') {
                  param = {
                    name: name
                  };
                }
              }
              _context.next = 7;
              return getAdminInstitutionalAssetsTree(param);
            case 7:
              result = _context.sent;
              resolve(result);
            case 9:
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
                var _props$paramsType2;
                var param, result;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      if ((_props$paramsType2 = props.paramsType) === null || _props$paramsType2 === void 0 ? void 0 : _props$paramsType2.companyCode) {
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
                        type: ''
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
                        type: ''
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
      var result, data, selectKeys;
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
              return _objectSpread(_objectSpread({}, item), {}, _defineProperty({
                title: item.name,
                key: item.id,
                icon: KhtBusinessInstitutionalIconType[item.sourceTableType]
              }, item.sourceTableType, item.sourceTableType));
            });
            if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
              if (props.defaultCheckedItems) {
                selectKeys = [];
                if (typeof props.defaultCheckedItems === 'boolean') {
                  setCheckedKeys([data[0].key]);
                  selectKeys = [data[0].key];
                }
                if (props.defaultCheckedItems instanceof Array) {
                  setCheckedKeys(props.defaultCheckedItems);
                  selectKeys = props.defaultCheckedItems;
                }
                props.defaultCallBack && props.defaultCallBack(selectKeys, data);
              }
              setTreeData(data);
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
                  isLeaf: true
                });
              });
            case 22:
              postData = (_result$response2 = result.response) === null || _result$response2 === void 0 ? void 0 : _result$response2.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, _defineProperty({
                  title: item.name,
                  key: item.id,
                  isLeaf: true,
                  icon: KhtBusinessInstitutionalIconType[item.sourceTableType]
                }, item.sourceTableType, item.sourceTableType));
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
                }, _defineProperty(_objectSpread4, result.response[0].sourceTableType, result.response[0].sourceTableType), _defineProperty(_objectSpread4, "isLeaf", true), _objectSpread4));
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
                }, _defineProperty(_objectSpread5, item.sourceTableType, item.sourceTableType), _defineProperty(_objectSpread5, "isLeaf", LOADRESIDENT && sourceTableType == 'house'), _defineProperty(_objectSpread5, "children", []), _objectSpread5));
              });
            case 26:
              if (props.loaderLevel) {
                // 过滤掉其它层级类型
                childrenData = childrenData.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    isLeaf: item.sourceTableType == props.loaderLevel
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
                  isLeaf: true
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
  /** 已选数据 */
  var onChangeCallback = function onChangeCallback(selectKeys, info) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var showSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // 选中状态
    var index = checkedItems.findIndex(function (item) {
      return item.key == info.node.key || info.node.key.split('_').pop() == item.key;
    });
    if (info.event == 'check') {
      if (showSearch) {
        if (index == -1) {
          if (props === null || props === void 0 ? void 0 : props.canSelect) {
            if (!info.checkedNodes.length) return;
          }
          // 选中状态
          setCheckedItems(function (items) {
            return objArrayRemoval(items, _toConsumableArray(multiple || info.checkedNodes.length == 0 ? info.checkedNodes : [info.node]), 'key');
          });
        }
        if (index >= 0) {
          // 取消状态
          var checkitem = cloneDeep(checkedItems);
          checkitem.splice(index, 1);
          setCheckedItems(_toConsumableArray(checkitem));
        }
        return false;
      }
      setCheckedItems(multiple || info.checkedNodes.length == 0 ? info.checkedNodes : [info.node]);
    }
    if (info.event == 'select') {
      if (info.selected && index == -1) {
        var _info$node;
        // 处理已传 canSelect 参数的处理
        if (props === null || props === void 0 ? void 0 : props.canSelect) {
          if (!info.selectedNodes.length) return;
        }
        //选中状态
        var clearCheckedItems = [];
        //单选或多选判断
        clearCheckedItems = multiple ? checkedItems : [], setCheckedItems([].concat(_toConsumableArray(clearCheckedItems), [_objectSpread({
          title: info.node.title,
          fullTitle: (_info$node = info.node) === null || _info$node === void 0 ? void 0 : _info$node.fullName
        }, info.node)]));
      }
      if (!info.selected && index >= 0) {
        //取消状态
        var _checkitem = cloneDeep(checkedItems);
        _checkitem.splice(index, 1);
        setCheckedItems(_toConsumableArray(_checkitem));
      }
    }
    props.onChange && props.onChange(selectKeys, info);
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
    if (!props.customRootNode) postDeptUserTreeData();
    if (props.customRootNode) {
      setTreeData(props.customRootNode.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          isLeaf: false
        });
      }));
      setDefaultExpandedKeys([props.customRootNode[0].key]);
    }
  }, [props.customRootNode]);
  useEffect(function () {
    setCheckedKeys(checkedItems.map(function (item) {
      return item.key;
    }));
  }, [checkedItems]);
  useEffect(function () {
    if (props.defaultCheckedItems instanceof Array) {
      setCheckedKeys(props.defaultCheckedItems);
    }
  }, [props.defaultCheckedItems]);
  return /*#__PURE__*/React.createElement(KhtBaseTree, {
    showSearch: props.showSearch,
    showIcon: true,
    treeData: treeData,
    selectable: SELECTABLE,
    multiple: MULTIPLE,
    onSearchTreeData: onSearchTreeData,
    loadData: loadData,
    isPageLoad: true,
    onLoadMore: onLoadMore,
    showTooltip: OPENCUSTOMTOOLTIPCONTENT !== null && OPENCUSTOMTOOLTIPCONTENT !== void 0 ? OPENCUSTOMTOOLTIPCONTENT : false,
    canSelect: props.canSelect,
    pageSize: props.pageSize,
    onChangeCallback: onChangeCallback,
    checkedKeysSorce: checkedKeys,
    defaultExpandedKeys: defaultExpandedKeys,
    inputProps: _objectSpread({}, props.inputProps),
    backgroundColorFull: props.backgroundColorFull,
    isMandatory: props.isMandatory,
    customTooltipContent: customTooltipContent,
    toolTipProps: {
      getPopupContainer: function getPopupContainer() {
        return document.body;
      }
    },
    newStyle: newStyle
  });
}
export var BusinessInstitutionalIconType = function BusinessInstitutionalIconType(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var paramsType = function paramsType(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};