/// <reference types="react" />
import './index.less';
type PropsType = {
    isModalOpen: boolean;
    onCancel: Function;
    id?: string;
    number?: number;
    name?: string;
    tableData?: Array<any>;
    title?: string;
    remark?: string;
};
export declare const formatData: (data: Array<any>) => any;
export default function CustomerMobileModal(props: PropsType): JSX.Element;
export {};
