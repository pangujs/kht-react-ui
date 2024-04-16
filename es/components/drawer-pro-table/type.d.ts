export type DrawerProTableType = {
    /**
     * @description 表格滚动条
     * @default 内置已做屏幕自适应
     */
    scroll?: object;
    /**
     * @description 统计总条数（分离的Pagination组件用）
     * @default 0
     */
    total: number;
    /**
     * @description  actionRef
     * @default
     */
    actionRef: any;
    /**
     * @description 页面跳转，默认屏蔽
     * @default false
     */
    showQuickJumper?: boolean;
    /**
     * @description 是否需要手动触发首次请求, 配置为 true 时不可隐藏搜索表单
     * @default false
     */
    manualRequest?: boolean;
    /**
     * @description 表格列表字段
     * @default []
     */
    columns: any[];
    /**
     * @description 表格data请求
     * @default proTable 的 request
     */
    requestTable: (params: any) => void;
};
export type DrawerProTableRef = {
    /**
     * @description 设置当前表格的currentPage
     * @default
     */
    setCurrentPage?: (data: number) => void;
    /**
     * @description 设置当前列表的pageSize
     * @default
     */
    setPageSize?: (data: number) => void;
};
