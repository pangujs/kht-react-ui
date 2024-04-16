import { ModalProps } from 'antd';
import React from 'react';
type PopconfirmModalPropsType = {
    /**
     * @description Modal props 与官方同步
     */
    modalProps?: ModalProps;
    /**
     * @description 弹层 title
     * @default 温馨提示
     */
    title?: string;
    /**
     * @description 弹层状态
     * @default flase
     */
    visible: boolean;
    /**
     * @description 确认的回调
     */
    ok?: () => Promise<any>;
    /**
     * @description 取消的回调
     */
    cancel?: () => void;
    /**
     * @description 内容区
     */
    children?: string | React.ReactNode;
};
/** 操作按钮前的提示弹层 */
export default function PopconfirmModal(props: PopconfirmModalPropsType): JSX.Element;
export {};
