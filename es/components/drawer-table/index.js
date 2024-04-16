import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { ConfigProvider } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import emptyImg from '../../assets/images/table-null.png';
import { defaultPagination } from '../../utils/pagination';
import "./index.css";
//抽屉表格
export default function DrawerTable(props) {
  //表格空状态自定义
  var customizeRenderEmpty = function customizeRenderEmpty() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      style: {
        margin: '150px auto 30px'
      },
      src: emptyImg,
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#999',
        fontSize: 14,
        textAlign: 'center'
      }
    }, "\u6682\u65E0\u6570\u636E"));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ConfigProvider, {
    renderEmpty: customizeRenderEmpty
  }, /*#__PURE__*/React.createElement(ProTable, _objectSpread({
    className: "drawer-pro-table",
    tableAlertRender: false,
    options: false,
    search: false,
    pagination: _objectSpread(_objectSpread({}, defaultPagination), props.pagination)
  }, props))));
}
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};