export type TableListItem = {
    name: string;
    organization: string;
    id: string;
};
export interface GroupType {
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
     * @description 组件选择类型：多选（checkbox）、单选（radio）、底部操作组（operate）、查看（readOnly）
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
     * @description 是否显示顶部标题
     * @default false
     */
    showTitle?: boolean;
    /**
     * @description 员工信息 { code, name }形式, 查询该员工的群
     * @default
     */
    ownerObj?: any;
    /**
     * @description 是否展示群类型
     * @default true
     */
    showGroupType?: boolean;
    /**
     * @description 自定义群类型options [{ label, value }]
     * @default []
     */
    groupOption?: Array<[]>;
    /**
     * @description 企业code
     * @default true
     */
    companyCode?: string;
    /**
     * @description 群类型
     * @default
     */
    groupType?: string;
    /**
     * @description 群状态
     * @default 0-未解散,1-已解散
     */
    groupStatus?: '0' | '1';
}
export interface BusinessEvents {
    /**
     * @description 组件关闭回调
     * @default
     */
    onClose: () => void;
    /**
     * @description 组件选择提交回调
     * @default
     */
    onSubmit?: (selectedRowKeys: any[], selectedRows: any[]) => void;
}
export interface BusinessGroupType extends GroupType, BusinessEvents {
}
