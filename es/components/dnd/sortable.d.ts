import React from 'react';
export type SortablePropsType = {
    /**
     * @description 可拖拽的子节点
     */
    children: React.ReactNode;
};
declare function SortableProvider(props: SortablePropsType): JSX.Element;
declare namespace SortableProvider {
    var DndList: (props: import("./drag-and-drop/drag-and-drop-list").DragAndDropListPropsType) => JSX.Element;
}
export default SortableProvider;
