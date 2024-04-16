export interface SelectDepartmentDrawerProps {
    /**
     * @description 标题
     * @default 选择部门
     */
    title?: string;
    /**
     * @description 关闭抽屉的回调
     * @default []
     */
    onClose: () => void;
    /**
     * @description 点击确认按钮的回调
     * @default []
     */
    onSubmit: (ids: any[], nodes: any[]) => void;
    /**
     * @description 抽屉组件显示状态
     * @default false
     */
    open: boolean;
    /**
     * @description 初始化勾选的之
     * @default false
     */
    initData: any[];
    /**
     * @description 是否多选
     * @default true
     */
    multiple?: boolean;
    /**
     * @description 选中状态样式以 ✔ 的形式展示, 与 checkable 互斥
     * @default false
     */
    selectable?: boolean;
    /**
     * @description 是否启用 在 Drawer 内的树结构样式, 仅使用 Tree 时可不开启
     * @default false
     */
    inDrawerStyle?: boolean;
    /**
     * @description 是否开启 组装key值
     * @default true
     */
    isUseSpellKey?: boolean;
    /**
     * @description 默认勾选的节点
     * @default []
     */
    defaultCheckedItems?: any[];
    /**
     * @description 是否选择最上级只需要最上层级，子节点不需要
     * @default false
     */
    isMogami?: boolean;
}
