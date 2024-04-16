/// <reference types="react" />
import { InputProps, ModalProps, TabsProps } from 'antd';
type BusinessRuleModalPropsType = {
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
     * @default -
     */
    modalProps?: ModalProps;
    /**
     * @description antd Input 组件的 Props
     * @default -
     */
    inputProps?: InputProps;
    /**
     * @description antd Tabs 组件的 Props
     * @default -
     */
    tabsProps?: Omit<TabsProps, 'defaultActiveKey'>;
    /**
     * @description 默认选取数据，数据回显
     */
    defaultCheckedItems?: {
        organizationRole: ItemListType[];
        businessRole: ItemListType[];
    };
    /**
     * @description 手动设置确定按钮时，是否关闭弹层
     * @default true
     */
    clickOkCancel?: boolean;
    /**
     * @description 是否可多选
     * @default true
     */
    multiple?: boolean;
    /**
     * @description 默认选中分类项
     * @default organizationRole
     */
    activeKey?: RoleType;
    /**
     * @description 展示某个类型角色
     * @default undefined
     */
    showRole?: RoleType | undefined;
    /**
     * @description 角色分类接口额外请求参数
     * @default undefined
     */
    roleClassParams?: any;
    /**
     * @description 角色接口额外请求参数
     * @default undefined
     */
    roleParams?: any;
};
type RoleType = 'organizationRole' | 'businessRole';
export type ItemListType = {
    id: string;
    name: string;
    expand?: boolean;
    children: ItemListType[];
};
export default function BusinessRoleModal(props: BusinessRuleModalPropsType): JSX.Element;
export {};
