/*********** 资产相关接口 ************** */
export declare const getInstitutionalAssetsTree: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getInstitutionalAssetsExtResidentData: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getAdminInstitutionalAssetsTree: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getAdminInstitutionalAssetsExtResidentData: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getInstitutionalAssetsFullName: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/*********** 组织架构相关接口 ************** */
/** 中台 - 获取 部门 */
export declare const getDeptUserTree: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 中台 获取 部门下的人员 ( 已过滤 )*/
export declare const getDeptUserData: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 超管 - 获取 部门 */
export declare const getAdminDeptUserTree: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 超管 - 获取 部门下的人员( 未过滤 ) */
export declare const getAdminDeptFilterUserData: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 超管 - 获取 部门 boss无公司编号*/
export declare const getAdminDeptUserTreeBoss: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 超管 - 获取 部门下的人员( 未过滤 ) boss无公司编号*/
export declare const getAdminDeptFilterUserDataBoss: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 中台 - 模糊搜索 部门 */
export declare const getDeptUserByFuzzyName: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 中台 - 模糊搜索 人员 */
export declare const getDeptUserEmployeeListByFuzzyName: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 超管 - 模糊搜索 部门 */
export declare const getAdminDeptUserByFuzzyName: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 超管 - 模糊搜索 人员 */
export declare const getAdminDeptUserEmployeeListByFuzzyName: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 超管 - 模糊搜索 部门 boss无公司编号*/
export declare const getAdminDeptUserByFuzzyNameBoss: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 超管 - 模糊搜索 人员 boss无公司编号*/
export declare const getAdminDeptUserEmployeeListByFuzzyNameBoss: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/*********** 角色相关接口 ************** */
/** 角色-大类 */
export declare const getLeftRoleByRoleType: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 角色-小类 */
export declare const getLeftRoleList: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/**************************  选择客户相关接口 *********************** */
/** 获取客户列表 */
export declare const getCustomerWxWorkList: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 全选时，获取所有的客户id */
export declare const getCustomerWxWorkIdList: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 根据客户 id 取已打标签 */
export declare const getCustomerTagsListForId: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 获取标签数据 */
export declare const getCustomerTagsList: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/**************************  选择群相关接口 *********************** */
/** 获取客户列表 */
export declare const getGroupListApi: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getGroupAllIdsApi: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getGroupTagTreeApi: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 全选时，获取所有的客户id */
export declare const getGroupIdListApi: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/**************************  业主列表 *********************** */
export declare const getresidentManager: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getCompanyUserList: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getCompanyUserListV2: (data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
/** 自定义接口地址*/
export declare const getCustomerUrlData: (url: string, data: Record<string, unknown>) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentManagerGet: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentProprietorGet: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentFamilyGet: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentTenantGet: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentTenantFamilyGet: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentFamily1Get: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const houseOwnershipGet: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentFamily3Get: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentFamily4Get: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const familyGet: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const houseGet: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const spaceGet: ({ id }: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const dictionaryGet: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const dictionaryGetByType: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentManagerAdd: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentProprietorAdd: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentTenantAdd: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentTenantUpdate: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentFamilyAdd: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentFamilyUpdate: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentTenantFamilyAdd: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const residentTenantFamilyUpdate: (data?: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const propertyManagementList: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getHouseTenantInfoListUser: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const propertyManagementAdd: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const propertyManagementGet: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const propertyManagementUpdate: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const getAccountInfoById: ({ id, type }: {
    id: string;
    type: string;
}) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const tagCategoryPage: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const tagCustomerList: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const pagelistByDeptAndName: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
export declare const moduleCheckPageList: (data: any) => Promise<import("axios").AxiosResponse<{
    code: number;
    message: string;
    result: unknown;
}, any>>;
