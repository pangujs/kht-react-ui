import React, { ReactElement } from 'react';
import './index.less';
import { TabPaneProps, TabsProps } from 'antd';
interface Item extends Omit<TabPaneProps, 'tab' | 'children'> {
    key: string;
    label: React.ReactNode;
}
interface TabsPageListPropsType {
    /**
     * @description tabs props 与官方同步 items对象中剔除了 children
     */
    tabsPrpos?: TabsProps & {
        items: Item[];
    };
    /**
     * @description tabs 内容 主要配合KhtLayoutPageList组件一起使用
     */
    children: ReactElement;
    /**
     * @description 顶部返回区域内容
     */
    back?: ReactElement;
    /**
     * @description 是否有顶部返回区域
     */
    hasBack?: boolean;
    /**
     * @description 返回区域配置 backName: 返回按钮文字, backFun: 返回点击事件 如果传入了事件 则组件本身不做返回处理, title: 按钮后面标题
     */
    backParams?: {
        backText?: string;
        backFun?: Function;
        title?: string;
    };
}
export default function TabsPageList(props: TabsPageListPropsType): JSX.Element;
export declare const API: (props: TabsPageListPropsType) => JSX.Element;
export {};
