import { Ref } from 'react';
import { BaseSelectPropsType, BaseSelectRef } from '../base-select';
import './index.less';
export type BtnItemType = {
    /**
     * @description 按钮名称
     * @default ''
     */
    label: string;
    /**
     * @description 显示按钮条件 isSelect-必须选择了数据才显示，onFirstRow-只在第一行显示， 不传表示不受条件控制全部显示
     * @default undefined
     */
    showCondition?: 'isSelect' | 'onFirstRow' | undefined | null;
    /**
     * @description 按钮点击事件回调，返回当前已选数据defaultSelectItems
     */
    onClick?: (defaultSelectItems: any[]) => void;
};
type BusinessSelectHouseholdUserProps = {
    /**
     * @description BaseSelect 组件属性共用
     * @default true
     */
    baseSelectProps: BaseSelectPropsType;
    /**
     * @description 添加额名参数
     * @default -
     */
    params?: {
        /**
         * @description 房屋 ID
         * @default -
         */
        houseId?: string;
        /**
         * @description 类型[family:家属，proprietor：业主，tenant：租户]
         * @default -
         */
        type?: string | number;
        /**
         * @description 企业住户类型, 1-个人, 2-企业
         * @default 1
         */
        businessType?: '1' | '2';
        [name: string]: any;
    };
    /**
     * @description baseSelectRef 方法
     * @default -
     */
    baseSelectRef?: Ref<BaseSelectRef>;
    /**
     * @description 自定义接口 (全路径)，一定要保证接口返回的结构必须一致, 默认请求业户接口
     * @default /api/v1/estate/residentManager/list
     */
    url?: string;
    /**
     * @description 是否有添加功能-必须是单选模式
     * @default false
     */
    hasAddRow?: boolean;
    /**
     * @description 单选模式，有添加功能的 选中数据，数组中的数据为单个选择框的defaultSelectItems
     * @default []
     */
    rowSelectItems?: any[];
    /**
     * @description 住户类型： house-住宅住户、user-企业住户 （住户基础信息）
     * @default house
     */
    householdType?: 'house' | 'user';
    /**
     * @description 新增按钮 功能类型 user： 新增企业住户-个人,enterprise 新增企业住户-企业, proprietor: 新增业主,family: 新增家属,tenant: 新增租户,tenant_family: 新增租户家属
     * @default user
     */
    addBusinessType?: 'user' | 'enterprise' | 'proprietor' | 'family' | 'tenant' | 'tenant_family';
    /**
     * @description 新增表单弹窗带入的参数 rootNode | secondNode 资产数据 ownerInfo 人员信息 houseInfo (带入房间信息后 不能修改)
     * @default user
     */
    addDrawerProps?: {
        rootNode?: any;
        secondNode?: any;
        currentRow?: any;
        ownerInfo?: any;
        houseInfo?: any;
    };
    /**
     * @description 显示新增按钮
     * @default true
     */
    showAdd?: boolean;
    /**
     * @description 显示详情
     * @default true
     */
    showDetail?: boolean;
};
export default function BusinessSelectHouseholdUsers(props: BusinessSelectHouseholdUserProps): JSX.Element;
export declare const API: (props: BusinessSelectHouseholdUserProps) => JSX.Element;
export declare const BtnItemType: (props: BtnItemType) => JSX.Element;
export {};
