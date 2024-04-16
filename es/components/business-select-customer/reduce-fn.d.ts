import { TreeDataNode } from '../base-tree';
type ActionType = {
    type: 'SETOPENSTATUS' | 'SETSELECTITEMS' | 'RESET';
    payload: any;
};
type StateType = {
    open: boolean;
    defaultCheckedItems: TreeDataNode[];
};
export declare const deptUserInitialState: StateType;
export declare const deptUserReducer: (state: StateType, action: ActionType) => {
    open: any;
    defaultCheckedItems: TreeDataNode[];
} | {
    open: boolean;
    defaultCheckedItems: any;
};
export declare const tagesInitialState: StateType;
export declare const tagsReducer: (state: StateType, action: ActionType) => {
    open: any;
    defaultCheckedItems: TreeDataNode[];
} | {
    open: boolean;
    defaultCheckedItems: any;
};
export declare const communityInitialState: StateType;
export declare const communityReducer: (state: StateType, action: ActionType) => {
    open: any;
    defaultCheckedItems: TreeDataNode[];
} | {
    open: boolean;
    defaultCheckedItems: any;
};
export declare const householdInitialState: StateType;
export declare const householdReducer: (state: StateType, action: ActionType) => {
    open: any;
    defaultCheckedItems: TreeDataNode[];
} | {
    open: boolean;
    defaultCheckedItems: any;
};
export {};
