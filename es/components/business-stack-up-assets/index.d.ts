/// <reference types="react" />
type paramsType = {
    /** 超管 - 资产树时必传的一个参数 */
    companyCode?: string;
    [P: string]: any;
};
type BusinessStackIpAssetsPropsType = {
    /**
     * @description 选择某一项时的回调
     * @default ()=>void
     */
    onChange?: (info: any, paramsInfo: any) => void;
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
     * @description 是否展示头部标题
     * @default true
     */
    showTitle?: boolean;
    /**
     * @description 左侧标头
     * @default 选择项目
     */
    leftTitle?: String;
    /**
     * @description 右侧标头
     * @default 选择住户
     */
    RightTitle?: String;
    /**
     * @description 当选中状态为 selectable 时有效。选中状态背景全选
     * @default false
     */
    backgroundColorFull?: boolean;
    /**
     * @description 右侧是否展示的状态回调
     * @default ()=>void
     */
    onShrinksStatus?: (status: boolean) => void;
};
export default function BusinessStackIpAssets(props: BusinessStackIpAssetsPropsType): JSX.Element;
export {};
