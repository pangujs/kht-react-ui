import Service from './service';
export declare const publicApi: Service;
export declare const boss: Service;
export declare const user: Service;
export declare const company: Service;
export declare const weixinWork: Service;
export declare const taskAllot: Service;
export declare const material: Service;
export declare const opinion: Service;
export declare const view: Service;
export declare const customer: Service;
export declare const opinionManage: Service;
export declare const bossAdmin: Service;
export declare const adminManage: Service;
export declare const opinionAdmin: Service;
export declare const companyOpinion: Service;
export declare const estate: Service;
export declare const opinionTag: Service;
interface OtherProps {
    errorCb?: () => void | any;
    successCb?: () => void | any;
    unCode?: boolean;
    fileName?: string;
}
export declare const createAtargetDown: (res: any, other?: OtherProps) => void;
export declare const downFile: (res: any, other?: OtherProps) => Promise<void>;
export {};
