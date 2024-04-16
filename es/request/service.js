import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import axios from 'axios';
import { message } from 'antd';
import { Local } from '../utils/storage';
import { TOKEN } from './request';
var APP_LOGIN_ERROR = [1007, 403]; //登录异常，需要重新登录的code码
var Service = /*#__PURE__*/function () {
  //blob

  function Service(config) {
    var _this = this;
    _classCallCheck(this, Service);
    this.instance = void 0;
    this.loadingState = false;
    this.concurrency = true;
    this.messageState = true;
    this.pendingRequest = void 0;
    this.responseType = 'json';
    this.nowHandle = {};
    this.apiKey = '';
    this.before = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
        var status, data, response, _ref2, resStatus, resData, statusCode, resultData, _response, code, success, msg, _code;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.responseType === 'blob')) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", Promise.resolve(res));
            case 2:
              status = res.status, data = res.data, response = res.response;
              _ref2 = response || {}, resStatus = _ref2.status, resData = _ref2.data; //响应后恢复可请求状态
              _this.nowHandle[_this.apiKey].state = 'ready';
              statusCode = status || resStatus;
              resultData = data || resData;
              if (!(statusCode === 200)) {
                _context.next = 20;
                break;
              }
              _response = resultData.response, code = resultData.code, success = resultData.success; //http网络请求成功
              if (success) {
                _context.next = 17;
                break;
              }
              if (!APP_LOGIN_ERROR.includes(code)) {
                _context.next = 13;
                break;
              }
              message.error(data.message || '登录失效');
              return _context.abrupt("return");
            case 13:
              (resultData === null || resultData === void 0 ? void 0 : resultData.message) && message.error(resultData === null || resultData === void 0 ? void 0 : resultData.message);
              return _context.abrupt("return", Promise.reject(res));
            case 17:
              return _context.abrupt("return", Promise.resolve(_response));
            case 18:
              _context.next = 34;
              break;
            case 20:
              if (!(resultData && typeof (resultData === null || resultData === void 0 ? void 0 : resultData.success) !== 'undefined' && !resultData.success)) {
                _context.next = 25;
                break;
              }
              //业务失败
              (resultData === null || resultData === void 0 ? void 0 : resultData.message) && message.error(resultData === null || resultData === void 0 ? void 0 : resultData.message);
              return _context.abrupt("return", Promise.reject(res));
            case 25:
              if (!(resultData && (resultData === null || resultData === void 0 ? void 0 : resultData.message))) {
                _context.next = 30;
                break;
              }
              //接口有响应
              message.error(resultData === null || resultData === void 0 ? void 0 : resultData.message);
              return _context.abrupt("return", Promise.reject(res));
            case 30:
              //接口没有响应
              msg = res.message;
              _code = msg.split(' ');
              _this.setMessageTip(statusCode || _code[_code.length - 1]);
              return _context.abrupt("return", Promise.reject(res));
            case 34:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var baseConfig = {};
    //明源入口
    if (window.__MICRO_APP_ENVIRONMENT__) {
      var _window$location, _window$location2;
      baseConfig = {
        baseURL: ((_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.hostname.startsWith('test-')) ? 'https://test-cus.khtong.cn' : ((_window$location2 = window.location) === null || _window$location2 === void 0 ? void 0 : _window$location2.hostname.startsWith('dev-')) ? 'https://dev-cus.khtong.cn' : 'https://kht-cus.khtong.cn'
      };
    }
    this.instance = axios.create(Object.assign(config, _objectSpread({}, baseConfig)));
    this.interceptors();
    this.pendingRequest = new Map(); // 存储请求url
  }
  _createClass(Service, [{
    key: "interceptors",
    value: function interceptors() {
      //拦截器
      this.interceptorsRequest();
      this.interceptorsResponse();
    }
  }, {
    key: "interceptorsRequest",
    value: function interceptorsRequest() {
      var _this2 = this;
      //请求拦截器
      this.instance.interceptors.request.use(function (config) {
        _this2.responseType = config.responseType || 'json';
        //设置token
        var token = Local.get(TOKEN);
        token && (config.headers[TOKEN] = token);
        return Promise.resolve(config);
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "interceptorsResponse",
    value: function interceptorsResponse() {
      //响应拦截器
      this.instance.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "request",
    value: function request(config) {
      var _this3 = this;
      //请求封装
      //默认loading：false ，有传值则取传进来的值
      this.loadingState = typeof config.loadingState !== 'undefined' ? config.loadingState : false;
      //默认messageState：true ，有传值则取传进来的值
      this.messageState = typeof config.messageState !== 'undefined' ? config.messageState : true;
      return new Promise(function (resolve, reject) {
        _this3.instance.request(config).then(function (response) {
          var data = response.data;
          if (_this3.responseType === 'blob') {
            //文档流格式
            return resolve(response);
          }
          if (!data.success) {
            reject(response);
          } else {
            resolve(response);
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: "setMessageTip",
    value: function setMessageTip(code) {
      var tipsText;
      switch (code) {
        case '404':
          tipsText = '找不到资源';
          break;
        case '500':
          tipsText = '服务器内部错误';
          break;
        case '502':
          tipsText = '网关错误';
          break;
        case '503':
          tipsText = '服务不可用';
          break;
        case '504':
          tipsText = '网关超时';
          break;
        case 'cancel':
          tipsText = '';
          break;
        default:
          tipsText = '网络请求失败';
          break;
      }
      if (tipsText) message.error(tipsText);
    }
    // 获取请求响应，进行数据拦截处理
  }, {
    key: "setRequest",
    value: function setRequest(method, config) {
      var _this4 = this;
      var url = config.url,
        _config$params = config.params,
        params = _config$params === void 0 ? {} : _config$params,
        _config$data = config.data,
        data = _config$data === void 0 ? {} : _config$data,
        _config$concurrency = config.concurrency,
        concurrency = _config$concurrency === void 0 ? true : _config$concurrency;
      this.concurrency = concurrency;
      this.apiKey = url + method + JSON.stringify(_objectSpread(_objectSpread({}, params), data));
      this.nowHandle[this.apiKey] = {
        state: 'ready'
      }; //初始化请求时设置可请求
      return new Promise(function (resolve, reject) {
        if (_this4.concurrency) {
          // 并发
          _this4.request(_objectSpread(_objectSpread({}, config), {}, {
            method: method
          })).then(_this4.before).then(function (res) {
            resolve(res);
          }).catch(function (err) {
            _this4.before(err);
            reject(err);
          });
        } else {
          if (_this4.nowHandle[_this4.apiKey].state === 'ready') {
            _this4.nowHandle[_this4.apiKey].state = 'pending'; //调用接口时立即枷锁
            _this4.request(_objectSpread(_objectSpread({}, config), {}, {
              method: method
            })).then(_this4.before).then(function (res) {
              resolve(res);
            }).catch(function (err) {
              _this4.before(err);
              reject(err);
            });
          }
        }
      });
    }
  }, {
    key: "get",
    value: function get(config) {
      return this.setRequest('GET', config);
    }
  }, {
    key: "delete",
    value: function _delete(config) {
      return this.setRequest('DELETE', config);
    }
  }, {
    key: "patch",
    value: function patch(config) {
      return this.setRequest('PATCH', config);
    }
  }, {
    key: "post",
    value: function post(config) {
      return this.setRequest('POST', config);
    }
  }, {
    key: "put",
    value: function put(config) {
      return this.setRequest('PUT', config);
    }
  }]);
  return Service;
}();
export default Service;