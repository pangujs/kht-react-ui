import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import KhtBusinessInstitutionalAssetsTree from '../business-institutional-assets-tree';
import KhtStackUp from '../public-components/stack-up';
export default function BusinessStackIpAssets(props) {
  var _props$fetchCustom, _props$paramsType;
  var _props$showTitle = props.showTitle,
    showTitle = _props$showTitle === void 0 ? true : _props$showTitle,
    _props$leftTitle = props.leftTitle,
    leftTitle = _props$leftTitle === void 0 ? '选择项目' : _props$leftTitle,
    _props$RightTitle = props.RightTitle,
    RightTitle = _props$RightTitle === void 0 ? '选择住户' : _props$RightTitle,
    _props$backgroundColo = props.backgroundColorFull,
    backgroundColorFull = _props$backgroundColo === void 0 ? false : _props$backgroundColo;
  var FETCHCUSTOM = (_props$fetchCustom = props.fetchCustom) !== null && _props$fetchCustom !== void 0 ? _props$fetchCustom : true;
  var companyCode = ((_props$paramsType = props.paramsType) === null || _props$paramsType === void 0 ? void 0 : _props$paramsType.companyCode) || '';
  var stackUpRef = useRef(null);
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    isShrinksClose = _useState2[0],
    setIsShrinksClose = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    treeData = _useState4[0],
    setTreeData = _useState4[1];
  var onShrinks = function onShrinks(isClosing) {
    setIsShrinksClose(isClosing);
  };
  var onChange = function onChange(selectNode, info) {
    var _stackUpRef$current;
    (_stackUpRef$current = stackUpRef.current) === null || _stackUpRef$current === void 0 ? void 0 : _stackUpRef$current.setClosingStatus(false);
    setTreeData([info.node]);
  };
  useEffect(function () {
    props.onShrinksStatus && props.onShrinksStatus(isShrinksClose);
  }, [isShrinksClose]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KhtStackUp, {
    baseChildren: /*#__PURE__*/React.createElement(React.Fragment, null, showTitle ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '5px'
      }
    }, leftTitle) : null, /*#__PURE__*/React.createElement(KhtBusinessInstitutionalAssetsTree, {
      onChange: onChange,
      backgroundColorFull: backgroundColorFull,
      fetchCustom: FETCHCUSTOM,
      paramsType: !FETCHCUSTOM ? {
        companyCode: companyCode
      } : {},
      loadResident: false,
      canSelect: 'community',
      loaderLevel: 'community'
    })),
    stackUpRef: stackUpRef,
    rightChildren: /*#__PURE__*/React.createElement("div", {
      style: {
        height: 'calc(100vh - 210px)'
      }
    }, showTitle ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '5px'
      }
    }, RightTitle) : null, !!treeData.length && /*#__PURE__*/React.createElement(KhtBusinessInstitutionalAssetsTree, {
      customRootNode: treeData,
      multiple: false,
      backgroundColorFull: backgroundColorFull,
      onChange: props.onChange
    })),
    onShrinks: onShrinks,
    isDefaultClose: isShrinksClose
  }));
}