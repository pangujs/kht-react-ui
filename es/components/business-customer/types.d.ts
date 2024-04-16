export type TableListItem = {
    name: string;
    organization: string;
    id: string;
};
export type BusinessCustomerPropsTypes = {
    /**
     * @description 业务类型 wechat-微信客户，wxwork-企微客户
     * @default wechat
     */
    businessType?: 'wechat' | 'wxwork';
    /**
     * @description 选择模式，checkbox多选，radio单选
     * @default checkbox
     */
    selectType?: 'checkbox' | 'radio';
    /**
     * @description 已选数据
     * @default []
     */
    selectedData?: any[];
    /**
     * @description 弹出抽屉
     * @default false
     */
    open: boolean;
    /**
     * @description 抽屉关闭回调事件
     * @default () => void
     */
    close: () => void;
    /**
     * @description 选择确认事件
     * @default () => void
     */
    onSubmit: (selectedRowKeys: string[], selectedRows: any[], searchType: string) => void;
    /**
     * @description 指定某个员工查询
     * @default () => void
     */
    employeeInfo?: any;
    /**
     * @description 是否可以切换业务类型
     * @default false
     */
    canChangeBusinessType?: boolean;
};
