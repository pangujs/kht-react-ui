/// <reference types="react" />
export type CustomerType = {
    /**
     *  @description 客户来源的类型，目前只有两种 wxchat(wechat) wxwork
     *  @default wxchat
     */
    type?: string;
    /**
     *  @description 客户的名字，为空则不显
     *  @default ''
     */
    name?: string;
    /**
     *  @description 显示的单位
     *  @default 用户
     */
    unit?: string;
};
export default function KhtCustomerType(props: CustomerType): JSX.Element;
