import _typeof from "@babel/runtime/helpers/esm/typeof";
import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
// @ts-nocheck
import { message } from 'antd';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import React from 'react';
import moment from 'moment';
// 手机号
export var phoneReg = /^1[3456789]\d{9}$/;
// 正整数
export var integerReg = /(^[0-9]\d*$)/;
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
/** 延时执行 */
export var waitTime = function waitTime() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(true);
    }, time);
  });
};
/** 懒加载子节点
 * @param list tree 源数据
 * @param key 节点的 key 值
 * @param children 节点的 children 数据
 * @param deconstruction 开启 children 的覆盖(fasle) 还是 解构(true)？ 默认是 false
 */
export var updateTreeData = function updateTreeData(list, key, children) {
  var deconstruction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var appendType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return list.map(function (node) {
    if (node.key === key) {
      if (!node.children) node.children = [];
      if (deconstruction) {
        return _objectSpread(_objectSpread({}, node), {}, {
          isLeaf: false,
          children: appendType ? [].concat(_toConsumableArray(children), _toConsumableArray(node.children)) : [].concat(_toConsumableArray(node.children), _toConsumableArray(children))
        });
      }
      if (!deconstruction) {
        return _objectSpread(_objectSpread({}, node), {}, {
          children: children
        });
      }
    }
    if (node.children) {
      return _objectSpread(_objectSpread({}, node), {}, {
        children: updateTreeData(node.children, key, children, deconstruction, appendType)
      });
    }
    return node;
  });
};
/**
 * 查询组装后的 key 值
 * @param tree tree 源数据
 * @param key  组装前的 key 值
 * @returns
 */
export var findFormatKeys = function findFormatKeys(tree, key) {
  if (tree instanceof Array) {
    var formmatKeys = [];
    for (var i = 0; i < tree.length; i++) {
      if (tree[i].children && tree[i].children.length > 0) {
        if (key.includes(tree[i].key.split('_').pop())) formmatKeys.push(tree[i].key);
        formmatKeys = formmatKeys.concat(findFormatKeys(tree[i].children, key));
      } else {
        if (key.includes(tree[i].key.split('_').pop())) formmatKeys.push(tree[i].key);
      }
    }
    return formmatKeys;
  }
};
/**
 * 基于原始 Tree 数据，修改 key 值，规则：取上级 key +_+ 当前 key
 * @param tree
 * @param key
 */
export var assembleNewKey = function assembleNewKey(tree) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var parentKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var useSpll = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  if (tree instanceof Array) {
    for (var i = 0; i < tree.length; i++) {
      var _tree$i$isLeaf;
      tree[i].key = key && useSpll ? key + '_' + tree[i].key : tree[i].key;
      tree[i].isLeaf = (_tree$i$isLeaf = tree[i].isLeaf) !== null && _tree$i$isLeaf !== void 0 ? _tree$i$isLeaf : tree[i].children && tree[i].children.length ? false : true;
      tree[i].treeParentKey = parentKey;
      if (tree[i].children && tree[i].children.length) {
        assembleNewKey(tree[i].children, tree[i].key, tree[i].key, useSpll);
      }
    }
  }
};
/**
 * 数组对象合并去重
 * @param arrOne  数组 1
 * @param arrTwo 数据 2
 * @param key 去重的属性名  默认是 key
 * @returns
 */
export var objArrayRemoval = function objArrayRemoval(arrOne, arrTwo, key) {
  return [].concat(arrOne, arrTwo.filter(function (twoItem) {
    return !arrOne.find(function (oneItem) {
      return oneItem[key || 'key'].split('_').pop() == twoItem[key || 'key'].split('_').pop();
    });
  }));
};
/**
 * 数据组对象去重
 * @param arr
 * @param uniId
 * @returns
 */
export function objArrayUnique(arr, uniId) {
  var res = new Map();
  return arr.filter(function (item) {
    return !res.has(item[uniId]) && res.set(item[uniId], 1);
  });
}
/**
 * 处理继承父节点的 key 值，解决 key 值不唯一的问题
 * @param arr 源数据
 * @param res 需要覆盖的字段
 * @param useSpll 是否开启 组装key值
 */
