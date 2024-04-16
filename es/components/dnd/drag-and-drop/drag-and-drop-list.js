import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTYpe';
var DragAndDropList = function DragAndDropList(props) {
  var _props$dropRef, _props$drapSort, _props$dragDropType, _props$dragDropType2, _props$opacity;
  var ref = (_props$dropRef = props.dropRef) !== null && _props$dropRef !== void 0 ? _props$dropRef : useRef(null);
  var DRAPSORT = (_props$drapSort = props.drapSort) !== null && _props$drapSort !== void 0 ? _props$drapSort : true;
  // 拖拽事件
  var _useDrag = useDrag({
      type: (_props$dragDropType = props.dragDropType) !== null && _props$dragDropType !== void 0 ? _props$dragDropType : !props.useDrop ? ItemTypes.SORTABLE : ItemTypes.SPANNED,
      item: function item() {
        return _objectSpread(_objectSpread({}, props === null || props === void 0 ? void 0 : props.currentItem), {}, {
          index: props.index
        });
      },
      collect: function collect(monitor) {
        return {
          isDragging: monitor.isDragging()
        };
      }
    }),
    _useDrag2 = _slicedToArray(_useDrag, 3),
    isDragging = _useDrag2[0].isDragging,
    drag = _useDrag2[1],
    preview = _useDrag2[2];
  // 放置事件
  var _useDrop = useDrop({
      accept: (_props$dragDropType2 = props.dragDropType) !== null && _props$dragDropType2 !== void 0 ? _props$dragDropType2 : ItemTypes.SORTABLE,
      collect: function collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
          canDrop: monitor.canDrop()
        };
      },
      hover: function hover(item, monitor) {
        var _ref$current;
        if (!ref.current) {
          return;
        }
        var dragIndex = item.index;
        var hoverIndex = props.index;
        if (dragIndex === hoverIndex) {
          return;
        }
        // const hoverBoundingRect = (
        //   ref.current.parentNode?.parentNode?.parentNode as HTMLElement
        // )?.getBoundingClientRect();
        var hoverBoundingRect = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect();
        var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        var clientOffset = monitor.getClientOffset();
        var hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        props.dragCallback && props.dragCallback(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    }),
    _useDrop2 = _slicedToArray(_useDrop, 2),
    _useDrop2$ = _useDrop2[0],
    handlerId = _useDrop2$.handlerId,
    canDrop = _useDrop2$.canDrop,
    drop = _useDrop2[1];
  var opacity = isDragging ? (_props$opacity = props.opacity) !== null && _props$opacity !== void 0 ? _props$opacity : 0 : 1;
  if (props.dropRef) {
    setTimeout(function () {
      var _ref$current2;
      (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.setAttribute('draggable', true);
    }, 50);
    if (ref.current) ref.current.style.color = '#999';
    if (canDrop) {
      if (ref.current) ref.current.style.color = '#1890ff';
    }
  }
  if (DRAPSORT) {
    drag(drop(ref));
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: DRAPSORT ? props.useOnlyElement ? preview : ref : drag,
    "data-handler-id": handlerId,
    className: props.className,
    style: _objectSpread(_objectSpread({}, props.style), {}, {
      opacity: opacity
    }),
    onClick: function onClick() {
      return props.clickEleCallback && props.clickEleCallback(props.currentItem || {});
    }
  }, props.children);
};
export default DragAndDropList;