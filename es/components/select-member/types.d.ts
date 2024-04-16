export interface MemberType {
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
     * @description 企业code(超管端用)
     * @default
     */
    companyCode?: string;
    /**
     * @description 组件使用的系统，默认中台（customer）、超管（admin）
     * @default radio
     */
    useSystem?: string;
    /**
     * @description 组件选中key
     * @default id
     */
    rowKey?: string;
    /**
     * @description 已选数据
     * @default []
     */
    defaultRowKeys?: object[];
    /**
     * @description 已选成员title
     * @default 已选成员
     */
    selectedTitle?: string;
    /**
     * @description 是否离职
     * @default false
     */
    isDelete?: boolean;
}
export interface MemberEvents {
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
export interface MemberProjectType extends MemberType, MemberEvents {
}
