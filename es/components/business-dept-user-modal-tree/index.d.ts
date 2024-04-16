import React from 'react';
import { DefaultCheckedItems } from '../modal-tree';
import { BaseTreePropsType, TreeDataNode } from '../base-tree';
import { InputProps } from 'antd';
type DeptUserTreeModalPropsType = {
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
     * @description 是否多选
     * @default true
     */
    multiple?: boolean;
    /**
     * @description 选中的类型， true 是 selectable ，false 是 checkedable
     * @default true
     */
    selectable?: boolean;
    /**
     * @description 判断当前点击对象里，是否包含此属性，有则可选，无则不可选
     * @default undefined
     */
    canSelect?: string | string[];
    /**
     * @description （受控）默认回显数据。
     * @default []
     */
    defaultCheckedItems: DefaultCheckedItems[];
    /**
     * @description 是否展示 tooltip 组件
     * @default false
     */
    showTooltip?: boolean;
    /**
     * @description 是否开启分页加载
     * @default true
     */
    isPageLoad?: boolean;
    /**
     * @description 分页的页码，与 isPageLoad 一起使用，不传【默认】是 10
     * @default 10
     */
    pageSize?: number;
    /**
     * @description 是否关闭弹层时 销毁所有节点
     * @default true
     */
    destroyOnClose?: boolean;
    /**
     * @description 自定义 唯一值的生成依赖
     * @default code
     */
    rowKey?: string;
    /**
     * @description antd Input 组件的 Props
     * @default -
     */
    inputProps?: InputProps;
    /**
     * @description antd Input 组件的 Props
     * @default -
     */
    treeProps?: BaseTreePropsType;
    /**
     * @description  请求参数 (type 字段的值)
     * @default ""
     */
    paramsType?: paramsType | undefined;
    /**
     * @description 是否调用中台资产接口( 默认调中台接口 )
     * @default true
     */
    fetchCustom?: boolean;
    /**
     * @description 是否调用超管，且无需传递公司编号-获取顶级服务商
     * @default false
     */
    isBossProvider?: boolean;
    /**
     * @description 是否开启部门下加载人员数据
     * @default true
     */
    loadUser?: boolean;
    /**
     * @description 选中节点时，仅在 disableChild 为 true时有效， 是否仅显示 父节点， 为 parent 时仅显父节点， 为 children 时仅显示子节点，为 undefined 时显示所有
     * @default undefined
     */
    showNodeParents?: 'parent' | 'children' | undefined;
    /**
     * @description 自定义节点数据，懒加载接口地址及相关逻辑不变
     * @default false
     */
    customRootNode?: TreeDataNode[];
};
type paramsType = {
    /** 超管 - 资产树时必传的一个参数 */
    companyCode?: string;
    [P: string]: any;
};
export type ModalTreeRefActionType = {
    /**
     * @description 清空所有已选数据
     * @default () => void
     */
    reset?: () => void;
};
export type DeptUserIconType = {
    /** 部门图标 */
    dept: React.ReactNode;
    /** 人员图标 */
    user: React.ReactNode;
};
export declare const KhtDeptUserIconType: DeptUserIconType;
declare const BusinessDeptUserModalTree: React.ForwardRefExoticComponent<DeptUserTreeModalPropsType & React.RefAttributes<ModalTreeRefActionType>>;
export default BusinessDeptUserModalTree;
export declare const DeptUserIconType: (props: DeptUserIconType) => JSX.Element;
