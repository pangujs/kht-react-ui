/// <reference types="react" />
import { InputProps } from 'antd';
type DeptUserTreePropsType = {
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
     * @description 分页的页码，与 isPageLoad 一起使用，不传【默认】是 10
     * @default 10
     */
    pageSize?: number;
    /**
     * @description 是否展示 模糊搜索框
     * @default true
     */
    showSearch?: boolean;
    /**
     * @description 选择某一项时的回调
     * @default ()=>void
     */
    onChange?: (selectKeys: string[], info: any) => void;
    /**
     * @description 是否多选
     * @default false
     */
    multiple?: boolean;
    /**
     * @description 自定义 唯一值的生成依赖
     * @default code
     */
    rowKey?: string;
    /**
     * @description antd Input 组件的 Props
     * @default false
     */
    inputProps?: InputProps;
    /**
     * @description  请求参数 (type 字段的值)
     * @default ""
     */
    paramsType?: paramsType | undefined;
    /**
     * @description 是否调用中台资产接口( 默认调中台接口 )
     * @default true
     */
    fetchCustom?: boolean;
    /**
     * @description 当选中状态为 selectable 时有效。选中状态背景全选
     * @default false
     */
    backgroundColorFull?: boolean;
    /**
     * @description 是否开启部门下加载人员数据
     * @default true
     */
    loadUser?: boolean;
    /**
     * @description 默认选中某些数据，当多条时可传数据，为 true 时默认选中根节点
     * @default false
     */
    defaultCheckedItems?: boolean | string[];
    /**
     * @description 默认选中后的回调事件，当 defaultCheckedItems 为 true 时有效
     * @default -
     */
    defaultCallBack?: (selectKeys: string[], node: any) => void;
    /**
     * @description 开启单选时必选一项 模式
     * @default false
     */
    isMandatory?: boolean;
    /**
     * @description 是否开始树组件新样式 仿菜单效果
     * @default false
     */
    newStyle?: boolean;
};
type paramsType = {
    /** 超管 - 资产树时必传的一个参数 */
    companyCode?: string;
    [P: string]: any;
};
export default function BusinessDeptUserTree(props: DeptUserTreePropsType): JSX.Element;
export {};
