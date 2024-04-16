export type OptionsType = {
    /**
     *  @description 开启水平方向滚动条，需要设置宽度，如果不需要横线滚动条可以传入null
     *  @default 720
     */
    x?: number | string | null;
    /**
     *  @description 开启垂直方向滚动条，需要设置高度
     *  @default 442
     */
    y?: number | string | null;
    /**
     *  @description table的 rowKey
     *  @default id
     */
    rowKey?: string;
    /**
     *  @description table当前页 >= 的时候，开启垂直方向滚动
     *  @default 8
     */
    scrollYLimit?: number;
    /** antd Table的 rowSelection 配置项 */
    rowSelection?: object | any;
    /**
     *  @description 因为组件库跟线上项目用的ajax请求不一样，所以针对组件库的请求要做下额外处理
     *  @default false
     */
    isUIResponse?: boolean;
    /**
     *  @description 是否开启全选所有的功能
     *  @default false
     */
    openCheckAll?: boolean;
    /**
     *  @description 默认值 是否开启全选所有的功能
     *  @default false
     */
    defaultCheckAllStatus?: boolean;
    /**
     *  @description 默认值 取消勾选的值
     *  @default []
     */
    defaultUnSelectedRowObj?: object[] | any;
    /**
     *  @description 默认值 勾选的总数
     *  @default 0
     */
    defaultCheckNumber?: number;
    /** 全选之后的回调函数 */
    checkAllCallback?: () => void;
};
/** ProTable的 request方法的参数 values传递出去，如果需要额外做处理的话，多数情况下是用来改写分页参数的 */
export type ChangeFunc = (values: object) => object;
export type DeleteOptions = {
    /**
     *  @description 删除的弹框消息提示文本
     *  @default 确定删除?
     */
    title?: string;
    /** 删除成功之后的回调函数 */
    callback?: () => void;
    /** 用来判断是否是批量删除，如果是批量删除，需要传递 selectedRowKeys */
    ids?: string[];
    /** 文本内容 */
    content?: string | undefined;
    /**
     *  @description 确定按钮的文案
     *  @default 删除
     */
    okText?: string;
    /**
     *  @description 取消按钮的文案
     *  @default 取消
     */
    cancelText?: string;
    /**
     *  @description 批量删除的消息提示文本
     *  @default '''
     */
    batchTitle?: string;
};
export type UpdateOptions = {
    /** 弹框提示的标题 */
    title: string;
    /** 删除成功之后的回调函数 */
    callback?: () => void;
    /**
     *  @description 确认按钮是否采用 红色颜色的分隔
     *  @default 0
     */
    isDelete?: boolean | number;
    /** 文本内容 */
    content?: string | undefined;
    /**
     *  @description 确定按钮的文案
     *  @default 确定
     */
    okText?: string;
    /**
     *  @description 取消按钮的文案
     *  @default 取消
     */
    cancelText?: string;
};
export type ReturnType = {
    /** 基础的table属性 */
    baseProps: object | any;
    /** 复选框的 基础属性 */
    rowProps: object | any;
    /**
     *  @description 当前是否勾选了数据，用来实现，没勾选数据，批量操作按钮的disabled状态
     *  @default false
     */
    selectStatus: boolean;
    /** 复选框 勾选的 rowKey 集合 */
    selectedRowKeys: string[];
    /** 全选 状态下，取消勾选的数据 rowKey 集合 */
    unSelectedRowKeys: string[];
    /** 复选框 勾选的 row数据 集合 */
    selectedRowObj: object[] | any;
    /** 复选框 取消勾选的 row数据 集合 */
    unSelectedRowObj: object[] | any;
    /** 取消当前所有的勾选状态 */
    removeSelected: Function | any;
    /** 是否要全选状态 */
    checkAllStatus: boolean;
    /**
     *  @description 设置复选框 勾选的数据
     *  @default
     */
    setSelectedRowFunc: (ids: string[], rowList?: object[]) => void | any;
    /**
     *  @description 设置复选框取消勾选的数据
     *  @default
     */
    setUnSelectedRowFunc: (ids: string[], rowList: object[]) => void | any;
    /** 判断当前是否有勾选数据，如果没有则message提示，有则返回勾选的rowKey集合 */
    hasSelected: () => Promise<any>;
    /**
     *  @description 删除的时候，需要弹框提示，并且删除之后需要判断是刷新当前页还是返回上一页，ajax是axios请求的函数(项目里api目录下导出的函数)，params是ajax请求的参数
     */
    deleteFunc: (ajax: any, params: object, options?: DeleteOptions) => void;
    /**
     *  @description 更新的时候，需要弹框提示，更新之后只需要刷新当前列表页就好了,ajax是axios请求的函数，params是ajax请求的参数
     */
    updateFunc: (ajax: any, params: object, options: UpdateOptions) => void;
    /** 让table返回到第一页 */
    resetLoadList: () => void;
    /** ProTable 的 request函数，ajax是请求方法，data是参数 */
    queryListFunc: (ajax: any, data?: object) => any;
    /** ProTable的总页数 */
    totalPage: number;
    /** ProTable的条件筛选框的实例 */
    searchRef: any;
    /** ProTable的实例 */
    tableRef: any;
    /** 刷新当前页 */
    reloadCurrentPage: () => void;
    /** ProTable的总数 */
    total: number;
    /** table当前页的数据源 */
    dataSource: object[];
    /** 全选功能情况下，勾选的数字要用这个 */
    checkNumber: number;
    /** 备份当前勾选的数据 */
    backupsFunc: Function | any;
    /** 从备份中还原勾选的数据 */
    restoreFunc: Function | any;
    /** 编辑已经勾选的数据 */
    editCheckItems: Function | any;
    /** 设置全选状态 */
    setCheckAllStatusFunc: Function | any;
};
export declare const useTableCommon: (options?: OptionsType, tableParamsChangeFunc?: ChangeFunc) => ReturnType;
export type ReturnLoading = {
    /** 用来空字按钮的loading状态 */
    loading: boolean;
    /** loading按钮的提交函数，传入的必须是一个Promise函数 */
    beginSubmit: (promiseFunc: any) => void;
};
export declare const useBtnLoading: () => ReturnLoading;
