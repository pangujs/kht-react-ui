import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import KhtBaseTree from '../base-tree';
import { getDeptUserTree, getDeptUserData, getDeptUserByFuzzyName, getDeptUserEmployeeListByFuzzyName, getAdminDeptUserTree, getAdminDeptFilterUserData, getAdminDeptUserByFuzzyName, getAdminDeptUserEmployeeListByFuzzyName } from '../../http/api';
import { objArrayRemoval } from '../../utils';
import { KhtDeptUserIconType } from '../business-dept-user-modal-tree';
import { message } from 'antd';
import { cloneDeep } from 'lodash';
export default function BusinessDeptUserTree(props) {
  var _props$multiple;
  var MULTIPLE = (_props$multiple = props.multiple) !== null && _props$multiple !== void 0 ? _props$multiple : !(typeof props.multiple == 'undefined');
  var SELECTABLE = props.selectable || typeof props.selectable == 'undefined';
  var LOADUSER = props.loadUser || typeof props.loadUser == 'undefined';
  var FETCHCUSTOM = props.fetchCustom || typeof props.fetchCustom == 'undefined';
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
  /** 超管 - 部门 */
  var getAaminDept = function getAaminDept() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var queryType = arguments.length > 1 ? arguments[1] : undefined;
    var name = arguments.length > 2 ? arguments[2] : undefined;
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
              message.error('超管 - 部门树，未获取到 companyCode 参数');
              return _context.abrupt("return");
            case 3:
              param = {
                parentCode: id,
                name: name
              };
              if (props.paramsType && Object.keys(props.paramsType).length) {
                if (queryType == 'loader') {
                  param = _objectSpread(_objectSpread({}, props.paramsType), param);
                }
                if (queryType == 'search') {
                  param = {
                    name: name
                  };
                }
              }
              _context.next = 7;
              return getAdminDeptUserTree(param);
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
  /** 中台 - 部门*/
  var getCustomDept = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var id,
        queryType,
        name,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            id = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : undefined;
            queryType = _args3.length > 1 ? _args3[1] : undefined;
            name = _args3.length > 2 ? _args3[2] : undefined;
            return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
                var param, result;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      param = {
                        parentCode: id
                      };
                      if (props.paramsType && Object.keys(props.paramsType).length) {
                        if (queryType == 'loader') {
                          param = _objectSpread(_objectSpread({}, props.paramsType), param);
                        }
                        if (queryType == 'search') {
                          param = {
                            name: name
                          };
                        }
                      }
                      _context2.next = 4;
                      return getDeptUserTree(param);
                    case 4:
                      result = _context2.sent;
                      resolve(result);
                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }()));
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getCustomDept() {
      return _ref2.apply(this, arguments);
    };
  }();
  /** 超管 - 部门树下的人员数据 */
  var getAaminAssetsResident = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(params, name) {
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
                      message.error('超管 - 部门树，未获取到 companyCode 参数');
                      return _context4.abrupt("return");
                    case 3:
                      param = _objectSpread(_objectSpread({}, params), {}, {
                        name: name
                      });
                      if (props.paramsType && Object.keys(props.paramsType).length) {
                        param = _objectSpread(_objectSpread({}, props.paramsType), param);
                      }
                      _context4.next = 7;
                      return getAdminDeptFilterUserData(param);
                    case 7:
                      result = _context4.sent;
                      resolve(result);
                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function (_x5) {
                return _ref5.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function getAaminAssetsResident(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  /** 中台 - 部门树下的人员数据 */
  var getCustomAssetsResident = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(params, name) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve) {
                var param, result;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      param = _objectSpread(_objectSpread({}, params), {}, {
                        name: name
                      });
                      if (props.paramsType && Object.keys(props.paramsType).length) {
                        param = _objectSpread(_objectSpread({}, props.paramsType), param);
                      }
                      _context6.next = 4;
                      return getDeptUserData(param);
                    case 4:
                      result = _context6.sent;
                      resolve(result);
                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              return function (_x8) {
                return _ref7.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function getCustomAssetsResident(_x6, _x7) {
      return _ref6.apply(this, arguments);
    };
  }();
  /** 超管 - 部门树模糊搜索 */
  var searchAaminDept = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(value) {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve) {
                var result;
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return getAdminDeptUserByFuzzyName(_objectSpread(_objectSpread({}, props.paramsType), {}, {
                        departmentName: value
                      }));
                    case 2:
                      result = _context8.sent;
                      resolve(result);
                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
              return function (_x10) {
                return _ref9.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function searchAaminDept(_x9) {
      return _ref8.apply(this, arguments);
    };
  }();
  /** 中台 - 部门树模糊搜索 */
  var searchCustomDept = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(value) {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve) {
                var result;
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return getDeptUserByFuzzyName({
                        departmentName: value
                      });
                    case 2:
                      result = _context10.sent;
                      resolve(result);
                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10);
              }));
              return function (_x12) {
                return _ref11.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return function searchCustomDept(_x11) {
      return _ref10.apply(this, arguments);
    };
  }();
  /** 超管 - 人员树模糊搜索 */
  var searchAaminUser = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(value) {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve) {
                var result;
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return getAdminDeptUserEmployeeListByFuzzyName(_objectSpread(_objectSpread({}, props.paramsType), {}, {
                        employeeName: value
                      }));
                    case 2:
                      result = _context12.sent;
                      resolve(result);
                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12);
              }));
              return function (_x14) {
                return _ref13.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return function searchAaminUser(_x13) {
      return _ref12.apply(this, arguments);
    };
  }();
  /** 中台 - 人员树模糊搜索 */
  var searchCustomUser = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(value) {
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            return _context15.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve) {
                var result;
                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return getDeptUserEmployeeListByFuzzyName({
                        employeeName: value
                      });
                    case 2:
                      result = _context14.sent;
                      resolve(result);
                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee14);
              }));
              return function (_x16) {
                return _ref15.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    return function searchCustomUser(_x15) {
      return _ref14.apply(this, arguments);
    };
  }();
  /** 请求根节点 */
  var postDeptUserTreeData = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var result, data, selectKeys;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            result = {};
            if (!FETCHCUSTOM) {
              _context16.next = 5;
              break;
            }
            _context16.next = 4;
            return getCustomDept(undefined, 'loader');
          case 4:
            result = _context16.sent;
          case 5:
            if (FETCHCUSTOM) {
              _context16.next = 9;
              break;
            }
            _context16.next = 8;
            return getAaminDept(undefined, 'loader');
          case 8:
            result = _context16.sent;
          case 9:
            data = result.response.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                title: item.name,
                key: props.rowKey || item.code,
                icon: KhtDeptUserIconType.dept,
                dept: true
              });
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
            return _context16.stop();
        }
      }, _callee16);
    }));
    return function postDeptUserTreeData() {
      return _ref16.apply(this, arguments);
    };
  }();
  /** 回车事件回调 */
  var onSearchTreeData = function onSearchTreeData(e) {
    return new Promise( /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(resolve) {
        var _dept, _dept$response, _user, _user$response;
        var value, dept, user, deptData, userData;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              value = e.target.value;
              dept = {};
              user = {};
              if (!FETCHCUSTOM) {
                _context17.next = 7;
                break;
              }
              _context17.next = 6;
              return searchCustomDept(value);
            case 6:
              dept = _context17.sent;
            case 7:
              if (FETCHCUSTOM) {
                _context17.next = 11;
                break;
              }
              _context17.next = 10;
              return searchAaminDept(value);
            case 10:
              dept = _context17.sent;
            case 11:
              if (!LOADUSER) {
                _context17.next = 20;
                break;
              }
              if (!FETCHCUSTOM) {
                _context17.next = 16;
                break;
              }
              _context17.next = 15;
              return searchCustomUser(value);
            case 15:
              user = _context17.sent;
            case 16:
              if (FETCHCUSTOM) {
                _context17.next = 20;
                break;
              }
              _context17.next = 19;
              return searchAaminUser(value);
            case 19:
              user = _context17.sent;
            case 20:
              deptData = (_dept = dept) === null || _dept === void 0 ? void 0 : (_dept$response = _dept.response) === null || _dept$response === void 0 ? void 0 : _dept$response.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  title: item.name,
                  key: props.rowKey || item.code,
                  isLeaf: true,
                  icon: KhtDeptUserIconType.dept,
                  dept: true
                });
              });
              userData = (_user = user) === null || _user === void 0 ? void 0 : (_user$response = _user.response) === null || _user$response === void 0 ? void 0 : _user$response.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  key: props.rowKey || item.code,
                  title: item.name,
                  isLeaf: true,
                  icon: KhtDeptUserIconType.user,
                  fullTitle: item === null || item === void 0 ? void 0 : item.employeeDeptInfoList.map(function (keys) {
                    return keys.fullName;
                  }).join('、'),
                  user: true
                });
              });
              setTreeData(deptData.concat(userData || []));
              resolve(undefined);
            case 24:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      return function (_x17) {
        return _ref17.apply(this, arguments);
      };
    }());
  };
  /** 懒加载子节点 */
  var loadData = function loadData(_ref18) {
    var key = _ref18.key,
      children = _ref18.children,
      code = _ref18.code;
    return new Promise( /*#__PURE__*/function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(resolve) {
        var _userData$dataList;
        var result, users, dept, userData, user;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              if (!(children && children.length)) {
                _context18.next = 3;
                break;
              }
              resolve({
                data: [],
                key: ''
              });
              return _context18.abrupt("return");
            case 3:
              result = {};
              users = {};
              if (!FETCHCUSTOM) {
                _context18.next = 9;
                break;
              }
              _context18.next = 8;
              return getCustomDept(code, 'loader');
            case 8:
              result = _context18.sent;
            case 9:
              if (FETCHCUSTOM) {
                _context18.next = 13;
                break;
              }
              _context18.next = 12;
              return getAaminDept(code, 'loader');
            case 12:
              result = _context18.sent;
            case 13:
              if (!LOADUSER) {
                _context18.next = 22;
                break;
              }
              if (!FETCHCUSTOM) {
                _context18.next = 18;
                break;
              }
              _context18.next = 17;
              return getCustomAssetsResident({
                departmentCode: code,
                currentPage: 1
              });
            case 17:
              users = _context18.sent;
            case 18:
              if (FETCHCUSTOM) {
                _context18.next = 22;
                break;
              }
              _context18.next = 21;
              return getAaminAssetsResident({
                departmentCode: code,
                currentPage: 1
              });
            case 21:
              users = _context18.sent;
            case 22:
              /** 懒加载子节点时，需要将请求回来的数据,进行构造 */
              dept = result.response.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  key: props.rowKey || item.code,
                  title: item.name,
                  icon: KhtDeptUserIconType.dept,
                  children: [],
                  dept: true,
                  isExistChild: LOADUSER ? '1' : item.isExistChild
                });
              });
              userData = users.response || {};
              user = (_userData$dataList = userData.dataList) === null || _userData$dataList === void 0 ? void 0 : _userData$dataList.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  key: props.rowKey || item.code,
                  title: item.name,
                  isLeaf: true,
                  icon: KhtDeptUserIconType.user,
                  fullTitle: item === null || item === void 0 ? void 0 : item.employeeDeptInfoList.map(function (keys) {
                    return keys.fullName;
                  }).join('、'),
                  user: true
                });
              });
              resolve({
                data: dept.concat(user || []),
                key: key,
                total: (userData === null || userData === void 0 ? void 0 : userData.totalCount) || 0,
                id: props.rowKey || 'code',
                loaderType: 'username'
              });
            case 26:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      return function (_x18) {
        return _ref19.apply(this, arguments);
      };
    }());
  };
  /** 点击加载更多时的回调  */
  var onLoadMore = function onLoadMore(currentData) {
    return new Promise( /*#__PURE__*/function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(resolve) {
        var _userData$dataList2;
        var users, userData, user;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              users = {};
              if (!FETCHCUSTOM) {
                _context19.next = 5;
                break;
              }
              _context19.next = 4;
              return getCustomAssetsResident({
                departmentCode: currentData.parentNode.code,
                currentPage: currentData.page.pageNo
              });
            case 4:
              users = _context19.sent;
            case 5:
              if (FETCHCUSTOM) {
                _context19.next = 9;
                break;
              }
              _context19.next = 8;
              return getAaminAssetsResident({
                departmentCode: currentData.parentNode.code,
                currentPage: currentData.page.pageNo
              });
            case 8:
              users = _context19.sent;
            case 9:
              userData = users.response || {};
              user = (_userData$dataList2 = userData.dataList) === null || _userData$dataList2 === void 0 ? void 0 : _userData$dataList2.map(function (item) {
                return _objectSpread(_objectSpread({}, item), {}, {
                  key: props.rowKey || item.code,
                  title: item.name,
                  icon: KhtDeptUserIconType.user,
                  fullTitle: item === null || item === void 0 ? void 0 : item.employeeDeptInfoList.map(function (keys) {
                    return keys.fullName;
                  }).join('、'),
                  isLeaf: true,
                  user: true
                });
              });
              resolve({
                data: user || [],
                key: currentData.parentKey,
                total: (userData === null || userData === void 0 ? void 0 : userData.totalCount) || 0,
                id: props.rowKey || 'code',
                loaderType: 'username'
              });
            case 12:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }));
      return function (_x19) {
        return _ref20.apply(this, arguments);
      };
    }());
  };
  /** 已选数据 */
  var onChangeCallback = function onChangeCallback(selectKeys, info) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var showSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // 根据 isAllot 值来判断当前账号是否有权限
    if (info.node.isAllot === 0) {
      return;
    }
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
  useEffect(function () {
    postDeptUserTreeData();
  }, []);
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
    showTooltip: false,
    canSelect: props.canSelect,
    pageSize: props.pageSize,
    onChangeCallback: onChangeCallback,
    checkedKeysSorce: checkedKeys,
    defaultExpandedKeys: defaultExpandedKeys,
    inputProps: _objectSpread({}, props.inputProps),
    backgroundColorFull: props.backgroundColorFull,
    isMandatory: props.isMandatory,
    newStyle: newStyle
  });
}