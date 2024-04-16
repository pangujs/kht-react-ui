export type TableListItem = {
    name: string;
    organization: string;
    id: string;
};
export type SelectProjectType = {
    /**
     * @description 已选项目名称
     * @default
     */
    name?: string;
    /**
     * @description 已选项目id
     * @default
     */
    id?: string;
};
export type SubmitParamsType = {
    /**
     * @description 已选数据ids
     * @default []
     */
    ids: string[];
    /**
     * @description 已选数据对象集合
     * @default []
     */
    selectedRows: object[];
    /**
     * @description 已选项目
     * @default []
     */
    selectProject: SelectProjectType;
    /**
     * @description  searchType:全选类型 1：全选、2：部分选中
     * @default []
     */
    searchType: string;
};
export type BusinessHouseholderType = {
    /**
     * @description 组件操作类型：select:选择组件（包含已选组件），readOnly：查看组件
     * @default select
     */
    handleType: string;
    /**
     * @description 组件选择类型: 多选（checkbox）、单选（radio)
     * @default checkbox
     */
    selectType: string;
    /**
     * @description 组件类型:tenant(住户)、proprietor(业主)、family(家属)、tenantFamily（租户家属）
     * @default
     */
    type: string;
    /**
     * @description 项目类型（single单项目、multiple多项目）
     * @default multiple
     */
    projectType: string;
    /**
     * @description 已选项目对象值
     * @default {}
     */
    selectProject?: SelectProjectType;
    /**
     * @description 已选数据ids
     * @default []
     */
    selectedRowKeys?: string[];
    /**
     * @description 抽屉展示隐藏
     * @default false
     */
    open: boolean;
    /**
     * @description 抽屉关闭事件
     * @default
     */
    close: () => void;
    /**
     * @description 抽屉提交事件
     * @default
     */
    onSubmit: ({ ids, selectedRows, selectProject, searchType }: SubmitParamsType) => void;
};
