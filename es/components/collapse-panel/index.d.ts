import React from 'react';
import './index.less';
type CollapsePanelPropsType = {
    /**
     * @description 左侧和右侧子节点。子节点必须包含 key 属性， 值为 "left" | "right"
     * @default <></>
     */
    children: React.ReactNode;
    /**
     * @description 组件实例 Ref 属性, 可以使用组件内部的方法
     * @default null
     */
    collapsePanelRef?: {
        current: CollapsePanelAction;
    };
};
export type CollapsePanelAction = {
    /**
     * @description 设置展开或收起状态
     * @default null
     */
    changeCollapseState: (collapse: boolean) => void;
};
export default function CollapsePanel(props: CollapsePanelPropsType): JSX.Element;
export declare const API: (props: CollapsePanelPropsType) => JSX.Element;
export declare const CollapsePanelAction: (props: CollapsePanelAction) => JSX.Element;
export {};
