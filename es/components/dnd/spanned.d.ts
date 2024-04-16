import React from 'react';
export type SpannedPropsType = {
    /**
     * @description 可拖拽的子节点
     */
    children: React.ReactNode;
};
declare function SpannedProvider(props: SpannedPropsType): JSX.Element;
declare namespace SpannedProvider {
    var DragList: (props: import("./drag-and-drop/drag-and-drop-list").DragAndDropListPropsType) => JSX.Element;
    var DropList: (props: import("./drop").DropListPropsType) => JSX.Element;
}
export default SpannedProvider;
