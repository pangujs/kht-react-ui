/// <reference types="react" />
import './index.less';
type PropsType = {
    open: boolean;
    onOpenChange: Function;
    onOkCb?: Function;
};
export type TableListItem = {
    id: string;
    [key: string]: any;
};
export default function AddUser(props: PropsType): JSX.Element;
export {};
