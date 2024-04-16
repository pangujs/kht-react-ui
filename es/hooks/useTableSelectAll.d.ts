type propsType = {
    /** table 唯一值， 默认取 id */
    rowKey?: string;
};
declare const useTableSelectAll: (props?: propsType) => {
    setTableRowKeys: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    selectedRowKeys: string[];
    setSelectedRowKeys: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    selectAll: boolean;
    singlePageSelectAll: (selected: boolean, selectedRows: any, changeRows: string[]) => void;
    globalSelectAll: (checked: boolean) => void;
    tableFormRef: import("react").MutableRefObject<any>;
    unCheckedRowKeys: string[];
    tableRowKeys: string[];
    singleSelect: (row: any, checked: boolean) => void;
    onDataSourceChange: (dataSource: string[]) => void;
    onSelect: (selected: any, checked: boolean) => void;
    selections: {
        key: string;
        text: string;
        onSelect: () => void;
    }[];
    onSelectAll: (selected: any, selectedRows: any, changeRows: any) => void;
    setSelectAll: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    singlePageChange: () => void;
    tableReset: () => void;
};
export default useTableSelectAll;
