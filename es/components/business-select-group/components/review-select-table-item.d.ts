/// <reference types="react" />
import { ModalProps } from 'antd';
import './index.less';
import { TableDataType } from '../index';
type ReviewSelectTableItemPropsType = {
    /**
     * @description Modal props 与官方同步
     */
    modalProps?: Omit<ModalProps, 'footer'>;
    /**
     * @description 关闭回调
     */
    cancel: (selectKeys?: checkStatusType) => void;
    /**
     * 勾选的 key 值集合
     */
    selectRowKyes: string[];
    clickRemarkClick: (record: TableDataType, remark: TableDataType[]) => void;
    clickCustomerOwnerClick: (record: TableDataType, list: Array<any>) => void;
    clickTagClick: (record: TableDataType, list: Array<any>) => void;
};
export type checkStatusType = {
    checkKeys: string[];
    unCheckKeys: string[];
};
export default function ReviewSelectTableItem(props: ReviewSelectTableItemPropsType): JSX.Element;
export {};
