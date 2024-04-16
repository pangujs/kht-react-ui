export type DrawerTagPropsTypes = {
    /**
     * @description 批量编辑
     * @default false
     */
    batchEdit?: boolean;
    /**
     * @description 取消回调
     * @default
     */
    cancel: () => void;
    /**
     * @description 确认回调
     * @default
     */
    ok: (selectedTags: TagTypes[]) => void;
    /**
     * @description 多选
     * @default false
     */
    multiple?: boolean;
    /**
     * @description 已选标签
     * @default []
     */
    defaultSelectedTags: any[];
};
export type TagTypes = {
    id: string;
    name: string;
    selected?: boolean;
};
export type GroupTypes = {
    groupId: string;
    groupName: string;
    tag: TagTypes[];
};
export type TagTypeTypes = {
    description?: string;
    dictValue: any;
    id: string;
    name: string;
    type?: string;
    sequence?: number;
};
export type SearchTypes = {
    tagGroupCategoryIds: string[];
    tagName: string;
    tagType?: string;
    type?: string;
};
export type TagSearchPropsTypes = {
    batchEdit?: boolean;
    tagTypeOptions: TagTypeTypes[];
    onChange: (params: SearchTypes) => void;
    selectedOpen?: boolean;
};
export type GroupTagListPropsTypes = {
    list: GroupTypes[];
    hasDel?: boolean;
    tagClick?: Function;
    delClick?: Function;
};
