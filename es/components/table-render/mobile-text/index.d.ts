/// <reference types="react" />
type PropsType = {
    /** 数据源 */
    value: string | string[];
    /**
     *  @description 是否隐藏手机号
     *  @default true
     */
    hideMobile?: boolean;
    /**
     *  @description 超过长度之后，开启提示的后面的文字描述，即 `xxx 等3${tips}`
     *  @default 个手机号
     */
    tips?: string;
    /**
     *  @description arr的长度超过多少的时候，开启缩率提示
     *  @default 1
     */
    max?: number;
    /** antd的原生属性  https://ant.design/components/tooltip-cn/#API */
    nativeProps?: any;
};
declare function MobileText(props: PropsType): JSX.Element;
declare namespace MobileText {
    var width: number;
}
export default MobileText;
