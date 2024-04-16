import { PopoverProps } from 'antd';
import React from 'react';
import { UnRequired } from '../../utils/type-tools';
import './index.less';
type BusinessUserInfoPopoverPropsType = {
    /**
     * @description 用户的明细数据
     * @default undefined
     */
    userInfo?: UnRequired<UserInfoType>;
    /**
     * @description Popover props 参数，与官方同步
     * @default -
     */
    popoverProps?: PopoverProps;
    /**
     * @description 用户的明细数据
     * @default 移入提示
     */
    children: React.ReactNode;
    /**
     * @description 内容列表
     * @default undefined
     */
    contentList?: Array<ContentListType> | undefined;
    descriptionNode?: any | React.ReactNode;
};
type UserInfoType = {
    /**
     * @description 内容列表
     * @default 默认头像
     */
    avatar: string;
    /**
     * @description 性别  男: "1", 女: "0"
     * @default 0
     */
    sex: string;
    /**
     * @description 姓名
     * @default -
     */
    name: string;
    /**
     * @description 类型 微信客户: "wechat", 企微客户: "wxwork"
     * @default wxwork
     */
    type?: string;
};
type ContentListType = {
    /**
     * @description 内容区的 label
     * @default -
     */
    label: string;
    /**
     * @description value 值 ， 也可使用 render 重新渲染
     * @default -
     */
    value?: string | number;
    /**
     * @description render 节点
     * @default undefined
     */
    render?: () => React.ReactNode | any;
    /**
     * @description 渲染手机号时必传字段
     * @default undefined
     */
    type?: 'phone';
};
export default function BusinessUserInfoPopover(props: BusinessUserInfoPopoverPropsType): JSX.Element;
export declare const UserInfoType: (props: UserInfoType) => JSX.Element;
export declare const ContentListType: (props: ContentListType) => JSX.Element;
export {};
