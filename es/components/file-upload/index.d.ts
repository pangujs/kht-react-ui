/// <reference types="react" />
import './index.less';
import { TooltipPlacement } from 'antd/lib/tooltip';
type FileUploadPropsType = {
    /**
     * @description 按钮文字
     * @default 添加
     */
    btnText?: string;
    /**
     * @description 多选
     * @default false
     */
    multiple?: boolean;
    /**
     * @description 文件格式
     * @default false
     */
    accept?: string;
    /**
     * @description 选择回调
     * @default -
     */
    onChange?: Function;
    /**
     * @description Popover方向
     * @default -
     */
    placement?: TooltipPlacement;
    /**
     * @description Popover选择类型上传-还未实现
     * @default false
     */
    hasPopover?: boolean;
    /**
     * @description 最大上传个数
     * @default 9
     */
    maxCount?: number;
    /**
     * @description 类型-添加,修改,预览
     * @default add
     */
    handleType?: 'add' | 'edit' | 'review';
    /**
     * @description 默认数据
     * @default []
     */
    defaultFileList?: FileObjType[];
};
type FileObjType = {
    fileId?: string;
    fileUrl?: string;
    fileType?: string;
    type?: string;
    memory?: string;
    name?: string;
    path?: string;
    [key: string]: any;
};
export default function FileUpload(props: FileUploadPropsType): JSX.Element;
export {};
