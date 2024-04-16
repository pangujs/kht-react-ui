/// <reference types="react" />
import './index.less';
import { BusinessSelectType, SelectType, BusinessSelectEvents } from './type';
export default function BaseSelectFormComponent(props: BusinessSelectType): JSX.Element;
export declare const API: (props: SelectType) => JSX.Element;
export declare const Events: (props: BusinessSelectEvents) => JSX.Element;
