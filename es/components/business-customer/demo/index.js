import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import KhtBusinessCustomer from '../index';
export default function Demo() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectData = _useState4[0],
    setSelectData = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectObjData = _useState6[0],
    setSelectObjData = _useState6[1];
  var _useState7 = useState('wechat'),
    _useState8 = _slicedToArray(_useState7, 2),
    type = _useState8[0],
    setType = _useState8[1];
  var changeShow = function changeShow() {
    console.log('%c Line:5 🥕 open', 'color:#2eafb0', open);
    setOpen(true);
  };
  //抽屉提交事件
  var onSubmit = function onSubmit(selectedRowKeys, selectedRows, searchType) {
    console.log('%c Line:48 🍢 searchType', 'color:#b03734', searchType);
    console.log('%c Line:44 🥃 onSubmit-------selectedRowKeys', 'color:#ffdd4d', selectedRowKeys);
    console.log('%c Line:45 🥃 onSubmit-------selectedRows', 'color:#ffdd4d', selectedRows);
    setOpen(false);
    setSelectData(selectedRowKeys);
    setSelectObjData(selectedRows);
  };
  var changeType = function changeType() {
    setType(type == 'wechat' ? 'wxwork' : 'wechat');
  };
  useEffect(function () {
    setSelectObjData([
      // {
      //   id: 'd928d44b158c451b899f8e961106c9c3',
      //   name: 'Dodotry',
      //   code: 'wmOqgaCgAAbDSgylxx4uaJ7OZBl1WAFA',
      //   remarks: 'Dodotry',
      //   type: 'wechat',
      //   bindResidentIds: null,
      //   bindResidentNames: null,
      //   customerResidentIds: null,
      // },
      // {
      //   id: '64f898bbf509415c8b1c9038107c37f0',
      //   name: '赵不能赵',
      //   code: 'wmOqgaCgAAmVjICONwRwiUTSB5krLFpw',
      //   remarks: '赵不能赵',
      //   type: 'wechat',
      //   bindResidentIds: null,
      //   bindResidentNames: null,
      //   customerResidentIds: null,
      // },
      // {
      //   id: '57ba8aba037d445389575a9b787f2c51',
      //   name: 'Wei鹏',
      //   code: 'wmOqgaCgAAQULQhhJy1m_9CWAop-xZbQ',
      //   remarks: null,
      //   type: 'wechat',
      //   bindResidentIds: null,
      //   bindResidentNames: null,
      //   customerResidentIds: null,
      // },
      // {
      //   id: 'af028618f56e49249ba7b1b35cbec639',
      //   name: '谭毅',
      //   code: 'wmOqgaCgAAujRBLnBnwGHHDsAW15UCwA',
      //   remarks: '谭毅',
      //   type: 'wechat',
      //   bindResidentIds: null,
      //   bindResidentNames: null,
      //   customerResidentIds: null,
      // },
      // {
      //   id: '7654bee7b9844e939cb92ae86823c5df',
      //   name: '黄书-企微客户通',
      //   code: 'wmOqgaCgAAFomA5hKl8CitFbz6HmXJRg',
      //   remarks: '黄书-企微客户通',
      //   type: 'wechat',
      //   bindResidentIds: null,
      //   bindResidentNames: null,
      //   customerResidentIds: null,
      // },
      // {
      //   id: '5f76bebbdf4b43b889fcd5e5f868bfa1',
      //   name: 'Eliza',
      //   code: 'wmOqgaCgAA4dIvxOhelvKlaFZsKkxAng',
      //   remarks: 'Eliza',
      //   type: 'wechat',
      //   bindResidentIds: null,
      //   bindResidentNames: null,
      //   customerResidentIds: null,
      // },
      // {
      //   id: 'a13ced5af014481f92722561c81380c0',
      //   name: '长安常安',
      //   code: 'wmOqgaCgAASh1zUlI_CL713TvaZ7D_fA',
      //   remarks: '长安常安',
      //   type: 'wechat',
      //   bindResidentIds: null,
      //   bindResidentNames: null,
      //   customerResidentIds: null,
      // },
      // {
      //   id: '236db8f8a3b7408fbf588cc5bc613322',
      //   name: 'yyxp',
      //   code: 'wmOqgaCgAAWJqnTK0ELXXQvXmktSb6lA',
      //   remarks: '🇾 🇾 🇽 🇵,yyxp',
      //   type: 'wechat',
      //   bindResidentIds: null,
      //   bindResidentNames: null,
      //   customerResidentIds: null,
      // },
      // {
      //   id: '252da9d2dd604cb2b50ca8b6edb067f9',
      //   name: '陈跃',
      //   code: 'wmOqgaCgAAu6lHiH1762nL25UE3NzMTQ',
      //   remarks: '陈跃',
      //   type: 'wechat',
      //   bindResidentIds: null,
      //   bindResidentNames: null,
      //   customerResidentIds: null,
      // },
    ]);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    onClick: changeType
  }, type), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: changeShow,
    style: {
      marginRight: '20px'
    }
  }, "\u9009\u62E9\u5BA2\u6237"), /*#__PURE__*/React.createElement("div", null, selectObjData.map(function (item) {
    return item.name;
  }).join(','))), /*#__PURE__*/React.createElement(KhtBusinessCustomer, {
    close: function close() {
      return setOpen(false);
    },
    open: open,
    onSubmit: onSubmit,
    selectedData: selectObjData,
    canChangeBusinessType: true,
    employeeInfo: {
      name: '石凌飞',
      code: '54ea899525594563b376470c9f1f196f'
    },
    businessType: type
  }));
}