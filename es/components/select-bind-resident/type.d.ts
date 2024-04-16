export type TableListItem = {
    name: string;
    fullName: string;
    type: string;
    bindDate?: string;
    unbindEmployeeName?: string;
    unbindDate?: string;
};
export interface BindResidenceType {
    /**
     * @description 组件标题
     * @default
     */
    title?: string;
    /**
     * @description 组件打开状态
     * @default false
     */
    open: boolean;
    /**
     * @description 组件宽度
     * @default 480
     */
    width?: number;
    /**
     * @description 组件选中key
     * @default id
     */
    rowKey?: string;
    /**
     * @description 客户id
     * @default
     */
    customerId: string;
    /**
     * @description 客户名称
     * @default
     */
    customerName?: string;
    /**
     * @description 是否展示footer
     * @default true
     */
    showFooter?: boolean;
    /**
     * @description 备注名
     * @default
     */
    remark?: string;
}
export interface BusinessBindEvents {
    /**
     * @description 组件关闭回调
     * @default
     */
    onClose: () => void;
}
export interface BusinessBindResidenceType extends BindResidenceType, BusinessBindEvents {
}