export var handleTreeDataKey = function handleTreeDataKey(arr, res) {
  var useSpll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return arr.map(function (item) {
    var _item$isLeaf;
    return _objectSpread(_objectSpread({}, item), {}, {
      isLeaf: item.isExistChild == 0 ? true : (_item$isLeaf = item.isLeaf) !== null && _item$isLeaf !== void 0 ? _item$isLeaf : false,
      key: useSpll ? res.key + '_' + (res.id && item[res.id] || item.id) : res.id && item[res.id] || item.id,
      level: useSpll ? res.key && res.key.split('_').length + 1 : 0,
      treeParentKey: res.key
    });
  });
};
/**
 * 随机生成 11 位字符串
 */
export var randomStr = function randomStr() {
  return Math.random().toString(36).substring(2);
};
/**
 * 查找树的某个节点
 * @param tree 整棵树的数据源
 * @param key 根据 key 值进行递归查询
 */
export var searchTreeNode = function searchTreeNode(tree, key) {
  var array = [];
  for (var i = 0; i < tree.length; i++) {
    if (tree[i].key == key) array.push(tree[i]);
    if (tree[i].children && tree[i].children.length) {
      array = array.concat(searchTreeNode(tree[i].children, key));
    }
  }
  return array;
};
/**
 * 传入整棵树时，需映射 title、key、children
 * @param treeData 数据源
 * @param mapping 映射关系对象
 * @returns treeData
 */
export var deepTreeDataMapping = function deepTreeDataMapping(treeData, mapping) {
  if (treeData instanceof Array) {
    var newData = [];
    for (var i = 0; i < treeData.length; i++) {
      treeData[i]['children'] = treeData[i][mapping.children] || [];
      treeData[i]['title'] = treeData[i][mapping.title];
      treeData[i]['key'] = treeData[i][mapping.key];
      if (mapping['canSelect'] && typeof mapping['canSelect'] == 'function') {
        var value = mapping['canSelect'](treeData[i]);
        if (value) {
          treeData[i]['canSelect'] = value;
        }
      }
      delete treeData[i][mapping.children];
      if (treeData[i].children && treeData[i].children.length) {
        newData.concat(deepTreeDataMapping(treeData[i].children, mapping));
      }
      newData.push(treeData[i]);
    }
    return newData;
  } else {
    Error('deepTreeDataMapping 方法请传入 Array 类型');
    return [];
  }
};
/**
 * 传入整棵树，查询包含 title 字段的节点
 * @param tree
 * @param label
 * @returns
 */
export var loopTreeData = function loopTreeData(tree, label) {
  var treeData = [];
  for (var i = 0; i < tree.length; i++) {
    var _tree$i;
    if (label) {
      if (tree[i].title.includes(label)) {
        treeData.push(tree[i]);
        continue;
      }
    }
    if (((_tree$i = tree[i]) === null || _tree$i === void 0 ? void 0 : _tree$i.children) && tree[i].children.length > 0) {
      var children = loopTreeData(tree[i].children, label);
      if (children.length > 0) {
        treeData.push(_objectSpread(_objectSpread({}, tree[i]), {}, {
          children: children
        }));
      }
    }
  }
  return treeData;
};
/**
 * 传入整棵树，查询出所有的 key 值节点
 * @param tree
 * @returns
 */
export var getTreeDataKeys = function getTreeDataKeys(tree) {
  var treeDataKeys = [];
  for (var i = 0; i < tree.length; i++) {
    var _tree$i2;
    treeDataKeys.push(tree[i].key);
    if (((_tree$i2 = tree[i]) === null || _tree$i2 === void 0 ? void 0 : _tree$i2.children) && tree[i].children.length > 0) {
      treeDataKeys = treeDataKeys.concat(getTreeDataKeys(tree[i].children));
    }
  }
  return treeDataKeys;
};
/**
 * 传入整棵树，所有节点平铺，返回 一维数组
 * @param tree
 * @returns
 */
