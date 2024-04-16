import { ReactNode } from 'react';
import { DrawerProps } from 'antd';
import './index.less';
export type BusinessDetailDrawerPropsType = Omit<DrawerProps, 'getContainer'> & {
    /**
     * @description 业务类型 user： 企业住户-个人,enterprise 企业住户-企业, proprietor: 业主,family: 家属,tenant: 租户,tenant_family: 租户家属,parking_proprietor: 车位业主,property_owner: 产权人,lessee: 承租人,nanny: 保姆,home: 家庭,house: 房间,space: 空间, property_company:物业公司
     * @default
     */
    businessType: 'user' | 'enterprise' | 'proprietor' | 'family' | 'tenant' | 'tenant_family' | 'parking_proprietor' | 'property_owner' | 'lessee' | 'nanny' | 'home' | 'house' | 'space' | 'property_company';
    /**
     * @description 企业住户id
     * @default -
     */
    residentId?: string;
    /**
     * @description 对应的业务详情id
     * @default -
     */
    businessId?: string;
};
export default function BusinessDetailDrawer(props: BusinessDetailDrawerPropsType): JSX.Element;
type BaseInfoBoxType = {
    imgUrl?: string;
    imgList?: string[];
    hasArrow?: boolean;
    name?: string | ReactNode;
    desc?: string | ReactNode;
    onClick?: Function;
    sex?: string | number;
};
export declare function BaseInfoBox(props: BaseInfoBoxType): JSX.Element;
export declare const businessTypeTextMap: {
    user: string;
    enterprise: string;
    proprietor: string;
    family: string;
    tenant: string;
    tenant_family: string;
    parking_proprietor: string;
    property_owner: string;
    lessee: string;
    nanny: string;
    home: string;
    house: string;
    space: string;
    property_company: string;
};
export declare const relationTextMap: any;
export declare const valueEnumLessorType: any;
export declare const valueEnumBusinessType: any;
export declare const valueEnumOwnershipType: any;
export declare const valueEnumCurrent: any;
export declare const HouseListOption: any;
export declare const businessTypeMap: any;
export declare const booleanTextMap: any;
export {};
