import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { Button, message, Image, Popover, Modal } from 'antd';
import { uploadStreanFile } from './api';
import { CloseOutlined, HeartOutlined } from '@ant-design/icons';
import "./index.css";
import { sizeTostr } from '../../utils';
import KhtIcons from '../kht-icons';
// 常用文件后缀
var imageStr = 'BMP,GIF,JPG,PNG,JPEG,SVG,JFIF';
var videoStr = 'AVI,WMV,MPEG,MPG,MOV,SWF,FLV,MP4';
var excelStr = 'XLS,XLSX';
var wordStr = 'DOC,DOCX';
var pptStr = 'PPT,PPTX';
export default function FileUpload(props) {
  var _props$btnText = props.btnText,
    btnText = _props$btnText === void 0 ? '添加' : _props$btnText,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? false : _props$multiple,
    _props$accept = props.accept,
    accept = _props$accept === void 0 ? 'image/*' : _props$accept,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    _props$hasPopover = props.hasPopover,
    hasPopover = _props$hasPopover === void 0 ? false : _props$hasPopover,
    _props$maxCount = props.maxCount,
    maxCount = _props$maxCount === void 0 ? 9 : _props$maxCount,
    defaultFileList = props.defaultFileList,
    _props$handleType = props.handleType,
    handleType = _props$handleType === void 0 ? 'add' : _props$handleType;
  var inputRef = useRef(null);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    previewOpen = _useState8[0],
    setPreviewOpen = _useState8[1];
  var _useState9 = useState(),
    _useState10 = _slicedToArray(_useState9, 2),
    previewData = _useState10[0],
    setPreviewData = _useState10[1];
  var previewClick = function previewClick(item) {
    setPreviewData(item);
    setPreviewOpen(true);
  };
  var _onChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var file, type, isTrue, temp, index, params, data, response, fileType, _temp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(e.target.files);
            file = e.target.files[0];
            if (e.target.files.length) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            type = file.type.split('/')[0];
            if (!(accept == '')) {
              _context.next = 21;
              break;
            }
            // 全部类型，如果需要做文件格式范围限制，在这拦截
            // 限制格式 image video pdf word excel txt ppt
            isTrue = false;
            temp = ['image', 'video', 'pdf', 'sheet', 'excel', 'word', 'plain', 'text', 'powerpoint', 'presentation'];
            index = 0;
          case 9:
            if (!(index < temp.length)) {
              _context.next = 16;
              break;
            }
            if (!file.type.includes(temp[index])) {
              _context.next = 13;
              break;
            }
            isTrue = true;
            return _context.abrupt("break", 16);
          case 13:
            index++;
            _context.next = 9;
            break;
          case 16:
            if (isTrue) {
              _context.next = 19;
              break;
            }
            message.warning('请选择正确格式的文件, 仅支持image,video,pdf,word,excel,txt,ppt七种文件');
            return _context.abrupt("return");
          case 19:
            _context.next = 24;
            break;
          case 21:
            if (!(accept && !accept.includes(type))) {
              _context.next = 24;
              break;
            }
            message.warning('请选择正确格式的文件');
            return _context.abrupt("return");
          case 24:
            params = new FormData();
            params.append('businessType', 'assets');
            params.append('file', file);
            _context.prev = 27;
            setLoading(true);
            _context.next = 31;
            return uploadStreanFile(params);
          case 31:
            data = _context.sent;
            if (data.success) {
              response = data.response; // 文件类型
              fileType = file.type.includes('application') ? file.type.split('/')[1] : file.type.split('/')[0];
              _temp = _objectSpread(_objectSpread({}, response), {}, {
                fileId: response.uuid,
                fileUrl: response.url,
                // fileType,
                // type: file.type,
                memory: response.size,
                name: response.originalName,
                path: response.url
              });
              setFileList([].concat(_toConsumableArray(fileList), [_temp]));
              props.onChange && props.onChange({
                file: file,
                fileList: [].concat(_toConsumableArray(fileList), [_temp])
              });
            }
            _context.next = 38;
            break;
          case 35:
            _context.prev = 35;
            _context.t0 = _context["catch"](27);
            message.error('上传失败');
          case 38:
            inputRef.current.value = '';
            setLoading(false);
          case 40:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[27, 35]]);
    }));
    return function onChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var delItem = function delItem(index, item) {
    fileList.splice(index, 1);
    setFileList(_toConsumableArray(fileList));
    props.onChange && props.onChange({
      file: item,
      fileList: _toConsumableArray(fileList)
    });
  };
  var getFileUrlSuffix = function getFileUrlSuffix(url) {
    var _url$substring;
    if (!url) return '';
    return ((_url$substring = url.substring(url.lastIndexOf('.') + 1)) === null || _url$substring === void 0 ? void 0 : _url$substring.toUpperCase()) || '';
  };
  useEffect(function () {
    setDisabled(fileList.length >= maxCount);
  }, [fileList]);
  useEffect(function () {
    if (defaultFileList) setFileList(defaultFileList);
  }, [defaultFileList]);
  var content = /*#__PURE__*/React.createElement("div", {
    className: "file-upload-popover-item-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item",
    onClick: function onClick() {
      return inputRef.current.click();
    }
  }, /*#__PURE__*/React.createElement(HeartOutlined, null), /*#__PURE__*/React.createElement("span", null, "\u56FE\u7247")), /*#__PURE__*/React.createElement("div", {
    className: "item",
    onClick: function onClick() {
      return inputRef.current.click();
    }
  }, /*#__PURE__*/React.createElement(HeartOutlined, null), /*#__PURE__*/React.createElement("span", null, "\u89C6\u9891")), /*#__PURE__*/React.createElement("div", {
    className: "item",
    onClick: function onClick() {
      return inputRef.current.click();
    }
  }, /*#__PURE__*/React.createElement(HeartOutlined, null), /*#__PURE__*/React.createElement("span", null, "\u6587\u4EF6")), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement(HeartOutlined, null), /*#__PURE__*/React.createElement("span", null, "\u7F51\u9875")), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement(HeartOutlined, null), /*#__PURE__*/React.createElement("span", null, "\u5C0F\u7A0B\u5E8F")));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "uploader-component"
  }, handleType !== 'review' ? /*#__PURE__*/React.createElement("div", {
    className: "uploader-btn"
  }, hasPopover ? /*#__PURE__*/React.createElement(Popover, {
    content: content,
    getPopupContainer: function getPopupContainer() {
      return document.body;
    },
    placement: placement
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: disabled
  }, btnText)) : /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return inputRef.current.click();
    },
    loading: loading,
    disabled: disabled
  }, btnText), /*#__PURE__*/React.createElement("input", {
    type: "file",
    hidden: true,
    accept: accept,
    multiple: multiple,
    ref: inputRef,
    className: "uploader-input",
    onChange: function onChange(e) {
      return _onChange(e);
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "file-list-box ".concat(handleType === 'review' ? 'review' : '')
  }, fileList && fileList.length ? fileList.map(function (item, index) {
    var _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11;
    return /*#__PURE__*/React.createElement("div", {
      className: "list",
      key: item.fileUrl || item.url
    }, /*#__PURE__*/React.createElement("div", {
      className: "left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "file-icon"
    }, (((_ref2 = item.type || item.fileType) === null || _ref2 === void 0 ? void 0 : _ref2.includes('image')) || imageStr.includes(getFileUrlSuffix(item.fileUrl || item.url))) && /*#__PURE__*/React.createElement(Image, {
      src: item.fileUrl || item.url
    }), (((_ref3 = item.type || item.fileType) === null || _ref3 === void 0 ? void 0 : _ref3.includes('video')) || videoStr.includes(getFileUrlSuffix(item.fileUrl || item.url))) && /*#__PURE__*/React.createElement("div", {
      className: "file-video-box",
      onClick: function onClick() {
        return previewClick(item);
      }
    }, /*#__PURE__*/React.createElement("video", {
      className: "file-nut-video-player",
      muted: true,
      autoPlay: false,
      loop: false,
      controls: false,
      src: item.url
    }, /*#__PURE__*/React.createElement("source", {
      src: item.fileUrl || item.url,
      type: item.type
    }), /*#__PURE__*/React.createElement("track", {
      kind: "captions"
    }))), (((_ref4 = item.type || item.fileType) === null || _ref4 === void 0 ? void 0 : _ref4.includes('pdf')) || getFileUrlSuffix(item.fileUrl || item.url) == 'PDF') && /*#__PURE__*/React.createElement("div", {
      className: "file-icon-box"
    }, /*#__PURE__*/React.createElement(KhtIcons, {
      type: "icon-pdf"
    })), (((_ref5 = item.type || item.fileType) === null || _ref5 === void 0 ? void 0 : _ref5.includes('sheet')) || ((_ref6 = item.type || item.fileType) === null || _ref6 === void 0 ? void 0 : _ref6.includes('excel')) || excelStr.includes(getFileUrlSuffix(item.fileUrl || item.url))) && /*#__PURE__*/React.createElement("div", {
      className: "file-icon-box"
    }, /*#__PURE__*/React.createElement(KhtIcons, {
      type: "icon-excel"
    })), (((_ref7 = item.type || item.fileType) === null || _ref7 === void 0 ? void 0 : _ref7.includes('word')) || wordStr.includes(getFileUrlSuffix(item.fileUrl || item.url))) && /*#__PURE__*/React.createElement("div", {
      className: "file-icon-box"
    }, /*#__PURE__*/React.createElement(KhtIcons, {
      type: "icon-word"
    })), (((_ref8 = item.type || item.fileType) === null || _ref8 === void 0 ? void 0 : _ref8.includes('plain')) || ((_ref9 = item.type || item.fileType) === null || _ref9 === void 0 ? void 0 : _ref9.includes('text')) || getFileUrlSuffix(item.fileUrl || item.url) == 'TXT') && /*#__PURE__*/React.createElement("div", {
      className: "file-icon-box"
    }, /*#__PURE__*/React.createElement(KhtIcons, {
      type: "icon-txt"
    })), (((_ref10 = item.type || item.fileType) === null || _ref10 === void 0 ? void 0 : _ref10.includes('powerpoint')) || ((_ref11 = item.type || item.fileType) === null || _ref11 === void 0 ? void 0 : _ref11.includes('presentation')) || pptStr.includes(getFileUrlSuffix(item.fileUrl || item.url))) && /*#__PURE__*/React.createElement("div", {
      className: "file-icon-box"
    }, /*#__PURE__*/React.createElement(KhtIcons, {
      type: "icon-ppt"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "file-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "file-name"
    }, item.name || item.fileName), /*#__PURE__*/React.createElement("div", {
      className: "file-size"
    }, sizeTostr(item.memory || item.fileSize)))), handleType !== 'review' ? /*#__PURE__*/React.createElement("div", {
      className: "right",
      onClick: function onClick() {
        return delItem(index, item);
      }
    }, /*#__PURE__*/React.createElement(CloseOutlined, null)) : null);
  }) : null), /*#__PURE__*/React.createElement(Modal, {
    wrapClassName: "file-upload-preview-modal",
    getContainer: document.getElementById('root') || document.body,
    width: 800,
    open: previewOpen,
    title: "\u9884\u89C8",
    footer: null,
    onCancel: function onCancel() {
      return setPreviewOpen(false);
    }
  }, (previewData === null || previewData === void 0 ? void 0 : previewData.fileType) === 'image' || imageStr.includes(getFileUrlSuffix((previewData === null || previewData === void 0 ? void 0 : previewData.fileUrl) || (previewData === null || previewData === void 0 ? void 0 : previewData.url))) ? /*#__PURE__*/React.createElement("img", {
    className: "image",
    src: (previewData === null || previewData === void 0 ? void 0 : previewData.url) || (previewData === null || previewData === void 0 ? void 0 : previewData.fileUrl)
  }) : /*#__PURE__*/React.createElement("video", {
    className: "file-nut-video-player",
    muted: true,
    autoPlay: true,
    loop: false,
    controls: true,
    src: (previewData === null || previewData === void 0 ? void 0 : previewData.url) || (previewData === null || previewData === void 0 ? void 0 : previewData.fileUrl),
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("source", {
    src: (previewData === null || previewData === void 0 ? void 0 : previewData.url) || (previewData === null || previewData === void 0 ? void 0 : previewData.fileUrl),
    type: (previewData === null || previewData === void 0 ? void 0 : previewData.type) || (previewData === null || previewData === void 0 ? void 0 : previewData.fileType)
  }), /*#__PURE__*/React.createElement("track", {
    kind: "captions"
  })))));
}