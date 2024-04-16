import { ModalProps } from 'antd';
import React from 'react';
import { TreeDataNode } from '../base-tree';
import './index.less';
type BusinessSelectCustomerPropsType = {
    /**
     * @description 确认按钮的回调
     * @default -
     */
    ok?: (selectNode: any) => void;
    /**
     * @description 关闭弹框的回调
     * @default -
     */
    cancel?: () => void;
    /**
     * @description Modal props 与官方同步
     */
    modalProps: Omit<ModalProps, 'footer'>;
    /**
     * @description 回显时赋上默认值，查询条件、表格状态等
     * @default undefined
     */
    defaultCheckedItems?: DefaultItemsType;
    /**
     * @description 是否只是查看
     * @default false
     */
    readOnlyTable?: boolean;
    /**
     * @description 是否使用自定义的执行人数据，
     * @default undefined
     */
    customDeptUserNode?: TreeDataNode[];
};
export interface TableDataType {
    id: React.Key;
    name: string;
    remarkName: string;
    useTagInfoList: string;
    residentHouseInfoReqDtoList: string;
    customerFollowInfoResDtoList: string;
    createDate: string;
}
type TableParamsType = {
    search: string;
    cipherIds: string[];
    groupTagIds: string[];
    communityId?: string[];
    [propsName: string]: any;
};
export type DefaultItemsType = {
    /**
     * @description table 表格的状态
     */
    tableStatus: {
        /**
         * @description 是否是全选状态
         */
        isSelectAll: boolean;
        /**
         * @description 已选中的 id 集合
         */
        checkRowKeys: string[];
        /**
         * @description 已选中的对象集合
         */
        checkRowRecords?: TableDataType[];
        /**
         * @description 全选状态下 取消勾选的 id 集合
         */
        unCheckRowKeys: string[];
    };
    /**
     * @description 查询条件
     */
    searchParams?: TableParamsType;
};
/** 选择客户 -- 公共业务组件 */
export default function BusinessSelectGroup(props: BusinessSelectCustomerPropsType): JSX.Element;
export {};
