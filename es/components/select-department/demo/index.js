import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import DrawerSelectDepartment from '../index';
import { useSetState } from 'ahooks';
import { Button } from 'antd';
export default function Demo() {
  var _useSetState = useSetState({
      open: false,
      selectable: false,
      multiple: true,
      inDrawerStyle: false,
      isMogami: false
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 20,
      marginBottom: 10
    },
    onClick: function onClick() {
      setState({
        open: true,
        selectable: false,
        multiple: true,
        isMogami: false,
        inDrawerStyle: true
      });
    }
  }, "\u9009\u62E9\u90E8\u95E8 - \u591A\u9009 - selectable = false"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 20,
      marginBottom: 10
    },
    onClick: function onClick() {
      setState({
        open: true,
        selectable: false,
        multiple: true,
        isMogami: true,
        inDrawerStyle: true
      });
    }
  }, "\u9009\u62E9\u90E8\u95E8 - \u591A\u9009 - \u4E0D\u9700\u8981\u5B50\u5B59\u6570\u636E - selectable = false && isMogami = true"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 20,
      marginBottom: 10
    },
    onClick: function onClick() {
      setState({
        open: true,
        selectable: true,
        multiple: true,
        isMogami: false,
        inDrawerStyle: true
      });
    }
  }, "\u9009\u62E9\u90E8\u95E8 - \u591A\u9009 - selectable = true"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 20,
      marginBottom: 10
    },
    onClick: function onClick() {
      setState({
        open: true,
        selectable: true,
        multiple: false,
        isMogami: false,
        inDrawerStyle: true
      });
    }
  }, "\u9009\u62E9\u90E8\u95E8 - \u5355\u9009 - selectable = true"), /*#__PURE__*/React.createElement(DrawerSelectDepartment, {
    initData: [],
    onSubmit: function onSubmit(ids, nodes) {
      console.log(ids, nodes);
      setState({
        open: false
      });
    },
    isMogami: state.isMogami,
    open: state.open,
    onClose: function onClose() {
      setState({
        open: false
      });
    },
    selectable: state.selectable,
    inDrawerStyle: state.inDrawerStyle,
    multiple: state.multiple,
    isUseSpellKey: false
  }));
}