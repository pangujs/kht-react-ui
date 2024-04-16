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
