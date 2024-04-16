/// <reference types="react" />
type PropsType = {
    /**
     * @description 手机号码 单个手机 或者 多个手机 分别接收字符串 数组
     * @default -
     */
    value: string | any[];
    /**
     * @description 对象数组时，需要显示的字段key
     * @default -
     */
    valueName?: string;
    /**
     * @description 多个的提示文字
     * @default -
     */
    tips?: string;
    getPopupContainer?: () => void;
};
export default function MobileText(props: PropsType): JSX.Element;
export declare const API: (props: PropsType) => JSX.Element;
export {};
