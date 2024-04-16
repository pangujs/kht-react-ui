import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Button, Modal, Steps } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import style from "./index.module.css";
import * as StepComponents from './steps-component';
var ImportControl = function ImportControl(props) {
  var Step = Steps.Step;
  var visible = props.visible,
    title = props.title,
    cancelCb = props.cancelCb,
    downloadUrl = props.downloadUrl,
    checkFildDataFn = props.checkFildDataFn,
    resObject = props.resObject,
    executeImport = props.executeImport,
    actionUrl = props.actionUrl;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isHandle = _useState4[0],
    setIsHandle = _useState4[1];
  var fileId = useRef('');
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    btnLoading = _useState6[0],
    setBtnLoading = _useState6[1];
  var _useState7 = useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    checkError = _useState8[0],
    setCheckError = _useState8[1];
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    successTotal = _useState10[0],
    setSuccessTotal = _useState10[1];
  var _useState11 = useState({
      state: true,
      message: '',
      progress: 0
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    threeProps = _useState12[0],
    setThreeProps = _useState12[1];
  /** 下一步 */
  var handleNext = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var result, _result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setCurrent(current + 1);
            if (!(current == 0)) {
              _context.next = 10;
              break;
            }
            setBtnLoading(true);
            _context.next = 5;
            return checkFildDataFn && checkFildDataFn(fileId.current);
          case 5:
            result = _context.sent;
            if (result.status === 200) setBtnLoading(false);
            if (!result.data.successTotal) setIsHandle(false);
            if (resObject) {
              setCheckError({
                status: result.data[resObject.status],
                failTotal: result.data[resObject.failTotal],
                successTotal: result.data[resObject.successTotal],
                errorMsg: result.data[resObject.errorMsg],
                importTotal: result.data[resObject.importTotal]
              });
            } else {
              setCheckError({
                status: result.status,
                failTotal: result.data['failTotal'] || 0,
                successTotal: result.data['successTotal'] || 0,
                errorMsg: result.data['errorMsg'] || result.message,
                importTotal: result.data['importTotal'] || 0
              });
            }
            console.info(" \n\n                \u5F53\u53D1\u73B0\u3010\u6B65\u9AA4\u4E8C\u3011\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u65F6, \u6709\u53EF\u80FD\u63A5\u53E3\u8FD4\u56DE\u53C2\u6570\u540D\u4E0D\u5BF9, \u8BA9\u540E\u7AEF\u4FEE\u6539\u7EDF\u4E00\u7684\u540D\u79F0 \n \n                \u5931\u8D25\u603B\u6761\u6570: failTotal \n\n                \u6210\u529F\u603B\u6761\u6570: successTotal \n\n                \u5BFC\u5165\u603B\u6761\u6570: importTotal \n\n                \u9519\u8BEF\u4FE1\u606F: errorMsg \n\n            ");
          case 10:
            if (!(current == 1)) {
              _context.next = 16;
              break;
            }
            setBtnLoading(true);
            _context.next = 14;
            return executeImport(fileId.current);
          case 14:
            _result = _context.sent;
            if (_result.status === 200) {
              setBtnLoading(false);
              setThreeProps({
                state: true,
                message: '',
                progress: 100
              });
              setCurrent(3);
            } else {
              setIsHandle(false);
              setThreeProps({
                state: false,
                message: _result.message,
                progress: 0
              });
            }
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleNext() {
      return _ref.apply(this, arguments);
    };
  }();
  /** 按钮 */
  var renderFooter = function renderFooter() {
    var btn = [];
    var next = /*#__PURE__*/React.createElement(Button, {
      key: "next",
      style: {
        margin: '0 5px'
      },
      loading: btnLoading,
      type: "primary",
      onClick: handleNext
    }, "\u4E0B\u4E00\u6B65");
    var pre = /*#__PURE__*/React.createElement(StepComponents.UploadCom, {
      key: "again",
      uploadSuccessCb: againUploadSuccessCb,
      showUploadList: false
    }, /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      style: {
        margin: '0 5px'
      }
    }, "\u91CD\u65B0\u5BFC\u5165"));
    var ok = /*#__PURE__*/React.createElement(Button, {
      key: "ok",
      style: {
        margin: '0 5px'
      },
      type: "primary",
      onClick: function onClick() {
        return cancelCb();
      }
    }, "\u5B8C\u6210");
    if (current === 0 && isHandle) {
      btn.push(next);
    }
    if (current === 1) {
      btn.push(isHandle ? next : null, pre);
    }
    if (current == 3) {
      btn.push(ok);
    }
    return btn;
  };
  /** 上传文件成功后的回调 */
  var uploadSuccessCb = function uploadSuccessCb(id) {
    fileId.current = id;
    setIsHandle(true);
  };
  /** 重新上传 */
  var againUploadSuccessCb = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
      var result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            fileId.current = id;
            _context2.next = 3;
            return checkFildDataFn && checkFildDataFn(id);
          case 3:
            result = _context2.sent;
            if (result.status === 200) setBtnLoading(false);
            result.data.successTotal ? setIsHandle(true) : setIsHandle(false);
            if (resObject) {
              setCheckError({
                status: result.data[resObject.status],
                failTotal: result.data[resObject.failTotal],
                successTotal: result.data[resObject.successTotal],
                errorMsg: result.data[resObject.errorMsg],
                importTotal: result.data[resObject.importTotal]
              });
            } else {
              setCheckError({
                status: result.status,
                failTotal: result.data['failTotal'] || 0,
                successTotal: result.data['successTotal'] || 0,
                errorMsg: result.data['errorMsg'] || result.message,
                importTotal: result.data['importTotal'] || 0
              });
            }
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function againUploadSuccessCb(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var Content = [/*#__PURE__*/React.createElement(StepComponents.StepOne, {
    templateUrl: downloadUrl,
    uploadSuccessCb: uploadSuccessCb,
    actionUrl: actionUrl
  }), /*#__PURE__*/React.createElement(StepComponents.StepTwo, _objectSpread({}, checkError)), /*#__PURE__*/React.createElement(StepComponents.StepThree, {
    threeProps: threeProps
  }), /*#__PURE__*/React.createElement(StepComponents.StepFour, {
    successTotal: successTotal
  })];
  useEffect(function () {
    if (!visible) {
      setCurrent(0);
    }
  }, [visible]);
  useEffect(function () {
    renderFooter();
  }, [current, isHandle]);
  useEffect(function () {
    if (checkError) setSuccessTotal(checkError.successTotal);
  }, [checkError]);
  return /*#__PURE__*/React.createElement(Modal, {
    visible: visible,
    title: title || '数据批量导入',
    onCancel: function onCancel() {
      return cancelCb();
    },
    width: "60%",
    destroyOnClose: true,
    footer: false,
    maskClosable: false
  }, /*#__PURE__*/React.createElement(Steps, {
    current: current,
    size: "small"
  }, /*#__PURE__*/React.createElement(Step, {
    title: "\u4E0A\u4F20\u6587\u4EF6",
    description: "\u6839\u636E\u6A21\u677F\u4FEE\u6539\u540E\u4E0A\u4F20"
  }), /*#__PURE__*/React.createElement(Step, {
    title: "\u9884\u89C8\u6570\u636E",
    description: "\u9884\u89C8\u5E76\u68C0\u67E5\u6570\u636E"
  }), /*#__PURE__*/React.createElement(Step, {
    title: "\u6267\u884C\u5BFC\u5165",
    description: "\u6570\u636E\u5BFC\u5165\u81F3\u670D\u52A1\u5668"
  }), /*#__PURE__*/React.createElement(Step, {
    title: "\u5BFC\u5165\u6570\u636E",
    description: "\u5B8C\u6210\u6570\u636E\u6279\u91CF\u5BFC\u5165"
  })), /*#__PURE__*/React.createElement("div", {
    className: style.stepContent
  }, Content[current]), /*#__PURE__*/React.createElement("div", {
    className: style['modal-footer']
  }, renderFooter()));
};
export default ImportControl;