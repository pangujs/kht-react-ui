import { CSSProperties } from 'react';
import './index.less';
import { TooltipPlacement } from 'antd/es/tooltip';
export type AccountPopoverPropsType = {
    /**
     * @description 类型  proprietor: '业主',tenant: '租户',family: '家属',tenantFamily: '租户家属',wechat: '微信客户',wxwork: '企微客户',employee: '员工'
     * @default null
     */
    type?: 'proprietor' | 'tenant' | 'family' | 'tenantFamily' | 'wechat' | 'wxwork' | 'employee';
    /**
     * @description 员工id
     * @default null
     */
    id: string;
    /**
     * @description 触发类型
     * @default click
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
     * @description 挂载节点
     * @default -
     */
    getPopupContainer?: () => void;
};
declare const AccountPopover: (props: AccountPopoverPropsType) => JSX.Element;
export declare const Employee: (props: any) => JSX.Element;
export declare const AssetsAccountInfo: (props: any) => JSX.Element;
export declare const WxAccountInfo: (props: any) => JSX.Element;
export declare const API: (props: AccountPopoverPropsType) => JSX.Element;
export default AccountPopover;
