import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import DrawerSelectResidence from '../index';
import { useSetState } from 'ahooks';
import { Button } from 'antd';
export default function Demo() {
  var _useSetState = useSetState({
      open: false
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
  }, "\u9009\u62E9\u4F4F\u5B85"), /*#__PURE__*/React.createElement(DrawerSelectResidence, {
    projectId: "",
    initData: [],
    onSubmit: function onSubmit(ids, nodes) {
      console.log(ids, nodes);
      setState({
        open: false
      });
    },
    open: state.open,
    onClose: function onClose() {
      setState({
        open: false
      });
    }
  }));
}