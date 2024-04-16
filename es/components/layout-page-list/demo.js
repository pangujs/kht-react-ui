import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["pageSize", "current"];
import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import { getTableList } from './mock';
import KhtLayoutPageList from '@src/layout-page-list';
import KhtBusinessInstitutionalAssetsTree from '../business-institutional-assets-tree';
import KhtBusinessCollapsePanelAssets from '@src/business-collapse-panel-assets';
import { LeftOutlined } from '@ant-design/icons';
export default (function () {
  var _useState = useState('1'),
    _useState2 = _slicedToArray(_useState, 2),
    layoutType = _useState2[0],
    setLayoutType = _useState2[1];
  var columns = [{
    title: '序号',
    dataIndex: 'index'
  }, {
    title: '名字',
    dataIndex: 'name'
  }, {
    title: '年龄',
    dataIndex: 'age'
  }, {
    title: '身高',
    dataIndex: 'height'
  }, {
    title: '性别',
    dataIndex: 'sex'
  }];
  var getTableData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
      var pageSize, current, other, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pageSize = query.pageSize, current = query.current, other = _objectWithoutProperties(query, _excluded);
            _context.next = 3;
            return getTableList();
          case 3:
            res = _context.sent;
            return _context.abrupt("return", {
              data: res.data,
              total: res.data.length,
              success: true
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getTableData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var headerTitle = /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
    key: "button",
    type: "primary"
  }, "\u65B0\u589E"), /*#__PURE__*/React.createElement(Button, {
    key: "del"
  }, "\u5220\u9664"));
  var leftChildren = /*#__PURE__*/React.createElement(KhtBusinessInstitutionalAssetsTree, {
    canSelect: 'noSub',
    backgroundColorFull: true
  });
  var leftChildren2 = /*#__PURE__*/React.createElement(KhtBusinessCollapsePanelAssets, {
    leftCanSelect: "community",
    leftChange: function leftChange() {},
    rightChange: function rightChange() {},
    hasRight: true
  });
  var leftNode = layoutType === '2' ? leftChildren : layoutType === '3' ? leftChildren2 : false;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showBack = _useState4[0],
    setShowBack = _useState4[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setLayoutType('1');
    }
  }, "\u666E\u901A\u7C7B\u578B"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setLayoutType('2');
    }
  }, "\u5DE6\u53F3\u7C7B\u578B"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setLayoutType('3');
    }
  }, "\u5DE6\u53F3\u7C7B\u578B-\u5DE6\u4FA7\u53CC\u5C42"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setShowBack(!showBack);
    }
  }, "\u6709\u8FD4\u56DE\u533A\u57DF"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 500
    }
  }, /*#__PURE__*/React.createElement(KhtLayoutPageList, {
    back: showBack ? /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(LeftOutlined, null)
    }, "\u8FD4\u56DE"), " \u5BA2\u6237\u901A\u79D1\u6280") : /*#__PURE__*/React.createElement(React.Fragment, null),
    hasBack: showBack,
    leftChildren: leftNode,
    // wrapClassName={layoutType === '1' ? 'wrapClassName' : ''}
    // wrapStyle={layoutType === '1' ? {background: '#f1f1f1'} : {}}
    hasLeftBorder: layoutType === '2',
    isDefault: layoutType === '1',
    // leftStyle={{padding: 0}}
    rightChildren: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProTable, {
      columns: columns,
      scroll: {
        x: 600
      },
      request: getTableData,
      tableAlertRender: false,
      headerTitle: headerTitle,
      rowKey: "id",
      cardProps: {
        title: "\u6807\u9898",
        bordered: false
      }
    }))
  })));
});