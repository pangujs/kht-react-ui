export declare const validateRes: (res: any, showMes?: number) => Promise<unknown>;
type OtherProps = {
    errorCb?: () => void | any;
    successCb?: () => void | any;
    unCode?: boolean;
    fileName?: string;
};
export declare const downFile: (res: any, other?: OtherProps) => Promise<unknown>;
export declare const clearEmptyPro: (data: any) => any;
export declare class AntdConfig {
    static mount: {
        getContainer: () => HTMLElement;
    };
}
/**
 * 导出PDF
 * @param {导出后的文件名} title
 * @param {要导出的dom节点：react使用ref} ele
 */
export declare const exportPDF: (title: any, ele: any) => Promise<void>;
export {};
