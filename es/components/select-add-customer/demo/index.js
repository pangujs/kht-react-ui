import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import SelectAddCustomer from '../index';
import { useSetState } from 'ahooks';
import { Button } from 'antd';
export default function Demo() {
  var _useSetState = useSetState({
      open: false,
      data: [],
      type: 'member'
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      setState({
        open: true
      });
    }
  }, "\u6DFB\u52A0\u5BA2\u6237"), /*#__PURE__*/React.createElement(SelectAddCustomer, {
    type: state.type,
    initData: state.data,
    open: state.open,
    onSubmit: function onSubmit(type, nodes) {
      console.log(type, nodes);
      setState({
        open: false,
        type: type
      });
    },
    onClose: function onClose() {
      setState({
        open: false
      });
    },
    hasNoAdd: false
  }));
}