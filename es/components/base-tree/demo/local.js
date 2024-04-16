import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import KhtBaseTree from '@src/base-tree';
import { deepTreeDataMapping } from '@utils';
export default (function () {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    treeData = _useState2[0],
    setTreeData = _useState2[1];
  var data = [{
    name: '卫生',
    id: '0-0',
    childrenList: [{
      name: 'AA',
      id: '0-0-0',
      childrenList: [{
        name: 'BB',
        id: '0-0-0-0'
      }, {
        name: 'CC',
        id: '0-0-0-1'
      }, {
        name: 'cc',
        id: '0-0-0-2'
      }]
    }, {
      name: 'DD',
      id: '0-0-1',
      childrenList: [{
        name: 'dd',
        id: '0-0-1-0'
      }, {
        name: 'EE',
        id: '0-0-1-1'
      }, {
        name: 'ee',
        id: '0-0-1-2'
      }]
    }, {
      name: 'FF',
      id: '0-0-2'
    }]
  }, {
    name: 'GG',
    id: '0-1',
    isOver: 1,
    childrenList: [{
      name: 'Gg',
      id: '0-1-0-0'
    }, {
      name: 'HH',
      id: '0-1-0-1'
    }, {
      name: 'hh',
      id: '0-1-0-2'
    }]
  }, {
    name: 'ii',
    id: '0-2',
    isOver: 2,
    childrenList: [{
      name: 'JJ',
      id: '0-2-2-0'
    }, {
      name: 'kk',
      id: '0-2-2-1'
    }, {
      name: 'Mm',
      id: '0-2-2-2'
    }]
  }];
  useEffect(function () {
    var newData = deepTreeDataMapping(data, {
      title: 'name',
      key: 'id',
      children: 'childrenList',
      canSelect: function canSelect(item) {
        return item.isOver == 2;
      }
    });
    console.log('MMMMMMM', newData);
    setTreeData(newData);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '400px',
      width: '300px',
      padding: '10px',
      border: '1px solid #f1f1f1'
    }
  }, /*#__PURE__*/React.createElement(KhtBaseTree, {
    selectable: true,
    treeData: treeData,
    showTooltip: false,
    isOriginSearch: false
  }))));
});