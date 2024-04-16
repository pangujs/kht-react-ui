import './index.less';
type FileObjType = {
    fileId?: string;
    fileUrl?: string;
    fileType?: string;
    type?: string;
    memory?: string;
    name?: string;
    path?: string;
    [key: string]: any;
};
export type IdCardFileType = {
    pros: FileObjType;
    cons: FileObjType;
};
type IdcardUploadProps = {
    handleType?: 'add' | 'edit' | 'review';
    defaultDate: IdCardFileType;
    onChange: (val: IdCardFileType) => void;
};
export declare const IdcardUpload: (props: IdcardUploadProps) => JSX.Element;
export {};
