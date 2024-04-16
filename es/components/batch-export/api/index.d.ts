export declare const getImportTemplate: (type: string) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const importOrganization: (type: string, data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const importOrganizationResult: (data: string) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const exportResult: (data: string) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getExport: (url: string, data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getExportList: (data: any, currentPage?: number, pageSize?: number) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getExportInfo: (id: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
