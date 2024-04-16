import { CSSProperties } from 'react';
type PropsType = {
    /**
     * @description iconfont名称 例如： icon-xianshi
     * @default -
     */
    type: string;
    /**
     * @description 设置图标的样式，例如 fontSize 和 color, 不设置则继承父节点
     * @default -
     */
    style?: CSSProperties;
    /**
     * @description 图标旋转角度（IE9 无效）
     * @default -
     */
    rotate?: number;
};
export default function KhtIcons(props: PropsType): JSX.Element;
export {};
