import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useMemo, useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';
import KhtBusinessProject from '../../business-project';
import DrawerSelectResidence from '../../drawer-select-residence';
import DrawerBindParkingSpace from '../../select-bind-parking-space';
import { Local } from '../../../utils/storage';
import "../index.css";
export function ProjectScreenDrawer(props) {
  var open = props.open,
    _props$width = props.width,
    width = _props$width === void 0 ? 480 : _props$width,
    _props$title = props.title,
    title = _props$title === void 0 ? '筛选项目' : _props$title,
    _props$assetType = props.assetType,
    assetType = _props$assetType === void 0 ? 'house' : _props$assetType;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    communityOpen = _useState2[0],
    setCommunityOpen = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    assetOpen = _useState4[0],
    setAssetOpen = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectCommunity = _useState6[0],
    setSelectCommunity = _useState6[1];
  var _useState7 = useState({}),
    _useState8 = _slicedToArray(_useState7, 2),
    selectCommunityInfo = _useState8[0],
    setSelectCommunityInfo = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    selectAssetData = _useState10[0],
    setSelectAssetData = _useState10[1];
  var companyCode = Local.get('crop-id');
  //取消
  var handleClose = function handleClose() {
    props.onClose && props.onClose();
  };
  //确认提交
  var handleOk = function handleOk() {
    var data = {
      communityId: (selectCommunityInfo === null || selectCommunityInfo === void 0 ? void 0 : selectCommunityInfo.id) || '',
      communityData: selectCommunityInfo,
      assetData: selectAssetData
    };
    props.onOk && props.onOk(data);
    props.onClose && props.onClose();
  };
  // 项目确定
  var onCommunityOk = function onCommunityOk(selectedRowKeys, selectedRows) {
    console.log('%c Line:48 🍢 selectedRows', 'color:#b03734', selectedRows);
    console.log('%c Line:44 🥃 onSubmit-------data', 'color:#ffdd4d', selectedRowKeys);
    setSelectCommunity(selectedRows);
    if (selectedRows.length) {
      var info = selectedRows[0] || {};
      setSelectAssetData([]);
      setSelectCommunityInfo(info);
    } else {
      setSelectAssetData([]);
      setSelectCommunityInfo({});
    }
    setCommunityOpen(false);
  };
  //资产label
  var assetLabel = useMemo(function () {
    if (selectAssetData.length === 1) {
      return selectAssetData.map(function (c) {
        return c.name;
      }).filter(function (c) {
        return typeof c !== 'undefined';
      })[0];
    } else if (selectAssetData.length > 1) {
      return selectAssetData.map(function (c) {
        return c.name;
      }).filter(function (c) {
        return typeof c !== 'undefined';
      })[0] + " \u7B49\u8D44\u4EA7";
    } else {
      return null;
    }
  }, [selectAssetData]);
  useEffect(function () {
    setSelectCommunityInfo({});
    setSelectAssetData([]);
  }, [assetType]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Drawer, {
    open: open,
    title: title,
    width: width,
    className: "project-screen-drawer",
    getContainer: document.querySelector('#root'),
    onClose: handleClose,
    footer: [/*#__PURE__*/React.createElement(Button, {
      className: "footer-cancel-btn",
      key: "cancel",
      onClick: handleClose
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      key: "submit",
      type: "primary",
      onClick: handleOk
    }, "\u786E\u8BA4")]
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item-label"
  }, "\u9879\u76EE"), /*#__PURE__*/React.createElement("div", {
    className: "item-detail"
  }, (selectCommunityInfo === null || selectCommunityInfo === void 0 ? void 0 : selectCommunityInfo.name) && /*#__PURE__*/React.createElement("span", null, selectCommunityInfo === null || selectCommunityInfo === void 0 ? void 0 : selectCommunityInfo.name), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      setCommunityOpen(true);
    }
  }, (selectCommunityInfo === null || selectCommunityInfo === void 0 ? void 0 : selectCommunityInfo.id) ? '修改' : '请选择'))), (selectCommunityInfo === null || selectCommunityInfo === void 0 ? void 0 : selectCommunityInfo.id) && /*#__PURE__*/React.createElement("div", {
    className: "content-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item-label"
  }, "\u8D44\u4EA7"), /*#__PURE__*/React.createElement("div", {
    className: "item-detail"
  }, /*#__PURE__*/React.createElement("span", null, assetLabel), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      setAssetOpen(true);
    }
  }, selectAssetData.length ? '修改' : '请选择')))), /*#__PURE__*/React.createElement(KhtBusinessProject, {
    selectType: "radio",
    isNoDefaultOrganization: true,
    companyCode: companyCode,
    useSystem: "customer",
    onClose: function onClose() {
      return setCommunityOpen(false);
    },
    open: communityOpen,
    defaultRowKeys: selectCommunity,
    onSubmit: onCommunityOk
  }), assetType === 'house' ? /*#__PURE__*/React.createElement(DrawerSelectResidence, {
    initData: selectAssetData,
    projectId: selectCommunityInfo === null || selectCommunityInfo === void 0 ? void 0 : selectCommunityInfo.id,
    isMogami: true,
    onSubmit: function onSubmit(ids, nodes) {
      console.log(ids, nodes);
      setSelectAssetData(nodes);
      setAssetOpen(false);
    },
    open: assetOpen,
    onClose: function onClose() {
      setAssetOpen(false);
    }
  }) : /*#__PURE__*/React.createElement(DrawerBindParkingSpace, {
    initData: selectAssetData,
    projectId: selectCommunityInfo === null || selectCommunityInfo === void 0 ? void 0 : selectCommunityInfo.id,
    isMogami: true,
    onSubmit: function onSubmit(ids, nodes) {
      console.log(ids, nodes);
      setSelectAssetData(nodes);
      setAssetOpen(false);
    },
    open: assetOpen,
    onClose: function onClose() {
      setAssetOpen(false);
    }
  })));
}