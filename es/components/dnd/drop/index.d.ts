import React from 'react';
export type DropListPropsType = {
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
     * @description 子元素
     * @default        -
     */
    children: React.ReactNode;
    /**
     * @description 拖放的唯一类型，当一个页面有多种拖拽场景时会用到
     * @default  -
     */
    dragDropType?: string;
    /**
     * @description 放置后的回调
     * @default        -
     */
    dropCallback: (item: any) => void;
};
declare const DropList: (props: DropListPropsType) => JSX.Element;
export default DropList;
