import { AxiosResponse } from 'axios';
export interface ConfigType {
    headers?: object | any;
    loadingState?: boolean;
    messageState?: boolean;
    responseType?: string;
    method?: string | any;
    baseURL?: string;
    url?: string;
    data?: object | any;
    params?: object | any;
    cancelToken?: string | any;
}
export interface setType {
    has?: void | any;
    get?: void | any;
    set?: void | any;
    delete?: void | any;
}
export interface response {
    config?: object | any;
}
export interface responseData {
    data?: object | any;
}
export interface data {
    response?: AxiosResponse | object | any;
    code: number;
    success: boolean;
    message?: string;
}
export declare const TOKEN = "h-token";
