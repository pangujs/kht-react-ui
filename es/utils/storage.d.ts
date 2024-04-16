declare class Storage {
    func: any;
    constructor(name: any);
    get(key: string): any;
    set(key: string, data: any): void;
    clear(): void;
    remove(key: string): void;
}
export declare const Local: Storage;
export declare const Session: Storage;
declare class AppMenuConfig {
    constructor();
    get(type: string): any;
    set(type: string, data: any): void;
}
export declare const CurrentAppMenuStorage: AppMenuConfig;
export {};
