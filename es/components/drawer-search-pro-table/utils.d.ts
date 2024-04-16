export declare const useTableSelect: ({ initSelectedRowKeys, setInitSelectedRowKeys, allSelectTableRowKeys, setAllSelectTableRowKeys, }: any) => {
    setAllSelectRowKeys: (data: [], searchData?: object | any) => void;
    cancelSingleSelectKey: (rowKeyData: string) => void;
    setInitTableSelectedKeysData: (initSelectedKeys?: string[], initTableCurrentKeys?: string[], currentPageKeys?: []) => void;
};
