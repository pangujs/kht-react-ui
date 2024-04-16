import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Popover, Space } from 'antd';
import CustomerDrawer from './customer-drawer';
import HeaderContainer from './header-container';
import MultipleText from './multiple-text';
import CustomerOwnerDrawer from './customer-owner-drawer/index';
import CustomerProfileTypeDrawer from './customer-profile-type-drawer';
import CustomerMobileModal from './customer-mobile-modal';
export default function WxAccountInfo(props) {
  var _remarkList$;
  var _ref = props.info || {},
    name = _ref.name,
    businessType = _ref.businessType,
    sex = _ref.sex,
    avatar = _ref.avatar,
    _ref$telephoneList = _ref.telephoneList,
    telephoneList = _ref$telephoneList === void 0 ? [] : _ref$telephoneList,
    _ref$tagList = _ref.tagList,
    tagList = _ref$tagList === void 0 ? [] : _ref$tagList,
    customerType = _ref.customerType,
    remarkList = _ref.remarkList,
    id = _ref.id;
  var type = props.type;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    dataSource = _useState4[0],
    setDataSource = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    handleType = _useState6[0],
    setHandleType = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    title = _useState8[0],
    setTitle = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    remarkModalOpen = _useState10[0],
    setRemarkModalOpen = _useState10[1]; //客户备注名
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    addPersonModalOpen = _useState12[0],
    setAddPersonModalOpen = _useState12[1]; //客户添加人展开
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    mobileModalOpen = _useState14[0],
    setMobileModalOpen = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isShowPopover1 = _useState16[0],
    setIsShowPopover1 = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isShowPopover2 = _useState18[0],
    setIsShowPopover2 = _useState18[1];
  var ellipsisSpan1 = useRef();
  var ellipsisSpan2 = useRef();
  //是否显示省略号
  useEffect(function () {
    var _ellipsisSpan1$curren, _ellipsisSpan2$curren;
    setIsShowPopover1(200 < (ellipsisSpan1 === null || ellipsisSpan1 === void 0 ? void 0 : (_ellipsisSpan1$curren = ellipsisSpan1.current) === null || _ellipsisSpan1$curren === void 0 ? void 0 : _ellipsisSpan1$curren.offsetWidth));
    setIsShowPopover2(200 < (ellipsisSpan2 === null || ellipsisSpan2 === void 0 ? void 0 : (_ellipsisSpan2$curren = ellipsisSpan2.current) === null || _ellipsisSpan2$curren === void 0 ? void 0 : _ellipsisSpan2$curren.offsetWidth));
  }, [id]);
  var remarks = useMemo(function () {
    var list = (remarkList === null || remarkList === void 0 ? void 0 : remarkList.map(function (i) {
      return i.remark;
    })) || [];
    var list2 = Array.from(new Set(list));
    return list2;
  }, [remarkList]);
  var remarkNameList = useMemo(function () {
    return remarkList === null || remarkList === void 0 ? void 0 : remarkList.reduce(function (result, current) {
      if (!result.find(function (item) {
        return item.remark === current.remark;
      })) {
        result.push(current);
      }
      return result;
    }, []);
  }, [remarkList]);
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-account-popover-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(HeaderContainer, {
    name: name,
    businessType: businessType,
    sex: sex,
    type: type,
    avatar: avatar,
    customerType: customerType
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u5907\u6CE8\u540D"), /*#__PURE__*/React.createElement(Popover, {
    overlayStyle: isShowPopover1 ? {} : {
      display: 'none'
    },
    overlayClassName: "check-exceeding-ellipsis-popover",
    getPopupContainer: function getPopupContainer() {
      return document.querySelector('#root');
    },
    content: remarks[0],
    placement: "topLeft"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-inner",
    onClick: function onClick(e) {
      e.stopPropagation();
      // setVisible(true);
      // setHandleType('customerCN');
      // setDataSource(remarkNameList || []);
      setRemarkModalOpen(true);
      setTitle("\u5BA2\u6237\uFF1A".concat(name).concat((remarks === null || remarks === void 0 ? void 0 : remarks.length) > 0 ? '(' + remarks[0] + ')' : null));
    }
  }, /*#__PURE__*/React.createElement(MultipleText, {
    ellipsisSpan: ellipsisSpan1,
    value: remarks,
    serviceName: "name",
    unit: "\u5907\u6CE8\u540D"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u5BA2\u6237\u7535\u8BDD"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner",
    onClick: function onClick(e) {
      e.stopPropagation();
      setVisible(true);
      setHandleType('customerTN');
      setDataSource(telephoneList || []);
      // setMobileModalOpen(true)
      setTitle("\u5BA2\u6237\uFF1A".concat(name).concat((remarks === null || remarks === void 0 ? void 0 : remarks.length) > 0 ? '(' + remarks[0] + ')' : null));
    }
  }, /*#__PURE__*/React.createElement(MultipleText, {
    value: telephoneList === null || telephoneList === void 0 ? void 0 : telephoneList.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        eyeClickIndex: false
      });
    }),
    serviceName: "telephone",
    type: "phone",
    unit: "\u5BA2\u6237\u7535\u8BDD"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u6DFB\u52A0\u4EBA"), /*#__PURE__*/React.createElement(Popover, {
    overlayStyle: isShowPopover2 ? {} : {
      display: 'none'
    },
    overlayClassName: "check-exceeding-ellipsis-popover",
    getPopupContainer: function getPopupContainer() {
      return document.querySelector('#root');
    },
    content: remarkList && ((_remarkList$ = remarkList[0]) === null || _remarkList$ === void 0 ? void 0 : _remarkList$.employeeName),
    placement: "topLeft"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-inner",
    onClick: function onClick(e) {
      e.stopPropagation();
      setAddPersonModalOpen(true);
      setTitle("\u5BA2\u6237\uFF1A".concat(name).concat((remarks === null || remarks === void 0 ? void 0 : remarks.length) > 0 ? '(' + remarks[0] + ')' : null));
    }
  }, /*#__PURE__*/React.createElement(MultipleText, {
    ellipsisSpan: ellipsisSpan2,
    value: remarkList,
    serviceName: "employeeName",
    unit: "\u6DFB\u52A0\u4EBA"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content-row",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u6807\u7B7E"), (tagList === null || tagList === void 0 ? void 0 : tagList.length) ? /*#__PURE__*/React.createElement("div", {
    className: "content-tags"
  }, /*#__PURE__*/React.createElement(Space, {
    size: 8,
    wrap: true
  }, tagList === null || tagList === void 0 ? void 0 : tagList.map(function (i, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tags",
      key: index
    }, i === null || i === void 0 ? void 0 : i.name);
  }))) : /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, "-")), /*#__PURE__*/React.createElement(CustomerDrawer, {
    drawerTableLayoutTitle: title,
    visible: visible,
    type: handleType,
    onClose: function onClose() {
      return setVisible(false);
    },
    dataSource: dataSource
  }), /*#__PURE__*/React.createElement(CustomerOwnerDrawer, {
    remark: title,
    open: addPersonModalOpen,
    customerId: id,
    type: "addPerson",
    onClose: function onClose() {
      return setAddPersonModalOpen(false);
    }
  }), /*#__PURE__*/React.createElement(CustomerProfileTypeDrawer, {
    remark: title,
    showFooter: true,
    open: remarkModalOpen,
    width: 560,
    customerId: id,
    type: 'remark',
    onClose: function onClose() {
      return setRemarkModalOpen(false);
    }
  }), /*#__PURE__*/React.createElement(CustomerMobileModal, {
    remark: title,
    isModalOpen: mobileModalOpen,
    onCancel: function onCancel() {
      return setMobileModalOpen(false);
    },
    id: id,
    tableData: dataSource || []
  }));
}