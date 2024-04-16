export interface SelectRoleTreeProps {
    /**
     * @description 角色类型  business资产角色 organization组织角色
     * @default business
     */
    type?: string;
    /**
     * @description 关闭抽屉的回调
     * @default []
     */
    onClose: () => void;
    /**
     * @description 点击确认按钮的回调
     * @default []
     */
    onSubmit: (ids: any[], nodes: any[]) => void;
    /**
     * @description 抽屉组件显示状态
     * @default false
     */
    open: boolean;
    /**
     * @description 初始化勾选的之
     * @default false
     */
    initData: any[];
}
