import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// 一些关于 pro table 的公共属性方法
import { message } from 'antd';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
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