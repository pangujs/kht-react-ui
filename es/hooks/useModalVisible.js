import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState } from 'react';
/**
 *  弹框的显示与隐藏 hooks
 */
export default function useModalVisible() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  function changeStatus() {
    setVisible(!visible);
  }
  return {
    visible: visible,
    changeStatus: changeStatus
  };
}