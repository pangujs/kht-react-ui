/// <reference types="react" />
type PropsType = {
    open: boolean;
    onOpenChange: Function;
    rootNode?: any;
    secondNode?: any;
    handleType: 'add' | 'edit';
    currentRow?: any;
    onOkCb: Function;
    ownerInfo?: any;
    houseInfo?: any;
    editData?: any;
};
export default function AddFamily(props: PropsType): JSX.Element;
export {};
