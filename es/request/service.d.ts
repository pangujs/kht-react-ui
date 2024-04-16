import { AxiosInstance } from 'axios';
import { ConfigType, setType } from './request';
declare class Service {
    instance: AxiosInstance;
    loadingState: boolean;
    concurrency: boolean;
    messageState: boolean;
    pendingRequest: setType;
    responseType: string;
    nowHandle: any;
    apiKey: string;
    constructor(config: any);
    interceptors(): void;
    interceptorsRequest(): void;
    interceptorsResponse(): void;
    request(config: ConfigType | any): Promise<any>;
    setMessageTip(code: any): void;
    before: (res: any) => Promise<any>;
    setRequest(method: string, config: ConfigType): Promise<unknown>;
    get<T>(config: ConfigType): Promise<any>;
    delete<T>(config: ConfigType): Promise<any>;
    patch<T>(config: ConfigType): Promise<any>;
    post<T>(config: ConfigType): Promise<any>;
    put<T>(config: ConfigType): Promise<any>;
}
export default Service;
