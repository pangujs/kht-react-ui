export interface SelectDepartmentDrawerProps {
    onClose: () => void;
    onSubmit: (ids: any[], nodes: any[]) => void;
    open: boolean;
    initData: any[];
    projectId?: string;
}
export interface DrawerResidenceType {
    /**
     * @description 组件打开状态
     * @default false
     */
    open: boolean;
    /**
     * @description 项目id
     * @default
     */
    projectId: string;
    /**
     * @description 初始数据
     * @default []
     */
    initData?: any[];
    /**
     * @description 是否选择最上级只需要最上层级，子节点不需要
     * @default false
     */
    isMogami?: boolean;
}
export interface DrawerResidenceEvents {
    /**
     * @description 组件关闭回调
     * @default
     */
    onClose: () => void;
    /**
     * @description 组件选择提交回调
     * @default
     */
    onSubmit?: (selectedRowKeys: string[], selectedRows: any[]) => void;
}
export interface SelectDrawerResidenceType extends DrawerResidenceType, DrawerResidenceEvents {
}
