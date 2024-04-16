/// <reference types="react" />
import './index.less';
type PropsType = {
    value: Array<any>;
    serviceName?: string | Array<any>;
    unit: string;
    isWrap?: boolean;
    valueUnit?: string;
};
export default function DeptMultipleText(props: PropsType): JSX.Element;
export {};