export var getTreeOneDimensional = function getTreeOneDimensional(tree) {
  var treeDataKeys = [];
  for (var i = 0; i < tree.length; i++) {
    var _tree$i3;
    treeDataKeys.push(tree[i]);
    if (((_tree$i3 = tree[i]) === null || _tree$i3 === void 0 ? void 0 : _tree$i3.children) && tree[i].children.length > 0) {
      treeDataKeys = treeDataKeys.concat(getTreeOneDimensional(tree[i].children));
    }
  }
  return treeDataKeys;
};
export var validateRes = function validateRes(res) {
  var showMes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return new Promise(function (resolve) {
    var _res$data;
    if (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.success) {
      var _res$data$message, _res$data2, _res$data3;
      if (showMes) message.success((_res$data$message = res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.message) !== null && _res$data$message !== void 0 ? _res$data$message : '成功', 1);
      resolve(res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.response);
    }
    throw res;
  });
};
// 下载文件
export var downFile = function downFile(res, other) {
  return new Promise(function (resolve, reject) {
    var _res$headers$content;
    var unCode = (other === null || other === void 0 ? void 0 : other.unCode) || false;
    if (!res) {
      (other === null || other === void 0 ? void 0 : other.errorCb) && other.errorCb();
      message.error('未知错误', 1.5);
      reject('未知错误');
    }
    var headersArr = ((_res$headers$content = res.headers['content-disposition']) === null || _res$headers$content === void 0 ? void 0 : _res$headers$content.split(';')) || [];
    var _headersArr = _slicedToArray(headersArr, 2),
      _headersArr$ = _headersArr[1],
      fileNameStr = _headersArr$ === void 0 ? '' : _headersArr$;
    var fileName = new Date().getTime().toString();
    if (fileNameStr) {
      fileName = fileNameStr.split('=')[1];
    }
    if (other === null || other === void 0 ? void 0 : other.fileName) fileName = other === null || other === void 0 ? void 0 : other.fileName;
    var blob = new Blob([res.data], {
      type: res.headers['content-type']
    });
    var url = window.URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', unCode ? decodeURI(escape(fileName)) : decodeURI(fileName));
    link.click();
    window.URL.revokeObjectURL(url);
    (other === null || other === void 0 ? void 0 : other.successCb) && other.successCb();
    resolve(1);
  });
};
// 去除对象中的所有空值
export var clearEmptyPro = function clearEmptyPro(data) {
  var curVal;
  var toString = Object.prototype.toString;
  var dataType = toString.call(data);
  if (data || dataType === '[object Number]' || dataType === '[object Boolean]') {
    switch (dataType) {
      case '[object Object]':
        if (Object.keys(data).length > 0) {
          var momObj = {};
          for (var key in data) {
            var value = clearEmptyPro(data[key]);
            var valueType = toString.call(value);
            valueType === '[object Boolean]' || valueType === '[object Number]' || value ? momObj[key] = value : '';
          }
          curVal = momObj;
        } else {
          return;
        }
        break;
      case '[object Array]':
        if (data.length > 0) {
          var momValue = [];
          data.forEach(function (e) {
            var value = clearEmptyPro(e);
            var valueType = toString.call(value);
            valueType === '[object Boolean]' || valueType === '[object Number]' || value ? momValue.push(value) : '';
          });
          momValue.length > 0 ? curVal = momValue : '';
        } else {
          return;
        }
        break;
      case '[object Boolean]':
      default:
        curVal = data;
        break;
    }
  } else {
    return;
  }
  return curVal;
};
export var AntdConfig = /*#__PURE__*/_createClass(function AntdConfig() {
  _classCallCheck(this, AntdConfig);
});
/**
 * 导出PDF
 * @param {导出后的文件名} title
 * @param {要导出的dom节点：react使用ref} ele
 */
