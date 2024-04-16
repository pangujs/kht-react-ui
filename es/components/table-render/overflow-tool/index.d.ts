/// <reference types="react" />
export type TableOverflowToolType = {
    /** 数据源 */
    arr: string | string[] | object[];
    /**
     *  @description arr的长度超过多少的时候，开启缩率提示
     *  @default 1
     */
    max?: number;
    /**
     *  @description 超过长度之后，开启提示的后面的文字描述，即 `xxx 等3${tips}`
     *  @default 人
     */
    tips: string;
    /**
     *  @description 如果arr是数组对象，那么需要传入这个字段，表示使用哪个key值渲染
     *  @default undefined
     */
    serviceName?: undefined | string;
    /**
     *  @description 有时候显示的字段，跟鼠标移入显示的字段会不一样，如果传入的是数组，则会依次拼接数组里面的值，如果传入的是函数，则需要自己返回对应的字符串
     *  @default undefined
     */
    toolServiceName?: undefined | string[] | Function | any;
    /** antd的原生属性  https://ant.design/components/tooltip-cn/#API */
    nativeProps?: any;
    /**
     *  @description tips是否换行显示
     *  @default false
     */
    blockTips?: boolean;
};
export default function KhtOverflowTool(props: TableOverflowToolType): JSX.Element;
