/// <reference types="react" />
import './index.less';
type PropsType = {
    /**
     * @description 点击后左侧树的回调
     * @default undefined
     */
    leftChange?: Function;
    /**
     * @description 点击后右侧树的回调
     * @default undefined
     */
    rightChange?: Function;
    /**
     * @description 左侧树可被选中的参数， 请参照  BusinessInstitutionalIconType 值进行填写
     * @default undefined
     */
    leftCanSelect?: string | string[];
    /**
     * @description 右侧树可被选中的参数， 请参照  BusinessInstitutionalIconType 值进行填写
     * @default undefined
     */
    rightCanSelect?: string | string[];
    /**
     * @description 左侧树可被加载的层级， 请参照  BusinessInstitutionalIconType 值进行填写
     * @default undefined
     */
    leftLoaderLevel?: 'function' | 'organization' | 'community' | 'phase' | 'building' | 'unit' | 'floor' | 'house' | undefined;
    /**
     * @description 右侧树可被加载的层级， 请参照  BusinessInstitutionalIconType 值进行填写
     * @default undefined
     */
    rightLoaderLevel?: 'community' | 'phase' | 'building' | 'unit' | 'floor' | 'house' | 'space' | undefined;
    /**
     * @description 是否渲染右侧节点。
     * @default false
     */
    hasRight?: boolean;
    /**
     * @description 不同业务场景时，请求接口地址不同，但返回的数据结构是统一的, 全路径，/api/v1/xxx/xxxx
     * @default undefined
     */
    url?: string;
    /**
     * @description 左侧搜索placeholder
     * @default 搜索项目
     */
    leftPlaceholder?: string;
    /**
     * @description 右侧搜索placeholder
     * @default 搜索项目
     */
    rightPlaceholder?: string;
    /**
     * @description 左侧树加载参数, 会覆盖组件里面本来已有的参数
     * @default {}
     */
    leftLoadParams?: Object;
    /**
     * @description 左侧搜索参数, 会覆盖组件里面本来已有的参数, 搜索会带上 leftLoadParams 参数，leftQueryParams 中的字段会覆盖 leftLoadParams
     * @default {}
     */
    leftQueryParams?: Object;
    /**
     * @description 右侧树加载参数, 会覆盖组件里面本来已有的参数
     * @default {}
     */
    rightLoadParams?: Object;
    /**
     * @description 右侧搜索参数, 会覆盖组件里面本来已有的参数, 搜索会带上 rightLoadParams 参数，rightQueryParams 中的字段会覆盖 rightLoadParams
     * @default {}
     */
    rightQueryParams?: Object;
    /**
     * @description 业务类型
     * @default 搜索项目
     */
    businessType?: 'community' | 'phase' | 'building' | 'unit' | 'floor' | 'house';
    /**
     * @description 是否开启树组件新样式 仿菜单效果
     * @default false
     */
    newStyle?: boolean;
    /**
     * @description 是否开启树组件默认选中根节点
     * @default true
     */
    defaultSelectRoot?: boolean;
};
export default function BusinessCollapsePanelAssets(props: PropsType): JSX.Element;
export {};
