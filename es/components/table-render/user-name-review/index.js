import React from 'react';
import "./index.css";
import DefaultUserNameReview from '../../../svg/default-user-name-review.svg';
export default function UserNameReview(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    key: "2",
    className: "user-type"
  }, props.imageUrl ? /*#__PURE__*/React.createElement("img", {
    className: "icon-avatar",
    src: props.imageUrl,
    alt: ""
  }) : /*#__PURE__*/React.createElement("img", {
    className: "icon-avatar",
    src: DefaultUserNameReview
  }), props.userType == 1 && /*#__PURE__*/React.createElement("span", {
    className: "avatar black margin-left"
  }, props.userName), (props.userType == 2 || props.userType == 4) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "avatar black margin-left"
  }, props.userName), /*#__PURE__*/React.createElement("span", {
    className: "avatar green"
  }, "@", props.residentName)), props.userType == 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "avatar black margin-left"
  }, props.userName), /*#__PURE__*/React.createElement("span", {
    className: "avatar red"
  }, "@", props.userCompanyName))));
}