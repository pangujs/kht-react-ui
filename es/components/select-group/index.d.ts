/// <reference types="react" />
import { BusinessGroupType, GroupType, BusinessEvents } from './type';
export default function SelectGroup(props: BusinessGroupType): JSX.Element;
export declare const API: (props: GroupType) => JSX.Element;
export declare const Events: (props: BusinessEvents) => JSX.Element;
