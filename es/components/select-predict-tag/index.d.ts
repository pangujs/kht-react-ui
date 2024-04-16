/// <reference types="react" />
import { BusinessPredictTagType, PredictTagType, PredictTagEvents } from './type';
import './index.less';
export default function SelectPredictTag(props: BusinessPredictTagType): JSX.Element;
export declare const API: (props: PredictTagType) => JSX.Element;
export declare const Events: (props: PredictTagEvents) => JSX.Element;
