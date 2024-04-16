export type ImportProps = {
    /**
     * @description 显示 或 隐藏
     * @default       false
     */
    visible: boolean;
    /**
     * @description  表头名称
     * @default        数据批量导入
     */
    title?: string;
    /**
     * @description 下载模块的路径
     * @default         (必填)
     */
    downloadUrl: string;
    /**
     * @description 上传的文件服务器地址
     * @default        /file/upload
     */
    actionUrl: string;
    /**
     * @description  检验接口错误字段重新映射
     */
    resObject?: {
        status: number;
        failTotal: string;
        successTotal: string;
        errorMsg: any;
        importTotal: string;
    };
    /**
     * @description 关闭弹框的回调
     * @default       ()=>{}
     */
    cancelCb: Function;
    /**
     * @description  校验数据的方法
     * @default       (必填)
     */
    checkFildDataFn?: Function;
    /**
     * @description 执行导入接口方法
     * @default       (必填)
     */
    executeImport: Function;
};
declare const ImportControl: (props: ImportProps) => JSX.Element;
export default ImportControl;
