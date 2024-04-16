import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["businessType"];
import React, { useEffect, useMemo, useState } from 'react';
import { Button, Descriptions, Divider, Drawer, Image, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import userInfo from '../../assets/images/userInfo.png';
import style from "./index.module.css";
import "./index.css";
import { KhtbusinessMobileText } from '../..';
import _find from 'lodash/find';
import { dictionaryGet, familyGet, houseGet, houseOwnershipGet, propertyManagementGet, residentFamilyGet, residentManagerGet, residentProprietorGet, residentTenantFamilyGet, residentTenantGet, spaceGet } from '../../http/api';
import FileUpload from '../file-upload';
import { IdcardUpload } from '../idcard-upload';
import BusinessDetailText from '../business-detail-text';
import KhtIcons from '../kht-icons';
// 各种业务详情组件
export default function BusinessDetailDrawer(props) {
  var _userInfo$mobilePhone, _userInfo$telePhoneLi, _userInfo$birth, _defaultIdcardDate$co, _find2, _detailInfo$ownership, _find3, _find4, _valueEnumLessorType$, _detailInfo$sharedRen, _find5, _find6, _find7, _valueEnumBusinessTyp, _valueEnumOwnershipTy, _valueEnumCurrent$det, _detailInfo$attachmen, _detailInfo$housePict, _detailInfo$housePict2, _find8, _find9, _find10, _find11, _find12, _detailInfo$logo, _detailInfo$attachmen2;
  var businessType = props.businessType,
    other = _objectWithoutProperties(props, _excluded);
  var actionsMap = {
    proprietor: residentProprietorGet,
    family: residentFamilyGet,
    tenant: residentTenantGet,
    tenant_family: residentTenantFamilyGet,
    // parking_proprietor: residentFamily1Get,
    property_owner: houseOwnershipGet,
    // lessee: residentFamily3Get,
    // nanny: residentFamily4Get,
    home: function home(_ref) {
      var id = _ref.id;
      return familyGet({
        residentId: id
      });
    },
    house: houseGet,
    space: spaceGet,
    property_company: propertyManagementGet
  };
  // 详情信息
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    detailInfo = _useState2[0],
    setDetailInfo = _useState2[1];
  // 用户信息
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    userInfo = _useState4[0],
    setUserInfo = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    dictionary = _useState6[0],
    setDictionary = _useState6[1];
  // 身份证正反面
  var _useState7 = useState({
      pros: {},
      cons: {}
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    defaultIdcardDate = _useState8[0],
    setDefaultIdcardDate = _useState8[1];
  // 头像
  var _useState9 = useState(''),
    _useState10 = _slicedToArray(_useState9, 2),
    imgUrl = _useState10[0],
    setImgUrl = _useState10[1];
  // 其他证件
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    otherCardFile = _useState12[0],
    setOtherCardFile = _useState12[1];
  var idcardChange = function idcardChange(value) {
    setDefaultIdcardDate(value);
  };
  // 企业住户详情-附件
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    fileDataList = _useState14[0],
    setFileDataList = _useState14[1];
  // 获取详情信息
  var getDetailInfo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data, _data$response, _data$response2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return actionsMap[businessType]({
              id: other.businessId
            });
          case 2:
            data = _context.sent;
            if (data.success) {
              setDetailInfo(data.response);
              if (((_data$response = data.response) === null || _data$response === void 0 ? void 0 : _data$response.residentId) && !other.residentId) {
                getUserInfo((_data$response2 = data.response) === null || _data$response2 === void 0 ? void 0 : _data$response2.residentId);
              }
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getDetailInfo() {
      return _ref2.apply(this, arguments);
    };
  }();
  // 获取用户信息
  var getUserInfo = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
      var data, _data$response3;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return residentManagerGet({
              id: id || other.residentId
            });
          case 2:
            data = _context2.sent;
            if (data.success) {
              setUserInfo(data.response);
              initAttachment((_data$response3 = data.response) === null || _data$response3 === void 0 ? void 0 : _data$response3.attachmentList);
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getUserInfo(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var init = function init() {
    if (other.businessId) getDetailInfo();
    if (other.residentId) getUserInfo();
  };
  var getDictionaryGet = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return dictionaryGet();
          case 2:
            data = _context3.sent;
            if (data.success) setDictionary(data.response);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getDictionaryGet() {
      return _ref4.apply(this, arguments);
    };
  }();
  var initAttachment = function initAttachment(list) {
    // 附件信息统一处理
    // 临时存储 头像 身份证 其他证件
    var temp = [];
    var temp2 = {
      pros: {},
      cons: {}
    };
    var temp3 = [];
    if (list && list.length) {
      for (var index = 0; index < list.length; index++) {
        var element = list[index];
        if (element.attachmentType == 3 || element.attachmentType == 2) {
          temp.push(element.fileUrl);
        } else if (element.attachmentType == 4) {
          temp2.pros = element;
        } else if (element.attachmentType == 5) {
          temp2.cons = element;
        } else if (element.attachmentType == 6 || element.attachmentType == 1) {
          temp3.push(element);
        }
      }
    }
    setDefaultIdcardDate(temp2);
    if (temp.length) setImgUrl(temp[0]);
    if (temp3.length) {
      if (businessType === 'enterprise') {
        setFileDataList(temp3);
      } else {
        setOtherCardFile(temp3);
      }
    }
  };
  useEffect(function () {
    if (other.open) {
      init();
      getDictionaryGet();
    } else {
      // 清空数据
      setImgUrl('');
      setDefaultIdcardDate({
        pros: {},
        cons: {}
      });
      setOtherCardFile([]);
      setFileDataList([]);
      setDetailInfo({});
      setUserInfo({});
    }
  }, [other.open]);
  var baseElement = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "".concat(businessTypeTextMap[businessType], "ID")
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.code) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6765\u6E90"
  }, bindSourceMap[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.bindSource] || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u72B6\u6001"
  }, bindStateMap[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.bindStatus] || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u4EBA"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createAccountName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u65F6\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createDate) || '-')));
  var phoneElement = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u624B\u673A\u53F7\u7801"
  }, /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
    value: userInfo === null || userInfo === void 0 ? void 0 : userInfo.mobilePhoneList
  })), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7535\u8BDD\u53F7\u7801"
  }, /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
    value: userInfo === null || userInfo === void 0 ? void 0 : userInfo.telePhoneList
  }))));
  var phoneElementAll = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u624B\u673A\u53F7\u7801"
  }, (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$mobilePhone = userInfo.mobilePhoneList) === null || _userInfo$mobilePhone === void 0 ? void 0 : _userInfo$mobilePhone.length) ? /*#__PURE__*/React.createElement("div", null, userInfo === null || userInfo === void 0 ? void 0 : userInfo.mobilePhoneList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 5
      },
      key: index
    }, /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
      value: item
    }));
  })) : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7535\u8BDD\u53F7\u7801"
  }, (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$telePhoneLi = userInfo.telePhoneList) === null || _userInfo$telePhoneLi === void 0 ? void 0 : _userInfo$telePhoneLi.length) ? /*#__PURE__*/React.createElement("div", null, userInfo === null || userInfo === void 0 ? void 0 : userInfo.telePhoneList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 5
      },
      key: index
    }, /*#__PURE__*/React.createElement(KhtbusinessMobileText, {
      value: item
    }));
  })) : '-')));
  // 企业住户-个人详情
  var userElement = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    hasArrow: false,
    name: userInfo === null || userInfo === void 0 ? void 0 : userInfo.name,
    imgUrl: imgUrl,
    sex: userInfo === null || userInfo === void 0 ? void 0 : userInfo.sex
  }), /*#__PURE__*/React.createElement(Divider, null), phoneElementAll, /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u751F\u65E5"
  }, (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$birth = userInfo.birth) === null || _userInfo$birth === void 0 ? void 0 : _userInfo$birth.split(' ')[0]) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5E74\u9F84"
  }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.age) !== null && (userInfo === null || userInfo === void 0 ? void 0 : userInfo.age) !== undefined ? (userInfo === null || userInfo === void 0 ? void 0 : userInfo.age) + '岁' : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u56FD\u7C4D"
  }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.nationality) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6237\u7C4D\u5730\u5740"
  }, /*#__PURE__*/React.createElement("div", null, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.city) ? [userInfo === null || userInfo === void 0 ? void 0 : userInfo.province, userInfo === null || userInfo === void 0 ? void 0 : userInfo.district, userInfo === null || userInfo === void 0 ? void 0 : userInfo.city].join('') : null, /*#__PURE__*/React.createElement("div", null, userInfo === null || userInfo === void 0 ? void 0 : userInfo.address)))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u8BC1\u4EF6\u7C7B\u578B"
  }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.cardType) ? (userInfo === null || userInfo === void 0 ? void 0 : userInfo.cardType) == '1' ? '身份证' : '其他证件' : '-'), (userInfo === null || userInfo === void 0 ? void 0 : userInfo.cardType) == '1' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u8EAB\u4EFD\u8BC1\u53F7\u7801"
  }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.idCard) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u8EAB\u4EFD\u8BC1\u7167\u7247"
  }, ((_defaultIdcardDate$co = defaultIdcardDate.cons) === null || _defaultIdcardDate$co === void 0 ? void 0 : _defaultIdcardDate$co.fileId) ? /*#__PURE__*/React.createElement(IdcardUpload, {
    onChange: idcardChange,
    handleType: "review",
    defaultDate: defaultIdcardDate
  }) : '-')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u8BC1\u4EF6\u540D\u79F0"
  }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.cardName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u8BC1\u4EF6\u53F7\u7801"
  }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.idCard) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u8BC1\u4EF6\u7167\u7247",
    contentStyle: {
      flex: 1,
      minWidth: 0
    }
  }, otherCardFile.length ? /*#__PURE__*/React.createElement(FileUpload, {
    handleType: "review",
    defaultFileList: otherCardFile
  }) : '-'))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7D27\u6025\u8054\u7CFB\u4EBA"
  }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.emergencyContactName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7D27\u6025\u8054\u7CFB\u4EBA\u7535\u8BDD"
  }, (userInfo === null || userInfo === void 0 ? void 0 : userInfo.emergencyContactTelephone) || '-')));
  // 企业住户-企业详情
  var enterpriseElement = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    hasArrow: false,
    name: userInfo === null || userInfo === void 0 ? void 0 : userInfo.name,
    imgUrl: imgUrl,
    desc: userInfo === null || userInfo === void 0 ? void 0 : userInfo.simpleName
  }), /*#__PURE__*/React.createElement(Divider, null), phoneElementAll, /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u9644\u4EF6",
    contentStyle: {
      flex: 1,
      minWidth: 0
    }
  }, fileDataList.length ? /*#__PURE__*/React.createElement(FileUpload, {
    handleType: "review",
    defaultFileList: fileDataList
  }) : '-')));
  // 业主详情
  var proprietor = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    imgUrl: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.attachmentList) && ((_find2 = _find(userInfo.attachmentList, {
      attachmentType: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.businessType) == 1 ? 3 : 2
    })) === null || _find2 === void 0 ? void 0 : _find2.fileUrl),
    name: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.name) || '-',
    desc: "\u4E1A\u4E3B",
    sex: userInfo === null || userInfo === void 0 ? void 0 : userInfo.sex
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7ED1\u5B9A\u623F\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.fullName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7ED1\u5B9A\u623F\u95F4\u72B6\u6001"
  }, houseStatusMap[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.houseStatus] || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4EA7\u6743\u6027\u8D28"
  }, businessTypeMap[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ownershipType] || '-'), (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ownershipType) == 1 ? /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5171\u6709\u4E1A\u4E3B"
  }, /*#__PURE__*/React.createElement("div", null, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ownershipList) && (detailInfo === null || detailInfo === void 0 ? void 0 : (_detailInfo$ownership = detailInfo.ownershipList) === null || _detailInfo$ownership === void 0 ? void 0 : _detailInfo$ownership.length) ? detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ownershipList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("span", null, item.name), /*#__PURE__*/React.createElement(BusinessDetailText, {
      businessType: (item === null || item === void 0 ? void 0 : item.businessType) == 2 ? 'enterprise' : 'user',
      residentId: item.residentId
    })));
  }) : '-')) : null, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4EA7\u6743\u4EBA"
  }, booleanTextMap[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isOwnerShip] || '-')), /*#__PURE__*/React.createElement(Divider, null), phoneElement, /*#__PURE__*/React.createElement(Divider, null), baseElement);
  // 家属详情
  var family = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    imgUrl: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.attachmentList) && ((_find3 = _find(userInfo.attachmentList, {
      attachmentType: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.businessType) == 2 ? 2 : 3
    })) === null || _find3 === void 0 ? void 0 : _find3.fileUrl),
    name: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.name) || '-',
    desc: "\u5BB6\u5C5E",
    sex: userInfo === null || userInfo === void 0 ? void 0 : userInfo.sex
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7ED1\u5B9A\u623F\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.fullName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6240\u5C5E\u4E1A\u4E3B"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.proprietorResidentName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4E0E\u4E1A\u4E3B\u5173\u7CFB"
  }, relationTextMap[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.relation] || '-')), /*#__PURE__*/React.createElement(Divider, null), phoneElement, /*#__PURE__*/React.createElement(Divider, null), baseElement);
  // 租户详情
  var tenant = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    imgUrl: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.attachmentList) && ((_find4 = _find(userInfo.attachmentList, {
      attachmentType: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.businessType) == 2 ? 2 : 3
    })) === null || _find4 === void 0 ? void 0 : _find4.fileUrl),
    name: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.name) || '-',
    desc: "\u79DF\u6237",
    sex: userInfo === null || userInfo === void 0 ? void 0 : userInfo.sex
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u79DF\u8D41\u623F\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.fullName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u51FA\u79DF\u4EBA\u7C7B\u578B"
  }, ((_valueEnumLessorType$ = valueEnumLessorType[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.lessorType]) === null || _valueEnumLessorType$ === void 0 ? void 0 : _valueEnumLessorType$.text) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u51FA\u79DF\u4EBA"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.lessorName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u79DF\u8D41\u65F6\u95F4"
  }, !(detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.leaseBeginDate) ? '-' : (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.leaseBeginDate) + '至' + (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.leaseEndDate)), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u79DF\u91D1"
  }, detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.rent, "\u5143/\u6708"), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u662F\u5426\u5408\u79DF"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isSharedRent) == 0 ? '否' : (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isSharedRent) == 1 ? '是' : '-'), (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isSharedRent) == 1 ? /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5408\u79DF\u4EBA"
  }, /*#__PURE__*/React.createElement("div", null, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.sharedRentList) && (detailInfo === null || detailInfo === void 0 ? void 0 : (_detailInfo$sharedRen = detailInfo.sharedRentList) === null || _detailInfo$sharedRen === void 0 ? void 0 : _detailInfo$sharedRen.length) ? detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.sharedRentList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("span", null, item.name), /*#__PURE__*/React.createElement(BusinessDetailText, {
      businessType: (item === null || item === void 0 ? void 0 : item.businessType) == 2 ? 'enterprise' : 'user',
      residentId: item.residentId
    })));
  }) : '-')) : null, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u627F\u79DF\u4EBA"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isRenter) == 0 ? '否' : (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isRenter) == 1 ? '是' : '-')), /*#__PURE__*/React.createElement(Divider, null), phoneElement, /*#__PURE__*/React.createElement(Divider, null), baseElement);
  // 租户家属详情
  var tenantFamily = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    imgUrl: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.attachmentList) && ((_find5 = _find(userInfo.attachmentList, {
      attachmentType: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.businessType) == 2 ? 2 : 3
    })) === null || _find5 === void 0 ? void 0 : _find5.fileUrl),
    name: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.name) || '-',
    desc: "\u5BB6\u5C5E",
    sex: userInfo === null || userInfo === void 0 ? void 0 : userInfo.sex
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7ED1\u5B9A\u623F\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.fullName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6240\u5C5E\u79DF\u6237"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.tenantResidentName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4E0E\u79DF\u6237\u5173\u7CFB"
  }, relationTextMap[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.relation] || '-')), /*#__PURE__*/React.createElement(Divider, null), phoneElement, /*#__PURE__*/React.createElement(Divider, null), baseElement);
  // 车位业主详情
  var parkingProprietor = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    imgUrl: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.attachmentList) && ((_find6 = _find(userInfo.attachmentList, {
      attachmentType: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.businessType) == 2 ? 2 : 3
    })) === null || _find6 === void 0 ? void 0 : _find6.fileUrl),
    name: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.name) || '-',
    desc: "\u8F66\u4F4D\u4E1A\u4E3B",
    sex: userInfo === null || userInfo === void 0 ? void 0 : userInfo.sex
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7ED1\u5B9A\u8F66\u4F4D"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.fullName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u8F66\u4F4D\u7528\u9014"
  }, "\u81EA\u7528")), /*#__PURE__*/React.createElement(Divider, null), phoneElement, /*#__PURE__*/React.createElement(Divider, null), baseElement);
  // 产权人详情
  var propertyOwner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    imgUrl: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.attachmentList) && ((_find7 = _find(userInfo.attachmentList, {
      attachmentType: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.businessType) == 2 ? 2 : 3
    })) === null || _find7 === void 0 ? void 0 : _find7.fileUrl),
    name: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || '-',
    desc: "\u4EA7\u6743\u4EBA",
    sex: userInfo === null || userInfo === void 0 ? void 0 : userInfo.sex
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7ED1\u5B9A\u623F\u95F4"
  }, detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.houseFullName), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4EA7\u6743\u4EBA\u7C7B\u578B"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.businessType) ? (_valueEnumBusinessTyp = valueEnumBusinessType[detailInfo.businessType]) === null || _valueEnumBusinessTyp === void 0 ? void 0 : _valueEnumBusinessTyp.text : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4EA7\u6743\u6027\u8D28"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ownershipType) ? (_valueEnumOwnershipTy = valueEnumOwnershipType[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ownershipType]) === null || _valueEnumOwnershipTy === void 0 ? void 0 : _valueEnumOwnershipTy.text : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5F53\u524D\u4EA7\u6743\u4EBA"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isCurrent) ? (_valueEnumCurrent$det = valueEnumCurrent[detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isCurrent]) === null || _valueEnumCurrent$det === void 0 ? void 0 : _valueEnumCurrent$det.text : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u9644\u4EF6",
    contentStyle: {
      flex: 1,
      minWidth: 0
    }
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : (_detailInfo$attachmen = detailInfo.attachmentList) === null || _detailInfo$attachmen === void 0 ? void 0 : _detailInfo$attachmen.length) ? /*#__PURE__*/React.createElement(FileUpload, {
    handleType: "review",
    defaultFileList: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.attachmentList
  }) : '-')), /*#__PURE__*/React.createElement(Divider, null), phoneElement, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4EA7\u6743\u4EBAID"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.id) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6765\u6E90"
  }, "\u624B\u52A8\u6DFB\u52A0/\u5BA2\u6237\u4E2D\u53F0"), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u72B6\u6001"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isDelete) !== undefined ? (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isDelete) == 0 ? '正常' : '已删除' : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u4EBA"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createAccountName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u65F6\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createDate) || '-'), (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isDelete) == 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5220\u9664\u4EBA"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.updateAccountName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5220\u9664\u65F6\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.updateDate) || '-')) : null));
  // 家庭详情
  var home = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5BB6\u5EAD\u540D\u79F0"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.name) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6240\u5C5E\u4F4F\u6237"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.residentName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5BB6\u5EAD\u7ED3\u6784"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.familyStructure) || '-')), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5E74\u9F84\u5206\u522B"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ageCountList) && detailInfo.ageCountList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Button, {
      style: {
        marginRight: '5px',
        marginBottom: '5px'
      },
      key: index
    }, item);
  }))), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5B50\u5973\u6559\u80B2\u9636\u6BB5"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.educationStageList) && detailInfo.educationStageList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Button, {
      style: {
        marginRight: '5px',
        marginBottom: '5px'
      },
      key: index
    }, item);
  }))), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5A5A\u59FB\u72B6\u51B5"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.maritalStatusList) && detailInfo.maritalStatusList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Button, {
      style: {
        marginRight: '5px',
        marginBottom: '5px'
      },
      key: index
    }, item);
  })))), /*#__PURE__*/React.createElement(Divider, null), baseElement);
  var roomTypeText = useMemo(function () {
    var str1 = detailInfo.roomNumber ? "".concat(detailInfo.roomNumber, "\u623F") : '';
    var str2 = detailInfo.livingRoomNumber ? "".concat(detailInfo.livingRoomNumber, "\u5385") : '';
    var str3 = detailInfo.restRoomNumber ? "".concat(detailInfo.restRoomNumber, "\u536B") : '';
    var text = str1 + str2 + str3;
    return text || '-';
  }, [detailInfo]);
  var house = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    imgUrl: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.housePictureDtoList) && (detailInfo === null || detailInfo === void 0 ? void 0 : (_detailInfo$housePict = detailInfo.housePictureDtoList[0]) === null || _detailInfo$housePict === void 0 ? void 0 : _detailInfo$housePict.picture),
    name: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.fullName) || '-',
    desc: "\u623F\u53F7\uFF1A".concat((detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.houseNumber) || '-'),
    imgList: (detailInfo === null || detailInfo === void 0 ? void 0 : (_detailInfo$housePict2 = detailInfo.housePictureDtoList) === null || _detailInfo$housePict2 === void 0 ? void 0 : _detailInfo$housePict2.map(function (item) {
      return item.picture;
    })) || []
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 2,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6240\u5C5E\u9879\u76EE"
  }, detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.communityName), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7269\u4E1A\u7C7B\u578B"
  }, ((_find8 = _find(HouseListOption, {
    value: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.type
  })) === null || _find8 === void 0 ? void 0 : _find8.label) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6237\u578B"
  }, roomTypeText), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u671D\u5411"
  }, ((_find9 = _find(dictionary === null || dictionary === void 0 ? void 0 : dictionary.houseTowards, {
    dictValue: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.towards
  })) === null || _find9 === void 0 ? void 0 : _find9.name) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4EA7\u6743\u6027\u8D28"
  }, ((_find10 = _find(dictionary === null || dictionary === void 0 ? void 0 : dictionary.houseOwnershipType, {
    dictValue: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ownershipType
  })) === null || _find10 === void 0 ? void 0 : _find10.name) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4EA7\u6743\u5E74\u9650"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ownershipYear) ? (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.ownershipYear) + '年' : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4F7F\u7528\u72B6\u6001"
  }, ((_find11 = _find(dictionary === null || dictionary === void 0 ? void 0 : dictionary.houseStatus, {
    dictValue: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.houseStatus
  })) === null || _find11 === void 0 ? void 0 : _find11.name) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4EA4\u4ED8\u88C5\u4FEE\u60C5\u51B5"
  }, ((_find12 = _find(dictionary === null || dictionary === void 0 ? void 0 : dictionary.deliverRenovation, {
    dictValue: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.deliverRenovation
  })) === null || _find12 === void 0 ? void 0 : _find12.name) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5EFA\u7B51\u9762\u79EF"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.houseArea) ? (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.houseArea) + '㎡' : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u8BA1\u8D39\u9762\u79EF"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.billingArea) ? (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.billingArea) + '㎡' : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5957\u5185\u9762\u79EF"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.actualArea) ? (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.actualArea) + '㎡' : '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u516C\u644A\u9762\u79EF"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.shareArea) ? (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.shareArea) + '㎡' : '-')), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "".concat(businessTypeTextMap[businessType], "ID")
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.code) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6765\u6E90"
  }, "\u5BA2\u6237\u4E2D\u53F0/\u624B\u52A8\u6DFB\u52A0"), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u72B6\u6001"
  }, "\u6B63\u5E38"), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u4EBA"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createAccountName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u65F6\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createDate) || '-')));
  var space = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    imgUrl: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.imageUrlList) && (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.imageUrlList[0]),
    imgList: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.imageUrlList,
    name: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.fullName) || (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.name) || '-',
    desc: "\u9762\u79EF\uFF1A".concat((detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.area) ? (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.area) + 'm²' : '-')
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6240\u5C5E\u533A\u57DF"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.parentName) || '-')), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: '8px 0px 24px 0'
    }
  }), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7A7A\u95F4ID"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.code) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u4EBA"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createAccountName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u65F6\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createDate) || '-')));
  // 物业公司详情
  var propertyCompany = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseInfoBox, {
    imgUrl: (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.logo) && ((_detailInfo$logo = detailInfo.logo) === null || _detailInfo$logo === void 0 ? void 0 : _detailInfo$logo.fileUrl),
    name: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.name,
    desc: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.communityStageName
  }), /*#__PURE__*/React.createElement(Divider, {
    dashed: true
  }), /*#__PURE__*/React.createElement(Descriptions, {
    column: 2,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u9879\u76EE\u6765\u6E90"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.communitySourceName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u63A5\u7BA1\u65F6\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.takeOverDate) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u63A5\u7BA1\u6027\u8D28"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.takeOverPropertyName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4F9B\u6C34\u65B9\u5F0F"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.waterSupplyModeName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u4F9B\u7535\u65B9\u5F0F"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.powerSupplyModeName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7269\u4E1A\u8D39"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.managementFee) || '-')), /*#__PURE__*/React.createElement(Divider, {
    dashed: true,
    style: {
      margin: '10px 0 24px'
    }
  }), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7269\u4E1A\u8D39\u63CF\u8FF0"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.managementFeeDesc) || '-')), /*#__PURE__*/React.createElement(Divider, {
    dashed: true,
    style: {
      margin: '10px 0 24px'
    }
  }), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u9644\u4EF6",
    contentStyle: {
      flex: 1,
      minWidth: 0
    }
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : (_detailInfo$attachmen2 = detailInfo.attachmentList) === null || _detailInfo$attachmen2 === void 0 ? void 0 : _detailInfo$attachmen2.length) ? /*#__PURE__*/React.createElement(FileUpload, {
    handleType: "review",
    defaultFileList: detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.attachmentList
  }) : '-')), /*#__PURE__*/React.createElement(Divider, {
    dashed: true,
    style: {
      margin: '10px 0 24px'
    }
  }), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u5F53\u524D\u7269\u4E1A"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isCurrent) ? '是' : '否')), /*#__PURE__*/React.createElement(Divider, {
    dashed: true,
    style: {
      margin: '10px 0 24px'
    }
  }), /*#__PURE__*/React.createElement(Descriptions, {
    column: 1,
    labelStyle: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u7269\u4E1A\u516C\u53F8ID"
  }, detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.id), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u6765\u6E90"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.communitySourceName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u72B6\u6001"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.isDelete) == 0 ? '正常' : '已删除'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u4EBA"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createAccountName) || '-'), /*#__PURE__*/React.createElement(Descriptions.Item, {
    label: "\u521B\u5EFA\u65F6\u95F4"
  }, (detailInfo === null || detailInfo === void 0 ? void 0 : detailInfo.createDate) || '-')));
  return /*#__PURE__*/React.createElement(Drawer, _objectSpread(_objectSpread({
    width: businessType === 'space' ? 600 : 780
  }, other), {}, {
    className: "kht-business-detail-drawer",
    getContainer: document.getElementById('root') || document.body
  }), businessType === 'user' && userElement, businessType === 'enterprise' && enterpriseElement, businessType === 'proprietor' && proprietor, businessType === 'family' && family, businessType === 'tenant' && tenant, businessType === 'tenant_family' && tenantFamily, businessType === 'parking_proprietor' && parkingProprietor, businessType === 'property_owner' && propertyOwner, businessType === 'home' && home, businessType === 'house' && house, businessType === 'space' && space, businessType === 'property_company' && propertyCompany);
}
export function BaseInfoBox(props) {
  var _props$imgUrl = props.imgUrl,
    imgUrl = _props$imgUrl === void 0 ? '' : _props$imgUrl,
    _props$hasArrow = props.hasArrow,
    hasArrow = _props$hasArrow === void 0 ? false : _props$hasArrow,
    name = props.name,
    desc = props.desc,
    _props$imgList = props.imgList,
    imgList = _props$imgList === void 0 ? [] : _props$imgList,
    sex = props.sex;
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    visible = _useState16[0],
    setVisible = _useState16[1];
  var onClick = function onClick() {
    hasArrow && props.onClick && props.onClick();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: style['base-info-box']
  }, /*#__PURE__*/React.createElement("div", {
    className: style['left']
  }, /*#__PURE__*/React.createElement("div", {
    className: "base-info-box-image ".concat(style['img'])
  }, /*#__PURE__*/React.createElement(Image, {
    src: imgUrl || userInfo,
    onClick: function onClick() {
      return setVisible(true);
    },
    preview: {
      visible: false
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: style['text'],
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: style['name']
  }, name, ' ', sex == '1' || sex == '2' ? sex == '1' ? /*#__PURE__*/React.createElement(KhtIcons, {
    type: "icon-kehuguanli",
    style: {
      fontSize: 14,
      color: '#1890ff'
    }
  }) : /*#__PURE__*/React.createElement(KhtIcons, {
    type: "icon-nv",
    style: {
      fontSize: 14,
      color: '#eb8b87'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: style['desc']
  }, desc))), hasArrow ? /*#__PURE__*/React.createElement("div", {
    className: style['right-icon'],
    onClick: onClick
  }, /*#__PURE__*/React.createElement(RightOutlined, null)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement(Image.PreviewGroup, {
    preview: {
      visible: visible,
      onVisibleChange: function onVisibleChange(vis) {
        return setVisible(vis);
      }
    }
  }, imgList.length ? imgList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Image, {
      key: index,
      src: item
    });
  }) : /*#__PURE__*/React.createElement(Image, {
    src: imgUrl
  }))));
}
export var businessTypeTextMap = {
  user: '住户-个人',
  enterprise: '住户-企业',
  proprietor: '业主',
  family: '家属',
  tenant: '租户',
  tenant_family: '租户家属',
  parking_proprietor: '车位业主',
  property_owner: '产权人',
  lessee: '承租人',
  nanny: '保姆',
  home: '家庭',
  house: '房间',
  space: '空间',
  property_company: '物业公司'
};
var houseStatusMap = {
  sale: '出售',
  lease: '出租',
  vacant: '空置',
  checkIn: '已入住',
  decorated: '已装修',
  decorating: '装修中',
  prepareDecoration: '待装修',
  joined: '已入伙',
  notJoined: '未入伙'
};
var bindStateMap = {
  0: '未绑定',
  1: '已绑定',
  2: '已解绑'
};
// 客户来源字典
var bindSourceMap = {
  0: '客户中台/手动添加',
  1: '企微手动添加',
  2: '其他手动添加',
  3: '手动导入',
  4: '星河接口获取',
  5: '极致接口获取'
};
export var relationTextMap = {
  spouse: '配偶',
  children: '子女',
  parent: '父母',
  brotherSister: '兄弟姐妹',
  relative: '亲戚',
  grandparent: '祖父母',
  other: '其他'
};
export var valueEnumLessorType = {
  0: {
    key: '0',
    text: '业主'
  },
  1: {
    key: '1',
    text: '承租人'
  },
  2: {
    key: '2',
    text: '物业公司'
  }
};
export var valueEnumBusinessType = {
  1: {
    key: '1',
    text: '个人'
  },
  2: {
    key: '2',
    text: '企业'
  }
};
export var valueEnumOwnershipType = {
  1: {
    key: '1',
    text: '共有'
  },
  2: {
    key: '2',
    text: '私有'
  }
};
export var valueEnumCurrent = {
  0: {
    key: '0',
    text: '否'
  },
  1: {
    key: '1',
    text: '是'
  }
};
export var HouseListOption = [{
  value: 'residence',
  label: '普通住宅'
}, {
  value: 'shop',
  label: '住宅底商'
}, {
  value: 'apartment',
  label: '公寓'
}, {
  value: 'villa',
  label: '别墅'
}, {
  value: 'foreignStyle',
  label: '洋房'
}, {
  value: 'officeBuilding',
  label: '写字楼'
}, {
  value: 'businessStreet',
  label: '商业街'
}, {
  value: 'other',
  label: '其它'
}];
export var businessTypeMap = {
  2: '私有',
  1: '共有'
};
export var booleanTextMap = {
  0: '否',
  1: '是'
};