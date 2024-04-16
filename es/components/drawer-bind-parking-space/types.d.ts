export interface SelectBindParkDrawerProps {
    /**
     * @description 关闭抽屉的回调
     * @default ()=> void
     */
    onClose: () => void;
    /**
     * @description 点击确认按钮的回调
     * @default ()=> void
     */
    onSubmit: (ids: any[], nodes: any[]) => void;
    /**
     * @description 抽屉组件显示状态
     * @default false
     */
    open: boolean;
    /**
     * @description 初始化勾选的之
     * @default any[]
     */
    initData: any[];
    /**
     * @description 项目id(根节点)
     * @default false
     */
    projectId: string;
}
