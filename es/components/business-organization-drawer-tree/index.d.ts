import { TreeDataNode } from '../base-tree';
import { DefaultCheckedItems } from '../modal-tree';
import { InputProps } from 'antd';
type paramsType = {
    /** 名字 */
    name?: string;
    /** 父级ID */
    parentId?: string;
    /** 标签类型:1企微标签，2需求标签, 3舆情标签 */
    type?: string;
    /** 超管 -必传的一个参数 企业code*/
    companyCode?: string;
};
type OrganizationDrawerTreePropsType = {
    /**
     * @description 弹层的状态
     * @default false
     */
    open: boolean;
    /**
     * @description 是否关闭弹层时 销毁所有节点
     * @default true
     */
    destroyOnClose?: boolean;
    /**
     * @description 抽屉宽度
     * @default 480
     */
    /**
     * @description 关闭弹框的回调
     * @default ()=>void
     */
    cancel?: () => void;
    /**
     * @description 弹层的 title
     * @default 请选择
     */
    title?: string;
    /**
     * @description 确认按钮的回调
     * @default ()=>void
     */
    ok?: (selectNode: TreeDataNode[]) => void;
    width?: number;
    /**
     * @description 是否多选
     * @default true
     */
    multiple?: boolean;
    /**
     * @description 选中的类型， true 是 selectable ，false 是 checkedable
     * @default true
     */
    selectable?: boolean;
    /**
     * @description 判断当前点击对象里，是否包含此属性，有则可选，无则不可选
     * @default ""
     */
    canSelect?: string | string[];
    /**
     * @description （受控）默认回显数据。
     * @default []
     */
    defaultCheckedItems: DefaultCheckedItems[];
    /**
     * @description 是否开启分页加载
     * @default true
     */
    isPageLoad?: boolean;
    /**
     * @description 分页的页码，与 isPageLoad 一起使用，不传【默认】是 10
     * @default 100
     */
    pageSize?: number;
    /**
     * @description  接口请求的参数
     * @default {}
     */
    paramsType?: paramsType | undefined;
    /**
     * @description antd Input 组件的 Props
     * @default false
     */
    inputProps?: InputProps;
    /**
     * @description 选中节点时，仅在 disableChild 为 true时有效， 是否仅显示 父节点， 为 parent 时仅显父节点， 为 children 时仅显示子节点，为 undefined 时显示所有
     * @default undefined
     */
    showNodeParents?: 'parent' | 'children' | undefined;
    /**
     * @description 自定义根节点数据，懒加载接口地址及相关逻辑不变
     * @default false
     */
    customRootNode?: TreeDataNode[];
    /**
     * @description 弹窗状态，true-预览模式，false-可选模式
     * @default - false
     */
    isReviewMode?: boolean;
    /**
     * @description 点击遮罩层是否关闭抽屉
     * @default - true
     */
    maskClosable?: boolean;
    /**
     * @description 是否开启禁用子节点模式
     * @default - false
     */
    disableChild?: boolean;
    useSystem?: 'customer' | 'admin';
    /**
     * @description 返回根节点
     * @default
     */
    backRootNode?: Function;
};
export type InstitutionalRefActionType = {
    /**
     * @description 清空所有已选数据
     * @default () => void
     */
    reset?: () => void;
};
declare const BusinessOrganizationDrawerTree: (props: OrganizationDrawerTreePropsType) => JSX.Element;
export default BusinessOrganizationDrawerTree;
export declare const API: (props: OrganizationDrawerTreePropsType) => JSX.Element;
