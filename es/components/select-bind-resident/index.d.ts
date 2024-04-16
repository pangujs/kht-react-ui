/// <reference types="react" />
import { BusinessBindResidenceType, BindResidenceType, BusinessBindEvents } from './type';
import './index.less';
export default function SelectBindResident(props: BusinessBindResidenceType): JSX.Element;
export declare const API: (props: BindResidenceType) => JSX.Element;
export declare const Events: (props: BusinessBindEvents) => JSX.Element;
