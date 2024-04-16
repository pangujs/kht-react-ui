import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import axios from 'axios';
import { message } from 'antd';
export var Request = /*#__PURE__*/function () {
  // axios 实例

  // 基础配置，url和超时时间
  //blob

  function Request(config) {
    var _this = this;
    _classCallCheck(this, Request);
    this.instance = void 0;
    this.responseType = 'json';
    this.baseConfig = {
      timeout: 60000
    };
    var baseConfig = {};
    //明源入口
    if (window.__MICRO_APP_ENVIRONMENT__) {
      var _window$location, _window$location2;
      baseConfig = {
        baseURL: ((_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.hostname.startsWith('test-')) ? 'https://test-cus.khtong.cn' : ((_window$location2 = window.location) === null || _window$location2 === void 0 ? void 0 : _window$location2.hostname.startsWith('dev-')) ? 'https://dev-cus.khtong.cn' : 'https://kht-cus.khtong.cn'
      };
    }
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config, _objectSpread({}, baseConfig)));
    this.instance.interceptors.request.use(function (requestConfig) {
      _this.responseType = requestConfig.responseType || 'json';
      // 一般会请求拦截里面加token
      var token = localStorage.getItem('h-token');
      requestConfig.headers = _objectSpread({
        'h-token': token || 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1NmExNmVjYTY4ZDc0Y2Y1YmExNzc5Y2NmZjg5ODMxYiIsImlzRGVmYXVsdCI6MCwiZ3JvdXBUeXBlIjoic3VwZXJBZG1pbkdyb3VwIiwiaC1lbXBsb3llZSI6ZmFsc2UsImxvZ2luSWQiOiJiNmJhMjZjMTI3Mjc0NjM1OTk3ZmJmNzVhMmIxZGQzNSIsImgtY29tcGFueS1jb2RlIjoiNUVEMzhDMzhFRDYyQTM4NUE2QUU5N0RDNzBDRjMyMDIiLCJjdXN0b21lcklkIjpudWxsLCJleHAiOjE2NzcxMTg3OTAsImFjY291bnRVbmFtZSI6Ind1eGlhb2JpbmciLCJpYXQiOiIyMDIyLTExLTI1IDEwOjE5OjUwIiwiZW1wbG95ZWVDb2RlIjoiNDJiY2ZiNjVmZTc1NGQ4MGEzNTQ5ZWE1OThmOTEwNDQifQ.EwJdv0QdD3bZ6No7eS9-DBEBktbXQX7Efe2zpyf_fLYO6GyGajyuIHY262bU3TPak7cy34bIdbpPXaiBE--UPQ',
        'Content-Type': 'application/json; charset=UTF-8;'
      }, config.headers);
      if (requestConfig.method == 'get') {
        requestConfig.params = requestConfig.data;
      }
      return requestConfig;
    }, function (err) {
      return Promise.reject(err);
    });
    this.instance.interceptors.response.use(function (res) {
      var _res$data;
      if (_this.responseType === 'blob') {
        //文档流格式
        return res;
      }
      // 直接返回res，当然你也可以只返回res.data
      if (!((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.success)) {
        var _res$data2, _res$data3;
        var obj = {};
        // res.data = {};
        obj['response'] = [];
        // 还是需要返回错误信息
        console.log(res, 'res.data');
        obj['success'] = (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.success;
        obj['message'] = (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.message;
        return obj;
      }
      return res.data;
    }, function (err) {
      // 这里用来处理http常见错误，进行全局提示
      var msg = '';
      switch (err.response.status) {
        case 400:
          msg = '请求错误(400)';
          break;
        case 401:
          msg = '未授权，请重新登录(401)';
          // 这里可以做清空storage并跳转到登录页的操作
          break;
        case 403:
          msg = '拒绝访问(403)';
          break;
        case 404:
          msg = '请求出错(404)';
          break;
        case 408:
          msg = '请求超时(408)';
          break;
        case 500:
          msg = '服务器错误(500)';
          break;
        case 501:
          msg = '服务未实现(501)';
          break;
        case 502:
          msg = '网络错误(502)';
          break;
        case 503:
          msg = '服务不可用(503)';
          break;
        case 504:
          msg = '网络超时(504)';
          break;
        case 505:
          msg = 'HTTP版本不受支持(505)';
          break;
        default:
          msg = "\u8FDE\u63A5\u51FA\u9519(".concat(err.response.status, ")!");
      }
      // 这里错误消息可以使用全局弹框展示出来
      message.error("".concat(msg, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u8054\u7CFB\u7BA1\u7406\u5458\uFF01"));
      // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
      return Promise.reject(err.response);
    });
  }
  // 定义请求方法
  _createClass(Request, [{
    key: "request",
    value: function request(config) {
      return this.instance.request(config);
    }
  }, {
    key: "get",
    value: function get(url, config) {
      return this.instance.get(url, config);
    }
  }, {
    key: "post",
    value: function post(url, data, config) {
      return this.instance.post(url, data, config);
    }
  }, {
    key: "put",
    value: function put(url, data, config) {
      return this.instance.put(url, data, config);
    }
  }, {
    key: "delete",
    value: function _delete(url, config) {
      return this.instance.delete(url, config);
    }
  }]);
  return Request;
}();
export default new Request({});