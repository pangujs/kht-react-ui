/// <reference types="react" />
export type PredictTagType = {
    /**
     * @description 抽屉组件显示状态
     * @default false
     */
    open: boolean;
    /**
     * @description 抽屉组件标题名称
     * @default
     */
    title?: string;
    /**
     * @description 抽屉组件宽度
     * @default 480
     */
    width?: number;
    /**
     * @description 抽屉自定义页脚
     * @default null
     */
    footer?: React.ReactNode;
    /**
     * @description 选中的标签
     * @default []
     */
    selectTag?: string;
    /**
     * @description 选中的等级
     * @default []
     */
    selectLevel?: any[];
    /**
     * @description 是否销毁弹窗
     * @default true
     */
    destroyOnClose?: boolean;
};
export interface PredictTagEvents {
    /**
     * @description 组件的关闭回调
     * @default
     */
    onClose: () => void;
    /**
     * @description 组件的提交回调
     * @default
     */
    onSubmit: (selectTag: any, selectLevel: any, selectTagData: any, selectLevelData: any) => void;
}
export interface BusinessPredictTagType extends PredictTagType, PredictTagEvents {
}
