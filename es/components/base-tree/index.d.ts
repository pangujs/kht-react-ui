import React, { ReactNode } from 'react';
import { InputProps, TooltipProps } from 'antd';
import { DataNode, TreeProps } from 'antd/lib/tree';
import './index.less';
export type BaseTreePropsType = Omit<TreeProps, 'loadData' | 'checkedKeys' | 'selectedKeys' | 'onSelect' | 'onCheck' | 'checkable'> & {
    /**
     * @description 选中状态样式以 ✔ 的形式展示, 与 checkable 互斥
     * @default true
     */
    selectable?: boolean;
    /**
     * @description 是否显示查询输入框
     * @default true
     */
    showSearch?: boolean;
    /**
     * @description 是否开启远端查询树数据，为 false 时本地过滤
     * @default true
     */
    isOriginSearch?: boolean;
    /**
     * @description 远程搜索树数据的回调
     */
    onSearchTreeData?: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    /**
     * @description 替代原有 checkedKeys, selectedKeys ，原有的 checkedKeys, selectedKeys 将不会传入 props
     * @default --
     */
    checkedKeysSorce?: React.Key[];
    /**
     * @description 懒加载子节点
     * @default false
     */
    loadData?: (treeNode: any) => Promise<LoadDataPromiseType>;
    /**
     * @description 替代勾选或选中的事件回调,  将不会有 onSelect 和  onCheck 的 props 传入
     */
    onChangeCallback?: (selectedKeys: React.Key[] | {
        checked: React.Key[];
        halfChecked: React.Key[];
    }, info: any, multiple: boolean, showSearch: boolean) => void;
    /**
     * @description 是否选中父级时，勾选所有子节点并禁用
     * @default false
     */
    disableChild?: boolean;
    /**
     * @description antd Input 组件的 Props
     * @default false
     */
    inputProps?: InputProps;
    /**
     * @description 是否启用 在 modal 内的树结构样式, 仅使用 Tree 时可不开启
     * @default false
     */
    inModalStyle?: boolean;
    /**
     * @description 是否启用 在 Drawer 内的树结构样式, 仅使用 Tree 时可不开启
     * @default false
     */
    inDrawerStyle?: boolean;
    /**
     * @description 单选时，并且selectable = true 模式，是否在树顶部显示 已选节点全路径
     * @default false
     */
    showHeadSelectFullText?: boolean;
    /**
     * @description 是否开启分页加载功能
     * @default true
     */
    isPageLoad?: boolean;
    /**
     * @description 分页的页码，与 isPageLoad 一起使用，不传【默认】是 10
     * @default 10
     */
    pageSize?: number;
    /**
     * @description 点击加载更多时的回调函数
     */
    onLoadMore?: (currentData: TreeDataNode) => Promise<LoadMoreDataType>;
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
     * @description 判断当前点击对象里，是否包含此属性，有则可选，无则不可选
     * @default --
     */
    canSelect?: string | string[];
    /**
     * @description 当选中状态为 selectable 时有效。选中状态背景全选
     * @default false
     */
    backgroundColorFull?: boolean;
    /**
     * @description 是否开启 组装key值 , 当整颗树的 key 是唯一值的时候，建议设置成 false
     * @default true
     */
    isUseSpellKey?: boolean;
    /**
     * @description 开启单选时必选一项 模式
     * @default false
     */
    isMandatory?: boolean;
    /**
     * @description 自定义 tooltip 内容, 当 showTooltip 为 true 时才有效，Promise resolve({fullName: "xxx"});
     * @default --
     */
    customTooltipContent?: (treeNode: TreeDataNode) => Promise<object>;
    /**
     * @description 初始化 Tree 时 loading 状态，仅在初始化时使用
     * @default false
     */
    initLoadingStatus?: boolean;
    /**
     * @description 是否开始树组件新样式 仿菜单效果
     * @default false
     */
    newStyle?: boolean;
    nameRender?: ((treeNode: TreeDataNode) => ReactNode) | false;
};
export type TreeDataNode = DataNode & {
    /**
     * @description 节点最后提示，比如 未开通
     */
    suffix?: string;
    /**
     * @description  节点的子元素
     */
    children?: TreeDataNode[];
    /**
     * @description  层级， 不用传，内部自动计算
     */
    level?: number;
    /**
     * @description  tootip 的内容
     */
    fullName?: string;
    [prop: string]: any;
};
export type LoadDataPromiseType = {
    /**
     * 加载节点的子元素列表
     */
    data: TreeDataNode[];
    /**
     * 点击当前节点的 key 值
     */
    key: string | number;
    /**
     * 分页时，取接口返回的总条数
     * @default 0
     */
    total?: number;
    /**
     * 属性名，必须是唯一值
     * @default id
     */
    id?: string;
    /**
     * 是否显示加载更多按钮 （懒加载请求多个接口时会用到）
     * @default key
     */
    loaderType?: string;
};
export type LoadMoreDataType = LoadDataPromiseType & {
    /**
     * 分页时，取接口返回的总条数
     */
    total: number;
};
export type TreeRefAction = {
    /**
     * @description 新增子节点的处理方法 key: 节点key值， childrenData: 新增的子节点数据 , appendType : befor 顶端 | after 未端
     * @default -
     */
    addTreeDataChildren?: (key: string, childrenData: TreeDataNode[], appendType?: 'after' | 'befor') => void;
    /**
     * @description 删除节点方法，parentKey：父节点key值， key: 删除节点的key值
     */
    deletTreeDataNode?: (parentKey: string, key: string) => void;
    /**
     * @description 更新节点方法, key: 需要更新节点的key值
     */
    updateTreeDataNode?: (key: string, nodeData: TreeDataNode) => void;
    /**
     * @description 设置某节点下的所有子节点的 disabled 的状态
     */
    setTreeDataNodeDisabled?: (key: string | 'all', disable: boolean) => void;
    /**
     * @description 获取树相关的统计数据
     */
    getToolContent?: ToolContentType;
    /**
     * @description 获取整颗树的所有节点
     */
    getTreeData: TreeDataNode[];
    /**
     *  @description 获取模糊搜索后整颗树的所有节点
     */
    getSearchTreeData?: TreeDataNode[];
};
export type ToolContentType = {
    /**
     * 整颗树中，统计出可以选择的节点数量
     */
    canSelectNumber?: number;
    /**
     * 当前是否是模糊搜索状态
     */
    isSearch?: boolean;
};
declare const BaseTree: React.ForwardRefExoticComponent<Omit<TreeProps<DataNode>, "onSelect" | "loadData" | "checkedKeys" | "selectedKeys" | "onCheck" | "checkable"> & {
    /**
     * @description 选中状态样式以 ✔ 的形式展示, 与 checkable 互斥
     * @default true
     */
    selectable?: boolean | undefined;
    /**
     * @description 是否显示查询输入框
     * @default true
     */
    showSearch?: boolean | undefined;
    /**
     * @description 是否开启远端查询树数据，为 false 时本地过滤
     * @default true
     */
    isOriginSearch?: boolean | undefined;
    /**
     * @description 远程搜索树数据的回调
     */
    onSearchTreeData?: ((e: React.ChangeEvent<HTMLInputElement>) => Promise<void>) | undefined;
    /**
     * @description 替代原有 checkedKeys, selectedKeys ，原有的 checkedKeys, selectedKeys 将不会传入 props
     * @default --
     */
    checkedKeysSorce?: React.Key[] | undefined;
    /**
     * @description 懒加载子节点
     * @default false
     */
    loadData?: ((treeNode: any) => Promise<LoadDataPromiseType>) | undefined;
    /**
     * @description 替代勾选或选中的事件回调,  将不会有 onSelect 和  onCheck 的 props 传入
     */
    onChangeCallback?: ((selectedKeys: React.Key[] | {
        checked: React.Key[];
        halfChecked: React.Key[];
    }, info: any, multiple: boolean, showSearch: boolean) => void) | undefined;
    /**
     * @description 是否选中父级时，勾选所有子节点并禁用
     * @default false
     */
    disableChild?: boolean | undefined;
    /**
     * @description antd Input 组件的 Props
     * @default false
     */
    inputProps?: InputProps | undefined;
    /**
     * @description 是否启用 在 modal 内的树结构样式, 仅使用 Tree 时可不开启
     * @default false
     */
    inModalStyle?: boolean | undefined;
    /**
     * @description 是否启用 在 Drawer 内的树结构样式, 仅使用 Tree 时可不开启
     * @default false
     */
    inDrawerStyle?: boolean | undefined;
    /**
     * @description 单选时，并且selectable = true 模式，是否在树顶部显示 已选节点全路径
     * @default false
     */
    showHeadSelectFullText?: boolean | undefined;
    /**
     * @description 是否开启分页加载功能
     * @default true
     */
    isPageLoad?: boolean | undefined;
    /**
     * @description 分页的页码，与 isPageLoad 一起使用，不传【默认】是 10
     * @default 10
     */
    pageSize?: number | undefined;
    /**
     * @description 点击加载更多时的回调函数
     */
    onLoadMore?: ((currentData: TreeDataNode) => Promise<LoadMoreDataType>) | undefined;
    /**
     * @description Tooltip props 与官网同步
     */
    toolTipProps?: Omit<TooltipProps, "title"> | undefined;
    /**
     * @description 是否展示 tooltip 组件
     * @default false
     */
    showTooltip?: boolean | undefined;
    /**
     * @description 判断当前点击对象里，是否包含此属性，有则可选，无则不可选
     * @default --
     */
    canSelect?: string | string[] | undefined;
    /**
     * @description 当选中状态为 selectable 时有效。选中状态背景全选
     * @default false
     */
    backgroundColorFull?: boolean | undefined;
    /**
     * @description 是否开启 组装key值 , 当整颗树的 key 是唯一值的时候，建议设置成 false
     * @default true
     */
    isUseSpellKey?: boolean | undefined;
    /**
     * @description 开启单选时必选一项 模式
     * @default false
     */
    isMandatory?: boolean | undefined;
    /**
     * @description 自定义 tooltip 内容, 当 showTooltip 为 true 时才有效，Promise resolve({fullName: "xxx"});
     * @default --
     */
    customTooltipContent?: ((treeNode: TreeDataNode) => Promise<object>) | undefined;
    /**
     * @description 初始化 Tree 时 loading 状态，仅在初始化时使用
     * @default false
     */
    initLoadingStatus?: boolean | undefined;
    /**
     * @description 是否开始树组件新样式 仿菜单效果
     * @default false
     */
    newStyle?: boolean | undefined;
    nameRender?: false | ((treeNode: TreeDataNode) => ReactNode) | undefined;
} & React.RefAttributes<TreeRefAction>>;
export default BaseTree;
interface IBaseTreePropsType {
    /**
     * @description 选中状态样式以 ✔ 的形式展示, 与 checkable 互斥
     * @default true
     */
    selectable?: boolean;
    /**
     * @description 是否开启远端查询树数据
     * @default true
     */
    showSearch?: boolean;
    /**
     * @description 是否开启远端查询树数据，为 false 时本地过滤
     * @default true
     */
    isOriginSearch?: boolean;
    /**
     * @description 远程搜索树数据的回调
     */
    onSearchTreeData?: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    /**
     * @description 替代原有 checkedKeys, selectedKeys ，原有的 checkedKeys, selectedKeys 将不会传入 props
     * @default --
     */
    checkedKeysSorce?: React.Key[];
    /**
     * @description 懒加载子节点
     * @default false
     */
    loadData?: (treeNode: any) => Promise<LoadDataPromiseType>;
    /**
     * @description 替代勾选或选中的事件回调,  将不会有 onSelect 和  onCheck 的 props 传入
     */
    onChangeCallback?: (selectedKeys: React.Key[] | {
        checked: React.Key[];
        halfChecked: React.Key[];
    }, info: any, multiple: boolean, showSearch: boolean) => void;
    /**
     * @description 是否选中父级时，勾选所有子节点并禁用
     * @default false
     */
    disableChild?: boolean;
    /**
     * @description antd Input 组件的 Props
     * @default false
     */
    inputProps?: InputProps;
    /**
     * @description 是否启用 在 modal 内的树结构样式, 仅使用 Tree 时可不开启
     * @default false
     */
    inModalStyle?: boolean;
    /**
     * @description 是否启用 在 Drawer 内的树结构样式, 仅使用 Tree 时可不开启
     * @default false
     */
    inDrawerStyle?: boolean;
    /**
     * @description 单选时，并且selectable = true 模式，是否在树顶部显示 已选节点全路径
     * @default false
     */
    showHeadSelectFullText?: boolean;
    /**
     * @description 是否开启分页加载功能
     * @default true
     */
    isPageLoad?: boolean;
    /**
     * @description 分页的页码，与 isPageLoad 一起使用，不传【默认】是 10
     * @default 10
     */
    pageSize?: number;
    /**
     * @description 点击加载更多时的回调函数
     */
    onLoadMore?: (currentData: TreeDataNode) => Promise<LoadMoreDataType>;
    /**
     * @description Tooltip props 与官网同步
     */
    toolTipProps?: Omit<TooltipProps, 'title'> & {
        style: React.CSSProperties;
    };
    /**
     * @description 是否展示 tooltip 组件
     * @default false
     */
    showTooltip?: boolean;
    /**
     * @description 判断当前点击对象里，是否包含此属性，有则可选，无则不可选
     * @default --
     */
    canSelect?: string | string[];
    /**
     * @description 当选中状态为 selectable 时有效。选中状态背景全选
     * @default false
     */
    backgroundColorFull?: boolean;
    /**
     * @description 是否开启 组装key值
     * @default true
     */
    isUseSpellKey?: boolean;
    /**
     * @description 开启单选时必选一项 模式
     * @default false
     */
    isMandatory?: boolean;
    /**
     * @description 自定义 tooltip 内容, 当 showTooltip 为 true 时才有效, Promise resolve({fullName: "xxx"});
     * @default --
     */
    customTooltipContent?: (treeNode: TreeDataNode) => Promise<object>;
    /**
     * @description 初始化 Tree 时 loading 状态，仅在初始化时使用
     * @default false
     */
    initLoadingStatus?: boolean;
}
export declare const API: (props: IBaseTreePropsType) => JSX.Element;
export declare const TreeDataNode: (props: TreeDataNode) => JSX.Element;
export declare const LoadDataPromiseType: (props: LoadDataPromiseType) => JSX.Element;
export declare const TreeRefAction: (props: TreeRefAction) => JSX.Element;
