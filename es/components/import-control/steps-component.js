import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import style from "./index.module.css";
import { Upload, message, Button, Progress, Result } from 'antd';
import { CloudUploadOutlined, DownloadOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
/** 上传文件组件 */
export var UploadCom = function UploadCom(props) {
  function onChange(info) {
    if (info.file.status === 'done') {
      var _info$file$response$d, _info$file, _info$file$response, _info$file$response$d2;
      console.log(info, info.file.response.data);
      var fileId = (_info$file$response$d = info === null || info === void 0 ? void 0 : (_info$file = info.file) === null || _info$file === void 0 ? void 0 : (_info$file$response = _info$file.response) === null || _info$file$response === void 0 ? void 0 : (_info$file$response$d2 = _info$file$response.data) === null || _info$file$response$d2 === void 0 ? void 0 : _info$file$response$d2.id) !== null && _info$file$response$d !== void 0 ? _info$file$response$d : '';
      if (fileId && props.uploadSuccessCb) props.uploadSuccessCb(fileId);
    } else if (info.file.status === 'error') {
      info.file.response = '上传失败';
      message.error("".concat(info.file.name, " \u4E0A\u4F20\u5931\u8D25"));
    }
  }
  function onRemove(file) {
    console.log(file);
  }
  var children = props.children,
    _props$name = props.name,
    name = _props$name === void 0 ? 'file' : _props$name,
    _props$action = props.action,
    action = _props$action === void 0 ? '/file/upload' : _props$action,
    _props$maxCount = props.maxCount,
    maxCount = _props$maxCount === void 0 ? 1 : _props$maxCount,
    _props$showUploadList = props.showUploadList,
    showUploadList = _props$showUploadList === void 0 ? true : _props$showUploadList,
    _props$accept = props.accept,
    accept = _props$accept === void 0 ? 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : _props$accept,
    _props$withCredential = props.withCredentials,
    withCredentials = _props$withCredential === void 0 ? true : _props$withCredential;
  return /*#__PURE__*/React.createElement(Upload, {
    name: name,
    action: action,
    maxCount: maxCount,
    showUploadList: showUploadList,
    accept: accept,
    withCredentials: withCredentials,
    onChange: onChange,
    onRemove: onRemove
  }, children);
};
/** 步骤一 */
export var StepOne = function StepOne(props) {
  var templateUrl = props.templateUrl,
    uploadSuccessCb = props.uploadSuccessCb,
    actionUrl = props.actionUrl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: style['content']
  }, /*#__PURE__*/React.createElement("div", {
    className: style['content-left']
  }, /*#__PURE__*/React.createElement(DownloadOutlined, null)), /*#__PURE__*/React.createElement("div", {
    className: style['content-right']
  }, /*#__PURE__*/React.createElement("h2", null, "\u586B\u5199\u5BFC\u5165\u6570\u636E\u4FE1\u606F"), /*#__PURE__*/React.createElement("h4", {
    className: style['sub-title']
  }, "\u8BF7\u6309\u7167\u6570\u636E\u6A21\u677F\u7684\u683C\u5F0F\u51C6\u5907\u5BFC\u5165\u6570\u636E\uFF0C\u6A21\u677F\u4E2D\u7684\u8868\u5934\u540D\u79F0\u4E0D\u53EF\u66F4\u6539\uFF0C\u8868\u5934\u884C\u4E0D\u80FD\u5220\u9664"), /*#__PURE__*/React.createElement("h6", null, /*#__PURE__*/React.createElement("a", {
    href: templateUrl
  }, "\u4E0B\u8F7D\u6A21\u677F")))), /*#__PURE__*/React.createElement("div", {
    className: style['content']
  }, /*#__PURE__*/React.createElement("div", {
    className: style['content-left']
  }, /*#__PURE__*/React.createElement(CloudUploadOutlined, null)), /*#__PURE__*/React.createElement("div", {
    className: style['content-right']
  }, /*#__PURE__*/React.createElement("h2", null, "\u4E0A\u4F20\u586B\u597D\u7684\u4FE1\u606F\u8868"), /*#__PURE__*/React.createElement("h4", {
    className: style['sub-title']
  }, "\u6587\u4EF6\u540E\u540E\u7F00\u540D\u5FC5\u987B\u4E3A.xls \u6216.xlsx (\u5373excel\u683C\u5F0F)\uFF0C\u6587\u4EF6\u5927\u5C0F\u4E0D\u5F97\u5927\u4E8E10MB,\u6700\u591A\u652F\u6301\u5BFC\u51653000\u6761\u6570\u636E"), /*#__PURE__*/React.createElement("h6", null, /*#__PURE__*/React.createElement(UploadCom, {
    uploadSuccessCb: uploadSuccessCb,
    action: actionUrl
  }, /*#__PURE__*/React.createElement(Button, {
    type: "link",
    style: {
      paddingLeft: 0
    }
  }, "\u4E0A\u4F20\u6587\u4EF6"))))));
};
/** 步骤二 */
export var StepTwo = function StepTwo(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: style['content']
  }, /*#__PURE__*/React.createElement("div", {
    className: style['content-left']
  }, /*#__PURE__*/React.createElement(InfoCircleOutlined, null)), /*#__PURE__*/React.createElement("div", {
    className: style['content-right']
  }, /*#__PURE__*/React.createElement("h3", null, "\u6B63\u5E38\u6570\u91CF\u6761\u6570: ", /*#__PURE__*/React.createElement("span", {
    className: style['success-tip']
  }, props.successTotal), ' '), /*#__PURE__*/React.createElement("h3", null, "\u5931\u8D25\u6570\u91CF\u6761\u6570: ", /*#__PURE__*/React.createElement("span", {
    className: style['error-tip']
  }, props.failTotal), ' '), /*#__PURE__*/React.createElement("h3", null, "\u5BFC\u5165\u6570\u91CF\u603B\u6761\u6570: ", /*#__PURE__*/React.createElement("span", {
    className: style['wait-tip']
  }, props.importTotal), ' '))), props.status !== 200 || props.failTotal > 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      paddingLeft: '15px'
    }
  }, "\u60A8\u9700\u8981\u5728\u6A21\u677F\u4E2D\u4FEE\u6539\u9519\u8BEF\u7684\u4FE1\u606F\uFF0C\u518D\u8FDB\u884C\u5BFC\u5165"), /*#__PURE__*/React.createElement("div", {
    className: style['content-error']
  }, /*#__PURE__*/React.createElement(Scrollbars, {
    autoHide: true
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontWeight: 700,
      margin: 0
    }
  }, "\u5F02\u5E38\u63D0\u793A: "), props.errorMsg instanceof Array ? props.errorMsg.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      className: style['error-list']
    }, item);
  }) : /*#__PURE__*/React.createElement("div", {
    className: style['error-list']
  }, props.errorMsg)))) : null);
};
/** 步骤三 */
export var StepThree = function StepThree(props) {
  var threeProps = props.threeProps;
  var _useState = useState(threeProps.progress),
    _useState2 = _slicedToArray(_useState, 2),
    progress = _useState2[0],
    setProgress = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    currentTime = _useState4[0],
    setCurrentTime = _useState4[1];
  var timer = setInterval(function () {
    setCurrentTime(currentTime + 1);
    if (currentTime <= 6) {
      setProgress(progress + 10);
    } else {
      setProgress(Number((progress + 0.1).toFixed(2)));
    }
    if (progress <= 100) clearInterval(timer);
  }, 1000);
  return /*#__PURE__*/React.createElement(React.Fragment, null, threeProps.state ? /*#__PURE__*/React.createElement("div", {
    className: style['progress-box']
  }, /*#__PURE__*/React.createElement(Progress, {
    strokeColor: {
      from: '#108ee9',
      to: '#87d068'
    },
    percent: progress,
    status: "active"
  })) : /*#__PURE__*/React.createElement("div", {
    className: style['content']
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Result, {
    status: "error",
    title: "\u6570\u636E\u5BFC\u5165\u5931\u8D25!",
    subTitle: threeProps.message
  }))));
};
/** 步骤四 */
export var StepFour = function StepFour(props) {
  return /*#__PURE__*/React.createElement(Result, {
    status: "success",
    title: "\u6570\u636E\u5BFC\u5165\u6210\u529F!",
    subTitle: '已成功导入数据 ' + props.successTotal + ' 条！'
  });
};