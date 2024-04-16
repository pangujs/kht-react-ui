import React from 'react';
import { RangePickerProps } from 'antd/lib/date-picker';
export declare const phoneReg: RegExp;
export declare const integerReg: RegExp;
export declare const setFormRule: (reg: any, errMes?: string) => {
    validator: (_: any, value: any) => Promise<void>;
};
/** 延时执行 */
export declare const waitTime: (time?: number) => Promise<unknown>;
/** 懒加载子节点
 * @param list tree 源数据
 * @param key 节点的 key 值
 * @param children 节点的 children 数据
 * @param deconstruction 开启 children 的覆盖(fasle) 还是 解构(true)？ 默认是 false
 */
export declare const updateTreeData: (list: any[], key: React.Key, children: any[], deconstruction?: boolean, appendType?: boolean) => any[];
/**
 * 查询组装后的 key 值
 * @param tree tree 源数据
 * @param key  组装前的 key 值
 * @returns
 */
export declare const findFormatKeys: (tree: any, key: string[]) => any;
/**
 * 基于原始 Tree 数据，修改 key 值，规则：取上级 key +_+ 当前 key
 * @param tree
 * @param key
 */
export declare const assembleNewKey: (tree: any[], key?: string, parentKey?: string, useSpll?: boolean) => void;
/**
 * 数组对象合并去重
 * @param arrOne  数组 1
 * @param arrTwo 数据 2
 * @param key 去重的属性名  默认是 key
 * @returns
 */
export declare const objArrayRemoval: (arrOne: any, arrTwo: any, key?: string) => never[];
/**
 * 数据组对象去重
 * @param arr
 * @param uniId
 * @returns
 */
export declare function objArrayUnique(arr: any[], uniId: string): any[];
/**
 * 处理继承父节点的 key 值，解决 key 值不唯一的问题
 * @param arr 源数据
 * @param res 需要覆盖的字段
 * @param useSpll 是否开启 组装key值
 */
export declare const handleTreeDataKey: (arr: any, res: {
    id?: string;
    key: string;
}, useSpll?: boolean) => any;
/**
 * 随机生成 11 位字符串
 */
export declare const randomStr: () => string;
/**
 * 查找树的某个节点
 * @param tree 整棵树的数据源
 * @param key 根据 key 值进行递归查询
 */
export declare const searchTreeNode: (tree: any, key: string) => any;
/**
 * 传入整棵树时，需映射 title、key、children
 * @param treeData 数据源
 * @param mapping 映射关系对象
 * @returns treeData
 */
export declare const deepTreeDataMapping: (treeData: unknown[], mapping: {
    title: string;
    key: string;
    children: string;
    canSelect?: ((item: any) => boolean) | undefined;
}) => any;
/**
 * 传入整棵树，查询包含 title 字段的节点
 * @param tree
 * @param label
 * @returns
 */
export declare const loopTreeData: (tree: any, label: string) => any;
/**
 * 传入整棵树，查询出所有的 key 值节点
 * @param tree
 * @returns
 */
export declare const getTreeDataKeys: (tree: any) => any;
/**
 * 传入整棵树，所有节点平铺，返回 一维数组
 * @param tree
 * @returns
 */
export declare const getTreeOneDimensional: (tree: any) => any;
export declare const validateRes: (res: any, showMes?: number) => Promise<unknown>;
type OtherProps = {
    errorCb?: () => void | any;
    successCb?: () => void | any;
    unCode?: boolean;
    fileName?: string;
};
export declare const downFile: (res: any, other?: OtherProps) => Promise<unknown>;
export declare const clearEmptyPro: (data: any) => any;
export declare class AntdConfig {
    static mount: {
        getContainer: () => HTMLElement;
    };
    static selectAllOvertax: (arr: any) => void;
}
/**
 * 导出PDF
 * @param {导出后的文件名} title
 * @param {要导出的dom节点：react使用ref} ele
 */
export declare const exportPDF: (title: any, ele: any) => Promise<void>;
/**
 * 获取当前浏览器版本信息
 * @returns
 */
export declare const getBrowserNameAndVersion: () => {};
/**
 * 版本号比较
 * @returns  -1, 0, 1
 */
export declare const versionStringCompare: (preVersion?: string, lastVersion?: string) => number;
/**
 * 将手机号更改为 隐藏中间，显示前三位 后四位
 * @returns  -1, 0, 1
 */
export declare const changeMobileTxt: (mobile: string) => string;
/**
 * 将一维数组转成 树形结构的数据
 * @param arr 一维数组
 * @param id 映射的 id
 * @param pid 映射的 parentId
 * @param defaultPidValue parentId 的默认值
 * @returns
 */
export declare const arrayToTree: (arr: Array[], id: string, pid: string, defaultPidValue?: string | number) => any;
/**
 * 将对象数据 转成 get 类型的参数
 * @param param {}
 * @returns
 */
export declare const objToQuery: (param: any) => string;
/**
 * 关键字高亮, 区分大小写
 * @param string 原始字符串
 * @param words 关键字，数组类型，可多个关键字
 * @returns ReactNode 节点
 */
export declare const keywordHighlight: (string: string, words: string[]) => React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>;
/**
 * 在身份证号中 取生日
 * @param idCard
 * @returns
 */
export declare const getBirthForIDCard: (idCard: string) => string;
/**
 * 在身份证号中 取性别
 * @param idCard
 * @returns
 */
export declare const getSexForIDCard: (idCard: string) => string;
export declare function getValueFromEvent(e: any): any;
export declare function sizeTostr(value: number): string;
export declare const disabledAfterToday: RangePickerProps['disabledDate'];
export declare const JsonParse: (data: object | [
]) => any;
/**
 * 节流函数
 *
 * @param   {[type]}  func   [func description]
 * @param   {[type]}  delay  [delay description]
 *
 * @return  {[type]}         [return description]
 */
export declare const throttle: (func: (data: any) => void, delay: number) => () => void;
export {};
