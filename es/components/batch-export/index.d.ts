/// <reference types="react" />
import './index.less';
export type ImportProps = {
    /**
     * @description 显示 或 隐藏
     * @default  false
     */
    open: boolean;
    /**
     * @description 标题
     * @default
     */
    title: string;
    /**
     * @description 类型、unit、phase...等
     * @default
     */
    type: string;
    /**
     * @description 导出类型中文注解、比如：building->楼栋
     * @default -
     */
    typeText: string;
    /**
     * @description 导出地址
     * @default
     */
    url: string;
    /**
     * @description 导出参数
     * @default {}
     */
    exportParams?: object | any;
    /**
     * @description 上传类型、unit、phase...等,编辑时候会出现导出+上传type不一致情况
     * @default
     */
    uploadType?: string;
    /**
     * @description 是否需要可以导出编辑/再上传
     * @default false
     */
    isNeedEdit?: boolean;
    /**
     * @description 关闭操作
     * @default
     */
    onClose: Function;
    /**
     * @description 导入操作成功后的回调
     * @default
     */
    onSuccess?: Function;
};
export default function BatchImport(props: ImportProps): JSX.Element;
