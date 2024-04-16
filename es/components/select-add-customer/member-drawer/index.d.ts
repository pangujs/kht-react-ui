/// <reference types="react" />
import { MemberProjectType, ProjectType, BusinessEvents } from './types';
export default function KhtBusinessProject(props: MemberProjectType): JSX.Element;
export declare const API: (props: ProjectType) => JSX.Element;
export declare const Events: (props: BusinessEvents) => JSX.Element;
