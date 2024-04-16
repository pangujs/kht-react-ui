import React from 'react';
import { ScrollbarProps } from 'react-custom-scrollbars';
export type ScrollbarPropsType = {
    /**
     * @description 滚动条触底时触发的函数
     * @default       ()=>{}
     */
    touchBottom?: Function;
    /**
     * @description 滚动条触底触发距离
     * @default       ()=>{}
     */
    bottom?: number;
    /**
     * @description 滚动条触顶时触发的函数
     * @default        ()=>{}
     */
    touchTop?: Function;
    /**
     * @description 内容区
     */
    children?: React.ReactNode;
    /**
     * @description react-custom-scrollbars 的 props 【 https://www.npmjs.com/package/react-custom-scrollbars 】
     * @default -
     */
    fieldProps?: ScrollbarProps;
};
declare const Scrollbar: (props: ScrollbarPropsType) => JSX.Element;
export default Scrollbar;
