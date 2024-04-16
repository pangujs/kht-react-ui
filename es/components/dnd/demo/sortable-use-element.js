import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useCallback, useRef } from 'react';
import KhtSortableProvider from '@src/dnd/sortable';
import update from 'immutability-helper';
import { DragOutlined } from '@ant-design/icons';
export default (function () {
  var _useState = useState([{
      id: '111',
      text: '1111111111'
    }, {
      id: '222',
      text: '22222222222'
    }, {
      id: '333',
      text: /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'red'
        }
      }, "33333333333")
    }, {
      id: '444',
      text: '444444444'
    }, {
      id: '555',
      text: '5555555555'
    }, {
      id: '666',
      text: '666666666'
    }, {
      id: '777',
      text: '777777777777'
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    cards = _useState2[0],
    setCards = _useState2[1];
  var dragCallback = useCallback(function (dragIndex, hoverIndex) {
    setCards(function (prevCards) {
      return update(prevCards, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, prevCards[dragIndex]]]
      });
    });
  }, []);
  var RenderDADList = useCallback(function (card, index) {
    var dropRef = useRef(null);
    return /*#__PURE__*/React.createElement(KhtSortableProvider.DndList, {
      style: {
        padding: '15px 5px',
        margin: '10px 0',
        border: '1px dashed #aeafff',
        cursor: 'pointer'
      },
      useOnlyElement: true,
      key: card.id,
      index: index,
      dropRef: dropRef,
      dragDropType: 'ABC',
      children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        ref: dropRef
      }, /*#__PURE__*/React.createElement(DragOutlined, {
        style: {
          fontSize: '18px',
          marginRight: '20px'
        }
      })), /*#__PURE__*/React.createElement("span", null, card.text))),
      dragCallback: dragCallback
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KhtSortableProvider, {
    children: cards.map(function (item, index) {
      return RenderDADList(item, index);
    })
  }));
});