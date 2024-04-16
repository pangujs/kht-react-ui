/// <reference types="react" />
import './index.less';
import { SelectAddCustomerType, AddCustomerType, SelectAddCustomerEvents } from './type';
export default function SelectAddCustomer(props: SelectAddCustomerType): JSX.Element;
export declare const API: (props: AddCustomerType) => JSX.Element;
export declare const Events: (props: SelectAddCustomerEvents) => JSX.Element;
