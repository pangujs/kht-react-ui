import { TablePaginationConfig } from 'antd';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { ReactElement } from 'react';
export type OperateListType = {
    /**
     * @description 显示名称
     * @default
     */
    label: string;
    /**
     * @description 定义的操作key(回调事件判断用)
     * @default
     */
    key: string;
};
export type OperateSettingType = {
    /**
     * @description 操作名称
     * @default
     */
    name?: string;
    /**
     * @description 操作类型（delete、disabled等自定义）
     * @default
     */
    type?: string;
    /**
     * @description 操作选项列表
     * @default
     */
    menu?: OperateListType[];
};
interface Common {
    /**
     * @description 抽屉组件显示状态
     * @default false
     */
    open: boolean;
    /**
     * @description 抽屉footer自定义(只是第一层抽屉上自定义)
     * @default null
     */
    footer?: ReactElement | null;
    /**
     * @description 第一层抽屉className自定义
     * @default ''
     */
    drawerClassName?: string;
    /**
     * @description 第二层抽屉className自定义
     * @default ''
     */
    selectedDrawerClassName?: string;
    /**
     * @description 抽屉组件标题名称
     * @default
     */
    title?: string;
    /**
     * @description 组件的已选抽屉标题名称
     * @default title 默认取第一层抽屉title,需要自定义
     */
    selectDrawerTableTitle?: string;
    /**
     * @description 抽屉宽度
     * @default
     */
    width?: number | string;
    /**
     * @description 组件的选择类型：多选（checkbox）、单选（radio）、底部操作组（operate）、查看（readOnly）
     * @default checkbox
     */
    selectType?: string;
    /**
     * @description 多选/单选组件的提交按钮状态
     * @default true(可操作)
     */
    submitState?: boolean;
    /**
     * @description 底部操作组（operate）
     * @default []
     */
    operateFooterGroup?: OperateSettingType[];
    /**
     * @description 组件的输入搜索字段
     * @default name
     */
    searchName?: string;
    /**
     * @description 单选组件的已选选项的展示字段名称
     * @default name
     */
    radioSelectName?: string;
    /**
     * @description 是否有全选
     * @default
     */
    allSelectState?: boolean;
    /**
     * @description 是否有input搜索组件
     * @default true
     */
    searchInputState?: boolean;
    /**
     * @description input搜索组件的placeholder
     * @default 搜索
     */
    searchInputPlaceholder?: string;
    /**
     * @description 第一层抽屉组件的标题栏组件
     * @default
     */
    titleGround?: ReactElement;
    /**
     * @description 第一层抽屉组件的筛选条件表单组件
     * @default
     */
    searchForm?: ReactElement;
    children?: any;
    /**
     * @description 第一层抽屉的回显已选数据，单选时是string[]，多选时是 object[]
     * @default
     */
    selectedRowKeys?: string[] | object[];
    /**
     * @description 第二层抽屉组件的标题栏组件
     * @default
     */
    selectTableTitleGround?: ReactElement;
    /**
     * @description 第二层抽屉组件的筛选条件表单组件
     * @default
     */
    selectTableSearchForm?: ReactElement;
    /**
     * @description 第二层抽屉组件操作按钮文案
     * @default 删除
     */
    selectTableOperateName?: string;
}
export interface DrawerSearchTableEvents {
    /**
     * @description 组件的关闭回调
     * @default
     */
    onClose: () => void;
    /**
     * @description 组件的提交回调
     * @default
     */
    onSubmit?: (data: any) => void;
    /**
     * @description 组件的第一个抽屉的搜索提交状态变化回调
     * @default
     */
    onSubmitState?: (data: any) => void;
    /**
     * @description 组件的第一个抽屉的搜索提交回调
     * @default
     */
    onSearch?: (data: any) => void;
    /**
     * @description 已选组件的抽屉的搜索提交回调
     * @default
     */
    onSelectTableSearch?: (data: any) => void;
    /**
     * @description 组件的全选事件回调
     * @default
     */
    onAllSelectedChange?: (data: any) => void;
    /**
     * @description 组件的选择事件回调,返回第一层抽屉表格的已选数据总集合initSelectedRowKeys
     * @default
     */
    onSelectedChange?: (data: string[]) => void;
    /**
     * @description 组件的打开已选组件的回调
     * @default
     */
    onOpenSelectTable?: (data: any) => void;
    /**
     * @description 组件的关闭已选组件的回调
     * @default
     */
    onCloseSelectTable?: () => void;
    /**
     * @description 组件的已选组件的移除事件回调
     * @default
     */
    onRemoveSelected?: (type: any, data: any) => void;
    /**
     * @description 组件操作类型的操作组的点击事件，key定义的menu的key，type是按钮组的操作类型
     * @default
     */
    onOperateFooterButtonClick?: (key: any, type: any, selectedRowKeys: any) => void;
    /**
     * @description 已选数据鼠标悬停事件回调 (data:已选文本的dom坐标)
     * @default
     */
    onSelectTextMouseEnter?: (data: any) => void;
    /**
     * @description 第一层组件的ProTable请求request
     * @default
     */
    requestTable: (data: any) => {};
    /**
     * @description 已选组件的ProTable请求request
     * @default
     */
    requestSelectedTable?: (data: any) => {};
    /**
     * @description 一层组件的table onChange事件
     * @default
     */
    tableOnChange?: (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<any> | SorterResult<any>[], extra: TableCurrentDataSource<any>) => void;
    /**
     * @description 已选组件的table onChange事件
     * @default
     */
    selectedTableOnChange?: (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<any> | SorterResult<any>[], extra: TableCurrentDataSource<any>) => void;
    /**
     * @description 设置行数据是否可选
     * @default ()=>boolean
     */
    getRowDisabled?: (record: object) => boolean;
    radioSelectNameNodeRender?: (record: object) => ReactElement;
}
export interface DrawerSearchProTableProperty extends Common {
    /**
     * @description 选中的key
     * @default id
     */
    rowKey?: string;
    /**
     * @description 是否需要手动触发首次请求, 配置为 true 时手动触发首次请求
     * @default false
     */
    manualRequest?: boolean;
    /**
     * @description 表格列字段数组
     * @default []
     */
    columns: object[];
    /**
     * @description 第一层抽屉表格总条数
     * @default 0
     */
    total: number;
    /**
     * @description 第二层表格列字段数组(默认取第一层的columns，传入selectTableColumns长度大于0才取自定义的selectTableColumns)
     * @default columns
     */
    selectTableColumns?: object[];
    /**
     * @description 第二层抽屉表格总条数
     * @default 0
     */
    selectedTotal?: number;
}
export interface DrawerSearchProTableType extends DrawerSearchTableEvents, DrawerSearchProTableProperty {
}
export interface DrawerSearchProTableLayoutRefType {
    /**
     * @description 获取表格的top值
     * @default
     */
    tableLayoutTop: number;
    /**
     * @description 设置全选数据
     * @default
     */
    setAllSelectRowKeys: (data: [], searchData: object | any) => void;
    /**
     * @description 获取全选数据以条件为key的集合
     * @default {}
     */
    allSelectTableRowKeys: object;
    /**
     * @description 设置全选数据以条件为key的集合
     * @default
     */
    setAllSelectTableRowKeys: (data: object) => void;
    /**
     * @description 获取提交按钮状态
     * @default
     */
    submitState: boolean;
    /**
     * @description 设置提交按钮状态
     * @default
     */
    setSubmitState: (data: boolean) => void;
    /**
     * @description 获取第一层抽屉的已选数据总集合
     * @default
     */
    initSelectedRowKeys: string[];
    /**
     * @description 设置第一层抽屉的已选数据总集合
     * @default
     */
    setInitSelectedRowKeys: (data: string[]) => void;
    /**
     * @description 第一层抽屉当前表格已选对象数组（单选时用）
     * @default
     */
    initTableSelectedRows: object[];
    /**
     * @description 设置第一层抽屉的表格重新加载
     * @default
     */
    initTableReload: () => void;
    /**
     * @description 设置第一层抽屉的表格当前CurrentPage
     * @default
     */
    setInitTableCurrentPage: (data: number) => void;
    /**
     * @description 设置第一层抽屉的表格当前CurrentPageSize
     * @default
     */
    setInitTableCurrentPageSize: (data: number) => void;
    /**
     * @description 设置第二层抽屉的表格重新加载
     * @default
     */
    selectedTableReload: () => void;
    /**
     * @description 设置第二层抽屉的表格当前CurrentPage
     * @default
     */
    setSelectedTableCurrentPage: (data: number) => void;
    /**
     * @description 设置第二层抽屉的表格当前CurrentPageSize
     * @default
     */
    setSelectedTableCurrentPageSize: (data: number) => void;
    /**
     * @description 设置第一层抽屉的筛选表单值
     * @default
     */
    setInitTableFieldsValue: (data: object) => void;
    /**
     * @description 获取第一层抽屉的筛选表单值
     * @default
     */
    getInitTableFieldsValue: () => void;
    /**
     * @description 重置第一层表单值
     * @default
     */
    resetInitTableFields?: () => void;
    /**
     * @description 设置第二层已选抽屉的筛选表单值
     * @default
     */
    setSelectTableFieldsValue: (data: object) => void;
    /**
     * @description 获取第二层已选抽屉的筛选表单值
     * @default
     */
    getSelectTableFieldsValue: () => void;
    /**
     * @description 重置第二层表单值
     * @default
     */
    resetSelectTableFields?: () => void;
    /**
     * @description 设置全选按钮的全选状态
     * @default
     */
    setCheckAll?: (data: boolean) => void;
}
export interface MainType extends Common {
    children?: any;
    selectTableNode?: any;
    onClose: () => void;
    onSubmitState?: (data: any) => void;
    onSearch?: (data: any) => void;
    onFinish?: (data: any) => void;
    allSelectedChange?: (data: any) => void;
    openSelectTable?: (data: any) => void;
    closeSelectTable?: () => void;
    onSelectTableSearch?: (data: any) => void;
    onRemoveSelected?: (type: any, data: any) => void;
    onOperateFooterButtonClick?: (key: any, type: any, selectedRowKeys: any) => void;
    onSelectTextMouseEnter?: (data: any) => void;
    radioSelectNameNodeRender?: (data: any) => ReactElement;
}
export interface MainRefType {
    /**
     * @description 获取提交按钮状态
     * @default
     */
    submitState: boolean;
    /**
     * @description 获取表格的top值
     * @default
     */
    tableLayoutTop: number;
    /**
     * @description 设置提交按钮的状态
     * @default
     */
    setSubmitState: (data: boolean) => void;
    /**
     * @description 设置全选按钮的半选状态
     * @default
     */
    setIndeterminate: (checked: boolean) => void;
    /**
     * @description 设置全选按钮的全选状态
     * @default
     */
    setCheckAll: (data: boolean) => void;
    /**
     * @description 设置第一层抽屉的筛选表单值
     * @default
     */
    setInitTableFieldsValue: (data: object) => void;
    /**
     * @description 获取第一层抽屉的筛选表单值
     * @default
     */
    getInitTableFieldsValue: () => void;
    /**
     * @description 重置第一层表单值
     * @default
     */
    resetInitTableFields?: () => void;
    /**
     * @description 设置第二层已选抽屉的筛选表单值
     * @default
     */
    setSelectTableFieldsValue: (data: object) => void;
    /**
     * @description 获取第二层已选抽屉的筛选表单值
     * @default
     */
    getSelectTableFieldsValue: () => void;
    /**
     * @description 重置第二层表单值
     * @default
     */
    resetSelectTableFields?: () => void;
}
export type ComponentType = {
    /**
     * @description antd的form.item
     * @default
     */
    FormItem: ReactElement;
    /**
     * @description antd的select
     * @default
     */
    SelectForm: ReactElement;
    /**
     * @description antd的cascade
     * @default
     */
    CascaderForm: ReactElement;
    /**
     * @description antd的input
     * @default
     */
    InputForm: ReactElement;
};
export {};
