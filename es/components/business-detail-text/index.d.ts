/// <reference types="react" />
import { BusinessDetailDrawerPropsType } from '../business-detail-drawer';
type PropsType = Pick<BusinessDetailDrawerPropsType, 'residentId' | 'businessId' | 'businessType'> & {
    /**
     * @description 文字
     * @default [详情]
     */
    text?: string;
};
export default function BusinessDetailText(props: PropsType): JSX.Element;
export {};
