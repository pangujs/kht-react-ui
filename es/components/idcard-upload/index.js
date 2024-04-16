import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import "./index.css";
import { Spin, message, Image } from 'antd';
import { uploadStreanFile } from './api';
import { CloseCircleOutlined } from '@ant-design/icons';
import idcardZ from './img/idcard_z.png';
import idcardF from './img/idcard_f.png';
export var IdcardUpload = function IdcardUpload(props) {
  var _props$handleType = props.handleType,
    handleType = _props$handleType === void 0 ? 'edit' : _props$handleType,
    defaultDate = props.defaultDate;
  var _useState = useState({
      pros: {},
      cons: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    fileDate = _useState2[0],
    setFileDate = _useState2[1];
  var _onChange = function onChange(obj, type) {
    var temp = _objectSpread(_objectSpread({}, fileDate), {}, _defineProperty({}, type, obj));
    setFileDate(temp);
    props.onChange && props.onChange(temp);
  };
  useEffect(function () {
    if (defaultDate) {
      setFileDate(defaultDate);
    }
  }, [defaultDate]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pro-form-idcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "idcard-box"
  }, /*#__PURE__*/React.createElement(UploaderIdCard, {
    handleType: handleType,
    defaultValue: fileDate.pros,
    onChange: function onChange(obj) {
      return _onChange(obj, 'pros');
    }
  }), handleType !== 'review' ? /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "\u8EAB\u4EFD\u8BC1\u4EBA\u50CF\u9762") : null), /*#__PURE__*/React.createElement("div", {
    className: "idcard-box idcard-box2"
  }, /*#__PURE__*/React.createElement(UploaderIdCard, {
    handleType: handleType,
    defaultValue: fileDate.cons,
    type: "f",
    onChange: function onChange(obj) {
      return _onChange(obj, 'cons');
    }
  }), handleType !== 'review' ? /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "\u8EAB\u4EFD\u8BC1\u56FD\u5FBD\u9762") : null));
};
var UploaderIdCard = function UploaderIdCard(props) {
  var _props$accept = props.accept,
    accept = _props$accept === void 0 ? 'image/*' : _props$accept,
    handleType = props.handleType,
    defaultValue = props.defaultValue,
    _props$type = props.type,
    type = _props$type === void 0 ? 'z' : _props$type;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var inputRef = useRef(null);
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    fileObj = _useState6[0],
    setFileObj = _useState6[1];
  var _onChange2 = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var file, type, params, data, response, temp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(handleType == 'review')) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            console.log(e.target.files);
            file = e.target.files[0];
            if (e.target.files.length) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            type = file.type.split('/')[0];
            if (!(accept && !accept.includes(type))) {
              _context.next = 10;
              break;
            }
            message.warning('请选择正确格式的文件');
            return _context.abrupt("return");
          case 10:
            if (!(type !== 'video' && type !== 'image')) {
              _context.next = 13;
              break;
            }
            // 判断是否视频 和 图片
            message.warning('请选择图片或者视频文件');
            return _context.abrupt("return");
          case 13:
            params = new FormData();
            params.append('businessType', 'assets');
            params.append('file', file);
            _context.prev = 16;
            setLoading(true);
            _context.next = 20;
            return uploadStreanFile(params);
          case 20:
            data = _context.sent;
            if (data.success) {
              response = data.response;
              temp = _objectSpread(_objectSpread({}, response), {}, {
                fileId: response.uuid,
                fileUrl: response.url,
                fileType: file.type.split('/')[0],
                type: file.type,
                memory: response.size,
                name: response.originalName,
                path: response.url
              });
              setFileObj(temp);
              props.onChange && props.onChange(temp);
            }
            _context.next = 27;
            break;
          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](16);
            message.error('上传失败');
          case 27:
            inputRef.current.value = '';
            setLoading(false);
          case 29:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[16, 24]]);
    }));
    return function onChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var delItem = function delItem(e) {
    e.stopPropagation();
    setFileObj({});
    props.onChange && props.onChange({});
  };
  var uploaderClick = function uploaderClick() {
    if (handleType === 'review') return;
    inputRef.current.click();
  };
  useEffect(function () {
    setFileObj(defaultValue);
  }, [defaultValue]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "uploader-box",
    onClick: uploaderClick,
    style: {
      backgroundImage: "url(".concat(type == 'z' ? idcardZ : idcardF, ")")
    }
  }, handleType === 'review' ? /*#__PURE__*/React.createElement(Image, {
    src: fileObj.fileUrl
  }) : (fileObj === null || fileObj === void 0 ? void 0 : fileObj.url) || fileObj.fileUrl ? /*#__PURE__*/React.createElement("img", {
    className: "img",
    src: (fileObj === null || fileObj === void 0 ? void 0 : fileObj.url) || fileObj.fileUrl
  }) : null, /*#__PURE__*/React.createElement("input", {
    type: "file",
    hidden: true,
    accept: accept,
    multiple: false,
    ref: inputRef,
    className: "uploader-input",
    onChange: function onChange(e) {
      return _onChange2(e);
    }
  }), loading ? /*#__PURE__*/React.createElement("div", {
    className: "loading"
  }, /*#__PURE__*/React.createElement(Spin, null)) : null, handleType !== 'review' && ((fileObj === null || fileObj === void 0 ? void 0 : fileObj.url) || fileObj.fileUrl) ? /*#__PURE__*/React.createElement("span", {
    className: "del-icon",
    onClick: delItem
  }, /*#__PURE__*/React.createElement(CloseCircleOutlined, {
    style: {
      fontSize: 18
    }
  })) : null));
};