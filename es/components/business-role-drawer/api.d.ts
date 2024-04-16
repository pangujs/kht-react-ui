/** 角色-大类 */
export declare const getLeftRoleByRoleType: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 角色-小类 */
export declare const getLeftRoleList: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
