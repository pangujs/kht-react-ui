import { CSSProperties } from 'react';
import { TooltipPlacement } from 'antd/es/tooltip';
export declare const addType: any;
export declare const customerSourceMap: any;
export declare const titleType: any;
export type AccountPopoverPropsType = {
    /**
     * @description 类型  proprietor: '业主',tenant: '租户',family: '家属',tenantFamily: '租户家属',wechat: '微信客户',wxwork: '企微客户',employee: '员工',carPlace: '车位'
     * @default employee
     */
    type?: 'proprietor' | 'tenant' | 'family' | 'tenantFamily' | 'wechat' | 'wxwork' | 'employee' | 'group' | 'carPlace';
    /**
     * @description id 都传id
     * @default null
     */
    id: string;
    /**
     * @description 发送人类型
     * @default null
     */
    trigger?: 'click' | 'hover';
    /**
     * @description 员工姓名
     * @default -
     */
    name?: string;
    /**
     * @description 弹窗方向
     * @default bottom
     */
    placement?: TooltipPlacement;
    /**
     * @description 文字样式
     * @default -
     */
    nameStyle?: CSSProperties;
    /**
     * @description popover的层级
     * @default -
     */
    zIndex?: number;
    /**
     * @description 挂载节点
     * @default 800
     */
    getPopupContainer?: () => void;
};
