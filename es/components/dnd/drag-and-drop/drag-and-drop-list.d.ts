import React from 'react';
export type DragAndDropListPropsType = {
    /**
     * @description 子节点的索引
     */
    index: number;
    /**
     * @description 元素的 data 数据，事件回调需要外吐此数据
     */
    currentItem?: Record<string, unknown>;
    /**
     * @description 子节点的行内样式
     * @default        -
     */
    style?: React.CSSProperties;
    /**
     * @description 子节点的 className
     * @default        -
     */
    className?: string;
    /**
     * @description 是否开启拖拽排序
     * @default        true
     */
    drapSort?: boolean;
    /**
     * @description 仅可通过具体某个元素进行拖拽排序
     * @default        false
     */
    useOnlyElement?: boolean;
    /**
     * @description 子元素
     * @default        -
     */
    children: React.ReactNode;
    /**
     * @description 是否需要在跨区域中放置
     * @default        false
     */
    useDrop?: boolean;
    /**
     * @description 拖拽过程中，原本元素的透明度, 取值区间 0 ~ 1
     * @default  0
     */
    opacity?: number;
    /**
     * @description 拖放的唯一类型，当一个页面有多种拖拽场景时会用到
     * @default  -
     */
    dragDropType?: string;
    /**
     * 可执行拖拽的元素
     */
    dropRef?: any;
    /**
     * @description 拖拽过程中的回调
     * @default        ()=>{}
     */
    dragCallback?: (dragIndex: number, hoverIndex: number) => void;
    /**
     * @description 点击元素的回调
     * @default        ()=>{}
     */
    clickEleCallback?: (item: any) => void;
    /**
     * @description 透传 ref 元素，配合 `useOnlyElement` 属性使用
     * @default        -
     */
    useDragOnlyElement?: (ref: any) => void;
};
declare const DragAndDropList: (props: DragAndDropListPropsType) => JSX.Element;
export default DragAndDropList;
