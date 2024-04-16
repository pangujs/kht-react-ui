export type TableListItem = {
    name: string;
    organization: string;
    id: string;
};
export type BusinessPeoplePropsTypes = {
    /**
     * @description 选择模式，checkbox多选，radio单选
     * @default checkbox
     */
    selectType?: 'checkbox' | 'radio';
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
     * @description 抽屉标题
     * @default 人员
     */
    title?: string;
    /**
     * @description 已选人员
     * @default []
     */
    selectedPeople: any[];
};
