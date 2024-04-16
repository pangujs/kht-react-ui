/// <reference types="react" />
type PropsType = {
    open: boolean;
    onOpenChange: Function;
    rootNode?: any;
    secondNode?: any;
    currentRow?: any;
    onOkCb: Function;
    ownerInfo?: any;
    houseInfo?: any;
    handleType: 'add' | 'edit';
    editData?: any;
};
export default function AddTenantFamily(props: PropsType): JSX.Element;
export {};
