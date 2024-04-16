export declare const phoneReg: RegExp;
export declare const integerReg: RegExp;
export declare const isMobReg: RegExp;
export declare const setFormRule: (reg: any, errMes?: string) => {
    validator: (_: any, value: any) => Promise<void>;
};
export declare const nameValidator: () => {
    validator: (_: any, value: any) => Promise<void>;
};
export declare const validatePhone: (rule: any, value: any, callback: any) => void;
export declare const validateMobile: (rule: any, value: any, callback: any) => void;
