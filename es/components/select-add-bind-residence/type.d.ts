export type TableListItem = {
    name: string;
    fullName: string;
    type: string;
};
export interface AddBindResidenceType {
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
     * @description 组件选择类型：多选（checkbox）、单选（radio）
     * @default radio
     */
    selectType?: string;
    /**
     * @description 组件选中key
     * @default id
     */
    rowKey?: string;
    /**
     * @description 已选数据
     * @default
     */
    defaultRowKeys?: object[];
    /**
     * @description 默认选中的tabs值
     * @default
     */
    defaultTabKey?: string;
}
export interface BusinessAddBindEvents {
    /**
     * @description 组件关闭回调
     * @default
     */
    onClose: () => void;
    /**
     * @description 组件选择提交回调
     * @default
     */
    onOk?: (selectedRowKeys: any, selectedRows: any, type: string) => void;
}
export interface BusinessAddBindResidenceType extends AddBindResidenceType, BusinessAddBindEvents {
}
