import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { ConfigProvider } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import emptyImg from '../../assets/images/table-null.png';
import { defaultPagination } from '../../utils/pagination';
import "./index.css";
//抽屉表格
export default function KhtProTable(props) {
  //表格空状态自定义
  var customizeRenderEmpty = function customizeRenderEmpty() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 350
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: emptyImg,
      alt: ""
    }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ConfigProvider, {
    renderEmpty: customizeRenderEmpty
  }, /*#__PURE__*/React.createElement(ProTable, _objectSpread({
    className: "drawer-pro-table",
    pagination: _objectSpread(_objectSpread({}, defaultPagination), props.pagination)
  }, props))));
}