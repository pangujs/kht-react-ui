/// <reference types="react" />
import './index.less';
type PropsType = {
    value: Array<any>;
    serviceName?: string | Array<any>;
    unit: string;
    isWrap?: boolean;
    valueUnit?: string;
    type?: string;
    idName?: string;
    typeName?: string;
    accountType?: string;
    width?: number;
    ellipsisSpan?: any;
};
export default function MultipleText(props: PropsType): JSX.Element;
export {};
