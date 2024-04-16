import { ReactNode } from 'react';
import { DrawerProps } from 'antd';
import { TagSearchPropsTypes, GroupTagListPropsTypes } from '../types';
export declare const TagSearch: (props: TagSearchPropsTypes) => JSX.Element;
export declare const emptyNode: JSX.Element;
export declare const GroupTagList: (props: GroupTagListPropsTypes) => JSX.Element;
export default function TagDrawer(props: DrawerProps & {
    contentNode: ReactNode;
    headerNode: ReactNode;
}): JSX.Element;
