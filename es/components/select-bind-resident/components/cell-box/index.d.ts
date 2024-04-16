import React from 'react';
import './index.less';
type PropsType = {
    label: string;
    value?: any;
    onClick?: Function;
    hasArrow?: boolean;
    className?: string;
    style?: React.CSSProperties;
    labelWidth?: number;
    valueColor?: string;
};
export default function CellBox(props: PropsType): JSX.Element;
export {};
