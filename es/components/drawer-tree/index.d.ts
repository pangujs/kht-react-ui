import React from 'react';
import { BaseTreePropsType } from '../base-tree';
import { InputProps, DrawerProps, TooltipProps } from 'antd';
export type DrawerTreePropsType = DrawerProps & {
    /**
     * @description 弹窗状态，true-预览模式，false-可选模式
     * @default - false
     */
    isReviewMode?: boolean;
    /**
     * @description 确认按钮的回调
     * @default -
     */
    ok?: (selectNode: any) => void;
    /**
     * @description 关闭弹框的回调
     * @default -
     */
    cancel?: () => void;
    /**
     * @description 自定义确认按钮文字
     * @default - 确认
     */
    okText?: string;
    /**
     * @description 自定义取消按钮文字
     * @default - 取消
     */
    cancelText?: string;
    /**
     * @description Drawer props 与官方同步
     */
    drawerProps?: Omit<DrawerProps, 'footer'>;
    /**
     * @description antd Input 组件的 Props
     * @default false
     */
    inputProps?: InputProps;
    /**
     * @description Tree props 与官方同步
     */
    treeProps?: BaseTreePropsType;
    /**
     * @description （受控）默认选取数据，数据回显
     */
    defaultCheckedItems: DefaultCheckedItems[];
    /**
     * @description 自定义 已选中列表元素
     */
    renderSelectItem?: () => React.ReactNode;
    /**
     * @description Tooltip props 与官网同步
     */
    toolTipProps?: Omit<TooltipProps, 'title'>;
    /**
     * @description 是否展示 tooltip 组件
     * @default false
     */
    showTooltip?: boolean;
    /**
     * @description 手动设置确定按钮时，是否关闭弹层
     * @default true
     */
    clickOkCancel?: boolean;
    /**
     * @description 是否开启 树 的虚拟列表, 设置后内部节点不再支持横向滚动
     * @default false
     */
    height?: boolean;
    /**
     * @description 选择节点后，右侧所展示的名称取值字段
     * @default title
     */
    rightShowTitle?: string;
    /**
     * @description 替代勾选或选中的事件回调,  将不会有 onSelect 和  onCheck 的 props 传入
     */
    onChangeCallback?: (selectedKeys: React.Key[] | {
        checked: React.Key[];
        halfChecked: React.Key[];
    }, info: any) => void;
    /**
     * @description 选中节点时，仅在 disableChild 为 true时有效， 是否仅显示 父节点， 为 parent 时仅显父节点， 为 children 时仅显示子节点，为 undefined 时显示所有
     * @default undefined
     */
    showNodeParents?: 'parent' | 'children' | undefined;
    /**
     * @description 是否展示右侧已选面板
     * @default true
     */
    showSelectPanel?: boolean;
    /**
     * @description 顶部插入ReactNode节点
     * @default true
     */
    beforeNode?: React.ReactNode;
    /**
     * @description 单选时，并且selectable = true 模式，是否在树顶部显示 已选节点全路径
     * @default true
     */
    showHeadSelectFullText?: boolean;
    /**
     * @description 底部插入ReactNode节点
     * @default true
     */
    afterNode?: React.ReactNode;
};
export type DefaultCheckedItems = {
    /**
     * @description 节点的 key 值。原始值
     * @default -
     */
    key: string;
    /**
     * @description 节点的 title 值
     * @default -
     */
    title: string;
    /**
     * @description hover 时，tooltip 展示的全路径。没有的话取 title 值
     * @default -
     */
    fullName?: string;
    /**
     * @description 节点上的 icon
     * @default -
     */
    icon?: React.ReactNode;
    /**
     * @description 扩展字段，节点内的其它字段（关闭弹层时可原样返回）
     */
    [prop: string]: any;
};
export default function DrawerTree(props: DrawerTreePropsType): JSX.Element;
interface IDrawerTreePropsType {
    /**
     * @description 弹窗状态，true-预览模式，false-可选模式
     * @default - false
     */
    isReviewMode?: boolean;
    /**
     * @description 确认按钮的回调
     * @default -
     */
    ok?: (selectNode: any) => void;
    /**
     * @description 关闭弹框的回调
     * @default -
     */
    cancel?: () => void;
    /**
     * @description 自定义确认按钮文字
     * @default 确认
     */
    okText?: string;
    /**
     * @description 自定义取消按钮文字
     * @default 取消
     */
    cancelText?: string;
    /**
     * @description Drawer props 与官方同步
     */
    drawerProps?: Omit<DrawerProps, 'footer'>;
    /**
     * @description antd Input 组件的 Props
     * @default false
     */
    inputProps?: InputProps;
    /**
     * @description Tree props 与官方同步
     */
    treeProps?: BaseTreePropsType;
    /**
     * @description （受控）默认选取数据，数据回显
     */
    defaultCheckedItems: DefaultCheckedItems[];
    /**
     * @description 自定义 已选中列表元素
     */
    renderSelectItem?: () => React.ReactNode;
    /**
     * @description Tooltip props 与官网同步
     */
    toolTipProps?: Omit<TooltipProps, 'title'>;
    /**
     * @description 是否展示 tooltip 组件
     * @default false
     */
    showTooltip?: boolean;
    /**
     * @description 手动设置确定按钮时，是否关闭弹层
     * @default true
     */
    clickOkCancel?: boolean;
    /**
     * @description 是否开启 树 的虚拟列表, 设置后内部节点不再支持横向滚动
     * @default false
     */
    height?: boolean;
    /**
     * @description 选择节点后，右侧所展示的名称取值字段
     * @default title
     */
    rightShowTitle?: string;
    /**
     * @description 替代勾选或选中的事件回调,  将不会有 onSelect 和  onCheck 的 props 传入
     */
    onChangeCallback?: (selectedKeys: React.Key[] | {
        checked: React.Key[];
        halfChecked: React.Key[];
    }, info: any) => void;
    /**
     * @description 选中节点时，仅在 disableChild 为 true时有效， 是否仅显示 父节点， 为 parent 时仅显父节点， 为 children 时仅显示子节点，为 undefined 时显示所有
     * @default undefined
     */
    showNodeParents?: 'parent' | 'children' | undefined;
    /**
     * @description 是否展示右侧已选面板
     * @default true
     */
    showSelectPanel?: boolean;
    /**
     * @description 顶部插入ReactNode节点
     * @default true
     */
    beforeNode?: React.ReactNode;
    /**
     * @description 底部插入ReactNode节点
     * @default true
     */
    afterNode?: React.ReactNode;
}
export declare const API: (props: IDrawerTreePropsType) => JSX.Element;
export declare const DefaultCheckedItems: (props: DefaultCheckedItems) => JSX.Element;
export {};
