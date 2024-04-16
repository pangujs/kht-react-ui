import React from 'react';
import { TreeDataNode } from '../base-tree';
import { InputProps } from 'antd';
type DeptUserTreePropsType = {
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
     * @description 分页的页码，与 isPageLoad 一起使用，不传【默认】是 10
     * @default 10
     */
    pageSize?: number;
    /**
     * @description 是否展示 模糊搜索框
     * @default true
     */
    showSearch?: boolean;
    /**
     * @description 选择某一项时的回调
     * @default ()=>void
     */
    onChange?: (selectKeys: string[], info: any) => void;
    /**
     * @description 是否多选
     * @default false
     */
    multiple?: boolean;
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
     * @description antd Input 组件的 Props
     * @default false
     */
    inputProps?: InputProps;
    /**
     * @description 当选中状态为 selectable 时有效。选中状态背景全选
     * @default false
     */
    backgroundColorFull?: boolean;
    /**
     * @description 默认选中某些数据，当多条时可传数据，为 true 时默认选中根节点
     * @default false
     */
    defaultCheckedItems?: boolean | string[];
    /**
     * @description 默认选中后的回调事件，当 defaultCheckedItems 为 true 时有效
     * @default -
     */
    defaultCallBack?: (selectKeys: string[], node: any) => void;
    /**
     * @description 仅加载到某个层级
     * @default undefined
     */
    loaderLevel?: 'organization' | 'community' | 'function' | 'phase' | 'building' | 'unit' | 'floor' | 'house';
    /**
     * @description 开启单选时必选一项 模式
     * @default false
     */
    isMandatory?: boolean;
    /**
     * @description 自定义根节点数据，懒加载接口地址及相关逻辑不变
     * @default false
     */
    customRootNode?: TreeDataNode[];
    /**
     * @description 是否开启自定义请求 tooltip 内容
     * @default false
     */
    openCustomTooltipContent?: boolean;
    /**
     * @description 是否开始树组件新样式 仿菜单效果
     * @default false
     */
    newStyle?: boolean;
};
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
export declare const businessType: {
    /** 机构 */
    organization: number;
    /** 项目/小区 */
    community: number;
    /** 功能 */
    function: number;
    /** 空间 */
    space: number;
    /** 分期 */
    phase: number;
    /** 楼栋 */
    building: number;
    /** 单元 */
    unit: number;
    /** 楼层 */
    floor: number;
    /** 房号 */
    house: number;
};
export type IconType = {
    /** 机构图标 */
    organization: React.ReactNode;
    /** 项目/小区 */
    community: React.ReactNode;
    /** 功能 */
    function: React.ReactNode;
    /** 空间 */
    space: React.ReactNode;
    /** 分期 */
    phase: React.ReactNode;
    /** 楼栋 */
    building: React.ReactNode;
    /** 单元 */
    unit: React.ReactNode;
    /** 楼层 */
    floor: React.ReactNode;
    /** 房号 */
    house: React.ReactNode;
    /** 业主 */
    noSub: React.ReactNode;
    /** 扩展字段 */
    [key: string]: React.ReactNode;
};
export declare const KhtBusinessInstitutionalIconType: IconType;
export default function BusinessInstitutionalAssetsTree(props: DeptUserTreePropsType): JSX.Element;
export declare const BusinessInstitutionalIconType: (props: IconType) => JSX.Element;
export declare const paramsType: (props: paramsType) => JSX.Element;
export {};
