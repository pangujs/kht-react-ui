import React from 'react';
import { TreeDataNode } from '../base-tree';
import { DefaultCheckedItems } from '../modal-tree';
import { InputProps } from 'antd';
type paramsType = {
    /** 小区ID:查询 phase 分期 building：楼栋 时使用 */
    communityId?: string;
    /** 名字 */
    name?: string;
    /** 父级ID */
    parentId?: string;
    /**  查询业户信息：ID/姓名/手机号 ,*/
    searchInfo?: string;
    /** 来源表类型[organization：机构，community：小区，function：功能， building：楼栋，unit：单元，floor：楼层]  */
    sourceTableType?: 'organization' | 'community' | 'function' | 'building' | 'unit' | 'floor';
    /** 分期，building：楼栋，unit：单元，floor：楼层 */
    type?: 'building' | 'unit' | 'floor';
    /** 超管 - 资产树时必传的一个参数 */
    companyCode?: string;
};
type AssetsDrawerTreePropsType = {
    /**
     * @description 弹层的状态
     * @default false
     */
    open: boolean;
    /**
     * @description 是否关闭弹层时 销毁所有节点
     * @default true
     */
    destroyOnClose?: boolean;
    /**
     * @description 抽屉宽度
     * @default 480
     */
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
    width?: number;
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
     * @default ""
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
     * @description 是否开启房号下挂载 业户数据
     * @default true
     */
    loadResident?: boolean;
    /**
     * @description 业户信息内包含三个 id, 根据实际业务来自定义取
     * @default residentHouseId
     */
    residentHouseId?: boolean;
    /**
     * @description  接口请求的参数
     * @default {}
     */
    paramsType?: paramsType | undefined;
    /**
     * @description 是否调用中台资产接口( 默认调中台接口 )
     * @default true
     */
    fetchCustom?: boolean;
    /**
     * @description antd Input 组件的 Props
     * @default false
     */
    inputProps?: InputProps;
    /**
     * @description 仅加载到某个层级
     * @default undefined
     */
    loaderLevel?: 'organization' | 'community' | 'function' | 'phase' | 'building' | 'unit' | 'floor' | 'house';
    /**
     * @description 选中节点时，仅在 disableChild 为 true时有效， 是否仅显示 父节点， 为 parent 时仅显父节点， 为 children 时仅显示子节点，为 undefined 时显示所有
     * @default undefined
     */
    showNodeParents?: 'parent' | 'children' | undefined;
    /**
     * @description 自定义根节点数据，懒加载接口地址及相关逻辑不变
     * @default false
     */
    customRootNode?: TreeDataNode[];
    /**
     * @description 弹窗状态，true-预览模式，false-可选模式
     * @default - false
     */
    isReviewMode?: boolean;
    maskClosable?: boolean;
    /**
     * @description 是否开启禁用子节点模式
     * @default - false
     */
    disableChild?: boolean;
    /**
     * @description 是否开启人员点击显示人员卡片信息
     * @default true
     */
    showAccountPopover?: boolean;
};
export type InstitutionalRefActionType = {
    /**
     * @description 清空所有已选数据
     * @default () => void
     */
    reset?: () => void;
};
declare const BusinessAssetsDrawerTree: React.ForwardRefExoticComponent<AssetsDrawerTreePropsType & React.RefAttributes<InstitutionalRefActionType>>;
export default BusinessAssetsDrawerTree;
export declare const API: (props: AssetsDrawerTreePropsType) => JSX.Element;
