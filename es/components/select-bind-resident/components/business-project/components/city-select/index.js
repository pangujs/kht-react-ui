import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { KhtDrawerSearchProTable } from '../../../../../../index';
import "./index.css";
import { getAdministrativeProvince, getAdministrativeCity, getAdministrativeDistrict } from '../../api';
var CascaderForm = KhtDrawerSearchProTable.CascaderForm;
// 省市区
export default function CitySelect(props) {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var getProvinceList = function getProvinceList() {
    getAdministrativeProvince({}).then(function (_ref) {
      var response = _ref.response;
      (response || []).map(function (c) {
        c['value'] = c.provinceName;
        c['label'] = c.provinceName;
        c['isLeaf'] = false;
        c['type'] = 'province';
      });
      setOptions(response);
    });
  };
  var getCityList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(provinceCode) {
      var _yield$getAdministrat, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getAdministrativeCity({
              provinceCode: provinceCode
            });
          case 2:
            _yield$getAdministrat = _context.sent;
            response = _yield$getAdministrat.response;
            (response || []).map(function (c) {
              c['value'] = c.cityName;
              c['label'] = c.cityName;
              c['isLeaf'] = false;
              c['type'] = 'city';
            });
            return _context.abrupt("return", response);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getCityList(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getDistrictList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cityCode) {
      var _yield$getAdministrat2, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getAdministrativeDistrict({
              cityCode: cityCode
            });
          case 2:
            _yield$getAdministrat2 = _context2.sent;
            response = _yield$getAdministrat2.response;
            (response || []).map(function (c) {
              c['value'] = c.districtName;
              c['label'] = c.districtName;
              c['isLeaf'] = true;
              c['type'] = 'district';
            });
            return _context2.abrupt("return", response);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getDistrictList(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadData = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(selectedOptions) {
      var targetOption;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            targetOption = selectedOptions[selectedOptions.length - 1] || {};
            if (!(targetOption.type === 'province')) {
              _context3.next = 5;
              break;
            }
            _context3.next = 4;
            return getCityList(targetOption.provinceCode);
          case 4:
            targetOption['children'] = _context3.sent;
          case 5:
            if (!(targetOption.type === 'city')) {
              _context3.next = 9;
              break;
            }
            _context3.next = 8;
            return getDistrictList(targetOption.cityCode);
          case 8:
            targetOption['children'] = _context3.sent;
          case 9:
            (options || []).map(function (c) {
              if (c.label === targetOption.label) {
                c = _objectSpread({}, targetOption);
              }
            });
            setOptions(_toConsumableArray(options));
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function loadData(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  useEffect(function () {
    getProvinceList();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CascaderForm, _objectSpread({
    getPopupContainer: function getPopupContainer() {
      return document.querySelector('#root');
    },
    popupClassName: "city-cascader",
    options: options,
    loadData: loadData,
    changeOnSelect: true
  }, props)));
}