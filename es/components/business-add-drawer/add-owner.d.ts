/// <reference types="react" />
type PropsType = {
    open: boolean;
    onOpenChange: Function;
    rootNode?: any;
    secondNode?: any;
    handleType: 'add' | 'edit';
    currentRow?: any;
    onOkCb: Function;
    houseInfo?: any;
};
export default function AddOwner(props: PropsType): JSX.Element;
export {};
