import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Cascader } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAdministrativeProvince, getAdministrativeCity, getAdministrativeDistrict } from './api';
export default function AreaCascader(props) {
  // timeStamp 多个组件 避免重复请求被取消
  var value = props.value,
    timeStamp = props.timeStamp;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    provinces = _useState2[0],
    setProvinces = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    address = _useState4[0],
    setAddress = _useState4[1];
  //省
  var getProvince = function getProvince() {
    getAdministrativeProvince(timeStamp ? "timeStamp=".concat(timeStamp) : '').then(function (res) {
      var provincesOpts = [];
      res.response.forEach(function (item) {
        var label = item.provinceName,
          provinceCode = item.provinceCode;
        var opts = {
          value: label,
          code: provinceCode,
          label: label,
          isLeaf: false,
          isNext: 'province' //是否调用下级接口
        };

        provincesOpts.push(opts);
      });
      setProvinces(provincesOpts);
    });
  };
  //市
  var provincesChange = function provincesChange(value, targetOption, isSelect) {
    return getAdministrativeCity("provinceCode=".concat(targetOption.code)).then(function (res) {
      var response = res.response,
        code = res.code;
      if (code === 1) {
        return getTargetOption(response, targetOption, isSelect);
      }
    });
  };
  //区
  var citiesChange = function citiesChange(value, targetOption, isSelect) {
    return getAdministrativeDistrict("cityCode=".concat(targetOption.code)).then(function (res) {
      var response = res.response,
        code = res.code;
      if (code === 1) {
        return getTargetOption(response, targetOption, isSelect);
      }
    });
  };
  var loadData = function loadData(selectedOptions) {
    var _selectedOptions = selectedOptions[selectedOptions.length - 1],
      isNext = _selectedOptions.isNext,
      value = _selectedOptions.value;
    var targetOption = selectedOptions[selectedOptions.length - 1];
    setAddress(address);
    if (isNext === 'province') {
      provincesChange(value, targetOption, 'city');
    }
    if (isNext === 'city') {
      citiesChange(value, targetOption, 'district');
    }
  };
  var getTargetOption = function getTargetOption(data, targetOption, isSelect) {
    var provincesOpts = [];
    data.forEach(function (item) {
      var opts = {
        value: item["".concat(isSelect, "Name")],
        code: item["".concat(isSelect, "Code")],
        label: item["".concat(isSelect, "Name")],
        isLeaf: isSelect === 'district' ? true : false,
        isNext: isSelect //是否调用下级接口
      };

      provincesOpts.push(opts);
    });
    targetOption.children = provincesOpts;
    setProvinces(_toConsumableArray(provinces));
    return targetOption;
  };
  var onChange = function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
    props.onChange && props.onChange(value);
  };
  useEffect(function () {
    if (!provinces.length) getProvince();
  }, []);
  return /*#__PURE__*/React.createElement(Cascader, {
    value: value,
    options: provinces,
    getPopupContainer: function getPopupContainer(node) {
      return (node === null || node === void 0 ? void 0 : node.parentElement) || document.body;
    },
    onChange: onChange,
    loadData: loadData,
    placeholder: "\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
  });
}