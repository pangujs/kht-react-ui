import { InputProps } from 'antd';
import { DefaultOptionType, SelectProps } from 'antd/lib/select';
import React from 'react';
import './index.less';
export type SelectOptionsType = DefaultOptionType & {
    isSelect?: boolean;
};
export type BaseSelectPropsType = {
    /**
     * @description antd Select 组件属性共用，但移除了部分属性
     * @default true
     */
    selectProps: Omit<SelectProps, 'showSearch' | 'dropdownRender' | 'onDropdownVisibleChange' | 'dropdownStyle' | 'labelInValue' | 'onPopupScroll' | 'maxTagPlaceholder'>;
    /**
     * @description 查询输入框， antd Input 组件属性共用
     * @default true
     */
    inputProps?: InputProps;
    /**
     * @description 明细内容，title与 content 支持传入 ReactNode 节点
     * @default true
     */
    extraInfo?: ExtraInfoObjType[];
    /**
     * @description 是否开启分页加载功能
     * @default false
     */
    isPageLoad?: boolean;
    /**
     * @description 总页数，配合 isPageLoad 进行使用
     * @default 0
     */
    total?: number;
    /**
     * @description 分页加载回调方法
     * @default -
     */
    pageLoad?: (pageNo: number) => Promise<void>;
    /**
     * @description 是否开启远端查询树数据，为 true 时远端过滤
     * @default false
     */
    isOriginSearch?: boolean;
    /**
     * @description 远程搜索树数据的回调
     */
    onSearchKeyword?: (value: string) => Promise<SelectOptionsType[]>;
    /**
     * @description 已选数据，回显时，直接设置这个值，必传字段
     */
    defaultSelectItems: SelectOptionsType[];
    /**
     * @description 隐藏 tag 时显示的内容
     * @default undefined
     */
    tagPlaceholder?: string;
};
export type ExtraInfoObjType = {
    /**
     * 明细的 title
     */
    title: React.ReactNode;
    /**
     * 对应的内容
     */
    content: React.ReactNode;
    /**
     * @description 是否可以通过关键字被查询 ， 默认是 true
     * @default true
     */
    keyword?: boolean;
    /**
     * @description 字典值与注解映射
     * @default true
     */
    mappping?: {
        name: string;
        value: string | number;
    }[];
};
export type BaseSelectRef = {
    /**
     * @description 清空所有已勾选数据
     * @default -
     */
    onClear?: () => void;
    /**
     * @description 给组件赋已勾选的值， 与 defaultSelectItems 效果一致
     * @default -
     */
    setCheckItems?: (items: SelectOptionsType[]) => void;
};
declare const BaseSelect: React.ForwardRefExoticComponent<BaseSelectPropsType & React.RefAttributes<BaseSelectRef>>;
export default BaseSelect;
export declare const API: (props: BaseSelectPropsType) => JSX.Element;
export declare const ExtraInfoObjType: (props: ExtraInfoObjType) => JSX.Element;
