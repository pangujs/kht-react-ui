import React, { useMemo } from 'react';
export default (function (props) {
  var data = props.data,
    _props$max = props.max,
    max = _props$max === void 0 ? 1 : _props$max,
    transformKey = props.transformKey,
    _props$tips = props.tips,
    tips = _props$tips === void 0 ? '' : _props$tips;
  var showData = useMemo(function () {
    return data.slice(0, max);
  }, [data, max]);
  var showText = useMemo(function () {
    if (data.length === 1) {
      if (transformKey) {
        return data[0][transformKey];
      }
      return data[0];
    } else if (data.length > 1) {
      if (transformKey) {
        return data[0][transformKey] + " \u7B49".concat(tips);
      }
      return data[0] + " \u7B49".concat(tips);
    }
  }, [showData]);
  return /*#__PURE__*/React.createElement("div", null, showText);
});