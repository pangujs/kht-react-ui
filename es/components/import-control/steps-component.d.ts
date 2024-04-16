export type StepOneProps = {
    templateUrl: string;
    uploadSuccessCb: Function;
    actionUrl: string;
};
export type StepThreeProps = {
    threeProps: {
        state: boolean;
        message: string;
        progress: number;
    };
};
export type StepFourProps = {
    successTotal: number;
};
/** 上传文件组件 */
export declare const UploadCom: (props: any) => JSX.Element;
/** 步骤一 */
export declare const StepOne: (props: StepOneProps) => JSX.Element;
/** 步骤二 */
export declare const StepTwo: (props: any) => JSX.Element;
/** 步骤三 */
export declare const StepThree: (props: StepThreeProps) => JSX.Element;
/** 步骤四 */
export declare const StepFour: (props: StepFourProps) => JSX.Element;
