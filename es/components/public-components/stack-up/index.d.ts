import React from 'react';
type StackUpPropsType = {
    baseChildren: React.ReactNode;
    rightChildren: React.ReactNode;
    stackUpRef?: any;
    /**
     * @description 是否默认收起
     * @default false
     */
    isDefaultClose?: Boolean;
    /**
     * @description 展开收起回调
     * @default ()=>void
     */
    onShrinks?: (isClosing: boolean) => void;
};
export default function StackUp(props: StackUpPropsType): JSX.Element;
export {};
