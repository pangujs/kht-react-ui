/// <reference types="react" />
type PropsType = {
    open: boolean;
    onOpenChange: Function;
    rootNode?: any;
    secondNode?: any;
    handleType: 'add' | 'edit';
    currentRow?: any;
    onOkCb: Function;
    communityId?: string;
};
export default function AddPropertyCompany(props: PropsType): JSX.Element;
export {};
