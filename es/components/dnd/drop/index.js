import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTYpe';
var DropList = function DropList(props) {
  var _props$dragDropType;
  // 放置事件
  var _useDrop = useDrop({
      accept: (_props$dragDropType = props.dragDropType) !== null && _props$dragDropType !== void 0 ? _props$dragDropType : ItemTypes.SPANNED,
      drop: function drop(_item, monitor) {
        props.dropCallback(_item);
      },
      collect: function collect(monitor) {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        };
      }
    }),
    _useDrop2 = _slicedToArray(_useDrop, 2),
    canDrop = _useDrop2[0].canDrop,
    drop = _useDrop2[1];
  var backgroundColor = 'transparent';
  var border = '1px dashed transparent';
  if (canDrop) {
    backgroundColor = '#f6f7ff';
    border = '1px dashed #0179fd';
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: drop,
    className: props.className,
    style: _objectSpread({
      height: '100%',
      backgroundColor: backgroundColor,
      border: border
    }, props.style)
  }, props.children);
};
export default DropList;