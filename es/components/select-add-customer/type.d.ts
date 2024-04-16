export type AddCustomerType = {
    /**
     * @description 组件显示状态
     * @default false
     */
    open?: boolean;
    /**
     * @description 类型 member 员工  department 部门
     * @default
     */
    type: string;
    /**
     * @description 初始选中数据
     * @default []
     */
    initData?: object[];
    title?: string;
    memberTitle?: string;
    hasNoAdd?: boolean;
};
export type SelectAddCustomerEvents = {
    /**
     * @description 组件关闭回调
     * @default
     */
    onClose: () => void;
    /**
     * @description 组件选择提交回调
     * @default
     */
    onSubmit?: (type: string, nodes: any[]) => void;
};
export interface SelectAddCustomerType extends AddCustomerType, SelectAddCustomerEvents {
}
