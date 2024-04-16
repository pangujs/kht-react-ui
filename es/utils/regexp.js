// 一些正则
// 手机号
export var phoneReg = /^1[3456789]\d{9}$/;
// 正整数
export var integerReg = /(^[0-9]\d*$)/;
// 固话正则  例如：020-1234567
export var isMobReg = /^((0\d{2,3})-?)?(\d{7,8})$/;
// 可以不加区号，可以不加-
// /((^0\d{2,3})-?)?\d{7,8}$/.test('0107111111’)
// 可以用在 antd的form里面的rules
export var setFormRule = function setFormRule(reg) {
  var errMes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '请输入正确的格式';
  return {
    validator: function validator(_, value) {
      if (!value || reg.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(errMes));
    }
  };
};
export var nameValidator = function nameValidator() {
  return {
    validator: function validator(_, value) {
      if (!value) {
        return Promise.resolve();
      }
      var len = 0;
      for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 127 || value.charCodeAt(i) == 94) {
          len += 2;
        } else {
          len++;
        }
      }
      if (len <= 20) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('不能超过20个字符'));
    }
  };
};
export var validatePhone = function validatePhone(rule, value, callback) {
  var err;
  if (value) {
    if (!phoneReg.test(value)) {
      err = '请输入正确的手机号码';
    }
  }
  callback(err ? err : void 0);
};
export var validateMobile = function validateMobile(rule, value, callback) {
  var err;
  if (value) {
    if (!isMobReg.test(value)) {
      err = '请输入座机号码';
    }
  }
  callback(err ? err : void 0);
};