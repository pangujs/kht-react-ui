import { TooltipPlacement } from 'antd/es/tooltip';
import { CSSProperties } from 'react';
export type GroupCardPropsType = {
    /**
     * @description 类型 group 群，member 群成员
     * @default group
     */
    type?: 'group' | 'member';
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
export declare const joinTypeMap: {
    '1': string;
    '2': string;
    '3': string;
};
