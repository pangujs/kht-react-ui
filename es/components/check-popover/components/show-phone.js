import React from 'react';
import { Space } from 'antd';
import { KhtbusinessMobileText } from '../../../index';
export default function ShowPhone(props) {
  var _telephone;
  var telephone = props.phone;
  if (!telephone || ((_telephone = telephone) === null || _telephone === void 0 ? void 0 : _telephone.length) == 0) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "-");
  } else {
    var _telephone2;
    if (Object.prototype.toString.call(telephone) === '[object String]') {
      telephone = telephone.split(',');
    }
    if (((_telephone2 = telephone) === null || _telephone2 === void 0 ? void 0 : _telephone2.length) < 4) {
      var _telephone3;
      return /*#__PURE__*/React.createElement(Space, {
        direction: "vertical"
      }, (_telephone3 = telephone) === null || _telephone3 === void 0 ? void 0 : _telephone3.map(function (i, index) {
        return /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
          value: [i],
          key: index
        });
      }));
    } else {
      return /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
        value: telephone
      });
    }
  }
}