AntdConfig.mount = {
  getContainer: function getContainer() {
    return document.getElementById('root') || document.body;
  }
};
AntdConfig.selectAllOvertax = function (arr) {
  if (Array.isArray(arr) && arr.length >= 10000) message.info('最多只能全选10000条，已选择前10000条数据');
};
export var exportPDF = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(title, ele) {
    var scale, pdf, width, height, canvas, contentWidth, contentHeight, pageHeight, leftHeight, position, imgWidth, imgHeight, pdfCanvas, imgDataUrl, ratio;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // 根据dpi放大，防止图片模糊
          scale = window.devicePixelRatio > 1 ? window.devicePixelRatio : 2; // 下载尺寸 a4 纸 比例
          pdf = new jsPDF('p', 'pt', 'a4');
          width = ele.offsetWidth;
          height = ele.offsetHeight;
          canvas = document.createElement('canvas');
          canvas.width = width * scale;
          canvas.height = height * scale;
          contentWidth = canvas.width;
          contentHeight = canvas.height; //一页pdf显示html页面生成的canvas高度;
          pageHeight = contentWidth / 592.28 * 841.89; //未生成pdf的html页面高度
          leftHeight = contentHeight; //页面偏移
          position = 0; //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
          imgWidth = 595.28;
          imgHeight = 592.28 / contentWidth * contentHeight;
          _context.next = 16;
          return html2canvas(ele, {
            useCORS: true,
            canvas: canvas,
            scale: scale,
            width: width,
            height: height,
            x: 0,
            y: 0
          });
        case 16:
          pdfCanvas = _context.sent;
          imgDataUrl = pdfCanvas.toDataURL();
          if (height > 14400) {
            // 超出jspdf高度限制时
            ratio = 14400 / height; // height = 14400;
            width = width * ratio;
          }
          // 缩放为 a4 大小  pdfpdf.internal.pageSize 获取当前pdf设定的宽高
          height = height * pdf.internal.pageSize.getWidth() / width;
          width = pdf.internal.pageSize.getWidth();
          if (leftHeight < pageHeight) {
            pdf.addImage(imgDataUrl, 'png', 0, 0, imgWidth, imgHeight);
          } else {
            // 分页
            while (leftHeight > 0) {
              pdf.addImage(imgDataUrl, 'png', 0, position, imgWidth, imgHeight);
              leftHeight -= pageHeight;
              position -= 841.89;
              //避免添加空白页
              if (leftHeight > 0) {
                pdf.addPage();
              }
            }
          }
          // 导出下载
          _context.next = 24;
          return pdf.save("".concat(title, ".pdf"));
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function exportPDF(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 获取当前浏览器版本信息
 * @returns
 */
export var getBrowserNameAndVersion = function getBrowserNameAndVersion() {
  var agent = navigator.userAgent.toLowerCase();
  var regStr_ie = /msie [\d.]+/gi;
  var regStr_ff = /firefox\/[\d.]+/gi;
  var regStr_chrome = /chrome\/[\d.]+/gi;
  var regStr_saf = /safari\/[\d.]+/gi;
  var browserNV = '';
  var us = {};
  //IE
  if (agent.indexOf('msie') > 0) {
    browserNV = agent.match(regStr_ie);
  }
  //firefox
  if (agent.indexOf('firefox') > 0) {
    browserNV = agent.match(regStr_ff);
  }
  //Chrome
  if (agent.indexOf('chrome') > 0) {
    browserNV = agent.match(regStr_chrome);
  }
  //Safari
  if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0) {
    browserNV = agent.match(regStr_saf);
  }
  browserNV = browserNV.toString();
  //other
  if ('' == browserNV) {
    us['notStandard'] = '不是标准浏览器';
  }
  //Here does not display "/"
  if (browserNV.indexOf('firefox') != -1 || browserNV.indexOf('chrome') != -1) {
    us[browserNV.replace('/', '_').split('_')[0]] = browserNV.replace('/', '_').split('_')[1];
  }
  //Here does not display space
  if (browserNV.indexOf('msie') != -1) {
    //msie replace IE & trim space
    //browserNV = browserNV.replace("msie","ie").replace(/\s/g,"");
    us[browserNV.replace('msie', 'ie').replace(/\s/g, '_').split('_')[0]] = browserNV.replace('msie', 'ie').replace(/\s/g, '_').split('_')[1];
  }
  //return eg： {ie:'9.0', firefox:'34.0', chrome:'37.0'}
  return us;
};
/**
 * 版本号比较
 * @returns  -1, 0, 1
 */
export var versionStringCompare = function versionStringCompare() {
  var preVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var lastVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var sources = preVersion.split('.');
  var dests = lastVersion.split('.');
  var maxL = Math.max(sources.length, dests.length);
  var result = 0;
  for (var i = 0; i < maxL; i++) {
    var preValue = sources.length > i ? sources[i] : 0;
    var preNum = isNaN(Number(preValue)) ? preValue.charCodeAt() : Number(preValue);
    var lastValue = dests.length > i ? dests[i] : 0;
    var lastNum = isNaN(Number(lastValue)) ? lastValue.charCodeAt() : Number(lastValue);
    if (preNum < lastNum) {
      result = -1;
      break;
    } else if (preNum > lastNum) {
      result = 1;
      break;
    }
  }
  return result;
};
/**
 * 将手机号更改为 隐藏中间，显示前三位 后四位
 * @returns  -1, 0, 1
 */
export var changeMobileTxt = function changeMobileTxt(mobile) {
  if (mobile && typeof mobile === 'string' && mobile !== '-') {
    var leng = mobile.length;
    return mobile.substring(0, 3) + '****' + mobile.substring(leng - 4, leng);
  } else {
    return '-';
  }
};
/**
 * 将一维数组转成 树形结构的数据
 * @param arr 一维数组
 * @param id 映射的 id
 * @param pid 映射的 parentId
 * @param defaultPidValue parentId 的默认值
 * @returns
 */
export var arrayToTree = function arrayToTree(arr, id, pid) {
  var defaultPidValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  if (!(arr instanceof Array)) {
    throw Error('arr is not Array!');
  }
  var result = []; // 存放结果集
  var itemMap = {}; //
  var _iterator = _createForOfIteratorHelper(arr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var _id = item[id];
      var _parentId = item[pid];
      if (!itemMap[_id]) {
        itemMap[_id] = {
          children: []
        };
      }
      itemMap[_id] = _objectSpread(_objectSpread({}, item), {}, {
        children: itemMap[_id]['children']
      });
      var treeItem = itemMap[_id];
      if (_parentId === defaultPidValue.toString()) {
        result.push(treeItem);
      } else {
        if (!itemMap[_parentId]) {
          itemMap[_parentId] = {
            children: []
          };
        }
        itemMap[_parentId].children.push(treeItem);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
};
/**
 * 将对象数据 转成 get 类型的参数
 * @param param {}
 * @returns
 */
export var objToQuery = function objToQuery(param) {
  return JSON.stringify(param).replace(/:/g, '=').replace(/,/g, '&').replace(/{/g, '?').replace(/}/g, '').replace(/"/g, '');
};
/**
 * 关键字高亮, 区分大小写
 * @param string 原始字符串
 * @param words 关键字，数组类型，可多个关键字
 * @returns ReactNode 节点
 */
export var keywordHighlight = function keywordHighlight(string, words) {
  var _string;
  var reg = new RegExp(words.join('|'), 'g');
  string = (_string = string) !== null && _string !== void 0 ? _string : '';
  var token = string.replace(reg, '#@$&#');
  var elements = token.split('#').map(function (x) {
    return x[0] === '@' ? /*#__PURE__*/React.createElement('mark', {
      style: {
        color: 'red',
        background: 'unset',
        padding: 'unset',
        fontWeight: 'bold'
      }
    }, x.slice(1)) : x;
  });
  return /*#__PURE__*/React.createElement.apply(React, ['div', null].concat(_toConsumableArray(elements)));
};
/**
 * 在身份证号中 取生日
 * @param idCard
 * @returns
 */
export var getBirthForIDCard = function getBirthForIDCard(idCard) {
  var birthday = '';
  if (idCard != null && idCard != '') {
    if (idCard.length == 15) {
      birthday = '19' + idCard.slice(6, 12);
    } else if (idCard.length == 18) {
      birthday = idCard.slice(6, 14);
    }
    birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-');
    //通过正则表达式来指定输出格式为:1990-01-01
  }

  return birthday;
};
/**
 * 在身份证号中 取性别
 * @param idCard
 * @returns
 */
export var getSexForIDCard = function getSexForIDCard(idCard) {
  var sexStr = '';
  if (parseInt(idCard.slice(-2, -1)) % 2 == 1) {
    sexStr = '男';
  } else {
    sexStr = '女';
  }
  return sexStr;
};
export function getValueFromEvent(e) {
  return e.target.value.replace(/(^\s*)|(\s*$)/g, '');
}
export function sizeTostr(value) {
  if (null == value || value == '' || value == '0') {
    return '0 Bytes';
  }
  var unitArr = new Array('Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
  var index = 0;
  var srcsize = parseFloat(value);
  index = Math.floor(Math.log(srcsize) / Math.log(1024));
  var size = srcsize / Math.pow(1024, index);
  size = size.toFixed(2); //保留的小数位数
  return size + unitArr[index];
}
export var disabledAfterToday = function disabledAfterToday(current) {
  // Unable to select after today
  return current && current > moment().endOf('day');
};
//JSON深拷贝
export var JsonParse = function JsonParse(data) {
  //假设对象数组为data1
  var cache = [];
  var copyData = JSON.stringify(data, function (key, value) {
    if (_typeof(value) === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null;
  return copyData && JSON.parse(copyData) || null;
};
/**
 * 节流函数
 *
 * @param   {[type]}  func   [func description]
 * @param   {[type]}  delay  [delay description]
 *
 * @return  {[type]}         [return description]
 */
export var throttle = function throttle(func, delay) {
  var timer = null;
  var startTime = Date.now();
  return function () {
    var curTime = Date.now();
    var remaining = delay - (curTime - startTime);
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining); // 如果小于delay 保证在差值时间后执行
    }
  };
};