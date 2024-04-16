import type { ProColumns } from '@ant-design/pro-components';
import { TableListItem } from '../types';
export default function useBusinessHouseholderState(): {
    typeOptions: {
        tenant: {
            title: string;
            width: number;
            searchInputWidth: number;
        };
        proprietor: {
            title: string;
            width: number;
            searchInputWidth: number;
        };
        family: {
            title: string;
            width: number;
            searchInputWidth: number;
        };
        tenantFamily: {
            title: string;
            width: number;
            searchInputWidth: number;
        };
    };
    initCurrentTableIds: string[];
    setInitCurrentTableIds: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    initTableDataTotal: number;
    setInitTableDataTotal: import("react").Dispatch<import("react").SetStateAction<number>>;
    sourceTableList: object[];
    selectedRowKeys: string[];
    setSelectedRowKeys: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    selectTableRowKeys: string[];
    selectSourceTableList: object[];
    selectCurrentTableIds: string[];
    setSelectCurrentTableIds: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    selectTableTotal: number;
    setSelectTableTotal: import("react").Dispatch<import("react").SetStateAction<number>>;
    setSelectTableRowKeys: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    selectIdList: string[];
    setSelectIdList: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    allAssetDefaultCheckedItems: string[];
    tableColumns: {
        tenant: ProColumns<TableListItem, "text">[];
        proprietor: ProColumns<TableListItem, "text">[];
        family: ProColumns<TableListItem, "text">[];
        tenantFamily: ProColumns<TableListItem, "text">[];
    };
    componentTypeData: {
        single: {
            tenant: ({
                name: string;
                width: number;
                placeholder: string;
                open: boolean;
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: string;
                }[];
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: number;
                }[];
            })[];
            proprietor: ({
                name: string;
                width: number;
                placeholder: string;
                open: boolean;
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: number;
                }[];
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: string;
                }[];
            })[];
            family: ({
                name: string;
                width: number;
                placeholder: string;
                open: boolean;
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: string;
                }[];
            })[];
            tenantFamily: ({
                name: string;
                width: number;
                placeholder: string;
                open: boolean;
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: string;
                }[];
            })[];
        };
        multiple: {
            tenant: ({
                name: string;
                width: number;
                placeholder: string;
                open: boolean;
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: string;
                }[];
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: number;
                }[];
            })[];
            proprietor: ({
                name: string;
                width: number;
                placeholder: string;
                open: boolean;
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: number;
                }[];
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: string;
                }[];
            })[];
            family: ({
                name: string;
                width: number;
                placeholder: string;
                open: boolean;
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: string;
                }[];
            })[];
            tenantFamily: ({
                name: string;
                width: number;
                placeholder: string;
                open: boolean;
            } | {
                name: string;
                width: number;
                placeholder: string;
                options: {
                    label: string;
                    value: string;
                }[];
            })[];
        };
    };
};
