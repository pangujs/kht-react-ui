/// <reference types="react" />
type PropsType = {
    onChange: Function;
    value?: any;
    placeholder?: string;
    multiple?: boolean;
    canSelect?: string | string[];
    destroy?: boolean;
    disabled?: boolean;
    loaderLevel?: 'function' | 'community' | 'phase' | 'building' | 'unit' | 'floor' | 'house' | 'organization' | undefined;
    rootNode?: any;
    isSpace?: boolean;
    defalutSelectedData?: any[];
    otherQueryParams?: any;
    title?: string;
    searchPlaceholder?: string;
};
export default function InputAssetsDrawerTree(props: PropsType): JSX.Element;
export {};
