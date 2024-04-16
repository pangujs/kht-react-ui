import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragAndDropList from './drag-and-drop/drag-and-drop-list';
import DropList from './drop';
SpannedProvider.DragList = DragAndDropList;
SpannedProvider.DropList = DropList;
export default function SpannedProvider(props) {
  return /*#__PURE__*/React.createElement(DndProvider, {
    backend: HTML5Backend
  }, props.children);
}