export interface SelectType {
    isMultiple?: boolean;
    /**
     * @description 组件的option
     * @default []
     */
    options: object[];
    /**
     * @description 组件的value值
     * @default
     */
    value?: any;
    /**
     * @description 组件自定义placeholder
     * @default
     */
    placeholder?: String;
    /**
     * @description 组件是否支持搜索
     * @default false
     */
    showSearch?: boolean;
    /**
     * @description 多选时，最大显示的tag数量
     * @default 2
     */
    maxTagCount?: number;
    /**
     * @description 组件下拉框高度
     * @default 175
     */
    listHeight?: number;
    /**
     * @description 组件自定义节点 label、value、options、groupLabel 的字段
     * @default {}
     */
    fieldNames?: any;
    /**
     * @description 自定义清除
     * @default false
     */
    allowClear?: boolean;
    /**
     * @description 是否显示 suffixIcon
     * @default false
     */
    showArrow?: boolean;
}
export interface BusinessSelectEvents {
    /**
     * @description 组件值发生变化的回调
     * @default
     */
    onChange: (data: any) => void;
    /**
     * @description 文本框发生变化的回调
     * @default
     */
    onSearch?: (value: string) => void;
    /**
     * @description 下拉菜单显示隐藏发生变化的回调
     * @default
     */
    onOpenChange?: (value: boolean) => void;
}
export interface BusinessSelectType extends SelectType, BusinessSelectEvents {
}
