import React from 'react';
import { DefaultCheckedItems } from '../modal-tree';
import { BaseTreePropsType, TreeDataNode } from '../base-tree';
type BusinessTagsModalTreePropsType = {
    /**
     * @description 弹层的状态
     * @default false
     */
    open: boolean;
    /**
     * @description 弹层的状态
     * @default false
     */
    visible?: boolean;
    /**
     * @description 关闭弹框的回调
     * @default ()=>void
     */
    cancel?: () => void;
    /**
     * @description 弹层的 title
     * @default 请选择
     */
    title?: string;
    /**
     * @description 确认按钮的回调
     * @default ()=>void
     */
    ok?: (selectNode: TreeDataNode[]) => void;
    /**
     * @description antd tree 组件的 Props
     * @default -
     */
    treeProps?: BaseTreePropsType;
    /**
     * @description （受控）默认回显数据。
     * @default []
     */
    defaultCheckedItems: DefaultCheckedItems[];
    /**
     * @description 是否关闭弹层时 销毁所有节点
     * @default true
     */
    destroyOnClose?: boolean;
    /**
     * @description false ===群标签，true === 客户标签
     * @default false
     */
    isGroup?: boolean;
};
export type TagsIconType = {
    /** 标签分类图标 */
    classify: React.ReactNode;
    /** 标签图标 */
    tags: React.ReactNode;
};
export declare const KhtBusinessTagsIconType: TagsIconType;
export default function BusinessTagsModalTree(props: BusinessTagsModalTreePropsType): JSX.Element;
export declare const BusinessTagsIconType: (props: TagsIconType) => JSX.Element;
export {};
