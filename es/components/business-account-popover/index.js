import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useMemo, useState } from 'react';
import { Popover, Image, Space } from 'antd';
import { getAccountInfoById } from '../../http/api/index';
import "./index.css";
import KhtbusinessMobileText from '../business-mobile-text';
import KhtTableOverflowTool from '../table-render/overflow-tool';
import DefaultAvatar from '../../svg/default-avatar.svg';
import Man from '../../svg/man.svg';
import WoMan from '../../svg/woman.svg';
import Company from '../../assets/images/company.png';
var AccountPopover = function AccountPopover(props) {
  var _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
    id = props.id,
    _props$type = props.type,
    type = _props$type === void 0 ? 'employee' : _props$type,
    _props$name = props.name,
    name = _props$name === void 0 ? '-' : _props$name,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottom' : _props$placement,
    nameStyle = props.nameStyle,
    getPopupContainer = props.getPopupContainer;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    info = _useState2[0],
    setInfo = _useState2[1];
  var onOpenChange = function onOpenChange(open) {
    //获取用户信息的请求
    console.log(info);
    if (open && !info.id) {
      getAccountInfoById({
        id: id,
        type: type
      }).then(function (res) {
        if (res.success) setInfo(res.response);
      });
    }
  };
  var PopoverContent = useMemo(function () {
    if (['proprietor', 'tenant', 'family', 'tenantFamily'].includes(type)) {
      return /*#__PURE__*/React.createElement(AssetsAccountInfo, {
        info: info,
        type: type
      });
    } else if (['wechat', 'wxwork'].includes(type)) {
      return /*#__PURE__*/React.createElement(WxAccountInfo, {
        info: info,
        type: type
      });
    } else {
      return /*#__PURE__*/React.createElement(Employee, {
        info: info,
        type: type
      });
    }
  }, [type, info]);
  return /*#__PURE__*/React.createElement(Popover, {
    placement: placement,
    getPopupContainer: getPopupContainer ? getPopupContainer : function (node) {
      return (node === null || node === void 0 ? void 0 : node.parentElement) || document.body;
    },
    onOpenChange: onOpenChange,
    content: PopoverContent,
    trigger: trigger,
    overlayClassName: "kht-account-popover"
  }, /*#__PURE__*/React.createElement("span", {
    style: nameStyle
  }, name));
};
//电话号码展示
var ShowPhone = function ShowPhone(props) {
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
};
var HeaderContainer = function HeaderContainer(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "name-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, /*#__PURE__*/React.createElement("span", null, props === null || props === void 0 ? void 0 : props.name), (props === null || props === void 0 ? void 0 : props.businessType) == 0 ? /*#__PURE__*/React.createElement("img", {
    src: Company,
    width: 13,
    height: 14
  }) : /*#__PURE__*/React.createElement("img", {
    src: (props === null || props === void 0 ? void 0 : props.sex) == 2 ? WoMan : Man,
    width: 13,
    height: 14
  })), /*#__PURE__*/React.createElement(Identity, {
    type: props === null || props === void 0 ? void 0 : props.type,
    username: props === null || props === void 0 ? void 0 : props.username
  })), /*#__PURE__*/React.createElement(Image, {
    preview: false,
    width: 60,
    height: 60,
    src: (props === null || props === void 0 ? void 0 : props.avatar) || DefaultAvatar
  }));
};
//   展示身份
var Identity = function Identity(props) {
  var Type = {
    proprietor: '业主',
    tenant: '租户',
    family: '家属',
    tenantFamily: '租户家属',
    wechat: '微信客户',
    wxwork: '企微客户',
    employee: '员工'
  };
  var type = props.type || '';
  if (type == 'wechat' || type == 'wxwork') {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "identity-label"
    }, "\u7C7B\u578B"), /*#__PURE__*/React.createElement("span", {
      className: type == 'wechat' ? 'wechart-identity' : 'wxwork-identity'
    }, Type[type] || '-'));
  } else if (type == 'employee') {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "identity-label"
    }, "\u8D26\u53F7"), /*#__PURE__*/React.createElement("span", {
      className: "account"
    }, props.username || '-'));
  } else {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "identity-label"
    }, "\u8EAB\u4EFD"), /*#__PURE__*/React.createElement("span", {
      className: "identity"
    }, Type[type] || '-'));
  }
};
// 员工
export var Employee = function Employee(props) {
  var _ref = props.info || {},
    name = _ref.name,
    businessType = _ref.businessType,
    sex = _ref.sex,
    avatar = _ref.avatar,
    username = _ref.username,
    telephone = _ref.telephone,
    employeeStatus = _ref.employeeStatus,
    departmentShortList = _ref.departmentShortList,
    remarkList = _ref.remarkList,
    position = _ref.position;
  var departName = (departmentShortList === null || departmentShortList === void 0 ? void 0 : departmentShortList.map(function (i) {
    return i.fullName;
  })) || [];
  var type = props.type;
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-account-popover-content"
  }, /*#__PURE__*/React.createElement(HeaderContainer, {
    name: name,
    businessType: businessType,
    sex: sex,
    type: type,
    username: username,
    avatar: avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u624B\u673A"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, /*#__PURE__*/React.createElement(ShowPhone, {
    phone: telephone
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u804C\u52A1"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, position || '-')), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, !employeeStatus ? '-' : employeeStatus == 1 ? '在职' : '离职')), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u90E8\u95E8"), /*#__PURE__*/React.createElement("div", {
    className: "content-tags"
  }, (departName === null || departName === void 0 ? void 0 : departName.length) ? departName.map(function (i, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: index
    }, i, ";\xA0");
  }) : '-')));
};
//资产相关
export var AssetsAccountInfo = function AssetsAccountInfo(props) {
  var _ref2 = props.info || {},
    name = _ref2.name,
    businessType = _ref2.businessType,
    sex = _ref2.sex,
    avatar = _ref2.avatar,
    telephone = _ref2.telephone,
    landline = _ref2.landline,
    assetFullName = _ref2.assetFullName,
    belongResidentName = _ref2.belongResidentName,
    isBindHouse = _ref2.isBindHouse;
  var type = props.type;
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-account-popover-content"
  }, /*#__PURE__*/React.createElement(HeaderContainer, {
    name: name,
    businessType: businessType,
    sex: sex,
    type: type,
    avatar: avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u624B\u673A"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, /*#__PURE__*/React.createElement(ShowPhone, {
    phone: telephone
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u5EA7\u673A\u53F7"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, landline || '-')), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u7ED1\u5B9A\u8D44\u4EA7"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, assetFullName || '-')), type == 'family' && /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u6240\u5C5E\u4E1A\u4E3B"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, belongResidentName || '-')), type == 'tenant' && /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u51FA\u79DF\u4EBA"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, belongResidentName || '-')), type == 'tenantFamily' && /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u6240\u5C5E\u79DF\u6237"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, belongResidentName || '-')), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u7ED1\u5B9A\u72B6\u6001"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, isBindHouse == 1 ? '已绑定' : '未绑定')));
};
//微信相关用户
export var WxAccountInfo = function WxAccountInfo(props) {
  var _ref3 = props.info || {},
    name = _ref3.name,
    businessType = _ref3.businessType,
    sex = _ref3.sex,
    avatar = _ref3.avatar,
    _ref3$telephoneList = _ref3.telephoneList,
    telephoneList = _ref3$telephoneList === void 0 ? [] : _ref3$telephoneList,
    remarkList = _ref3.remarkList,
    _ref3$tagList = _ref3.tagList,
    tagList = _ref3$tagList === void 0 ? [] : _ref3$tagList;
  var type = props.type;
  var remarks = useMemo(function () {
    var list = (remarkList === null || remarkList === void 0 ? void 0 : remarkList.map(function (i) {
      return i.remark;
    })) || [];
    var list2 = Array.from(new Set(list));
    return list2;
  }, [remarkList]);
  return /*#__PURE__*/React.createElement("div", {
    className: "kht-account-popover-content"
  }, /*#__PURE__*/React.createElement(HeaderContainer, {
    name: name,
    businessType: businessType,
    sex: sex,
    type: type,
    avatar: avatar
  }), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u5907\u6CE8\u540D"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, /*#__PURE__*/React.createElement(KhtTableOverflowTool, {
    arr: remarks,
    max: 2,
    tips: "\u4E2A\u5907\u6CE8\u540D"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u624B\u673A"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, /*#__PURE__*/React.createElement(ShowPhone, {
    phone: telephoneList === null || telephoneList === void 0 ? void 0 : telephoneList.map(function (item) {
      return item.telephone;
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u6DFB\u52A0\u4EBA"), /*#__PURE__*/React.createElement("span", {
    className: "content-inner"
  }, /*#__PURE__*/React.createElement(KhtTableOverflowTool, {
    arr: remarkList || [],
    max: 2,
    serviceName: "employeeName",
    tips: "\u4E2A\u6DFB\u52A0\u4EBA"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "content-lable"
  }, "\u6807\u7B7E"), /*#__PURE__*/React.createElement("div", {
    className: "content-tags"
  }, /*#__PURE__*/React.createElement(Space, {
    size: 8,
    wrap: true
  }, tagList === null || tagList === void 0 ? void 0 : tagList.map(function (i, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tags",
      key: index
    }, i === null || i === void 0 ? void 0 : i.name);
  })))));
};
export var API = function API(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export default AccountPopover;