/// <reference types="react" />
type PropsType = {
    url?: string;
    onChange: Function;
    rootNode?: any;
    canSelect?: string | string[];
    loaderLevel?: 'function' | 'organization' | 'community' | 'phase' | 'building' | 'unit' | 'floor' | 'house' | 'space' | undefined;
    otherQueryParams?: any;
    showTooltip?: boolean;
    placeholder?: string;
    newStyle?: boolean;
    defaultSelectRoot?: boolean;
    searchParams?: Object;
};
export default function AssetsBaseTree(props: PropsType): JSX.Element;
export {};
