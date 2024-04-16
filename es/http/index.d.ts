import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
type Result<T> = {
    code: number;
    message: string;
    result: T;
};
export declare class Request {
    instance: AxiosInstance;
    responseType: string;
    baseConfig: AxiosRequestConfig;
    constructor(config: AxiosRequestConfig);
    request(config: AxiosRequestConfig): Promise<AxiosResponse>;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>>;
}
declare const _default: Request;
export default _default;
