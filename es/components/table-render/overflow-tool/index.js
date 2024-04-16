import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { Popover } from 'antd';
export default function KhtOverflowTool(props) {
  var arr = props.arr,
    _props$max = props.max,
    max = _props$max === void 0 ? 1 : _props$max,
    _props$tips = props.tips,
    tips = _props$tips === void 0 ? '人' : _props$tips,
    serviceName = props.serviceName,
    toolServiceName = props.toolServiceName,
    _props$nativeProps = props.nativeProps,
    nativeProps = _props$nativeProps === void 0 ? {} : _props$nativeProps,
    _props$blockTips = props.blockTips,
    blockTips = _props$blockTips === void 0 ? false : _props$blockTips;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var splitStr = '，';
  function renderPopoverStr() {
    if (Object.prototype.toString.call(toolServiceName) === '[object Function]') return toolServiceName(arr, splitStr);
    if (toolServiceName && toolServiceName.length) {
      return arr.map(function (val) {
        var str = '';
        toolServiceName.map(function (key) {
          str += val[key];
        });
        return str;
      }).join(splitStr);
    }
    return list.join(splitStr);
  }
  // 判断是否是 null 或者 undefined
  function notNullData(val) {
    var type = Object.prototype.toString.call(val);
    if (type === '[object Null]' || type === '[object Undefined]') {
      return false;
    }
    return true;
  }
  useEffect(function () {
    if (!arr) {
      setList([]);
      return;
    }
    var strArr = typeof arr === 'string' ? arr.split(',') : arr;
    // 考虑到会返回到 'null,null'这种变态的数据结构，做下额外处理
    if (Array.isArray(strArr) && strArr.length) {
      if (serviceName) {
        var newArr = [];
        strArr.forEach(function (val) {
          if (notNullData(val) && notNullData(val[serviceName])) newArr.push(val[serviceName]);
        });
        setList(newArr);
      } else {
        setList(strArr.filter(function (v) {
          return notNullData(v);
        }));
      }
    } else {
      setList([]);
    }
  }, [arr]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, list.length > max ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: blockTips ? 'block' : 'inline-block'
    }
  }, list[0]), /*#__PURE__*/React.createElement(Popover, _objectSpread({
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 350,
        maxHeight: 150,
        overflowY: 'auto'
      }
    }, toolServiceName ? renderPopoverStr() : list.join(splitStr))
  }, nativeProps), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#1890ff',
      marginLeft: blockTips ? '0' : '2px'
    }
  }, "\u7B49".concat(list.length).concat(tips)))) : /*#__PURE__*/React.createElement("span", null, list.length ? list.join(',') : '-'));
}