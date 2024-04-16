import { CSSProperties, ReactElement } from 'react';
import './index.less';
type LayoutPageListPropsType = {
    /**
     * @description 页面内容左侧区域内容
     */
    leftChildren?: ReactElement | false | undefined;
    /**
     * @description 页面内容右侧区域内容
     */
    rightChildren: ReactElement;
    /**
     * @description 左侧区域是否需要右边框
     * @default false
     */
    hasLeftBorder?: boolean;
    /**
     * @description 最外层容器className
     * @default ''
     */
    wrapClassName?: string;
    /**
     * @description 最外层容器Style
     * @default ''
     */
    wrapStyle?: CSSProperties;
    /**
     * @description 左侧区域容器Style
     * @default false
     */
    leftStyle?: CSSProperties;
    /**
     * @description 普通列表模式下样式 背景颜色 查询条件与表格之间的间隙
     * @default false
     */
    isDefault?: boolean;
    /**
     * @description 顶部返回区域内容
     */
    back?: ReactElement;
    /**
     * @description 是否有顶部返回区域
     */
    hasBack?: boolean;
    /**
     * @description 返回区域配置 backName: 返回按钮文字, backFun: 返回点击事件 如果传入了事件 则组件本身不做返回处理, title: 按钮后面标题
     */
    backParams?: {
        backText?: string;
        backFun?: Function;
        title?: string;
    };
};
export default function LayoutPageList(props: LayoutPageListPropsType): JSX.Element;
export declare const API: (props: LayoutPageListPropsType) => JSX.Element;
export {};
