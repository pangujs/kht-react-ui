/// <reference types="react" />
import './index.less';
export type BusinessAddDrawerPropsType = {
    /**
     * @description 业务类型 proprietor: 业主,family: 家属,tenant: 租户,tenant_family: 租户家属,user: 企业用户-个人， enterprise: 企业用户-企业, property_company:物业公司
     * @default user
     */
    businessType: 'proprietor' | 'family' | 'tenant' | 'tenant_family' | 'user' | 'enterprise' | 'property_company';
    open: boolean;
    onOpenChange: Function;
    rootNode?: any;
    secondNode?: any;
    currentRow?: any;
    onOkCb: Function;
    ownerInfo?: any;
    houseInfo?: any;
    communityId?: string;
    handleType: 'add' | 'edit';
    editData?: any;
};
export default function BusinessAddDrawer(props: BusinessAddDrawerPropsType): JSX.Element;
export declare const businessTypeTextMap: {
    proprietor: string;
    family: string;
    tenant: string;
    tenant_family: string;
    user: string;
};
export declare const relationTextMap: any;
export declare const valueEnumLessorType: any;
export declare const valueEnumBusinessType: any;
export declare const valueEnumOwnershipType: any;
export declare const valueEnumCurrent: any;
export declare const HouseListOption: any;
