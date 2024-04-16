import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragAndDropList from './drag-and-drop/drag-and-drop-list';
SortableProvider.DndList = DragAndDropList;
export default function SortableProvider(props) {
  return /*#__PURE__*/React.createElement(DndProvider, {
    backend: HTML5Backend
  }, props.children);
}