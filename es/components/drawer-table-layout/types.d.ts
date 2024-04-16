import { DrawerProps } from 'antd/es/drawer';
import { ReactNode } from 'react';
interface DrawerPropsType extends DrawerProps {
    onClose?: () => void;
    title: string;
}
export interface SelectedDrawerPropsType extends DrawerProps {
    width?: number | string;
    title?: string;
}
export type SearchOptionsItemType = {
    /**
     * @description 表单选项的字段key
     * @default
     */
    name: string;
    /**
     * @description 选项的placeholder
     * @default
     */
    placeholder: string;
    /**
     * @description 是否开启下拉弹出框
     * @default true
     */
    open: boolean;
    /**
     * @description 表单选项的宽度
     * @default
     */
    width: number;
    /**
     * @description 表单选项下拉options
     * @default []
     */
    options?: [
        {
            label: string;
            value: string;
        }
    ];
};
export type SearchFormOptionsType = {
    /**
     * @description 搜索表单
     * @default
     */
    searchOptions?: SearchOptionsItemType[];
    /**
     * @description 搜索回调 data:当前选项数据； type:选择组件的选择状态类型（init:有全选的选择组件，selected:已选组件)；name:当前选项的字段key
     * @default ()=>{}
     */
    onSearch?: (data: object | any, type: string, name?: string) => void;
    /**
     * @description 选项点击事件 type:选择组件的选择状态类型（init:有全选的选择组件，selected:已选组件)
     * @default []
     */
    onOptionClick?: (e: any, name: string, type: string) => void;
    /**
     * @description input搜索框的字段(默认是name)
     * @default name
     */
    searchInputName?: string;
    /**
     * @description input搜索框的宽度
     * @default 120
     */
    searchInputWidth?: number | string;
    /**
     * @description input搜索框是否存在
     * @default true
     */
    searchInputState?: boolean;
    /**
     * @description input搜索框placeholder
     * @default 搜索
     */
    searchInputPlaceholder?: string;
};
export type TableOptionsType = {
    /**
     * @description 全选提示文本
     * @default []
     *
     */
    checkedAllText?: string;
    /**
     * @description 选中选项集合 key字符串同proTable
     * @default []
     *
     */
    selectedRowKeys?: string[];
    /**
     * @description 选中选项集合
     * @default []
     *
     */
    selectedRows?: any[];
    /**
     * @description 搜索条件表单
     * @default {}
     */
    searchFormOptions?: SearchFormOptionsType | undefined;
    /**
     * @description 表格节点
     * @default
     */
    tableNode?: ReactNode;
    /**
     * @description 数据统计总数
     * @default 0
     */
    tableDataTotal?: number;
};
export type MainType = {
    selectedTableOptions: TableOptionsType;
    initTableOptions: TableOptionsType;
    /**
     * @description 已选组件的抽屉props 【内置加title属性】
     * @default
     */
    selectedDrawerProps: SelectedDrawerPropsType;
    /**
     * @description 抽屉props 【 内置加属性:title、onClose】
     * @default
     */
    drawerProps: DrawerPropsType;
    /**
     * @description 选择组件的选择状态类型（init:有全选的选择组件，selected:已选组件)
     * @default init
     */
    type: string;
};
export type InitSelectEvents = {
    /**
     * @description 提交保存事件 searchType:是否全选：1（全选）、2（部分选中）
     * @default
     */
    onSubmit?: (data: string[], objData: any[], searchType: string) => void;
    /**
     * @description 全选回调
     * @default
     */
    onCheckAllChange?: (data: boolean) => void;
    /**
     * @description 打开已选数据组件回调
     * @default
     */
    openSelectedComponent?: () => void;
};
export type InitSelectOptionType = {
    /**
     * @description 组件选择类型：checkbox（多选）、radio(单选)
     * @default checkbox
     */
    selectType: string;
    /**
     * @description 是否全选：1（全选）、2（部分选中）
     * @default 2
     */
    searchType: string;
    /**
     * @description 抽屉props
     * @default
     */
    drawerProps: DrawerPropsType;
    initTableOptions: TableOptionsType;
};
export interface InitSelectType extends InitSelectOptionType, InitSelectEvents {
    /**
     * @description 组件选择类型：checkbox（多选）、radio(单选)
     * @default checkbox
     */
    selectType: string;
    /**
     * @description 是否全选：1（全选）、2（部分选中）
     * @default 2
     */
    searchType: string;
    /**
     * @description 抽屉props
     * @default
     */
    drawerProps: DrawerPropsType;
    initTableOptions: TableOptionsType;
}
export type SelectedEvents = {
    /**
     * @description 移除变化事件 (type:全部('1')、选中('2'))
     * @default
     */
    onRemoveSelected?: (type: string, data: string[] | any) => void;
};
export interface SelectedType extends SelectedEvents {
    selectedTableOptions: TableOptionsType;
}
export type ReadOnlyType = {
    initTableOptions: TableOptionsType;
};
export type LayoutEvents = {
    /**
     * @description 关闭已选数据组件回调
     * @default
     */
    closeSelectedComponent?: () => void;
    /**
     * @description 打开已选数据组件回调
     * @default
     */
    openSelectedComponent?: () => void;
};
export interface LayoutOptionType {
    /**
     * @description 全选提示文案
     * @default
     */
    checkedAllText?: string;
    /**
     * @description 组件选择类型：checkbox（多选）、radio(单选)
     * @default checkbox
     */
    selectType?: string;
    /**
     * @description 是否全选：1（全选）、2（部分选中）
     * @default 2
     */
    searchType?: string;
    /**
     * @description 组件操作类型：select:选择组件（包含已选组件），readOnly：查看组件
     * @default select
     */
    handleType: string;
    /**
     * @description InitSelectComponent（初始化选择table组件）【TableOptions】
     * @default
     */
    initTableOptions: TableOptionsType;
    /**
     * @description SelectedComponent(已选table组件) 【TableOptions】
     * @default
     */
    selectedTableOptions?: TableOptionsType;
    /**
     * @description 抽屉props
     * @default
     */
    drawerProps: DrawerPropsType;
    /**
     * @description 已选组件的抽屉props
     * @default
     */
    selectedDrawerProps?: SelectedDrawerPropsType;
    /**
     * @description 抽屉顶部标题栏节点
     * @default
     */
    drawerTableLayoutTitle?: ReactNode;
}
export interface LayoutType extends LayoutEvents, LayoutOptionType {
}
export type DrawerTableLayoutRefType = {
    /**
     * @description 第一层选择组件的搜索表单手动设置字段的值方法
     * @default
     */
    setTableFormFieldsValue: (data: object) => void;
    /**
     * @description 获取第一层选择组件的搜索表单值方法
     * @default
     */
    getTableFormFieldsValue: (data: object) => void;
    /**
     * @description 第二层已选组件的搜索表单手动设置字段的值方法
     * @default
     */
    setSelectedTableFormFieldsValue: (data: object) => void;
    /**
     * @description 获取第二层已选组件的搜索表单值方法
     * @default
     */
    getSelectedTableFormFieldsValue: (data: object) => void;
};
export {};
