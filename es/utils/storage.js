import _typeof from "@babel/runtime/helpers/esm/typeof";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
var Storage = /*#__PURE__*/function () {
  function Storage(name) {
    _classCallCheck(this, Storage);
    this.func = '';
    this.func = name;
  }
  _createClass(Storage, [{
    key: "get",
    value: function get(key) {
      var val = this.func.getItem(key);
      if (val) {
        return val !== 'null' && val !== 'undefined' && val.startsWith('{') ? JSON.parse(val) : val;
      } else {
        return null;
      }
    }
  }, {
    key: "set",
    value: function set(key, data) {
      if (typeof data === 'undefined') {
        return;
      }
      var val = data;
      var cache = [];
      if (Object.prototype.toString.call(data) === '[object Object]') {
        val = JSON.stringify(val, function (key, value) {
          if (_typeof(value) === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
              return;
            }
            cache.push(value);
          }
          return value;
        });
        cache = null; //释放cache
      }

      this.func.setItem(key, val);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.func.clear();
    }
  }, {
    key: "remove",
    value: function remove(key) {
      this.func.removeItem(key);
    }
  }]);
  return Storage;
}();
export var Local = new Storage(localStorage);
export var Session = new Storage(sessionStorage);
//菜单相关应用及企业的信息缓存特殊处理
var AppMenuConfig = /*#__PURE__*/function () {
  function AppMenuConfig() {
    _classCallCheck(this, AppMenuConfig);
  }
  _createClass(AppMenuConfig, [{
    key: "get",
    value: function get(type) {
      return Local.get(type);
    }
  }, {
    key: "set",
    value: function set(type, data) {
      Session.set(type, data);
    }
  }]);
  return AppMenuConfig;
}();
export var CurrentAppMenuStorage = new AppMenuConfig();