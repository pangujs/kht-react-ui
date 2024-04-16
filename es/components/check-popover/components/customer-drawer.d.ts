import { ReactElement } from 'react';
import './index.less';
export type CustomerDrawerType = {
    /**
     * @description 类型  assetMN: '住户手机',assetTN: '住户电话',customerTN: '客户电话',customerCN: '客户备注名',customerAP: '客户添加人',employeeMN: '员工手机'
     * @default null
     */
    type: string;
    /**
     * @description 关闭的回调
     */
    onClose: () => void;
    /**
     * @description 是否可见
     * @default -
     */
    visible: boolean;
    /**
     * @description dataSource数据
     * @default -
     */
    dataSource: any;
    /**
     * @description 是否是历史
     * @default -
     */
    drawerTableLayoutTitle?: ReactElement | string | any;
};
declare const _default: (props: CustomerDrawerType) => JSX.Element;
export default _default;
