/// <reference types="react" />
import { ModalProps } from 'antd';
import './index.less';
type RemarkNameModalTablePropsType = {
    /**
     * @description Modal props 与官方同步
     */
    modalProps?: Omit<ModalProps, 'footer'>;
    /**
     * @description 关闭回调
     */
    cancel: () => void;
    /**
     * @description 当前行的数据
     */
    currentTableItem: any;
};
export default function TagsModalTable(props: RemarkNameModalTablePropsType): JSX.Element;
export {};
